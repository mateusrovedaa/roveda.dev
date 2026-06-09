# Tasks: Blog

## T-BLOG-01 — Definir coleção de posts no Astro

**What:** `src/content/config.ts` com schema Zod para a coleção `posts`.
**Where:** `src/content/config.ts`
**Depends on:** T-BASE-01
**Done when:** Schema compila sem erros; `astro check` passa.
**Gate:** `pnpm run build`

---

## T-BLOG-02 — Migrar os 9 posts

**What:** Copiar e adaptar todos os `.md` de `content/post/` para `src/content/posts/`.
**Where:** `src/content/posts/`
**Depends on:** T-BLOG-01
**Done when:** Todos os 9 arquivos em `src/content/posts/` com frontmatter YAML válido.
**Gate:** `astro check` sem erros de schema

Posts a migrar:
1. `como-guardo-meus-dados.md`
2. `como-instalar-a-protonvpn-no-gnu-linux.md`
3. `como-instalar-o-node-red-como-um-serviço-em-distribuições-baseadas-no-debian.md`
4. `configurando-n8n-com-nginx-em-servidor.md`
5. `criar-pendrive-bootavel-cli.md`
6. `fazendo-ssd-externo.md`
7. `node-red.md`
8. `proton-vpn.md`
9. `vpn-é-realmente-útil-e-necessário.md`

Adaptações por post:
- Converter `+++` TOML → `---` YAML (se necessário)
- Adicionar `slug` explícito que preserva a URL original
- Substituir shortcodes `{{< youtube ID >}}` por `<YouTube id="ID" />` + importar componente

---

## T-BLOG-03 — Componente YouTube

**What:** `YouTube.astro` para embed responsivo.
**Where:** `src/components/YouTube.astro`
**Depends on:** T-BASE-02
**Done when:** `<YouTube id="abc123" />` renderiza iframe 16:9 sem layout quebrado.
**Gate:** `pnpm run build`

---

## T-BLOG-04 — Rota /post/[slug]

**What:** `src/pages/post/[slug].astro` com `getStaticPaths` para todos os posts.
**Where:** `src/pages/post/[slug].astro`
**Depends on:** T-BLOG-02, T-BASE-05
**Done when:** Cada post acessível em `/post/[slug]` com conteúdo, título, data, categorias e imagens.
**Gate:** `pnpm run build` + verificação manual de 2-3 posts

---

## T-BLOG-05 — Rota /posts (listagem)

**What:** `src/pages/posts.astro` listando todos os posts por data decrescente.
**Where:** `src/pages/posts.astro`
**Depends on:** T-BLOG-01, T-BASE-05
**Done when:** `/posts` exibe título, data e excerpt de todos os posts, ordenados.
**Gate:** `pnpm run build`

---

## T-BLOG-06 — Rota /tutoriais (filtro por categoria)

**What:** `src/pages/tutoriais.astro` filtrando posts com `categorias` incluindo `"tutoriais"`.
**Where:** `src/pages/tutoriais.astro`
**Depends on:** T-BLOG-01, T-BASE-05
**Done when:** `/tutoriais` lista apenas posts com categoria tutoriais.
**Gate:** `pnpm run build`

---

## T-BLOG-07 — Copiar imagens para public/

**What:** Mover `static/images/` → `public/images/` e favicons de `content/` → `public/`.
**Where:** `public/images/`, `public/`
**Depends on:** T-BASE-01
**Done when:** Imagens acessíveis nas mesmas URLs relativas `/images/uploads/...`.
**Gate:** Verificação manual de uma imagem no browser
