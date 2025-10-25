import { jsPDF } from 'jspdf';

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
}

/**
 * Generate a shipping label PDF
 */
export async function generateShippingLabel(data: ShippingLabelData): Promise<Buffer> {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'in',
    format: [4, 6] // 4x6 inch shipping label
  });

  // Set up fonts and colors
  doc.setFont('helvetica', 'bold');

  // Header
  doc.setFontSize(16);
  doc.setTextColor(38, 139, 210); // Solarized blue
  doc.text('DASH FIXES', 0.25, 0.4);

  doc.setFontSize(10);
  doc.setTextColor(0, 0, 0);
  doc.text('Expert Tech Repair Service', 0.25, 0.6);

  // Service Number
  doc.setFontSize(12);
  doc.setTextColor(220, 50, 47); // Solarized red
  doc.text(`Service #${data.serviceNumber}`, 0.25, 0.8);

  // Tracking Number
  doc.setFontSize(10);
  doc.setTextColor(0, 0, 0);
  doc.text(`Tracking: ${data.trackingNumber}`, 0.25, 0.95);

  // From Address (Customer)
  doc.setFontSize(10);
  doc.setFont('helvetica', 'bold');
  doc.text('FROM:', 0.25, 1.2);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  doc.text(data.fromAddress.name, 0.25, 1.35);
  doc.text(data.fromAddress.street1, 0.25, 1.45);
  doc.text(`${data.fromAddress.city}, ${data.fromAddress.state} ${data.fromAddress.zip}`, 0.25, 1.55);

  // To Address (Dash Fixes)
  doc.setFontSize(10);
  doc.setFont('helvetica', 'bold');
  doc.text('TO:', 0.25, 1.8);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  doc.text(data.toAddress.name, 0.25, 1.95);
  doc.text(data.toAddress.street1, 0.25, 2.05);
  doc.text(`${data.toAddress.city}, ${data.toAddress.state} ${data.toAddress.zip}`, 0.25, 2.15);

  // Device Info
  doc.setFontSize(10);
  doc.setFont('helvetica', 'bold');
  doc.text('DEVICE:', 0.25, 2.4);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8);
  doc.text(data.deviceType, 0.25, 2.5);
  doc.text(`Issue: ${data.issue.substring(0, 40)}${data.issue.length > 40 ? '...' : ''}`, 0.25, 2.6);

  // Instructions
  doc.setFontSize(8);
  doc.setTextColor(101, 123, 131); // Solarized dark gray
  doc.text('IMPORTANT: Package securely with', 0.25, 2.8);
  doc.text('at least 2" padding on all sides.', 0.25, 2.9);
  doc.text('Include device only - no chargers.', 0.25, 3.0);

  // Footer
  doc.setFontSize(6);
  doc.setTextColor(88, 110, 117);
  doc.text('www.dashfixes.com | (626) 622-0196', 0.25, 3.2);

  // Return as buffer
  return Buffer.from(doc.output('arraybuffer'));
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
    deviceType: serviceRequest.deviceType,
    issue: serviceRequest.issue || 'Device repair',
  };
}