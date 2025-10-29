// Test script to simulate Stripe webhook for testing PDF generation
const fetch = require('node-fetch');

const webhookPayload = {
  "id": "evt_test_webhook",
  "object": "event",
  "api_version": "2025-09-30.clover",
  "created": Math.floor(Date.now() / 1000),
  "data": {
    "object": {
      "id": "pi_test_payment",
      "object": "payment_intent",
      "amount": 999,
      "currency": "usd",
      "status": "succeeded",
      "metadata": {
        "serviceRequestId": "TEST123456"
      }
    }
  },
  "livemode": false,
  "pending_webhooks": 1,
  "request": {
    "id": "req_test",
    "idempotency_key": null
  },
  "type": "payment_intent.succeeded"
};

async function testWebhook() {
  try {
    console.log('🧪 Testing webhook with mock payment success...');

    const response = await fetch('http://localhost:3001/api/webhooks/stripe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Stripe-Signature': 't=' + Math.floor(Date.now() / 1000) + ',v1=test_signature'
      },
      body: JSON.stringify(webhookPayload)
    });

    const result = await response.text();
    console.log('📡 Webhook response:', response.status);
    console.log('📄 Response body:', result);

  } catch (error) {
    console.error('❌ Webhook test failed:', error.message);
  }
}

testWebhook();