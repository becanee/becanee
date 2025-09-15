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

export function AddDialog({ openAdd, setOpenAdd, addData, parentID, parent }: any) {
    const user = getUserCookie();

    const [formData, setFormData] = useState({
        created_by: user?.name,
        klola_id: getCookie('_S')?.toString().toUpperCase(),
        parent: parentID,
        difficulty: parent?.difficulty,
        question: '',
        answer: '',
        ai_explanation: '',
        human_explanation: '',
        option_a: '',
        option_b: '',
        option_c: '',
        option_d: '',
        active: false
    });

    const handleInputChange = (field: string, value: any) => {
        setFormData(prev => ({
            ...prev,
            [field]: value
        }));
    };

    const handleSubmit = async () => {
        if (!formData.klola_id || !formData.question || !formData.answer) {
            toast.error('Klola ID, Question, Answer, wajib diisi');
            return;
        }

        await addData(formData);
        setOpenAdd(false);
    };
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
                        <Label htmlFor="set-id">Created By</Label>
                        <Input
                            id="set-id"
                            value={formData.created_by}
                            disabled
                            onChange={(e) => handleInputChange('created_by', e.target.value)}
                            placeholder="Enter created by"
                        />
                    </div>
                    <div className="grid gap-3">
                        <Label htmlFor="difficulty">Difficulty</Label>
                        <Select
                            disabled={parent?.difficulty}
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
                            </SelectContent>
                        </Select>
                    </div>
                </div>
                <div className="grid gap-3">
                    <Label htmlFor="set-id">Question</Label>
                    <Textarea
                        id="set-id"
                        value={formData.question}
                        // disabled
                        onChange={(e) => handleInputChange('question', e.target.value)}
                        placeholder="Enter question"
                    />
                </div>
                <div className="grid gap-3">
                    <Label htmlFor="set-id">Answer</Label>
                    <Input
                        id="set-id"
                        value={formData.answer}
                        // disabled
                        onChange={(e) => handleInputChange('answer', e.target.value)}
                        placeholder="Enter answer"
                    />
                </div>
                <div className="grid auto-rows-min grid-cols-1 md:grid-cols-2 gap-6 overflow-y-auto max-h-[calc(100vh-200px)]">
                    <div className="grid gap-3">
                        <Label htmlFor="set-id">(AI) Explanation</Label>
                        <Textarea
                            id="set-id"
                            value={formData.ai_explanation}
                            // disabled
                            onChange={(e) => handleInputChange('ai_explanation', e.target.value)}
                            placeholder="Enter AI explanation"
                        />
                    </div>
                    <div className="grid gap-3">
                        <Label htmlFor="set-id">(Human) Explanation</Label>
                        <Textarea
                            id="set-id"
                            value={formData.human_explanation}
                            // disabled
                            onChange={(e) => handleInputChange('human_explanation', e.target.value)}
                            placeholder="Enter human explanation"
                        />
                    </div>
                </div>
                <div className="grid auto-rows-min grid-cols-1 md:grid-cols-2 gap-6 overflow-y-auto max-h-[calc(100vh-200px)]">
                    <div className="grid gap-3">
                        <Label htmlFor="set-id">Option A</Label>
                        <Textarea
                            id="set-id"
                            value={formData.option_a}
                            // disabled
                            onChange={(e) => handleInputChange('option_a', e.target.value)}
                            placeholder="Enter option A"
                        />
                    </div>
                    <div className="grid gap-3">
                        <Label htmlFor="set-id">Option B</Label>
                        <Textarea
                            id="set-id"
                            value={formData.option_b}
                            // disabled
                            onChange={(e) => handleInputChange('option_b', e.target.value)}
                            placeholder="Enter option B"
                        />
                    </div>
                    <div className="grid gap-3">
                        <Label htmlFor="set-id">Option C</Label>
                        <Textarea
                            id="set-id"
                            value={formData.option_c}
                            // disabled
                            onChange={(e) => handleInputChange('option_c', e.target.value)}
                            placeholder="Enter option C"
                        />
                    </div>
                    <div className="grid gap-3">
                        <Label htmlFor="set-id">Option D</Label>
                        <Textarea
                            id="set-id"
                            value={formData.option_d}
                            // disabled
                            onChange={(e) => handleInputChange('option_d', e.target.value)}
                            placeholder="Enter option D"
                        />
                    </div>
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