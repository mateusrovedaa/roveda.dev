# State

**Last updated:** 2026-06-08
**Current phase:** Planning — specs criadas, implementação não iniciada

## Decisions

- **Framework:** Astro (SSG) — migração de Hugo
- **Hosting:** Cloudflare Pages (de GitLab Pages)
- **Comentários:** Removidos (era Disqus)
- **Idioma:** PT-BR apenas, sem i18n
- **URLs preservadas:** `/post/...` mantidas para não quebrar links externos
- **Domínio roveda.dev:** Redirect 301 → roveeb.com/sobre via `_redirects`
- **Design:** Poppins (light/bold/tiny), `#41BAFF` como cor primária, fundo `#EFFEFC` por padrão
- **Busca:** Pagefind (client-side)
- **PDF currículo:** Fora do escopo (sem download)

## Blockers

_Nenhum no momento._

## Todos

- [ ] Popular seção Experiência da página /sobre com dados reais (anos)
- [ ] Popular seção Formação com dados reais (anos)
- [ ] Obter URL do Google Acadêmico do Mateus para a seção Artigos Publicados
- [x] Shortcodes `{{< youtube ID >}}` — já convertidos para `<iframe>` direto no markdown; nenhum shortcode Hugo remanescente
- [x] M4 — Busca com Pagefind (`astro-pagefind`)

## Deferred Ideas

- Dark mode toggle
- Tags e categorias como páginas de listagem dedicadas com paginação
- Newsletter / lista de e-mails
