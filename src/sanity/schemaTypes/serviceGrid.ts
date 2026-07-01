import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'serviceGrid',
  title: 'Sekcja "Zakres usługi"',
  type: 'document',
  fields: [
    defineField({ name: 'eyebrow', title: 'Nadtytuł', type: 'string', initialValue: 'Zakres usługi' }),
    defineField({ name: 'title', title: 'Tytuł sekcji', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'description', title: 'Opis sekcji', type: 'text', rows: 3 }),
    defineField({
      name: 'services',
      title: 'Elementy zakresu',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'number', title: 'Numer (np. 01)', type: 'string', validation: (r) => r.required() }),
            defineField({ name: 'title', title: 'Tytuł', type: 'string', validation: (r) => r.required() }),
            defineField({ name: 'body', title: 'Opis', type: 'text', rows: 3, validation: (r) => r.required() }),
            defineField({
              name: 'icon',
              title: 'Ikona (opcjonalna)',
              type: 'image',
              fields: [defineField({ name: 'alt', title: 'Tekst alternatywny', type: 'string' })],
            }),
          ],
          preview: { select: { title: 'title', subtitle: 'number' } },
        },
      ],
      validation: (rule) => rule.min(1),
    }),
  ],
  preview: {
    prepare: () => ({ title: 'Sekcja "Zakres usługi"' }),
  },
});
