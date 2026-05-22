import { getTranslations } from "next-intl/server";
import { Section } from "@/components/ui/section";

export async function Why() {
  const t = await getTranslations("Why");
  return (
    <Section
      id="why"
      eyebrow={t("eyebrow")}
      heading={t("heading")}
      headingId="why-heading"
      variant="elevated"
    >
      <div className="text-muted-foreground space-y-5 text-justify text-[15px] leading-[1.65] hyphens-auto sm:space-y-6 sm:text-[17px] sm:leading-[1.7]">
        <p>
          {t("p1Before")} <em>{t("p1Episteme")}</em>
          {t("p1Middle")} <strong className="text-foreground font-medium">{t("p1Strong")}</strong>{" "}
          {t("p1AfterStrong")} <em>{t("p1Phronesis")}</em>
          {t("p1End")}
        </p>
        <p>
          {t("p2Before")} <strong className="text-foreground font-medium">{t("p2Strong")}</strong>
          {t("p2End")}
        </p>
        <p>{t("p3")}</p>
      </div>
    </Section>
  );
}
