import { Section } from "./primitives";

interface Principle {
  title: string;
  body: string;
}

const PRINCIPLES: readonly Principle[] = [
  {
    title: "Composition over inheritance",
    body: "Agents are configured from parts — model, tools, memory, prompts — not subclassed. You assemble; you don't override.",
  },
  {
    title: "Async-first",
    body: "Streaming, concurrency, and cancellation are baseline assumptions. There is no synchronous shadow API to maintain.",
  },
  {
    title: "Strongly typed",
    body: "Pydantic v2 throughout. Types are not documentation — they are runtime contracts the framework enforces.",
  },
  {
    title: "Immutable specs, mutable runs",
    body: "Definitions are JSON-serializable and reproducible. Execution state lives apart, observable and queryable.",
  },
  {
    title: "Observability built in",
    body: "OpenTelemetry spans for every agent run, tool call, and pipeline stage — from the first commit, not bolted on.",
  },
  {
    title: "Closed catalog of execution patterns",
    body: "Sequence, Parallel, ReActLoop, Consensus, Debate, Handoff. Named modes you can reason about — not arbitrary control flow.",
  },
];

export function Principles() {
  return (
    <Section
      id="principles"
      eyebrow="Principles"
      heading="Six choices, applied everywhere."
      headingId="principles-heading"
    >
      <ul className="grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
        {PRINCIPLES.map((p) => (
          <li key={p.title}>
            <h3 className="text-foreground text-[17px] font-medium tracking-tight">{p.title}</h3>
            <p className="text-muted-foreground mt-3 text-[15px] leading-[1.65]">{p.body}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
