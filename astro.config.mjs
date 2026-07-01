import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sanity from '@sanity/astro';
import react from '@astrojs/react';

// Projekt/dataset Sanity — patrz README (sekcja "Sanity CMS") po instrukcję
// założenia konta. Dopóki nie ustawisz prawdziwych wartości w .env, strona
// buduje się normalnie i korzysta z domyślnej treści (patrz src/lib/sanity).
const sanityProjectId = process.env.PUBLIC_SANITY_PROJECT_ID || 'placeholder';
const sanityDataset = process.env.PUBLIC_SANITY_DATASET || 'production';

// Strona jest w pełni statyczna (bez endpointów API), więc output: 'static'
// i wdrożenie na Cloudflare Pages jako zwykłe pliki statyczne z katalogu dist/.
export default defineConfig({
  site: 'https://matklawitter.com',
  output: 'static',
  server: {
    port: 4321,
  },
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    react(),
    sanity({
      projectId: sanityProjectId,
      dataset: sanityDataset,
      apiVersion: '2024-06-01',
      useCdn: true,
      studioBasePath: '/studio',
    }),
  ],
});
