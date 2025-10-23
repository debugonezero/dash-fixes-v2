import { NextRequest, NextResponse } from 'next/server';
import { headers } from 'next/headers';
import Stripe from 'stripe';
import { db } from '@/app/lib/stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || 'sk_test_51ABC123def456', {
  apiVersion: '2025-09-30.clover',
});

const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET || 'whsec_test_webhook_secret';

export async function POST(request: NextRequest) {
  try {
    const body = await request.text();
    const headersList = await headers();
    const sig = headersList.get('stripe-signature')!;

    let event: Stripe.Event;

    try {
      event = stripe.webhooks.constructEvent(body, sig, endpointSecret);
    } catch (err: unknown) {
      const error = err as Error;
      console.error(`Webhook signature verification failed.`, error.message);
      return NextResponse.json({ error: 'Webhook error' }, { status: 400 });
    }

    // Handle the event
    switch (event.type) {
      case 'payment_intent.succeeded':
        const paymentIntent = event.data.object as Stripe.PaymentIntent;

        // Update service request status
        const serviceRequestId = paymentIntent.metadata.serviceRequestId;
        if (serviceRequestId) {
          await db.updateServiceRequest(parseInt(serviceRequestId), {
            paymentStatus: 'paid',
            status: 'PAID',
            stripePaymentId: paymentIntent.id,
            updatedAt: new Date(),
          });

          console.log(`Payment succeeded for service request ${serviceRequestId}`);
        }
        break;

      case 'payment_intent.payment_failed':
        const failedPaymentIntent = event.data.object as Stripe.PaymentIntent;

        // Update service request status
        const failedServiceRequestId = failedPaymentIntent.metadata.serviceRequestId;
        if (failedServiceRequestId) {
          await db.updateServiceRequest(parseInt(failedServiceRequestId), {
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
      { error: 'Webhook handler failed' },
      { status: 500 }
    );
  }
}