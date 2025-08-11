"use client"

import * as React from "react"
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export const description = "An interactive area chart for API requests"

// Data untuk API requests yang sesuai dengan konsep platform
const chartData = [
  { date: "2024-04-01", success: 15420, failed: 120 },
  { date: "2024-04-02", success: 14890, failed: 98 },
  { date: "2024-04-03", success: 16200, failed: 156 },
  { date: "2024-04-04", success: 17500, failed: 134 },
  { date: "2024-04-05", success: 18900, failed: 167 },
  { date: "2024-04-06", success: 20100, failed: 189 },
  { date: "2024-04-07", success: 19400, failed: 145 },
  { date: "2024-04-08", success: 21800, failed: 234 },
  { date: "2024-04-09", success: 15600, failed: 89 },
  { date: "2024-04-10", success: 18200, failed: 167 },
  { date: "2024-04-11", success: 19800, failed: 189 },
  { date: "2024-04-12", success: 21500, failed: 234 },
  { date: "2024-04-13", success: 22800, failed: 256 },
  { date: "2024-04-14", success: 20100, failed: 178 },
  { date: "2024-04-15", success: 18900, failed: 145 },
  { date: "2024-04-16", success: 20300, failed: 189 },
  { date: "2024-04-17", success: 23400, failed: 267 },
  { date: "2024-04-18", success: 24500, failed: 289 },
  { date: "2024-04-19", success: 21800, failed: 234 },
  { date: "2024-04-20", success: 18900, failed: 167 },
  { date: "2024-04-21", success: 20100, failed: 189 },
  { date: "2024-04-22", success: 21500, failed: 234 },
  { date: "2024-04-23", success: 20300, failed: 198 },
  { date: "2024-04-24", success: 22800, failed: 256 },
  { date: "2024-04-25", success: 21200, failed: 223 },
  { date: "2024-04-26", success: 19800, failed: 189 },
  { date: "2024-04-27", success: 23400, failed: 267 },
  { date: "2024-04-28", success: 20100, failed: 178 },
  { date: "2024-04-29", success: 21800, failed: 234 },
  { date: "2024-04-30", success: 24500, failed: 289 },
  { date: "2025-01-01", success: 19800, failed: 167 },
  { date: "2025-01-02", success: 21200, failed: 189 },
  { date: "2025-01-03", success: 20100, failed: 178 },
  { date: "2025-01-04", success: 22800, failed: 256 },
  { date: "2025-01-05", success: 24500, failed: 289 },
  { date: "2025-01-06", success: 25600, failed: 312 },
  { date: "2025-01-07", success: 23400, failed: 267 },
  { date: "2025-01-08", success: 20100, failed: 178 },
  { date: "2025-01-09", success: 21800, failed: 234 },
  { date: "2025-01-10", success: 23200, failed: 256 },
  { date: "2025-01-11", success: 24500, failed: 289 },
  { date: "2025-01-12", success: 21200, failed: 223 },
  { date: "2025-01-13", success: 19800, failed: 189 },
  { date: "2025-01-14", success: 23400, failed: 267 },
  { date: "2025-01-15", success: 24500, failed: 289 },
  { date: "2025-01-16", success: 21800, failed: 234 },
  { date: "2025-01-17", success: 25600, failed: 312 },
  { date: "2025-01-18", success: 23400, failed: 267 },
  { date: "2025-01-19", success: 21200, failed: 223 },
  { date: "2025-01-20", success: 19800, failed: 189 },
  { date: "2025-01-21", success: 21800, failed: 234 },
  { date: "2025-01-22", success: 20100, failed: 178 },
  { date: "2025-01-23", success: 22800, failed: 256 },
  { date: "2025-01-24", success: 24500, failed: 289 },
  { date: "2025-01-25", success: 21200, failed: 223 },
  { date: "2025-01-26", success: 19800, failed: 189 },
  { date: "2025-01-27", success: 23400, failed: 267 },
  { date: "2025-01-28", success: 20100, failed: 178 },
  { date: "2025-01-29", success: 21800, failed: 234 },
  { date: "2025-01-30", success: 23200, failed: 256 },
  { date: "2025-01-31", success: 19800, failed: 178 },
  { date: "2025-02-01", success: 21200, failed: 189 },
  { date: "2025-02-02", success: 24500, failed: 289 },
  { date: "2025-02-03", success: 20100, failed: 178 },
  { date: "2025-02-04", success: 21800, failed: 234 },
  { date: "2025-02-05", success: 23200, failed: 256 },
  { date: "2025-02-06", success: 24500, failed: 289 },
  { date: "2025-02-07", success: 25600, failed: 312 },
  { date: "2025-02-08", success: 23400, failed: 267 },
  { date: "2025-02-09", success: 21800, failed: 234 },
  { date: "2025-02-10", success: 20100, failed: 178 },
  { date: "2025-02-11", success: 22800, failed: 256 },
  { date: "2025-02-12", success: 24500, failed: 289 },
  { date: "2025-02-13", success: 21200, failed: 223 },
  { date: "2025-02-14", success: 19800, failed: 189 },
  { date: "2025-02-15", success: 23400, failed: 267 },
  { date: "2025-02-16", success: 24500, failed: 289 },
  { date: "2025-02-17", success: 21800, failed: 234 },
  { date: "2025-02-18", success: 20100, failed: 178 },
  { date: "2025-02-19", success: 22800, failed: 256 },
  { date: "2025-02-20", success: 21200, failed: 223 },
  { date: "2025-02-21", success: 19800, failed: 189 },
  { date: "2025-02-22", success: 21800, failed: 234 },
  { date: "2025-02-23", success: 23200, failed: 256 },
  { date: "2025-02-24", success: 24500, failed: 289 },
  { date: "2025-02-25", success: 25600, failed: 312 },
  { date: "2025-02-26", success: 23400, failed: 267 },
  { date: "2025-02-27", success: 21800, failed: 234 },
  { date: "2025-02-28", success: 20100, failed: 178 },
]

