"use client";

import Link from "next/link";
import { CardCandidate } from "./_comp/card-candidate";
import { CardConfig } from "./_comp/card-config";
import { Button } from "@/components/ui/button";
import { IconArrowBackUp } from "@tabler/icons-react";

export function UpdateSettingCompetencyModule() {
    return (
        <>
            <Link href={"/office/competency/assessment"}>
                <Button variant="outline" size="sm" className="min-w-[100px]"><IconArrowBackUp /> Back</Button>
            </Link>

            <CardConfig id="1" />
            <CardCandidate />

            <div className="grid auto-rows-min gap-4 grid-cols-1 md:grid-cols-2">

            </div>
        </>
    );
}