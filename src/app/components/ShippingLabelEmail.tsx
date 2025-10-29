import * as React from 'react';
import { Html, Head, Body, Container, Section, Text, Heading, Button, Hr, Link } from '@react-email/components';

interface ShippingLabelEmailProps {
  customerName: string;
  serviceNumber: string;
  trackingNumber: string;
  deviceType: string;
  issue: string;
  shippingLabelPdf?: Buffer;
}

const linkStyle = {
  color: '#268bd2',
  textDecoration: 'underline',
};

export function ShippingLabelEmail({
  customerName,
  serviceNumber,
  trackingNumber,
  deviceType,
  issue,
  shippingLabelPdf,
}: ShippingLabelEmailProps) {
  return (
    <Html>
      <Head />
      <Body style={main}>
        <Container style={container}>
          {/* Header */}
          <Section style={header}>
            <Heading style={h1}>📦 Your Shipping Label is Ready!</Heading>
            <Text style={subtitle}>Thank you for choosing Dash Fixes</Text>
          </Section>

          {/* Content */}
          <Section style={content}>
            <Text style={paragraph}>Hi {customerName},</Text>

            <Text style={paragraph}>
              Great news! Your payment has been processed successfully. Your shipping label is attached to this email as a PDF.
            </Text>

            {/* Service Details */}
            <Section style={highlightBox}>
              <Heading style={h3}>📋 Service Details:</Heading>
              <Text style={detailText}><strong>Service Number:</strong> {serviceNumber}</Text>
              <Text style={detailText}><strong>Device:</strong> {deviceType}</Text>
              <Text style={detailText}><strong>Issue:</strong> {issue}</Text>
              <Text style={trackingText}><strong>Tracking Number:</strong> {trackingNumber}</Text>
            </Section>

            {/* Instructions */}
            <Section style={instructionsBox}>
              <Heading style={h3}>🚚 Shipping Instructions:</Heading>
              <ol style={list}>
                <li style={listItem}>
                  {shippingLabelPdf && shippingLabelPdf.length > 0
                    ? "Print the attached shipping label (PDF file)"
                    : "Visit your tracking page to download and print your shipping label"
                  }
                </li>
                <li style={listItem}>Package your device securely with at least 2 inches of padding on all sides</li>
                <li style={listItem}>Attach the shipping label to the outside of the package</li>
                <li style={listItem}>Take to any FedEx, UPS, or USPS location - shipping is pre-paid!</li>
                <li style={listItem}>Track your package using the tracking number above</li>
              </ol>

              {!shippingLabelPdf || shippingLabelPdf.length === 0 ? (
                <Text style={warningText}>
                  📄 <strong>Download your label:</strong> Visit <Link href={`https://www.dashfixes.com/track/${serviceNumber}`} style={linkStyle}>your tracking page</Link> to download and print your shipping label.
                </Text>
              ) : null}

              <Text style={warningText}>
                ⚠️ <strong>Important:</strong> Only include your device - no chargers, cables, or accessories unless specifically requested.
              </Text>
            </Section>

            {/* Call to Action */}
            <Section style={ctaBox}>
              <Heading style={h3}>📞 Need Help?</Heading>
              <Text style={paragraph}>
                Contact us at <strong>(626) 622-0196</strong> or reply to this email.
              </Text>
              <Button
                href={`https://dashfixes.com/track/${serviceNumber}`}
                style={button}
              >
                View Repair Status
              </Button>
            </Section>

            <Hr style={hr} />

            <Text style={closing}>
              Thank you for trusting Dash Fixes with your device repair!
            </Text>
            <Text style={signature}>
              Best regards,<br />
              The Dash Fixes Team
            </Text>
          </Section>

          {/* Footer */}
          <Section style={footer}>
            <Text style={footerText}>
              © 2025 Dash Fixes | Expert Tech Repair Service<br />
              123 E Colorado Blvd, Pasadena, CA 91101
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

// Styles
const main = {
  backgroundColor: '#f6f9fc',
  fontFamily: 'Inter, sans-serif',
};

const container = {
  margin: '0 auto',
  padding: '20px 0 48px',
  maxWidth: '600px',
};

const header = {
  background: 'linear-gradient(45deg, #268bd2, #2aa198)',
  padding: '40px 30px',
  textAlign: 'center' as const,
  borderRadius: '8px 8px 0 0',
};

const h1 = {
  color: '#ffffff',
  fontSize: '28px',
  fontWeight: 'bold',
  margin: '0 0 10px 0',
  padding: '0',
};

const subtitle = {
  color: '#ffffff',
  fontSize: '16px',
  margin: '0',
};

const content = {
  backgroundColor: '#ffffff',
  padding: '40px 30px',
};

const paragraph = {
  color: '#333',
  fontSize: '16px',
  lineHeight: '24px',
  margin: '16px 0',
};

const highlightBox = {
  backgroundColor: '#e3f2fd',
  padding: '20px',
  borderRadius: '6px',
  borderLeft: '4px solid #268bd2',
  margin: '20px 0',
};

const h3 = {
  color: '#333',
  fontSize: '18px',
  fontWeight: 'bold',
  margin: '0 0 15px 0',
};

const detailText = {
  color: '#333',
  fontSize: '14px',
  margin: '8px 0',
};

const trackingText = {
  color: '#dc322f',
  fontSize: '16px',
  fontWeight: 'bold',
  margin: '8px 0',
};

const instructionsBox = {
  backgroundColor: '#f8f9fa',
  padding: '20px',
  borderRadius: '6px',
  margin: '20px 0',
};

const list = {
  margin: '0 0 15px 0',
  paddingLeft: '20px',
};

const listItem = {
  color: '#333',
  fontSize: '14px',
  lineHeight: '20px',
  margin: '5px 0',
};

const warningText = {
  color: '#cb4b16',
  fontSize: '14px',
  margin: '10px 0',
};

const ctaBox = {
  backgroundColor: '#268bd2',
  color: '#ffffff',
  padding: '20px',
  borderRadius: '6px',
  margin: '20px 0',
  textAlign: 'center' as const,
};

const button = {
  backgroundColor: '#ffffff',
  color: '#268bd2',
  padding: '12px 24px',
  textDecoration: 'none',
  borderRadius: '6px',
  fontWeight: 'bold',
  display: 'inline-block',
  marginTop: '10px',
};

const hr = {
  borderColor: '#e6ebf1',
  margin: '20px 0',
};

const closing = {
  color: '#333',
  fontSize: '16px',
  margin: '20px 0',
};

const signature = {
  color: '#333',
  fontSize: '16px',
  margin: '0',
};

const footer = {
  padding: '20px 30px',
  textAlign: 'center' as const,
};

const footerText = {
  color: '#8898aa',
  fontSize: '12px',
  lineHeight: '16px',
};