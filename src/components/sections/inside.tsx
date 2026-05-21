import {
  Activity,
  Bot,
  Boxes,
  Brain,
  Combine,
  GitBranch,
  Layers,
  Link2,
  MessageSquare,
  Network,
  Plug,
  ScrollText,
  ShieldCheck,
  Sparkles,
  Wrench,
} from "lucide-react";
import { getTranslations } from "next-intl/server";
import { Section } from "@/components/ui/section";
import { Card, CardGrid } from "@/components/ui/card-grid";

type GroupKey = "core" | "state" | "orchestration";
type CoreItemKey = "agents" | "tools" | "mcp" | "prompts" | "capabilities";
type StateItemKey = "memory" | "context" | "sessions";
type OrchestrationItemKey =
  | "pipelines"
  | "modes"
  | "communication"
  | "policies"
  | "observability";
type ItemKey = CoreItemKey | StateItemKey | OrchestrationItemKey;

type IconComponent = React.ComponentType<{ className?: string }>;

interface InsideGroup<K extends ItemKey = ItemKey> {
  key: GroupKey;
  items: readonly { icon: IconComponent; itemKey: K }[];
}

const GROUPS: readonly [
  InsideGroup<CoreItemKey>,
  InsideGroup<StateItemKey>,
  InsideGroup<OrchestrationItemKey>,
] = [
  {
    key: "core",
    items: [
      { icon: Bot, itemKey: "agents" },
      { icon: Wrench, itemKey: "tools" },
      { icon: Plug, itemKey: "mcp" },
      { icon: MessageSquare, itemKey: "prompts" },
      { icon: Sparkles, itemKey: "capabilities" },
    ],
  },
  {
    key: "state",
    items: [
      { icon: Brain, itemKey: "memory" },
      { icon: Layers, itemKey: "context" },
      { icon: ScrollText, itemKey: "sessions" },
    ],
  },
  {
    key: "orchestration",
    items: [
      { icon: GitBranch, itemKey: "pipelines" },
      { icon: Combine, itemKey: "modes" },
      { icon: Link2, itemKey: "communication" },
      { icon: ShieldCheck, itemKey: "policies" },
      { icon: Activity, itemKey: "observability" },
    ],
  },
];

const EXECUTION_MODES = [
  "Sequence",
  "Parallel",
  "ReActLoop",
  "PlanAndExecute",
  "Consensus",
  "Debate",
  "HandoffChain",
  "Conditional",
] as const;

export async function Inside() {
  const t = await getTranslations("Inside");
  return (
    <Section
      id="inside"
      eyebrow={t("eyebrow")}
      heading={t("heading")}
      intro={<>{t("intro")}</>}
      headingId="inside-heading"
      variant="elevated"
    >
      <CardGrid as="div" columns={3}>
        {GROUPS.map((group) => (
          <Card key={group.key} as="div" className="gap-4 sm:gap-5">
            <header>
              <h3 className="text-foreground text-base font-medium tracking-tight sm:text-[17px]">
                {t(`groups.${group.key}.title`)}
              </h3>
              <p className="text-muted-foreground mt-1.5 text-[13px] sm:mt-2 sm:text-sm">
                {t(`groups.${group.key}.description`)}
              </p>
            </header>
            <ul className="flex flex-col gap-2.5">
              {group.items.map((item) => (
                <li
                  key={item.itemKey}
                  className="text-foreground flex items-start gap-3 text-[14px] sm:text-[15px]"
                >
                  <item.icon
                    className="text-accent mt-0.5 h-4 w-4 flex-shrink-0"
                    aria-hidden="true"
                  />
                  <span className="leading-snug">
                    {t(`groups.${group.key}.items.${item.itemKey}`)}
                  </span>
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </CardGrid>

      <aside
        aria-label={t("executionModesTitle")}
        className="border-border bg-background-elevated/50 mt-8 rounded-xl border p-5 sm:mt-10 sm:p-6 lg:p-7"
      >
        <div className="flex items-center gap-3">
          <Boxes className="text-accent h-4 w-4 flex-shrink-0" aria-hidden="true" />
          <h3 className="text-muted-foreground font-mono text-[11px] tracking-[0.16em] uppercase sm:text-sm">
            {t("executionModesTitle")}
          </h3>
        </div>
        <ul className="mt-4 flex flex-wrap gap-1.5 sm:mt-5 sm:gap-2">
          {EXECUTION_MODES.map((mode) => (
            <li
              key={mode}
              className="border-border bg-code-background text-foreground inline-flex items-center rounded-md border px-2.5 py-1 font-mono text-[12px] sm:px-3 sm:py-1.5 sm:text-[13px]"
            >
              {mode}
            </li>
          ))}
        </ul>
        <p className="text-muted-foreground mt-4 flex items-start gap-2 text-[12px] leading-[1.5] sm:mt-5 sm:text-xs">
          <Network className="mt-0.5 h-3.5 w-3.5 flex-shrink-0" aria-hidden="true" />
          <span>{t("executionModesNote")}</span>
        </p>
      </aside>
    </Section>
  );
}
