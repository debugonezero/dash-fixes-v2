// Note: Using edge runtime for Cloudflare Pages compatibility
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
  console.log('🚀 Webhook received - starting processing (v2.3)');
  console.log('🔧 Environment check - SUPABASE_SERVICE_ROLE_KEY:', !!process.env.SUPABASE_SERVICE_ROLE_KEY);
  console.log('🔧 Environment check - NEXT_PUBLIC_SUPABASE_URL:', !!process.env.NEXT_PUBLIC_SUPABASE_URL);

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

        console.log('🗄️ About to query database...');
        console.log('🗄️ Service Request ID type:', typeof serviceRequestId);
        console.log('🗄️ Service Request ID value:', serviceRequestId);

        let serviceRequest;
        try {
          console.log('🗄️ Calling db.getServiceRequest...');
          serviceRequest = await db.getServiceRequest(serviceRequestId);
          console.log('📋 Service request result:', serviceRequest ? 'Found' : 'Not found');
          if (serviceRequest) {
            console.log('📋 Service request data:', JSON.stringify(serviceRequest, null, 2));
          }
        } catch (dbError) {
          console.error('❌ Database query failed - Error type:', typeof dbError);
          console.error('❌ Database query failed - Error constructor:', dbError?.constructor?.name);
          console.error('❌ Database query failed - Full error:', JSON.stringify(dbError, null, 2));
          throw new Error(`Database error: ${dbError instanceof Error ? dbError.message : 'Unknown DB error'}`);
        }

        if (!serviceRequest) {
          console.error('❌ Service request not found:', serviceRequestId);
          // Try to list all repairs to debug
          try {
            const allRepairs = await db.getAllRequests();
            console.log('📋 All repairs in DB:', allRepairs.length, 'records');
            console.log('📋 Sample IDs:', allRepairs.slice(0, 3).map((r: any) => r.id));
          } catch (dbError) {
            console.error('❌ Database list error:', dbError);
          }
          return NextResponse.json({ error: 'Service request not found' }, { status: 404 });
        }

        console.log('👤 Processing for:', serviceRequest.customer_email);

        // Update database with payment success
        console.log('💾 Updating database with payment success...');
        try {
          await db.updateServiceRequest(serviceRequestId, {
            paymentStatus: 'paid',
            status: 'PAID',
            stripePaymentId: paymentIntent.id,
            updatedAt: new Date(),
          });
          console.log('✅ Database updated successfully');
        } catch (updateError) {
          console.error('❌ Database update failed:', updateError);
          throw new Error(`Database update error: ${updateError instanceof Error ? updateError.message : 'Unknown update error'}`);
        }

        // Send email with shipping instructions
        console.log('📧 Sending shipping instructions email...');
        try {
          const { sendShippingInstructionsEmail } = await import('../../../lib/email');

          await sendShippingInstructionsEmail({
            customerName: serviceRequest.customer_name,
            customerEmail: serviceRequest.customer_email,
            serviceNumber: serviceRequest.service_number,
            deviceType: serviceRequest.device_type,
            issue: serviceRequest.issue_description || 'Device repair',
          });
          console.log('✅ Shipping instructions email sent successfully');
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