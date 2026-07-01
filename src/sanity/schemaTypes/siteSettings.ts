import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'siteSettings',
  title: 'Ustawienia strony',
  type: 'document',
  fields: [
    defineField({
      name: 'brandLabel',
      title: 'Nazwa marki (logo tekstowe)',
      description: 'Np. "Klawitter/Shopify" — znak "/" jest automatycznie wyróżniany kolorem.',
      type: 'string',
      initialValue: 'Klawitter/Shopify',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'logo',
      title: 'Logo (opcjonalne, zastępuje tekst)',
      type: 'image',
      options: { hotspot: true },
      fields: [defineField({ name: 'alt', title: 'Tekst alternatywny', type: 'string' })],
    }),
    defineField({
      name: 'metaTitle',
      title: 'Tytuł strony (SEO)',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'metaDescription',
      title: 'Opis strony (SEO)',
      type: 'text',
      rows: 3,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'ogImage',
      title: 'Obraz do udostępniania (Open Graph)',
      type: 'image',
      options: { hotspot: true },
      fields: [defineField({ name: 'alt', title: 'Tekst alternatywny', type: 'string' })],
    }),
    defineField({
      name: 'navLinks',
      title: 'Linki w nawigacji',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'label', title: 'Etykieta', type: 'string', validation: (r) => r.required() }),
            defineField({
              name: 'href',
              title: 'Link (kotwica, np. #zakres)',
              type: 'string',
              validation: (r) => r.required(),
            }),
          ],
          preview: { select: { title: 'label', subtitle: 'href' } },
        },
      ],
    }),
    defineField({
      name: 'ctaLabel',
      title: 'Etykieta przycisku CTA (nagłówek)',
      type: 'string',
      initialValue: 'Umów audyt',
    }),
    defineField({
      name: 'contactEmail',
      title: 'Adres e-mail kontaktowy',
      type: 'string',
      validation: (rule) => rule.required().regex(/^\S+@\S+\.\S+$/, { name: 'email' }),
    }),
    defineField({
      name: 'footerTagline',
      title: 'Opis w stopce',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'footerNote',
      title: 'Dopisek w stopce',
      type: 'string',
    }),
  ],
  preview: {
    prepare: () => ({ title: 'Ustawienia strony' }),
  },
});
