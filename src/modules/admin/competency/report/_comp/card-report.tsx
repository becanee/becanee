"use client";

import { ShineBorder } from "@/components/magicui/shine-border";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle
} from "@/components/ui/card";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { CardReportItem } from "./card-report-item";

const reports = [
    {
        id: "1",
        competency: "Emotional Intelligence",
        category: "Non Technical",
        ideal_level: "4 - Developing",
        schedule: "Friday, 12 Sept 2025 13:00 WIB",
        result: null,
        total_questionnaire: 10,
        total_candidate: 100,
        notes: "",
    },
    {
        id: "2",
        competency: "Communication Skills",
        category: "Non Technical",
        ideal_level: "7 - Proficient",
        schedule: "Thursday, 11 Sept 2025 09:00 WIB",
        result: "4 - Developing",
        total_questionnaire: 10,
        total_candidate: 100,
        notes: "",
    },
    {
        id: "3",
        competency: "Critical Thinking",
        category: "Non Technical",
        ideal_level: "6 - Skilled",
        schedule: "Thursday, 10 Sept 2025 15:00 WIB",
        result: "5 - Competent",
        total_questionnaire: 10,
        total_candidate: 100,
        notes: "",
    },
    {
        id: "4",
        competency: "Creativity",
        category: "Non Technical",
        ideal_level: "5 - Competent",
        schedule: "Thursday, 07 Sept 2025 11:00 WIB",
        result: "5 - Competent",
        total_questionnaire: 10,
        total_candidate: 100,
        notes: "",
    },
]

export function CardReport() {
    const { theme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const [openDelete, setOpenDelete] = useState(false);


    useEffect(() => {
        setMounted(true);
    }, []);

    // Prevent hydration mismatch by using default color until mounted
    const shineColor = mounted ? (theme === "dark" ? "white" : "black") : "black";

    return (
        <>
            <Card className="relative overflow-hidden">
                <ShineBorder shineColor={shineColor} />
                <CardHeader className="flex justify-between">
                    <div>
                        <CardTitle>Assessment Report</CardTitle>
                        <CardDescription>
                            View the assessment report for each competency
                        </CardDescription>
                    </div>
                    {/* <Link href={`/office/competency/assessment/add`}>
                        <Button variant="secondary"><IconPlus /> Add Assessment</Button>
                    </Link> */}
                </CardHeader>
                <CardContent>
                    <div className="grid auto-rows-min gap-4 grid-cols-1 md:grid-cols-2">
                        {
                            reports.map((report) => (
                                <div key={report.id}>
                                    <CardReportItem report={report} />
                                </div>
                            ))
                        }
                    </div>
                </CardContent>
            </Card>

        </>
    );
}
