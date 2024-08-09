"use client";

import React from "react";
import CardExpand from "@/components/CardExpand";
import AppleCarousel from "@/components/AppleCarousel";
import AboutHero from "@/components/AboutHero";

export default function AboutPages() {
  return (
    <>
    <AboutHero />

    
      <h2 className="font-bold text-4xl mt-12" style={{ marginBottom: -60 }}>
        Who Am I
      </h2>
      <CardExpand />

      <h2 className="font-bold text-4xl" style={{ marginBottom: -80 }}>
        Tech Stack
      </h2>
      <AppleCarousel />
    </>
  );
}
