# Tasks: Base Astro + Design System

## T-BASE-01 — Inicializar projeto Astro

**What:** Criar projeto Astro com pnpm, TypeScript, SSG, dentro do repositório existente (substituindo arquivos Hugo).
**Where:** Raiz do repo (`/`)
**Reuses:** nada
**Done when:** `pnpm run dev` sobe o servidor, `pnpm run build` gera `dist/` sem erros.
**Gate:** `pnpm run build`

```
pnpm create astro@latest . -- --template minimal --typescript strict --no-install
pnpm install
```

Adicionar ao `astro.config.mjs`:
- `output: 'static'`
- `site: 'https://roveeb.com'`

---

## T-BASE-02 — Design tokens e tipografia

**What:** Arquivo CSS global com variáveis de design e import do Poppins.
**Where:** `src/styles/global.css`
**Depends on:** T-BASE-01
**Done when:** Variáveis CSS disponíveis globalmente; Poppins carregada no browser.
**Gate:** `pnpm run build`

Variáveis:
```css
--color-primary: #41BAFF;
--color-bg: #EFFEFC;
--color-dark: #061736;
--color-blue-deep: #005CFE;
--color-teal-dark: #014144;
--color-teal-mid: #077E7D;
--color-teal-light: #92FDEF;
--color-blue-light: #B2E4FF;
--color-gray: #595959;
--font-sans: 'Poppins', sans-serif;
```

Google Fonts: `https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;700&display=swap`

---

## T-BASE-03 — Componente Header

**What:** `Header.astro` com logo/nome e navegação principal.
**Where:** `src/components/Header.astro`
**Depends on:** T-BASE-02
**Done when:** Header renderiza com links: Home, Posts, Tutoriais, Projetos, Sobre.
**Gate:** `pnpm run build`

---

## T-BASE-04 — Componente Footer com seção Comunidade

**What:** `Footer.astro` com copyright, links sociais e bloco de comunidade.
**Where:** `src/components/Footer.astro`
**Depends on:** T-BASE-02
**Done when:** Footer exibe comunidade (YouTube + Telegram) e links sociais.
**Gate:** `pnpm run build`

Links sociais: GitHub, GitLab, YouTube, LinkedIn, Twitter, RSS.
Comunidade: YouTube (`youtube.com/ROVEEb`) + Telegram (`t.me/mateusrovedaa`).

---

## T-BASE-05 — Layout base

**What:** `BaseLayout.astro` componendo Header + slot + Footer com meta tags SEO.
**Where:** `src/layouts/BaseLayout.astro`
**Depends on:** T-BASE-03, T-BASE-04
**Done when:** Qualquer página usando `<BaseLayout>` renderiza header, footer e meta tags corretas.
**Gate:** `pnpm run build`

Props: `title: string`, `description?: string`.

---

## T-BASE-06 — Página inicial (placeholder)

**What:** `src/pages/index.astro` com lista dos posts mais recentes (placeholder até feature blog).
**Where:** `src/pages/index.astro`
**Depends on:** T-BASE-05
**Done when:** `/` carrega sem erros com layout aplicado.
**Gate:** `pnpm run build`

---

## T-BASE-07 — Arquivo _redirects

**What:** `public/_redirects` com redirects de roveda.dev e aliases Hugo.
**Where:** `public/_redirects`
**Depends on:** T-BASE-01
**Done when:** Arquivo existe com conteúdo correto conforme REQ-REDIR-01 e REQ-REDIR-02.
**Gate:** Verificação manual do conteúdo do arquivo.

---

## T-BASE-08 — CI/CD GitLab → Cloudflare Pages

**What:** `.gitlab-ci.yml` para build e deploy automático no Cloudflare Pages.
**Where:** `.gitlab-ci.yml`
**Depends on:** T-BASE-01
**Done when:** Push na `main` dispara build e deploy.
**Gate:** Pipeline passa no GitLab CI.

```yaml
build:
  image: node:20
  script:
    - npm install -g pnpm
    - pnpm install
    - pnpm run build
  artifacts:
    paths:
      - dist/
```

Integração com Cloudflare Pages via `CLOUDFLARE_API_TOKEN` e `CLOUDFLARE_ACCOUNT_ID` como variáveis CI.
