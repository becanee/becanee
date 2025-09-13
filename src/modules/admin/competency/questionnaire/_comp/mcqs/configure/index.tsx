"use client";

import { Button } from "@/components/ui/button";
import { IconArrowBackUp, IconDatabaseCog } from "@tabler/icons-react";
import Link from "next/link";
import { CardQuestion } from "./_comp/card-question";

export function ConfigureMcqsModule() {
    return (
        <>
            <Link href={"/office/competency/questionnaire"}>
                <Button variant="outline" size="sm" className="min-w-[100px]"><IconArrowBackUp /> Back</Button>
            </Link>

            <div className="min-w-full md:min-w-lg rounded-xl border text-card-foreground p-4 border-sky-200 dark:border-sky-900 bg-sky-50 dark:bg-sky-950/20 shadow-none">
                <h2 className="flex gap-2 text-base uppercase md:text-lg font-semibold mb-2 text-sky-900 dark:text-sky-100">
                    <IconDatabaseCog size={20} className="mt-1" /> Multiple Choice Quiz Set
                </h2>
                <div className="grid gap-4 mt-4 grid-cols-2 md:grid-cols-4">
                    <div>
                        <h1 className="flex text-sm font-bold uppercase"> Name</h1>
                        <p className="text-muted-foreground">Competency Assessment 1</p>
                    </div>
                    <div>
                        <h1 className="flex text-sm font-bold uppercase"> Description</h1>
                        <p className="text-muted-foreground">lorem ipsum</p>
                    </div>
                    <div>
                        <h1 className="flex text-sm font-bold uppercase"> Total Quiz</h1>
                        <p className="text-muted-foreground">2</p>
                    </div>
                    <div>
                        <h1 className="flex text-sm font-bold uppercase"> Difficulty</h1>
                        <p className="text-muted-foreground">Mix</p>
                    </div>
                    <div>
                        <h1 className="flex text-sm font-bold uppercase"> Document</h1>
                        <p className="text-muted-foreground">document-1.pdf</p>
                    </div>
                </div>
            </div>

            <CardQuestion />
        </>
    );
}