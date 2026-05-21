"use client";

import * as React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Github, Menu, X } from "lucide-react";
import { useTranslations } from "next-intl";
import { PRIMARY_NAV, GITHUB_FRAMEWORK_REPO } from "./nav-data";
import { Logo } from "./logo";
import { ThemeToggle } from "./theme-toggle";
import { LanguageSwitcher } from "./language-switcher";
import { cn } from "@/lib/utils";

export function MobileMenu() {
  const tCommon = useTranslations("Common");
  const tNav = useTranslations("Nav");
  const [open, setOpen] = React.useState(false);

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <button
          type="button"
          aria-label={tCommon("openMenu")}
          className="border-border bg-background-elevated text-muted-foreground hover:text-foreground inline-flex h-9 w-9 items-center justify-center rounded-md border transition-colors md:hidden"
        >
          <Menu className="h-4 w-4" aria-hidden="true" />
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay
          className={cn(
            "bg-background/80 fixed inset-0 z-40 backdrop-blur-sm",
            "data-[state=open]:animate-in data-[state=closed]:animate-out",
            "data-[state=open]:fade-in-0 data-[state=closed]:fade-out-0",
          )}
        />
        <Dialog.Content
          className={cn(
            "border-border bg-background fixed inset-y-0 right-0 z-50 flex h-full w-full max-w-[20rem] flex-col border-l shadow-2xl sm:max-w-sm",
            "focus:outline-none",
          )}
          aria-describedby={undefined}
        >
          <div className="border-border flex items-center justify-between border-b px-5 py-3 sm:px-6 sm:py-4">
            <Dialog.Title asChild>
              <Logo asSpan />
            </Dialog.Title>
            <Dialog.Close asChild>
              <button
                type="button"
                aria-label={tCommon("closeMenu")}
                className="border-border bg-background-elevated text-muted-foreground hover:text-foreground inline-flex h-9 w-9 items-center justify-center rounded-md border transition-colors"
              >
                <X className="h-4 w-4" aria-hidden="true" />
              </button>
            </Dialog.Close>
          </div>
          <nav className="flex flex-1 flex-col gap-1 px-3 py-5 sm:px-4 sm:py-6" aria-label={tNav("mobileLabel")}>
            {PRIMARY_NAV.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                onClick={() => setOpen(false)}
                className="text-foreground hover:bg-background-elevated rounded-md px-3 py-3 text-base font-medium transition-colors"
              >
                {tNav(link.key)}
              </a>
            ))}
          </nav>
          <div className="border-border flex flex-wrap items-center justify-between gap-2 border-t px-5 py-3 sm:px-6 sm:py-4">
            <div className="flex items-center gap-2">
              <ThemeToggle />
              <LanguageSwitcher />
            </div>
            <a
              href={GITHUB_FRAMEWORK_REPO}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={tCommon("githubAria")}
              className="border-border bg-background-elevated text-muted-foreground hover:text-foreground inline-flex h-9 w-9 items-center justify-center rounded-md border transition-colors"
            >
              <Github className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
