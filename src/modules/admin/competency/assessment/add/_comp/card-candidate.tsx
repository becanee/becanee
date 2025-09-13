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
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow
} from "@/components/ui/table";
import { IconAlertTriangle, IconDeviceSdCard, IconEdit, IconMenuDeep, IconPlus, IconTrash, IconUserOff, IconUsers, IconUsersGroup } from "@tabler/icons-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useEffect, useState } from "react";

const invoices: any = [

]

export function CardCandidate() {
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
            <CardHeader className="flex justify-between items-center">
                <div>
                    <CardTitle>Candidate Setting</CardTitle>
                    <CardDescription>
                        Set the candidate for the assessment
                    </CardDescription>
                </div>
                <Button variant="outline" size="sm"><IconDeviceSdCard /> Save Candidate</Button>
            </CardHeader>
            <CardContent>
                <div className="flex justify-between gap-4">
                    <div className="flex gap-4">
                        <div className="flex mb-4 max-w-[11rem] items-center gap-2 p-3 bg-sky-50 dark:bg-gray-900/20 border border-gray-200 dark:border-gray-800 rounded-lg">
                            <IconUsersGroup className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                            <span className="text-sm text-gray-700 dark:text-gray-300">
                                Total Employee: 100
                            </span>
                        </div>
                        <div className="flex mb-4 max-w-[10.5rem] items-center gap-2 p-3 bg-sky-50 dark:bg-sky-900/20 border border-sky-200 dark:border-sky-800 rounded-lg">
                            <IconUsers className="w-4 h-4 text-sky-600 dark:text-sky-400" />
                            <span className="text-sm text-sky-700 dark:text-sky-300">
                                Total Candidate: 0
                            </span>
                        </div>
                    </div>
                    <Button variant="secondary"><IconPlus /> Add Candidate</Button>
                </div>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-[25px]">#</TableHead>
                            <TableHead className="w-[75px]">Klola ID</TableHead>
                            <TableHead>Employee Name</TableHead>
                            <TableHead>Employee ID</TableHead>
                            <TableHead>Department</TableHead>
                            <TableHead>Division</TableHead>
                            <TableHead>Unit</TableHead>
                            <TableHead>Competency</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {invoices.map((data: any, k: number) => (
                            <TableRow key={k}>
                                <TableCell className="font-medium">{data.id}</TableCell>
                                <TableCell>{data.klola_id}</TableCell>
                                <TableCell>{data.name}</TableCell>
                                <TableCell>{data.employee_id}</TableCell>
                                <TableCell>{data.department}</TableCell>
                                <TableCell>{data.divisi}</TableCell>
                                <TableCell>{data.unit}</TableCell>
                                <TableCell>{data.competency}</TableCell>
                                <TableCell className="text-right">
                                    <Button variant="destructive" size="sm"><IconUserOff /></Button>
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
