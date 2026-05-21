import { Github } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { Logo } from "./logo";
import { ThemeToggle } from "./theme-toggle";
import { MobileMenu } from "./mobile-menu";
import { LanguageSwitcher } from "./language-switcher";
import { PRIMARY_NAV, GITHUB_FRAMEWORK_REPO } from "./nav-data";

export async function SiteHeader() {
  const tNav = await getTranslations("Nav");
  const tCommon = await getTranslations("Common");
  return (
    <header className="border-border bg-background/85 supports-[backdrop-filter]:bg-background/70 sticky top-0 z-30 w-full border-b backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-[1200px] items-center gap-4 px-5 sm:gap-6 sm:px-6 lg:px-8">
        <Logo />
        <nav className="hidden flex-1 items-center justify-center md:flex" aria-label={tNav("primaryLabel")}>
          <ul className="flex items-center gap-7">
            {PRIMARY_NAV.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                >
                  {tNav(link.key)}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="ml-auto flex items-center gap-2">
          <LanguageSwitcher className="hidden md:inline-flex" />
          <ThemeToggle className="hidden md:inline-flex" />
          <a
            href={GITHUB_FRAMEWORK_REPO}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={tCommon("githubAria")}
            className="border-border bg-background-elevated text-muted-foreground hover:text-foreground hidden h-9 w-9 items-center justify-center rounded-md border transition-colors md:inline-flex"
          >
            <Github className="h-4 w-4" aria-hidden="true" />
          </a>
          <a
            href="#install"
            className="bg-accent text-accent-foreground hidden h-9 items-center rounded-full px-4 text-sm font-medium transition-colors hover:opacity-90 md:inline-flex"
          >
            {tCommon("getStarted")}
          </a>
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
