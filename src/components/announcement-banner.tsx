"use client";

import * as React from "react";
import { ArrowRight, X } from "lucide-react";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";
import { CHANGELOG_URL } from "./nav-data";

const STORAGE_KEY = "announcement-dismissed-v1";

/**
 * Inline script that runs BEFORE paint to hide the banner if previously dismissed.
 * Prevents the layout shift caused by hydration toggling visibility client-side.
 */
const PREPAINT_SCRIPT = `
try {
  if (localStorage.getItem('${STORAGE_KEY}') === 'true') {
    document.documentElement.dataset.announcementDismissed = 'true';
  }
} catch (_) {}
`;

export function AnnouncementBannerScript() {
  return (
    <script
      // No user input — static literal string.
      dangerouslySetInnerHTML={{ __html: PREPAINT_SCRIPT }}
    />
  );
}

export function AnnouncementBanner({ className }: { className?: string }) {
  const t = useTranslations("Announcement");
  const [dismissed, setDismissed] = React.useState<boolean>(false);

  const onDismiss = React.useCallback(() => {
    setDismissed(true);
    try {
      window.localStorage.setItem(STORAGE_KEY, "true");
      document.documentElement.dataset.announcementDismissed = "true";
    } catch {
      /* ignore — banner will reappear next session */
    }
  }, []);

  if (dismissed) return null;

  return (
    <div
      role="region"
      aria-label={t("regionLabel")}
      // The `announcement-banner` class is targeted by a CSS rule in
      // globals.css that hides the banner when the root <html> element has
      // `data-announcement-dismissed="true"` — applied pre-paint by the
      // inline script to avoid layout shift after hydration.
      className={cn(
        "announcement-banner border-border bg-accent-muted text-foreground relative w-full border-b",
        className,
      )}
    >
      <div className="mx-auto flex max-w-[1200px] items-center justify-center gap-2 px-10 py-2 text-[12px] sm:gap-3 sm:px-12 sm:text-sm">
        <a
          href={CHANGELOG_URL}
          className="group inline-flex flex-wrap items-center justify-center gap-x-2 gap-y-0.5 text-center"
        >
          <span className="text-muted-foreground">{t("label")}</span>
          <span className="text-foreground inline-flex items-center gap-1 font-medium underline-offset-4 group-hover:underline">
            {t("cta")}
            <ArrowRight
              className="h-3 w-3 transition-transform group-hover:translate-x-0.5 sm:h-3.5 sm:w-3.5"
              aria-hidden="true"
            />
          </span>
        </a>
        <button
          type="button"
          onClick={onDismiss}
          aria-label={t("dismiss")}
          className="text-muted-foreground hover:bg-background-elevated hover:text-foreground absolute top-1/2 right-2 inline-flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-md transition-colors sm:right-3"
        >
          <X className="h-3.5 w-3.5" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}
