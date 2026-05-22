import { ArrowRight, Github } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { CodeBlock } from "@/components/code/code-block";
import { Container } from "@/components/ui/container";
import { pillButtonStyles } from "@/components/ui/pill-button";
import { HERO_SNIPPET } from "@/content/snippets";
import { GITHUB_FRAMEWORK_REPO } from "@/components/layout/nav-data";

export async function Hero() {
  const t = await getTranslations("Hero");
  const tCommon = await getTranslations("Common");
  return (
    <section
      className="border-border relative overflow-hidden border-b"
      aria-labelledby="hero-heading"
    >
      <Container size="wide" className="relative py-12 sm:py-16 md:py-20 lg:py-28 xl:py-32">
        <div className="grid items-center gap-8 sm:gap-10 md:gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-14 xl:gap-16">
          <div className="max-w-full min-w-0 lg:max-w-[640px]">
            <p className="border-border bg-background-elevated text-muted-foreground mb-4 inline-flex max-w-full items-center gap-1.5 rounded-full border px-2.5 py-1 font-mono text-[10px] sm:mb-5 sm:gap-2 sm:px-3 sm:text-[11px] md:mb-6 md:text-xs">
              <span className="bg-accent inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full" />
              <span className="truncate">{t("badge")}</span>
            </p>
            <h1
              id="hero-heading"
              className="text-foreground text-[30px] leading-[1.1] font-medium tracking-tight text-balance break-words sm:text-[40px] sm:leading-[1.08] md:text-[48px] md:leading-[1.05] lg:text-[52px] xl:text-[56px]"
            >
              {t("heading")}
            </h1>
            <p className="text-muted-foreground mt-4 max-w-full text-[14px] leading-[1.6] text-pretty sm:mt-5 sm:text-[15px] md:mt-6 md:text-[17px] md:leading-[1.65] lg:max-w-[560px] lg:text-lg">
              <span className="text-foreground italic">Phronesis</span> {t("leadPrefix")}{" "}
              <strong className="text-foreground font-medium">{t("leadStrong")}</strong>{" "}
              {t("leadMiddle")} <em>episteme</em> {t("leadEpisteme")} <em>phronesis</em>
              {t("leadEnd")}
            </p>
            <div className="mt-6 flex flex-col gap-2.5 sm:mt-7 sm:flex-row sm:flex-wrap sm:items-center sm:gap-3 md:mt-9">
              <a
                href="#install"
                className={pillButtonStyles({
                  variant: "primary",
                  fullWidth: true,
                  className: "sm:w-auto sm:justify-start",
                })}
              >
                {tCommon("getStarted")}
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href={GITHUB_FRAMEWORK_REPO}
                target="_blank"
                rel="noopener noreferrer"
                className={pillButtonStyles({
                  variant: "secondary",
                  fullWidth: true,
                  className: "sm:w-auto sm:justify-start",
                })}
              >
                <Github className="h-4 w-4" aria-hidden="true" />
                {tCommon("viewOnGithub")}
              </a>
            </div>
          </div>

          <div className="relative min-w-0 lg:pl-4">
            <div className="bg-accent-muted/40 absolute -inset-x-6 -inset-y-4 -z-10 hidden rounded-3xl blur-3xl lg:block" />
            <CodeBlock
              code={HERO_SNIPPET}
              lang="python"
              filename="hello_phronesis.py"
              className="lg:shadow-[0_1px_0_0_rgba(255,255,255,0.04)_inset]"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
