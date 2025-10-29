import { Resend } from 'resend';
import { ShippingLabelEmail } from '../components/ShippingLabelEmail';

// Initialize Resend with API key
const resendApiKey = process.env.RESEND_API_KEY;
if (!resendApiKey) {
  throw new Error('RESEND_API_KEY environment variable is required');
}

const resend = new Resend(resendApiKey);

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
    const fromEmail = process.env.FROM_EMAIL || 'web@dashfixes.com';
    const { data: emailResult, error } = await resend.emails.send({
      from: `Dash Fixes <${fromEmail}>`,
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
/**
 * Send a contact form email
 */
export async function sendContactEmail(data: { name: string; email: string; message: string }): Promise<void> {
  try {
    const fromEmail = process.env.FROM_EMAIL || 'web@dashfixes.com';
    const { data: emailResult, error } = await resend.emails.send({
      from: `Dash Fixes <${fromEmail}>`,
      to: [fromEmail], // Send to ourselves
      replyTo: data.email, // Allow replies to go to the contact
      subject: `New Contact Form Message from ${data.name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Message:</strong></p>
        <p>${data.message.replace(/\n/g, '<br>')}</p>
      `,
    });

    if (error) {
      throw new Error(`Contact email failed: ${error.message}`);
    }

    console.log('✅ Contact email sent successfully');
  } catch (error) {
    console.error('❌ Contact email failed:', error);
    throw error;
  }
}

export async function sendTestEmail(to: string): Promise<void> {
  try {
    const fromEmail = process.env.FROM_EMAIL || 'web@dashfixes.com';
    const { data, error } = await resend.emails.send({
      from: `Dash Fixes <${fromEmail}>`,
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