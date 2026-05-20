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
import { Section } from "./primitives";

interface InsideGroup {
  title: string;
  description: string;
  items: { icon: React.ComponentType<{ className?: string }>; label: string }[];
}

const GROUPS: readonly InsideGroup[] = [
  {
    title: "Core",
    description: "The primitives every agent is built from.",
    items: [
      { icon: Bot, label: "Agents" },
      { icon: Wrench, label: "Tools" },
      { icon: Plug, label: "MCP integration" },
      { icon: MessageSquare, label: "Prompts" },
      { icon: Sparkles, label: "Capabilities" },
    ],
  },
  {
    title: "State and context",
    description: "How agents remember and what they share.",
    items: [
      { icon: Brain, label: "Memory (episodic, semantic, working, shared)" },
      { icon: Layers, label: "Context management" },
      { icon: ScrollText, label: "Sessions" },
    ],
  },
  {
    title: "Orchestration",
    description: "How agents compose into systems.",
    items: [
      { icon: GitBranch, label: "Pipelines" },
      { icon: Combine, label: "Execution modes" },
      { icon: Link2, label: "Inter-agent communication" },
      { icon: ShieldCheck, label: "Policies" },
      { icon: Activity, label: "Observability" },
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

export function Inside() {
  return (
    <Section
      id="inside"
      eyebrow="What's inside"
      heading="A small, principled surface."
      intro={
        <>
          The framework is intentionally narrow. Each layer earns its place by either making a
          system safer to operate or making the code simpler to read six months later.
        </>
      }
      headingId="inside-heading"
    >
      <div className="border-border bg-border grid gap-px overflow-hidden rounded-xl border lg:grid-cols-3">
        {GROUPS.map((group) => (
          <div key={group.title} className="bg-background-elevated flex flex-col gap-5 p-7">
            <div>
              <h3 className="text-foreground text-[17px] font-medium tracking-tight">
                {group.title}
              </h3>
              <p className="text-muted-foreground mt-2 text-sm">{group.description}</p>
            </div>
            <ul className="flex flex-col gap-2.5">
              {group.items.map((item) => (
                <li key={item.label} className="text-foreground flex items-start gap-3 text-[15px]">
                  <item.icon
                    className="text-accent mt-0.5 h-4 w-4 flex-shrink-0"
                    aria-hidden="true"
                  />
                  <span className="leading-snug">{item.label}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-border bg-background-elevated/50 mt-10 rounded-xl border p-6 sm:p-7">
        <div className="flex items-center gap-3">
          <Boxes className="text-accent h-4 w-4" aria-hidden="true" />
          <h3 className="text-muted-foreground font-mono text-sm tracking-[0.16em] uppercase">
            Execution modes
          </h3>
        </div>
        <ul className="mt-5 flex flex-wrap gap-2">
          {EXECUTION_MODES.map((mode) => (
            <li
              key={mode}
              className="border-border bg-code-background text-foreground inline-flex items-center rounded-md border px-3 py-1.5 font-mono text-[13px]"
            >
              {mode}
            </li>
          ))}
        </ul>
        <div className="text-muted-foreground mt-5 inline-flex items-center gap-2 text-xs">
          <Network className="h-3.5 w-3.5" aria-hidden="true" />A closed catalog — expressive
          enough, finite enough to reason about.
        </div>
      </div>
    </Section>
  );
}
