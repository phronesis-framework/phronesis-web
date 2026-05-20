"use client";

import * as React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Github, Menu, X } from "lucide-react";
import { PRIMARY_NAV, GITHUB_FRAMEWORK_REPO } from "./nav-data";
import { Logo } from "./logo";
import { ThemeToggle } from "./theme-toggle";
import { cn } from "@/lib/utils";

export function MobileMenu() {
  const [open, setOpen] = React.useState(false);

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <button
          type="button"
          aria-label="Open navigation menu"
          className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border bg-background-elevated text-muted-foreground transition-colors hover:text-foreground md:hidden"
        >
          <Menu className="h-4 w-4" aria-hidden="true" />
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay
          className={cn(
            "fixed inset-0 z-40 bg-background/80 backdrop-blur-sm",
            "data-[state=open]:animate-in data-[state=closed]:animate-out",
            "data-[state=open]:fade-in-0 data-[state=closed]:fade-out-0",
          )}
        />
        <Dialog.Content
          className={cn(
            "fixed inset-y-0 right-0 z-50 flex h-full w-full max-w-sm flex-col border-l border-border bg-background shadow-2xl",
            "focus:outline-none",
          )}
          aria-describedby={undefined}
        >
          <div className="flex items-center justify-between border-b border-border px-6 py-4">
            <Dialog.Title asChild>
              <Logo asSpan />
            </Dialog.Title>
            <Dialog.Close asChild>
              <button
                type="button"
                aria-label="Close navigation menu"
                className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border bg-background-elevated text-muted-foreground transition-colors hover:text-foreground"
              >
                <X className="h-4 w-4" aria-hidden="true" />
              </button>
            </Dialog.Close>
          </div>
          <nav className="flex flex-1 flex-col gap-1 px-4 py-6" aria-label="Mobile">
            {PRIMARY_NAV.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-3 text-base font-medium text-foreground transition-colors hover:bg-background-elevated"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center justify-between border-t border-border px-6 py-4">
            <ThemeToggle />
            <a
              href={GITHUB_FRAMEWORK_REPO}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Phronesis on GitHub"
              className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border bg-background-elevated text-muted-foreground transition-colors hover:text-foreground"
            >
              <Github className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
