import { loadStripe } from '@stripe/stripe-js';
import { supabase } from './supabase';

// Initialize Stripe with your publishable key
const stripePublishableKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY;

// Validate Stripe key is configured
if (!stripePublishableKey) {
  throw new Error('NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY environment variable is required');
}

// Use the configured key (should be test key for development, live key for production)
const finalStripeKey = stripePublishableKey;

// Load Stripe.js
export const stripePromise = loadStripe(finalStripeKey);

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

// Supabase-based database functions
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
    const { data: request, error } = await supabase
      .from('service_requests')
      .insert({
        service_number: serviceNumber,
        device_type: data.deviceType,
        service_type: data.serviceType,
        issue_description: data.issueDescription,
        customer_name: data.customerName,
        customer_email: data.customerEmail,
        shipping_address: data.shippingAddress,
        payment_amount: data.paymentAmount,
        payment_status: data.paymentStatus || 'pending',
        status: (data.status || 'PENDING') as any,
      })
      .select()
      .single();

    if (error) throw error;
    return request;
  },

  findServiceRequest: async (serviceNumber: string) => {
    const { data, error } = await supabase
      .from('service_requests')
      .select('*')
      .eq('service_number', serviceNumber)
      .single();

    if (error && error.code !== 'PGRST116') throw error; // PGRST116 = not found
    return data;
  },

  getServiceRequest: async (id: string) => {
    const { data, error } = await supabase
      .from('service_requests')
      .select('*')
      .eq('id', id)
      .single();

    if (error && error.code !== 'PGRST116') throw error;
    return data;
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
    const updateData: any = {};

    if (updates.paymentStatus) updateData.payment_status = updates.paymentStatus;
    if (updates.status) updateData.status = updates.status;
    if (updates.stripePaymentId) updateData.stripe_payment_id = updates.stripePaymentId;
    if (updates.shippingLabelUrl) updateData.shipping_label_url = updates.shippingLabelUrl;
    if (updates.trackingNumber) updateData.tracking_number = updates.trackingNumber;
    if (updates.shippingCost) updateData.shipping_cost = updates.shippingCost;
    if (updates.shippingProvider) updateData.shipping_provider = updates.shippingProvider;
    if (updates.updatedAt) updateData.updated_at = updates.updatedAt;
    if (updates.completedAt) updateData.completed_at = updates.completedAt;

    const { data, error } = await supabase
      .from('service_requests')
      .update(updateData)
      .eq('id', id)
      .select()
      .single();

    if (error) throw error;
    return data;
  },

  getAllRequests: async () => {
    const { data, error } = await supabase
      .from('service_requests')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) throw error;
    return data;
  },
};