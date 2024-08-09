"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "@/components/ui/lamp";
import Link from "next/link";
import { Highlight } from "@/components/ui/hero-highlight";
import { usePathname } from "next/navigation";

export default function NotFoundComponent() {
  const pathname = usePathname()
  console.log("🚀 ~ NotFoundComponent ~ pathname:", pathname)


  return (
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-1 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-xl font-medium tracking-tight text-transparent md:text-2xl"
      >
        Oopss...&nbsp;<Highlight className="text-black dark:text-white">{pathname}</Highlight>&nbsp;is Not Found in this ecosystem<br />
        <br />
        <Link href="/">back to homepage</Link>
      </motion.h1>
    </LampContainer>
  );
}
