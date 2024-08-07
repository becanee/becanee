"use client";
import React from "react";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import { IconAppWindow } from "@tabler/icons-react";
import Image from "next/image";

export default function CardGradient() {
  return (
    <div>
      <BackgroundGradient className="rounded-[18px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
        <Image
          src={`https://becanee.com/public/av.webp`}
          alt="jordans"
          height="400"
          width="400"
          className="object-contain"
          style={{ borderRadius: 18 }}
        />
        <p className="text-base sm:text-xl text-black mt-4 mb-4 dark:text-neutral-200">
          Bécanee
        </p>

        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          I am an experienced developer who is expert in Next.Js, React.Js,
          Laravel, Full Stack Development, MERN, Javascript and PHP work. My
          experience goes far beyond my educational path.
        </p>
        <button className="rounded-full pl-4 pr-1 py-1 text-black dark:text-white flex items-center space-x-1 bg-zinc-300 mt-4 text-xs font-bold dark:bg-zinc-800">
          <span>Instagram&nbsp;</span>
          <span className="bg-zinc-200 dark:bg-zinc-600 ml-4 rounded-full text-[0.6rem] px-2 py-0 text-black dark:text-white">
            @elcodeee
          </span>
        </button>
      </BackgroundGradient>
    </div>
  );
}
