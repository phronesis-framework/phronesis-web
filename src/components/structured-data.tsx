import { getTranslations } from "next-intl/server";
import { GITHUB_FRAMEWORK_REPO } from "./nav-data";

export async function StructuredData() {
  const t = await getTranslations("Meta");
  const siteUrl = (
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://phronesis-framework.com"
  ).replace(/\/$/, "");

  const softwareApplication = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Phronesis",
    alternateName: "Phronesis Framework",
    description: t("description"),
    url: siteUrl,
    applicationCategory: "DeveloperApplication",
    operatingSystem: "Cross-platform",
    programmingLanguage: "Python",
    softwareVersion: "0.1.0",
    license: "https://www.apache.org/licenses/LICENSE-2.0",
    codeRepository: GITHUB_FRAMEWORK_REPO,
    author: {
      "@type": "Person",
      name: "Eduardo Marrero González",
    },
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
  };

  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Phronesis",
    url: siteUrl,
    logo: `${siteUrl}/icon`,
    sameAs: [GITHUB_FRAMEWORK_REPO],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(softwareApplication),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organization),
        }}
      />
    </>
  );
}
