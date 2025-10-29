

export const runtime = 'edge';

import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';
import { db } from '@/app/lib/stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || 'sk_test_51ABC123def456', {
  apiVersion: '2025-09-30.clover',
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      deviceType,
      serviceType,
      issueDescription,
      customerName,
      customerEmail,
      shippingAddress,
    } = body;

    // Validate required fields
    if (!deviceType || !serviceType || !customerName || !customerEmail || !shippingAddress) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Create service request in memory (no database needed for testing)
    const serviceRequest = {
      id: 'test-' + Date.now(),
      serviceNumber: 'TEST' + Math.random().toString(36).substr(2, 6).toUpperCase(),
      deviceType,
      serviceType,
      issueDescription,
      customerName,
      customerEmail,
      shippingAddress,
      paymentAmount: 9.99,
      paymentStatus: 'pending',
    };
    // const serviceRequest = await db.createServiceRequest({
    //   deviceType,
    //   serviceType,
    //   issueDescription,
    //   customerName,
    //   customerEmail,
    //   shippingAddress,
    //   paymentAmount: 9.99, // $9.99 for round-trip shipping label
    //   paymentStatus: 'pending',
    // });

    // Create Stripe PaymentIntent
    const paymentIntent = await stripe.paymentIntents.create({
      amount: 999, // $9.99 in cents
      currency: 'usd',
      metadata: {
        serviceRequestId: serviceRequest.id,
        serviceNumber: serviceRequest.serviceNumber,
        customerEmail: customerEmail,
      },
      description: `Shipping Label Fee - Service #${serviceRequest.serviceNumber}`,
      receipt_email: customerEmail,
    });

    return NextResponse.json({
      clientSecret: paymentIntent.client_secret,
      serviceNumber: serviceRequest.serviceNumber,
      serviceRequestId: serviceRequest.id,
    });

  } catch (error) {
    console.error('Payment intent creation error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}