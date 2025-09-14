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
import { Switch } from "@/components/ui/switch"
import { Textarea } from "@/components/ui/textarea"
import { getUserCookie } from "@/lib/cookie"
import { IconDeviceSdCard, IconX } from "@tabler/icons-react"
import { getCookie } from "cookies-next"
import { useState } from "react"
import { toast } from "sonner"

export function AddDialog({ openAdd, setOpenAdd, addData }: any) {
    const user = getUserCookie();

    const [formData, setFormData] = useState({
        created_by: user?.name,
        klola_id: getCookie('_S')?.toString().toUpperCase(),
        code: '',
        name: '',
        description: '',
        category: '',
        proficiency: '',
        active: false
    });

    const handleInputChange = (field: string, value: any) => {
        setFormData(prev => ({
            ...prev,
            [field]: value
        }));
    };

    const handleSubmit = async () => {
        if (!formData.klola_id || !formData.name) {
            toast.error('Klola ID dan Nama wajib diisi');
            return;
        }

        await addData(formData);
        setOpenAdd(false);
    };
    
    return (
        <Dialog open={openAdd} onOpenChange={setOpenAdd}>
            <DialogContent blurIntensity="sm" className="sm:max-w-[700px]">
                <DialogHeader>
                    <DialogTitle>Add Category</DialogTitle>
                    <DialogDescription>
                        Add new category. Click save when you&apos;re done.
                    </DialogDescription>
                </DialogHeader>
                <div className="grid auto-rows-min grid-cols-1 md:grid-cols-2 gap-6 overflow-y-auto max-h-[calc(100vh-200px)]">
                    <div className="grid gap-3">
                        <Label htmlFor="set-id">Klola ID</Label>
                        <Input
                            id="set-id"
                            value={formData.klola_id?.toString()}
                            disabled
                            onChange={(e) => handleInputChange('klola_id', e.target.value)}
                            placeholder="staging"
                        />
                    </div>
                    <div className="grid gap-3">
                        <Label htmlFor="airplane-mode">Is Active</Label>
                        <Switch id="airplane-mode" checked={formData.active} onCheckedChange={(e) => handleInputChange('active', e)} />
                    </div>
                </div>
                <div className="grid gap-3">
                    <Label htmlFor="set-id">Name</Label>
                    <Input
                        id="set-id"
                        value={formData.name}
                        // disabled
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        placeholder="Enter name"
                    />
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
                    <Button variant="outline" size="sm" onClick={handleSubmit}><IconDeviceSdCard /> Save Changes</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}