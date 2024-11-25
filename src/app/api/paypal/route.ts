import { NextResponse } from 'next/server';

const isProd = process.env.NODE_ENV === 'production';
const PAYPAL_API = isProd 
  ? 'https://api-m.paypal.com'
  : 'https://api-m.sandbox.paypal.com';

async function getPayPalAccessToken() {
  try {
    const response = await fetch(`${PAYPAL_API}/v1/oauth2/token`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Accept-Language': 'en_US',
        Authorization: `Basic ${Buffer.from(
          `${process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID}:${process.env.PAYPAL_CLIENT_SECRET}`
        ).toString('base64')}`,
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

export async function GET() {
  try {
    const accessToken = await getPayPalAccessToken();
    return NextResponse.json({ accessToken });
  } catch (error) {
    console.error('Error in PayPal API route:', error);
    return NextResponse.json(
      { error: 'Failed to get PayPal access token' },
      { status: 500 }
    );
  }
} 