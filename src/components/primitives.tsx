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
        "mx-auto w-full px-6 sm:px-8",
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
    <section
      className={cn("py-24 sm:py-32", className)}
      {...props}
    >
      <Container size={containerSize}>
        {(eyebrow || heading || intro) && (
          <header className="mb-12 max-w-[720px]">
            {eyebrow && (
              <p className="mb-4 text-xs font-mono uppercase tracking-[0.18em] text-accent">
                {eyebrow}
              </p>
            )}
            {heading && (
              <h2
                id={headingId}
                className="text-balance text-3xl font-medium tracking-tight text-foreground sm:text-4xl"
              >
                {heading}
              </h2>
            )}
            {intro && (
              <div className="mt-5 text-[17px] leading-[1.65] text-muted-foreground">
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
