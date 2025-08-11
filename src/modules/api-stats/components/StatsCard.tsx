import { formatNumber, formatWithSeparator } from "@/utils/format-numbers"
import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { IconTrendingUp } from "@tabler/icons-react"

interface StatsCardProps {
  title: string
  value: number
  description: string
  icon: string
  trend?: number
}

/**
 * Individual card untuk menampilkan statistik API
 * Menggunakan style yang sama dengan SectionCards
 */
export function StatsCard({ title, value, description, icon, trend = 0 }: StatsCardProps) {
  return (
    <Card className="@container/card">
      <CardHeader>
        <CardDescription>{title}</CardDescription>
        <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
          {formatNumber(value)}
        </CardTitle>
        <CardAction>
          <Badge variant="outline">
            <IconTrendingUp />
            {trend > 0 ? '+' : ''}{trend}%
          </Badge>
        </CardAction>
      </CardHeader>
      <CardFooter className="flex-col items-start gap-1.5 text-sm">
        <div className="line-clamp-1 flex gap-2 font-medium">
          {description} <span className="text-2xl">{icon}</span>
        </div>
        <div className="text-muted-foreground">
          Raw: {formatWithSeparator(value)}
        </div>
      </CardFooter>
    </Card>
  )
}
