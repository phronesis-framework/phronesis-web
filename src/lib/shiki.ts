import {
  createHighlighter,
  type BundledLanguage,
  type BundledTheme,
  type Highlighter,
} from "shiki";

const LANGUAGES: BundledLanguage[] = ["python", "bash", "json", "tsx", "ts"];
const THEMES: BundledTheme[] = ["github-dark-dimmed", "github-light"];

let highlighterPromise: Promise<Highlighter> | null = null;

export function getHighlighter(): Promise<Highlighter> {
  if (!highlighterPromise) {
    highlighterPromise = createHighlighter({
      themes: THEMES,
      langs: LANGUAGES,
    });
  }
  return highlighterPromise;
}

export async function highlightCode(
  code: string,
  lang: BundledLanguage,
): Promise<{ dark: string; light: string }> {
  const highlighter = await getHighlighter();
  const dark = highlighter.codeToHtml(code, {
    lang,
    theme: "github-dark-dimmed",
  });
  const light = highlighter.codeToHtml(code, {
    lang,
    theme: "github-light",
  });
  return { dark, light };
}
