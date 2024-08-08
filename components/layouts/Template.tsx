"use client";

import React from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { LayoutRouterContext } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { useContext, useRef } from "react";

// Prevents instant page opening
function FrozenRouter(props: { children: React.ReactNode }) {
  const context = useContext(LayoutRouterContext ?? {});
  const frozen = useRef(context).current;

  return (
    <LayoutRouterContext.Provider value={frozen}>
      {props.children}
    </LayoutRouterContext.Provider>
  );
}

export default function Template({ children }: { children: React.ReactNode }) {
  let pathname = usePathname();

  return (
    <>
        <motion.div
          key={pathname}
          initial={{ scaleX: 0 }}
          animate={{
            scaleX: 1,
            transition: { duration: 0.8, ease: "circOut" },
          }}
          exit={{ scaleX: 1, transition: { duration: 0.8, ease: "circIn" } }}
          transition={{ duration: 0.8, ease: [0.27, 0.94, 0.48, 1.0] }}
        >
          <FrozenRouter>{children}</FrozenRouter>
        </motion.div>
    </>
  );
}
