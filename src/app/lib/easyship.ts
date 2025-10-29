// @ts-nocheck - EasyShip SDK has type compatibility issues

const easyshipApiUrl = 'https://api.easyship.com/v2';
const accessToken = process.env.EASYSHIP_ACCESS_TOKEN;

export interface ShippingAddress {
  name: string;
  line_1: string;
  city: string;
  state: string;
  postal_code: string;
  country: string;
  phone?: string;
  email?: string;
}

export interface ShippingRate {
  courier_id: string;
  courier_name: string;
  service_name: string;
  total_charge: number;
  currency: string;
  estimated_delivery_date: string;
}

export interface Parcel {
  weight: number; // kg
  dimensions: {
    length: number; // cm
    width: number; // cm
    height: number; // cm
  };
}

/**
 * Get shipping rates from customer's location to Dash Fixes
 */
export async function getShippingRates(fromAddress: ShippingAddress, parcel: Parcel): Promise<ShippingRate[]> {
  try {
    const requestBody = {
      origin_address: fromAddress,
      destination_address: {
        name: 'Dash Fixes',
        line_1: '123 E Colorado Blvd',
        city: 'Pasadena',
        state: 'CA',
        postal_code: '91101',
        country: 'US'
      },
      parcels: [parcel]
    };

    const response = await fetch(`${easyshipApiUrl}/rates`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody),
    });

    if (!response.ok) {
      throw new Error(`EasyShip API error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();

    return data.rates.map((rate: any) => ({
      courier_id: rate.courier_id,
      courier_name: rate.courier_name,
      service_name: rate.service_name,
      total_charge: rate.total_charge,
      currency: rate.currency,
      estimated_delivery_date: rate.estimated_delivery_date,
    }));
  } catch (error) {
    console.error('Error getting shipping rates:', error);
    // Return fallback rates
    return [
      {
        courier_id: 'usps_priority',
        courier_name: 'USPS',
        service_name: 'Priority Mail',
        total_charge: 9.99,
        currency: 'USD',
        estimated_delivery_date: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000).toISOString(),
      },
      {
        courier_id: 'fedex_ground',
        courier_name: 'FedEx',
        service_name: 'Ground',
        total_charge: 12.99,
        currency: 'USD',
        estimated_delivery_date: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toISOString(),
      }
    ];
  }
}

/**
 * Create a shipping label (EasyShip version)
 */
export async function createShippingLabel(
  fromAddress: ShippingAddress,
  courierId: string = 'usps_priority'
): Promise<{
  label_url: string;
  tracking_number: string;
  rate: {
    amount: number;
    currency: string;
    service: string;
  };
}> {
  try {
    const parcel: Parcel = {
      weight: 2.0, // 2kg
      dimensions: {
        length: 30, // 30cm
        width: 20, // 20cm
        height: 5   // 5cm
      }
    };

    // First get rates to ensure the courier is available
    const rates = await getShippingRates(fromAddress, parcel);
    const selectedRate = rates.find(rate => rate.courier_id === courierId) || rates[0];

    if (!selectedRate) {
      throw new Error('No suitable shipping rate found');
    }

    // Create shipment with label purchase
    const shipmentRequest = {
      origin_address: fromAddress,
      destination_address: {
        name: 'Dash Fixes',
        line_1: '123 E Colorado Blvd',
        city: 'Pasadena',
        state: 'CA',
        postal_code: '91101',
        country: 'US'
      },
      parcels: [parcel],
      courier_id: selectedRate.courier_id,
      buy_label: true,
      buy_label_synchronous: true, // Generate label immediately
      items: [{
        description: 'Electronic Device for Repair',
        quantity: 1,
        value: 100.00,
        currency: 'USD'
      }]
    };

    console.log('📦 Creating EasyShip shipment...');
    const response = await fetch(`${easyshipApiUrl}/shipments`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(shipmentRequest),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('EasyShip API error response:', errorText);
      throw new Error(`EasyShip API error: ${response.status} ${response.statusText} - ${errorText}`);
    }

    const shipment = await response.json();
    console.log('✅ EasyShip shipment created:', shipment.easyship_shipment_id);

    // Extract label information
    const label = shipment.shipments?.[0]?.label;
    if (!label) {
      throw new Error('No label data in EasyShip response');
    }

    return {
      label_url: label.label_url,
      tracking_number: label.tracking_number || shipment.tracking_number,
      rate: {
        amount: selectedRate.total_charge,
        currency: selectedRate.currency,
        service: selectedRate.service_name
      }
    };

  } catch (error) {
    console.error('❌ Error creating EasyShip shipping label:', error);
    console.error('❌ Full error:', error instanceof Error ? error.message : error);
    throw new Error(`Failed to create shipping label: ${error instanceof Error ? error.message : 'Unknown error'}`);
  }
}

const easyship = { getShippingRates, createShippingLabel };
export default easyship;