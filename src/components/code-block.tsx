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
        "group border-border bg-code-background relative overflow-hidden rounded-xl border",
        className,
      )}
    >
      {filename && (
        <figcaption className="border-border text-muted-foreground flex items-center justify-between gap-3 border-b px-3 py-2 font-mono text-[11px] sm:px-4 sm:text-xs">
          <span className="truncate">{filename}</span>
          <span className="flex-shrink-0 tracking-wide uppercase opacity-70">{lang}</span>
        </figcaption>
      )}
      <div className="relative">
        <CopyButton
          value={source}
          label={`Copy ${filename ?? lang} snippet`}
          className="absolute top-2.5 right-2.5 opacity-100 transition-opacity sm:top-3 sm:right-3 md:opacity-0 md:group-hover:opacity-100 md:focus-visible:opacity-100"
        />
        <div
          aria-label={`${lang} code snippet`}
          role="region"
          className="overflow-x-auto px-3 py-3.5 font-mono text-[13px] leading-relaxed sm:px-4 sm:py-4 sm:text-[14px] md:text-[15px] [&_code]:bg-transparent [&_code]:font-mono [&_pre]:m-0 [&_pre]:bg-transparent [&_pre]:p-0"
        >
          <div className="block dark:hidden" dangerouslySetInnerHTML={{ __html: light }} />
          <div className="hidden dark:block" dangerouslySetInnerHTML={{ __html: dark }} />
        </div>
      </div>
    </figure>
  );
}
