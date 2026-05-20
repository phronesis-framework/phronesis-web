import { ArrowRight, Github } from "lucide-react";
import { CodeBlock } from "./code-block";
import { Container } from "./primitives";
import { HERO_SNIPPET } from "@/content/snippets";
import { GITHUB_FRAMEWORK_REPO } from "./nav-data";

export function Hero() {
  return (
    <section
      className="border-border relative overflow-hidden border-b"
      aria-labelledby="hero-heading"
    >
      <Container size="wide" className="relative py-20 sm:py-28 lg:py-36">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-16">
          <div className="max-w-[640px]">
            <p className="border-border bg-background-elevated text-muted-foreground mb-6 inline-flex items-center gap-2 rounded-full border px-3 py-1 font-mono text-xs">
              <span className="bg-accent inline-block h-1.5 w-1.5 rounded-full" />
              Open source · Apache 2.0 · Python 3.11+
            </p>
            <h1
              id="hero-heading"
              className="text-foreground text-4xl leading-[1.05] font-medium tracking-tight text-balance sm:text-5xl lg:text-[56px]"
            >
              Practical wisdom for AI agent systems.
            </h1>
            <p className="text-muted-foreground mt-6 max-w-[560px] text-[17px] leading-[1.65] text-balance sm:text-lg">
              <span className="text-foreground italic">Phronesis</span> (φρόνησις): for Aristotle,{" "}
              <strong className="text-foreground font-medium">practical wisdom</strong> — the
              capacity to deliberate well and act with judgment in concrete situations. An LLM has{" "}
              <em>episteme</em> (knowledge). An agent needs <em>phronesis</em>.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a
                href="#install"
                className="bg-accent text-accent-foreground inline-flex h-11 items-center gap-2 rounded-full px-5 text-sm font-medium transition-opacity hover:opacity-90"
              >
                Get started
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href={GITHUB_FRAMEWORK_REPO}
                target="_blank"
                rel="noopener noreferrer"
                className="border-border bg-background-elevated text-foreground hover:border-accent/40 inline-flex h-11 items-center gap-2 rounded-full border px-5 text-sm font-medium transition-colors"
              >
                <Github className="h-4 w-4" aria-hidden="true" />
                View on GitHub
              </a>
            </div>
          </div>

          <div className="relative lg:pl-4">
            <div className="bg-accent-muted/40 absolute -inset-x-6 -inset-y-4 -z-10 hidden rounded-3xl blur-3xl lg:block" />
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
