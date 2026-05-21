"use client";

import * as React from "react";
import { Check, Copy } from "lucide-react";
import { cn } from "@/lib/utils";
import { useCopyToClipboard } from "@/hooks/use-copy-to-clipboard";

interface CopyButtonProps {
  value: string;
  label?: string;
  className?: string;
}

export function CopyButton({ value, label = "Copy code", className }: CopyButtonProps) {
  const { copied, copy } = useCopyToClipboard();

  return (
    <button
      type="button"
      onClick={() => copy(value)}
      aria-label={copied ? "Copied" : label}
      className={cn(
        "border-border/60 bg-background-elevated/70 text-muted-foreground hover:border-accent/40 hover:text-foreground inline-flex h-8 w-8 items-center justify-center rounded-md border backdrop-blur transition-all duration-150 ease-out hover:scale-[1.05] active:scale-[0.95]",
        className,
      )}
    >
      {copied ? (
        <Check className="text-accent h-3.5 w-3.5" aria-hidden="true" />
      ) : (
        <Copy className="h-3.5 w-3.5" aria-hidden="true" />
      )}
    </button>
  );
}
