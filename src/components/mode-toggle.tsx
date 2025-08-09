"use client";

import { useTheme } from "next-themes";
import { AnimatedThemeToggler } from "./magicui/animated-theme-toggler";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <AnimatedThemeToggler />
  );
}
