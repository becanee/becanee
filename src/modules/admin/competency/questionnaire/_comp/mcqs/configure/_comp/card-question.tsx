"use client";

import { RainbowButton } from "@/components/magicui/rainbow-button";
import { ShimmerButton } from "@/components/magicui/shimmer-button";
import { ShineBorder } from "@/components/magicui/shine-border";
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
import { IconAi, IconBrandGithubCopilot, IconEdit, IconFileDescription, IconMenuDeep, IconPlus, IconTrash, IconUserOff, IconUsers } from "@tabler/icons-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { AddDialog } from "./dialog/add";
import { UpdateDialog } from "./dialog/update";
import { DeleteDialog } from "./dialog/delete";
import { Badge } from "@/components/ui/badge";
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

const invoices: any = [
    {
        id: "1",
        klola_id: "staging",
        question: "Question 1",
        answer: "Answer 1",
        ai_explanation: "lorem ipsum",
        human_explanation: null,
        options_1: "lorem ipsum",
        options_2: "lorem ipsum",
        options_3: "lorem ipsum",
        options_4: "lorem ipsum",
        created_by: "ai",
        difficulty: "Hard",
        is_active: false,
    },
    {
        id: "2",
        klola_id: "staging",
        question: "Question 2",
        answer: "Answer 2",
        ai_explanation: null,
        human_explanation: "lorem ipsum",
        options_1: "lorem ipsum",
        options_2: "lorem ipsum",
        options_3: "lorem ipsum",
        options_4: "lorem ipsum",
        created_by: "human",
        difficulty: "Easy",
        is_active: true,
    },
]

export function CardQuestion() {
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
                <CardHeader className="flex justify-between items-center">
                    <div>
                        <CardTitle>Question Setting</CardTitle>
                        <CardDescription>
                            Set the question for the assessment
                        </CardDescription>
                    </div>
                    <div className="flex gap-4">
                        <Button variant="secondary" size="sm" onClick={() => setOpenAdd(true)}><IconPlus /> Add Question</Button>
                        {/* <RainbowButton variant="outline" size="sm"><IconBrandGithubCopilot /> Generate</RainbowButton> */}
                        <ShimmerButton className="shadow-2xl">
                            <IconAi />&nbsp;Generate
                        </ShimmerButton>
                    </div>
                </CardHeader>
                <CardContent>
                    <div className="flex mb-4 max-w-[8.5rem] items-center gap-2 p-3 bg-sky-50 dark:bg-sky-900/20 border border-sky-200 dark:border-sky-800 rounded-lg">
                        <IconFileDescription className="w-4 h-4 text-sky-600 dark:text-sky-400" />
                        <span className="text-sm text-sky-700 dark:text-sky-300">
                            Total Data: 2
                        </span>
                    </div>
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
                            {invoices.map((data: any, k: number) => (
                                <TableRow key={k}>
                                    <TableCell className="font-medium">{data.id}</TableCell>
                                    <TableCell>{data.klola_id}</TableCell>
                                    <TableCell>
                                        {
                                            data.is_active ? <Badge variant="secondary" className="rounded-sm bg-green-800">Active</Badge>
                                                : <Badge variant="secondary" className="rounded-sm bg-red-800">Inactive</Badge>
                                        }
                                    </TableCell>
                                    <TableCell>
                                        <TableCell>
                                            {
                                                data.created_by === "ai" ? <Badge variant="secondary" className="rounded-sm bg-green-800">Klola Assistant</Badge>
                                                    : <Badge variant="secondary" className="rounded-sm bg-sky-800">Human</Badge>
                                            }
                                        </TableCell>
                                    </TableCell>
                                    <TableCell>
                                        <TableCell>
                                            {
                                                data.difficulty === "Easy" ? <Badge variant="secondary" className="rounded-sm bg-green-800">Easy</Badge>
                                                    : data.difficulty === "Medium" ? <Badge variant="secondary" className="rounded-sm bg-sky-800">Medium</Badge>
                                                        : <Badge variant="secondary" className="rounded-sm bg-red-800">Hard</Badge>
                                            }
                                        </TableCell>
                                    </TableCell>
                                    <TableCell>{data.question}</TableCell>
                                    <TableCell>{data.answer}</TableCell>
                                    <TableCell>{data.ai_explanation}</TableCell>
                                    <TableCell>{data.human_explanation}</TableCell>
                                    <TableCell>
                                        <div>
                                            <div>A. {data.options_1}</div>
                                            <div>B. {data.options_2}</div>
                                            <div>C. {data.options_3}</div>
                                            <div>D. {data.options_4}</div>
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
