"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ChevronRightIcon } from "lucide-react";
import Link from "next/link";
import React from "react";
import { TypingAnimation } from "./magicui/typing-animation";

interface ResumeCardProps {
  id: number;
  logoUrl: string;
  altText: string;
  title: string;
  subtitle?: string;
  href?: string;
  badge?: string;
  period: string;
  description?: string;
}
export const ResumeCard = ({
  id,
  logoUrl,
  altText,
  title,
  subtitle,
  href,
  badge,
  period,
  description,
}: ResumeCardProps) => {
  const [isExpanded, setIsExpanded] = React.useState(false);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if (description) {
      e.preventDefault();
      setIsExpanded(!isExpanded);
    }
  };

  return (
    <Link
      href={href || "#"}
      className="block cursor-pointer"
      onClick={handleClick}
      target="tab"
    >
      <Card className="flex">
        <div className="flex-none">
          <Avatar className="border size-12 m-auto bg-muted-background dark:bg-foreground">
            <AvatarImage
              src={logoUrl}
              alt={altText}
              className="object-contain"
            />
            <AvatarFallback>{altText[0]}</AvatarFallback>
          </Avatar>
        </div>
        <div className="flex-grow ml-4 items-center flex-col group">
          <CardHeader>
            <div className="flex items-center justify-between gap-x-2 text-base">
              <div>
                <TypingAnimation startOnView={true} duration={150} className="inline-flex items-center justify-center font-semibold leading-none text-xs sm:text-sm">
                  {title}
                </TypingAnimation>

                {badge && (
                  <span className="inline-flex gap-x-1">
                    <Badge
                        variant="secondary"
                        className="align-middle text-xs p-[0.2rem] ml-2"
                        key={badge}
                      >
                        <TypingAnimation startOnView={true} duration={150} className="align-middle text-xs">
                          {badge}
                        </TypingAnimation>
                      </Badge>
                  </span>
                )}
                {/* <ChevronRightIcon
                  className={cn(
                    "size-4 translate-x-0 transform opacity-0 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:opacity-100",
                    isExpanded ? "rotate-90" : "rotate-0"
                  )}
                /> */}
              </div>
              <div className="text-xs sm:text-sm tabular-nums text-muted-foreground text-right">
                {id === 0 ? <Badge variant="secondary" className="bg-green-500/10 text-green-500/50">LATEST</Badge> : period}
              </div>
            </div>
            {subtitle &&
              <TypingAnimation startOnView={true} duration={200} className="font-sans text-xs">
                {subtitle}
              </TypingAnimation>
            }
          </CardHeader>
          {description && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{
                opacity: isExpanded ? 1 : 0,

                height: isExpanded ? "auto" : 0,
              }}
              transition={{
                duration: 0.7,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="mt-2 text-xs sm:text-sm"
            >
              {description}
            </motion.div>
          )}
        </div>
      </Card>
    </Link>
  );
};
