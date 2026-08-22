# Chahine — Portfolio

Personal portfolio of Chahine Benlahcen Tlemcani, a software engineer based in
Paris. A terminal-inspired, monospace design with light and dark themes.

## Features

- **Terminal aesthetic** — command-prompt layout, monospace type, subtle grid
  background, amber/green accents.
- **Animated intro** — a "boot" gate on first visit, then the `whoami` line
  types itself out with a blinking cursor.
- **Synthesized UI sounds** — low-latency Web Audio blips on hover/click and a
  keystroke tick while typing (no audio assets shipped; on by default, unlocked
  on first interaction per browser autoplay rules).
- **Light / dark themes** — light by default, toggle in the nav, persisted.
- **Page transitions** — via the View Transitions API.

## Tech stack

- **Framework**: Next.js 16 (App Router, static export via `output: 'export'`)
- **UI**: React 19
- **Styling**: Tailwind CSS v4
- **Language**: TypeScript
- **Fonts**: JetBrains Mono (UI) + Inter (prose), self-hosted via `next/font`
- **Icons**: Simple Icons + Lucide
- **Hosting**: Cloudflare Pages (static `out/`)

## Development

Uses **pnpm** (pinned via `packageManager`).

```bash
pnpm install     # install dependencies
pnpm dev         # start the dev server (http://localhost:3000)
pnpm build       # static production build -> ./out
pnpm lint        # ESLint (flat config)
```

## Structure

```
src/
  app/
    page.tsx            # home — terminal intro + links
    about/page.tsx      # about + experience timeline
    work/page.tsx       # selected projects
    layout.tsx          # fonts, theme provider, nav, sound effects
    globals.css         # theme tokens (light/dark), grid, scrollbar
  components/
    terminal/           # window chrome, typewriter, boot gate
    nav.tsx, links.tsx, theme-switcher.tsx, project-row.tsx
    sound-effects.tsx   # delegated hover/click sound listeners
  data/
    projects.ts         # curated project list
    experience.ts       # work history
  lib/
    sound.ts            # Web Audio synth + playback helpers
    languages.ts        # language -> accent color map
public/
  cv.pdf                # résumé
```

## Content

Projects and experience are plain data — edit `src/data/projects.ts` and
`src/data/experience.ts`. Replace `public/cv.pdf` with your own résumé.

## Contact

Reach me through the social links on the homepage (GitHub, LinkedIn, email).
