'use client';

import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { useEffect, useState } from 'react';

interface SubscriptionDetails {
  id: string;
  status: string;
  planId: string;
  startTime: string;
  subscriber: {
    email_address: string;
    name: {
      given_name: string;
      surname: string;
    };
  };
  billingInfo: {
    nextBillingTime: string;
    failedPayments: number;
    cyclesCompleted: number;
  };
}

export default function SuccessPage() {
  const searchParams = useSearchParams();
  const subscriptionId = searchParams.get('subscriptionId');
  const [subscription, setSubscription] = useState<SubscriptionDetails | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (subscriptionId) {
      fetchSubscriptionDetails();
    }
  }, [subscriptionId]);

  const fetchSubscriptionDetails = async () => {
    try {
      const response = await fetch(`/api/paypal/subscription/${subscriptionId}`);
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || 'Failed to fetch subscription details');
      }

      setSubscription(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen p-8">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-3xl font-bold mb-4">Loading subscription details...</h1>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen p-8">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-3xl font-bold mb-4">Error</h1>
          <p className="text-red-500 mb-4">{error}</p>
          <Link
            href="/"
            className="inline-block bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors"
          >
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center">Subscription Successful!</h1>
        
        {subscription && (
          <div className="bg-white shadow rounded-lg p-6 space-y-4">
            <div className="border-b pb-4">
              <h2 className="text-xl font-semibold mb-2">Subscription Details</h2>
              <p className="text-gray-600">ID: {subscription.id}</p>
              <p className="text-gray-600">Status: <span className="capitalize">{subscription.status}</span></p>
              <p className="text-gray-600">Start Date: {new Date(subscription.startTime).toLocaleDateString()}</p>
            </div>

            <div className="border-b pb-4">
              <h2 className="text-xl font-semibold mb-2">Subscriber Information</h2>
              <p className="text-gray-600">Name: {subscription.subscriber.name.given_name} {subscription.subscriber.name.surname}</p>
              <p className="text-gray-600">Email: {subscription.subscriber.email_address}</p>
            </div>

            <div className="border-b pb-4">
              <h2 className="text-xl font-semibold mb-2">Billing Information</h2>
              <p className="text-gray-600">Next Billing Date: {new Date(subscription.billingInfo.nextBillingTime).toLocaleDateString()}</p>
              <p className="text-gray-600">Failed Payments: {subscription.billingInfo.failedPayments}</p>
              <p className="text-gray-600">Cycles Completed: {subscription.billingInfo.cyclesCompleted}</p>
            </div>
          </div>
        )}

        <div className="mt-8 text-center">
          <Link
            href="/"
            className="inline-block bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors"
          >
            Return to Home
          </Link>
        </div>
      </div>
    </div>
  );
} 