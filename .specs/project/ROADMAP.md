# Roadmap

**Current Milestone:** M1 — Fundação
**Status:** Planning

---

## M1 — Fundação

**Goal:** Site Astro funcionando no Cloudflare Pages com design system aplicado e CI/CD configurado.
**Target:** Pré-requisito para todas as outras features.

### Features

**Base Astro + Design System** — PLANNED

- Projeto Astro inicializado com pnpm
- Design tokens (paleta, tipografia Poppins)
- Componentes base: Header, Footer, Layout
- Seção de comunidade (YouTube + Telegram) no Footer
- Configuração Cloudflare Pages + `.gitlab-ci.yml`
- Arquivo `_redirects` para roveda.dev → roveeb.com/sobre

---

## M2 — Conteúdo Migrado

**Goal:** Todo o conteúdo do Hugo disponível no novo site com URLs preservadas.

### Features

**Blog** — PLANNED

- 9 posts migrados com frontmatter adaptado
- URLs `/post/[slug]` preservadas
- Listagem em `/posts`
- Filtro por categoria em `/tutoriais`
- Suporte a shortcode `youtube` do Hugo convertido para componente Astro

**Projetos** — PLANNED

- Conteúdo de `projetos.md` migrado
- Página `/projetos` com imagens

---

## M3 — Currículo Online

**Goal:** Página `/sobre` com currículo completo e `roveda.dev` redirecionando para ela.

### Features

**Página /sobre (CV)** — PLANNED

- Seção Hero: foto, nome, tagline, links rápidos
- Seção Sobre: bio narrativa
- Seção Experiência: cargos e empresas
- Seção Formação: graduação e mestrado
- Seção Artigos Publicados: link Google Acadêmico
- Seção Projetos em destaque: link para /projetos
- Redirect `roveda.dev → roveeb.com/sobre` ativo

---

## M4 — Busca e Polish

**Goal:** Site completo, polido e com busca funcional.

### Features

**Busca com Pagefind** — PLANNED

- Integração Pagefind no build Astro
- UI de busca acessível em todas as páginas
- Indexação de posts e páginas

---

## Future Considerations

- Dark mode toggle
- RSS feed explícito
- Tags e categorias como páginas de listagem dedicadas
- Newsletter
