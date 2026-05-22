import * as React from "react";
import { cn } from "@/lib/utils";

interface EyebrowProps extends React.HTMLAttributes<HTMLParagraphElement> {
  tone?: "accent" | "muted";
}

export function Eyebrow({ className, tone = "accent", children, ...props }: EyebrowProps) {
  return (
    <p
      className={cn(
        "mb-3 font-mono text-[11px] tracking-[0.18em] uppercase sm:mb-4 sm:text-xs",
        tone === "accent" ? "text-accent" : "text-muted-foreground",
        className,
      )}
      {...props}
    >
      {children}
    </p>
  );
}
