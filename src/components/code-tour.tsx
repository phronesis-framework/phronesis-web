"use client";

import * as React from "react";
import * as Tabs from "@radix-ui/react-tabs";
import { useTranslations } from "next-intl";
import { CODE_TOUR_TABS } from "@/content/snippets";
import { cn } from "@/lib/utils";

interface CodeTourProps {
  /**
   * Pre-rendered code blocks keyed by tab value.
   * Generated server-side so Shiki ships zero client JS.
   */
  panels: Record<string, React.ReactNode>;
}

export function CodeTour({ panels }: CodeTourProps) {
  const t = useTranslations("CodeTour");
  return (
    <Tabs.Root defaultValue={CODE_TOUR_TABS[0].value} className="w-full">
      <div className="border-border border-b">
        <Tabs.List
          aria-label={t("tabsAria")}
          className="flex [scrollbar-width:none] items-center gap-0.5 overflow-x-auto pb-2 sm:gap-1 [&::-webkit-scrollbar]:hidden"
        >
          {CODE_TOUR_TABS.map((tab) => (
            <Tabs.Trigger
              key={tab.value}
              value={tab.value}
              className={cn(
                "text-muted-foreground relative inline-flex h-9 flex-shrink-0 items-center rounded-md px-2.5 text-[13px] font-medium whitespace-nowrap transition-colors sm:px-3 sm:text-sm",
                "hover:text-foreground",
                "data-[state=active]:text-foreground",
                "data-[state=active]:after:bg-accent data-[state=active]:after:absolute data-[state=active]:after:right-2.5 data-[state=active]:after:-bottom-[10px] data-[state=active]:after:left-2.5 data-[state=active]:after:h-px sm:data-[state=active]:after:right-3 sm:data-[state=active]:after:left-3",
                "focus-visible:outline-ring focus-visible:outline-2 focus-visible:outline-offset-2",
              )}
            >
              {t(`tabs.${tab.value}.label`)}
            </Tabs.Trigger>
          ))}
        </Tabs.List>
      </div>
      {CODE_TOUR_TABS.map((tab) => (
        <Tabs.Content
          key={tab.value}
          value={tab.value}
          className="mt-5 focus-visible:outline-none sm:mt-6 md:mt-8"
        >
          <p className="text-muted-foreground mb-4 text-[14px] leading-[1.6] text-justify hyphens-auto sm:mb-5 sm:text-[15px] md:text-[17px] md:leading-[1.65]">
            {t(`tabs.${tab.value}.description`)}
          </p>
          {panels[tab.value]}
        </Tabs.Content>
      ))}
    </Tabs.Root>
  );
}
