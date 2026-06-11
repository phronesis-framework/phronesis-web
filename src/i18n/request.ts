import { getRequestConfig } from "next-intl/server";
import { hasLocale } from "next-intl";
import { routing } from "./routing";
import enMessages from "../../messages/en.json";

type MessageTree = { [key: string]: string | MessageTree };

/**
 * Deep-merge `override` on top of `base`, returning a new tree.
 *
 * English is always the base, so any key a translation has not caught up
 * with falls back to English instead of throwing a missing-message error.
 */
function deepMerge(base: MessageTree, override: MessageTree): MessageTree {
  const out: MessageTree = { ...base };

  for (const key of Object.keys(override)) {
    const incoming = override[key];
    const current = out[key];

    if (
      typeof incoming === "object" &&
      incoming !== null &&
      typeof current === "object" &&
      current !== null
    ) {
      out[key] = deepMerge(current, incoming);
    } else {
      out[key] = incoming;
    }
  }

  return out;
}

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale;
  const locale = hasLocale(routing.locales, requested) ? requested : routing.defaultLocale;

  const base = enMessages as unknown as MessageTree;

  if (locale === "en") {
    return { locale, messages: base };
  }

  const localeMessages = (await import(`../../messages/${locale}.json`)).default as MessageTree;

  return {
    locale,
    messages: deepMerge(base, localeMessages),
  };
});
