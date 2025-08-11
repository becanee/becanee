"use client"

import { useApiStats } from "@/hooks/use-api-stats"
import { StatsCard } from "./components/StatsCard"
import { StatsGrid } from "./components/StatsGrid"
import { ApiRequestsTable } from "./components/ApiRequestsTable"
import { useEffect } from "react"
import { toast } from "sonner"

/**
 * Main component untuk menampilkan stats API
 * Menggunakan client component sesuai cursor rules
 */
export default function ApiStats() {
  const { stats, isLoading } = useApiStats()

  useEffect(() => {
    setTimeout(() => {
      toast.warning('Beta Public', {
        description: 'this website is still in beta, so some features may not work as expected',
        dismissible: true,
        closeButton: true,
        duration: Infinity,
        position: 'top-right',
      })
    }, 2000);
  })

  if (isLoading) {
    return (
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="h-32 animate-pulse rounded-lg bg-muted" />
        ))}
      </div>
    )
  }

  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-2">
        <h2 className="text-2xl font-bold tracking-tight">API Statistics</h2>
        <p className="text-muted-foreground">
          Overview of your public REST APIs performance and usage
        </p>
      </div>
      
      <StatsGrid stats={stats} />
      
      <ApiRequestsTable />
    </div>
  )
}
