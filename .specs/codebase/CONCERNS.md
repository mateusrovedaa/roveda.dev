# Concerns (Migração Hugo → Astro)

**Analyzed:** 2026-06-08

## Alta Prioridade

### Shortcodes Hugo não são nativos no Astro

**Evidência:** `content/post/como-guardo-meus-dados.md` linha 29 usa `{{< youtube 48rYcegMWgc >}}`. Outros posts podem ter shortcodes similares.

**Impacto:** Posts com shortcodes serão renderizados com o texto literal `{{< youtube ... >}}` se não tratados.

**Fix:** Criar componente Astro `<YouTube id="..." />` e substituir manualmente cada ocorrência nos posts (são poucos — verificar todos os 9 antes da migração).

---

### Frontmatter inconsistente (TOML vs YAML)

**Evidência:** Posts usam `---` (YAML), páginas usam `+++` (TOML). Astro suporta apenas YAML/TOML/JSON, mas o formato TOML `+++` não é padrão no Astro.

**Impacto:** Páginas como `about.md` e `projetos.md` precisam ter o frontmatter convertido para YAML.

**Fix:** Converter `+++` → `---` com adaptação das chaves (ex: `title =` → `title:`) durante a migração.

---

### Taxonomia `categorias` (PT) vs convenção padrão

**Evidência:** `config.toml` define `category = "categorias"`. Posts usam `categorias:` no frontmatter.

**Impacto:** No Astro, a coleção de posts precisará usar `categorias` consistentemente, ou decidir migrar para `categories` (inglês) internamente.

**Fix:** Manter `categorias` no frontmatter dos posts para consistência com o conteúdo existente. A URL `/tutoriais` (filtro por categoria) é um alias, não o slug da taxonomia.

---

## Média Prioridade

### Imagens sem otimização

**Evidência:** `static/images/uploads/` contém JPGs e PNGs sem versões otimizadas. Maior: `bncc.pdf` (1.5MB) no repo do roveda.dev.

**Impacto:** Performance da página de projetos com muitas imagens.

**Fix:** Usar o componente `<Image>` do Astro para otimização automática. PDF não será incluído (decidido: sem download).

---

### Sem testes automatizados

**Evidência:** Nenhum diretório de testes encontrado no repo.

**Impacto:** Sem gate checks automáticos além do build.

**Fix:** Gate mínimo = `astro build` passa sem erros. Considerar Playwright para smoke tests no futuro.
