import { ArrowUpRight, Star } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { Section } from "./primitives";
import { CopyButton } from "./copy-button";
import { INSTALL_SNIPPET } from "@/content/snippets";
import { DOCS_URL, GITHUB_FRAMEWORK_REPO } from "./nav-data";

export async function Install() {
  const t = await getTranslations("Install");
  return (
    <Section
      id="install"
      variant="image"
      backgroundImage="/background.jpg"
      overlayOpacity={70}
    >
      <div className="rounded-2xl border border-stone-900/10 bg-white/60 p-6 backdrop-blur-md sm:p-8 lg:p-10 dark:border-white/15 dark:bg-black/40">
        <p className="text-accent mb-3 font-mono text-[11px] tracking-[0.18em] uppercase sm:mb-4 sm:text-xs">
          {t("eyebrow")}
        </p>
        <h2
          id="install-heading"
          className="text-[26px] leading-[1.15] font-medium tracking-tight text-balance text-stone-900 sm:text-3xl sm:leading-tight md:text-4xl dark:text-white"
        >
          {t("heading")}
        </h2>

        <div className="mt-6 rounded-xl border border-stone-900/10 bg-white/50 p-1.5 sm:mt-8 sm:p-2 dark:border-white/15 dark:bg-black/50">
          <div className="flex items-center justify-between gap-2 rounded-lg bg-white/70 px-3 py-3 sm:gap-3 sm:px-5 sm:py-4 dark:bg-black/60">
            <pre className="min-w-0 flex-1 overflow-x-auto font-mono text-[13px] text-stone-900 sm:text-[15px] dark:text-white">
              <span className="pr-2 text-stone-500 select-none sm:pr-3 dark:text-white/50">$</span>
              <span>{INSTALL_SNIPPET}</span>
            </pre>
            <CopyButton
              value={INSTALL_SNIPPET}
              label={t("copyLabel")}
              className="flex-shrink-0 opacity-100"
            />
          </div>
        </div>

        <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm sm:mt-6 sm:gap-x-7">
          <a
            href={DOCS_URL}
            className="group inline-flex items-center gap-1.5 font-medium text-stone-900 underline-offset-4 hover:underline dark:text-white"
          >
            {t("readDocs")}
            <ArrowUpRight
              className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              aria-hidden="true"
            />
          </a>
          <a
            href={GITHUB_FRAMEWORK_REPO}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-1.5 font-medium text-stone-900 underline-offset-4 hover:underline dark:text-white"
          >
            <Star className="text-accent h-4 w-4" aria-hidden="true" />
            {t("starGithub")}
            <ArrowUpRight
              className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              aria-hidden="true"
            />
          </a>
        </div>
      </div>
    </Section>
  );
}
