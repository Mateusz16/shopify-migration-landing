import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'diagnosticPanel',
  title: 'Panel diagnostyczny (Hero)',
  type: 'document',
  fields: [
    defineField({
      name: 'heading',
      title: 'Nagłówek panelu',
      type: 'string',
      initialValue: 'Diagnostyka // przed i po migracji',
    }),
    defineField({
      name: 'badge',
      title: 'Etykieta (badge)',
      type: 'string',
      initialValue: 'model referencyjny',
    }),
    defineField({
      name: 'metrics',
      title: 'Metryki',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'label', title: 'Nazwa metryki', type: 'string', validation: (r) => r.required() }),
            defineField({ name: 'before', title: 'Przed', type: 'string', validation: (r) => r.required() }),
            defineField({ name: 'after', title: 'Po', type: 'string', validation: (r) => r.required() }),
            defineField({ name: 'delta', title: 'Zmiana (np. -70%)', type: 'string', validation: (r) => r.required() }),
          ],
          preview: {
            select: { title: 'label', before: 'before', after: 'after' },
            prepare: ({ title, before, after }) => ({ title, subtitle: `${before} → ${after}` }),
          },
        },
      ],
    }),
    defineField({
      name: 'footnote',
      title: 'Przypis pod tabelą',
      type: 'text',
      rows: 3,
    }),
  ],
  preview: {
    prepare: () => ({ title: 'Panel diagnostyczny (Hero)' }),
  },
});
