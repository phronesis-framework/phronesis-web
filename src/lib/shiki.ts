import {
  createHighlighter,
  type BundledLanguage,
  type BundledTheme,
  type Highlighter,
} from "shiki";

const LANGUAGES: BundledLanguage[] = ["python", "bash", "json", "tsx", "ts"];
const THEMES: BundledTheme[] = ["github-dark-dimmed", "github-light"];

let highlighterPromise: Promise<Highlighter> | null = null;

/**
 * Returns a singleton Shiki highlighter, created on first use.
 * Runs server-side at build/render time — no client JS is shipped.
 */
export function getHighlighter(): Promise<Highlighter> {
  if (!highlighterPromise) {
    highlighterPromise = createHighlighter({
      themes: THEMES,
      langs: LANGUAGES,
    });
  }
  return highlighterPromise;
}

/**
 * Render a code snippet to HTML strings for both themes.
 * The caller can swap visibility based on the active color scheme.
 */
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
