import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

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
 * Send shipping label email with PDF attachment
 */
export async function sendShippingLabelEmail(data: ShippingLabelEmailData): Promise<void> {
  try {
    const emailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Your Dash Fixes Shipping Label</title>
          <style>
            body { font-family: 'Inter', sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(45deg, #268bd2, #2aa198); color: white; padding: 30px; text-align: center; border-radius: 8px 8px 0 0; }
            .content { background: #f8f9fa; padding: 30px; border-radius: 0 0 8px 8px; }
            .highlight { background: #e3f2fd; padding: 15px; border-radius: 6px; border-left: 4px solid #268bd2; margin: 20px 0; }
            .tracking { font-size: 18px; font-weight: bold; color: #dc322f; }
            .instructions { background: white; padding: 20px; border-radius: 6px; margin: 20px 0; }
            .footer { text-align: center; margin-top: 30px; color: #666; font-size: 14px; }
            .button { display: inline-block; background: #268bd2; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: bold; margin: 10px 0; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>📦 Your Shipping Label is Ready!</h1>
              <p>Thank you for choosing Dash Fixes</p>
            </div>

            <div class="content">
              <p>Hi ${data.customerName},</p>

              <p>Great news! Your payment has been processed successfully. Your shipping label is attached to this email as a PDF.</p>

              <div class="highlight">
                <h3>📋 Service Details:</h3>
                <p><strong>Service Number:</strong> ${data.serviceNumber}</p>
                <p><strong>Device:</strong> ${data.deviceType}</p>
                <p><strong>Issue:</strong> ${data.issue}</p>
                <p class="tracking"><strong>Tracking Number:</strong> ${data.trackingNumber}</p>
              </div>

              <div class="instructions">
                <h3>🚚 Shipping Instructions:</h3>
                <ol>
                  <li><strong>Print the attached shipping label</strong> (PDF file)</li>
                  <li><strong>Package your device securely</strong> with at least 2 inches of padding on all sides</li>
                  <li><strong>Attach the shipping label</strong> to the outside of the package</li>
                  <li><strong>Take to any FedEx, UPS, or USPS location</strong> - shipping is pre-paid!</li>
                  <li><strong>Track your package</strong> using the tracking number above</li>
                </ol>

                <p><strong>⚠️ Important:</strong> Only include your device - no chargers, cables, or accessories unless specifically requested.</p>
              </div>

              <div class="highlight">
                <h3>📞 Need Help?</h3>
                <p>Contact us at <strong>(626) 622-0196</strong> or reply to this email.</p>
                <p>Track your repair status: <a href="https://dashfixes.com/track/${data.serviceNumber}" class="button">View Repair Status</a></p>
              </div>

              <p>Thank you for trusting Dash Fixes with your device repair!</p>
              <p>Best regards,<br>The Dash Fixes Team</p>
            </div>

            <div class="footer">
              <p>© 2025 Dash Fixes | Expert Tech Repair Service</p>
              <p>123 E Colorado Blvd, Pasadena, CA 91101</p>
            </div>
          </div>
        </body>
      </html>
    `;

    const { data: emailResult, error } = await resend.emails.send({
      from: 'Dash Fixes <repairs@dashfixes.com>',
      to: [data.customerEmail],
      subject: `Your Shipping Label - Service #${data.serviceNumber}`,
      html: emailHtml,
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
      from: 'Dash Fixes <repairs@dashfixes.com>',
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