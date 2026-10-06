import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const posts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    author: z.string().optional(),
    categorias: z.array(z.string()).optional(),
    tags: z.array(z.string()).optional(),
    draft: z.boolean().default(false),
    description: z.string().optional(),
  }),
});

// Clube da leitura: um .md por livro em src/content/leituras (ver _modelo.md).
const leituras = defineCollection({
  loader: glob({ pattern: '[!_]*.md', base: './src/content/leituras' }),
  schema: z.object({
    titulo: z.string(),
    autor: z.string(),
    data: z.coerce.date().optional(), // dia do encontro; sem data = a definir
    status: z.enum(['lida', 'atual', 'proxima']),
    links: z.array(z.object({ label: z.string(), url: z.string().url() })).default([]),
  }),
});

export const collections = { posts, leituras };
