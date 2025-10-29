

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

    // Create service request in database (no payment required)
    const serviceRequest = await db.createServiceRequest({
      deviceType,
      serviceType,
      issueDescription,
      customerName,
      customerEmail,
      shippingAddress,
      paymentAmount: 0, // Free submission
      paymentStatus: 'completed', // No payment needed
    });

    // Send shipping instructions email
    try {
      const { sendShippingInstructionsEmail } = await import('../../lib/email');

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
      // Don't fail the request, just log the error
    }

    // Skip Stripe payment - direct to shipping instructions
    return NextResponse.json({
      clientSecret: null, // No payment needed
      serviceNumber: serviceRequest.service_number,
      serviceRequestId: serviceRequest.id,
      skipPayment: true, // Flag to skip payment step
    });

  } catch (error) {
    console.error('Service request creation error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}