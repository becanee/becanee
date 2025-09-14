"use client"

import { useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabase'
import { useAuth } from '@/hooks/use-auth'

export default function AuthCallback() {
  const router = useRouter()
  const { handleAuthCallback } = useAuth()
  const hasProcessed = useRef(false)

  useEffect(() => {
    const handleCallback = async () => {
      // Prevent multiple executions
      if (hasProcessed.current) return
      hasProcessed.current = true

      try {
        // Get session dari Supabase
        const { data: { session }, error } = await supabase.auth.getSession()
        
        if (error) {
          console.error('Error getting session:', error)
          router.push('/auth?error=auth_error')
          return
        }

        if (!session?.user?.email) {
          console.error('No user email found')
          router.push('/auth?error=no_email')
          return
        }

        // Handle auth callback dengan email user
        // console.log('Processing auth callback for email:', session.user.email)
        const result = await handleAuthCallback(session.user.email)
        
        if (result.success) {
          // console.log('Auth callback berhasil, user data:', result.user)
          
          // Langsung redirect ke /member setelah callback berhasil
          // Cookie sudah diatur di handleAuthCallback
          console.log('Redirecting to /d...')
          router.push('/d')
        } else {
          console.error('Auth callback gagal:', result.error)
          // Redirect ke auth dengan error
          router.push('/auth?error=user_not_found')
        }
      } catch (error) {
        console.error('Error in auth callback:', error)
        router.push('/auth?error=callback_error')
      }
    }

    handleCallback()
  }, []) // Remove dependencies to prevent infinite loop

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
        <p className="text-muted-foreground">Processing authentication...</p>
      </div>
    </div>
  )
}
