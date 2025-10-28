export const runtime = 'edge';

import { NextRequest, NextResponse } from 'next/server';
import { sendTestEmail } from '@/app/lib/email';

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json({ error: 'Email address is required' }, { status: 400 });
    }

    await sendTestEmail(email);

    return NextResponse.json({
      success: true,
      message: 'Test email sent successfully!'
    });

  } catch (error) {
    console.error('Test email error:', error);
    return NextResponse.json({
      error: 'Failed to send test email',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
}