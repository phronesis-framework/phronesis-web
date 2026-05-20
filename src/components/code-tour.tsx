"use client";

import * as React from "react";
import * as Tabs from "@radix-ui/react-tabs";
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
  return (
    <Tabs.Root defaultValue={CODE_TOUR_TABS[0].value} className="w-full">
      <Tabs.List
        aria-label="Phronesis code tour"
        className="border-border -mx-5 flex [scrollbar-width:none] items-center gap-1 overflow-x-auto border-b px-5 pb-2 sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0 [&::-webkit-scrollbar]:hidden"
      >
        {CODE_TOUR_TABS.map((tab) => (
          <Tabs.Trigger
            key={tab.value}
            value={tab.value}
            className={cn(
              "text-muted-foreground relative inline-flex h-9 flex-shrink-0 items-center rounded-md px-3 text-sm font-medium whitespace-nowrap transition-colors",
              "hover:text-foreground",
              "data-[state=active]:text-foreground",
              "data-[state=active]:after:bg-accent data-[state=active]:after:absolute data-[state=active]:after:right-3 data-[state=active]:after:-bottom-[10px] data-[state=active]:after:left-3 data-[state=active]:after:h-px",
              "focus-visible:outline-ring focus-visible:outline-2 focus-visible:outline-offset-2",
            )}
          >
            {tab.label}
          </Tabs.Trigger>
        ))}
      </Tabs.List>
      {CODE_TOUR_TABS.map((tab) => (
        <Tabs.Content
          key={tab.value}
          value={tab.value}
          className="mt-6 focus-visible:outline-none sm:mt-8"
        >
          <p className="text-muted-foreground mb-4 max-w-[640px] text-[15px] leading-[1.6] sm:mb-5 sm:text-[17px] sm:leading-[1.65]">
            {tab.description}
          </p>
          {panels[tab.value]}
        </Tabs.Content>
      ))}
    </Tabs.Root>
  );
}
