export const runtime = 'edge';

import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '', {
  apiVersion: '2025-09-30.clover',
});

export async function GET() {
  return NextResponse.json({
    environment: {
      hasStripeSecret: !!process.env.STRIPE_SECRET_KEY,
      hasWebhookSecret: !!process.env.STRIPE_WEBHOOK_SECRET,
      hasShippoKey: !!process.env.SHIPPO_API_KEY,
      stripeMode: process.env.STRIPE_SECRET_KEY?.startsWith('sk_live') ? 'live' : 'test',
      webhookSecretLength: process.env.STRIPE_WEBHOOK_SECRET?.length || 0,
    },
    timestamp: new Date().toISOString()
  });
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.text();
    const sig = request.headers.get('stripe-signature')!;
    const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET!;

    // Test signature verification
    const event = stripe.webhooks.constructEvent(body, sig, endpointSecret);

    return NextResponse.json({
      success: true,
      eventType: event.type,
      verified: true
    });
  } catch (error: any) {
    return NextResponse.json({
      success: false,
      error: error.message,
      type: 'signature_verification_failed'
    }, { status: 400 });
  }
}