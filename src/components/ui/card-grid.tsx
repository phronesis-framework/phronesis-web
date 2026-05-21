import * as React from "react";
import { cn } from "@/lib/utils";

type Columns = 2 | 3;
type ItemTag = "li" | "div";

const COLUMN_STYLES: Record<Columns, string> = {
  2: "sm:grid-cols-2",
  3: "sm:grid-cols-2 lg:grid-cols-3",
};

interface CardGridProps extends React.HTMLAttributes<HTMLElement> {
  as?: "ul" | "div";
  columns?: Columns;
  children: React.ReactNode;
}

export function CardGrid({
  as: Tag = "ul",
  columns = 2,
  className,
  children,
  ...props
}: CardGridProps) {
  return (
    <Tag
      className={cn(
        "border-border bg-border grid gap-px overflow-hidden rounded-xl border",
        COLUMN_STYLES[columns],
        className,
      )}
      {...props}
    >
      {children}
    </Tag>
  );
}

interface CardProps extends React.HTMLAttributes<HTMLElement> {
  as?: ItemTag;
  interactive?: boolean;
  children: React.ReactNode;
}

export function Card({
  as: Tag = "li",
  interactive = false,
  className,
  children,
  ...props
}: CardProps) {
  return (
    <Tag
      className={cn(
        "bg-background-elevated flex flex-col p-5 sm:p-6 lg:p-7",
        interactive &&
          "hover:bg-background-elevated/70 transition-colors duration-150",
        className,
      )}
      {...props}
    >
      {children}
    </Tag>
  );
}

interface CardIconProps {
  icon: React.ComponentType<{ className?: string; "aria-hidden"?: boolean }>;
  className?: string;
}

export function CardIcon({ icon: Icon, className }: CardIconProps) {
  return (
    <span
      className={cn(
        "border-border bg-background text-accent inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md border",
        className,
      )}
    >
      <Icon className="h-5 w-5" aria-hidden />
    </span>
  );
}
