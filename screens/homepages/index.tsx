"use client";

import { FlipWords } from "@/components/ui/flip-words";
import { WavyBackground } from "@/components/ui/wavy-background";

export default function Homepages() {
  const words = ["Blog Post", "Showcase", "Project`s"];
  return (
    <>
      <WavyBackground className="max-w-4xl mx-auto pb-40">
        <div className="h-screen flex justify-center items-center px-4">
          <div
            className="text-3xl mx-auto font-normal text-white dark:text-white"
            style={{ marginTop: -150 }}
          >
            Bécanee
            <FlipWords words={words} /> <br />
            you can find in this websites
          </div>
        </div>
      </WavyBackground>
    </>
  );
}
