import { Section } from "./primitives";
import { CodeBlock } from "./code-block";
import { CodeTour } from "./code-tour";
import { CODE_TOUR_TABS } from "@/content/snippets";

/**
 * Server component that renders all code panels server-side via Shiki,
 * then hands the HTML to the client-side Tabs component.
 */
export async function CodeTourSection() {
  const panels = Object.fromEntries(
    await Promise.all(
      CODE_TOUR_TABS.map(async (tab) => [
        tab.value,
        <CodeBlock
          key={tab.value}
          code={tab.code}
          lang="python"
          filename={tab.filename}
        />,
      ]),
    ),
  ) as Record<string, React.ReactNode>;

  return (
    <Section
      id="code-tour"
      eyebrow="Code tour"
      heading="The API in four snippets."
      intro={
        <>
          Real Python. Real shape. The framework you see below is in early alpha —
          the surface area will grow, but the design will stay this lean.
        </>
      }
      headingId="code-tour-heading"
    >
      <CodeTour panels={panels} />
    </Section>
  );
}
