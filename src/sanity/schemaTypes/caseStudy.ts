import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'caseStudy',
  title: 'Case study',
  type: 'document',
  fields: [
    defineField({ name: 'clientName', title: 'Nazwa klienta', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'industry', title: 'Branża', type: 'string', validation: (r) => r.required() }),
    defineField({
      name: 'sourcePlatform',
      title: 'Platforma źródłowa',
      type: 'string',
      validation: (r) => r.required(),
    }),
    defineField({ name: 'summary', title: 'Podsumowanie', type: 'text', rows: 4, validation: (r) => r.required() }),
    defineField({
      name: 'metrics',
      title: 'Metryki (przed / po)',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'label', title: 'Nazwa metryki', type: 'string', validation: (r) => r.required() }),
            defineField({ name: 'before', title: 'Przed', type: 'string', validation: (r) => r.required() }),
            defineField({ name: 'after', title: 'Po', type: 'string', validation: (r) => r.required() }),
          ],
          preview: {
            select: { title: 'label', before: 'before', after: 'after' },
            prepare: ({ title, before, after }) => ({ title, subtitle: `${before} → ${after}` }),
          },
        },
      ],
      validation: (rule) => rule.min(1),
    }),
    defineField({
      name: 'images',
      title: 'Zdjęcia',
      type: 'array',
      of: [
        {
          type: 'image',
          options: { hotspot: true },
          fields: [defineField({ name: 'alt', title: 'Tekst alternatywny', type: 'string' })],
        },
      ],
    }),
    defineField({ name: 'testimonial', title: 'Opinia klienta', type: 'text', rows: 4 }),
    defineField({ name: 'testimonialAuthor', title: 'Autor opinii', type: 'string' }),
    defineField({
      name: 'body',
      title: 'Rozszerzony opis wdrożenia',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'publishedDate',
      title: 'Data publikacji',
      type: 'date',
      validation: (r) => r.required(),
    }),
    defineField({ name: 'featured', title: 'Wyróżniony', type: 'boolean', initialValue: false }),
    defineField({
      name: 'isPlaceholder',
      title: 'Dane przykładowe (nie publikować bez podmiany)',
      type: 'boolean',
      initialValue: false,
    }),
  ],
  orderings: [
    {
      title: 'Data publikacji, najnowsze',
      name: 'publishedDateDesc',
      by: [{ field: 'publishedDate', direction: 'desc' }],
    },
  ],
  preview: {
    select: { title: 'clientName', subtitle: 'industry', media: 'images.0' },
  },
});
