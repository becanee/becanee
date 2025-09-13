"use client"

import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Textarea } from "@/components/ui/textarea"
import { IconDeviceSdCard, IconX } from "@tabler/icons-react"

export function AddDialog({ openAdd, setOpenAdd }: { openAdd: boolean, setOpenAdd: (open: boolean) => void }) {
    return (
        <Dialog open={openAdd} onOpenChange={setOpenAdd}>
            <DialogContent blurIntensity="sm" className="sm:max-w-[700px]">
                <DialogHeader>
                    <DialogTitle>Add Question</DialogTitle>
                    <DialogDescription>
                        Add new question. Click save when you&apos;re done.
                    </DialogDescription>
                </DialogHeader>
                <div className="grid auto-rows-min grid-cols-1 md:grid-cols-4 gap-6 overflow-y-auto max-h-[calc(100vh-200px)]">
                    <div className="grid gap-3">
                        <Label htmlFor="set-id">Klola ID</Label>
                        <Input
                            id="set-id"
                            // value={formData.set_id}
                            disabled
                            // onChange={(e) => handleInputChange('set_id', e.target.value)}
                            placeholder="staging"
                        />
                    </div>
                    <div className="grid gap-3">
                        <Label htmlFor="airplane-mode">Is Active</Label>
                        <Switch id="airplane-mode" />
                    </div>
                    <div className="grid gap-3">
                        <Label htmlFor="difficulty">Created By</Label>
                        <Select
                        // onValueChange={(value) => handleInputChange('difficulty', value)}
                        >
                            <SelectTrigger className="w-auto">
                                <SelectValue placeholder="Select created by" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="Essay">Human</SelectItem>
                                <SelectItem value="Medium">Klola Assistant</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="grid gap-3">
                        <Label htmlFor="difficulty">Difficulty</Label>
                        <Select
                        // onValueChange={(value) => handleInputChange('difficulty', value)}
                        >
                            <SelectTrigger className="w-auto">
                                <SelectValue placeholder="Select difficulty" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="Easy">Easy</SelectItem>
                                <SelectItem value="Medium">Medium</SelectItem>
                                <SelectItem value="Hard">Hard</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </div>
                <div className="grid gap-3">
                    <Label htmlFor="set-id">Question</Label>
                    <Textarea
                        id="set-id"
                        // value={formData.set_id}
                        // disabled
                        // onChange={(e) => handleInputChange('set_id', e.target.value)}
                        placeholder="Enter question"
                    />
                </div>
                <div className="grid gap-3">
                    <Label htmlFor="set-id">Answer</Label>
                    <Input
                        id="set-id"
                        // value={formData.set_id}
                        // disabled
                        // onChange={(e) => handleInputChange('set_id', e.target.value)}
                        placeholder="Enter answer"
                    />
                </div>
                                <div className="grid auto-rows-min grid-cols-1 md:grid-cols-2 gap-6 overflow-y-auto max-h-[calc(100vh-200px)]">
                    <div className="grid gap-3">
                        <Label htmlFor="set-id">(AI) Explanation</Label>
                        <Textarea
                            id="set-id"
                            // value={formData.set_id}
                            // disabled
                            // onChange={(e) => handleInputChange('set_id', e.target.value)}
                            placeholder="Enter AI explanation"
                        />
                    </div>
                    <div className="grid gap-3">
                        <Label htmlFor="set-id">(Human) Explanation</Label>
                        <Textarea
                            id="set-id"
                            // value={formData.set_id}
                            // disabled
                            // onChange={(e) => handleInputChange('set_id', e.target.value)}
                            placeholder="Enter human explanation"
                        />
                    </div>
                </div>
                <div className="grid auto-rows-min grid-cols-1 md:grid-cols-2 gap-6 overflow-y-auto max-h-[calc(100vh-200px)]">
                    <div className="grid gap-3">
                        <Label htmlFor="set-id">Option A</Label>
                        <Textarea
                            id="set-id"
                            // value={formData.set_id}
                            // disabled
                            // onChange={(e) => handleInputChange('set_id', e.target.value)}
                            placeholder="Enter option A"
                        />
                    </div>
                    <div className="grid gap-3">
                        <Label htmlFor="set-id">Option B</Label>
                        <Textarea
                            id="set-id"
                            // value={formData.set_id}
                            // disabled
                            // onChange={(e) => handleInputChange('set_id', e.target.value)}
                            placeholder="Enter option B"
                        />
                    </div>
                    <div className="grid gap-3">
                        <Label htmlFor="set-id">Option C</Label>
                        <Textarea
                            id="set-id"
                            // value={formData.set_id}
                            // disabled
                            // onChange={(e) => handleInputChange('set_id', e.target.value)}
                            placeholder="Enter option C"
                        />
                    </div>
                    <div className="grid gap-3">
                        <Label htmlFor="set-id">Option D</Label>
                        <Textarea
                            id="set-id"
                            // value={formData.set_id}
                            // disabled
                            // onChange={(e) => handleInputChange('set_id', e.target.value)}
                            placeholder="Enter option D"
                        />
                    </div>
                </div>
                <DialogFooter className="flex gap-4">
                    <DialogClose asChild>
                        <Button variant="destructive" size="sm"><IconX />Cancel</Button>
                    </DialogClose>
                    <Button variant="outline" size="sm"><IconDeviceSdCard /> Save Changes</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}