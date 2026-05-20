import { ArrowUpRight, Star } from "lucide-react";
import { Section } from "./primitives";
import { CopyButton } from "./copy-button";
import { INSTALL_SNIPPET } from "@/content/snippets";
import { DOCS_URL, GITHUB_FRAMEWORK_REPO } from "./nav-data";

export function Install() {
  return (
    <Section
      id="install"
      eyebrow="Install"
      heading="One command. Python 3.11 or newer."
      headingId="install-heading"
    >
      <div className="border-border bg-code-background rounded-xl border p-2">
        <div className="bg-background flex items-center justify-between gap-3 rounded-lg px-5 py-4">
          <pre className="text-foreground overflow-x-auto font-mono text-[15px]">
            <span className="text-muted-foreground pr-3 select-none">$</span>
            <span>{INSTALL_SNIPPET}</span>
          </pre>
          <CopyButton
            value={INSTALL_SNIPPET}
            label="Copy install command"
            className="opacity-100"
          />
        </div>
      </div>

      <div className="mt-7 flex flex-wrap items-center gap-x-7 gap-y-3 text-sm">
        <a
          href={DOCS_URL}
          className="group text-foreground inline-flex items-center gap-1.5 font-medium underline-offset-4 hover:underline"
        >
          Read the docs
          <ArrowUpRight
            className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            aria-hidden="true"
          />
        </a>
        <a
          href={GITHUB_FRAMEWORK_REPO}
          target="_blank"
          rel="noopener noreferrer"
          className="group text-foreground inline-flex items-center gap-1.5 font-medium underline-offset-4 hover:underline"
        >
          <Star className="text-accent h-4 w-4" aria-hidden="true" />
          Star on GitHub
          <ArrowUpRight
            className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            aria-hidden="true"
          />
        </a>
      </div>
    </Section>
  );
}
