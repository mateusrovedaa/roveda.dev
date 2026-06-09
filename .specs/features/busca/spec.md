# Feature: Busca com Pagefind

**Milestone:** M4 — Busca e Polish
**Status:** DONE
**Depends on:** blog, projetos, sobre-cv

## Implementação

- Integração `astro-pagefind` (v2) em `astro.config.mjs` — gera índice no `pnpm build`.
- Conteúdo indexável marcado com `data-pagefind-body`: cada post (`/post/...`), `/projetos` e `/sobre`. Páginas de listagem (home, `/posts`, `/tutoriais`) ficam fora do índice. Confirmado: 11 fragmentos gerados.
- UI: `src/components/Search.astro` — botão no Header (atalho `/`) abre um `<dialog>` modal com `<pagefind-searchbox>`. Disponível em todas as páginas via Header global.
- 100% client-side; nenhum JS server-side.

> Nota: o índice só é gerado no `build`. Em `astro dev` a busca pode aparecer vazia até rodar `pnpm build` ao menos uma vez.

## Requirements

**REQ-BUSCA-01** — Pagefind integrado ao build Astro (`@pagefind/default-ui` ou integração via `astro-pagefind`).

**REQ-BUSCA-02** — Indexação automática de: todos os posts (`/post/...`), página de projetos (`/projetos`), página sobre (`/sobre`).

**REQ-BUSCA-03** — UI de busca acessível via ícone/botão no Header em todas as páginas.

**REQ-BUSCA-04** — Resultados exibem título, excerpt e link para a página.

**REQ-BUSCA-05** — Busca funciona sem JavaScript server-side (static, client-side apenas).

## Done When

- `pnpm run build` gera índice Pagefind sem erros
- Busca por termo de um post retorna resultado correto
- UI de busca abre e fecha corretamente
