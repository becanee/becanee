"use client"

import { useState, useEffect } from "react"

/**
 * Interface untuk data stats API
 */
interface ApiStats {
  totalActiveApis: number
  todayRequests: number
  weeklyRequests: number
  overallRequests: number
}

/**
 * Hook untuk mengelola stats API
 * @returns Object berisi stats dan loading state
 */
export function useApiStats() {
  const [stats, setStats] = useState<ApiStats>({
    totalActiveApis: 0,
    todayRequests: 0,
    weeklyRequests: 0,
    overallRequests: 0
  })
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulasi data loading
    const loadStats = async () => {
      setIsLoading(true)
      
      // Simulasi API call delay
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // Mock data untuk demo
      setStats({
        totalActiveApis: 24,
        todayRequests: 15420,
        weeklyRequests: 108500,
        overallRequests: 2840000
      })
      
      setIsLoading(false)
    }

    loadStats()
  }, [])

  return { stats, isLoading }
}
