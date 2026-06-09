# Tech Stack (Hugo — a ser substituído)

**Analyzed:** 2026-06-08

> Este é o stack atual que será **substituído** por Astro. Documentado para referência durante a migração.

## Core

- Framework: Hugo (SSG) — versão não especificada
- Language: HTML/CSS (templates Go)
- Package manager: nenhum (Hugo binary)
- Theme: hugo-vitae (fork do dataCobra/hugo-vitae)

## Frontend

- Styling: CSS customizado em `static/css/custom.css` + CSS do tema vitae
- Fontes: carregadas via tema (não Poppins)
- Syntax highlight: Pygments (`colorful` style) via config

## Conteúdo

- Formato: TOML frontmatter (`+++`) e YAML frontmatter (`---`) — inconsistente entre arquivos
- Posts: `content/post/*.md` (9 posts)
- Páginas: `content/page/*.md` (about, projetos, support-us)
- Shortcodes: `{{< youtube ID >}}` para embeds de vídeo

## Serviços Externos (ativos, a serem removidos)

- Comentários: Disqus (shortname `roveda`) — **removido na migração**
- Analytics: não identificado

## Internacionalização

- `i18n/pt.yaml` — traduções do tema
- `defaultContentLanguage = "pt"` no config.toml

## Taxonomias

- `categorias` (não `categories`)
- `tags`
- `series`

## Onde as coisas vivem

| Conteúdo | Localização atual | Localização no Astro |
|---|---|---|
| Posts | `content/post/*.md` | `src/content/posts/*.md` |
| Páginas | `content/page/*.md` | `src/pages/[nome].astro` |
| Imagens | `static/images/uploads/` | `public/images/uploads/` |
| CSS customizado | `static/css/custom.css` | `src/styles/` |
| Favicons | `content/favicon-*.png` | `public/` |
