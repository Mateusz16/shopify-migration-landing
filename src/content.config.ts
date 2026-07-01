import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const caseStudies = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/case-studies' }),
  schema: z.object({
    clientName: z.string(),
    industry: z.string(),
    sourcePlatform: z.string(),
    summary: z.string(),
    metrics: z.array(
      z.object({
        label: z.string(),
        before: z.string(),
        after: z.string(),
      }),
    ),
    testimonial: z.string().optional(),
    testimonialAuthor: z.string().optional(),
    images: z.array(z.string()).optional(),
    publishedDate: z.coerce.date(),
    featured: z.boolean().default(false),
    isPlaceholder: z.boolean().default(false),
  }),
});

export const collections = {
  'case-studies': caseStudies,
};
