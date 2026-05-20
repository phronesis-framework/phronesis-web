import type { BundledLanguage } from "shiki";
import { highlightCode } from "@/lib/shiki";
import { cn } from "@/lib/utils";
import { CopyButton } from "./copy-button";

interface CodeBlockProps {
  code: string;
  lang: BundledLanguage;
  filename?: string;
  className?: string;
  /**
   * Strip leading/trailing whitespace and the common indentation prefix.
   * Useful when defining snippets inline as template literals.
   */
  dedent?: boolean;
}

function dedentCode(input: string): string {
  const lines = input.replace(/^\n+|\n+$/g, "").split("\n");
  const indents = lines
    .filter((line) => line.trim().length > 0)
    .map((line) => line.match(/^ */)?.[0].length ?? 0);
  const minIndent = indents.length ? Math.min(...indents) : 0;
  return lines.map((line) => line.slice(minIndent)).join("\n");
}

/**
 * Server component that renders syntax-highlighted code at build/render time.
 * Both light and dark themes are emitted; visibility is controlled by CSS.
 */
export async function CodeBlock({
  code,
  lang,
  filename,
  className,
  dedent = true,
}: CodeBlockProps) {
  const source = dedent ? dedentCode(code) : code;
  const { dark, light } = await highlightCode(source, lang);

  return (
    <figure
      className={cn(
        "group relative overflow-hidden rounded-xl border border-border bg-code-background",
        className,
      )}
    >
      {filename && (
        <figcaption className="flex items-center justify-between border-b border-border px-4 py-2 text-xs text-muted-foreground font-mono">
          <span>{filename}</span>
          <span className="uppercase tracking-wide opacity-70">{lang}</span>
        </figcaption>
      )}
      <div className="relative">
        <CopyButton
          value={source}
          label={`Copy ${filename ?? lang} snippet`}
          className="absolute right-3 top-3 opacity-0 transition-opacity group-hover:opacity-100 focus-visible:opacity-100"
        />
        <div
          aria-label={`${lang} code snippet`}
          role="region"
          className="overflow-x-auto px-4 py-4 text-[15px] leading-relaxed font-mono [&_pre]:bg-transparent [&_pre]:p-0 [&_pre]:m-0 [&_code]:bg-transparent [&_code]:font-mono"
        >
          <div className="block dark:hidden" dangerouslySetInnerHTML={{ __html: light }} />
          <div className="hidden dark:block" dangerouslySetInnerHTML={{ __html: dark }} />
        </div>
      </div>
    </figure>
  );
}
