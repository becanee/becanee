"use client";

import React from "react";
import CardExpand from "@/components/CardExpand";
import AppleCarousel from "@/components/AppleCarousel";

export default function HomeContentPages() {
  return (
    <>
      <h2 className="font-bold text-4xl" style={{ marginBottom: -80 }}>
        Tech Stack
      </h2>
      <AppleCarousel />

      <h2 className="font-bold text-4xl" style={{ marginBottom: -60 }}>
        Who Am I
      </h2>
      <CardExpand />
    </>
  );
}