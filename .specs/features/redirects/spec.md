# Feature: Redirects

**Milestone:** M1 — Fundação
**Status:** PLANNED
**Depends on:** base-astro

## Requirements

**REQ-REDIR-01** — Arquivo `public/_redirects` com redirect de roveda.dev:
```
https://roveda.dev/* https://roveeb.com/sobre 301
```

**REQ-REDIR-02** — Aliases do Hugo preservados como redirects:
```
/page/about        /sobre     301
/page/projetos     /projetos  301
/page/projects     /projetos  301
```

**REQ-REDIR-03** — `roveda.dev` deve ser configurado no Cloudflare Pages como domínio customizado adicional (fora do escopo do código — ação no painel Cloudflare).

## Done When

- `public/_redirects` existe e contém os redirects corretos
- Build não quebra com o arquivo presente
