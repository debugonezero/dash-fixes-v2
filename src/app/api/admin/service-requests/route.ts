export const runtime = 'edge';

import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/app/lib/stripe';

export async function GET() {
  try {
    const requests = await db.getAllRequests();
    return NextResponse.json(requests);
  } catch (error) {
    console.error('Failed to fetch service requests:', error);
    return NextResponse.json(
      { error: 'Failed to fetch service requests' },
      { status: 500 }
    );
  }
}

export async function PATCH(request: NextRequest) {
  try {
    const { id, status } = await request.json();

    if (!id || !status) {
      return NextResponse.json(
        { error: 'Missing id or status' },
        { status: 400 }
      );
    }

    await db.updateServiceRequest(id, { status });
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Failed to update service request:', error);
    return NextResponse.json(
      { error: 'Failed to update service request' },
      { status: 500 }
    );
  }
}