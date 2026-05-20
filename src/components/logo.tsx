import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps extends React.HTMLAttributes<HTMLAnchorElement> {
  /** Render only the mark, without the wordmark. */
  markOnly?: boolean;
  /** Treat as decorative when used inside a parent link. */
  asSpan?: boolean;
}

/**
 * Phronesis logotype.
 *
 * Placeholder mark: a stylized phi (φ) inside a hairline circle.
 * The final identity will be designed separately; the SVG below is intentionally
 * neutral so it works in both color modes without modification.
 */
export function Logo({ className, markOnly = false, asSpan = false, ...props }: LogoProps) {
  const inner = (
    <>
      <PhiMark className="text-foreground h-7 w-7" />
      {!markOnly && (
        <span className="text-foreground font-sans text-[17px] font-medium tracking-tight">
          Phronesis
        </span>
      )}
    </>
  );

  const classes = cn(
    "inline-flex items-center gap-2 select-none",
    "focus-visible:rounded-md",
    className,
  );

  if (asSpan) {
    return (
      <span className={classes} aria-label="Phronesis">
        {inner}
      </span>
    );
  }

  return (
    <Link href="/" aria-label="Phronesis — home" className={classes} {...props}>
      {inner}
    </Link>
  );
}

function PhiMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
    >
      {/* Hairline circle — represents wholeness / deliberation. */}
      <circle cx="16" cy="16" r="14" stroke="currentColor" strokeWidth="1.25" opacity="0.55" />
      {/* Phi (φ) glyph — stem with horizontal bowl. */}
      <path d="M16 6.5V25.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <ellipse cx="16" cy="16" rx="6.25" ry="4.5" stroke="currentColor" strokeWidth="1.6" />
      {/* Accent dot — represents the act of judgment. */}
      <circle cx="16" cy="16" r="1.1" fill="var(--accent)" />
    </svg>
  );
}
