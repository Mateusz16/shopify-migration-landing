import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'contactCta',
  title: 'Sekcja "Kontakt"',
  type: 'document',
  fields: [
    defineField({ name: 'eyebrow', title: 'Nadtytuł', type: 'string', initialValue: 'Kontakt' }),
    defineField({ name: 'title', title: 'Tytuł sekcji', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'description', title: 'Opis sekcji', type: 'text', rows: 3 }),
    defineField({
      name: 'mailSubject',
      title: 'Temat maila (domyślny)',
      type: 'string',
      initialValue: 'Audyt migracji do Shopify',
    }),
    defineField({
      name: 'mailBody',
      title: 'Treść maila (domyślna)',
      type: 'text',
      rows: 5,
    }),
    defineField({
      name: 'checklistHeading',
      title: 'Nagłówek listy "dołącz w pierwszej wiadomości"',
      type: 'string',
      initialValue: 'Dołącz w pierwszej wiadomości',
    }),
    defineField({
      name: 'checklistItems',
      title: 'Punkty listy',
      type: 'array',
      of: [{ type: 'string' }],
    }),
  ],
  preview: {
    prepare: () => ({ title: 'Sekcja "Kontakt"' }),
  },
});
