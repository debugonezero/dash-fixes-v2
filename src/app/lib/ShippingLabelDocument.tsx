import { PDFDocument, rgb } from 'pdf-lib';
import { ShippingLabelData } from './shipping-label';

/**
 * Generate a shipping label PDF
 */
export async function generateShippingLabelPDF(data: ShippingLabelData, width: number, height: number): Promise<Buffer> {
  // Create a new PDF document
  const pdfDoc = await PDFDocument.create();
  const page = pdfDoc.addPage([width, height]);
  const pageHeight = height;

  // Define colors
  const blue = rgb(0.0, 0.47, 0.75); // Solarized blue
  const red = rgb(0.8, 0.28, 0.36); // Solarized red
  const black = rgb(0.0, 0.0, 0.0);
  const gray = rgb(0.36, 0.43, 0.41); // Solarized dark gray
  const lightGray = rgb(0.58, 0.63, 0.63);

  // Set up fonts
  const fontSize = {
    header: 16,
    subHeader: 10,
    serviceNumber: 12,
    trackingNumber: 10,
    sectionLabel: 10,
    address: 9,
    deviceInfo: 8,
    instructions: 8,
    footer: 6,
  };

  let yPosition = pageHeight - 18; // Start 18 points from top

  // Header
  page.drawText('DASH FIXES', {
    x: 18,
    y: yPosition,
    size: fontSize.header,
    color: blue,
  });
  yPosition -= fontSize.header + 4;

  page.drawText('Expert Tech Repair Service', {
    x: 18,
    y: yPosition,
    size: fontSize.subHeader,
    color: black,
  });
  yPosition -= fontSize.subHeader + 8;

  // Service Number
  page.drawText(`Service #${data.serviceNumber}`, {
    x: 18,
    y: yPosition,
    size: fontSize.serviceNumber,
    color: red,
  });
  yPosition -= fontSize.serviceNumber + 6;

  // Tracking Number
  page.drawText(`Tracking: ${data.trackingNumber}`, {
    x: 18,
    y: yPosition,
    size: fontSize.trackingNumber,
    color: black,
  });
  yPosition -= fontSize.trackingNumber + 12;

  // From Address
  page.drawText('FROM:', {
    x: 18,
    y: yPosition,
    size: fontSize.sectionLabel,
    color: black,
  });
  yPosition -= fontSize.sectionLabel + 4;

  const fromLines = [
    data.fromAddress.name,
    data.fromAddress.street1,
    `${data.fromAddress.city}, ${data.fromAddress.state} ${data.fromAddress.zip}`
  ];

  for (const line of fromLines) {
    page.drawText(line, {
      x: 18,
      y: yPosition,
      size: fontSize.address,
      color: black,
    });
    yPosition -= fontSize.address * 1.4;
  }
  yPosition -= 12;

  // To Address
  page.drawText('TO:', {
    x: 18,
    y: yPosition,
    size: fontSize.sectionLabel,
    color: black,
  });
  yPosition -= fontSize.sectionLabel + 4;

  const toLines = [
    data.toAddress.name,
    data.toAddress.street1,
    `${data.toAddress.city}, ${data.toAddress.state} ${data.toAddress.zip}`
  ];

  for (const line of toLines) {
    page.drawText(line, {
      x: 18,
      y: yPosition,
      size: fontSize.address,
      color: black,
    });
    yPosition -= fontSize.address * 1.4;
  }
  yPosition -= 12;

  // Device Info
  page.drawText('DEVICE:', {
    x: 18,
    y: yPosition,
    size: fontSize.sectionLabel,
    color: black,
  });
  yPosition -= fontSize.sectionLabel + 4;

  const deviceLines = [
    data.deviceType,
    `Issue: ${data.issue.length > 40 ? `${data.issue.substring(0, 40)}...` : data.issue}`
  ];

  for (const line of deviceLines) {
    page.drawText(line, {
      x: 18,
      y: yPosition,
      size: fontSize.deviceInfo,
      color: black,
    });
    yPosition -= fontSize.deviceInfo + 2;
  }
  yPosition -= 12;

  // Instructions
  const instructions = [
    'IMPORTANT: Package securely with',
    'at least 2" padding on all sides.',
    'Include device only - no chargers.'
  ];

  for (const line of instructions) {
    page.drawText(line, {
      x: 18,
      y: yPosition,
      size: fontSize.instructions,
      color: gray,
    });
    yPosition -= fontSize.instructions * 1.3;
  }
  yPosition -= 12;

  // Footer
  page.drawText('www.dashfixes.com | (626) 622-0196', {
    x: 18,
    y: yPosition,
    size: fontSize.footer,
    color: lightGray,
  });

  // Serialize the PDF
  const pdfBytes = await pdfDoc.save();
  return Buffer.from(pdfBytes);
}