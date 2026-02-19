# CLAUDE.md — vincentdolez.fr

## What

Personal website for Vincent Dolez — AI Operating Partner.
5 pages: accueil, à propos, offres, blog, contact.

## Stack

- Next.js 16 (App Router, SSG)
- React 19
- Tailwind CSS 4 (CSS-based config via `@theme`)
- TypeScript 5
- MDX for blog (gray-matter for frontmatter)
- Resend for contact form emails
- Deployed on Vercel

## Commands

- `npm run dev` — local dev server
- `npm run build` — production build
- `npm run lint` — ESLint
- `npx tsc --noEmit` — type check

## Conventions

- Code in English (variables, functions, comments, commits)
- Content in French
- Commits: conventional format (`feat:`, `fix:`, `docs:`, `chore:`)
- Design tokens defined in `app/globals.css` via `@theme inline`
- No UI libraries — custom components aligned to design tokens
- No dark mode, no i18n

## Key directories

- `app/` — pages and API routes
- `components/` — layout, ui, blocks, mdx
- `lib/` — blog helpers, metadata, email
- `content/blog/` — MDX articles
- `public/fonts/` — web fonts

## Design reference

Tokens come from KB: `02-marque/design-tokens.md`
Wireframes: `03-ecosysteme/vincentdolez-fr/wireframes.md`
