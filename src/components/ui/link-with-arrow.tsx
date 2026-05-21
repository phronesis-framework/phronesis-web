import * as React from "react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

type ArrowDirection = "up-right" | "right";
type Tone = "foreground" | "stone";

interface LinkWithArrowProps extends React.ComponentPropsWithoutRef<"a"> {
  arrow?: ArrowDirection;
  tone?: Tone;
  leading?: React.ReactNode;
}

const TONE_STYLES: Record<Tone, string> = {
  foreground: "text-foreground",
  stone: "text-stone-900 dark:text-white",
};

export function LinkWithArrow({
  arrow = "up-right",
  tone = "foreground",
  leading,
  className,
  children,
  ...props
}: LinkWithArrowProps) {
  const Arrow = arrow === "up-right" ? ArrowUpRight : ArrowRight;
  return (
    <a
      className={cn(
        "group inline-flex items-center gap-1.5 font-medium underline-offset-4 transition-colors duration-150 hover:underline",
        TONE_STYLES[tone],
        className,
      )}
      {...props}
    >
      {leading}
      {children}
      <Arrow
        className={cn(
          "h-4 w-4 transition-transform duration-150 ease-out group-hover:translate-x-0.5",
          arrow === "up-right" && "group-hover:-translate-y-0.5",
        )}
        aria-hidden="true"
      />
    </a>
  );
}
