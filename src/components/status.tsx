import { AlertTriangle } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { Section } from "./primitives";
import { LinkWithArrow } from "./ui/link-with-arrow";
import { DISCUSSIONS_URL, ISSUES_URL } from "./nav-data";

export async function Status() {
  const t = await getTranslations("Status");
  return (
    <Section
      id="status"
      eyebrow={t("eyebrow")}
      heading={t("heading")}
      headingId="status-heading"
    >
      <article
        role="region"
        aria-labelledby="status-heading"
        className="border-border bg-background-elevated rounded-xl border p-5 sm:p-7 lg:p-9"
      >
        <div className="flex flex-col items-start gap-4 sm:flex-row">
          <span
            className="border-accent/30 bg-accent-muted text-accent inline-flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-md border"
            aria-hidden="true"
          >
            <AlertTriangle className="h-4 w-4" />
          </span>
          <div className="text-muted-foreground space-y-4 text-[15px] leading-[1.6] text-justify hyphens-auto sm:text-[17px] sm:leading-[1.65]">
            <p>{t("p1")}</p>
            <p>{t("p2")}</p>
            <div className="flex flex-wrap gap-x-6 gap-y-2 pt-2 text-sm">
              <LinkWithArrow
                href={DISCUSSIONS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="gap-1.5"
              >
                {t("discussions")}
              </LinkWithArrow>
              <LinkWithArrow
                href={ISSUES_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="gap-1.5"
              >
                {t("openIssues")}
              </LinkWithArrow>
            </div>
          </div>
        </div>
      </article>
    </Section>
  );
}
