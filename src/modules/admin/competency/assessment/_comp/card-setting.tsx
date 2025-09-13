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
import { IconEdit, IconMenuDeep, IconPlus, IconTrash } from "@tabler/icons-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useEffect, useState } from "react";
import { DeleteDialog } from "./delete";

const invoices = [
    {
        id: "1",
        klola_id: "staging",
        name: "Assessment 1",
        competency: "Emotional Intelligence",
        ideal_level: "4 - Developing",
        schedule: "Friday, 12 Sept 2025 13:00 WIB",
        type: "Multiple Choice",
        total_question: 25,
        total_candidate: 1,
        difficulty: "Hard",
        is_active: true,
    },
]

export function CardSetting() {
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
                        <CardTitle>Assessment Setting</CardTitle>
                        <CardDescription>
                            Set the assessment schedule and ideal level for each competency
                        </CardDescription>
                    </div>
                    <Link href={`/office/competency/assessment/add`}>
                        <Button variant="secondary"><IconPlus /> Add Assessment</Button>
                    </Link>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-[25px]">#</TableHead>
                                <TableHead className="w-[75px]">Klola ID</TableHead>
                                <TableHead>Assessment Name</TableHead>
                                <TableHead>Competency</TableHead>
                                <TableHead>Ideal Proficient Level</TableHead>
                                <TableHead>Assessment Schedule</TableHead>
                                <TableHead>Assessment Type</TableHead>
                                <TableHead>Difficulty</TableHead>
                                <TableHead>Total Question</TableHead>
                                <TableHead>Total Candidate</TableHead>
                                <TableHead>Status</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {invoices.map((data: any, k: number) => (
                                <TableRow key={k}>
                                    <TableCell className="font-medium">{data.id}</TableCell>
                                    <TableCell>{data.klola_id}</TableCell>
                                    <TableCell>{data.name}</TableCell>
                                    <TableCell>{data.competency}</TableCell>
                                    <TableCell>{data.ideal_level}</TableCell>
                                    <TableCell>{data.schedule}</TableCell>
                                    <TableCell>{data.type}</TableCell>
                                    <TableCell>{data.difficulty}</TableCell>
                                    <TableCell>{data.total_question}</TableCell>
                                    <TableCell>{data.total_candidate}</TableCell>
                                    <TableCell>
                                        <TableCell>
                                            {
                                                data.is_active ? <Badge variant="secondary" className="rounded-sm bg-green-800">Active</Badge>
                                                    : <Badge variant="secondary" className="rounded-sm bg-red-800">Inactive</Badge>
                                            }
                                        </TableCell>
                                    </TableCell>
                                    <TableCell className="text-right">
                                        <DropdownMenu>
                                            <DropdownMenuTrigger asChild>
                                                <Button variant="outline" size="sm"><IconMenuDeep /></Button>
                                            </DropdownMenuTrigger>
                                            <DropdownMenuContent className="w-auto" align="start">
                                                <DropdownMenuLabel>Action Menu</DropdownMenuLabel>
                                                <DropdownMenuGroup>
                                                    <Link href={`/office/competency/assessment/update/${data.id}`}>
                                                        <DropdownMenuItem>
                                                            <IconEdit />
                                                            Update
                                                        </DropdownMenuItem>
                                                    </Link>
                                                </DropdownMenuGroup>
                                                <DropdownMenuSeparator />
                                                <DropdownMenuItem onClick={() => setOpenDelete(!openDelete)}>
                                                    <IconTrash />
                                                    Delete
                                                </DropdownMenuItem>
                                            </DropdownMenuContent>
                                        </DropdownMenu>
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

            <DeleteDialog openDelete={openDelete} setOpenDelete={setOpenDelete} />
        </>
    );
}
