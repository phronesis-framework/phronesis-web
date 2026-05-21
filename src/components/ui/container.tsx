import * as React from "react";
import { cn } from "@/lib/utils";

export function Container({
  className,
  children,
  size = "default",
  ...props
}: React.HTMLAttributes<HTMLDivElement> & { size?: "default" | "prose" | "wide" }) {
  return (
    <div
      className={cn(
        "mx-auto w-full px-5 sm:px-6 lg:px-8",
        size === "prose" && "max-w-[720px]",
        size === "default" && "max-w-[1080px]",
        size === "wide" && "max-w-[1200px]",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
