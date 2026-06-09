# Feature: Base Astro + Design System

**Milestone:** M1 — Fundação
**Status:** PLANNED

## Requirements

**REQ-BASE-01** — Projeto Astro inicializado com pnpm, TypeScript habilitado, modo SSG (output: static).

**REQ-BASE-02** — Design tokens definidos como variáveis CSS:
- Paleta: `--color-primary: #41BAFF`, `--color-bg: #EFFEFC`, `--color-dark: #061736`, `--color-blue-deep: #005CFE`, `--color-teal-dark: #014144`, `--color-teal-mid: #077E7D`, `--color-teal-light: #92FDEF`, `--color-blue-light: #B2E4FF`, `--color-gray: #595959`
- Tipografia: Poppins carregado via Google Fonts (weights: 300/light, 700/bold, e corpo padrão)

**REQ-BASE-03** — Componente `Header` com navegação: Home (`/`), Posts (`/posts`), Tutoriais (`/tutoriais`), Projetos (`/projetos`), Sobre (`/sobre`).

**REQ-BASE-04** — Componente `Footer` com:
- Copyright e créditos
- Links sociais: GitHub, GitLab, YouTube, LinkedIn, Twitter
- Seção de comunidade: destaque para YouTube (`youtube.com/ROVEEb`) e Telegram (`t.me/mateusrovedaa`)

**REQ-BASE-05** — Layout base (`BaseLayout.astro`) que compõe Header + slot + Footer, com meta tags SEO (title, description, og:tags).

**REQ-BASE-06** — Arquivo `public/_redirects` com: `https://roveda.dev/* https://roveeb.com/sobre 301` (para Cloudflare Pages).

**REQ-BASE-07** — `.gitlab-ci.yml` configurado para build Astro + deploy no Cloudflare Pages via `wrangler` ou integração nativa Cloudflare.

**REQ-BASE-08** — `astro build` executa sem erros como gate check mínimo.

## Done When

- `pnpm run build` passa sem erros
- Site abre no browser com header e footer corretos
- Design tokens aplicados visualmente
- Comunidade visível no footer
