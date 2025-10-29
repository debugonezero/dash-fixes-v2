export const runtime = 'edge';

import { NextRequest, NextResponse } from 'next/server';
import { generateShippingLabel, createShippingLabelData } from '@/app/lib/shipping-label';

export async function POST() {
  try {
    const mockServiceRequest = {
      serviceNumber: 'TEST123456',
      customerName: 'John Doe',
      customerEmail: 'john@example.com',
      deviceType: 'iPhone 12',
      issue: 'Screen replacement',
      shippingAddress: {
        street1: '123 Main St',
        city: 'Los Angeles',
        state: 'CA',
        zip: '90210'
      }
    };

    console.log('Creating shipping label data...');
    const labelData = createShippingLabelData(mockServiceRequest);
    console.log('Label data:', labelData);

    console.log('Generating PDF...');
    const pdfBuffer = await generateShippingLabel(labelData);

    console.log('PDF generated successfully, size:', pdfBuffer.length, 'bytes');

    return new NextResponse(pdfBuffer as any, {
      status: 200,
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename="test-shipping-label.pdf"'
      }
    });

  } catch (error) {
    console.error('Shipping label test error:', error);
    return NextResponse.json({
      error: 'Failed to generate shipping label',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
}