import * as React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Container } from "./container";
import { Eyebrow } from "./eyebrow";

type SectionVariant = "default" | "elevated" | "image";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  eyebrow?: string;
  heading?: string;
  intro?: React.ReactNode;
  containerSize?: "default" | "prose" | "wide";
  headingId?: string;
  variant?: SectionVariant;
  backgroundImage?: string;
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
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(250,245,235,0.9),_rgba(220,210,195,1)_75%)] dark:bg-[radial-gradient(ellipse_at_top,_rgba(60,55,45,0.6),_rgba(15,15,15,1)_75%)]"
          />
          {backgroundImage && (
            <Image
              src={backgroundImage}
              alt=""
              fill
              quality={80}
              sizes="100vw"
              aria-hidden="true"
              className="object-cover object-center"
            />
          )}
          <div aria-hidden="true" className="absolute inset-0 block bg-amber-50/55 dark:hidden" />
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
            {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
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
                  "mt-4 text-justify text-[15px] leading-[1.65] hyphens-auto sm:mt-5 sm:text-[17px]",
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
