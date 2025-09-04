import { defineCollection, z } from "astro:content";
// z -> zod schema, es una biblioteca para validar esquemas
 
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
    // NUEVO: usernames para TeamPopover
    contributors: z.array(z.string()).default([]),

     // CTA opcional para el dock flotante
    cta: z.object({
      name: z.string().optional(),       // Nombre de la app/recurso
      store: z.string().optional(),      // "Sitio oficial", "Apps Store", etc.
      action: z.string().optional(),     // "Cliente CLI", "Instalador", etc.
      icon: z.string().url().optional(), // Icono cuadrado
      badge: z.string().optional(),      // "recomendado", "publicidad", etc.
      websiteUrl: z.string().url().optional(),

      // NUEVO: variantes por sistema operativo
      downloads: z.array(
        z.object({
          os: z.enum(["Windows", "macOS", "Linux"]),
          href: z.string().url(),
          label: z.string().optional(),  // p.ej. "EXE", "DMG", "AppImage"
          size: z.string().optional()    // p.ej. "72 MB"
        })
      ).optional(),

      // Compatibilidad hacia atrás:
      downloadUrl: z.string().url().optional()
    }).optional(),

  }),
});

export const collections = { posts };
