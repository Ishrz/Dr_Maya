# Dr. Maya Reynolds, PsyD — therapy site

A one-page marketing site for a fictional licensed clinical psychologist in Santa Monica, CA.
It is a **clone of the Conejo Valley Counseling homepage** (layout, section order, grid and
interaction gestures — see `reference/`) **redesigned** with a new palette, typography, copy and
imagery, plus a new "Our Office" section.

## Running it

```bash
npm install
npm run dev      # http://localhost:3000
npm run lint
npm run build
```

No environment variables, no external services, no database.

## Stack

- Next.js 16 (App Router, Turbopack), plain JavaScript — no TypeScript
- Tailwind CSS v4, CSS-first config (`@theme` in `src/app/globals.css`)
- `next/font/google` — **Fraunces** (display) + **Figtree** (body)
- `next/image` for every image
- React state + CSS transitions for the mobile menu, FAQ accordion and scroll reveals
- **No animation library, no UI kit, no icon library** — icons are inline SVG paths

## Structure

```
src/
  app/
    layout.js        fonts, metadata, Open Graph, JSON-LD (Psychologist)
    page.js          composes the sections in reference order
    globals.css      @theme tokens + base styles + component classes
  components/
    layout/          Header (sticky + mobile overlay), Footer
    sections/        Hero, Intro, Audience, PullQuote, Areas, About,
                     Statement, Approach, Office, Faqs, ContactCta
    ui/              Container, Heading, Eyebrow, Icon, Button, Accordion, Reveal
  lib/
    content.js       ALL copy and image paths
public/
  images/            hero + section imagery, maya.png, office-1/2.jpeg
docs/                brief, source analysis, design system, content, QA checklist
reference/           original site screenshots + saved DOM (read-only)
```

> Note: this project was scaffolded by `create-next-app` with the `src/` option, so the app root is
> `src/app` rather than `app/`. Everything else follows the layout in `AGENTS.md`.

## Rules the code enforces

- **No copy in JSX.** Every string comes from `src/lib/content.js`.
- **No hard-coded colours, fonts or radii in components.** All of it is a token in `@theme`.
  The single exception is `meta.themeColor`, which Next's viewport metadata requires as a literal.
- **No invented facts.** Fees, insurance, years of experience, licence numbers, phone, email,
  hours, testimonials and prices appear nowhere. Contact details were not in the profile, so they
  are marked `TODO` in `content.js` and the CTA shows a neutral line instead of a fake address.
- One `<h1>` ("Anxiety & trauma therapy in Santa Monica, CA"), ordered headings, landmarks,
  `alt` on every image, visible focus rings, `aria-expanded` on the accordion and menu toggle.

## Theming

Change the palette, type scale, container widths and radii by editing the `@theme` block in
`src/app/globals.css`. Nothing in `components/` needs to change.

| Token | Value | Role |
|---|---|---|
| `--color-primary` | `#1F4A4C` | headings accents, dark panels, footer bar, primary button |
| `--color-secondary` | `#EFE6D6` | alternate section backgrounds |
| `--color-accent` | `#B4532F` | the one key CTA per view, small highlights |
| `--color-bg` | `#FBF8F2` | page background |
| `--color-ink` / `--color-muted` | `#1E2A2B` / `#546465` | body / secondary text |
| `--color-line` | `#DDD3C1` | hairlines and borders |

## Images

- `maya.png` and `office-1.jpeg` / `office-2.jpeg` are the practice's own photographs.
- The remaining section images are curated stock (Unsplash licence, no attribution required),
  tinted and desaturated by the `.img-warm` / `.img-tint` utilities so mixed sources read as a set.
- Photography avoids the generic wellness-therapy look on purpose: no handshake-and-laptop shots,
  no forced-smile groups, no neon or clinical blue. The subject matter is light, texture, seating
  and the California shoreline.

## Known gaps

- Lighthouse has not been run in this environment; `docs/06` marks that line unverified.
- The mobile hero image is a tight vertical crop of a wider photograph.
- `docs/06-qa-checklist.md` is the source of truth for what has and has not been verified.