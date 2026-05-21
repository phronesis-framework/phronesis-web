import { setRequestLocale } from "next-intl/server";
import { AnnouncementBanner } from "@/components/announcement-banner";
import { SiteHeader } from "@/components/site-header";
import { Hero } from "@/components/hero";
import { Why } from "@/components/why";
import { CodeTourSection } from "@/components/code-tour-section";
import { Patterns } from "@/components/patterns";
import { Principles } from "@/components/principles";
import { Inside } from "@/components/inside";
import { Install } from "@/components/install";
import { Status } from "@/components/status";
import { SiteFooter } from "@/components/site-footer";
import { StructuredData } from "@/components/structured-data";

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
        <Hero />
        <Why />
        <CodeTourSection />
        <Patterns />
        <Principles />
        <Inside />
        <Install />
        <Status />
      </main>
      <SiteFooter />
    </>
  );
}
