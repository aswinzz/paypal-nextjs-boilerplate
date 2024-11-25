# PayPal Subscription Boilerplate for Next.js

A production-ready boilerplate for implementing PayPal subscriptions in Next.js applications. This boilerplate supports both monthly and yearly subscription plans with sandbox and production environments.

## Features

- 🔒 Secure PayPal integration
- 💳 Monthly and yearly subscription options
- 🎯 Sandbox and production environment support
- 🚀 Built with Next.js and TypeScript
- 🎨 Styled with Tailwind CSS
- 🔄 Automatic environment switching
- 📱 Responsive design

## Prerequisites

Before you begin, ensure you have:
- Node.js 16.x or later
- npm or yarn
- A PayPal Business account
- A PayPal Developer account

## Setup Instructions

### 1. PayPal Account Setup

1. Create a PayPal Business account at [PayPal.com](https://www.paypal.com) if you don't have one
2. Create production subscription plans at [PayPal Billing Plans](https://www.paypal.com/billing/plans):
   - Create Monthly Plan
   - Create Yearly Plan
   - Save both plan IDs for production use

### 2. PayPal Developer Setup

1. Go to [PayPal Developer Dashboard](https://developer.paypal.com/dashboard/)
2. Navigate to "Sandbox" > "Accounts"
3. Create two sandbox accounts:
   - Business account (for receiving payments)
   - Personal account (for testing payments)
   - Save credentials for both accounts

### 3. Create Sandbox Plans

1. Log into [PayPal Sandbox](https://sandbox.paypal.com) using your sandbox business account credentials
2. Go to sandbox.paypal.com/billing/plans
3. Create sandbox subscription plans:
   - Create Monthly Plan
   - Create Yearly Plan
   - Save both sandbox plan IDs

### 4. Create PayPal Application

1. In the PayPal Developer Dashboard, go to "Apps & Credentials"
2. Click "Create App"
3. Choose a name for your application
4. Select "Merchant" as the app type
5. Click "Create App"
6. Note down the Client ID and Secret
7. Under "Features", enable:
   - "Subscription billing"
   - "Vault"
8. Save the changes

### 5. Project Setup

1. Clone the repository:
   git clone https://github.com/aswinzz/paypal-nextjs-boilerplate.git
   cd paypal-nextjs-boilerplate

2. Install dependencies:
   npm install
   # or
   yarn install

3. Copy the environment template:
   cp .env.local.example .env.local

4. Update .env.local with your PayPal credentials:
   - Add your PayPal Client ID and Secret
   - Add your sandbox plan IDs
   - Add production plan IDs when ready
   - Set currency if different from USD

### 6. Development

Run the development server:
npm run dev
# or
yarn dev

Visit http://localhost:3000 to see your application.

## Testing Payments

1. Use your sandbox personal account credentials to make test payments
2. Click on either subscription option
3. Log in with your sandbox personal account email and password
4. Complete the subscription process
5. You'll be redirected to the success page
6. Verify the subscription in your sandbox business account

## Going to Production

1. Create a PayPal live application:
   - Go to PayPal Developer Dashboard
   - Switch to "Live" mode
   - Create a new app
   - Enable required features

2. Create production subscription plans:
   - Log into your PayPal Business account
   - Create plans with actual pricing
   - Note down the production plan IDs

3. Update environment variables with production values
4. Deploy your application

## Common Issues and Solutions

### PayPal Button Not Showing
- Verify your Client ID is correct
- Check if the PayPal script loaded successfully
- Ensure you're using the correct environment (sandbox/production)

### Subscription Creation Failed
- Verify plan IDs are correct and active
- Check if the subscription feature is enabled in your PayPal app
- Ensure your PayPal account can accept subscription payments

### Payment Failed
- Use correct sandbox account credentials
- Ensure the sandbox account has sufficient balance
- Check if the plan's currency matches your PayPal account currency

## Best Practices

1. Security
   - Never commit .env files
   - Keep PayPal credentials secure
   - Use environment variables for sensitive data

2. Testing
   - Test thoroughly in sandbox environment
   - Test different payment scenarios
   - Verify subscription cancellation flow

3. Error Handling
   - Implement proper error messages
   - Log PayPal API responses
   - Handle network failures gracefully

4. User Experience
   - Show loading states during payment
   - Display clear success/error messages
   - Provide subscription management options

## Contributing

1. Fork the repository
2. Create your feature branch (git checkout -b feature/AmazingFeature)
3. Commit your changes (git commit -m 'Add some AmazingFeature')
4. Push to the branch (git push origin feature/AmazingFeature)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- PayPal Developer Documentation
- Next.js Documentation
- React PayPal JS SDK

## Support

For support, please create an issue in the GitHub repository or contact the maintainers.