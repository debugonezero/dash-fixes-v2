-- SQL to create the service_requests table in Supabase
CREATE TABLE service_requests (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  service_number TEXT UNIQUE NOT NULL,
  device_type TEXT NOT NULL,
  service_type TEXT NOT NULL,
  issue_description TEXT NOT NULL,
  customer_name TEXT NOT NULL,
  customer_email TEXT NOT NULL,
  shipping_address JSONB NOT NULL,
  payment_amount NUMERIC NOT NULL,
  payment_status TEXT DEFAULT 'pending',
  status TEXT DEFAULT 'PENDING',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  stripe_payment_id TEXT,
  shipping_label_url TEXT,
  tracking_number TEXT,
  shipping_cost NUMERIC,
  shipping_provider TEXT,
  completed_at TIMESTAMP WITH TIME ZONE
);

-- Create index on service_number for fast lookups
CREATE INDEX idx_service_requests_service_number ON service_requests(service_number);

-- Create index on status for filtering
CREATE INDEX idx_service_requests_status ON service_requests(status);