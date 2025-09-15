"use client";

import { CardCompetencyGap } from "./_comp/card-competency-gap";
import { CardProfile } from "./_comp/card-profile";
import { CardSummary } from "./_comp/card-summary";

export function ClientDashboardModule() {
    return (
        <>
            <CardProfile />
            <CardSummary />
            <CardCompetencyGap />
        </>
    );
}