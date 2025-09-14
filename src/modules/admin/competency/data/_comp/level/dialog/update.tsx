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
import { useEffect, useState } from "react"
import { toast } from "sonner"

export function UpdateDialog({ openUpdate, setOpenUpdate, onUpdateData, updateData }: any) {
    const [formData, setFormData] = useState({
        created_by: '',
        klola_id: '',
        qualification: '',
        level: 1,
        description: '',
        active: false
    });

    const handleInputChange = (field: string, value: any) => {
        setFormData(prev => ({
            ...prev,
            [field]: value
        }));
    };

    const handleSubmit = async () => {
        if (!formData.klola_id || !formData.qualification) {
            toast.error('Klola ID dan Qualification wajib diisi');
            return;
        }

        await onUpdateData(formData, updateData?.id);
        setOpenUpdate();
    };

    useEffect(() => {
        setFormData({
            created_by: updateData?.created_by,
            klola_id: updateData?.klola_id,
            qualification: updateData?.qualification,
            level: updateData?.level,
            description: updateData?.description,
            active: updateData?.active
        })
    }, [updateData?.id])
    return (
        <Dialog open={openUpdate} onOpenChange={setOpenUpdate}>
            <DialogContent blurIntensity="sm" className="sm:max-w-[700px]">
                <DialogHeader>
                    <DialogTitle>Update Proficiency Level</DialogTitle>
                    <DialogDescription>
                        Update proficiency level details. Click update when you&apos;re done.
                    </DialogDescription>
                </DialogHeader>
                <div className="grid auto-rows-min grid-cols-1 md:grid-cols-2 gap-6 overflow-y-auto max-h-[calc(100vh-200px)]">
                    <div className="grid gap-3">
                        <Label htmlFor="set-id">Klola ID</Label>
                        <Input
                            id="set-id"
                            value={formData.klola_id}
                            disabled
                            onChange={(e) => handleInputChange('klola_id', e.target.value)}
                            placeholder="staging"
                        />
                    </div>
                    <div className="grid gap-3">
                        <Label htmlFor="airplane-mode">Is Active</Label>
                        <Switch id="airplane-mode" defaultChecked={formData.active} onCheckedChange={(checked) => handleInputChange('active', checked)} />
                    </div>
                    <div className="grid gap-3">
                        <Label htmlFor="set-id">Qualification</Label>
                        <Input
                            id="set-id"
                            value={formData.qualification}
                            // disabled
                            onChange={(e) => handleInputChange('qualification', e.target.value)}
                            placeholder="Enter qualification"
                        />
                    </div>
                    <div className="grid gap-3">
                        <Label htmlFor="difficulty">Level</Label>
                        <Select
                            defaultValue={formData?.level?.toString()}
                            onValueChange={(value) => handleInputChange('level', value)}
                        >
                            <SelectTrigger className="w-auto">
                                <SelectValue placeholder="Select level" />
                            </SelectTrigger>
                            <SelectContent>
                                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item: any) => (
                                    <SelectItem key={item} value={item}>
                                        Level {item}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>
                </div>
                <div className="grid gap-3">
                    <Label htmlFor="set-id">Description</Label>
                    <Textarea
                        id="set-id"
                        value={formData.description}
                        // disabled
                        onChange={(e) => handleInputChange('description', e.target.value)}
                        placeholder="Enter description"
                    />
                </div>
                <DialogFooter className="flex gap-4">
                    <DialogClose asChild>
                        <Button variant="destructive" size="sm"><IconX />Cancel</Button>
                    </DialogClose>
                    <Button variant="outline" size="sm" onClick={handleSubmit}><IconDeviceSdCard /> Update Changes</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}