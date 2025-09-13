"use client";

import { ShineBorder } from "@/components/magicui/shine-border";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle
} from "@/components/ui/card";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow
} from "@/components/ui/table";
import { IconEye } from "@tabler/icons-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const invoices = [
    {
        id: "1",
        competency: "Emotional Intelligence",
        category: "Non Technical",
        ideal_level: "4 - Developing",
        schedule: "Friday, 12 Sept 2025 13:00 WIB",
        result: null,
        notes: "",
    },
    {
        id: "2",
        competency: "Communication Skills",
        category: "Non Technical",
        ideal_level: "7 - Proficient",
        schedule: "Thursday, 11 Sept 2025 09:00 WIB",
        result: "4 - Developing",
        notes: "",
    },
    {
        id: "3",
        competency: "Critical Thinking",
        category: "Non Technical",
        ideal_level: "6 - Skilled",
        schedule: "Thursday, 10 Sept 2025 15:00 WIB",
        result: "5 - Competent",
        notes: "",
    },
    {
        id: "4",
        competency: "Creativity",
        category: "Non Technical",
        ideal_level: "5 - Competent",
        schedule: "Thursday, 07 Sept 2025 11:00 WIB",
        result: "5 - Competent",
        notes: "",
    },
]

export function CardSummary() {
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
                <CardTitle>Summary</CardTitle>
                <CardDescription>
                    Shows the summary of the employee assessment
                </CardDescription>
            </CardHeader>
            <CardContent>
                <Table>
                    {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-[25px]">#</TableHead>
                            <TableHead>Competency</TableHead>
                            <TableHead>Category</TableHead>
                            <TableHead>Ideal Proficient Level</TableHead>
                            <TableHead>Assessment Schedule</TableHead>
                            <TableHead>Result</TableHead>
                            <TableHead className="text-right">Notes</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {invoices.map((data: any, k: number) => (
                            <TableRow key={k}>
                                <TableCell className="font-medium">{data.id}</TableCell>
                                <TableCell>{data.competency}</TableCell>
                                <TableCell>{data.category}</TableCell>
                                <TableCell>{data.ideal_level}</TableCell>
                                <TableCell>{data.schedule}</TableCell>
                                <TableCell>{
                                    data.result ? data.result
                                        : <Badge variant="secondary" className="rounded-sm bg-orange-800">Not Started</Badge>}</TableCell>
                                <TableCell className="text-right">
                                    <Button variant="outline" size="sm"><IconEye /></Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                    {/* <TableFooter>
                        <TableRow>
                            <TableCell colSpan={3}>Total</TableCell>
                            <TableCell className="text-right">$2,500.00</TableCell>
                        </TableRow>
                    </TableFooter> */}
                </Table>
            </CardContent>
        </Card>
    );
}
