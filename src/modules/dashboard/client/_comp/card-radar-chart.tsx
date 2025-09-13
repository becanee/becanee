"use client"

import { TrendingUp } from "lucide-react"
import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from "recharts"

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
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
import { ShineBorder } from "@/components/magicui/shine-border"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export const description = "A radar chart with multiple data"

const chartData = [
    { competency: "Emotional Intelligence", level: 0, result: 0 },
    { competency: "Critical Thinking", level: 7, result: 4 },
    { competency: "Communication Skills", level: 6, result: 5 },
    { competency: "Creativity", level: 5, result: 5 },
]

const chartConfig = {
    level: {
        label: "Ideal Proficient Level",
        color: "var(--chart-1)",
    },
    result: {
        label: "Result",
        color: "var(--chart-2)",
    },
} satisfies ChartConfig

export function CardRadarChart() {
    const { theme } = useTheme();
    const [mounted, setMounted] = useState(false);


    useEffect(() => {
        setMounted(true);
    }, []);

    // Prevent hydration mismatch by using default color until mounted
    const shineColor = mounted ? (theme === "dark" ? "white" : "black") : "black";
    return (
        <Card className="relative overflow-hidden">
            <ShineBorder shineColor={shineColor} />
            <CardHeader className="items-center pb-4">
                <CardTitle>Competency Gap </CardTitle>
                <CardDescription>
                    Shows the gap between the ideal and actual results for each competency
                </CardDescription>
            </CardHeader>
            <CardContent className="pb-0">
                <ChartContainer
                    config={chartConfig}
                    className="mx-auto max-h-[400px]"
                >
                    <RadarChart data={chartData}>
                        <ChartTooltip
                            cursor={true}
                            content={<ChartTooltipContent indicator="line" />}
                        />
                        <PolarAngleAxis dataKey="competency" />
                        <PolarGrid />
                        <Radar
                            dataKey="level"
                            fill="var(--chart-2)"
                            fillOpacity={0.3}
                        />
                        <Radar dataKey="result" fill="var(--chart-1)" />
                        <ChartLegend className="mt-0" content={<ChartLegendContent />} />
                    </RadarChart>
                </ChartContainer>
            </CardContent>
            {/* <CardFooter className="flex-col gap-2 text-sm">
                <div className="flex items-center gap-2 leading-none font-medium">
                    Trending up by 5.2% this competency <TrendingUp className="h-4 w-4" />
                </div>
                <div className="text-muted-foreground flex items-center gap-2 leading-none">
                    January - June 2024
                </div>
            </CardFooter> */}
        </Card>
    )
}
