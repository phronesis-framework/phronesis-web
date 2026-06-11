import { getTranslations } from "next-intl/server";
import { Section } from "@/components/ui/section";
import { Card, CardGrid } from "@/components/ui/card-grid";

type MetricKey = "modes" | "examples" | "tests" | "modules" | "typing" | "license";

const METRIC_KEYS: readonly MetricKey[] = [
  "modes",
  "examples",
  "tests",
  "modules",
  "typing",
  "license",
];

export async function Metrics() {
  const t = await getTranslations("Metrics");
  return (
    <Section
      id="metrics"
      eyebrow={t("eyebrow")}
      heading={t("heading")}
      intro={<>{t("intro")}</>}
      headingId="metrics-heading"
    >
      <CardGrid as="div" columns={3}>
        {METRIC_KEYS.map((key) => (
          <Card key={key} as="div" className="gap-1.5">
            <span className="text-accent font-mono text-3xl font-medium tracking-tight sm:text-4xl">
              {t(`items.${key}.value`)}
            </span>
            <h3 className="text-foreground text-[15px] font-medium sm:text-base">
              {t(`items.${key}.label`)}
            </h3>
            <p className="text-muted-foreground text-[13px] leading-[1.55] sm:text-sm">
              {t(`items.${key}.description`)}
            </p>
          </Card>
        ))}
      </CardGrid>
    </Section>
  );
}
