import { getTranslations } from "next-intl/server";
import { Section } from "@/components/ui/section";
import { Card, CardGrid } from "@/components/ui/card-grid";

type QualityKey = "typed" | "tested" | "deterministic" | "observable" | "immutable" | "linted";

const QUALITY_KEYS: readonly QualityKey[] = [
  "typed",
  "tested",
  "deterministic",
  "observable",
  "immutable",
  "linted",
];

export async function Quality() {
  const t = await getTranslations("Quality");
  return (
    <Section
      id="quality"
      eyebrow={t("eyebrow")}
      heading={t("heading")}
      intro={<>{t("intro")}</>}
      headingId="quality-heading"
    >
      <CardGrid columns={3}>
        {QUALITY_KEYS.map((key) => (
          <Card key={key}>
            <h3 className="text-foreground text-base font-medium tracking-tight sm:text-[17px]">
              {t(`items.${key}.title`)}
            </h3>
            <p className="text-muted-foreground mt-2.5 text-[14px] leading-[1.6] sm:mt-3 sm:text-[15px] sm:leading-[1.65]">
              {t(`items.${key}.description`)}
            </p>
          </Card>
        ))}
      </CardGrid>
    </Section>
  );
}
