import { ArrowRight, Github } from "lucide-react";
import { CodeBlock } from "./code-block";
import { Container } from "./primitives";
import { HERO_SNIPPET } from "@/content/snippets";
import { GITHUB_FRAMEWORK_REPO } from "./nav-data";

export function Hero() {
  return (
    <section
      className="relative overflow-hidden border-b border-border"
      aria-labelledby="hero-heading"
    >
      <Container size="wide" className="relative py-20 sm:py-28 lg:py-36">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-16">
          <div className="max-w-[640px]">
            <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-background-elevated px-3 py-1 text-xs font-mono text-muted-foreground">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent" />
              Open source · Apache 2.0 · Python 3.11+
            </p>
            <h1
              id="hero-heading"
              className="text-balance text-4xl font-medium leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-[56px]"
            >
              Practical wisdom for AI agent systems.
            </h1>
            <p className="mt-6 max-w-[560px] text-balance text-[17px] leading-[1.65] text-muted-foreground sm:text-lg">
              <span className="italic text-foreground">Phronesis</span> (φρόνησις):
              for Aristotle, <strong className="font-medium text-foreground">practical wisdom</strong>{" "}
              — the capacity to deliberate well and act with judgment in concrete
              situations. An LLM has <em>episteme</em> (knowledge). An agent needs <em>phronesis</em>.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a
                href="#install"
                className="inline-flex h-11 items-center gap-2 rounded-full bg-accent px-5 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90"
              >
                Get started
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href={GITHUB_FRAMEWORK_REPO}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 items-center gap-2 rounded-full border border-border bg-background-elevated px-5 text-sm font-medium text-foreground transition-colors hover:border-accent/40"
              >
                <Github className="h-4 w-4" aria-hidden="true" />
                View on GitHub
              </a>
            </div>
          </div>

          <div className="relative lg:pl-4">
            <div className="absolute -inset-x-6 -inset-y-4 -z-10 hidden rounded-3xl bg-accent-muted/40 blur-3xl lg:block" />
            <CodeBlock
              code={HERO_SNIPPET}
              lang="python"
              filename="hello_phronesis.py"
              className="shadow-[0_1px_0_0_rgba(255,255,255,0.04)_inset]"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
