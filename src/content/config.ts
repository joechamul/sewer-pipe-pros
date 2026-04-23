import { defineCollection, z } from 'astro:content';

// Optional content collections. The site currently generates service/area pages
// from src/data/*.ts — these collections are here for any long-form content
// (neighborhood guides, service deep-dives) you want to add as markdown.

const services = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    slug: z.string().optional(),
    category: z.enum(['sewer', 'water', 'pipe', 'fixture']),
    description: z.string(),
  }),
});

const areas = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    slug: z.string().optional(),
    description: z.string().optional(),
  }),
});

export const collections = { services, areas };
