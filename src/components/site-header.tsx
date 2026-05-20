import { Github } from "lucide-react";
import { Logo } from "./logo";
import { ThemeToggle } from "./theme-toggle";
import { MobileMenu } from "./mobile-menu";
import { PRIMARY_NAV, GITHUB_FRAMEWORK_REPO } from "./nav-data";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 w-full border-b border-border bg-background/85 backdrop-blur-md supports-[backdrop-filter]:bg-background/70">
      <div className="mx-auto flex h-14 max-w-[1200px] items-center gap-6 px-6 sm:px-8">
        <Logo />
        <nav className="hidden flex-1 items-center justify-center md:flex" aria-label="Primary">
          <ul className="flex items-center gap-7">
            {PRIMARY_NAV.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="ml-auto flex items-center gap-2">
          <ThemeToggle className="hidden md:inline-flex" />
          <a
            href={GITHUB_FRAMEWORK_REPO}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Phronesis on GitHub"
            className="hidden h-9 w-9 items-center justify-center rounded-md border border-border bg-background-elevated text-muted-foreground transition-colors hover:text-foreground md:inline-flex"
          >
            <Github className="h-4 w-4" aria-hidden="true" />
          </a>
          <a
            href="#install"
            className="hidden h-9 items-center rounded-full bg-accent px-4 text-sm font-medium text-accent-foreground transition-colors hover:opacity-90 md:inline-flex"
          >
            Get started
          </a>
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
