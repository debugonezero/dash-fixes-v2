'use client';

import { useState } from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { stripePromise } from '@/app/lib/stripe';
import PaymentForm from './PaymentForm';

interface FormData {
  deviceType: string;
  serviceType: string;
  issueDescription: string;
  customerName: string;
  customerEmail: string;
  shippingAddress: {
    street1: string;
    city: string;
    state: string;
    zip: string;
    country: string;
  };
}

export default function RepairRequestForm() {
  const [formData, setFormData] = useState<FormData>({
    deviceType: '',
    serviceType: '',
    issueDescription: '',
    customerName: '',
    customerEmail: '',
    shippingAddress: {
      street1: '',
      city: '',
      state: '',
      zip: '',
      country: 'US',
    },
  });

  const [step, setStep] = useState<'form' | 'payment'>('form');
  const [clientSecret, setClientSecret] = useState('');
  const [serviceNumber, setServiceNumber] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;

    if (name.includes('.')) {
      const [parent, child] = name.split('.');
      setFormData(prev => ({
        ...prev,
        [parent]: {
          ...prev[parent as keyof FormData] as Record<string, string>,
          [child]: value
        }
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const response = await fetch('/api/create-payment-intent', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to create payment intent');
      }

      setClientSecret(data.clientSecret);
      setServiceNumber(data.serviceNumber);
      setStep('payment');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handlePaymentSuccess = (serviceNumber: string) => {
    // Redirect to tracking page
    window.location.href = `/track/${serviceNumber}?payment=success`;
  };

  const handlePaymentError = (error: string) => {
    setError(error);
    setStep('form');
  };

  if (step === 'payment' && clientSecret) {
    return (
      <div className="max-w-2xl mx-auto">
        <div className="bg-white dark:bg-solarized-dark2 rounded-xl p-8 shadow-md border border-solarized-light3 dark:border-solarized-dark3">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-heading font-bold mb-4 text-solarized-dark3 dark:text-solarized-light">
              Complete Payment
            </h2>
            <p className="text-solarized-dark3 dark:text-solarized-light3">
              Pay $9.99 for your pre-paid shipping label and get instant tracking
            </p>
          </div>

          <Elements
            stripe={stripePromise}
            options={{
              clientSecret,
              appearance: {
                theme: 'stripe',
              },
            }}
          >
            <PaymentForm
              clientSecret={clientSecret}
              serviceNumber={serviceNumber}
              onSuccess={handlePaymentSuccess}
              onError={handlePaymentError}
            />
          </Elements>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white dark:bg-solarized-dark2 rounded-xl p-8 shadow-md border border-solarized-light3 dark:border-solarized-dark3">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-heading font-bold mb-4 text-solarized-dark3 dark:text-solarized-light">
            Request Mail-in Repair
          </h2>
          <p className="text-solarized-dark3 dark:text-solarized-light3">
            Fill out the form below and pay $9.99 for your pre-paid shipping label
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Device Information */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="deviceType" className="block text-sm font-medium text-solarized-dark3 dark:text-solarized-light mb-2">
                Device Type *
              </label>
              <select
                id="deviceType"
                name="deviceType"
                value={formData.deviceType}
                onChange={handleInputChange}
                required
                className="block w-full px-4 py-3 rounded-lg bg-solarized-light2 dark:bg-solarized-dark border border-solarized-light3 dark:border-solarized-dark3 focus:ring-solarized-blue focus:border-solarized-blue transition"
              >
                <option value="">Select device type</option>
                <option value="iPhone">iPhone</option>
                <option value="Android Phone">Android Phone</option>
                <option value="iPad">iPad</option>
                <option value="Tablet">Tablet</option>
                <option value="Laptop">Laptop</option>
                <option value="MacBook">MacBook</option>
                <option value="Game Console">Game Console</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div>
              <label htmlFor="serviceType" className="block text-sm font-medium text-solarized-dark3 dark:text-solarized-light mb-2">
                Service Type *
              </label>
              <select
                id="serviceType"
                name="serviceType"
                value={formData.serviceType}
                onChange={handleInputChange}
                required
                className="block w-full px-4 py-3 rounded-lg bg-solarized-light2 dark:bg-solarized-dark border border-solarized-light3 dark:border-solarized-dark3 focus:ring-solarized-blue focus:border-solarized-blue transition"
              >
                <option value="">Select service type</option>
                <option value="Screen Repair">Screen Repair</option>
                <option value="Battery Replacement">Battery Replacement</option>
                <option value="Charging Port Fix">Charging Port Fix</option>
                <option value="Data Recovery">Data Recovery</option>
                <option value="Performance Optimization">Performance Optimization</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="issueDescription" className="block text-sm font-medium text-solarized-dark3 dark:text-solarized-light mb-2">
              Describe the Issue *
            </label>
            <textarea
              id="issueDescription"
              name="issueDescription"
              value={formData.issueDescription}
              onChange={handleInputChange}
              rows={4}
              required
              placeholder="Please describe what's wrong with your device..."
              className="block w-full px-4 py-3 rounded-lg bg-solarized-light2 dark:bg-solarized-dark border border-solarized-light3 dark:border-solarized-dark3 focus:ring-solarized-blue focus:border-solarized-blue transition"
            />
          </div>

          {/* Customer Information */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="customerName" className="block text-sm font-medium text-solarized-dark3 dark:text-solarized-light mb-2">
                Full Name *
              </label>
              <input
                type="text"
                id="customerName"
                name="customerName"
                value={formData.customerName}
                onChange={handleInputChange}
                required
                className="block w-full px-4 py-3 rounded-lg bg-solarized-light2 dark:bg-solarized-dark border border-solarized-light3 dark:border-solarized-dark3 focus:ring-solarized-blue focus:border-solarized-blue transition"
              />
            </div>

            <div>
              <label htmlFor="customerEmail" className="block text-sm font-medium text-solarized-dark3 dark:text-solarized-light mb-2">
                Email Address *
              </label>
              <input
                type="email"
                id="customerEmail"
                name="customerEmail"
                value={formData.customerEmail}
                onChange={handleInputChange}
                required
                className="block w-full px-4 py-3 rounded-lg bg-solarized-light2 dark:bg-solarized-dark border border-solarized-light3 dark:border-solarized-dark3 focus:ring-solarized-blue focus:border-solarized-blue transition"
              />
            </div>
          </div>

          {/* Shipping Address */}
          <div className="border-t border-solarized-light3 dark:border-solarized-dark3 pt-6">
            <h3 className="text-lg font-heading font-bold mb-4 text-solarized-dark3 dark:text-solarized-light">
              Shipping Address
            </h3>

            <div className="space-y-4">
              <div>
                <label htmlFor="shippingAddress.street1" className="block text-sm font-medium text-solarized-dark3 dark:text-solarized-light mb-2">
                  Street Address *
                </label>
                <input
                  type="text"
                  id="shippingAddress.street1"
                  name="shippingAddress.street1"
                  value={formData.shippingAddress.street1}
                  onChange={handleInputChange}
                  required
                  className="block w-full px-4 py-3 rounded-lg bg-solarized-light2 dark:bg-solarized-dark border border-solarized-light3 dark:border-solarized-dark3 focus:ring-solarized-blue focus:border-solarized-blue transition"
                />
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <label htmlFor="shippingAddress.city" className="block text-sm font-medium text-solarized-dark3 dark:text-solarized-light mb-2">
                    City *
                  </label>
                  <input
                    type="text"
                    id="shippingAddress.city"
                    name="shippingAddress.city"
                    value={formData.shippingAddress.city}
                    onChange={handleInputChange}
                    required
                    className="block w-full px-4 py-3 rounded-lg bg-solarized-light2 dark:bg-solarized-dark border border-solarized-light3 dark:border-solarized-dark3 focus:ring-solarized-blue focus:border-solarized-blue transition"
                  />
                </div>

                <div>
                  <label htmlFor="shippingAddress.state" className="block text-sm font-medium text-solarized-dark3 dark:text-solarized-light mb-2">
                    State *
                  </label>
                  <input
                    type="text"
                    id="shippingAddress.state"
                    name="shippingAddress.state"
                    value={formData.shippingAddress.state}
                    onChange={handleInputChange}
                    required
                    className="block w-full px-4 py-3 rounded-lg bg-solarized-light2 dark:bg-solarized-dark border border-solarized-light3 dark:border-solarized-dark3 focus:ring-solarized-blue focus:border-solarized-blue transition"
                  />
                </div>

                <div>
                  <label htmlFor="shippingAddress.zip" className="block text-sm font-medium text-solarized-dark3 dark:text-solarized-light mb-2">
                    ZIP Code *
                  </label>
                  <input
                    type="text"
                    id="shippingAddress.zip"
                    name="shippingAddress.zip"
                    value={formData.shippingAddress.zip}
                    onChange={handleInputChange}
                    required
                    pattern="[0-9]{5}"
                    title="Please enter a valid 5-digit ZIP code"
                    className="block w-full px-4 py-3 rounded-lg bg-solarized-light2 dark:bg-solarized-dark border border-solarized-light3 dark:border-solarized-dark3 focus:ring-solarized-blue focus:border-solarized-blue transition"
                  />
                </div>
              </div>
            </div>
          </div>

          {error && (
            <div className="p-4 bg-solarized-red/10 border border-solarized-red/20 rounded-lg">
              <p className="text-solarized-red text-sm">{error}</p>
            </div>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full px-6 py-3 bg-solarized-blue text-solarized-light rounded-lg font-medium text-center hover:bg-opacity-90 transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
          >
            {isSubmitting ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-solarized-light mr-2"></div>
                Creating Service Request...
              </>
            ) : (
              'Continue to Payment ($9.99)'
            )}
          </button>

          <p className="text-center text-sm text-solarized-dark3 dark:text-solarized-light3">
            🔒 Your information is secure and will only be used for your repair service
          </p>
        </form>
      </div>
    </div>
  );
}