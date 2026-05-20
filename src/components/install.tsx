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
      <div className="rounded-xl border border-border bg-code-background p-2">
        <div className="flex items-center justify-between gap-3 rounded-lg bg-background px-5 py-4">
          <pre className="overflow-x-auto font-mono text-[15px] text-foreground">
            <span className="select-none pr-3 text-muted-foreground">$</span>
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
          className="group inline-flex items-center gap-1.5 font-medium text-foreground underline-offset-4 hover:underline"
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
          className="group inline-flex items-center gap-1.5 font-medium text-foreground underline-offset-4 hover:underline"
        >
          <Star className="h-4 w-4 text-accent" aria-hidden="true" />
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
