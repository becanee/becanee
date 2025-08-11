"use client";

import React, { useEffect } from "react";
import { useCurrentDateTimeFormatted } from "@/hooks/useCurrentDateTimeFormatted";
import { toast } from "sonner";

export default function DateTimeNow({ intervalMs = 60_000 }: { intervalMs?: number }) {
  const now = useCurrentDateTimeFormatted(intervalMs);

  useEffect(() => {
    setTimeout(() => {
      toast.info('Information', {
        description: 'ßécanee just uploaded new n8n templates',
        dismissible: true,
        closeButton: true,
        duration: Infinity,
        position: 'bottom-center',
        action: {
          label: 'Check it out',
          onClick: () => window.open('https://n8n.becaneee.xyz', '_blank'),
        },
      })
    }, 8000);
  }, [])
  return <span className="text-xl font-bold tracking-tighter sm:text-xl xl:text-xl/none" >{now}</span>;
}


