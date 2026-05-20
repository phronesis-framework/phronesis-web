import { BookOpenText, FileSearch, Network, Wrench } from "lucide-react";
import { Section } from "./primitives";

interface Pattern {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

const PATTERNS: readonly Pattern[] = [
  {
    icon: FileSearch,
    title: "Research agents",
    description:
      "Agents that gather information, reason over it, and synthesize answers with citations.",
  },
  {
    icon: BookOpenText,
    title: "Document agents",
    description:
      "Agents that read, structure, and act on documents with explicit memory of what they have seen.",
  },
  {
    icon: Network,
    title: "Multi-agent pipelines",
    description: "Pipelines composing specialized agents through handoffs, debate, or consensus.",
  },
  {
    icon: Wrench,
    title: "Tool-using assistants",
    description: "Agents that invoke typed tools and MCP servers under explicit safety contracts.",
  },
];

export function Patterns() {
  return (
    <Section
      id="patterns"
      eyebrow="Patterns"
      heading="Designed for the agent shapes that recur."
      intro={
        <>
          These are patterns the framework supports today. They are not case studies — we have no
          production users to claim yet, and we will not pretend otherwise.
        </>
      }
      headingId="patterns-heading"
    >
      <ul className="border-border bg-border grid gap-px overflow-hidden rounded-xl border sm:grid-cols-2">
        {PATTERNS.map((p) => (
          <li
            key={p.title}
            className="bg-background-elevated hover:bg-background-elevated/70 flex flex-col gap-3.5 p-5 transition-colors sm:gap-4 sm:p-6 lg:p-7"
          >
            <span className="border-border bg-background text-accent inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md border">
              <p.icon className="h-5 w-5" aria-hidden="true" />
            </span>
            <div>
              <h3 className="text-foreground text-base font-medium sm:text-lg">{p.title}</h3>
              <p className="text-muted-foreground mt-2 text-[14px] leading-[1.6] sm:text-[15px]">
                {p.description}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}
