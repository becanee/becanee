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
import { useEffect, useState } from "react"
import { toast } from "sonner"

export function UpdateDialog({ openUpdate, setOpenUpdate, onUpdateData, updateData }: any) {
    const user = getUserCookie();

    const [formData, setFormData] = useState({
        created_by: user?.name,
        klola_id: getCookie('_S')?.toString().toUpperCase(),
        name: '',
        description: '',
        set_amount: 0,
        difficulty: '',
        document: null,
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

        await onUpdateData(formData, updateData?.id);
        setOpenUpdate();
    };

    useEffect(() => {
        setFormData({
            created_by: updateData?.created_by,
            klola_id: updateData?.klola_id,
            name: updateData?.name,
            description: updateData?.description,
            set_amount: updateData?.set_amount,
            difficulty: updateData?.difficulty,
            document: updateData?.document?.id,
            active: updateData?.active
        })
    }, [updateData?.id])
    return (
        <Dialog open={openUpdate} onOpenChange={setOpenUpdate}>
            <DialogContent blurIntensity="sm" className="sm:max-w-[700px]">
                <DialogHeader>
                    <DialogTitle>Update MCQs Set</DialogTitle>
                    <DialogDescription>
                        Update MCQs set details. Click update when you&apos;re done.
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
                        <Switch id="airplane-mode" defaultChecked={formData.active} onCheckedChange={(e) => handleInputChange('active', e)} />
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
                        <Label htmlFor="set-id">Total Quiz</Label>
                        <Input
                            id="set-id"
                            type="number"
                            value={formData.set_amount}
                            // disabled
                            onChange={(e) => handleInputChange('set_amount', e.target.value)}
                            placeholder="Enter total quiz"
                        />
                    </div>
                </div>
                <div className="grid gap-3">
                    <Label htmlFor="difficulty">Difficulty</Label>
                    <Select
                        defaultValue={formData.difficulty}
                        onValueChange={(value) => handleInputChange('difficulty', value)}
                    >
                        <SelectTrigger className="w-auto">
                            <SelectValue placeholder="Select difficulty" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="Easy">Easy</SelectItem>
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
                        value={formData.description}
                        // disabled
                        onChange={(e) => handleInputChange('description', e.target.value)}
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
                    <Button variant="outline" size="sm" onClick={handleSubmit}><IconDeviceSdCard /> Update Changes</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}