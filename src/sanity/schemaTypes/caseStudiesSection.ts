import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'caseStudiesSection',
  title: 'Sekcja "Case studies" (nagłówek)',
  type: 'document',
  fields: [
    defineField({ name: 'eyebrow', title: 'Nadtytuł', type: 'string', initialValue: 'Case studies' }),
    defineField({ name: 'title', title: 'Tytuł sekcji', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'description', title: 'Opis sekcji', type: 'text', rows: 3 }),
    defineField({
      name: 'placeholderNotice',
      title: 'Dopisek ostrzegający o przykładowych danych',
      description: 'Widoczny, gdy przynajmniej jeden case study ma zaznaczone "Dane przykładowe".',
      type: 'text',
      rows: 2,
    }),
  ],
  preview: {
    prepare: () => ({ title: 'Sekcja "Case studies" (nagłówek)' }),
  },
});
