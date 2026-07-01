import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'audienceFilter',
  title: 'Sekcja "Dla kogo"',
  type: 'document',
  fields: [
    defineField({ name: 'eyebrow', title: 'Nadtytuł', type: 'string', initialValue: 'Dla kogo' }),
    defineField({ name: 'title', title: 'Tytuł sekcji', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'description', title: 'Opis sekcji', type: 'text', rows: 3 }),
    defineField({
      name: 'fitsHeading',
      title: 'Nagłówek listy "pasuje"',
      type: 'string',
      initialValue: 'To dla Ciebie, jeśli:',
    }),
    defineField({
      name: 'fits',
      title: 'Punkty — "pasuje"',
      type: 'array',
      of: [{ type: 'text', rows: 2 }],
    }),
    defineField({
      name: 'notFitsHeading',
      title: 'Nagłówek listy "nie pasuje"',
      type: 'string',
      initialValue: 'To nie dla Ciebie, jeśli:',
    }),
    defineField({
      name: 'notFits',
      title: 'Punkty — "nie pasuje"',
      type: 'array',
      of: [{ type: 'text', rows: 2 }],
    }),
  ],
  preview: {
    prepare: () => ({ title: 'Sekcja "Dla kogo"' }),
  },
});
