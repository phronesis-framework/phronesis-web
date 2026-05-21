import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["en", "es", "fr", "de", "pt", "it", "ja", "zh", "ar", "ko", "nl", "ru"] as const,
  defaultLocale: "en",
  localePrefix: "always",
});

export type Locale = (typeof routing.locales)[number];

export const LOCALE_LABELS: Record<Locale, string> = {
  en: "English",
  es: "Español",
  fr: "Français",
  de: "Deutsch",
  pt: "Português",
  it: "Italiano",
  ja: "日本語",
  zh: "中文",
  ar: "العربية",
  ko: "한국어",
  nl: "Nederlands",
  ru: "Русский",
};

export const RTL_LOCALES: ReadonlySet<Locale> = new Set(["ar"]);
