 import { NextRequest, NextResponse } from 'next/server';
 import { sendQuoteRequestEmail } from '@/app/lib/email';

// CSV parsing function
function parseCSV(csvText: string) {
  const lines = csvText.trim().split('\n');
  const headers = lines[0].split(',');
  const data = lines.slice(1).map(line => {
    const values = line.split(',');
    const obj: any = {};
    headers.forEach((header, index) => {
      obj[header.trim()] = values[index]?.trim() || '';
    });
    return obj;
  });
  return data;
}

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

// Fetch pricing from Google Sheets
async function getPricingData() {
  try {
    const sheetId = '11ynsOt_TQOqwDhw0zVGm4yXRvTqav81_VwR-685GdOA';
    const csvUrl = `https://docs.google.com/spreadsheets/d/${sheetId}/export?format=csv`;

    const response = await fetch(csvUrl);
    if (!response.ok) throw new Error('Failed to fetch pricing data');

    const csvText = await response.text();
    const data = parseCSV(csvText);

    // Convert to pricing structure
    const pricing: any = {};
    data.forEach((row: any) => {
      const device = row.Device?.toLowerCase();
      const issue = row.Issue;
      const quality = row.Quality?.toLowerCase();
      const price = parseFloat(row.Price) || 0;

      if (device && issue && quality) {
        if (!pricing[device]) pricing[device] = {};
        if (!pricing[device][issue]) pricing[device][issue] = {};
        pricing[device][issue][quality] = price;
      }
    });

    return pricing;
  } catch (error) {
    console.error('Error fetching pricing data:', error);
    // Fallback to hardcoded data
    return pricingData;
  }
}

 export const runtime = 'edge';

function calculateQuote(pricingData: any, deviceType: string, issue: string, quality: string): number | null {
  const devicePricing = pricingData[deviceType];
  if (!devicePricing) return null;

  const issuePricing = devicePricing[issue];
  if (!issuePricing) return null;

  const price = issuePricing[quality];
  return typeof price === 'number' ? price : null;
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

    // Fetch pricing data
    const pricingData = await getPricingData();

    // Calculate quote
    const estimatedPrice = calculateQuote(pricingData, deviceType, issue, quality);

    // Send quote request email to admin with calculated price
    await sendQuoteRequestEmail({
      customerName: name,
      customerEmail: email,
      phone,
      deviceType,
      issue,
      quality,
      issueDescription: description,
      estimatedPrice: estimatedPrice || undefined
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