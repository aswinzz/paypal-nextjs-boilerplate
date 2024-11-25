'use client';

import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

export default function SuccessPage() {
  const searchParams = useSearchParams();
  const subscriptionId = searchParams.get('subscriptionId');

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-3xl font-bold mb-4">Subscription Successful!</h1>
        <p className="mb-4">Your subscription ID: {subscriptionId}</p>
        <p className="text-gray-600 mb-8">
          Thank you for subscribing. You can now access all features.
        </p>
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