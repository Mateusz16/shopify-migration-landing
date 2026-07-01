import type { StructureResolver } from 'sanity/structure';

const singletonListItem = (S: Parameters<StructureResolver>[0], type: string, title: string) =>
  S.listItem()
    .title(title)
    .id(type)
    .child(S.document().schemaType(type).documentId(type));

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Treść strony')
    .items([
      singletonListItem(S, 'siteSettings', 'Ustawienia strony'),
      S.divider(),
      singletonListItem(S, 'hero', 'Hero'),
      singletonListItem(S, 'diagnosticPanel', 'Panel diagnostyczny (Hero)'),
      singletonListItem(S, 'audienceFilter', 'Sekcja „Dla kogo”'),
      singletonListItem(S, 'serviceGrid', 'Sekcja „Zakres usługi”'),
      singletonListItem(S, 'processSteps', 'Sekcja „Proces”'),
      singletonListItem(S, 'pricingModel', 'Sekcja „Cennik”'),
      singletonListItem(S, 'aboutMe', 'Sekcja „O mnie”'),
      singletonListItem(S, 'contactCta', 'Sekcja „Kontakt”'),
      S.divider(),
      singletonListItem(S, 'caseStudiesSection', 'Case studies — nagłówek'),
      S.listItem()
        .title('Case studies — wpisy')
        .child(S.documentTypeList('caseStudy').title('Case studies')),
    ]);
