"use client";

import { CardLineChart } from "./_comp/card-line-chart";
import { CardProfile } from "./_comp/card-profile";
import { CardRadarChart } from "./_comp/card-radar-chart";
import { CardSummary } from "./_comp/card-summary";

export function ClientDashboardModule() {
    return (
        <>
            <CardProfile />
            <CardSummary />

            <div className="grid auto-rows-min gap-4 grid-cols-1 md:grid-cols-2">
                <CardRadarChart />
                <CardLineChart />
            </div>
        </>
    );
}