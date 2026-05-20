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

export function AnnouncementBanner({
  href,
  label,
  cta,
  className,
}: AnnouncementBannerProps) {
  const [dismissed, setDismissed] = React.useState<boolean>(true);
  const [mounted, setMounted] = React.useState(false);

  // Read dismissal state from localStorage after mount to avoid SSR mismatch.
  React.useEffect(() => {
    setMounted(true);
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      setDismissed(stored === "true");
    } catch {
      setDismissed(false);
    }
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
        "relative w-full border-b border-border bg-accent-muted text-foreground",
        className,
      )}
    >
      <div className="mx-auto flex max-w-[1200px] items-center justify-center gap-3 px-12 py-2 text-[13px] sm:text-sm">
        <a
          href={href}
          className="group inline-flex items-center gap-2 text-center"
        >
          <span className="text-muted-foreground">{label}</span>
          <span className="inline-flex items-center gap-1 font-medium text-foreground underline-offset-4 group-hover:underline">
            {cta}
            <ArrowRight
              className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </span>
        </a>
        <button
          type="button"
          onClick={onDismiss}
          aria-label="Dismiss announcement"
          className="absolute right-3 top-1/2 -translate-y-1/2 inline-flex h-7 w-7 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-background-elevated hover:text-foreground"
        >
          <X className="h-3.5 w-3.5" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}
