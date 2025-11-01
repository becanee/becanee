import { NextRequest } from 'next/server';

export async function checkAuthentication(req: NextRequest) {
  const token = req.headers.get('authorization')?.replace('Bearer ', '');
  const scope: any = req.headers.get('x-scope')
  const source: any = req.headers.get('x-source')

  // Check if req header exists
  if (!token) {
    return {
      success: false,
      message: 'No token provided'
    };
  }
  if (!scope) {
    return {
      success: false,
      message: 'No scope provided'
    };
  }

  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_KLOLA_DEV_URL}/auth/me`, {
      method: 'GET',
      headers: { 
        'x-scope': scope || 'dev',
        'lang': 'id',
        'x-source': source,
        'Authorization': `Bearer ${token}`
      },
      cache: 'no-store' // Ensure fresh data
    });

    if (response.status === 401) {
      return {
        success: false,
        message: 'Unauthorized: Invalid or expired token'
      };
    }

    if (response.status === 200) {
      const userData = await response.json();
      return {
        success: true,
        data: userData,
        message: 'Authentication successful'
      };
    }

    // Handle other unexpected status codes
    return {
      success: false,
      message: `Unexpected response: ${response.status}`
    };

  } catch (error) {
    console.error('Authentication error:', error);
    return {
      success: false,
      message: 'Network or server error'
    };
  }
}