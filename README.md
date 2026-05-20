# phronesis-web

The public landing page for the [Phronesis](https://github.com/phronesis-framework/phronesis) framework — an open source Python framework for AI agent systems with typed contracts, composable execution patterns, and observability built in.

> Live site: <https://phronesis-framework.com>

## Project shape

This is a **single landing page**, not a SaaS marketing site. There is no signup, no analytics, no third-party tracking, and no fabricated social proof. The audience is developers and technical decision-makers evaluating whether to adopt the framework.

See [`BOOTSTRAP.md`](./BOOTSTRAP.md) for the full editorial brief, design principles, and content rules. Deviations from that document require an explicit decision.

## Tech stack

| Concern           | Choice                                   |
| ----------------- | ---------------------------------------- |
| Framework         | Next.js 15+ (App Router, RSC by default) |
| Language          | TypeScript (strict)                      |
| Styling           | Tailwind CSS v4 (CSS-first config)       |
| Primitives        | Radix UI (Dialog, Tabs, Slot)            |
| Icons             | `lucide-react`                           |
| Code highlighting | Shiki (server-rendered, zero client JS)  |
| Fonts             | Geist Sans + Geist Mono via `next/font`  |
| Theme             | `next-themes` (dark default)             |
| Package manager   | `pnpm`                                   |
| Node              | 22 (LTS) — see `.nvmrc`                  |

## Local development

```bash
pnpm install
pnpm dev
```

Open <http://localhost:3000>.

## Scripts

| Script              | Purpose                                |
| ------------------- | -------------------------------------- |
| `pnpm dev`          | Start the dev server                   |
| `pnpm build`        | Production build (static export ready) |
| `pnpm start`        | Serve the production build             |
| `pnpm lint`         | ESLint                                 |
| `pnpm typecheck`    | TypeScript with `--noEmit`             |
| `pnpm format`       | Prettier (write)                       |
| `pnpm format:check` | Prettier (verify)                      |

CI runs `lint`, `typecheck`, `format:check`, and `build` on every PR. See [`.github/workflows/ci.yml`](./.github/workflows/ci.yml).

## Repository layout

```
src/
├── app/
│   ├── layout.tsx          # root layout: metadata, fonts, theme provider
│   ├── page.tsx            # the landing page
│   ├── globals.css         # Tailwind v4 + design tokens
│   ├── icon.tsx            # dynamic favicon
│   └── opengraph-image.tsx # dynamic 1200×630 OG image
├── components/
│   ├── announcement-banner.tsx
│   ├── site-header.tsx
│   ├── mobile-menu.tsx
│   ├── hero.tsx
│   ├── why.tsx
│   ├── code-tour.tsx / code-tour-section.tsx
│   ├── patterns.tsx
│   ├── principles.tsx
│   ├── inside.tsx
│   ├── install.tsx
│   ├── status.tsx
│   ├── site-footer.tsx
│   ├── theme-provider.tsx / theme-toggle.tsx
│   ├── logo.tsx
│   ├── code-block.tsx / copy-button.tsx
│   ├── primitives.tsx      # Container, Section
│   ├── structured-data.tsx # JSON-LD
│   └── nav-data.ts         # link constants
├── content/
│   └── snippets.ts         # Phronesis code snippets
└── lib/
    ├── shiki.ts            # singleton highlighter
    └── utils.ts            # cn()
```

## Design principles

- Polished and modern, **honest**. Polished typography, generous whitespace; every claim points to something real.
- **Show code, not screenshots of code.** Real, syntax-highlighted, copy-paste-able snippets.
- **No fake testimonials, metrics, or logos.** Until we genuinely have organizations using Phronesis in production with written permission, there is no "Trusted by" section.
- **No third-party tracking.** No analytics, no widgets, no cookie banners.
- **Dark mode default**, light mode toggleable.
- **Performance is part of the message.** Lighthouse 95+ on all metrics. Shiki runs at build time. No motion libraries.
- **WCAG 2.1 AA.** Semantic HTML, keyboard navigable, visible focus rings.

## Editing content

Most copy lives directly in the section components (`src/components/*.tsx`). The code snippets shown across the page are centralised in [`src/content/snippets.ts`](./src/content/snippets.ts).

Top-level link constants (GitHub, docs, discussions, etc.) live in [`src/components/nav-data.ts`](./src/components/nav-data.ts) so they can be updated in one place.

## Deployment

Optimised for Vercel or Cloudflare Pages with static output. The build emits prerendered routes for `/`, `/icon`, and `/opengraph-image`. Configure the deployment platform to serve the contents of `.next` (Vercel) or a static export.

## License

Apache 2.0 — see [`LICENSE`](./LICENSE).
