// Note: Removed edge runtime for Supabase compatibility

import { NextRequest, NextResponse } from 'next/server';
import { headers } from 'next/headers';
import Stripe from 'stripe';
import { db } from '@/app/lib/stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || 'sk_test_51ABC123def456', {
  apiVersion: '2025-09-30.clover',
});

const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET || 'whsec_test_webhook_secret_here';

export async function POST(request: NextRequest) {
  console.log('🚀 Webhook received - starting processing (v2.3)');

  try {
    console.log('📨 Parsing request...');
    const body = await request.text();
    const headersList = await headers();
    const sig = headersList.get('stripe-signature')!;

    console.log('🔍 Environment check - STRIPE_WEBHOOK_SECRET:', !!process.env.STRIPE_WEBHOOK_SECRET);
    console.log('🔍 Environment check - STRIPE_SECRET_KEY:', !!process.env.STRIPE_SECRET_KEY);
    console.log('🔍 Webhook secret value check:', process.env.STRIPE_WEBHOOK_SECRET ? 'Set' : 'NOT SET');

    console.log('🔐 Verifying webhook signature...');
    console.log('🔐 Signature received:', sig ? 'Present' : 'Missing');
    const event = await stripe.webhooks.constructEventAsync(body, sig, endpointSecret);
    console.log('✅ Signature verification successful - Event:', event.type);

    // Handle the event
    switch (event.type) {
      case 'payment_intent.succeeded':
        console.log('💳 Processing successful payment');
        const paymentIntent = event.data.object as Stripe.PaymentIntent;

        const serviceRequestId = paymentIntent.metadata.serviceRequestId;
        console.log('🔍 Service Request ID:', serviceRequestId);

        if (!serviceRequestId) {
          console.error('❌ Missing serviceRequestId in payment metadata');
          return NextResponse.json({ error: 'Missing service request ID' }, { status: 400 });
        }

        // Get service request
        console.log('🗄️ Fetching service request from database...');
        console.log('🔍 Looking for ID:', serviceRequestId);

        let serviceRequest;
        try {
          serviceRequest = await db.getServiceRequest(serviceRequestId);
          console.log('📋 Service request result:', serviceRequest ? 'Found' : 'Not found');
        } catch (dbError) {
          console.error('❌ Database query failed:', dbError);
          throw new Error(`Database error: ${dbError instanceof Error ? dbError.message : 'Unknown DB error'}`);
        }

        if (!serviceRequest) {
          console.error('❌ Service request not found:', serviceRequestId);
          // Try to list all repairs to debug
          try {
            const allRepairs = await db.getAllRequests();
            console.log('📋 All repairs in DB:', allRepairs.length, 'records');
            console.log('📋 Sample IDs:', allRepairs.slice(0, 3).map(r => r.id));
          } catch (dbError) {
            console.error('❌ Database list error:', dbError);
          }
          return NextResponse.json({ error: 'Service request not found' }, { status: 404 });
        }

        console.log('👤 Processing for:', serviceRequest.customer_email);

        // Generate shipping label
        console.log('📦 Generating shipping label...');

        const fromAddress = {
          name: serviceRequest.customer_name,
          street1: serviceRequest.shipping_address.street1,
          city: serviceRequest.shipping_address.city,
          state: serviceRequest.shipping_address.state,
          zip: serviceRequest.shipping_address.zip,
          country: 'US'
        };

        console.log('📦 From address:', fromAddress);

        const { createShippingLabel } = await import('../../../lib/shippo');
        console.log('📦 Shippo function imported');

        let labelResult;
        try {
          labelResult = await createShippingLabel(fromAddress, 'usps_priority');
          console.log('📦 Label result:', labelResult ? 'Success' : 'Failed');
        } catch (shippoError) {
          console.error('❌ Shippo API failed:', shippoError);
          throw new Error(`Shippo error: ${shippoError instanceof Error ? shippoError.message : 'Unknown Shippo error'}`);
        }

        if (!labelResult.label_url || !labelResult.tracking_number) {
          throw new Error('Invalid shipping label data from Shippo');
        }

        console.log('✅ Label created - Tracking:', labelResult.tracking_number);

        // Update database
        console.log('💾 Updating database...');
        try {
          await db.updateServiceRequest(serviceRequestId, {
            paymentStatus: 'paid',
            status: 'SHIPPING_LABEL_GENERATED',
            stripePaymentId: paymentIntent.id,
            shippingLabelUrl: labelResult.label_url,
            trackingNumber: labelResult.tracking_number,
            shippingCost: parseFloat(labelResult.rate.amount),
            shippingProvider: labelResult.rate.service,
            updatedAt: new Date(),
          });
          console.log('✅ Database updated successfully');
        } catch (updateError) {
          console.error('❌ Database update failed:', updateError);
          throw new Error(`Database update error: ${updateError instanceof Error ? updateError.message : 'Unknown update error'}`);
        }

        // Send email
        console.log('📧 Sending email...');
        try {
          const { sendShippingLabelEmail } = await import('../../../lib/email');

          let pdfBuffer: Buffer;
          if (labelResult.label_url.includes('shippo-test-label.example.com')) {
            // Test mode: use custom PDF
            console.log('🧪 Using custom PDF for test mode');
            const { generateShippingLabel, createShippingLabelData } = await import('../../../lib/shipping-label');
            const labelData = createShippingLabelData(serviceRequest);
            pdfBuffer = await generateShippingLabel(labelData);
          } else {
            // Production: fetch real PDF
            console.log('🏷️ Fetching real PDF from Shippo');
            const response = await fetch(labelResult.label_url);
            if (!response.ok) throw new Error(`Failed to fetch PDF: ${response.status}`);
            pdfBuffer = Buffer.from(await response.arrayBuffer());
          }

          await sendShippingLabelEmail({
            customerName: serviceRequest.customer_name,
            customerEmail: serviceRequest.customer_email,
            serviceNumber: serviceRequest.service_number,
            trackingNumber: labelResult.tracking_number,
            shippingLabelPdf: pdfBuffer,
            deviceType: serviceRequest.device_type,
            issue: serviceRequest.issue_description || 'Device repair',
          });
          console.log('✅ Email sent successfully');
        } catch (emailError) {
          console.error('❌ Email sending failed:', emailError);
          throw new Error(`Email error: ${emailError instanceof Error ? emailError.message : 'Unknown email error'}`);
        }

        console.log('✅ Webhook processing complete');
        break;

      case 'payment_intent.payment_failed':
        console.log('❌ Processing failed payment');
        const failedPaymentIntent = event.data.object as Stripe.PaymentIntent;
        const failedServiceRequestId = failedPaymentIntent.metadata.serviceRequestId;

        if (failedServiceRequestId) {
          await db.updateServiceRequest(failedServiceRequestId, {
            paymentStatus: 'failed',
            updatedAt: new Date(),
          });
          console.log('💾 Marked payment as failed');
        }
        break;

      default:
        console.log('⚠️ Unhandled event type:', event.type);
    }

    return NextResponse.json({ received: true });

  } catch (error) {
    console.error('💥 Webhook processing failed:', error);
    console.error('💥 Error type:', typeof error);
    console.error('💥 Error constructor:', error?.constructor?.name);
    console.error('💥 Error details:', error instanceof Error ? error.message : 'Non-Error object thrown');
    console.error('💥 Full error object:', JSON.stringify(error, null, 2));

    // Return a more specific error message
    let errorMessage = 'Unknown webhook processing error';
    if (error instanceof Error) {
      errorMessage = error.message;
    } else if (typeof error === 'string') {
      errorMessage = error;
    } else if (error && typeof error === 'object') {
      errorMessage = JSON.stringify(error);
    }

    return NextResponse.json(
      {
        error: 'Webhook processing failed',
        details: errorMessage,
        timestamp: new Date().toISOString()
      },
      { status: 500 }
    );
  }
}