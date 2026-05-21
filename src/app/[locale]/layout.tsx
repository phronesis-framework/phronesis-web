import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { notFound } from "next/navigation";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { AnnouncementBannerScript } from "@/components/layout/announcement-banner";
import { routing, RTL_LOCALES, type Locale } from "@/i18n/routing";
import "../globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://phronesis-framework.com").replace(
  /\/$/,
  "",
);

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Meta" });
  const localePath = `/${locale}`;

  return {
    metadataBase: new URL(siteUrl),
    title: {
      default: t("title"),
      template: "%s — Phronesis",
    },
    description: t("description"),
    applicationName: "Phronesis",
    authors: [{ name: "Eduardo Marrero González" }],
    keywords: [
      "AI agents",
      "LLM framework",
      "Python",
      "agent orchestration",
      "MCP",
      "Anthropic",
      "OpenTelemetry",
      "Pydantic",
    ],
    openGraph: {
      type: "website",
      url: `${siteUrl}${localePath}`,
      siteName: "Phronesis",
      title: t("title"),
      description: t("ogDescription"),
      locale,
    },
    twitter: {
      card: "summary_large_image",
      title: t("title"),
      description: t("ogDescription"),
    },
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: `${siteUrl}${localePath}`,
      languages: Object.fromEntries(
        routing.locales.map((l) => [l, `${siteUrl}/${l}`]),
      ),
    },
  };
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#1a1a17" },
    { media: "(prefers-color-scheme: light)", color: "#fafaf7" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: "Common" });
  const dir = RTL_LOCALES.has(locale as Locale) ? "rtl" : "ltr";

  return (
    <html
      lang={locale}
      dir={dir}
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <head>
        <AnnouncementBannerScript />
      </head>
      <body className="bg-background text-foreground min-h-screen antialiased">
        <a
          href="#main"
          className="focus:bg-accent focus:text-accent-foreground sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded-md focus:px-3 focus:py-2 focus:text-sm focus:font-medium"
        >
          {t("skipToContent")}
        </a>
        <NextIntlClientProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem={false}
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
