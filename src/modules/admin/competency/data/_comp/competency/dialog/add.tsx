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
import { getUserCookie } from "@/lib/cookie"
import { IconDeviceSdCard, IconX } from "@tabler/icons-react"
import { getCookie } from "cookies-next"
import { useState } from "react"
import { toast } from "sonner"

export function AddDialog({ openAdd, category, proficiency, setOpenAdd, addData }: { openAdd: boolean, category: any, proficiency: any, setOpenAdd: (open: boolean) => void, addData: (data: any) => void }) {
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
                    <DialogTitle>Add Competency</DialogTitle>
                    <DialogDescription>
                        Add new competency. Click save when you&apos;re
                        done.
                    </DialogDescription>
                </DialogHeader>
                <div className="grid auto-rows-min grid-cols-1 md:grid-cols-2 gap-6 overflow-y-auto max-h-[calc(100vh-200px)]">
                    <div className="grid gap-3">
                        <Label htmlFor="set-id">Klola ID</Label>
                        <Input
                            id="set-id"
                            value={formData.klola_id}
                            disabled
                            placeholder="staging"
                        />
                    </div>
                    <div className="grid gap-3">
                        <Label htmlFor="airplane-mode">Is Active</Label>
                        <Switch id="airplane-mode" defaultChecked={formData.active} onCheckedChange={(e) => handleInputChange('active', e)} />
                    </div>
                    <div className="grid gap-3">
                        <Label htmlFor="set-id">Code</Label>
                        <Input
                            id="set-id"
                            value={formData.code}
                            // disabled
                            onChange={(e) => handleInputChange('code', e.target.value)}
                            placeholder="Enter code"
                        />
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
                        <Label htmlFor="difficulty">Category</Label>
                        <Select
                            onValueChange={(value) => handleInputChange('category', value)}
                        >
                            <SelectTrigger className="w-auto">
                                <SelectValue placeholder="Select category" />
                            </SelectTrigger>
                            <SelectContent>
                                {
                                    category?.map((item: any) => (
                                        <SelectItem key={item.id} value={item.id}>{item.name}</SelectItem>
                                    ))
                                }
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="grid gap-3">
                        <Label htmlFor="difficulty">Proficiency</Label>
                        <Select
                            onValueChange={(value) => handleInputChange('proficiency', value)}
                        >
                            <SelectTrigger className="w-auto">
                                <SelectValue placeholder="Select proficiency" />
                            </SelectTrigger>
                            <SelectContent>
                                {
                                    proficiency?.map((item: any) => (
                                        <SelectItem key={item.id} value={item.id}>{item.name}</SelectItem>
                                    ))
                                }
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
                    <Button variant="outline" size="sm" onClick={handleSubmit}><IconDeviceSdCard /> Save Changes</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}