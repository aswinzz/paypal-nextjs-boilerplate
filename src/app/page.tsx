import { SUBSCRIPTION_PLANS } from '@/config/paypal';
import SubscriptionButton from '@/components/SubscriptionButton';

export default function Home() {
  return (
    <main className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Choose Your Subscription Plan</h1>
        <div className="grid md:grid-cols-2 gap-8">
          {SUBSCRIPTION_PLANS.map((plan) => (
            <div
              key={plan.id}
              className="border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <h2 className="text-xl font-semibold mb-2">{plan.name}</h2>
              <p className="text-gray-600 mb-4">{plan.description}</p>
              <p className="text-2xl font-bold mb-6">
                ${plan.price}/{plan.interval === 'MONTH' ? 'month' : 'year'}
              </p>
              <SubscriptionButton plan={plan} />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
