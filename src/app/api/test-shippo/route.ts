export const runtime = 'edge';

import { NextRequest, NextResponse } from 'next/server';
import { Shippo } from 'shippo';

const shippo = new Shippo({
  apiKeyHeader: process.env.SHIPPO_API_KEY || 'shippo_test_placeholder_key'
});

export async function GET() {
  try {
    console.log('🧪 Testing Shippo API connection...');
    console.log('🔑 API Key available:', !!process.env.SHIPPO_API_KEY);
    console.log('🔑 API Key starts with:', process.env.SHIPPO_API_KEY?.substring(0, 10) + '...');

    // Test basic address creation (from Shippo quickstart)
    const addressFrom = await shippo.addresses.create({
      name: "Shawn Ippotle",
      company: "Shippo",
      street1: "215 Clayton St.",
      city: "San Francisco",
      state: "CA",
      zip: "94117",
      country: "US",
      phone: "+1 555 341 9393",
      email: "shippotle@shippo.com",
    });

    console.log('✅ Shippo API test successful!');
    console.log('📍 Created address:', addressFrom.objectId);

    return NextResponse.json({
      success: true,
      message: 'Shippo API connection successful',
      addressId: addressFrom.objectId,
      isComplete: addressFrom.isComplete,
      environment: {
        hasApiKey: !!process.env.SHIPPO_API_KEY,
        apiKeyPrefix: process.env.SHIPPO_API_KEY?.startsWith('shippo_test') ? 'test' : 'live'
      }
    });

  } catch (error: any) {
    console.error('❌ Shippo API test failed:', error);

    return NextResponse.json({
      success: false,
      error: error.message,
      details: error.response?.data || 'No additional details',
      environment: {
        hasApiKey: !!process.env.SHIPPO_API_KEY,
        apiKeyPrefix: process.env.SHIPPO_API_KEY?.startsWith('shippo_test') ? 'test' : 'live'
      }
    }, { status: 500 });
  }
}