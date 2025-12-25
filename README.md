# Muflyw Starter

Next.js 14 App Router starter with TypeScript, ESLint, Prettier, light/dark design tokens, and CI-ready workflows.

## Getting started

```bash
npm install
npm run dev
```

## Available scripts

- `npm run dev` – start the Next.js dev server.
- `npm run build` – build the production bundle.
- `npm run start` – start the production server.
- `npm run lint` – run ESLint checks.
- `npm run type-check` – run TypeScript in no-emit mode.

## Theming

Design tokens live in `src/app/globals.css` and cover light/dark palettes plus white-label hooks (`--brand-*`). The theme toggle stores the preference in `localStorage` and applies `data-theme` on `document.documentElement`.

## Environment variables

See `.env.sample` for expected keys, including Supabase and i18n defaults.
