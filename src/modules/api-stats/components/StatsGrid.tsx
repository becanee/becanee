import { StatsCard } from "./StatsCard"

interface ApiStats {
  totalActiveApis: number
  todayRequests: number
  weeklyRequests: number
  overallRequests: number
}

interface StatsGridProps {
  stats: ApiStats
}

/**
 * Grid component untuk menampilkan semua stats cards
 * Menggunakan style yang sama dengan SectionCards
 */
export function StatsGrid({ stats }: StatsGridProps) {
  return (
    <div className="*:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card grid grid-cols-4 gap-4 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:shadow-xs">
      <StatsCard
        title="Total Active APIs"
        value={stats.totalActiveApis}
        description="Currently active APIs"
        icon="🔌"
        trend={12.5}
      />
      <StatsCard
        title="Today's Requests"
        value={stats.todayRequests}
        description="Requests in last 24 hours"
        icon="📊"
        trend={8.2}
      />
      <StatsCard
        title="Weekly Requests"
        value={stats.weeklyRequests}
        description="Requests in last 7 days"
        icon="📈"
        trend={15.7}
      />
      <StatsCard
        title="Overall Requests"
        value={stats.overallRequests}
        description="Total requests since launch"
        icon="🚀"
        trend={22.3}
      />
    </div>
  )
}
