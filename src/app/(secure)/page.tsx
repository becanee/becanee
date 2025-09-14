"use client"

import { CallbackCard } from '@/modules/auth/callback'
import axios from 'axios'
import { deleteCookie, setCookie } from 'cookies-next'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { toast } from 'sonner'

export default function AuthCallback() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const handleCallback = async () => {
    setLoading(true);
    const subdomain = window.location.host.split('.')[0];

    if (subdomain) {
      const checkResponse = await axios.get(`${process.env.NODE_ENV === 'production' ? 'https://' : 'http://'}${window.location.host}/api/check`, {
        headers: {
          'X-Scope': subdomain,
        }
      });

      if (checkResponse?.data?.data) {
        setCookie('_S', subdomain, {
          maxAge: 60 * 60 * 24 * 1, // 1 hari
          httpOnly: false,
          secure: process.env.NODE_ENV === 'production',
          sameSite: 'strict'
        });

        toast.success('Redirecting...')
        setTimeout(() => {
          setLoading(false);
          router.push('/d')
        }, 1000);
      } else {
        deleteCookie('_S'); // Scope cookie
        deleteCookie('_T'); // Token cookie
        deleteCookie('_U'); // User data cookie
        setError('Invalid subdomain or subdomain not registered')
        toast.error('Invalid subdomain or subdomain not registered')
      }
    }
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const subdomain = window.location.host.split('.')[0];
      console.log("CALLBACK: ", subdomain);
      handleCallback()
    }
  }, [])

  return (
    <>
      <div className="min-h-screen flex items-center justify-center">
        {
          loading && !error && (
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
              <p className="text-muted-foreground">Checking Configuration...</p>
            </div>
          )
        }
        {
          error && <CallbackCard />
        }
      </div>

    </>
  )
}
