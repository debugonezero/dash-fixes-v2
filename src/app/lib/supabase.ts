import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY

if (!supabaseUrl) {
  throw new Error('Missing required Supabase environment variable: NEXT_PUBLIC_SUPABASE_URL')
}

if (!supabaseServiceKey) {
  throw new Error('Missing required Supabase environment variable: SUPABASE_SERVICE_ROLE_KEY')
}

// Create client with proper error handling
export const supabase = createClient(supabaseUrl, supabaseServiceKey)

// Database types (matching our Prisma schema)
export interface ServiceRequest {
  id: string
  serviceNumber: string
  status: ServiceStatus
  deviceType?: string
  serviceType?: string
  issueDescription?: string
  customerEmail?: string
  customerName?: string
  shippingAddress?: any
  paymentAmount?: number
  paymentStatus?: string
  stripePaymentId?: string
  createdAt: string
  updatedAt: string
  completedAt?: string
  userId?: string
}

export interface User {
  id: string
  email: string
  name?: string
  createdAt: string
  updatedAt: string
}

export type ServiceStatus =
  | 'PENDING'
  | 'PAID'
  | 'SHIPPED'
  | 'RECEIVED'
  | 'REPAIRING'
  | 'COMPLETED'
  | 'CANCELLED'
  | 'SHIPPING_LABEL_GENERATED'
  | 'PAID_SHIPPING_ERROR'