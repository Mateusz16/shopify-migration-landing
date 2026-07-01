import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'hero',
  title: 'Hero (sekcja główna)',
  type: 'document',
  fields: [
    defineField({
      name: 'eyebrow',
      title: 'Nadtytuł',
      type: 'string',
      initialValue: 'Migracja e-commerce → Shopify',
    }),
    defineField({
      name: 'titleMain',
      title: 'Tytuł — część główna',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'titleHighlight',
      title: 'Tytuł — część wyróżniona kolorem',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Opis',
      type: 'text',
      rows: 4,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'primaryCtaLabel',
      title: 'Przycisk główny — etykieta',
      type: 'string',
    }),
    defineField({
      name: 'primaryCtaHref',
      title: 'Przycisk główny — link',
      type: 'string',
      initialValue: '#kontakt',
    }),
    defineField({
      name: 'secondaryCtaLabel',
      title: 'Przycisk drugorzędny — etykieta',
      type: 'string',
    }),
    defineField({
      name: 'secondaryCtaHref',
      title: 'Przycisk drugorzędny — link',
      type: 'string',
      initialValue: '#zakres',
    }),
    defineField({
      name: 'note',
      title: 'Dopisek pod przyciskami',
      type: 'string',
    }),
    defineField({
      name: 'image',
      title: 'Zdjęcie (opcjonalne)',
      type: 'image',
      options: { hotspot: true },
      fields: [defineField({ name: 'alt', title: 'Tekst alternatywny', type: 'string' })],
    }),
  ],
  preview: {
    prepare: () => ({ title: 'Hero' }),
  },
});
