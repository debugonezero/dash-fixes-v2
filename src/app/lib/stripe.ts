import { loadStripe } from '@stripe/stripe-js';
import { PrismaClient } from '@prisma/client';

// Initialize Stripe with your publishable key
// This will be set in environment variables
// For development/testing, use a fallback if env var is not set
const stripePublishableKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || 'pk_test_51ABC123def456';

// Always use test mode for development to avoid live charges
const isProduction = process.env.NODE_ENV === 'production';
const finalStripeKey = isProduction
  ? stripePublishableKey
  : 'pk_test_51ABC123def456'; // Always use test key in development

// Only throw error in production
if (!stripePublishableKey && process.env.NODE_ENV === 'production') {
  throw new Error('NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY is not set');
}

// Load Stripe.js
export const stripePromise = loadStripe(finalStripeKey);

// Initialize Prisma client (only if DATABASE_URL is configured)
let prisma: PrismaClient | null = null;

if (process.env.DATABASE_URL) {
  try {
    const globalForPrisma = globalThis as unknown as {
      prisma: PrismaClient | undefined;
    };

    prisma = globalForPrisma.prisma ?? new PrismaClient();

    if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;
  } catch (error) {
    console.warn('Database not configured, using in-memory storage:', error);
    prisma = null;
  }
}

// Stripe configuration
export const STRIPE_CONFIG = {
  // Diagnostic fee - $9.99 (covers initial assessment and round-trip shipping)
  DIAGNOSTIC_FEE: 999, // Amount in cents ($9.99)
  CURRENCY: 'usd',
  PRODUCT_NAME: 'Device Diagnostic & Shipping',
  PRODUCT_DESCRIPTION: 'Initial diagnostic fee + round-trip shipping (repair costs separate)',
};

// Repair pricing formulas
export const REPAIR_PRICING: {
  PARTS: Record<string, number>;
  SERVICE_FEES: Record<string, number>;
  calculateRepairCost: (partType: string, serviceType: string) => number;
  formatPrice: (cents: number) => string;
} = {
  // Base parts costs (can be adjusted based on specific models)
  PARTS: {
    SCREEN_REPLACEMENT: 1500, // $15.00
    BATTERY_REPLACEMENT: 800,  // $8.00
    BACK_HOUSING: 2500,       // $25.00
    CHARGING_PORT: 1200,      // $12.00
    SPEAKER: 1000,           // $10.00
  },

  // Service fees
  SERVICE_FEES: {
    SCREEN_REPLACEMENT: 5000, // $50.00
    BATTERY_REPLACEMENT: 4000, // $40.00
    BACK_HOUSING: 10000,      // $100.00
    CHARGING_PORT: 6000,      // $60.00
    SPEAKER: 3000,           // $30.00
  },

  // Calculate total repair cost
  calculateRepairCost: (partType: string, serviceType: string) => {
    const partCost = REPAIR_PRICING.PARTS[partType] || 0;
    const serviceCost = REPAIR_PRICING.SERVICE_FEES[serviceType] || 0;
    return partCost + serviceCost; // Total in cents
  },

  // Format price for display
  formatPrice: (cents: number) => {
    return (cents / 100).toFixed(2);
  }
};

// Generate service number
function generateServiceNumber(): string {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  let result = '';
  for (let i = 0; i < 8; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

// Prisma-based database functions
export const db = {
  createServiceRequest: async (data: {
    deviceType: string;
    serviceType: string;
    issueDescription: string;
    customerName: string;
    customerEmail: string;
    shippingAddress: {
      street1: string;
      city: string;
      state: string;
      zip: string;
      country?: string;
    };
    paymentAmount: number;
    paymentStatus?: string;
    status?: string;
  }) => {
    const serviceNumber = generateServiceNumber();
    const request = await prisma.serviceRequest.create({
      data: {
        serviceNumber,
        deviceType: data.deviceType,
        serviceType: data.serviceType,
        issueDescription: data.issueDescription,
        customerName: data.customerName,
        customerEmail: data.customerEmail,
        shippingAddress: data.shippingAddress,
        paymentAmount: data.paymentAmount,
        paymentStatus: data.paymentStatus || 'pending',
        status: data.status || 'PENDING',
      },
    });
    return request;
  },

  findServiceRequest: async (serviceNumber: string) => {
    return await prisma.serviceRequest.findUnique({
      where: { serviceNumber },
    });
  },

  getServiceRequest: async (id: string) => {
    return await prisma.serviceRequest.findUnique({
      where: { id },
    });
  },

  updateServiceRequest: async (id: string, updates: Partial<{
    paymentStatus: string;
    status: string;
    stripePaymentId: string;
    shippingLabelUrl?: string;
    trackingNumber?: string;
    shippingCost?: number;
    shippingProvider?: string;
    updatedAt: Date;
    completedAt: Date;
  }>) => {
    return await prisma.serviceRequest.update({
      where: { id },
      data: updates,
    });
  },

  getAllRequests: async () => {
    return await prisma.serviceRequest.findMany({
      orderBy: { createdAt: 'desc' },
    });
  },
};