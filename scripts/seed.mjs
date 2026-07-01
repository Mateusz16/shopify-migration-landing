// Jednorazowy skrypt: wgrywa dzisiejszą treść strony (src/lib/sanity/defaults.ts)
// do Sanity jako punkt startowy do edycji w Studio.
//
// Użycie: npm run sanity:seed
// Wymaga w .env: PUBLIC_SANITY_PROJECT_ID, PUBLIC_SANITY_DATASET, SANITY_API_WRITE_TOKEN
// (token z uprawnieniem zapisu — patrz README, sekcja "Sanity CMS").

import { createClient } from '@sanity/client';
import {
  siteSettingsDefault,
  heroDefault,
  diagnosticPanelDefault,
  audienceFilterDefault,
  serviceGridDefault,
  processStepsDefault,
  pricingModelDefault,
  aboutMeDefault,
  contactCtaDefault,
  caseStudiesSectionDefault,
  caseStudiesDefault,
} from '../src/lib/sanity/defaults.ts';

const projectId = process.env.PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.PUBLIC_SANITY_DATASET || 'production';
const token = process.env.SANITY_API_WRITE_TOKEN;

if (!projectId || !token) {
  console.error(
    '[seed] Brakuje PUBLIC_SANITY_PROJECT_ID lub SANITY_API_WRITE_TOKEN w .env — patrz README, sekcja "Sanity CMS".',
  );
  process.exit(1);
}

const client = createClient({
  projectId,
  dataset,
  apiVersion: '2024-06-01',
  token,
  useCdn: false,
});

const singletons = [
  { _id: 'siteSettings', _type: 'siteSettings', ...siteSettingsDefault },
  { _id: 'hero', _type: 'hero', ...heroDefault },
  { _id: 'diagnosticPanel', _type: 'diagnosticPanel', ...diagnosticPanelDefault },
  { _id: 'audienceFilter', _type: 'audienceFilter', ...audienceFilterDefault },
  { _id: 'serviceGrid', _type: 'serviceGrid', ...serviceGridDefault },
  { _id: 'processSteps', _type: 'processSteps', ...processStepsDefault },
  { _id: 'pricingModel', _type: 'pricingModel', ...pricingModelDefault },
  { _id: 'aboutMe', _type: 'aboutMe', ...aboutMeDefault },
  { _id: 'contactCta', _type: 'contactCta', ...contactCtaDefault },
  { _id: 'caseStudiesSection', _type: 'caseStudiesSection', ...caseStudiesSectionDefault },
];

const caseStudies = caseStudiesDefault.map((entry) => ({ ...entry, _type: 'caseStudy' }));

const transaction = client.transaction();
for (const doc of [...singletons, ...caseStudies]) {
  transaction.createOrReplace(doc);
}

const result = await transaction.commit();
console.log(`[seed] Wgrano ${result.results.length} dokumentów do datasetu "${dataset}".`);
