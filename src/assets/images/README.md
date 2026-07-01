# Zdjęcia na stronę

Tu wrzucasz pliki zdjęć (JPG/PNG/WebP), których używasz w komponentach.
Astro automatycznie je zoptymalizuje przy buildzie (kompresja, właściwy
rozmiar, lazy-loading) — nie trzeba nic ręcznie konwertować.

## Jak dodać zdjęcie

1. Wrzuć plik do tego folderu, np. `src/assets/images/mateusz-klawitter.jpg`.
   - Lokalnie: po prostu skopiuj plik i zrób `git add` + `git commit` + `git push`.
   - Bez terminala: na GitHubie wejdź w ten folder → **Add file** →
     **Upload files** → przeciągnij zdjęcie → **Commit changes**.
   - Cloudflare Pages samo zbuduje stronę na nowo po pushu.
2. W komponencie (np. `src/components/AboutMe.astro`) zaimportuj plik i
   użyj komponentu `<Image>` z `astro:assets`:

   ```astro
   ---
   import { Image } from 'astro:assets';
   import portrait from '../assets/images/mateusz-klawitter.jpg';
   ---

   <Image src={portrait} alt="Mateusz Klawitter" width={400} height={400} />
   ```

   `alt` jest wymagany — krótki opis zdjęcia dla czytników ekranu i SEO.

To wystarczy — nie ma potrzeby żadnego dodatkowego konta ani serwisu do
hostowania zdjęć.
