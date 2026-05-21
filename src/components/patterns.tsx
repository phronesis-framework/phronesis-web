import { BookOpenText, FileSearch, Network, Wrench } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { Section } from "./ui/section";
import { Card, CardGrid, CardIcon } from "./ui/card-grid";

type PatternKey = "research" | "document" | "multiAgent" | "toolUsing";

const PATTERN_ICONS: Record<PatternKey, React.ComponentType<{ className?: string }>> = {
  research: FileSearch,
  document: BookOpenText,
  multiAgent: Network,
  toolUsing: Wrench,
};

const PATTERN_KEYS: readonly PatternKey[] = [
  "research",
  "document",
  "multiAgent",
  "toolUsing",
];

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
      <CardGrid columns={2}>
        {PATTERN_KEYS.map((key) => (
          <Card key={key} interactive className="gap-3.5 sm:gap-4">
            <CardIcon icon={PATTERN_ICONS[key]} />
            <div>
              <h3 className="text-foreground text-base font-medium sm:text-lg">
                {t(`items.${key}.title`)}
              </h3>
              <p className="text-muted-foreground mt-2 text-[14px] leading-[1.6] sm:text-[15px]">
                {t(`items.${key}.description`)}
              </p>
            </div>
          </Card>
        ))}
      </CardGrid>
    </Section>
  );
}
