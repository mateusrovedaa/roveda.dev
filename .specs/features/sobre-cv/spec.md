# Feature: Página /sobre (Currículo Online)

**Milestone:** M3 — Currículo Online
**Status:** PLANNED
**Depends on:** base-astro

## Requirements

**REQ-SOBRE-01** — Rota `/sobre` com layout de currículo online, acessível via redirect de `roveda.dev`.

**REQ-SOBRE-02** — Seção **Hero**:
- Foto de perfil (GitHub avatar: `https://avatars.githubusercontent.com/u/22747307`)
- Nome: Mateus Roveda
- Tagline: derivada da bio atual
- Links rápidos: GitHub, GitLab, YouTube, LinkedIn, Instagram, Telegram, WhatsApp, E-mail

**REQ-SOBRE-03** — Seção **Sobre**: bio narrativa (texto a ser provido pelo usuário; usar bio atual do `about.md` como base inicial).

**REQ-SOBRE-04** — Seção **Experiência**: lista de cargos com empresa, período e descrição breve.
> Dados reais a popular: vide TODO em STATE.md.

**REQ-SOBRE-05** — Seção **Formação**: lista de cursos com instituição, grau e ano de conclusão.
- Bacharel em Engenharia de Software — Univates
- Mestre em Computação Aplicada (Edge AI) — Unisinos
> Dados reais (anos) a popular: vide TODO em STATE.md.

**REQ-SOBRE-06** — Seção **Artigos Publicados**: link externo para o Google Acadêmico do Mateus Roveda.
> URL do Scholar a confirmar: vide TODO em STATE.md.

**REQ-SOBRE-07** — Seção **Projetos em destaque**: cards ou lista com os projetos principais, linkando para `/projetos` e/ou URLs externas dos projetos.

**REQ-SOBRE-08** — A página é o destino do redirect `roveda.dev → roveeb.com/sobre` (configurado em REQ-BASE-06).

## Done When

- `/sobre` renderiza todas as 6 seções sem erros
- Links rápidos no Hero apontam para destinos corretos
- Seção Artigos tem link funcional (mesmo que placeholder enquanto URL do Scholar não for confirmada)
- `astro build` sem erros
