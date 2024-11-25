const PAYPAL_OAUTH_API = 'https://api-m.sandbox.paypal.com/v1/oauth2/token';
const BASIC_AUTH = Buffer.from(`${process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID}:${process.env.PAYPAL_CLIENT_SECRET}`).toString('base64');

export async function getPayPalAccessToken() {
  try {
    const response = await fetch(PAYPAL_OAUTH_API, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Accept-Language': 'en_US',
        'Authorization': `Basic ${BASIC_AUTH}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: 'grant_type=client_credentials',
    });

    const data = await response.json();
    return data.access_token;
  } catch (error) {
    console.error('Error getting PayPal access token:', error);
    throw error;
  }
} 