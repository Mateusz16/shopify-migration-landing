import siteSettings from './siteSettings';
import hero from './hero';
import diagnosticPanel from './diagnosticPanel';
import audienceFilter from './audienceFilter';
import serviceGrid from './serviceGrid';
import processSteps from './processSteps';
import pricingModel from './pricingModel';
import aboutMe from './aboutMe';
import contactCta from './contactCta';
import caseStudiesSection from './caseStudiesSection';
import caseStudy from './caseStudy';

export const schemaTypes = [
  siteSettings,
  hero,
  diagnosticPanel,
  audienceFilter,
  serviceGrid,
  processSteps,
  pricingModel,
  aboutMe,
  contactCta,
  caseStudiesSection,
  caseStudy,
];

// Dokumenty singletonowe — jeden na stronę, bez możliwości tworzenia kolejnych.
export const singletonTypes = new Set([
  'siteSettings',
  'hero',
  'diagnosticPanel',
  'audienceFilter',
  'serviceGrid',
  'processSteps',
  'pricingModel',
  'aboutMe',
  'contactCta',
  'caseStudiesSection',
]);
