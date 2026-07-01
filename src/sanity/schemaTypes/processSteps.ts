import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'processSteps',
  title: 'Sekcja "Proces"',
  type: 'document',
  fields: [
    defineField({ name: 'eyebrow', title: 'Nadtytuł', type: 'string', initialValue: 'Proces' }),
    defineField({ name: 'title', title: 'Tytuł sekcji', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'description', title: 'Opis sekcji', type: 'text', rows: 3 }),
    defineField({
      name: 'steps',
      title: 'Etapy',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'number', title: 'Numer (np. 01)', type: 'string', validation: (r) => r.required() }),
            defineField({ name: 'title', title: 'Tytuł etapu', type: 'string', validation: (r) => r.required() }),
            defineField({
              name: 'duration',
              title: 'Czas trwania (np. 3–7 dni)',
              type: 'string',
              validation: (r) => r.required(),
            }),
            defineField({ name: 'body', title: 'Opis', type: 'text', rows: 3, validation: (r) => r.required() }),
          ],
          preview: { select: { title: 'title', subtitle: 'duration' } },
        },
      ],
      validation: (rule) => rule.min(1),
    }),
  ],
  preview: {
    prepare: () => ({ title: 'Sekcja "Proces"' }),
  },
});
