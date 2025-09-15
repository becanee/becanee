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
import { IconCardboards, IconDatabaseCog, IconEdit, IconMenuDeep, IconPlus, IconTrash } from "@tabler/icons-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { AddDialog } from "./dialog/add";
import { DeleteDialog } from "./dialog/delete";
import { UpdateDialog } from "./dialog/update";
import useLogic from "./use-logic";
import Link from "next/link";
import { BorderBeam } from "@/components/magicui/border-beam";

export function CardQuestion({ id }: { id: string }) {
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
    const { data, parent, loading, addData, updateData, deleteData } = useLogic({ id });


    useEffect(() => {
        setMounted(true);
    }, []);

    // Prevent hydration mismatch by using default color until mounted
    const shineColor = mounted ? (theme === "dark" ? "white" : "black") : "black";

    return (
        <>
            <div className="min-w-full md:min-w-lg rounded-xl border text-card-foreground p-4 border-sky-200 dark:border-sky-900 bg-sky-50 dark:bg-sky-950/20 shadow-none">
                <h2 className="flex gap-2 text-base uppercase md:text-lg font-semibold mb-2 text-sky-900 dark:text-sky-100">
                    <IconDatabaseCog size={20} className="mt-1" /> Multiple Choice Quiz Set
                </h2>
                <div className="grid gap-4 mt-4 grid-cols-2 md:grid-cols-4">
                    <div>
                        <h1 className="flex text-sm font-bold uppercase"> Name</h1>
                        <p className="text-muted-foreground">{parent?.name}</p>
                    </div>
                    <div>
                        <h1 className="flex text-sm font-bold uppercase"> Description</h1>
                        <p className="text-muted-foreground">{parent?.description}</p>
                    </div>
                    <div>
                        <h1 className="flex text-sm font-bold uppercase"> Total Quiz</h1>
                        <p className="text-muted-foreground">{parent?.set_amount}</p>
                    </div>
                    <div>
                        <h1 className="flex text-sm font-bold uppercase"> Difficulty</h1>
                        <p className="text-muted-foreground">{parent?.difficulty}</p>
                    </div>
                    <div>
                        <h1 className="flex text-sm font-bold uppercase"> Document</h1>
                        <p className="text-muted-foreground">{parent?.document?.name}</p>
                    </div>
                </div>
            </div>

            <Card className="relative overflow-hidden">
                <ShineBorder shineColor={shineColor} />
                <CardHeader className="flex justify-between">
                    <div>
                        <CardTitle>Question Management</CardTitle>
                        <CardDescription>
                            Manage questions and their details
                        </CardDescription>
                    </div>
                    {
                        data?.length > parent?.set_amount &&
                        <div className="flex gap-2">
                            <Button variant="secondary" onClick={() => setOpenAdd(!openAdd)}><IconPlus /> Add Question</Button>
                            <Button className="relative overflow-hidden" variant="outline">
                                <IconCardboards /> Klola Assistant
                                <BorderBeam
                                    size={40}
                                    initialOffset={20}
                                    className="from-transparent via-sky-500 to-transparent"
                                    transition={{
                                        type: "spring",
                                        stiffness: 60,
                                        damping: 20,
                                    }}
                                />
                            </Button>
                        </div>
                    }
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-[25px]">#</TableHead>
                                <TableHead className="w-[75px]">Klola ID</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead>Created By</TableHead>
                                <TableHead>Difficulty</TableHead>
                                <TableHead>Question</TableHead>
                                <TableHead>Answer</TableHead>
                                <TableHead>(AI) Explanation</TableHead>
                                <TableHead>(Human) Explanation</TableHead>
                                <TableHead>Options</TableHead>
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
                                            <TableCell>
                                                {
                                                    i?.active ? <Badge variant="secondary" className="rounded-sm bg-green-800">Active</Badge>
                                                        : <Badge variant="secondary" className="rounded-sm bg-red-800">Inactive</Badge>
                                                }
                                            </TableCell>
                                            <TableCell>
                                                {
                                                    i?.created_by !== "Klola Assistant" ? <Badge variant="secondary" className="rounded-sm bg-green-800">{i?.created_by}</Badge>
                                                        : <Badge variant="secondary" className="rounded-sm bg-sky-800">Klola Assistant</Badge>
                                                }
                                            </TableCell>
                                            <TableCell>
                                                {
                                                    i?.difficulty === "Easy" ? <Badge variant="secondary" className="rounded-sm bg-green-800">Easy</Badge>
                                                        : i?.difficulty === "Medium" ? <Badge variant="secondary" className="rounded-sm bg-yellow-800">Medium</Badge>
                                                            : <Badge variant="secondary" className="rounded-sm bg-red-800">Hard</Badge>
                                                }
                                            </TableCell>
                                            <TableCell>{i?.question}</TableCell>
                                            <TableCell>{i?.answer}</TableCell>
                                            <TableCell>{i?.ai_explanation}</TableCell>
                                            <TableCell>{i?.human_explanation}</TableCell>
                                            <TableCell>
                                                <div>
                                                    <ol>
                                                        <ul>A. {i?.option_a}</ul>
                                                        <ul>B. {i?.option_b}</ul>
                                                        <ul>C. {i?.option_c}</ul>
                                                        <ul>D. {i?.option_d}</ul>
                                                    </ol>
                                                </div>
                                            </TableCell>
                                            <TableCell className="text-right">
                                                <DropdownMenu>
                                                    <DropdownMenuTrigger asChild>
                                                        <Button variant="outline" size="sm"><IconMenuDeep /></Button>
                                                    </DropdownMenuTrigger>
                                                    <DropdownMenuContent className="w-auto" align="start">
                                                        <DropdownMenuLabel>Action Menu</DropdownMenuLabel>
                                                        <DropdownMenuGroup>
                                                            <Link href={`/office/competency/questionnaire/mcqs/${i.id}`}>
                                                                <DropdownMenuItem>
                                                                    <IconDatabaseCog />
                                                                    Configure
                                                                </DropdownMenuItem>
                                                            </Link>
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

            <AddDialog openAdd={openAdd} setOpenAdd={setOpenAdd} addData={addData} parentID={id} parent={parent} />
            <UpdateDialog openUpdate={openUpdate.isOpen} setOpenUpdate={() => setOpenUpdate({ ...openUpdate, isOpen: !openUpdate.isOpen })} onUpdateData={updateData} updateData={openUpdate?.data} />
            <DeleteDialog openDelete={openDelete.isOpen} setOpenDelete={setOpenDelete} onDeleteData={deleteData} deleteData={openDelete?.data} />
        </>
    );
}
