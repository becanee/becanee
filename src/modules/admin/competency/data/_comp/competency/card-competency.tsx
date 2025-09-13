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
import { IconEdit, IconEye, IconMenuDeep, IconPlus, IconTrash } from "@tabler/icons-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { AddDialog } from "./dialog/add";
import { UpdateDialog } from "./dialog/update";
import { DeleteDialog } from "./dialog/delete";
import { ViewDialog } from "./dialog/view";

const invoices = [
    {
        id: "1",
        klola_id: "staging",
        code: "NT01",
        name: "Emotional Intelligence",
        description: "lorem ipsum",
        category: "Non Technical",
        proficiency: [
            {
                id: "1",
                klola_id: "staging",
                code: "LP01",
                name: "Communicates basic information clearly and accurately",
                description: "lorem ipsum",
                level: {
                    id: "1",
                    klola_id: "staging",
                    name: "Novice",
                    qlf: 1,
                    description: "lorem ipsum",
                    is_active: true,
                },
                is_active: true,
            },
            {
                id: "2",
                klola_id: "staging",
                code: "LP03",
                name: "Responds to inquiries and feedback",
                description: "lorem ipsum",
                level: {
                    id: "2",
                    klola_id: "staging",
                    name: "Developing",
                    qlf: 3,
                    description: "lorem ipsum",
                    is_active: true,
                },
                is_active: true,
            }
        ],
        is_active: true,
    },
]

export function CardCompetency() {
    const { theme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const [openAdd, setOpenAdd] = useState(false);
    const [openUpdate, setOpenUpdate] = useState(false);
    const [openDelete, setOpenDelete] = useState(false);
    const [openView, setOpenView] = useState({
        data: null,
        isOpen: false,
    });


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
                        <CardTitle>Competency Management</CardTitle>
                        <CardDescription>
                            Manage competencies and their details
                        </CardDescription>
                    </div>
                    <Button variant="secondary" onClick={() => setOpenAdd(!openAdd)}><IconPlus /> Add Competency</Button>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-[25px]">#</TableHead>
                                <TableHead className="w-[75px]">Klola ID</TableHead>
                                <TableHead>Code</TableHead>
                                <TableHead>Name</TableHead>
                                <TableHead>Description</TableHead>
                                <TableHead>Category</TableHead>
                                <TableHead>Proficiency</TableHead>
                                <TableHead>Status</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {invoices.map((data: any, k: number) => (
                                <TableRow key={k}>
                                    <TableCell className="font-medium">{k + 1}</TableCell>
                                    <TableCell>{data.klola_id}</TableCell>
                                    <TableCell>{data.code}</TableCell>
                                    <TableCell>{data.name}</TableCell>
                                    <TableCell>{data.description}</TableCell>
                                    <TableCell>{data.category}</TableCell>
                                    <TableCell>
                                        <Button variant="secondary" onClick={() => setOpenView({ data: data, isOpen: !openView.isOpen })} size="sm"><IconEye /> (1) Data</Button>
                                    </TableCell>
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
            <ViewDialog openView={openView} setOpenView={() => setOpenView({ data: openView.data, isOpen: !openView.isOpen })} />
        </>
    );
}
