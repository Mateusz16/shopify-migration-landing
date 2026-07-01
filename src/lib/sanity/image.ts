import { createImageUrlBuilder } from '@sanity/image-url';
import { sanityClient } from 'sanity:client';

const builder = createImageUrlBuilder(sanityClient);

// Kształt dokumentu obrazu zwracanego przez Sanity dla pól typu "image"
// zdefiniowanych w src/sanity/schemaTypes (z dodatkowym polem "alt").
export interface SanityImage {
  asset: { _ref: string; _type: 'reference' };
  hotspot?: { x: number; y: number; height: number; width: number };
  crop?: { top: number; bottom: number; left: number; right: number };
  alt?: string;
}

export function urlFor(source: SanityImage) {
  return builder.image(source);
}
