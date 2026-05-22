"use client";

import * as React from "react";
import { useLocale, useTranslations } from "next-intl";
import { useRouter, usePathname } from "next/navigation";
import { Languages } from "lucide-react";
import { routing, LOCALE_LABELS, type Locale } from "@/i18n/routing";
import { cn } from "@/lib/utils";

function rewriteLocalePath(pathname: string | null, nextLocale: Locale): string {
  const segments = (pathname ?? "/").split("/");
  const knownLocales = routing.locales as readonly string[];
  const rest =
    segments[1] && knownLocales.includes(segments[1])
      ? segments.slice(2).join("/")
      : segments.slice(1).join("/");
  return rest ? `/${nextLocale}/${rest}` : `/${nextLocale}`;
}

export function LanguageSwitcher({ className }: { className?: string }) {
  const locale = useLocale() as Locale;
  const router = useRouter();
  const pathname = usePathname();
  const t = useTranslations("Common");
  const [pending, startTransition] = React.useTransition();

  const onChange = React.useCallback(
    (event: React.ChangeEvent<HTMLSelectElement>) => {
      const target = rewriteLocalePath(pathname, event.target.value as Locale);
      startTransition(() => {
        router.replace(target);
        router.refresh();
      });
    },
    [pathname, router],
  );

  return (
    <label
      className={cn(
        "border-border bg-background-elevated text-muted-foreground hover:border-accent/40 hover:text-foreground relative inline-flex h-9 items-center gap-1.5 rounded-md border px-2.5 text-[12px] transition-all duration-150 ease-out hover:scale-[1.05] active:scale-[0.95] sm:text-[13px]",
        pending && "opacity-60",
        className,
      )}
    >
      <Languages className="h-3.5 w-3.5" aria-hidden="true" />
      <span className="sr-only">{t("selectLanguage")}</span>
      <span aria-hidden="true" className="font-medium uppercase">
        {locale}
      </span>
      <select
        aria-label={t("selectLanguage")}
        value={locale}
        onChange={onChange}
        disabled={pending}
        className="absolute inset-0 cursor-pointer [color-scheme:light] opacity-0 dark:[color-scheme:dark]"
      >
        {routing.locales.map((code) => (
          <option key={code} value={code} className="bg-background text-foreground">
            {LOCALE_LABELS[code]}
          </option>
        ))}
      </select>
    </label>
  );
}
