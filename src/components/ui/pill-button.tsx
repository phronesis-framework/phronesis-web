import * as React from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary";
type Size = "sm" | "md";

const BASE_STYLES =
  "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-150 ease-out active:scale-[0.98]";

const VARIANT_STYLES: Record<Variant, string> = {
  primary: "bg-accent text-accent-foreground hover:opacity-90 hover:scale-[1.02]",
  secondary:
    "border-border bg-background-elevated text-foreground hover:border-accent/40 hover:bg-background-elevated/80 hover:scale-[1.02] border",
};

const SIZE_STYLES: Record<Size, string> = {
  md: "h-11 px-5 text-sm",
  sm: "h-9 px-4 text-sm",
};

export function pillButtonStyles({
  variant = "primary",
  size = "md",
  fullWidth = false,
  className,
}: {
  variant?: Variant;
  size?: Size;
  fullWidth?: boolean;
  className?: string;
} = {}) {
  return cn(
    BASE_STYLES,
    SIZE_STYLES[size],
    VARIANT_STYLES[variant],
    fullWidth && "w-full",
    className,
  );
}

interface PillButtonProps extends React.ComponentPropsWithoutRef<"button"> {
  variant?: Variant;
  size?: Size;
  fullWidth?: boolean;
}

export function PillButton({
  className,
  variant,
  size,
  fullWidth,
  type = "button",
  ...props
}: PillButtonProps) {
  return (
    <button
      type={type}
      className={pillButtonStyles({ variant, size, fullWidth, className })}
      {...props}
    />
  );
}
