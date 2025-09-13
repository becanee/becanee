"use client"

import { TrendingUp } from "lucide-react"
import { CartesianGrid, LabelList, Line, LineChart, XAxis } from "recharts"

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
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { ShineBorder } from "@/components/magicui/shine-border"

export const description = "A line chart with a custom label"

const chartData = [
    { competency: "Novice", level: 1, fill: "var(--color-chrome)" },
    { competency: "Beginner", level: 2, fill: "var(--color-safari)" },
    { competency: "Advanced Beginner", level: 3, fill: "var(--color-firefox)" },
    { competency: "Developing", level: 4, fill: "var(--color-firefox)" },
    { competency: "Competent", level: 5, fill: "var(--color-firefox)" },
    { competency: "Skilled", level: 6, fill: "var(--color-firefox)" },
    { competency: "Proficient", level: 7, fill: "var(--color-firefox)" },
    { competency: "Expert", level: 8, fill: "var(--color-firefox)" },
]

const chartConfig = {
    Novice: {
        label: "Emotional Intelligence",
        color: "var(--chart-2)",
    },
    Beginner: {
        label: "",
        color: "var(--chart-1)",
    },
    Advanced_Beginner: {
        label: "",
        color: "var(--chart-3)",
    },
    Developing: {
        label: "Communication Skills",
        color: "var(--chart-4)",
    },
    Competent: {
        label: "Critical Thinking | Creativity",
        color: "var(--chart-5)",
    },
    Skilled: {
        label: "",
        color: "var(--chart-6)",
    },
    Proficient: {
        label: "",
        color: "var(--chart-7)",
    },
    Expert: {
        label: "",
        color: "var(--chart-8)",
    },
} satisfies ChartConfig

export function CardLineChart() {
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
            <CardHeader>
                <CardTitle>Assessment Result</CardTitle>
                <CardDescription>
                    Shows the assessment result of the employee
                </CardDescription>
            </CardHeader>
            <CardContent>
                <ChartContainer config={chartConfig}>
                    <LineChart
                        accessibilityLayer
                        data={chartData}
                        margin={{
                            top: 24,
                            left: 24,
                            right: 24,
                        }}
                    >
                        <CartesianGrid vertical={true} />
                        <XAxis
                            dataKey="competency"
                            tickLine={true}
                            axisLine={true}
                            tickMargin={8}
                            tickFormatter={(value, key) => `${key + 1} ${value}`}
                        />
                        <ChartTooltip
                            cursor={true}
                            content={
                                <ChartTooltipContent
                                    indicator="line"
                                    nameKey="competency"
                                    hideLabel
                                />
                            }
                        />
                        <Line
                            dataKey="level"
                            type="natural"
                            stroke="var(--chart-2)"
                            strokeWidth={2}
                            dot={{
                                fill: "var(--chart-2)",
                            }}
                            activeDot={{
                                r: 6,
                            }}
                        >
                            <LabelList
                                position="top"
                                offset={12}
                                className="fill-foreground"
                                fontSize={12}
                                dataKey="competency"
                                formatter={(value: keyof typeof chartConfig) =>
                                    chartConfig[value]?.label
                                }
                            />
                        </Line>
                    </LineChart>
                </ChartContainer>
            </CardContent>
            {/* <CardFooter className="flex-col items-start gap-2 text-sm">
                <div className="flex gap-2 leading-none font-medium">
                    Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
                </div>
                <div className="text-muted-foreground leading-none">
                    Showing total level for the last 6 months
                </div>
            </CardFooter> */}
        </Card>
    )
}
