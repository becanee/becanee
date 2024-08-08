"use client";

import BlogCard from "@/components/BlogCard";
import HeroComponents from "@/components/HeroComponents";
import KnowladgeDetail from "@/components/KnowladgeDetail";
import { useTheme } from "next-themes";

export default function KnowladgeDetailpages() {
  const { theme } = useTheme();

  return (
    <>
      <HeroComponents title="" slug="Make things float in air" />

      <KnowladgeDetail />
    </>
  );
}
