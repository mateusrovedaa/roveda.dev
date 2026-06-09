# Tasks: Página /sobre (Currículo Online)

## T-SOBRE-01 — Estrutura da página /sobre

**What:** `src/pages/sobre.astro` com BaseLayout e seções definidas como âncoras.
**Where:** `src/pages/sobre.astro`
**Depends on:** T-BASE-05
**Done when:** `/sobre` carrega com todas as 6 seções visíveis (mesmo que com dados placeholder).
**Gate:** `pnpm run build`

---

## T-SOBRE-02 — Seção Hero

**What:** Hero com foto, nome, tagline e links rápidos de contato/redes.
**Where:** Seção `#hero` em `src/pages/sobre.astro`
**Depends on:** T-SOBRE-01
**Done when:** Foto carrega, links apontam para destinos corretos.
**Gate:** `pnpm run build` + verificação visual

Foto: `https://avatars.githubusercontent.com/u/22747307?s=400`
Links rápidos: GitHub, GitLab, YouTube, LinkedIn, Instagram, Telegram, WhatsApp, E-mail

---

## T-SOBRE-03 — Seção Sobre (bio)

**What:** Texto narrativo com a bio do Mateus.
**Where:** Seção `#sobre` em `src/pages/sobre.astro`
**Depends on:** T-SOBRE-01
**Done when:** Texto da bio renderiza corretamente.
**Gate:** `pnpm run build`

Bio base (do `roveda.dev`): Professor nos cursos Técnicos e Jovem Aprendiz TI pela Univates; Youtuber no canal ROVEEb e líder de comunidade na UBL; Engenheiro DevOps no Instituto todos pela Saúde; Mestre em Computação Aplicada - Edge AI pela Unisinos; Bacharel em Engenharia de Software pela Univates.

---

## T-SOBRE-04 — Seção Experiência

**What:** Lista de experiências profissionais.
**Where:** Seção `#experiencia` em `src/pages/sobre.astro`
**Depends on:** T-SOBRE-01
**Done when:** Seção renderiza (dados reais a preencher conforme TODO em STATE.md).
**Gate:** `pnpm run build`

> ⚠️ TODO: Mateus precisa fornecer dados: empresas, cargos, períodos, descrições.

---

## T-SOBRE-05 — Seção Formação

**What:** Lista de formações acadêmicas.
**Where:** Seção `#formacao` em `src/pages/sobre.astro`
**Depends on:** T-SOBRE-01
**Done when:** Formações listadas com instituição e grau.
**Gate:** `pnpm run build`

Dados base:
- Bacharel em Engenharia de Software — Univates
- Mestre em Computação Aplicada (Edge AI) — Unisinos

> ⚠️ TODO: confirmar anos de conclusão.

---

## T-SOBRE-06 — Seção Artigos Publicados

**What:** Link para Google Acadêmico com lista ou botão.
**Where:** Seção `#artigos` em `src/pages/sobre.astro`
**Depends on:** T-SOBRE-01
**Done when:** Link para Google Scholar funciona.
**Gate:** `pnpm run build`

> ⚠️ TODO: URL do Google Scholar a confirmar (STATE.md).

---

## T-SOBRE-07 — Seção Projetos em destaque

**What:** Cards ou lista com projetos principais, linkando para /projetos.
**Where:** Seção `#projetos` em `src/pages/sobre.astro`
**Depends on:** T-SOBRE-01, T-PROJ-01 (projetos)
**Done when:** Pelo menos 3 projetos em destaque com link para /projetos.
**Gate:** `pnpm run build`
