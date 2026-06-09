# roveeb.com — Migração para Astro

**Vision:** Unificar roveeb.com (blog) e roveda.dev (links/currículo) em um único site moderno em Astro, hospedado no Cloudflare Pages, com identidade visual consistente com o canal YouTube ROVEEb.

**For:** Visitantes do blog, alunos, recrutadores e seguidores da comunidade ROVEEb.

**Solves:** Dois sites separados com experiências inconsistentes, stack Hugo desatualizada, ausência de currículo online e currículo pessoal sem conexão com o blog.

## Goals

- Consolidar roveeb.com + roveda.dev em um único domínio (roveeb.com) com zero conteúdo perdido
- Entregar currículo online completo acessível via roveda.dev → roveeb.com/sobre
- Migrar todos os 9 posts existentes com URLs preservadas (`/post/...`)

## Tech Stack

**Core:**

- Framework: Astro (SSG)
- Language: TypeScript
- Runtime: Node.js
- Package manager: pnpm

**Frontend:**

- Styling: CSS vanilla com design tokens + Poppins (Google Fonts)
- Busca: Pagefind (client-side, integrado ao build)

**Infraestrutura:**

- Hosting: Cloudflare Pages
- Repositório: GitLab (`gitlab.com/roveeb/roveeb-site`)
- Redirect: roveda.dev → roveeb.com/sobre via `_redirects` do Cloudflare Pages

## Scope

**v1 inclui:**

- Setup base Astro com design system (paleta, tipografia, componentes base)
- Blog com todos os 9 posts migrados e URLs preservadas
- Página `/sobre` — currículo online (Hero, Sobre, Experiência, Formação, Artigos Publicados, Projetos em destaque)
- Página `/projetos` — conteúdo migrado do Hugo
- Busca client-side com Pagefind
- Seção de comunidade (YouTube + Telegram) no footer e/ou homepage
- Configuração de redirect `roveda.dev → roveeb.com/sobre`
- Deploy no Cloudflare Pages via CI do GitLab

**Explicitamente fora do escopo:**

- Comentários (sem sistema de comentários)
- Internacionalização (PT-BR apenas)
- Dark mode (fundo claro é o padrão; dark mode pode ser adicionado depois)
- Download de PDF do currículo
- Backend / funcionalidades dinâmicas

## Constraints

- URLs `/post/...` devem ser preservadas — há links externos existentes
- O repositório permanece no GitLab (`roveeb/roveeb-site`)
- Identidade visual: Poppins (light/bold/tiny), paleta azul-teal, `#41BAFF` como cor primária, fundo `#EFFEFC` por padrão
