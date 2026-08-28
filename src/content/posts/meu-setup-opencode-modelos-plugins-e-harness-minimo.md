---
title: "Como uso o OpenCode: modelos, plugins e um harness mínimo"
date: 2026-08-28T10:30:00-03:00
draft: false
author: Mateus Roveda
categorias:
  - desenvolvimento
  - inteligência artificial
  - ferramentas
tags:
  - opencode
  - harness
  - llm
  - openrouter
  - ollama
  - produtividade
description: "Como organizo meu uso diário do OpenCode: um modelo para cada tipo de tarefa, modelos locais com Ollama e regras que ficam no próprio repositório."
---
Olá jovem, bão? Uso ferramentas de desenvolvimento com LLM todos os dias, seja no trabalho, nos estudos ou como professor. Depois de testar algumas opções, passei a centralizar boa parte desse uso no [OpenCode](https://opencode.ai).

O principal motivo é poder trocar as peças, não ficar amarrado. Consigo usar modelos de vários provedores, rodar modelos localmente (atualmente com um macbook air m5 16GB) e guardar no git aquilo que quero levar de um projeto para outro: regras, prompts, skills e scripts. Também uso o Claude Code no trabalho, mas em um plano empresarial. Por isso, vou deixar essa parte para outro post.

Aqui mostro a configuração que uso hoje, como divido as tarefas entre os modelos e o conjunto mínimo de arquivos que venho montando para não ficar preso a uma ferramenta.

## Por que uso um harness aberto

Um harness de código é a ferramenta que coloca o modelo para trabalhar no repositório. Ele lê os arquivos, planeja uma mudança, roda comandos no terminal e edita o código usando *tool calling*.

No meu caso, usar um harness aberto resolve três coisas. A primeira é não depender de um único modelo. Posso acessar vários provedores pelo [OpenRouter](https://openrouter.ai), usar uma API direta ou rodar um modelo local no [Ollama](https://ollama.ai). Se aparecer uma opção melhor ou mais barata, troco uma linha da configuração. Sempre levando o mundo aberto primeiro.

A segunda é enxergar o contexto enviado ao modelo e as ferramentas que ele chama. Isso ajuda bastante quando o agente começa a se perder ou gastar tokens sem sair do lugar.

A terceira é manter as regras no repositório. Arquitetura, padrões de código e comandos de teste ficam em arquivos simples, como o `AGENTS.md`. O modelo lê essas regras, mas qualquer pessoa também consegue ler e alterar.

## Um modelo para cada tipo de tarefa

Usar o modelo mais caro para tudo pesaria no orçamento. Usar um modelo fraco numa refatoração grande costuma custar em retrabalho e frustração, pesando também.

Por isso, olho mais para o custo da tarefa concluída do que para o preço por milhão de tokens. Um modelo cinco vezes mais barato deixa de ser barato quando erra três vezes e ainda precisa de correção manual.

Hoje separo os agentes em cinco papéis:


| Papel / Agente             | Modelo que uso                                                                                               | Tipo de tarefa                                                                                                                                        |
| -------------------------- | ------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| Planejamento (`plan`)      | `openrouter/qwen/qwen3.8-max` (ou outro modelo com raciocínio longo)                                         | Ler o escopo, levantar dependências, pensar na arquitetura e escrever um `PLAN.md` antes de mexer no código.                                          |
| Execução (`build`)         | `openrouter/deepseek/deepseek-v4-pro`                                                                        | Implementar funcionalidades, fazer refatorações, corrigir bugs e escrever testes.                                                                     |
| Frontend e UI (`frontend`) | `openrouter/google/gemini-3.7-flash`                                                                         | Trabalhar com screenshots, protótipos, vídeos curtos de bugs e ajustes de CSS ou layout.                                                              |
| Volume (`bulk`)            | `opencode/muse-spark-1.2-contributor-free`, `deepseek-v4-flash` ou modelos gratuitos disponíveis no OpenCode | Ler muitos arquivos, fazer buscas grandes e resumir documentos quando o volume importa mais que um raciocínio aprofundado.                            |
| Revisão (`review`)         | `openrouter/openai/gpt-5.6-sol`                                                                              | Revisar a mudança com um modelo diferente daquele que escreveu o código, procurando vulnerabilidades, regressões e pontos que passaram despercebidos. |


Esses modelos são os que atualmente estão sendo usados, mas já testei outras famílias em cada uma das caixinhas. É importante que você faça o mesmo, não tome a lista acima como verdade, teste, brinque e descubra o que realmente funciona para você.

![Diagrama dos cinco agentes do OpenCode, com o modelo e o provedor de cada um, mais os modelos locais no Ollama](/images/uploads/opencode-agentes.svg)

## Minha configuração do OpenCode

Guardo a configuração geral em `~/.config/opencode/opencode.jsonc`. No arquivo defino o modelo principal, o modelo para tarefas menores e os cinco agentes. As cores servem para identificar cada um no terminal (perfumaria).

```jsonc
{
  "$schema": "https://opencode.ai/config.json",
  "model": "openrouter/deepseek/deepseek-v4-pro",
  "small_model": "openrouter/deepseek/deepseek-v4-flash",
  "default_agent": "build",
  "compaction": {
    "prune": true
  },
  "agent": {
    "plan": {
      "model": "openrouter/qwen/qwen3.8-max",
      "color": "#4C6EF5"
    },
    "build": {
      "model": "openrouter/deepseek/deepseek-v4-pro",
      "color": "#12B886"
    },
    "frontend": {
      "description": "Frontend and UI work. Multimodal: screenshots, mockups, screen recordings.",
      "mode": "primary",
      "model": "openrouter/google/gemini-3.7-flash",
      "color": "#BE4BDB"
    },
    "bulk": {
      "description": "Bulk reading, grepping, summarizing. Delegate high-volume, low-judgment work here.",
      "mode": "all",
      "model": "opencode/muse-spark-1.2-contributor-free",
      "color": "#F59F00"
    },
    "review": {
      "description": "Adversarial review, second opinion, hard bugs the build agent stalled on.",
      "mode": "all",
      "model": "openrouter/openai/gpt-5.6-sol",
      "color": "#15AABF"
    }
  },
  "plugin": [
    "./plugins/caveman/plugin.js"
  ]
}
```

O `build`, com o DeepSeek Pro, resolve entre 85% e 90% das minhas demandas diárias. O `compaction.prune` limpa saídas antigas de comandos, que ocupam bastante espaço em sessões longas. As descrições dos agentes também têm uma função prática: o OpenCode usa esse texto para decidir quando deve delegar uma subtarefa.

Uso ainda o [RTK](https://github.com/rtk-ai/rtk), um proxy para comandos de terminal. Ele intercepta comandos frequentes, como `git status`, buscas e leitura de arquivos, e devolve só a parte da saída que o modelo precisa. Na minha máquina, já passou por mais de 5 mil comandos e filtrou 134 milhões de tokens, uma redução de 96,9% em relação à saída original.

```
$ rtk gain  
RTK Token Savings (Global Scope)
════════════════════════════════════════════════════════════

Total commands:    5139
Input tokens:      138.9M
Output tokens:     4.3M
Tokens saved:      134.6M (96.9%)
Total exec time:   41m51s (avg 488ms)
Efficiency meter: ███████████████████████░ 96.9%

By Command
────────────────────────────────────────────────────────────────────────
  #  Command                   Count   Saved    Avg%    Time  Impact
────────────────────────────────────────────────────────────────────────
 1.  rtk read                    808  121.0M   16.2%     0ms  ██████████
 2.  rtk grep                   1162    6.6M   24.5%    72ms  █░░░░░░░░░
 3.  rtk git diff main...HEAD      1    6.3M   99.6%   724ms  █░░░░░░░░░
 4.  rtk:toml ps aux               5  139.4K   97.0%    62ms  ░░░░░░░░░░
 5.  rtk diff                     13   83.3K   30.7%     1ms  ░░░░░░░░░░
 6.  rtk ls -la .                100   23.8K   71.6%     5ms  ░░░░░░░░░░
 7.  rtk ls -la data/paper...      2   22.8K   58.6%    12ms  ░░░░░░░░░░
 8.  rtk:toml ps -Ao pid,comm      2   22.3K   97.0%    27ms  ░░░░░░░░░░
 9.  rtk:toml ps -eo pid,c...      1   19.1K   98.2%    43ms  ░░░░░░░░░░
10.  rtk ls -la data/       14   17.4K   82.6%     5ms  ░░░░░░░░░░
────────────────────────────────────────────────────────────────────────
```

## Os plugins que uso

Tento manter poucos plugins. Um deles é o Caveman, que corta aquelas introduções do tipo “Claro, vou ajudar você com isso...” e pede respostas mais diretas. Parece detalhe, mas eu prefiro gastar os tokens com diagnóstico e código. O outro é um script que escrevi para carregar os modelos do Ollama dentro do OpenCode, do qual detalharei um pouco mais na continuação do post.

## Modelos locais com Ollama

Uso modelos locais quando quero manter os dados na minha máquina ou processar muita coisa sem pagar por token. Além do mais, gosto de ter uma opção para quando estiver sem rede ou se quiser "brincar" com novos modelos. Hoje tenho estes quatro instalados:

```
$ ollama list
NAME              SIZE
qwen3.5:9b-mlx    8.9 GB
gemma4:12b-mlx    7.7 GB
granite4.1:8b     5.3 GB
lfm2.5:8b         5.2 GB
```

Para eles aparecerem no OpenCode, criei o plugin `~/.config/opencode/plugins/ollama.ts`. Na inicialização, ele consulta o daemon do Ollama em `GET /api/tags` e registra os modelos que têm suporte a `tools`. Sem *tool calling*, o agente não consegue inspecionar nem alterar arquivos, então deixo os demais fora da lista.

```
import type { Plugin } from "@opencode-ai/plugin"

/**
 * Auto-discovery dos modelos servidos pelo ollama local.
 *
 * No boot, consulta /api/tags e registra como provider "ollama" todo modelo
 * que declara a capability `tools` — sem isso o opencode não consegue editar
 * arquivos nem usar ferramentas, então modelos sem tool-calling ficam de fora.
 *
 * Nada precisa ser editado ao baixar/remover modelo: `ollama pull X` e o modelo
 * aparece no /models no próximo start do opencode.
 *
 * Envs opcionais:
 *   OLLAMA_HOST              host do daemon (default http://localhost:11434)
 *   OPENCODE_OLLAMA_CONTEXT  janela de contexto anunciada (default 32768)
 *
 * IMPORTANTE: OPENCODE_OLLAMA_CONTEXT precisa espelhar o num_ctx com que o
 * ollama serve (OLLAMA_CONTEXT_LENGTH / Settings > Context length no app).
 * Anunciar mais do que o daemon serve faz o prompt ser truncado em silêncio.
 */

const CONTEXT = Number(process.env["OPENCODE_OLLAMA_CONTEXT"] ?? 32768)
const OUTPUT = 8192

function baseUrl() {
  const raw = process.env["OLLAMA_HOST"] ?? "http://localhost:11434"
  return /^https?:\/\//.test(raw) ? raw : `http://${raw}`
}

type Tag = {
  name: string
  capabilities?: string[]
  details?: { context_length?: number | null; parameter_size?: string }
}

export const OllamaLocal: Plugin = async () => ({
  config: async (config) => {
    const host = baseUrl()

    // ollama desligado não pode travar nem quebrar o boot do opencode
    const res = await fetch(`${host}/api/tags`, {
      signal: AbortSignal.timeout(1500),
    }).catch(() => null)
    if (!res?.ok) return

    const tags: Tag[] = (await res.json().catch(() => null))?.models ?? []

    const models: Record<string, any> = {}
    for (const tag of tags) {
      const caps = tag.capabilities ?? []
      if (!caps.includes("tools")) continue

      const native = tag.details?.context_length ?? CONTEXT
      const context = Math.min(native, CONTEXT)
      const size = tag.details?.parameter_size

      models[tag.name] = {
        name: `${tag.name}${size ? ` (${size})` : ""} · local`,
        attachment: caps.includes("vision"),
        reasoning: caps.includes("thinking"),
        temperature: true,
        tool_call: true,
        cost: { input: 0, output: 0 },
        limit: { context, output: Math.min(OUTPUT, Math.floor(context / 4)) },
      }
    }
    if (Object.keys(models).length === 0) return

    // preserva o que estiver escrito à mão no opencode.jsonc: config manual ganha
    const existing = config.provider?.["ollama"] ?? {}
    config.provider ??= {}
    config.provider["ollama"] = {
      npm: "@ai-sdk/openai-compatible",
      name: "Ollama (local)",
      ...existing,
      options: {
        baseURL: `${host}/v1`,
        apiKey: "ollama", // ignorado pelo daemon, mas o SDK exige algo
        // carregar 7-10 GB de pesos do disco estoura o timeout default
        headerTimeout: 300_000,
        ...(existing as any).options,
      },
      models: { ...models, ...(existing as any).models },
    }
  },
})
```

O plugin também identifica suporte a `vision` e `thinking`, marca o custo como zero e informa a janela de contexto. Quando baixo outro modelo com `ollama pull`, ele aparece no menu na próxima vez que abro o OpenCode. Não preciso editar a configuração a cada download.

Dois ajustes me deram trabalho. O valor da janela de contexto precisa ser o mesmo `num_ctx` disponibilizado pelo Ollama. Se o plugin anunciar uma janela maior, o prompt pode ser cortado sem mostrar erro. Já o outro é o tempo de carregamento, afinal ler de 7 a 10 GB de pesos do disco pode ultrapassar o limite padrão da requisição, então ajustei o `headerTimeout` para 5 minutos. Já a consulta inicial usa um limite de 1,5 segundo. Se o Ollama estiver desligado, o OpenCode abre normalmente, só sem mostrar os modelos locais.

Para ativar o plugin, adiciono `./plugins/ollama.ts` à lista `plugin` da configuração.

## O conjunto mínimo que estou montando

Com o uso diário, percebi que uma boa interface ajuda menos do que regras claras no repositório. Se o modelo não sabe como rodar os testes, quais padrões seguir e onde não deve mexer, o resto da ferramenta não compensa.

Por isso, venho [montando um conjunto pequeno de contratos](https://github.com/mateusrovedaa/harness) que consigo usar em qualquer projeto. No centro fica o `AGENTS.md`, com comandos de teste, arquitetura, padrões de commit e restrições. Junto dele ficam skills para tarefas repetitivas, como planejar com um modelo mais forte, revisar com outro provedor ou preparar um PR.

Também tento usar scripts simples e ferramentas que já conheço. O `git worktree`, por exemplo, isola tarefas paralelas sem inventar outra camada. Para as verificações, prefiro comandos que terminam com um `exit code` confiável: `0` quando passou e `1` quando falhou.

Quero conseguir trocar o OpenCode por outra ferramenta no futuro sem perder o que aprendi em cada projeto. As regras e os scripts ficam no git, não presos à interface que executa o modelo. Em algum momento trarei um post sobre o [pi.dev](http://pi.dev) (ainda estou testando, então não posso opinar).

## Como fica no dia a dia

Em tarefas maiores, começo com o `plan`, que divide o problema e registra as decisões num arquivo Markdown. Depois o `build` implementa e escreve os testes. Quando a mudança envolve interface, passo screenshots para o `frontend` comparar e ajustar.

Não confio apenas no resumo que o modelo entrega no final. Rodo os testes no terminal e leio o `git diff`. Se a mudança for importante, uso o `review` com outro provedor para procurar o que o primeiro modelo não viu.

## Onde esse fluxo incomoda

O preço é imprevisível. Uma sessão longa com um modelo caro pode custar o mesmo que várias tarefas pequenas. Pior ainda quando o agente entra num ciclo, gasta tokens e não entrega nada. Separando os modelos por tarefa, gasto entre 5 e 15 dólares por mês. Num pacote fechado como o Claude Code, quem oferece o serviço assume essa variação. No OpenRouter, ela fica comigo. O ponto que equilibra essa conta é que eu tenho uso sazonal, então economizo com assinaturas e esse valor vira para créditos quando preciso.

A qualidade dos provedores também varia. O mesmo modelo pode chegar com *tool calling* quebrado, texto cortado ou respostas lentas, dependendo de quem está servindo. Os modelos gratuitos ajudam em tarefas de volume, mas têm limite e fila. Em horário movimentado, podem funcionar bem ou nem valer a tentativa.

E a manutenção é minha. Um plugin quebra depois de uma atualização do OpenCode, a configuração muda ou um modelo some da lista. Ter liberdade para trocar cada peça significa cuidar de cada peça. Ainda vale a pena para mim, mas esse custo existe, então tome cuidado.

// see you later