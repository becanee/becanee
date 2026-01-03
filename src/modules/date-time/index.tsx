"use client";

import React, { useEffect } from "react";
import { useCurrentDateTimeFormatted } from "@/hooks/useCurrentDateTimeFormatted";
import { toast } from "sonner";

export default function DateTimeNow({ intervalMs = 60_000 }: { intervalMs?: number }) {
  const now = useCurrentDateTimeFormatted(intervalMs);

  useEffect(() => {
    setTimeout(() => {
      toast.success('Hello 👋', {
        description: 'ßécanee want to connect with you, contact in down bellow',
        dismissible: true,
        closeButton: true,
        duration: Infinity,
        position: 'top-right',
        // action: {
        //   label: 'Check it out',
        //   onClick: () => window.open('https://n8n.becaneee.xyz', '_blank'),
        // },
      })
    }, 10000);
  }, [])
  return <span className="text-xl font-bold tracking-tighter sm:text-xl xl:text-xl/none" >{now}</span>;
}


