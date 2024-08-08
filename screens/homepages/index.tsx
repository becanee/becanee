"use client";

import { FlipWords } from "@/components/ui/flip-words";
import { WavyBackground } from "@/components/ui/wavy-background";
import { useTheme } from "next-themes";
import { useEffect } from "react";

export default function Homepages() {
  const words = ["About", "Knowladge", "Showcase", "Works"];
  const { theme } = useTheme();

  useEffect(() => { }, [theme])
  return (
    <>
      <WavyBackground className="max-w-4xl mx-auto pb-40" theme={theme}>
        <div className="h-screen flex justify-center items-center px-4">
          <div
            className="text-3xl mx-auto font-normal text-black dark:text-white"
            style={{
              marginTop: -150,
            }}
          >
            Bécanee
            <FlipWords words={words} /> <br />
            you can find in this ecosytem
          </div>
        </div>
      </WavyBackground>
    </>
  );
}
