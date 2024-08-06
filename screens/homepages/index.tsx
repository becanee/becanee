"use client";

import { FlipWords } from "@/components/ui/flip-words";
import { BackgroundBeams } from "@/components/ui/beam-background";

export default function Homepages() {
  const words = ["Blog Post", "Showcase", "Project`s"];
  return (
    <>
      <div className="h-screen w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
        <div className="max-w-full mx-auto p-4">
          <div className="h-screen flex justify-center items-center px-4">
            <div
              className="text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-600"
              style={{ marginTop: -150 }}
            >
              Bécanee
              <FlipWords words={words} /> <br />
              in this websites
            </div>
          </div>
        </div>
        <BackgroundBeams />
      </div>
    </>
  );
}
