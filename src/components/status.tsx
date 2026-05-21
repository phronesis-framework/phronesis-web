import { AlertTriangle, ArrowUpRight } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { Section } from "./primitives";
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
      <div className="border-border bg-background-elevated rounded-xl border p-5 sm:p-7 lg:p-9">
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
              <a
                href={DISCUSSIONS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group text-foreground inline-flex items-center gap-1.5 font-medium underline-offset-4 hover:underline"
              >
                {t("discussions")}
                <ArrowUpRight
                  className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  aria-hidden="true"
                />
              </a>
              <a
                href={ISSUES_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group text-foreground inline-flex items-center gap-1.5 font-medium underline-offset-4 hover:underline"
              >
                {t("openIssues")}
                <ArrowUpRight
                  className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  aria-hidden="true"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
