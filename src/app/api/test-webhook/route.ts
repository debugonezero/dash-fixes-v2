import { NextResponse } from 'next/server';
import { db } from '@/app/lib/stripe';

export async function GET() {
  try {
    // Test database connection
    console.log('🧪 Testing database connection...');
    const repairs = await db.getAllRequests();
    console.log('📋 Found', repairs.length, 'repairs in database');

    // Test Shippo import
    console.log('📦 Testing Shippo import...');
    const { createShippingLabel } = await import('../../lib/shippo');
    console.log('✅ Shippo import successful');

    // Test email import
    console.log('📧 Testing email import...');
    const { sendShippingLabelEmail } = await import('../../lib/email');
    console.log('✅ Email import successful');

    return NextResponse.json({
      status: 'success',
      message: 'All webhook dependencies working!',
      database: {
        connection: 'ok',
        repairsCount: repairs.length,
        latestRepair: repairs[0]?.id || 'none'
      },
      shippo: 'ok',
      email: 'ok',
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    console.error('❌ Test failed:', error);
    return NextResponse.json({
      status: 'error',
      message: 'Test failed',
      error: error instanceof Error ? error.message : 'Unknown error',
      timestamp: new Date().toISOString(),
    }, { status: 500 });
  }
}