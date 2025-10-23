'use client';

import { useState, useEffect } from 'react';
import { useStripe, useElements, PaymentElement } from '@stripe/react-stripe-js';
import { formatServiceNumber } from '@/app/lib/service-number';

interface PaymentFormProps {
  clientSecret: string;
  serviceNumber: string;
  onSuccess: (serviceNumber: string) => void;
  onError: (error: string) => void;
}

export default function PaymentForm({
  clientSecret,
  serviceNumber,
  onSuccess,
  onError
}: PaymentFormProps) {
  const stripe = useStripe();
  const elements = useElements();
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (!stripe) {
      return;
    }

    // Handle payment success/failure messages from URL params
    const urlParams = new URLSearchParams(window.location.search);
    const paymentIntentClientSecret = urlParams.get('payment_intent_client_secret');
    const paymentIntentId = urlParams.get('payment_intent');

    if (paymentIntentClientSecret) {
      stripe.retrievePaymentIntent(paymentIntentClientSecret).then(({ paymentIntent: retrievedIntent }) => {
        switch (retrievedIntent?.status) {
          case 'succeeded':
            setMessage('Payment succeeded!');
            onSuccess(serviceNumber);
            break;
          case 'processing':
            setMessage('Your payment is processing.');
            break;
          case 'requires_payment_method':
            setMessage('Your payment was not successful, please try again.');
            onError('Payment failed. Please try again.');
            break;
          default:
            setMessage('Something went wrong.');
            onError('Something went wrong with your payment.');
            break;
        }
      }).catch((error) => {
        console.error('Error retrieving payment intent:', error);
        setMessage('Error checking payment status.');
        onError('Error checking payment status.');
      });
    }
  }, [stripe, serviceNumber, onSuccess, onError]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setIsLoading(true);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${window.location.origin}/track/${serviceNumber}?payment=success`,
      },
      redirect: 'if_required',
    });

    if (error) {
      setMessage(error.message || 'An error occurred.');
      onError(error.message || 'Payment failed');
      setIsLoading(false);
    } else {
      // Payment succeeded without redirect
      setMessage('Payment succeeded!');
      onSuccess(serviceNumber);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <PaymentElement
        options={{
          layout: 'tabs',
        }}
        onLoadError={(error) => {
          console.error('Payment Element load error:', error);
          onError('Failed to load payment form. Please refresh and try again.');
        }}
      />

      {message && (
        <div className={`p-4 rounded-lg ${
          message.includes('succeeded')
            ? 'bg-solarized-green/10 border border-solarized-green/20 text-solarized-green'
            : 'bg-solarized-red/10 border border-solarized-red/20 text-solarized-red'
        }`}>
          {message}
        </div>
      )}

      <button
        disabled={!stripe || isLoading}
        className="w-full px-6 py-3 bg-solarized-blue text-solarized-light rounded-lg font-medium text-center hover:bg-opacity-90 transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
      >
        {isLoading ? (
          <>
            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-solarized-light mr-2"></div>
            Processing...
          </>
        ) : (
          `Pay $9.99 & Get Service Code`
        )}
      </button>

      <div className="text-center text-sm text-solarized-dark3 dark:text-solarized-light3">
        <p className="mb-2">
          💳 Secure payment powered by Stripe
        </p>
        <p>
          Your service code will be: <span className="font-mono font-bold text-solarized-blue">
            {formatServiceNumber(serviceNumber)}
          </span>
        </p>
        <p className="text-sm mt-2">
          💰 This covers diagnostic + round-trip shipping. Repair costs will be quoted separately after inspection.
        </p>
      </div>
    </form>
  );
}