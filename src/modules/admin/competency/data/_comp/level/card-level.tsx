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
import { Skeleton } from "@/components/ui/skeleton";
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
import { DeleteDialog } from "./dialog/delete";
import { UpdateDialog } from "./dialog/update";
import useLogic from "./use-logic";

export function CardLevel() {
    const { theme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const [openAdd, setOpenAdd] = useState(false);
    const [openUpdate, setOpenUpdate] = useState({
        data: null,
        isOpen: false,
    });
    const [openDelete, setOpenDelete] = useState({
        data: null,
        isOpen: false,
    });
    const [openView, setOpenView] = useState({
        data: null,
        isOpen: false,
    });
    const { data, loading, addData, updateData, deleteData } = useLogic();


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
                    <Button variant="secondary" onClick={() => setOpenAdd(!openAdd)}><IconPlus /> Add Category</Button>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-[25px]">#</TableHead>
                                <TableHead className="w-[75px]">Klola ID</TableHead>
                                <TableHead>Qualification</TableHead>
                                <TableHead>Level</TableHead>
                                <TableHead>Description</TableHead>
                                <TableHead>Status</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {
                                loading && data?.length === 0 ? (
                                    <TableRow>
                                        <TableCell colSpan={8} className="text-center">
                                            <Skeleton className="h-10 w-full" />
                                        </TableCell>
                                    </TableRow>
                                ) : <>
                                    {data?.map((i: any, k: number) => (
                                        <TableRow key={k}>
                                            <TableCell className="font-medium">{k + 1}</TableCell>
                                            <TableCell>{i?.klola_id}</TableCell>
                                            <TableCell>{i?.qualification}</TableCell>
                                            <TableCell>{i?.level}</TableCell>
                                            <TableCell>{i?.description}</TableCell>
                                            <TableCell>
                                                {
                                                    i?.active ? <Badge variant="secondary" className="rounded-sm bg-green-800">Active</Badge>
                                                        : <Badge variant="secondary" className="rounded-sm bg-red-800">Inactive</Badge>
                                                }
                                            </TableCell>
                                            <TableCell className="text-right">
                                                <DropdownMenu>
                                                    <DropdownMenuTrigger asChild>
                                                        <Button variant="outline" size="sm"><IconMenuDeep /></Button>
                                                    </DropdownMenuTrigger>
                                                    <DropdownMenuContent className="w-auto" align="start">
                                                        <DropdownMenuLabel>Action Menu</DropdownMenuLabel>
                                                        <DropdownMenuGroup>
                                                            <DropdownMenuItem onClick={() => setOpenUpdate({ data: i, isOpen: !openUpdate.isOpen })}>
                                                                <IconEdit />
                                                                Update
                                                            </DropdownMenuItem>
                                                        </DropdownMenuGroup>
                                                        <DropdownMenuSeparator />
                                                        <DropdownMenuItem variant="destructive" onClick={() => setOpenDelete({ data: i, isOpen: !openDelete.isOpen })}>
                                                            <IconTrash />
                                                            Delete
                                                        </DropdownMenuItem>
                                                    </DropdownMenuContent>
                                                </DropdownMenu>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </>
                            }
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

            <AddDialog openAdd={openAdd} setOpenAdd={setOpenAdd} addData={addData} />
            <UpdateDialog openUpdate={openUpdate.isOpen} setOpenUpdate={() => setOpenUpdate({ ...openUpdate, isOpen: !openUpdate.isOpen })} onUpdateData={updateData} updateData={openUpdate?.data} />
            <DeleteDialog openDelete={openDelete.isOpen} setOpenDelete={setOpenDelete} onDeleteData={deleteData} deleteData={openDelete?.data} />
        </>
    );
}
