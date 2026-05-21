"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { useReveal } from "@/hooks/use-reveal";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export function Reveal({ children, className, delay = 0 }: RevealProps) {
  const ref = useReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={cn("reveal", className)}
      data-visible="false"
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}
