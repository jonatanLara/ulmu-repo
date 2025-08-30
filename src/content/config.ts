import { defineCollection, z } from "astro:content";

const posts = defineCollection({
  type: "content", // archivos .md o .mdx
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    published: z.date(),                 // en frontmatter: YYYY-MM-DD
    updated: z.date().optional(),
    tags: z.array(z.string()).default([]),
    cover: z.string().optional(),        // ruta a imagen pública
    draft: z.boolean().default(false),
  }),
});

export const collections = { posts };
