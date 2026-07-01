import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { schemaTypes, singletonTypes } from './src/sanity/schemaTypes';
import { structure } from './src/sanity/structure';

const projectId = import.meta.env.PUBLIC_SANITY_PROJECT_ID || 'placeholder';
const dataset = import.meta.env.PUBLIC_SANITY_DATASET || 'production';

export default defineConfig({
  name: 'default',
  title: 'matklawitter.com — treść strony',
  projectId,
  dataset,
  plugins: [structureTool({ structure }), visionTool()],
  schema: {
    types: schemaTypes,
    // Dokumenty singletonowe nie pojawiają się w menu "Create new".
    templates: (templates) => templates.filter(({ schemaType }) => !singletonTypes.has(schemaType)),
  },
  document: {
    // Dla singletonów: bez duplikowania i usuwania (jest tylko jeden dokument na typ).
    actions: (input, context) =>
      singletonTypes.has(context.schemaType)
        ? input.filter(({ action }) => action && !['unpublish', 'duplicate', 'delete'].includes(action))
        : input,
  },
});
