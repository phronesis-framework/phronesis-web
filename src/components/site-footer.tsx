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
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-[1200px] px-6 py-16 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_repeat(3,1fr)] lg:gap-16">
          <div className="max-w-sm">
            <Logo />
            <p className="mt-5 text-sm leading-[1.65] text-muted-foreground">
              An open source Python framework for AI agent systems. Typed,
              composable, observable.
            </p>
          </div>
          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h3 className="text-xs font-mono uppercase tracking-[0.16em] text-muted-foreground">
                {col.title}
              </h3>
              <ul className="mt-5 flex flex-col gap-3">
                {col.links.map((link) => (
                  <li key={`${col.title}-${link.label}`}>
                    <a
                      href={link.href}
                      target={link.external ? "_blank" : undefined}
                      rel={link.external ? "noopener noreferrer" : undefined}
                      className="text-sm text-foreground transition-colors hover:text-accent"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-border pt-8 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <p>© {year} Phronesis. Apache 2.0 licensed.</p>
          <p className="font-mono text-[11px] uppercase tracking-[0.16em]">
            Practical wisdom for AI agent systems.
          </p>
        </div>
      </div>
    </footer>
  );
}
