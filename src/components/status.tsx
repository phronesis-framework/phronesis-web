import { AlertTriangle, ArrowUpRight } from "lucide-react";
import { Section } from "./primitives";
import { DISCUSSIONS_URL, ISSUES_URL } from "./nav-data";

export function Status() {
  return (
    <Section
      id="status"
      eyebrow="Project status"
      heading="Phronesis is in early alpha."
      headingId="status-heading"
      containerSize="prose"
    >
      <div className="border-border bg-background-elevated rounded-xl border p-7 sm:p-9">
        <div className="flex items-start gap-4">
          <span
            className="border-accent/30 bg-accent-muted text-accent inline-flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-md border"
            aria-hidden="true"
          >
            <AlertTriangle className="h-4 w-4" />
          </span>
          <div className="text-muted-foreground space-y-4 text-[17px] leading-[1.65]">
            <p>
              The API will change. We are working in public to build a framework that takes agent
              systems seriously — typed, composable, observable. No production claims, no fabricated
              case studies, no enterprise gates. Just the code, and an honest commitment to its
              design.
            </p>
            <p>
              Feedback, ideas, and contributions are welcome through GitHub Discussions and Issues.
              The roadmap, the rough edges, and the open questions are all in the repository.
            </p>
            <div className="flex flex-wrap gap-x-6 gap-y-2 pt-2 text-sm">
              <a
                href={DISCUSSIONS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group text-foreground inline-flex items-center gap-1.5 font-medium underline-offset-4 hover:underline"
              >
                Discussions
                <ArrowUpRight
                  className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  aria-hidden="true"
                />
              </a>
              <a
                href={ISSUES_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group text-foreground inline-flex items-center gap-1.5 font-medium underline-offset-4 hover:underline"
              >
                Open issues
                <ArrowUpRight
                  className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  aria-hidden="true"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
