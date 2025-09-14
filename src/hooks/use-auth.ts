/**
 * Func: Auth hooks untuk manage autentikasi user
 * Created At: Kamis, 7 Agustus 2025
 * Created By: becaneee.xyz
 */

"use client"

import { useState, useEffect, useCallback } from 'react'
import { supabase } from '@/lib/supabase'
import { setUserCookie, getUserCookie, removeUserCookie, isUserLoggedIn } from '@/lib/cookie'

/**
 * Func: Hook untuk manage autentikasi user
 * Created At: Kamis, 7 Agustus 2025
 * Created By: becaneee.xyz
 * @returns Object dengan auth state dan functions
 */
export function useAuth() {
  const [user, setUser] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Check cookie on mount
    const userData = getUserCookie()
    if (userData) {
      setUser(userData)
    }
    setLoading(false)
  }, [])

  
  /**
   * Func: Sign in dengan Klola
   * Created At: Kamis, 7 Agustus 2025
   * Created By: becaneee.xyz
   * @returns Promise dengan hasil sign in
   */
  const signInWithKlola = useCallback(async () => {
    try {
      setLoading(true)
      
      // Sign in dengan Google
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: `${window.location.origin}/auth/callback`
        }
      })

      if (error) throw error
      
      return { success: true, data }
    } catch (error) {
      console.error('Error signing in with Google:', error)
      return { success: false, error }
    } finally {
      setLoading(false)
    }
  }, [])

  /**
   * Func: Sign in dengan Google OAuth
   * Created At: Kamis, 7 Agustus 2025
   * Created By: becaneee.xyz
   * @returns Promise dengan hasil sign in
   */
  const signInWithGoogle = useCallback(async () => {
    try {
      setLoading(true)
      
      // Sign in dengan Google
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: `${window.location.origin}/auth/callback`
        }
      })

      if (error) throw error
      
      return { success: true, data }
    } catch (error) {
      console.error('Error signing in with Google:', error)
      return { success: false, error }
    } finally {
      setLoading(false)
    }
  }, [])

  /**
   * Func: Handle OAuth callback dan fetch user data
   * Created At: Kamis, 7 Agustus 2025
   * Created By: becaneee.xyz
   * @param email - Email user dari OAuth
   * @returns Promise dengan hasil callback
   */
  const handleAuthCallback = useCallback(async (email: string) => {
    try {
      setLoading(true)
      
      // Fetch user data dari table members
      const { data: members, error } = await supabase
        .from('members')
        .select('*')
        .eq('email', email)
        .single()

      if (error) {
        console.error('Error fetching user data:', error)
        return { success: false, error }
      }

      if (!members) {
        console.error('User not found in members table')
        return { success: false, error: 'User not found' }
      }

      // Set user data ke state dan cookie sesuai database structure terbaru
      const userData: any = {
        id: members.id,
        email: members.email,
        name: members.name,
        picture: members.picture,
        number: members.number,
        created_at: members.created_at,
        updated_at: members.updated_at,
        created_by: members.created_by,
        updated_by: members.updated_by,
        role: members.role
      }

      // console.log('Setting user data:', userData)
      setUser(userData)
      
      // Set cookie dengan masa berlaku 15 menit (0.01 hari)
      // setUserCookie(userData, 0.01)
      setUserCookie(userData)
      
      // Verify cookie was set
      setTimeout(() => {
        const savedCookie = getUserCookie()
        // console.log('Cookie verification:', { saved: !!savedCookie, userId: savedCookie?.id })
      }, 100)

      return { success: true, user: userData }
    } catch (error) {
      console.error('Error handling auth callback:', error)
      return { success: false, error }
    } finally {
      setLoading(false)
    }
  }, [])

  /**
   * Func: Sign out user
   * Created At: Kamis, 7 Agustus 2025
   * Created By: becaneee.xyz
   */
  const signOut = useCallback(async () => {
    try {
      await supabase.auth.signOut()
      setUser(null)
      removeUserCookie()
    } catch (error) {
      console.error('Error signing out:', error)
    }
  }, [])

  return {
    user,
    loading,
    isAuthenticated: !!user,
    signInWithGoogle,
    handleAuthCallback,
    signOut
  }
}
