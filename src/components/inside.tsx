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
          The framework is intentionally narrow. Each layer earns its place by
          either making a system safer to operate or making the code simpler to
          read six months later.
        </>
      }
      headingId="inside-heading"
    >
      <div className="grid gap-px overflow-hidden rounded-xl border border-border bg-border lg:grid-cols-3">
        {GROUPS.map((group) => (
          <div key={group.title} className="flex flex-col gap-5 bg-background-elevated p-7">
            <div>
              <h3 className="text-[17px] font-medium tracking-tight text-foreground">
                {group.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">{group.description}</p>
            </div>
            <ul className="flex flex-col gap-2.5">
              {group.items.map((item) => (
                <li key={item.label} className="flex items-start gap-3 text-[15px] text-foreground">
                  <item.icon
                    className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent"
                    aria-hidden="true"
                  />
                  <span className="leading-snug">{item.label}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-10 rounded-xl border border-border bg-background-elevated/50 p-6 sm:p-7">
        <div className="flex items-center gap-3">
          <Boxes className="h-4 w-4 text-accent" aria-hidden="true" />
          <h3 className="text-sm font-mono uppercase tracking-[0.16em] text-muted-foreground">
            Execution modes
          </h3>
        </div>
        <ul className="mt-5 flex flex-wrap gap-2">
          {EXECUTION_MODES.map((mode) => (
            <li
              key={mode}
              className="inline-flex items-center rounded-md border border-border bg-code-background px-3 py-1.5 font-mono text-[13px] text-foreground"
            >
              {mode}
            </li>
          ))}
        </ul>
        <div className="mt-5 inline-flex items-center gap-2 text-xs text-muted-foreground">
          <Network className="h-3.5 w-3.5" aria-hidden="true" />
          A closed catalog — expressive enough, finite enough to reason about.
        </div>
      </div>
    </Section>
  );
}
