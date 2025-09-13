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
                    <DialogTitle>Add Essay Set</DialogTitle>
                    <DialogDescription>
                        Add new Essay Set. Click save when you&apos;re done.
                    </DialogDescription>
                </DialogHeader>
                <div className="grid auto-rows-min grid-cols-1 md:grid-cols-2 gap-6 overflow-y-auto max-h-[calc(100vh-200px)]">
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
                        <Label htmlFor="set-id">Name</Label>
                        <Input
                            id="set-id"
                            // value={formData.set_id}
                            // disabled
                            // onChange={(e) => handleInputChange('set_id', e.target.value)}
                            placeholder="Enter name"
                        />
                    </div>
                    <div className="grid gap-3">
                        <Label htmlFor="set-id">Total Quiz</Label>
                        <Input
                            id="set-id"
                            type="number"
                            // value={formData.set_id}
                            // disabled
                            // onChange={(e) => handleInputChange('set_id', e.target.value)}
                            placeholder="Enter total quiz"
                        />
                    </div>
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
                            <SelectItem value="Essay">Easy</SelectItem>
                            <SelectItem value="Medium">Medium</SelectItem>
                            <SelectItem value="Hard">Hard</SelectItem>
                            <SelectItem value="Mix">Mix (Esay, Medium, Hard)</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <div className="grid gap-3">
                    <Label htmlFor="set-id">Description</Label>
                    <Textarea
                        id="set-id"
                        // value={formData.set_id}
                        // disabled
                        // onChange={(e) => handleInputChange('set_id', e.target.value)}
                        placeholder="Enter description"
                    />
                </div>
                <div className="grid gap-3">
                    <Label htmlFor="set-id">Document</Label>
                    <Input
                        className="block w-full text-sm  cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:placeholder-gray-400"
                        aria-describedby="file_input_help"
                        id="file_input"
                        type="file"
                    />
                    <p
                        className="-mt-2 ml-1 text-xs text-sky-500"
                        id="file_input_help"
                    >
                        *PDF, DOC, DOCX (Max 5MB)
                    </p>
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