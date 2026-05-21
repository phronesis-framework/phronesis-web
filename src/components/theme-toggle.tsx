"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { IconButton } from "./ui/icon-button";
import { cn } from "@/lib/utils";
import { useMounted } from "@/hooks/use-mounted";

export function ThemeToggle({ className }: { className?: string }) {
  const { resolvedTheme, setTheme } = useTheme();
  const mounted = useMounted();

  const isDark = resolvedTheme === "dark";

  return (
    <IconButton
      aria-label={mounted ? `Switch to ${isDark ? "light" : "dark"} mode` : "Toggle theme"}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={className}
    >
      <Sun className={cn("h-4 w-4", mounted && isDark ? "hidden" : "block")} aria-hidden="true" />
      <Moon className={cn("h-4 w-4", mounted && isDark ? "block" : "hidden")} aria-hidden="true" />
    </IconButton>
  );
}
