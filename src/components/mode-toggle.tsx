"use client";

import { AnimatedThemeToggler } from "./ui/animated-theme-toggler";

export function ModeToggle({ className }: { className?: string }) {
  return (
    <AnimatedThemeToggler />
    // <Button
    //   type="button"
    //   variant="link"
    //   size="icon"
    //   className={cn(className)}
    //   onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    // >
    //   <SunIcon className="h-full w-full" />
    //   <MoonIcon className="hidden h-full w-full" />
    // </Button>
  );
}
