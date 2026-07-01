import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'pricingModel',
  title: 'Sekcja "Cennik"',
  type: 'document',
  fields: [
    defineField({ name: 'eyebrow', title: 'Nadtytuł', type: 'string', initialValue: 'Cennik' }),
    defineField({ name: 'title', title: 'Tytuł sekcji', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'description', title: 'Opis sekcji', type: 'text', rows: 4 }),
    defineField({
      name: 'migrationLabel',
      title: 'Migracja — etykieta karty',
      type: 'string',
      initialValue: 'Migracja',
    }),
    defineField({
      name: 'migrationHeadline',
      title: 'Migracja — nagłówek ceny',
      type: 'string',
      initialValue: 'Wycena indywidualna po audycie',
    }),
    defineField({ name: 'migrationBody', title: 'Migracja — opis', type: 'text', rows: 3 }),
    defineField({
      name: 'maintenanceLabel',
      title: 'Maintenance — etykieta karty',
      type: 'string',
      initialValue: 'Maintenance',
    }),
    defineField({
      name: 'maintenancePriceFrom',
      title: 'Maintenance — cena od (PLN netto)',
      type: 'number',
      initialValue: 2500,
    }),
    defineField({
      name: 'maintenancePriceTo',
      title: 'Maintenance — cena do (PLN netto)',
      type: 'number',
      initialValue: 3500,
    }),
    defineField({ name: 'maintenanceBody', title: 'Maintenance — opis', type: 'text', rows: 3 }),
    defineField({
      name: 'capacityNote',
      title: 'Wyróżniony dopisek o limicie klientów',
      type: 'text',
      rows: 3,
    }),
  ],
  preview: {
    prepare: () => ({ title: 'Sekcja "Cennik"' }),
  },
});
