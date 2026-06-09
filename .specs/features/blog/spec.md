# Feature: Blog

**Milestone:** M2 — Conteúdo Migrado
**Status:** PLANNED
**Depends on:** base-astro

## Requirements

**REQ-BLOG-01** — Coleção Astro `posts` definida em `src/content/config.ts` com schema Zod:
- `title: z.string()`
- `date: z.date()`
- `author: z.string().optional()`
- `categorias: z.array(z.string()).optional()`
- `tags: z.array(z.string()).optional()`
- `draft: z.boolean().default(false)`
- `description: z.string().optional()`

**REQ-BLOG-02** — Os 9 posts migrados de `content/post/` para `src/content/posts/` com:
- Frontmatter convertido de TOML `+++` para YAML `---` onde necessário
- URLs preservadas via `slug` no frontmatter ou rota `src/pages/post/[slug].astro`
- Shortcodes `{{< youtube ID >}}` substituídos por componente `<YouTube id="ID" />`

**REQ-BLOG-03** — Rota `/post/[slug]` renderiza cada post com layout de artigo (título, data, autor, categorias, conteúdo, imagens).

**REQ-BLOG-04** — Rota `/posts` exibe lista paginada de todos os posts, ordenados por data decrescente, com título, data e excerpt.

**REQ-BLOG-05** — Rota `/tutoriais` exibe posts filtrados pela categoria `tutoriais`.

**REQ-BLOG-06** — Componente `<YouTube id="...">` renderiza embed responsivo do YouTube (iframe com aspect ratio 16:9).

**REQ-BLOG-07** — Imagens de posts referenciadas como `/images/uploads/...` continuam funcionando (copiadas para `public/images/uploads/`).

## Done When

- Todos os 9 posts acessíveis em `/post/[slug]` com conteúdo correto
- `/posts` lista todos os posts
- `/tutoriais` lista apenas posts com categoria tutoriais
- Nenhum shortcode `{{< youtube >}}` literal visível nas páginas
- `astro build` sem erros
