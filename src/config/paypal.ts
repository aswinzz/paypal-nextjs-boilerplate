import { PayPalConfig, SubscriptionPlan } from '@/types/paypal';

const isProd = process.env.NODE_ENV === 'production';

export const PAYPAL_CONFIG: PayPalConfig = {
  clientId: process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID!,
  currency: process.env.NEXT_PUBLIC_PAYPAL_CURRENCY || 'USD',
  environment: isProd ? 'production' : 'sandbox'
};

export const SUBSCRIPTION_PLANS: SubscriptionPlan[] = [
  {
    id: isProd 
      ? process.env.NEXT_PUBLIC_PAYPAL_MONTHLY_PLAN_ID_PROD!
      : process.env.NEXT_PUBLIC_PAYPAL_MONTHLY_PLAN_ID_SANDBOX!,
    name: 'Monthly Subscription',
    description: 'Access to all features billed monthly',
    price: 10,
    interval: 'MONTH',
  },
  {
    id: isProd
      ? process.env.NEXT_PUBLIC_PAYPAL_YEARLY_PLAN_ID_PROD!
      : process.env.NEXT_PUBLIC_PAYPAL_YEARLY_PLAN_ID_SANDBOX!,
    name: 'Yearly Subscription',
    description: 'Access to all features billed yearly',
    price: 100,
    interval: 'YEAR',
  },
]; 