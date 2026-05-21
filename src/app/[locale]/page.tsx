import { setRequestLocale } from "next-intl/server";
import { AnnouncementBanner } from "@/components/layout/announcement-banner";
import { SiteHeader } from "@/components/layout/site-header";
import { Hero } from "@/components/sections/hero";
import { Why } from "@/components/sections/why";
import { CodeTourSection } from "@/components/sections/code-tour-section";
import { Patterns } from "@/components/sections/patterns";
import { Principles } from "@/components/sections/principles";
import { Inside } from "@/components/sections/inside";
import { Install } from "@/components/sections/install";
import { Status } from "@/components/sections/status";
import { SiteFooter } from "@/components/layout/site-footer";
import { StructuredData } from "@/components/seo/structured-data";
import { Reveal } from "@/components/motion/reveal";

export const dynamic = "force-static";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <StructuredData />
      <AnnouncementBanner />
      <SiteHeader />
      <main id="main" className="flex flex-col">
        <Reveal>
          <Hero />
        </Reveal>
        <Reveal>
          <Why />
        </Reveal>
        <Reveal>
          <CodeTourSection />
        </Reveal>
        <Reveal>
          <Patterns />
        </Reveal>
        <Reveal>
          <Principles />
        </Reveal>
        <Reveal>
          <Inside />
        </Reveal>
        <Reveal>
          <Install />
        </Reveal>
        <Reveal>
          <Status />
        </Reveal>
      </main>
      <SiteFooter />
    </>
  );
}
