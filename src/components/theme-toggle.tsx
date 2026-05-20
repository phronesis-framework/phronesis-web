"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

export function ThemeToggle({ className }: { className?: string }) {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      aria-label={mounted ? `Switch to ${isDark ? "light" : "dark"} mode` : "Toggle theme"}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={cn(
        "inline-flex h-9 w-9 items-center justify-center rounded-md border border-border bg-background-elevated text-muted-foreground transition-colors hover:text-foreground hover:border-accent/40",
        className,
      )}
    >
      {/* Render both icons to avoid hydration flicker; toggle via class. */}
      <Sun
        className={cn("h-4 w-4", mounted && isDark ? "hidden" : "block")}
        aria-hidden="true"
      />
      <Moon
        className={cn("h-4 w-4", mounted && isDark ? "block" : "hidden")}
        aria-hidden="true"
      />
    </button>
  );
}
