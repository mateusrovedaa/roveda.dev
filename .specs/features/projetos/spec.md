# Feature: Página /projetos

**Milestone:** M2 — Conteúdo Migrado
**Status:** PLANNED
**Depends on:** base-astro

## Requirements

**REQ-PROJ-01** — Rota `/projetos` com conteúdo migrado de `content/page/projetos.md`.

**REQ-PROJ-02** — Projetos listados: Pets RS, Pets Vale do Taquari, Prefa, Universidade Brasileira Livre, municipios.dev, ROVEEb, Sorteador.

**REQ-PROJ-03** — Cada projeto exibe: nome, descrição, imagem (de `public/images/uploads/`), links externos relevantes, mídia/cobertura de imprensa onde existir.

**REQ-PROJ-04** — Âncoras internas funcionando (`#pets-rs`, `#prefa`, etc.) para links de acesso rápido.

**REQ-PROJ-05** — Alias `/page/projetos` redireciona para `/projetos` (preservar links existentes do Hugo).

## Done When

- `/projetos` exibe todos os 7 projetos com imagens e links
- Âncoras de navegação interna funcionam
- `astro build` sem erros
