"use client"

import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { toast } from 'sonner'

export default function AuthCallback() {
  const router = useRouter()

  useEffect(() => {
    const handleCallback = async () => {
      setTimeout(() => {
        toast.success('Your browser is secure!');
        setTimeout(() => {
          router.push('/d')
        }, 1000);
      }, 2000);
    }

    handleCallback()
  }, [])

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
        <p className="text-muted-foreground">Checking Browser...</p>
      </div>
    </div>
  )
}
