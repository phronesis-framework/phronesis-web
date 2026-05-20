import { Logo } from "./logo";
import {
  GITHUB_FRAMEWORK_REPO,
  DOCS_URL,
  CHANGELOG_URL,
  LICENSE_URL,
  DISCUSSIONS_URL,
  ISSUES_URL,
  CONTRIBUTING_URL,
  COC_URL,
  SECURITY_URL,
} from "./nav-data";

interface FooterColumn {
  title: string;
  links: { href: string; label: string; external?: boolean }[];
}

const COLUMNS: readonly FooterColumn[] = [
  {
    title: "Project",
    links: [
      { href: GITHUB_FRAMEWORK_REPO, label: "Framework", external: true },
      { href: DOCS_URL, label: "Documentation" },
      { href: CHANGELOG_URL, label: "Changelog", external: true },
      { href: LICENSE_URL, label: "License", external: true },
    ],
  },
  {
    title: "Community",
    links: [
      { href: DISCUSSIONS_URL, label: "Discussions", external: true },
      { href: ISSUES_URL, label: "Issues", external: true },
      { href: CONTRIBUTING_URL, label: "Contributing", external: true },
    ],
  },
  {
    title: "Resources",
    links: [
      { href: "/blog", label: "Blog" },
      { href: COC_URL, label: "Code of conduct", external: true },
      { href: SECURITY_URL, label: "Security", external: true },
    ],
  },
];

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-border bg-background border-t">
      <div className="mx-auto max-w-[1200px] px-5 py-12 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        <div className="grid gap-10 sm:grid-cols-2 sm:gap-12 lg:grid-cols-[1.2fr_repeat(3,1fr)] lg:gap-16">
          <div className="sm:col-span-2 lg:col-span-1 lg:max-w-sm">
            <Logo />
            <p className="text-muted-foreground mt-4 text-[13px] leading-[1.65] sm:mt-5 sm:text-sm">
              An open source Python framework for AI agent systems. Typed, composable, observable.
            </p>
          </div>
          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h3 className="text-muted-foreground font-mono text-[11px] tracking-[0.16em] uppercase sm:text-xs">
                {col.title}
              </h3>
              <ul className="mt-4 flex flex-col gap-2.5 sm:mt-5 sm:gap-3">
                {col.links.map((link) => (
                  <li key={`${col.title}-${link.label}`}>
                    <a
                      href={link.href}
                      target={link.external ? "_blank" : undefined}
                      rel={link.external ? "noopener noreferrer" : undefined}
                      className="text-foreground hover:text-accent text-[13px] transition-colors sm:text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-border text-muted-foreground mt-10 flex flex-col items-start justify-between gap-3 border-t pt-6 text-[11px] sm:mt-14 sm:gap-4 sm:pt-8 sm:text-xs md:flex-row md:items-center">
          <p>© {year} Phronesis. Apache 2.0 licensed.</p>
          <p className="font-mono text-[10px] tracking-[0.16em] uppercase sm:text-[11px]">
            Practical wisdom for AI agent systems.
          </p>
        </div>
      </div>
    </footer>
  );
}
