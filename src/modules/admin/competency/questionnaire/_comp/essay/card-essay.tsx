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
import { IconDatabaseCog, IconEdit, IconMenuDeep, IconPlus, IconTrash } from "@tabler/icons-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { AddDialog } from "./dialog/add";
import { UpdateDialog } from "./dialog/update";
import { DeleteDialog } from "./dialog/delete";
import Link from "next/link";

const invoices = [
    {
        id: "1",
        klola_id: "staging",
        name: "Essay Assessment 1",
        description: "lorem ipsum",
        total_quiz: 1,
        difficulty: "Medium",
        document: "document-essay.pdf",
        is_active: true,
    },
]

export function CardEssay() {
    const { theme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const [openAdd, setOpenAdd] = useState(false);
    const [openUpdate, setOpenUpdate] = useState(false);
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
                        <CardTitle>Essay Quiz Management</CardTitle>
                        <CardDescription>
                            Manage essay quiz and their details
                        </CardDescription>
                    </div>
                    <Button variant="secondary" onClick={() => setOpenAdd(!openAdd)}><IconPlus /> Add Essay Set</Button>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-[25px]">#</TableHead>
                                <TableHead className="w-[75px]">Klola ID</TableHead>
                                <TableHead>Name</TableHead>
                                <TableHead>Description</TableHead>
                                <TableHead>Total Quiz</TableHead>
                                <TableHead>Difficulty</TableHead>
                                <TableHead>Document</TableHead>
                                <TableHead>Status</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {invoices.map((data: any, k: number) => (
                                <TableRow key={k}>
                                    <TableCell className="font-medium">{k + 1}</TableCell>
                                    <TableCell>{data.klola_id}</TableCell>
                                    <TableCell>{data.name}</TableCell>
                                    <TableCell>{data.description}</TableCell>
                                    <TableCell>{data.total_quiz}</TableCell>
                                    <TableCell>{data.difficulty}</TableCell>
                                    <TableCell>{data.document}</TableCell>
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
                                                <Link href={`/office/competency/questionnaire/essay/${data.id}`}>
                                                    <DropdownMenuItem>
                                                        <IconDatabaseCog />
                                                        Configure
                                                    </DropdownMenuItem>
                                                </Link>
                                                <DropdownMenuGroup>
                                                    <DropdownMenuItem onClick={() => setOpenUpdate(!openUpdate)}>
                                                        <IconEdit />
                                                        Update
                                                    </DropdownMenuItem>
                                                </DropdownMenuGroup>
                                                <DropdownMenuSeparator />
                                                <DropdownMenuItem variant="destructive" onClick={() => setOpenDelete(!openDelete)}>
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

            <AddDialog openAdd={openAdd} setOpenAdd={setOpenAdd} />
            <UpdateDialog openUpdate={openUpdate} setOpenUpdate={setOpenUpdate} />
            <DeleteDialog openDelete={openDelete} setOpenDelete={setOpenDelete} />
        </>
    );
}
