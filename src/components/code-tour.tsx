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
        className="border-border flex flex-wrap items-center gap-1 border-b pb-2"
      >
        {CODE_TOUR_TABS.map((tab) => (
          <Tabs.Trigger
            key={tab.value}
            value={tab.value}
            className={cn(
              "text-muted-foreground relative inline-flex h-9 items-center rounded-md px-3 text-sm font-medium transition-colors",
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
        <Tabs.Content key={tab.value} value={tab.value} className="mt-8 focus-visible:outline-none">
          <p className="text-muted-foreground mb-5 max-w-[640px] text-[17px] leading-[1.65]">
            {tab.description}
          </p>
          {panels[tab.value]}
        </Tabs.Content>
      ))}
    </Tabs.Root>
  );
}
