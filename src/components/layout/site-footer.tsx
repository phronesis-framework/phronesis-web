import { getTranslations } from "next-intl/server";
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

type ColumnKey = "project" | "community" | "resources";

interface FooterLink {
  href: string;
  key: string;
  external?: boolean;
}

const COLUMNS: { key: ColumnKey; links: FooterLink[] }[] = [
  {
    key: "project",
    links: [
      { href: GITHUB_FRAMEWORK_REPO, key: "framework", external: true },
      { href: DOCS_URL, key: "documentation" },
      { href: CHANGELOG_URL, key: "changelog", external: true },
      { href: LICENSE_URL, key: "license", external: true },
    ],
  },
  {
    key: "community",
    links: [
      { href: DISCUSSIONS_URL, key: "discussions", external: true },
      { href: ISSUES_URL, key: "issues", external: true },
      { href: CONTRIBUTING_URL, key: "contributing", external: true },
    ],
  },
  {
    key: "resources",
    links: [
      { href: "/blog", key: "blog" },
      { href: COC_URL, key: "codeOfConduct", external: true },
      { href: SECURITY_URL, key: "security", external: true },
    ],
  },
];

export async function SiteFooter() {
  const t = await getTranslations("Footer");
  const year = new Date().getFullYear();
  return (
    <footer className="border-border bg-background border-t">
      <div className="mx-auto max-w-[1200px] px-5 py-12 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        <div className="grid gap-10 sm:grid-cols-2 sm:gap-12 lg:grid-cols-[1.2fr_repeat(3,1fr)] lg:gap-16">
          <div className="sm:col-span-2 lg:col-span-1 lg:max-w-sm">
            <Logo />
            <p className="text-muted-foreground mt-4 text-[13px] leading-[1.65] sm:mt-5 sm:text-sm">
              {t("tagline")}
            </p>
          </div>
          {COLUMNS.map((col) => (
            <div key={col.key}>
              <h3 className="text-muted-foreground font-mono text-[11px] tracking-[0.16em] uppercase sm:text-xs">
                {t(`columns.${col.key}.title`)}
              </h3>
              <ul className="mt-4 flex flex-col gap-2.5 sm:mt-5 sm:gap-3">
                {col.links.map((link) => (
                  <li key={`${col.key}-${link.key}`}>
                    <a
                      href={link.href}
                      target={link.external ? "_blank" : undefined}
                      rel={link.external ? "noopener noreferrer" : undefined}
                      className="text-foreground hover:text-accent text-[13px] transition-colors sm:text-sm"
                    >
                      {t(`columns.${col.key}.${link.key}`)}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-border text-muted-foreground mt-10 flex flex-col items-start justify-between gap-3 border-t pt-6 text-[11px] sm:mt-14 sm:gap-4 sm:pt-8 sm:text-xs md:flex-row md:items-center">
          <p>{t("rights", { year })}</p>
          <p className="font-mono text-[10px] tracking-[0.16em] uppercase sm:text-[11px]">
            {t("motto")}
          </p>
        </div>
      </div>
    </footer>
  );
}
