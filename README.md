# matklawitter.com — Shopify migration landing

Landing page usługi migracji sklepów e-commerce do Shopify. Astro + TypeScript +
Tailwind CSS, w pełni statyczny build pod Cloudflare Pages.

Główna treść znajduje się pod `/shopify` ([src/pages/shopify/index.astro](src/pages/shopify/index.astro)).
`/` to tylko fallback (`<meta http-equiv="refresh">`) — docelowy redirect z
domeny root ustawiany jest ręcznie w Cloudflare Redirect Rules.

## Stack

- [Astro](https://astro.build) (output: `static`) — strona nie ma żadnych
  dynamicznych endpointów, więc nie jest potrzebny adapter serwerowy.
- Tailwind CSS v4 (`@tailwindcss/vite`), konfiguracja design tokenów przez
  `@theme` w [src/styles/global.css](src/styles/global.css).
- Astro Content Collections dla case studies
  ([src/content/case-studies](src/content/case-studies), schema w
  [src/content.config.ts](src/content.config.ts)).
- Zero frameworków JS (React/Vue/Svelte) — jedyna interaktywność (menu
  mobilne, scroll-reveal) to kilka linijek vanilla JS bez hydratacji.

## Struktura projektu

```
src/
├── components/         komponenty sekcji (Header, Hero, DiagnosticPanel, ...)
├── content/
│   └── case-studies/    wpisy Markdown case studies
├── content.config.ts    schema Zod dla kolekcji case-studies
├── layouts/
│   └── BaseLayout.astro layout z <head>, fontami, skip-linkiem, scroll-reveal
├── pages/
│   ├── index.astro      redirect fallback → /shopify
│   └── shopify/
│       └── index.astro  cała treść landing page'a
└── styles/
    └── global.css        tokeny designu (kolory, fonty, focus states)
```

## Rozwój lokalny

Wymagany Node.js 20+.

```bash
npm install
npm run dev       # http://localhost:4321/shopify
```

Inne komendy:

```bash
npm run build     # astro check + build produkcyjny do dist/
npm run preview   # podgląd builda produkcyjnego lokalnie
```

## Dodawanie case study

Nowy wpis to plik `.md` w `src/content/case-studies/`, np.:

```md
---
clientName: 'Nazwa Klienta'
industry: 'Branża'
sourcePlatform: 'WooCommerce'
summary: 'Krótkie podsumowanie (2-3 zdania).'
metrics:
  - label: 'Konwersja'
    before: '1.2%'
    after: '2.1%'
testimonial: 'Opcjonalna opinia klienta.'
testimonialAuthor: 'Imię i nazwisko, stanowisko'
publishedDate: 2026-03-01
featured: true
isPlaceholder: false
---

Treść wpisu w Markdown.
```

Plik `src/content/case-studies/przyklad-sklep-demo.md` to placeholder z
fikcyjnymi danymi (`isPlaceholder: true`) — pokazuje render karty case study.
**Usuń go**, gdy dojdzie pierwszy prawdziwy wpis, albo zostaw z jasnym
oznaczeniem, jeśli chcesz zachować go jako przykład.

## Deploy — Cloudflare Pages

### Przez Git integration (rekomendowane)

1. Połącz repozytorium z projektem w Cloudflare Pages.
2. Ustawienia builda:
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
   - **Root directory:** `/`
3. Branch `main` → produkcja, branch `dev` → preview deployments.

### Ręcznie przez Wrangler CLI

```bash
npm run pages:deploy
```

Używa `wrangler.toml` (katalog `dist`, nazwa projektu
`matklawitter-shopify-migration`). Wymaga zalogowania: `npx wrangler login`.

## Branching

- `main` — branch produkcyjny.
- `dev` — branch roboczy, z niego tworzone są feature branche i PR-y do `main`.
