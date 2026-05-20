import { GITHUB_FRAMEWORK_REPO } from "./nav-data";

/**
 * JSON-LD structured data describing the Phronesis project to search engines
 * and rich result renderers. Rendered as an inline <script type="application/ld+json">.
 */
export function StructuredData() {
  const siteUrl = "https://phronesis-framework.com";

  const softwareApplication = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Phronesis",
    alternateName: "Phronesis Framework",
    description:
      "Open source Python framework for building AI agent systems with typed contracts, composable execution patterns, and observability built in.",
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
        // The JSON is statically generated and contains no user input.
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
