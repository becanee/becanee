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
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { formatFullDateTime } from "@/lib/helpers/date-formatter";
import { cn } from "@/lib/utils";
import { IconAlertTriangle, IconCheck, IconEraser, IconRefresh, IconSquareArrowRight } from "@tabler/icons-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";


// Data contoh pertanyaan
const sampleQuestion: any = {
    id: 1,
    question: "1. Ketika menghadapi konflik dengan rekan kerja, pendekatan mana yang paling efektif untuk menyelesaikan masalah tersebut?",
    options: [
        { value: "A", text: "Menghindari konflik dan berharap masalah akan hilang dengan sendirinya" },
        { value: "B", text: "Menggunakan otoritas untuk memaksakan solusi yang diinginkan" },
        { value: "C", text: "Mencari solusi win-win melalui diskusi terbuka dan empati" },
        { value: "D", text: "Menyerahkan keputusan kepada atasan untuk menghindari tanggung jawab" },
        { value: "E", text: "Mengabaikan perasaan orang lain dan fokus hanya pada hasil" }
    ]
};

export function CardMultipleChoice() {
    const { theme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const [currentTime, setCurrentTime] = useState(new Date());
    const [selectedAnswer, setSelectedAnswer] = useState<string>("");
    const [isAnswered, setIsAnswered] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    // Realtime clock yang memperbarui setiap detik
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    // Fungsi untuk menyimpan jawaban yang dipilih
    const handleAnswerSelect = (value: string) => {
        setSelectedAnswer(value);
        setIsAnswered(true);

        // Simulasi penyimpanan jawaban (bisa diganti dengan API call)
        console.log(`Jawaban dipilih: ${value} untuk pertanyaan ID: ${sampleQuestion.id}`);

        // Optional: Auto-save atau konfirmasi visual
        setTimeout(() => {
            console.log(`Jawaban ${value} berhasil disimpan`);
        }, 500);
    };

    // Prevent hydration mismatch by using default color until mounted
    const shineColor = mounted ? (theme === "dark" ? "white" : "black") : "black";

    return (
        <Card className="relative overflow-hidden">
            <ShineBorder shineColor={shineColor} />
            <CardHeader>
                <div className="flex justify-between items-center">
                    <div>
                        <CardTitle>Emotional Intelligence</CardTitle>
                        <CardDescription className="mt-1">
                            Non Technical | Hard | Multiple Choice | 25 Question
                        </CardDescription>
                    </div>

                    {/* <Button variant="outline" size="sm"><IconRefresh /> Refresh</Button> */}
                    <CardTitle>{formatFullDateTime(currentTime)}</CardTitle>
                </div>

                <div className="flex mt-4 items-center gap-2 p-3 bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 rounded-lg">
                    <IconAlertTriangle className="w-4 h-4 text-orange-600 dark:text-orange-400" />
                    <span className="text-sm text-orange-700 dark:text-orange-300">
                        Do not refresh this page, or all answers will be lost
                    </span>
                </div>
            </CardHeader>
            <CardContent className="space-y-6">
                {/* Pertanyaan */}
                <div className="space-y-3">
                    <h3 className="text-lg font-medium leading-relaxed text-foreground">
                        {sampleQuestion.question}
                    </h3>
                </div>

                {/* Pilihan Jawaban */}
                <div className="space-y-3">
                    <h4 className="text-sm font-medium text-muted-foreground mb-4">
                        Pilih salah satu jawaban:
                    </h4>

                    <ToggleGroup
                        type="single"
                        value={selectedAnswer}
                        onValueChange={handleAnswerSelect}
                        className="flex flex-col gap-3 w-full"
                    >
                        {sampleQuestion.options.map((option: any) => (
                            <ToggleGroupItem
                                key={option.value}
                                value={option.value}
                                aria-label={`Pilihan ${option.value}`}
                                className={cn(
                                    "w-full justify-start text-left p-4 h-auto min-h-[60px] border-2 transition-all duration-200",
                                    "hover:bg-accent/50 hover:border-accent-foreground/20",
                                    "data-[state=on]:bg-primary/10 data-[state=on]:border-primary data-[state=on]:text-primary-foreground",
                                    "focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
                                    selectedAnswer === option.value && "ring-2 ring-primary ring-offset-2"
                                )}
                            >
                                <div className="flex items-start gap-3 w-full">
                                    <div className={cn(
                                        "flex-shrink-0 w-8 h-8 rounded-full border-2 flex items-center justify-center font-semibold text-sm transition-colors",
                                        selectedAnswer === option.value
                                            ? "bg-primary text-primary-foreground border-primary"
                                            : "border-muted-foreground/30 text-muted-foreground"
                                    )}>
                                        {selectedAnswer === option.value ? (
                                            <IconCheck className="w-4 h-4" />
                                        ) : (
                                            option.value
                                        )}
                                    </div>
                                    <div className="flex-1 text-sm leading-relaxed">
                                        {option.text}
                                    </div>
                                </div>
                            </ToggleGroupItem>
                        ))}
                    </ToggleGroup>
                </div>

                {/* Status Jawaban */}
                {isAnswered && (
                    <div className="flex items-center gap-2 p-3 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
                        <IconCheck className="w-4 h-4 text-green-600 dark:text-green-400" />
                        <span className="text-sm text-green-700 dark:text-green-300">
                            Jawaban {selectedAnswer} telah dipilih dan disimpan
                        </span>
                    </div>
                )}

                {/* Tombol Aksi */}
                <div className="flex gap-3 pt-4 border-t">
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={() => {
                            setSelectedAnswer("");
                            setIsAnswered(false);
                        }}
                        disabled={!selectedAnswer}
                    >
                        <IconEraser className="w-4 h-4 mr-2" />
                        Reset Answer
                    </Button>

                    <Button
                        size="sm"
                        disabled={!selectedAnswer}
                        className="ml-auto"
                    >
                        Next Question
                        <IconSquareArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                </div>
            </CardContent>
        </Card>
    );
}
