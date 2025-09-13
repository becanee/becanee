"use client";

import { ShineBorder } from "@/components/magicui/shine-border";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
    Card,
    CardContent,
    CardHeader
} from "@/components/ui/card";
import { IconAlertHexagon } from "@tabler/icons-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function CardProfile() {
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
            <CardHeader>
                <div className="flex">
                    <Avatar className="w-12 h-12">
                        <AvatarImage src={'https://github.com/shadcn.png'} />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <div className="ml-2 flex flex-col">
                        <div className="text-lg font-bold">
                            Rama Aditya
                        </div>
                        <div className="text-sm text-muted-foreground">
                            rama@klola.id
                        </div>
                    </div>
                </div>
            </CardHeader>
            <CardContent>
                <div className="flex justify-between items-center grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="grid auto-rows-min gap-4 grid-cols-2 md:grid-cols-4">
                        <div>
                            <h1 className="flex text-md font-bold uppercase"> klola ID</h1>
                            <p className="text-muted-foreground">Staging</p>
                        </div>
                        <div>
                            <h1 className="flex text-md font-bold uppercase">nip</h1>
                            <p className="text-muted-foreground">KL0014</p>
                        </div>
                        <div>
                            <h1 className="flex text-md font-bold uppercase">rank</h1>
                            <p className="text-muted-foreground">Staff IT</p>
                        </div>
                        <div>
                            <h1 className="flex text-md font-bold uppercase"> grade</h1>
                            <p className="text-muted-foreground">Staff IT</p>
                        </div>
                        <div>
                            <h1 className="flex text-md font-bold uppercase"> department</h1>
                            <p className="text-muted-foreground">Information Technology</p>
                        </div>
                        <div>
                            <h1 className="flex text-md font-bold uppercase">divisi</h1>
                            <p className="text-muted-foreground">Information Technology</p>
                        </div>
                        <div>
                            <h1 className="flex text-md font-bold uppercase">unit</h1>
                            <p className="text-muted-foreground">Head Office</p>
                        </div>
                        <div>
                            <h1 className="flex text-md font-bold uppercase">office</h1>
                            <p className="text-muted-foreground">Jakarta</p>
                        </div>
                    </div>

                    <div className="flex justify-end items-center">
                        <div className="min-w-full md:-mt-18 md:min-w-lg rounded-xl border text-card-foreground p-4 border-sky-200 dark:border-sky-900 bg-sky-50 dark:bg-sky-950/20 shadow-none">
                            <h2 className="flex gap-2 text-base uppercase md:text-lg font-semibold mb-2 text-sky-900 dark:text-sky-100">
                                <IconAlertHexagon size={20} className="mt-1" /> nearest schedule
                            </h2>
                            <div className="grid gap-4 mt-4 grid-cols-2">
                                <div>
                                    <h1 className="flex text-sm font-bold uppercase"> Assessment</h1>
                                    <p className="text-muted-foreground">Emotional Intelligence</p>
                                </div>
                                <div>
                                    <h1 className="flex text-sm font-bold uppercase"> Level</h1>
                                    <p className="text-muted-foreground">Hard</p>
                                </div>
                                <div>
                                    <h1 className="flex text-sm font-bold uppercase"> Date</h1>
                                    <p className="text-muted-foreground">Friday, 11 Sept 2025</p>
                                </div>
                                <div>
                                    <h1 className="flex text-sm font-bold uppercase"> time</h1>
                                    <p className="text-muted-foreground">20:30 WIB</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </CardContent>
            {/* <CardFooter className="block border-t border-border [.border-t]:pt-4">
                <div className="flex mb-4">
                    <h1 className="flex text-sm font-bold uppercase"><Zap size={20} className="mr-1 mt-1" /> Akses Cepat</h1>
                </div>
                <div className="grid auto-rows-min gap-4 grid-cols-1 md:grid-cols-4">
                    <Link href="/">
                        <Button className="w-full" variant='outline'><ShoppingCart />Langganan</Button>
                    </Link>
                    <Link href="/member/history">
                        <Button className="w-full" variant='outline'><FileClock />Riwayat</Button>
                    </Link>
                    <Link href="/tekno-extension.zip" target="tab">
                        <Button className="w-full" variant='outline'><Chromium />Ekstensi</Button>
                    </Link>
                    <Link href="https://api.whatsapp.com/send/?phone=6285156974420" target="tab">
                        <Button className="w-full" variant='outline'><MessageCircleMore />Chat Admin</Button>
                    </Link>
                </div>
            </CardFooter> */}
        </Card>
    );
}
