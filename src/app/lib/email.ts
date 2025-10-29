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

export interface ShippingInstructionsEmailData {
  customerName: string;
  customerEmail: string;
  serviceNumber: string;
  deviceType: string;
  issue: string;
}

export interface QuoteRequestEmailData {
  customerName: string;
  customerEmail: string;
  deviceType: string;
  serviceType: string;
  issueDescription: string;
  shippingAddress: {
    street1: string;
    city: string;
    state: string;
    zip: string;
  };
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
        shippingLabelPdf: data.shippingLabelPdf,
      }),
      attachments: data.shippingLabelPdf && data.shippingLabelPdf.length > 0 ? [
        {
          filename: `shipping-label-${data.serviceNumber}.pdf`,
          content: data.shippingLabelPdf,
        },
      ] : [],
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
 * Send quote request email to admin
 */
export async function sendQuoteRequestEmail(data: QuoteRequestEmailData): Promise<void> {
  try {
    const fromEmail = process.env.FROM_EMAIL || 'web@dashfixes.com';
    const { data: emailResult, error } = await resend.emails.send({
      from: `Dash Fixes <${fromEmail}>`,
      to: [fromEmail], // Send to admin
      replyTo: data.customerEmail,
      subject: `New Quote Request from ${data.customerName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #2563eb;">New Quote Request</h1>

          <h2>Customer Information</h2>
          <p><strong>Name:</strong> ${data.customerName}</p>
          <p><strong>Email:</strong> ${data.customerEmail}</p>

          <h2>Device Information</h2>
          <p><strong>Device Type:</strong> ${data.deviceType}</p>
          <p><strong>Service Type:</strong> ${data.serviceType}</p>
          <p><strong>Issue Description:</strong></p>
          <p>${data.issueDescription.replace(/\n/g, '<br>')}</p>

          <h2>Shipping Address</h2>
          <p>${data.shippingAddress.street1}<br>
          ${data.shippingAddress.city}, ${data.shippingAddress.state} ${data.shippingAddress.zip}</p>

          <div style="background-color: #f0f9ff; border: 1px solid #0ea5e9; border-radius: 8px; padding: 20px; margin: 20px 0;">
            <p>Please review this quote request and respond to the customer with pricing and next steps.</p>
          </div>
        </div>
      `,
    });

    if (error) {
      throw new Error(`Quote request email failed: ${error.message}`);
    }

    console.log('✅ Quote request email sent successfully');
  } catch (error) {
    console.error('❌ Quote request email failed:', error);
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

/**
 * Send shipping instructions email (no PDF attachment)
 */
export async function sendShippingInstructionsEmail(data: ShippingInstructionsEmailData): Promise<void> {
  try {
    const fromEmail = process.env.FROM_EMAIL || 'web@dashfixes.com';
    const shippingPageUrl = `${process.env.NEXT_PUBLIC_BASE_URL || 'https://www.dashfixes.com'}/shipping-label/${data.serviceNumber}`;

    const { data: emailResult, error } = await resend.emails.send({
      from: `Dash Fixes <${fromEmail}>`,
      to: [data.customerEmail],
      subject: `Payment Received - Generate Your Shipping Label - Service #${data.serviceNumber}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #2563eb;">Payment Received - Next Steps</h1>

          <p>Hi ${data.customerName},</p>

          <p>Thank you for your payment! Your repair request for your <strong>${data.deviceType}</strong> has been received.</p>

          <div style="background-color: #f0f9ff; border: 1px solid #0ea5e9; border-radius: 8px; padding: 20px; margin: 20px 0;">
            <h2 style="color: #0ea5e9; margin-top: 0;">📦 Generate Your Shipping Label</h2>
            <p>Click the button below to create your prepaid shipping label:</p>
            <a href="${shippingPageUrl}" style="background-color: #2563eb; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; display: inline-block; margin: 10px 0;">Generate Shipping Label</a>
          </div>

          <h3>What to do next:</h3>
          <ol>
            <li><strong>Prepare your device:</strong> Remove accessories and include your service number <strong>${data.serviceNumber}</strong></li>
            <li><strong>Generate label:</strong> Use the link above to create your shipping label via USPS</li>
            <li><strong>Print & ship:</strong> Print the label and attach it to your securely packaged device</li>
            <li><strong>Track progress:</strong> We'll update you via email once we receive your device</li>
          </ol>

          <div style="background-color: #fef3c7; border: 1px solid #f59e0b; border-radius: 8px; padding: 15px; margin: 20px 0;">
            <h4 style="color: #92400e; margin-top: 0;">💡 Don't have a printer?</h4>
            <p style="margin-bottom: 0;">No problem! Take the PDF to any USPS post office, FedEx Office, or print shop. They can print and apply the label for you.</p>
          </div>

          <p><strong>Shipping Address:</strong><br>
          Dash Fixes<br>
          Secure PO Box<br>
          Pasadena, CA 91101</p>

          <p>Questions? Reply to this email or call (626) 622-0196.</p>

          <p>Thank you for choosing Dash Fixes!<br>
          <em>Your trusted Pasadena tech repair experts</em></p>
        </div>
      `,
    });

    if (error) {
      console.error('❌ Shipping instructions email failed:', error);
      throw new Error(`Failed to send shipping instructions email: ${error.message}`);
    }

    console.log('✅ Shipping instructions email sent successfully:', emailResult);

  } catch (error) {
    console.error('❌ Error sending shipping instructions email:', error);
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