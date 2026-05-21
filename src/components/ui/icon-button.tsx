import * as React from "react";
import { cn } from "@/lib/utils";

const ICON_BUTTON_STYLES =
  "border-border bg-background-elevated text-muted-foreground hover:border-accent/40 hover:text-foreground inline-flex h-9 w-9 items-center justify-center rounded-md border transition-all duration-150 ease-out hover:scale-[1.05] active:scale-[0.95]";

export function iconButtonStyles(className?: string) {
  return cn(ICON_BUTTON_STYLES, className);
}

type IconButtonProps = React.ComponentPropsWithoutRef<"button">;

export function IconButton({
  className,
  type = "button",
  ...props
}: IconButtonProps) {
  return (
    <button
      type={type}
      className={iconButtonStyles(className)}
      {...props}
    />
  );
}
