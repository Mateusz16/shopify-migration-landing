import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

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
});
