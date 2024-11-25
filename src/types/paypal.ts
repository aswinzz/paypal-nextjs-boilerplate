export interface SubscriptionPlan {
  id: string;
  name: string;
  description: string;
  price: number;
  interval: 'MONTH' | 'YEAR';
}

export interface PayPalConfig {
  clientId: string;
  currency: string;
  environment: 'sandbox' | 'production';
} 