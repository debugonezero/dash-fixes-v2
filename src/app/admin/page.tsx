'use client';

import { useState, useEffect } from 'react';

interface ServiceRequest {
  id: string;
  service_number: string;
  status: string;
  device_type: string;
  service_needed: string;
  device_model: string;
  issue_description: string;
  customer_name: string;
  customer_email: string;
  shipping_address: any;
  diagnostic_fee: number;
  created_at: string;
  updated_at: string;
  completed_at: string;
  payment_id: string;
  shipping_label_url: string;
  tracking_number: string;
  final_cost: number;
  shipping_provider: string;
}

const statusOptions = [
  'PENDING',
  'PAID',
  'SHIPPED',
  'RECEIVED',
  'REPAIRING',
  'COMPLETED',
  'CANCELLED',
  'SHIPPING_LABEL_GENERATED',
  'PAID_SHIPPING_ERROR'
];

export default function AdminPage() {
  const [requests, setRequests] = useState<ServiceRequest[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchRequests();
  }, []);

  const fetchRequests = async () => {
    try {
      const response = await fetch('/api/admin/service-requests');
      if (!response.ok) throw new Error('Failed to fetch requests');
      const data = await response.json();
      setRequests(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load requests');
    } finally {
      setLoading(false);
    }
  };

  const updateStatus = async (id: string, newStatus: string) => {
    try {
      const response = await fetch('/api/admin/service-requests', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, status: newStatus })
      });
      if (!response.ok) throw new Error('Failed to update status');
      // Refresh the list
      fetchRequests();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to update status');
    }
  };

  if (loading) return <div className="p-8">Loading...</div>;
  if (error) return <div className="p-8 text-red-500">{error}</div>;

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Service Requests Management</h1>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 p-2">Service #</th>
              <th className="border border-gray-300 p-2">Customer</th>
              <th className="border border-gray-300 p-2">Device</th>
              <th className="border border-gray-300 p-2">Service</th>
              <th className="border border-gray-300 p-2">Issue</th>
              <th className="border border-gray-300 p-2">Status</th>
              <th className="border border-gray-300 p-2">Created</th>
              <th className="border border-gray-300 p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {requests.map((req) => (
              <tr key={req.id} className="hover:bg-gray-50">
                <td className="border border-gray-300 p-2 font-mono">{req.service_number}</td>
                <td className="border border-gray-300 p-2">
                  <div>{req.customer_name}</div>
                  <div className="text-sm text-gray-600">{req.customer_email}</div>
                </td>
                <td className="border border-gray-300 p-2">
                  <div>{req.device_type}</div>
                  <div className="text-sm text-gray-600">{req.service_needed}</div>
                </td>
                <td className="border border-gray-300 p-2 max-w-xs truncate" title={req.issue_description}>
                  {req.issue_description}
                </td>
                <td className="border border-gray-300 p-2">
                  <select
                    value={req.status}
                    onChange={(e) => updateStatus(req.id, e.target.value)}
                    className="border rounded p-1"
                  >
                    {statusOptions.map((status) => (
                      <option key={status} value={status}>{status}</option>
                    ))}
                  </select>
                </td>
                <td className="border border-gray-300 p-2 text-sm">
                  {new Date(req.created_at).toLocaleDateString()}
                </td>
                <td className="border border-gray-300 p-2">
                  <button
                    onClick={() => {/* View details */}}
                    className="text-blue-600 hover:underline mr-2"
                  >
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}