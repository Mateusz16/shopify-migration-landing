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
- [Sanity](https://www.sanity.io) jako CMS dla wszystkich tekstów i zdjęć na
  stronie (Studio wbudowane pod `/studio`) — patrz sekcja
  ["Sanity CMS"](#sanity-cms) poniżej.
- React tylko jako zależność `@astrojs/react`, wymagana do zamontowania
  Sanity Studio (`client:only="react"`) — reszta strony to zero frameworków
  JS, jedyna interaktywność (menu mobilne, scroll-reveal) to kilka linijek
  vanilla JS bez hydratacji.

## Struktura projektu

```
src/
├── components/          komponenty sekcji (Header, Hero, DiagnosticPanel, ...)
├── lib/
│   └── sanity/
│       ├── content.ts    fetchSingleton/fetchList (klient przez `sanity:client`
│       │                 z @sanity/astro) z fallbackiem na defaults.ts
│       ├── defaults.ts   dzisiejsza treść — fallback + dane do seeda
│       ├── image.ts      urlFor() — budowanie URL-i obrazów z Sanity
│       └── queries.ts    zapytania GROQ
├── sanity/
│   ├── schemaTypes/      schemat dokumentów Sanity (jeden plik na sekcję)
│   └── structure.ts      układ menu w Sanity Studio
├── layouts/
│   └── BaseLayout.astro  layout z <head>, fontami, skip-linkiem, scroll-reveal
├── pages/
│   ├── index.astro       redirect fallback → /shopify
│   └── shopify/
│       └── index.astro   cała treść landing page'a
└── styles/
    └── global.css         tokeny designu (kolory, fonty, focus states)

sanity.config.ts          konfiguracja Sanity Studio (wbudowanego pod /studio)
scripts/seed.mjs          jednorazowy skrypt: wgrywa defaults.ts do Sanity
```

## Rozwój lokalny

Wymagany Node.js 20.19+ lub 22.12+ (wymóg pakietu `@sanity/astro`).

```bash
npm install
npm run dev       # http://localhost:4321/shopify
```

Inne komendy:

```bash
npm run build     # astro check + build produkcyjny do dist/
npm run preview   # podgląd builda produkcyjnego lokalnie
```

## Sanity CMS

Wszystkie teksty i miejsca na zdjęcia na stronie (Hero, „Dla kogo”, zakres
usługi, proces, cennik, case studies, „O mnie”, kontakt, nagłówek i stopka)
są edytowalne przez [Sanity Studio](https://www.sanity.io) pod adresem
`/studio`. Dopóki nie skonfigurujesz własnego projektu Sanity, strona buduje
się i wygląda dokładnie tak jak dziś — korzysta z domyślnej treści w
[src/lib/sanity/defaults.ts](src/lib/sanity/defaults.ts).

### Pierwsza konfiguracja (jednorazowo)

1. **Załóż darmowe konto** na [sanity.io](https://www.sanity.io) (logowanie
   przez Google/GitHub/e-mail — darmowy plan w zupełności wystarczy).
2. **Utwórz projekt** w [sanity.io/manage](https://www.sanity.io/manage) →
   „Create project”. Nazwa dowolna, dataset zostaw jako `production`.
3. Skopiuj **Project ID** (widoczny w ustawieniach projektu) i wklej do
   pliku `.env` w katalogu głównym repo (skopiuj najpierw `.env.example`):

   ```bash
   cp .env.example .env
   ```

   ```
   PUBLIC_SANITY_PROJECT_ID=twoj-project-id
   PUBLIC_SANITY_DATASET=production
   ```

4. **Dodaj CORS origin**, żeby Studio uruchomione lokalnie i na produkcji
   mogło rozmawiać z API Sanity: w sanity.io/manage → projekt → API → CORS
   Origins → dodaj `http://localhost:4321` (dev) oraz docelowy adres
   produkcyjny, np. `https://matklawitter.com` — z zaznaczonym „Allow
   credentials”.
5. **Wygeneruj token zapisu** (do jednorazowego seeda): sanity.io/manage →
   projekt → API → Tokens → „Add API token” → uprawnienia **Editor**.
   Wklej go do `.env` jako `SANITY_API_WRITE_TOKEN` (token trzymaj tylko
   lokalnie — `.env` jest w `.gitignore`, nigdy go nie commituj).
6. **Wgraj dzisiejszą treść jako punkt startowy** do edycji w Studio:

   ```bash
   npm run sanity:seed
   ```

7. Uruchom `npm run dev` i wejdź na `http://localhost:4321/studio` —
   zaloguj się tym samym kontem, którym założyłeś/aś projekt. Od teraz
   każda zmiana w Studio (po opublikowaniu dokumentu) trafia na stronę po
   **przebudowaniu strony** (`npm run build` / redeploy na Cloudflare
   Pages) — to strona statyczna, więc treść nie jest live bez rebuilda.
   Dla automatycznego rebuilda po publikacji w Studio możesz dodać webhook
   w sanity.io/manage → API → Webhooks, wskazujący na Deploy Hook z
   ustawień projektu Cloudflare Pages.
8. Na produkcji (Cloudflare Pages) ustaw te same zmienne środowiskowe
   (`PUBLIC_SANITY_PROJECT_ID`, `PUBLIC_SANITY_DATASET`) w ustawieniach
   projektu Pages → Environment variables. `SANITY_API_WRITE_TOKEN` nie
   jest tam potrzebny (używany tylko lokalnie do seeda).

### Struktura treści w Studio

Każda sekcja strony to osobny dokument singletonowy (jeden na stronę, bez
możliwości utworzenia drugiego) — patrz
[src/sanity/structure.ts](src/sanity/structure.ts). Case studies to jedyny
typ z wieloma dokumentami — dodajesz nowy wpis przez „Case studies — wpisy”
→ „+”, z tymi samymi polami co dawny format Markdown (nazwa klienta,
branża, platforma źródłowa, metryki przed/po, opinia, zdjęcia, `Dane
przykładowe` do oznaczenia placeholderów).

### Dodawanie zdjęć

Pola obrazów (np. portret w „O mnie”, logo w ustawieniach strony, zdjęcia w
case studies) obsługują przycinanie i hotspot bezpośrednio w Studio — po
wgraniu zdjęcia i opublikowaniu dokumentu obraz pojawi się po najbliższym
rebuildzie. Zawsze uzupełnij pole „Tekst alternatywny” dla dostępności i
SEO.

## Deploy — Cloudflare Pages

### Przez Git integration (rekomendowane)

1. Połącz repozytorium z projektem w Cloudflare Pages.
2. Ustawienia builda:
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
   - **Root directory:** `/`
3. Branch `main` → produkcja, branch `dev` → preview deployments.
4. Environment variables → dodaj `PUBLIC_SANITY_PROJECT_ID` i
   `PUBLIC_SANITY_DATASET` (patrz sekcja ["Sanity CMS"](#sanity-cms)) —
   bez nich build i tak przejdzie, ale strona wyrenderuje się z domyślną
   treścią zamiast tej z Sanity.

### Ręcznie przez Wrangler CLI

```bash
npm run pages:deploy
```

Używa `wrangler.toml` (katalog `dist`, nazwa projektu
`matklawitter-shopify-migration`). Wymaga zalogowania: `npx wrangler login`.

## Branching

- `main` — branch produkcyjny.
- `dev` — branch roboczy, z niego tworzone są feature branche i PR-y do `main`.
