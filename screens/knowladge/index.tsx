"use client";

import BlogCard from "@/components/BlogCard";
import HeroComponents from "@/components/HeroComponents";
import { WavyBackground } from "@/components/ui/wavy-background";
import { useTheme } from "next-themes";

export default function Knowladgepages() {
  const { theme } = useTheme();

  return (
    <>
    <HeroComponents title="Bécanee" slug="/Knowledge" />

    <BlogCard
    title="Make things float in air"
    desc="Hover over this card to unleash the power of CSS perspective"
    image="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    route="/knowladge/detail" />
    </>
  );
}
