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

type SectionVariant = "default" | "elevated" | "image";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  eyebrow?: string;
  heading?: string;
  intro?: React.ReactNode;
  containerSize?: "default" | "prose" | "wide";
  headingId?: string;
  variant?: SectionVariant;
  /** Background image URL (for variant="image"). */
  backgroundImage?: string;
  /** Overlay opacity 0–100 (for variant="image"). Default 70. */
  overlayOpacity?: number;
}

export function Section({
  className,
  eyebrow,
  heading,
  intro,
  children,
  containerSize = "default",
  headingId,
  variant = "default",
  backgroundImage,
  overlayOpacity = 70,
  ...props
}: SectionProps) {
  const isImage = variant === "image";
  const isElevated = variant === "elevated";

  return (
    <section
      className={cn(
        "border-border relative isolate border-b py-12 last:border-b-0 sm:py-16 lg:py-20",
        isElevated && "bg-background-elevated/40",
        isImage && "overflow-hidden bg-stone-100 dark:bg-neutral-950",
        className,
      )}
      {...props}
    >
      {isImage && (
        <>
          {/* Fallback stone gradient — visible if image fails or is absent. */}
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(250,245,235,0.9),_rgba(220,210,195,1)_75%)] dark:bg-[radial-gradient(ellipse_at_top,_rgba(60,55,45,0.6),_rgba(15,15,15,1)_75%)]"
          />
          {backgroundImage && (
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${backgroundImage})` }}
            />
          )}
          {/* Light-mode overlay: warm cream tint that brightens the marble. */}
          <div
            aria-hidden="true"
            className="absolute inset-0 block bg-amber-50/55 dark:hidden"
          />
          {/* Dark-mode overlay: deep black filter. */}
          <div
            aria-hidden="true"
            className="absolute inset-0 hidden bg-black dark:block"
            style={{ opacity: overlayOpacity / 100 }}
          />
        </>
      )}
      <Container size={containerSize} className="relative z-10">
        {(eyebrow || heading || intro) && (
          <header className="mb-10 sm:mb-12">
            {eyebrow && (
              <p
                className={cn(
                  "mb-3 font-mono text-[11px] tracking-[0.18em] uppercase sm:mb-4 sm:text-xs",
                  isImage ? "text-accent" : "text-accent",
                )}
              >
                {eyebrow}
              </p>
            )}
            {heading && (
              <h2
                id={headingId}
                className={cn(
                  "text-[26px] leading-[1.15] font-medium tracking-tight text-balance sm:text-3xl sm:leading-tight md:text-4xl",
                  isImage ? "text-white" : "text-foreground",
                )}
              >
                {heading}
              </h2>
            )}
            {intro && (
              <div
                className={cn(
                  "mt-4 text-[15px] leading-[1.65] text-justify hyphens-auto sm:mt-5 sm:text-[17px]",
                  isImage ? "text-white/80" : "text-muted-foreground",
                )}
              >
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
