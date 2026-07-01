import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'aboutMe',
  title: 'Sekcja "O mnie"',
  type: 'document',
  fields: [
    defineField({ name: 'eyebrow', title: 'Nadtytuł', type: 'string', initialValue: 'O mnie' }),
    defineField({ name: 'name', title: 'Imię i nazwisko', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'intro', title: 'Wprowadzenie', type: 'text', rows: 4, validation: (r) => r.required() }),
    defineField({
      name: 'portrait',
      title: 'Zdjęcie',
      type: 'image',
      options: { hotspot: true },
      fields: [defineField({ name: 'alt', title: 'Tekst alternatywny', type: 'string' })],
    }),
    defineField({
      name: 'points',
      title: 'Wyróżnione punkty',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'title', title: 'Tytuł', type: 'string', validation: (r) => r.required() }),
            defineField({ name: 'body', title: 'Opis', type: 'text', rows: 3, validation: (r) => r.required() }),
          ],
          preview: { select: { title: 'title' } },
        },
      ],
    }),
  ],
  preview: {
    prepare: () => ({ title: 'Sekcja "O mnie"' }),
  },
});
