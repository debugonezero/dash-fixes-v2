import { generateShippingLabelPDF } from './ShippingLabelDocument';

export interface ShippingLabelData {
  serviceNumber: string;
  customerName: string;
  customerEmail: string;
  fromAddress: {
    name: string;
    street1: string;
    city: string;
    state: string;
    zip: string;
  };
  toAddress: {
    name: string;
    street1: string;
    city: string;
    state: string;
    zip: string;
  };
  trackingNumber: string;
  shippingCost: number;
  deviceType: string;
  issue: string;
  packageDimensions?: {
    length: number;
    width: number;
    height: number;
    weight: number;
  };
}

/**
 * Get shipping label dimensions based on device category
 */
export function getLabelDimensions(deviceType: string): [number, number] {
  const deviceLower = deviceType.toLowerCase();

  // Cell phones (small devices)
  if (deviceLower.includes('iphone') || deviceLower.includes('phone') ||
      deviceLower.includes('android') || deviceLower.includes('samsung') ||
      deviceLower.includes('pixel') || deviceLower.includes('cell')) {
    return [4, 6]; // 4x6 inches
  }

  // Laptops and tablets (medium devices)
  if (deviceLower.includes('macbook') || deviceLower.includes('laptop') ||
      deviceLower.includes('ipad') || deviceLower.includes('tablet') ||
      deviceLower.includes('surface') || deviceLower.includes('chromebook')) {
    return [6, 9]; // 6x9 inches
  }

  // Gaming consoles (large devices)
  if (deviceLower.includes('playstation') || deviceLower.includes('ps4') ||
      deviceLower.includes('ps5') || deviceLower.includes('xbox') ||
      deviceLower.includes('nintendo') || deviceLower.includes('switch') ||
      deviceLower.includes('console')) {
    return [8, 11]; // 8x11 inches
  }

  // Default to small size for unknown devices
  return [4, 6];
}

/**
 * Get package dimensions and weight based on device category
 */
export function getPackageDimensions(deviceType: string): { length: number; width: number; height: number; weight: number } {
  const deviceLower = deviceType.toLowerCase();

  // Cell phones (small box: 6x4x2 inches, ~1 lb with padding)
  if (deviceLower.includes('iphone') || deviceLower.includes('phone') ||
      deviceLower.includes('android') || deviceLower.includes('samsung') ||
      deviceLower.includes('pixel') || deviceLower.includes('cell')) {
    return { length: 6, width: 4, height: 2, weight: 1 };
  }

  // Laptops and tablets (medium box: 16x12x4 inches, ~3 lbs with padding)
  if (deviceLower.includes('macbook') || deviceLower.includes('laptop') ||
      deviceLower.includes('ipad') || deviceLower.includes('tablet') ||
      deviceLower.includes('surface') || deviceLower.includes('chromebook')) {
    return { length: 16, width: 12, height: 4, weight: 3 };
  }

  // Gaming consoles (large box: 18x14x8 inches, ~5 lbs with padding)
  if (deviceLower.includes('playstation') || deviceLower.includes('ps4') ||
      deviceLower.includes('ps5') || deviceLower.includes('xbox') ||
      deviceLower.includes('nintendo') || deviceLower.includes('switch') ||
      deviceLower.includes('console')) {
    return { length: 18, width: 14, height: 8, weight: 5 };
  }

  // Default to small dimensions for unknown devices
  return { length: 6, width: 4, height: 2, weight: 1 };
}

/**
 * Generate a shipping label PDF using React PDF
 */
export async function generateShippingLabel(data: ShippingLabelData): Promise<Buffer> {
  const [width, height] = getLabelDimensions(data.deviceType);
  return await generateShippingLabelPDF(data, width, height);
}

/**
 * Generate a unique tracking number
 */
export function generateTrackingNumber(): string {
  const timestamp = Date.now().toString(36).toUpperCase();
  const random = Math.random().toString(36).substring(2, 8).toUpperCase();
  return `DF${timestamp}${random}`;
}

/**
 * Create shipping label data from service request
 */
export function createShippingLabelData(serviceRequest: any): ShippingLabelData {
  const deviceType = serviceRequest.deviceType || 'Unknown Device';

  return {
    serviceNumber: serviceRequest.serviceNumber,
    customerName: serviceRequest.customerName,
    customerEmail: serviceRequest.customerEmail,
    fromAddress: {
      name: serviceRequest.customerName,
      street1: serviceRequest.shippingAddress.street1,
      city: serviceRequest.shippingAddress.city,
      state: serviceRequest.shippingAddress.state,
      zip: serviceRequest.shippingAddress.zip,
    },
    toAddress: {
      name: 'Dash Fixes',
      street1: '123 E Colorado Blvd',
      city: 'Pasadena',
      state: 'CA',
      zip: '91101',
    },
    trackingNumber: generateTrackingNumber(),
    shippingCost: 9.99,
    deviceType: deviceType,
    issue: serviceRequest.issue || 'Device repair',
    packageDimensions: getPackageDimensions(deviceType),
  };
}