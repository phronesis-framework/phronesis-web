import { Layers, Repeat, Users } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { Section } from "@/components/ui/section";
import { Card, CardGrid, CardIcon } from "@/components/ui/card-grid";
import { LinkWithArrow } from "@/components/ui/link-with-arrow";
import { GITHUB_FRAMEWORK_REPO } from "@/components/layout/nav-data";

const TRADING_AGENTS_URL = `${GITHUB_FRAMEWORK_REPO}/tree/main/examples/trading_agents`;

type BulletKey = "agents" | "phases" | "deterministic";

const BULLET_ICONS: Record<BulletKey, React.ComponentType<{ className?: string }>> = {
  agents: Users,
  phases: Layers,
  deterministic: Repeat,
};

const BULLET_KEYS: readonly BulletKey[] = ["agents", "phases", "deterministic"];

export async function Reference() {
  const t = await getTranslations("Reference");
  return (
    <Section
      id="reference"
      eyebrow={t("eyebrow")}
      heading={t("heading")}
      intro={<>{t("intro")}</>}
      headingId="reference-heading"
      variant="elevated"
    >
      <CardGrid columns={3}>
        {BULLET_KEYS.map((key) => (
          <Card key={key} className="gap-3.5 sm:gap-4">
            <CardIcon icon={BULLET_ICONS[key]} />
            <div>
              <h3 className="text-foreground text-base font-medium sm:text-lg">
                {t(`bullets.${key}.title`)}
              </h3>
              <p className="text-muted-foreground mt-2 text-[14px] leading-[1.6] sm:text-[15px]">
                {t(`bullets.${key}.description`)}
              </p>
            </div>
          </Card>
        ))}
      </CardGrid>

      <div className="border-border bg-background-elevated/50 mt-8 flex flex-col gap-4 rounded-xl border p-5 sm:mt-10 sm:flex-row sm:items-center sm:justify-between sm:p-6 lg:p-7">
        <p className="text-muted-foreground text-[14px] leading-[1.6] sm:text-[15px]">
          {t("note")}
        </p>
        <LinkWithArrow
          href={TRADING_AGENTS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-shrink-0 text-sm"
        >
          {t("cta")}
        </LinkWithArrow>
      </div>
    </Section>
  );
}
