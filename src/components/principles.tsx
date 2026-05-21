import { getTranslations } from "next-intl/server";
import { Section } from "./primitives";

type PrincipleKey =
  | "composition"
  | "async"
  | "typed"
  | "immutable"
  | "observable"
  | "catalog";

const PRINCIPLE_KEYS: readonly PrincipleKey[] = [
  "composition",
  "async",
  "typed",
  "immutable",
  "observable",
  "catalog",
];

export async function Principles() {
  const t = await getTranslations("Principles");
  return (
    <Section
      id="principles"
      eyebrow={t("eyebrow")}
      heading={t("heading")}
      headingId="principles-heading"
    >
      <ul className="border-border bg-border grid gap-px overflow-hidden rounded-xl border sm:grid-cols-2 lg:grid-cols-3">
        {PRINCIPLE_KEYS.map((key) => (
          <li
            key={key}
            className="bg-background-elevated flex flex-col p-5 sm:p-6 lg:p-7"
          >
            <h3 className="text-foreground text-base font-medium tracking-tight sm:text-[17px]">
              {t(`items.${key}.title`)}
            </h3>
            <p className="text-muted-foreground mt-2.5 text-[14px] leading-[1.6] sm:mt-3 sm:text-[15px] sm:leading-[1.65]">
              {t(`items.${key}.body`)}
            </p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
