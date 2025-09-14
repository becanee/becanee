"use client"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { GalleryVerticalEnd } from "lucide-react"
import { FormEvent, useState } from "react"
import { useAuthLogic } from "./_logic"
import Link from "next/link"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { IconLoader } from "@tabler/icons-react"

export function LoginForm({
    className,
    ...props
}: React.ComponentProps<"form">) {
    const [employeeId, setEmployeeId] = useState('');
    const [password, setPassword] = useState('');
    const [scope, setScope] = useState('demo');
    const { isLoading, error, handleLogin, validateForm, clearError } = useAuthLogic();

    const onSubmit = async (e: FormEvent) => {
        e.preventDefault();

        if (validateForm(employeeId, password)) {
            await handleLogin(employeeId, password, scope);
        }
    };

    return (
        <form className={cn("flex flex-col gap-6", className)} onSubmit={onSubmit} {...props}>
            <div className="flex flex-col items-center gap-2 text-center">
                <h1 className="flex items-center gap-2 text-2xl font-bold">
                    <div className="bg-primary text-primary-foreground flex size-6 items-center justify-center rounded-md">
                        <GalleryVerticalEnd className="size-4" />
                    </div>
                    myAssessment</h1>
                <p className="text-muted-foreground text-sm text-balance">
                    Enter your credentials
                </p>
            </div>
            <div className="grid gap-6">
                {error && (
                    <div className="p-3 text-sm text-red-600 bg-red-50 border border-red-200 rounded-md">
                        {error}
                    </div>
                )}
                {/* <div className="p-3 text-sm text-orange-600 bg-orange-50 border border-orange-200 rounded-md">
                    DEVELOPMENT MODE CAN SELECT SCOPE
                </div> */}
                <div className="grid gap-3">
                    <Label htmlFor="employee_id">Scope</Label>
                    <Select defaultValue={scope} onValueChange={(value) => {
                        setScope(value);
                        if (error) clearError();
                    }}>
                        <SelectTrigger className="w-auto">
                            <SelectValue placeholder="Select Scope..." />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="staging">Staging</SelectItem>
                            <SelectItem value="demo">Demo</SelectItem>
                            <SelectItem value="dev">Dev</SelectItem>
                        </SelectContent>
                    </Select>
                    <small className="text-[12px] text-orange-500 -mt-2">*development mode only</small>
                </div>
                <div className="grid gap-3">
                    <Label htmlFor="employee_id">Employee ID</Label>
                    <Input
                        id="employee_id"
                        type="text"
                        placeholder="KLxxxxx"
                        value={employeeId}
                        onChange={(e) => {
                            setEmployeeId(e.target.value);
                            if (error) clearError();
                        }}
                        required
                        disabled={isLoading}
                    />
                </div>
                <div className="grid gap-3">
                    <div className="flex items-center">
                        <Label htmlFor="password">Password</Label>
                        <Link
                            href="/auth"
                            className="ml-auto text-sm underline-offset-4 hover:underline"
                        >
                            Dont Remember?
                        </Link>
                    </div>
                    <Input
                        id="password"
                        type="password"
                        placeholder="********"
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value);
                            if (error) clearError();
                        }}
                        required
                        disabled={isLoading}
                    />
                </div>
                <Button variant="secondary" className="w-full" disabled={isLoading}>
                    {isLoading && <IconLoader className="animate-spin" />}
                    {isLoading ? 'Signing in...' : 'Sign In'}
                </Button>
                <div className="after:border-border relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t">
                    <span className="bg-background text-muted-foreground relative z-10 px-2">
                        Or continue with
                    </span>
                </div>
                <Button variant="outline" className="w-full" disabled>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
                        <path
                            fill="#FFC107"
                            d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"
                        />
                        <path
                            fill="#FF3D00"
                            d="m6.306 14.691 6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 16.318 4 9.656 8.337 6.306 14.691z"
                        />
                        <path
                            fill="#4CAF50"
                            d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0 1 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z"
                        />
                        <path
                            fill="#1976D2"
                            d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002 6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z"
                        />
                    </svg>
                    Google | nanti dulu ya 😁
                </Button>
            </div>
            {/* <div className="text-center text-sm">
        Don&apos;t have an account?{" "}
        <a href="#" className="underline underline-offset-4">
          Sign up
        </a>
      </div> */}
        </form>
    )
}
