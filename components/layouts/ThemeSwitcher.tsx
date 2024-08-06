"use client";

import { Switch } from "@nextui-org/react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { TbMoon, TbSun } from "react-icons/tb";

export default function ThemeSwitcher() {
  const [isSelected, setIsSelected] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);

    if (!isSelected) setTheme("dark");
    if (isSelected) setTheme("light");
  }, [isSelected, theme]);

  if (!mounted) return null;

  return (
    <div>
      <Switch
        isSelected={isSelected}
        onValueChange={setIsSelected}
        size="md"
        color="success"
        startContent={<TbMoon />}
        endContent={<TbSun />}
      />
    </div>
  );
}
