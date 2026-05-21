import { getTranslations } from "next-intl/server";
import { Section } from "./primitives";
import { CodeBlock } from "./code-block";
import { CodeTour } from "./code-tour";
import { CODE_TOUR_TABS } from "@/content/snippets";

export async function CodeTourSection() {
  const t = await getTranslations("CodeTour");
  const panels = Object.fromEntries(
    await Promise.all(
      CODE_TOUR_TABS.map(async (tab) => [
        tab.value,
        <CodeBlock key={tab.value} code={tab.code} lang="python" filename={tab.filename} />,
      ]),
    ),
  ) as Record<string, React.ReactNode>;

  return (
    <Section
      id="code-tour"
      eyebrow={t("eyebrow")}
      heading={t("heading")}
      intro={<>{t("intro")}</>}
      headingId="code-tour-heading"
    >
      <CodeTour panels={panels} />
    </Section>
  );
}
