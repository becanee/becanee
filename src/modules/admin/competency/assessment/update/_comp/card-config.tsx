"use client";

import { ShineBorder } from "@/components/magicui/shine-border";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { IconArrowBackUp, IconDeviceSdCard } from "@tabler/icons-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useEffect, useState } from "react";


export function CardConfig({ id }: { id?: string }) {
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
                    <CardTitle>Assessment Configuration</CardTitle>
                    <CardDescription>
                        Set the configuration for the assessment
                    </CardDescription>
                </div>
                <Button variant="outline" size="sm"><IconDeviceSdCard /> Save Configuration</Button>
            </CardHeader>
            <CardContent>
                <div className="grid auto-rows-min grid-cols-1 md:grid-cols-3 gap-6 px-4 overflow-y-auto max-h-[calc(100vh-200px)]">
                    <div className="grid gap-3">
                        <Label htmlFor="set-id">Assessment Name</Label>
                        <Input
                            id="set-id"
                            // value={formData.set_id}
                            // disabled
                            // onChange={(e) => handleInputChange('set_id', e.target.value)}
                            placeholder="Enter assessment name"
                        />
                    </div>
                    <div className="grid gap-3">
                        <Label htmlFor="difficulty">Competency</Label>
                        <Select
                        // onValueChange={(value) => handleInputChange('difficulty', value)}
                        >
                            <SelectTrigger className="w-auto">
                                <SelectValue placeholder="Select competency" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="Easy">Competency 1</SelectItem>
                                <SelectItem value="Medium">Competency 2</SelectItem>
                                <SelectItem value="Hard">Competency 3</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="grid gap-3">
                        <Label htmlFor="set-id">Assessment Schedule</Label>
                        <Input
                            id="set-id"
                            type="datetime-local"
                            // value={formData.set_id}
                            // disabled
                            // onChange={(e) => handleInputChange('set_id', e.target.value)}
                            placeholder="Enter assessment name"
                        />
                    </div>
                </div>

                <div className="mt-5 grid auto-rows-min grid-cols-1 md:grid-cols-2 gap-6 px-4 overflow-y-auto max-h-[calc(100vh-200px)]">
                    <div className="grid gap-3">
                        <Label htmlFor="difficulty">Questionnaire Set</Label>
                        <Select
                        // onValueChange={(value) => handleInputChange('difficulty', value)}
                        >
                            <SelectTrigger className="w-auto">
                                <SelectValue placeholder="Select set" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="Easy">Quiz</SelectItem>
                                <SelectItem value="Medium">Essay</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="grid auto-rows-min grid-cols-1 md:grid-cols-3 gap-4 overflow-y-auto max-h-[calc(100vh-200px)]">
                        <div className="grid gap-3">
                            <Label htmlFor="set-id">Type</Label>
                            <Input
                                id="set-id"
                                className="w-full"
                                // value={formData.set_id}
                                disabled
                                // onChange={(e) => handleInputChange('set_id', e.target.value)}
                                placeholder="[Automaticly]"
                            />
                        </div>
                        <div className="grid gap-3">
                            <Label htmlFor="set-id">Created By</Label>
                            <Input
                                id="set-id"
                                className="w-full"
                                // value={formData.set_id}
                                disabled
                                // onChange={(e) => handleInputChange('set_id', e.target.value)}
                                placeholder="[Automaticly]"
                            />
                        </div>
                        <div className="grid gap-3">
                            <Label htmlFor="set-id">Amount</Label>
                            <Input
                                id="set-id"
                                className="w-full"
                                // value={formData.set_id}
                                disabled
                                // onChange={(e) => handleInputChange('set_id', e.target.value)}
                                placeholder="[Automaticly]"
                            />
                        </div>
                    </div>

                </div>
            </CardContent>
        </Card>
    );
}