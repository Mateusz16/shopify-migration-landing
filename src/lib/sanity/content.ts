import { sanityClient } from 'sanity:client';

// Dopóki nie ustawisz prawdziwego PUBLIC_SANITY_PROJECT_ID w .env (patrz README),
// wszystkie zapytania pomijają sieć i strona renderuje domyślną treść z
// src/lib/sanity/defaults.ts — build i `astro dev` działają od razu, bez konta Sanity.
const isSanityConfigured = Boolean(
  import.meta.env.PUBLIC_SANITY_PROJECT_ID && import.meta.env.PUBLIC_SANITY_PROJECT_ID !== 'placeholder',
);

export async function fetchSingleton<T>(query: string, fallback: T): Promise<T> {
  if (!isSanityConfigured) return fallback;

  try {
    const result = await sanityClient.fetch<T | null>(query);
    return result ?? fallback;
  } catch (error) {
    console.warn(`[sanity] Zapytanie nie powiodło się, użyto treści domyślnej: ${query}`, error);
    return fallback;
  }
}

export async function fetchList<T>(query: string, fallback: T[]): Promise<T[]> {
  if (!isSanityConfigured) return fallback;

  try {
    return await sanityClient.fetch<T[]>(query);
  } catch (error) {
    console.warn(`[sanity] Zapytanie nie powiodło się, użyto treści domyślnej: ${query}`, error);
    return fallback;
  }
}
