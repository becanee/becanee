"use client";

import { CardProfile } from "./_comp/card-profile";
import { CardStart } from "./_comp/card-start";

export function MyAssessmentModule() {
    return (
        <>
            <CardProfile />
            {/* <CardSummary /> */}
            <CardStart />

            {/* <div className="grid auto-rows-min gap-4 grid-cols-1 md:grid-cols-2">
                <CardRadarChart />
                <CardLineChart />
            </div> */}
        </>
    );
}