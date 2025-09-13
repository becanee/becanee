"use client"

import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Textarea } from "@/components/ui/textarea"
import { IconDeviceSdCard, IconPlus, IconX } from "@tabler/icons-react"

export function UpdateDialog({ openUpdate, setOpenUpdate }: { openUpdate: boolean, setOpenUpdate: (open: boolean) => void }) {
    return (
        <Dialog open={openUpdate} onOpenChange={setOpenUpdate}>
            <DialogContent blurIntensity="sm" className="sm:max-w-[700px]">
                <DialogHeader>
                    <DialogTitle>Update Category</DialogTitle>
                    <DialogDescription>
                        Update category details. Click update when you&apos;re done.
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
                    <Label htmlFor="set-id">Description</Label>
                    <Textarea
                        id="set-id"
                        // value={formData.set_id}
                        // disabled
                        // onChange={(e) => handleInputChange('set_id', e.target.value)}
                        placeholder="Enter description"
                    />
                </div>
                <DialogFooter className="flex gap-4">
                    <DialogClose asChild>
                        <Button variant="destructive" size="sm"><IconX />Cancel</Button>
                    </DialogClose>
                    <Button variant="outline" size="sm"><IconDeviceSdCard /> Update Changes</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}