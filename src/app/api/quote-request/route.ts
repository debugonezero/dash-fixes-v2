 import { NextRequest, NextResponse } from 'next/server';
 import { sendQuoteRequestEmail } from '@/app/lib/email';

 export const runtime = 'edge';

// Pricing data - update this with your CSV data
const pricingData = {
  iphone: {
    'Screen Replacement': { economy: 120, standard: 150, premium: 200 },
    'Battery Replacement': { economy: 60, standard: 80, premium: 100 },
    'Charging Port Repair': { economy: 70, standard: 100, premium: 130 },
    'Water Damage': { economy: 150, standard: 200, premium: 250 },
    'Camera Repair': { economy: 80, standard: 120, premium: 160 },
    'Other': { economy: 50, standard: 75, premium: 100 }
  },
  android: {
    'Screen Replacement': { economy: 90, standard: 120, premium: 160 },
    'Battery Replacement': { economy: 40, standard: 60, premium: 80 },
    'Charging Port Repair': { economy: 60, standard: 90, premium: 110 },
    'Water Damage': { economy: 120, standard: 180, premium: 220 },
    'Camera Repair': { economy: 70, standard: 100, premium: 130 },
    'Other': { economy: 40, standard: 60, premium: 80 }
  },
  macbook: {
    'Screen Replacement': { economy: 250, standard: 300, premium: 400 },
    'Keyboard Replacement': { economy: 150, standard: 200, premium: 250 },
    'Battery Replacement': { economy: 120, standard: 150, premium: 180 },
    'Logic Board Repair': { economy: 300, standard: 400, premium: 500 },
    'Hard Drive Replacement': { economy: 100, standard: 150, premium: 200 },
    'Other': { economy: 80, standard: 120, premium: 160 }
  },
  laptop: {
    'Screen Replacement': { economy: 200, standard: 250, premium: 320 },
    'Keyboard Replacement': { economy: 100, standard: 150, premium: 190 },
    'Battery Replacement': { economy: 80, standard: 120, premium: 150 },
    'Motherboard Repair': { economy: 250, standard: 350, premium: 450 },
    'Hard Drive Replacement': { economy: 80, standard: 120, premium: 160 },
    'Other': { economy: 60, standard: 100, premium: 130 }
  },
  console: {
    'HDMI Port Repair': { economy: 60, standard: 80, premium: 100 },
    'Controller Repair': { economy: 40, standard: 60, premium: 80 },
    'Power Supply Replacement': { economy: 70, standard: 100, premium: 130 },
    'Disc Drive Repair': { economy: 50, standard: 80, premium: 110 },
    'Other': { economy: 40, standard: 60, premium: 80 }
  }
};

function calculateQuote(deviceType: string, issue: string, quality: string): number | null {
  const devicePricing = pricingData[deviceType as keyof typeof pricingData];
  if (!devicePricing) return null;

  const issuePricing = devicePricing[issue as keyof typeof devicePricing];
  if (!issuePricing) return null;

  return issuePricing[quality as keyof typeof issuePricing] || null;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      name,
      email,
      phone,
      deviceType,
      issue,
      quality,
      description
    } = body;

    // Validate required fields
    if (!name || !email || !deviceType || !issue || !quality || !description) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Calculate quote
    const estimatedPrice = calculateQuote(deviceType, issue, quality);

    // Send quote request email to admin with calculated price
    await sendQuoteRequestEmail({
      customerName: name,
      customerEmail: email,
      phone,
      deviceType,
      issue,
      quality,
      description,
      estimatedPrice
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