import * as React from "react";
import { cn } from "@/lib/utils";

export function Container({
  className,
  children,
  size = "default",
  ...props
}: React.HTMLAttributes<HTMLDivElement> & { size?: "default" | "prose" | "wide" }) {
  return (
    <div
      className={cn(
        "mx-auto w-full px-5 sm:px-6 lg:px-8",
        size === "prose" && "max-w-[720px]",
        size === "default" && "max-w-[1080px]",
        size === "wide" && "max-w-[1200px]",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  eyebrow?: string;
  heading?: string;
  intro?: React.ReactNode;
  containerSize?: "default" | "prose" | "wide";
  headingId?: string;
}

export function Section({
  className,
  eyebrow,
  heading,
  intro,
  children,
  containerSize = "default",
  headingId,
  ...props
}: SectionProps) {
  return (
    <section className={cn("py-16 sm:py-24 lg:py-32", className)} {...props}>
      <Container size={containerSize}>
        {(eyebrow || heading || intro) && (
          <header className="mb-10 max-w-[720px] sm:mb-12">
            {eyebrow && (
              <p className="text-accent mb-3 font-mono text-[11px] tracking-[0.18em] uppercase sm:mb-4 sm:text-xs">
                {eyebrow}
              </p>
            )}
            {heading && (
              <h2
                id={headingId}
                className="text-foreground text-[26px] leading-[1.15] font-medium tracking-tight text-balance sm:text-3xl sm:leading-tight md:text-4xl"
              >
                {heading}
              </h2>
            )}
            {intro && (
              <div className="text-muted-foreground mt-4 text-[15px] leading-[1.65] sm:mt-5 sm:text-[17px]">
                {intro}
              </div>
            )}
          </header>
        )}
        {children}
      </Container>
    </section>
  );
}
