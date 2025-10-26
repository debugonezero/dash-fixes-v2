import { Resend } from 'resend';
import { ShippingLabelEmail } from '../components/ShippingLabelEmail';

// Use test API key for development if no real key is provided
const resend = new Resend(process.env.RESEND_API_KEY || 're_123456789');

export interface ShippingLabelEmailData {
  customerName: string;
  customerEmail: string;
  serviceNumber: string;
  trackingNumber: string;
  shippingLabelPdf: Buffer;
  deviceType: string;
  issue: string;
}

/**
 * Send shipping label email with PDF attachment using React Email template
 */
export async function sendShippingLabelEmail(data: ShippingLabelEmailData): Promise<void> {
  try {
    const { data: emailResult, error } = await resend.emails.send({
      from: 'Dash Fixes <web@dashfixes.com>',
      to: [data.customerEmail],
      subject: `Your Shipping Label - Service #${data.serviceNumber}`,
      react: ShippingLabelEmail({
        customerName: data.customerName,
        serviceNumber: data.serviceNumber,
        trackingNumber: data.trackingNumber,
        deviceType: data.deviceType,
        issue: data.issue,
      }),
      attachments: [
        {
          filename: `shipping-label-${data.serviceNumber}.pdf`,
          content: data.shippingLabelPdf,
        },
      ],
    });

    if (error) {
      console.error('❌ Email sending failed:', error);
      throw new Error(`Failed to send email: ${error.message}`);
    }

    console.log('✅ Shipping label email sent successfully:', emailResult);

  } catch (error) {
    console.error('❌ Error sending shipping label email:', error);
    throw error;
  }
}

/**
 * Send a simple test email to verify Resend setup
 */
export async function sendTestEmail(to: string): Promise<void> {
  try {
    const { data, error } = await resend.emails.send({
      from: 'Dash Fixes <web@dashfixes.com>',
      to: [to],
      subject: 'Test Email from Dash Fixes',
      html: `
        <h1>Test Email</h1>
        <p>This is a test email to verify Resend integration is working.</p>
        <p>If you received this, email integration is set up correctly!</p>
      `,
    });

    if (error) {
      throw new Error(`Test email failed: ${error.message}`);
    }

    console.log('✅ Test email sent successfully');
  } catch (error) {
    console.error('❌ Test email failed:', error);
    throw error;
  }
}