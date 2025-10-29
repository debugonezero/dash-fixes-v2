// @ts-nocheck - Shippo SDK has type compatibility issues
import { Shippo } from 'shippo';

const shippo = new Shippo(process.env.SHIPPO_API_KEY || 'shippo_test_placeholder_key');

export interface ShippingAddress {
  name: string;
  street1: string;
  city: string;
  state: string;
  zip: string;
  country: string;
}

export interface ShippingRate {
  provider: string;
  service: string;
  amount: string;
  currency: string;
  estimated_days: number;
}

export interface DropOffLocation {
  provider: string;
  address: {
    street1: string;
    city: string;
    state: string;
    zip: string;
  };
  distance: string;
  phone?: string;
  hours?: string;
}

/**
 * Get shipping rates from customer's location to Dash Fixes
 */
export async function getShippingRates(fromAddress: ShippingAddress): Promise<ShippingRate[]> {
  try {
    const toAddress = {
      name: 'Dash Fixes',
      street1: '123 E Colorado Blvd', // Replace with actual address
      city: 'Pasadena',
      state: 'CA',
      zip: '91101',
      country: 'US'
    };

    const parcel = {
      length: '12',
      width: '8',
      height: '2',
      distanceUnit: 'in' as const,
      weight: '2',
      massUnit: 'lb' as const
    };

    const shipment = await shippo.shipments.create({
      addressFrom: fromAddress,
      addressTo: toAddress,
      parcels: [parcel],
      async: false
    });

    const rates = shipment.rates.map((rate: any) => ({
      provider: rate.provider,
      service: rate.servicelevel.name,
      amount: rate.amount,
      currency: rate.currency,
      estimated_days: rate.estimated_days || 2
    }));

    return rates;
  } catch (error) {
    console.error('Error getting shipping rates:', error);
    // Return fallback rates
    return [
      {
        provider: 'USPS',
        service: 'Priority Mail',
        amount: '9.99',
        currency: 'USD',
        estimated_days: 2
      },
      {
        provider: 'FedEx',
        service: 'Ground',
        amount: '12.99',
        currency: 'USD',
        estimated_days: 2
      }
    ];
  }
}

/**
 * Find closest drop-off locations near customer
 */
export async function findDropOffLocations(zipCode: string): Promise<DropOffLocation[]> {
  try {
    // Use Shippo's carrier accounts to find locations
    // This is a simplified implementation - in production you'd use actual carrier APIs

    // Mock locations for testing - replace with real API calls
    const mockLocations: DropOffLocation[] = [
      {
        provider: 'FedEx',
        address: {
          street1: '400 E Colorado Blvd',
          city: 'Pasadena',
          state: 'CA',
          zip: '91101'
        },
        distance: '0.5 miles',
        phone: '(626) 555-0123',
        hours: 'Mon-Fri 8AM-6PM'
      },
      {
        provider: 'UPS',
        address: {
          street1: '77 E Lake Ave',
          city: 'Pasadena',
          state: 'CA',
          zip: '91101'
        },
        distance: '0.8 miles',
        phone: '(626) 555-0456',
        hours: 'Mon-Sat 9AM-5PM'
      },
      {
        provider: 'USPS',
        address: {
          street1: '35 S Lake Ave',
          city: 'Pasadena',
          state: 'CA',
          zip: '91101'
        },
        distance: '1.2 miles',
        phone: '(626) 555-0789',
        hours: 'Mon-Fri 9AM-5PM, Sat 9AM-2PM'
      }
    ];

    return mockLocations;
  } catch (error) {
    console.error('Error finding drop-off locations:', error);
    return [];
  }
}

/**
 * Create a shipping label (handles test mode)
 */
export async function createShippingLabel(
  fromAddress: ShippingAddress,
  serviceLevel: string = 'usps_priority'
) {
  try {
    const isTestMode = process.env.SHIPPO_API_KEY?.startsWith('shippo_test');
    console.log('🧪 Shippo test mode detected:', isTestMode);

    const toAddress = {
      name: 'Dash Fixes',
      street1: '123 E Colorado Blvd',
      city: 'Pasadena',
      state: 'CA',
      zip: '91101',
      country: 'US'
    };

    const parcel = {
      length: '12',
      width: '8',
      height: '2',
      distanceUnit: 'in' as const,
      weight: '2',
      massUnit: 'lb' as const
    };

    console.log('📦 Creating shipment...');
    const shipment = await shippo.shipments.create({
      addressFrom: fromAddress,
      addressTo: toAddress,
      parcels: [parcel],
      async: false
    });
    console.log('✅ Shipment created, rates available:', shipment.rates?.length || 0);

    // Find the selected rate
    const selectedRate = shipment.rates.find((rate: any) =>
      rate.servicelevel.token === serviceLevel ||
      rate.servicelevel.name.toLowerCase().includes(serviceLevel.toLowerCase())
    );

    if (!selectedRate) {
      console.error('❌ No matching rate found for service:', serviceLevel);
      console.log('Available rates:', shipment.rates.map((r: any) => r.servicelevel.name));
      throw new Error('Selected shipping service not available');
    }

    console.log('💰 Selected rate:', selectedRate.servicelevel.name, 'Cost:', selectedRate.amount);

    if (isTestMode) {
      // In test mode, simulate a successful transaction without actually purchasing
      console.log('🧪 TEST MODE: Simulating successful label creation');

      // Generate a fake but realistic tracking number
      const trackingNumber = `1Z${Date.now().toString().slice(-10)}US`;

      // Return test data
      return {
        label_url: `https://shippo-test-label.example.com/${trackingNumber}.pdf`,
        tracking_number: trackingNumber,
        rate: {
          amount: selectedRate.amount,
          currency: selectedRate.currency,
          service: selectedRate.servicelevel.name
        }
      };
    }

    // Production mode: actually create the transaction
    console.log('💳 Creating actual transaction...');
    const transaction = await shippo.transactions.create({
      rate: selectedRate.objectId,
      labelFileType: 'PDF',
      async: false
    });

    console.log('✅ Transaction created:', transaction.objectId);

    return {
      label_url: transaction.labelUrl,
      tracking_number: transaction.trackingNumber,
      rate: {
        amount: selectedRate.amount,
        currency: selectedRate.currency,
        service: selectedRate.servicelevel.name
      }
    };
  } catch (error) {
    console.error('❌ Error creating shipping label:', error);
    console.error('❌ Full error:', error instanceof Error ? error.message : error);
    throw new Error(`Failed to create shipping label: ${error instanceof Error ? error.message : 'Unknown error'}`);
  }
}

export default shippo;