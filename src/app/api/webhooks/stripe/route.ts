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
          // Get service request details for shipping
          const serviceRequest = await db.getServiceRequest(parseInt(serviceRequestId));

          if (serviceRequest) {
            // Generate shipping label
            try {
              const fromAddress: ShippingAddress = {
                name: serviceRequest.customerName,
                street1: serviceRequest.shippingAddress.street1,
                city: serviceRequest.shippingAddress.city,
                state: serviceRequest.shippingAddress.state,
                zip: serviceRequest.shippingAddress.zip,
                country: serviceRequest.shippingAddress.country || 'US'
              };

              const shippingLabel = await createShippingLabel(fromAddress, 'usps_priority');

              // Update service request with shipping info
              await db.updateServiceRequest(parseInt(serviceRequestId), {
                paymentStatus: 'paid',
                status: 'SHIPPING_LABEL_GENERATED',
                stripePaymentId: paymentIntent.id,
                shippingLabelUrl: shippingLabel.label_url,
                trackingNumber: shippingLabel.tracking_number,
                shippingCost: parseFloat(shippingLabel.rate.amount),
                shippingProvider: shippingLabel.rate.service,
                updatedAt: new Date(),
              });

              console.log(`Payment succeeded and shipping label generated for service request ${serviceRequestId}`);
              console.log(`Tracking: ${shippingLabel.tracking_number}, Label: ${shippingLabel.label_url}`);

            } catch (shippingError) {
              console.error('Error generating shipping label:', shippingError);

              // Still mark as paid but note shipping error
              await db.updateServiceRequest(parseInt(serviceRequestId), {
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