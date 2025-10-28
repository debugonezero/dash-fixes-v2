export const runtime = 'edge';

import { NextRequest, NextResponse } from 'next/server';
import { headers } from 'next/headers';
import Stripe from 'stripe';
import { db } from '@/app/lib/stripe';
import { createShippingLabel, ShippingAddress } from '@/app/lib/shippo';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || 'sk_test_51ABC123def456', {
  apiVersion: '2025-09-30.clover',
});

const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET || 'whsec_test_webhook_secret_here';

export async function POST(request: NextRequest) {
  try {
    console.log('🚀 Webhook received - starting processing (v2.1)');

    const body = await request.text();
    const headersList = await headers();
    const sig = headersList.get('stripe-signature')!;

    console.log('🔍 Checking environment variables...');
    console.log('Has STRIPE_WEBHOOK_SECRET:', !!process.env.STRIPE_WEBHOOK_SECRET);
    console.log('Webhook secret length:', process.env.STRIPE_WEBHOOK_SECRET?.length || 0);
    console.log('Has STRIPE_SECRET_KEY:', !!process.env.STRIPE_SECRET_KEY);
    console.log('Stripe mode:', process.env.STRIPE_SECRET_KEY?.startsWith('sk_live') ? 'live' : 'test');

    let event: Stripe.Event;

    try {
      console.log('🔐 Attempting signature verification...');
      event = await stripe.webhooks.constructEventAsync(body, sig, endpointSecret);
      console.log('✅ Signature verification successful');
    } catch (err: unknown) {
      const error = err as Error;
      console.error(`❌ Webhook signature verification failed:`, error.message);
      console.error('Full error:', err);
      return NextResponse.json({
        error: 'Webhook signature verification failed',
        details: error.message,
        debug: {
          hasWebhookSecret: !!process.env.STRIPE_WEBHOOK_SECRET,
          secretLength: process.env.STRIPE_WEBHOOK_SECRET?.length || 0,
          hasStripeKey: !!process.env.STRIPE_SECRET_KEY,
          stripeMode: process.env.STRIPE_SECRET_KEY?.startsWith('sk_live') ? 'live' : 'test'
        }
      }, { status: 400 });
    }

    // Handle the event
    switch (event.type) {
      case 'payment_intent.succeeded':
        const paymentIntent = event.data.object as Stripe.PaymentIntent;

        // Update service request status
        const serviceRequestId = paymentIntent.metadata.serviceRequestId;
        console.log('🔍 Service Request ID from metadata:', serviceRequestId);

        if (serviceRequestId) {
          // Get service request details for shipping
          console.log('🗄️ Looking up service request in database...');
          const serviceRequest = await db.getServiceRequest(serviceRequestId);
          console.log('📋 Service request found:', !!serviceRequest);

          if (serviceRequest) {
            console.log('👤 Customer details:', {
              name: serviceRequest.customerName,
              email: serviceRequest.customerEmail,
              device: serviceRequest.deviceType
            });
            // Generate shipping label (PDF)
            try {
              console.log('📦 Starting shipping label generation...');

              const { generateShippingLabel, createShippingLabelData } = await import('../../../lib/shipping-label');
              const labelData = createShippingLabelData(serviceRequest);
              const pdfBuffer = await generateShippingLabel(labelData);

              console.log('✅ Shipping label PDF generated successfully');
              console.log('📮 Tracking number:', labelData.trackingNumber);

              // Store PDF in a temporary location (in production, you'd upload to cloud storage)
              // For now, we'll store the tracking info and send email with instructions
              const labelUrl = `https://dashfixes.com/track/${serviceRequest.serviceNumber}`;

              // Update service request with shipping info
              await db.updateServiceRequest(serviceRequestId, {
                paymentStatus: 'paid',
                status: 'SHIPPING_LABEL_GENERATED',
                stripePaymentId: paymentIntent.id,
                shippingLabelUrl: labelUrl,
                trackingNumber: labelData.trackingNumber,
                shippingCost: 9.99,
                shippingProvider: 'USPS Priority',
                updatedAt: new Date(),
              });

              console.log(`🎉 Payment succeeded and shipping label generated for service request ${serviceRequestId}`);
              console.log(`📮 Tracking: ${labelData.trackingNumber}, Label: ${labelUrl}`);

              // Send email with shipping label
              console.log('📧 Starting email sending process...');
              try {
                const { sendShippingLabelEmail } = await import('../../../lib/email');
                console.log('📧 Email service imported successfully');

                console.log('📧 Sending email with PDF attachment to:', serviceRequest.customerEmail);
                await sendShippingLabelEmail({
                  customerName: serviceRequest.customerName,
                  customerEmail: serviceRequest.customerEmail,
                  serviceNumber: serviceRequest.serviceNumber,
                  trackingNumber: labelData.trackingNumber,
                  shippingLabelPdf: pdfBuffer,
                  deviceType: serviceRequest.deviceType,
                  issue: serviceRequest.issueDescription || 'Device repair',
                });

                console.log('✅ Shipping label email sent successfully to:', serviceRequest.customerEmail);

              } catch (emailError) {
                console.error('❌ Failed to send shipping label email:', emailError);
                console.error('❌ Email error details:', {
                  customerEmail: serviceRequest.customerEmail,
                  serviceNumber: serviceRequest.serviceNumber,
                  error: emailError instanceof Error ? emailError.message : 'Unknown email error'
                });
                // Don't fail the webhook for email errors - customer can still get label from tracking page
              }

            } catch (shippingError) {
              console.error('❌ Error generating shipping label:', shippingError);
              console.error('Full shipping error details:', {
                error: shippingError,
                serviceRequestId,
                customerEmail: serviceRequest.customerEmail,
                address: serviceRequest.shippingAddress
              });

              // Still mark as paid but note shipping error
              await db.updateServiceRequest(serviceRequestId, {
                paymentStatus: 'paid',
                status: 'PAID_SHIPPING_ERROR',
                stripePaymentId: paymentIntent.id,
                updatedAt: new Date(),
              });
            }
          }
        }
        break;

      case 'payment_intent.payment_failed':
        const failedPaymentIntent = event.data.object as Stripe.PaymentIntent;

        // Update service request status
        const failedServiceRequestId = failedPaymentIntent.metadata.serviceRequestId;
        if (failedServiceRequestId) {
          await db.updateServiceRequest(failedServiceRequestId, {
            paymentStatus: 'failed',
            updatedAt: new Date(),
          });

          console.log(`Payment failed for service request ${failedServiceRequestId}`);
        }
        break;

      default:
        console.log(`Unhandled event type ${event.type}`);
    }

    return NextResponse.json({ received: true });

  } catch (error) {
    console.error('Webhook error:', error);
    return NextResponse.json(
      { error: `Webhook handler failed: ${error instanceof Error ? error.message : 'Unknown error'}` },
      { status: 500 }
    );
  }
}