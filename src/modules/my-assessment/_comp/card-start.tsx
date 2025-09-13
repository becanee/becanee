"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { CardMultipleChoice } from "./card-multiple-choice";


export function CardStart() {
    const { theme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        setMounted(true);
    }, []);

    // Realtime clock yang memperbarui setiap detik
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    // Prevent hydration mismatch by using default color until mounted
    const shineColor = mounted ? (theme === "dark" ? "white" : "black") : "black";

    return (
        <>
            {/* <Card className="relative overflow-hidden">
                <ShineBorder shineColor={shineColor} />
                <CardHeader>
                    <div className="flex justify-between items-center">
                        <div>
                            <CardTitle>{formatFullDateTime(currentTime)}</CardTitle>
                        </div>

                        <Button variant="outline" size="sm"><IconRefresh /> Refresh</Button>
                    </div>
                </CardHeader>
                <CardContent>
                    <div className="min-w-full md:min-w-lg rounded-xl border text-card-foreground p-4 border-orange-200 dark:border-orange-900 bg-orange-50 dark:bg-orange-950/20 shadow-none">
                        <h2 className="flex gap-2 mt-2 text-base uppercase md:text-lg font-semibold mb-2 text-orange-900 dark:text-orange-100">
                            <IconLock size={20} className="mt-1" /> assessment has not started yet
                        </h2>
                    </div>
                </CardContent>
            </Card> */}
            <CardMultipleChoice />
        </>
    );
}
