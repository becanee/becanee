"use client";

import { Button } from "@/components/ui/button";
import { IconArrowBackUp, IconDatabaseCog } from "@tabler/icons-react";
import Link from "next/link";
import { CardQuestion } from "./_comp/card-question";

export function ConfigureMcqsModule({ params }: { params: any }) {
    return (
        <>
            <Link href={"/office/competency/questionnaire"}>
                <Button variant="outline" size="sm" className="min-w-[100px]"><IconArrowBackUp /> Back</Button>
            </Link>

            <CardQuestion id={params?.id} />
        </>
    );
}