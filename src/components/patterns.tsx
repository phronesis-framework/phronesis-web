import { BookOpenText, FileSearch, Network, Wrench } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { Section } from "./primitives";

type PatternKey = "research" | "document" | "multiAgent" | "toolUsing";

const PATTERN_ICONS: Record<PatternKey, React.ComponentType<{ className?: string }>> = {
  research: FileSearch,
  document: BookOpenText,
  multiAgent: Network,
  toolUsing: Wrench,
};

const PATTERN_KEYS: readonly PatternKey[] = ["research", "document", "multiAgent", "toolUsing"];

export async function Patterns() {
  const t = await getTranslations("Patterns");
  return (
    <Section
      id="patterns"
      eyebrow={t("eyebrow")}
      heading={t("heading")}
      intro={<>{t("intro")}</>}
      headingId="patterns-heading"
      variant="elevated"
    >
      <ul className="border-border bg-border grid gap-px overflow-hidden rounded-xl border sm:grid-cols-2">
        {PATTERN_KEYS.map((key) => {
          const Icon = PATTERN_ICONS[key];
          return (
            <li
              key={key}
              className="bg-background-elevated hover:bg-background-elevated/70 flex flex-col gap-3.5 p-5 transition-colors sm:gap-4 sm:p-6 lg:p-7"
            >
              <span className="border-border bg-background text-accent inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md border">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <div>
                <h3 className="text-foreground text-base font-medium sm:text-lg">
                  {t(`items.${key}.title`)}
                </h3>
                <p className="text-muted-foreground mt-2 text-[14px] leading-[1.6] sm:text-[15px]">
                  {t(`items.${key}.description`)}
                </p>
              </div>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
