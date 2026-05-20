"use client";

import * as React from "react";
import { ArrowRight, X } from "lucide-react";
import { cn } from "@/lib/utils";

const STORAGE_KEY = "announcement-dismissed-v1";

interface AnnouncementBannerProps {
  href: string;
  label: string;
  cta: string;
  className?: string;
}

export function AnnouncementBanner({ href, label, cta, className }: AnnouncementBannerProps) {
  const [dismissed, setDismissed] = React.useState<boolean>(true);
  const [mounted, setMounted] = React.useState(false);

  // Read dismissal state from localStorage after mount to avoid SSR mismatch.
  React.useEffect(() => {
    let stored: string | null = null;
    try {
      stored = window.localStorage.getItem(STORAGE_KEY);
    } catch {
      stored = null;
    }
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setDismissed(stored === "true");
    setMounted(true);
  }, []);

  const onDismiss = React.useCallback(() => {
    setDismissed(true);
    try {
      window.localStorage.setItem(STORAGE_KEY, "true");
    } catch {
      /* ignore — banner will reappear next session */
    }
  }, []);

  if (!mounted || dismissed) return null;

  return (
    <div
      role="region"
      aria-label="Site announcement"
      className={cn(
        "border-border bg-accent-muted text-foreground relative w-full border-b",
        className,
      )}
    >
      <div className="mx-auto flex max-w-[1200px] items-center justify-center gap-2 px-10 py-2 text-[12px] sm:gap-3 sm:px-12 sm:text-sm">
        <a
          href={href}
          className="group inline-flex flex-wrap items-center justify-center gap-x-2 gap-y-0.5 text-center"
        >
          <span className="text-muted-foreground">{label}</span>
          <span className="text-foreground inline-flex items-center gap-1 font-medium underline-offset-4 group-hover:underline">
            {cta}
            <ArrowRight
              className="h-3 w-3 transition-transform group-hover:translate-x-0.5 sm:h-3.5 sm:w-3.5"
              aria-hidden="true"
            />
          </span>
        </a>
        <button
          type="button"
          onClick={onDismiss}
          aria-label="Dismiss announcement"
          className="text-muted-foreground hover:bg-background-elevated hover:text-foreground absolute top-1/2 right-2 inline-flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-md transition-colors sm:right-3"
        >
          <X className="h-3.5 w-3.5" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}
