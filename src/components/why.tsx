import { Section } from "./primitives";

export function Why() {
  return (
    <Section
      id="why"
      eyebrow="Why Phronesis"
      heading="An agent is not a chatbot with tools."
      containerSize="prose"
      headingId="why-heading"
    >
      <div className="space-y-6 text-[17px] leading-[1.7] text-muted-foreground">
        <p>
          LLMs know things — that is <em>episteme</em>. But agents must{" "}
          <strong className="font-medium text-foreground">decide and act</strong>{" "}
          with judgment in concrete situations. That is <em>phronesis</em>.
          Most agent frameworks treat agents as enhanced chatbots glued to a
          tool-use loop. Phronesis treats them as deliberating systems with
          explicit contracts: typed inputs, declared effects, bounded memory,
          named execution patterns.
        </p>
        <p>
          Existing frameworks force a choice. On one side, you write arbitrary
          control flow as code: maximal expressiveness, and a multi-agent
          system that nobody can debug six months later. On the other,
          everything is described in YAML or graph-builders: legible at a
          glance, impossible the moment you need something non-trivial.
          Phronesis separates declarative specification from runtime execution.
          Agents, tools, memory, pipelines are{" "}
          <strong className="font-medium text-foreground">
            typed, immutable, JSON-serializable specs
          </strong>
          . Execution patterns come from a closed, well-defined catalog —
          expressiveness without chaos.
        </p>
        <p>
          Every run is observable through OpenTelemetry, every spec is
          versionable, every contract is a runtime check, not a comment in a
          prompt. This is the difference between a framework that produces
          demos and one that produces systems you can operate.
        </p>
      </div>
    </Section>
  );
}
