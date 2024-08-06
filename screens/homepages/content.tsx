"use client";

import React from "react";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import Image from "next/image";

export default function HomeContentPages() {
  return (
    <>
      <h2 className="font-bold text-4xl" style={{ marginBottom: -50 }}>
        Who am i ?
      </h2>

      <div>
        <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 dark:bg-zinc-900">
          <Image
            src={`https://becanee.com/public/av.webp`}
            alt="jordans"
            height="400"
            width="400"
            className="object-contain rounded-[22px]"
          />
          <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-white-200">
            Bécanee
          </p>

          <p className="italic text-sm text-grey-600 dark:text-grey-400">
            ''Fluctuat nec mergitur''
          </p>
          {/* <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
          <span>Buy now </span>
          <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
            $100
          </span>
        </button> */}
        </BackgroundGradient>
      </div>
    </>
  );
}