const chartConfig = {
  visitors: {
    label: "API Requests",
  },
  success: {
    label: "Success",
    color: "var(--chart-1)",
  },
  failed: {
    label: "Failed",
    color: "var(--chart-3)",
  },
} satisfies ChartConfig

export function ChartAreaInteractive() {
  const [timeRange, setTimeRange] = React.useState("90d")

  const filteredData = chartData.filter((item) => {
    const date = new Date(item.date)
    const referenceDate = new Date("2025-02-28")
    let daysToSubtract = 90
    if (timeRange === "30d") {
      daysToSubtract = 30
    } else if (timeRange === "7d") {
      daysToSubtract = 7
    }
    const startDate = new Date(referenceDate)
    startDate.setDate(startDate.getDate() - daysToSubtract)
    return date >= startDate
  })

  return (
    <Card className="pt-0">
      <CardHeader className="flex items-center gap-2 space-y-0 border-b py-5 sm:flex-row">
        <div className="grid flex-1 gap-1">
          <CardTitle>API Request Analytics</CardTitle>
          <CardDescription>
            Monitor your public REST APIs performance and usage patterns
          </CardDescription>
        </div>
        <Select value={timeRange} onValueChange={setTimeRange}>
          <SelectTrigger
            className="hidden w-[160px] rounded-lg sm:ml-auto sm:flex"
            aria-label="Select a value"
          >
            <SelectValue placeholder="Last 3 months" />
          </SelectTrigger>
          <SelectContent className="rounded-xl">
            <SelectItem value="90d" className="rounded-lg">
              Last 3 months
            </SelectItem>
            <SelectItem value="30d" className="rounded-lg">
              Last 30 days
            </SelectItem>
            <SelectItem value="7d" className="rounded-lg">
              Last 7 days
            </SelectItem>
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] w-full"
        >
          <AreaChart data={filteredData}>
            <defs>
              <linearGradient id="fillSuccess" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-success)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-success)"
                  stopOpacity={0.1}
                />
              </linearGradient>
              <linearGradient id="fillFailed" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-failed)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-failed)"
                  stopOpacity={0.1}
                />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                const date = new Date(value)
                return date.toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                })
              }}
            />
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                    })
                  }}
                  indicator="dot"
                />
              }
            />
            <Area
              dataKey="success"
              type="natural"
              fill="url(#fillSuccess)"
              stroke="var(--color-success)"
              stackId="a"
            />
            <Area
              dataKey="failed"
              type="natural"
              fill="url(#fillFailed)"
              stroke="var(--color-failed)"
              stackId="a"
            />
            <ChartLegend content={<ChartLegendContent />} />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
