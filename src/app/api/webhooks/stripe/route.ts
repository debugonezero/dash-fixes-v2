// Note: Using edge runtime for Cloudflare Pages compatibility
// PDF generation may need alternative approach for edge runtime
export const runtime = 'edge';

import { NextRequest, NextResponse } from 'next/server';
import { headers } from 'next/headers';
import Stripe from 'stripe';
import { db } from '@/app/lib/stripe';

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
            // Generate REAL shipping label using Shippo
            try {
              console.log('📦 Starting REAL shipping label generation with Shippo...');
              console.log('🔑 Shippo API Key present:', !!process.env.SHIPPO_API_KEY);
              console.log('🧪 Shippo test mode:', process.env.SHIPPO_API_KEY?.startsWith('shippo_test'));

              const { createShippingLabel } = await import('../../../lib/shippo');

              // Convert service request address to Shippo format
              const fromAddress = {
                name: serviceRequest.customerName,
                street1: serviceRequest.shippingAddress.street1,
                city: serviceRequest.shippingAddress.city,
                state: serviceRequest.shippingAddress.state,
                zip: serviceRequest.shippingAddress.zip,
                country: 'US'
              };

              console.log('📍 From address:', fromAddress);

              // Create real shipping label with Shippo
              console.log('🚀 Calling Shippo createShippingLabel...');
              let labelResult;
              try {
                labelResult = await createShippingLabel(fromAddress, 'usps_priority');
                console.log('📦 Shippo response:', JSON.stringify(labelResult, null, 2));
              } catch (shippoError) {
                console.error('❌ Shippo API call failed:', shippoError);
                console.error('❌ Shippo error details:', shippoError instanceof Error ? shippoError.message : shippoError);
                throw new Error(`Shippo API failed: ${shippoError instanceof Error ? shippoError.message : 'Unknown Shippo error'}`);
              }

              if (!labelResult.label_url || !labelResult.tracking_number) {
                console.error('❌ Shippo returned invalid data:', labelResult);
                throw new Error('Shippo did not return valid label URL or tracking number');
              }

              console.log('✅ REAL shipping label created successfully');
              console.log('📮 Tracking number:', labelResult.tracking_number);
              console.log('🏷️ Label URL:', labelResult.label_url);

              // Update service request with REAL shipping info
              await db.updateServiceRequest(serviceRequestId, {
                paymentStatus: 'paid',
                status: 'SHIPPING_LABEL_GENERATED',
                stripePaymentId: paymentIntent.id,
                shippingLabelUrl: labelResult.label_url, // Real label URL from Shippo
                trackingNumber: labelResult.tracking_number, // Real tracking number
                shippingCost: parseFloat(labelResult.rate.amount),
                shippingProvider: labelResult.rate.service,
                updatedAt: new Date(),
              });

              console.log(`🎉 Payment succeeded and REAL shipping label generated for service request ${serviceRequestId}`);
              console.log(`📮 Tracking: ${labelResult.tracking_number}, Label: ${labelResult.label_url}`);

              // Send email with REAL shipping label
              console.log('📧 Starting email sending process...');
              try {
                const { sendShippingLabelEmail } = await import('../../../lib/email');
                console.log('📧 Email service imported successfully');

                console.log('📧 Sending email with REAL PDF attachment to:', serviceRequest.customerEmail);

                // Fetch the real label PDF from Shippo URL
                let pdfBuffer: Buffer;
                if (labelResult.label_url.includes('shippo-test-label.example.com')) {
                  // Test mode: generate a custom PDF since Shippo test URLs don't work
                  console.log('🧪 TEST MODE: Generating custom PDF for test label');
                  const { generateShippingLabel, createShippingLabelData } = await import('../../../lib/shipping-label');
                  const labelData = createShippingLabelData(serviceRequest);
                  pdfBuffer = await generateShippingLabel(labelData);
                } else {
                  // Production mode: fetch real PDF
                  const labelResponse = await fetch(labelResult.label_url);
                  if (!labelResponse.ok) {
                    throw new Error(`Failed to fetch label PDF: ${labelResponse.status}`);
                  }
                  pdfBuffer = Buffer.from(await labelResponse.arrayBuffer());
                }

                await sendShippingLabelEmail({
                  customerName: serviceRequest.customerName,
                  customerEmail: serviceRequest.customerEmail,
                  serviceNumber: serviceRequest.serviceNumber,
                  trackingNumber: labelResult.tracking_number,
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

               // FALLBACK: Generate custom PDF since Shippo failed
               console.log('📦 FALLBACK: Generating custom PDF since Shippo failed...');
               try {
                 const { generateShippingLabel, createShippingLabelData } = await import('../../../lib/shipping-label');
                 const labelData = createShippingLabelData(serviceRequest);
                 const pdfBuffer = await generateShippingLabel(labelData);

                 console.log('✅ Custom PDF generated as fallback');
                 console.log('📮 Custom tracking number:', labelData.trackingNumber);

                 // Update with custom label info
                 const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://dashfixes.com';
                 const labelUrl = `${baseUrl}/track/${serviceRequest.serviceNumber}`;

                 await db.updateServiceRequest(serviceRequestId, {
                   shippingLabelUrl: labelUrl,
                   trackingNumber: labelData.trackingNumber,
                   shippingCost: 9.99,
                   shippingProvider: 'USPS Priority (Custom)',
                   updatedAt: new Date(),
                 });

                 // Send email with custom PDF
                 const { sendShippingLabelEmail } = await import('../../../lib/email');
                 await sendShippingLabelEmail({
                   customerName: serviceRequest.customerName,
                   customerEmail: serviceRequest.customerEmail,
                   serviceNumber: serviceRequest.serviceNumber,
                   trackingNumber: labelData.trackingNumber,
                   shippingLabelPdf: pdfBuffer,
                   deviceType: serviceRequest.deviceType,
                   issue: serviceRequest.issueDescription || 'Device repair',
                 });
                 console.log('✅ Email sent with custom PDF attachment');
               } catch (fallbackError) {
                 console.error('❌ Fallback PDF generation also failed:', fallbackError);
                 // Send email with no PDF at all
                 try {
                   const { sendShippingLabelEmail } = await import('../../../lib/email');
                   await sendShippingLabelEmail({
                     customerName: serviceRequest.customerName,
                     customerEmail: serviceRequest.customerEmail,
                     serviceNumber: serviceRequest.serviceNumber,
                     trackingNumber: `SERVICE-${serviceRequest.serviceNumber}`,
                     shippingLabelPdf: Buffer.from(''), // Empty buffer
                     deviceType: serviceRequest.deviceType || 'Device',
                     issue: serviceRequest.issueDescription || 'Device repair',
                   });
                   console.log('✅ Email sent with no PDF attachment');
                 } catch (emailError) {
                   console.error('❌ Failed to send any email:', emailError);
                 }
               }
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