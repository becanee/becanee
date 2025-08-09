"use client";

import { useEffect, useState } from "react";
import { formatDateTimeIndonesian } from "@/utils/datetime";

/**
 * Func: provide live-updating Indonesian formatted date-time string
 * Created At: Minggu, 10 Agustus 2025
 * Created By: becaneee.xyz
 * @param intervalMs - update interval in milliseconds (default 60_000)
 */
export function useCurrentDateTimeFormatted(intervalMs: number = 60_000) {
  const [value, setValue] = useState<string>(formatDateTimeIndonesian());

  useEffect(() => {
    setValue(formatDateTimeIndonesian());
    const id = setInterval(() => {
      setValue(formatDateTimeIndonesian());
    }, intervalMs);
    return () => clearInterval(id);
  }, [intervalMs]);

  return value;
}


