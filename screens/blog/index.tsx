"use client";

import BlogCard from "@/components/BlogCard";
import HeroComponents from "@/components/HeroComponents";
import { WavyBackground } from "@/components/ui/wavy-background";
import { useTheme } from "next-themes";

export default function Blogpages() {
  const { theme } = useTheme();

  return (
    <>
    <HeroComponents title="Bécanee" slug="Knowladge" />

    <BlogCard
    title="Make things float in air"
    desc="Hover over this card to unleash the power of CSS perspective"
    image="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    route="/" />

      {/* <WavyBackground className="max-w-4xl mx-auto pb-40" theme={theme}>
        <div className="h-screen flex justify-center items-center px-4">
          <div
            className="text-3xl mx-auto font-normal text-black dark:text-white"
            style={{ marginTop: -150, color: theme === "dark" ? "white" : "black" }}
          >
            Blog
          </div>
        </div>
      </WavyBackground> */}
    </>
  );
}
