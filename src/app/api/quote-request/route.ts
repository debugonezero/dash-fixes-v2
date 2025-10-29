import { NextRequest, NextResponse } from 'next/server';
import { sendQuoteRequestEmail } from '@/app/lib/email';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      customerName,
      customerEmail,
      deviceType,
      serviceType,
      issueDescription,
      shippingAddress
    } = body;

    // Validate required fields
    if (!customerName || !customerEmail || !deviceType || !serviceType || !issueDescription) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Send quote request email to admin
    await sendQuoteRequestEmail({
      customerName,
      customerEmail,
      deviceType,
      serviceType,
      issueDescription,
      shippingAddress
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Quote request error:', error);
    return NextResponse.json(
      { error: 'Failed to send quote request' },
      { status: 500 }
    );
  }
}