import type { BundledLanguage } from "shiki";
import { highlightCode } from "@/lib/shiki";
import { cn } from "@/lib/utils";
import { CopyButton } from "./copy-button";

interface CodeBlockProps {
  code: string;
  lang: BundledLanguage;
  filename?: string;
  className?: string;
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
      {filename ? (
        <figcaption className="border-border text-muted-foreground flex items-center gap-2 border-b py-1.5 pr-1.5 pl-3 font-mono text-[11px] sm:gap-3 sm:py-2 sm:pr-2 sm:pl-4 sm:text-xs">
          <span className="min-w-0 flex-1 truncate">{filename}</span>
          <span className="hidden flex-shrink-0 tracking-wide uppercase opacity-70 sm:inline">
            {lang}
          </span>
          <CopyButton
            value={source}
            label={`Copy ${filename} snippet`}
            className="h-7 w-7 flex-shrink-0 sm:h-8 sm:w-8"
          />
        </figcaption>
      ) : (
        <CopyButton
          value={source}
          label={`Copy ${lang} snippet`}
          className="absolute top-2 right-2 z-10 opacity-100 transition-opacity sm:top-2.5 sm:right-2.5 md:opacity-0 md:group-hover:opacity-100 md:focus-visible:opacity-100"
        />
      )}
      <div
        aria-label={`${lang} code snippet`}
        role="region"
        className="overflow-x-auto px-3 py-3 font-mono text-[12.5px] leading-relaxed sm:px-4 sm:py-4 sm:text-[14px] md:text-[15px] [&_code]:bg-transparent [&_code]:font-mono [&_pre]:m-0 [&_pre]:bg-transparent [&_pre]:p-0"
      >
        <div className="block dark:hidden" dangerouslySetInnerHTML={{ __html: light }} />
        <div className="hidden dark:block" dangerouslySetInnerHTML={{ __html: dark }} />
      </div>
    </figure>
  );
}
