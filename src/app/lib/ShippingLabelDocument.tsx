import { renderToBuffer } from '@react-pdf/renderer';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
import { ShippingLabelData } from './shipping-label';

// React PDF Styles
const styles = StyleSheet.create({
  page: {
    padding: 18, // 0.25 inches
    fontFamily: 'Helvetica',
  },
  header: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#268bd2', // Solarized blue
    marginBottom: 4,
  },
  subHeader: {
    fontSize: 10,
    color: '#000000',
    marginBottom: 8,
  },
  serviceNumber: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#dc322f', // Solarized red
    marginBottom: 6,
  },
  trackingNumber: {
    fontSize: 10,
    color: '#000000',
    marginBottom: 12,
  },
  sectionLabel: {
    fontSize: 10,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  address: {
    fontSize: 9,
    lineHeight: 1.4,
    marginBottom: 12,
  },
  deviceInfo: {
    fontSize: 8,
    marginBottom: 12,
  },
  instructions: {
    fontSize: 8,
    color: '#586e75', // Solarized dark gray
    lineHeight: 1.3,
    marginBottom: 12,
  },
  footer: {
    fontSize: 6,
    color: '#93a1a1',
    textAlign: 'left',
  },
});

/**
 * React PDF Shipping Label Component
 */
const ShippingLabelDocument = ({ data, width, height }: { data: ShippingLabelData; width: number; height: number }) => (
  <Document>
    <Page size={[width * 72, height * 72]} style={styles.page}>
      <View>
        {/* Header */}
        <Text style={styles.header}>DASH FIXES</Text>
        <Text style={styles.subHeader}>Expert Tech Repair Service</Text>

        {/* Service Number */}
        <Text style={styles.serviceNumber}>Service #{data.serviceNumber}</Text>

        {/* Tracking Number */}
        <Text style={styles.trackingNumber}>Tracking: {data.trackingNumber}</Text>

        {/* From Address */}
        <Text style={styles.sectionLabel}>FROM:</Text>
        <Text style={styles.address}>
          {data.fromAddress.name}{'\n'}
          {data.fromAddress.street1}{'\n'}
          {data.fromAddress.city}, {data.fromAddress.state} {data.fromAddress.zip}
        </Text>

        {/* To Address */}
        <Text style={styles.sectionLabel}>TO:</Text>
        <Text style={styles.address}>
          {data.toAddress.name}{'\n'}
          {data.toAddress.street1}{'\n'}
          {data.toAddress.city}, {data.toAddress.state} {data.toAddress.zip}
        </Text>

        {/* Device Info */}
        <Text style={styles.sectionLabel}>DEVICE:</Text>
        <Text style={styles.deviceInfo}>
          {data.deviceType}{'\n'}
          Issue: {data.issue.length > 40 ? `${data.issue.substring(0, 40)}...` : data.issue}
        </Text>

        {/* Instructions */}
        <Text style={styles.instructions}>
          IMPORTANT: Package securely with{'\n'}
          at least 2" padding on all sides.{'\n'}
          Include device only - no chargers.
        </Text>

        {/* Footer */}
        <Text style={styles.footer}>
          www.dashfixes.com | (626) 622-0196
        </Text>
      </View>
    </Page>
  </Document>
);

/**
 * Generate a shipping label PDF using React PDF
 */
export async function generateShippingLabelPDF(data: ShippingLabelData, width: number, height: number): Promise<Buffer> {
  const pdfBuffer = await renderToBuffer(
    <ShippingLabelDocument data={data} width={width} height={height} />
  );

  return Buffer.from(pdfBuffer);
}