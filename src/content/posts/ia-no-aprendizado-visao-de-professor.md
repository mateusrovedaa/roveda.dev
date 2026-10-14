---
title: "IA no aprendizado: a visão de um professor"
date: 2026-10-13T10:00:00-03:00
draft: false
author: Mateus Roveda
categorias:
  - educação
  - inteligência artificial
tags:
  - ensino
  - aprendizado
  - llm
description: "Minha visão, como professor de programação, sobre o uso de IA no aprendizado: onde ela ajuda, onde atrapalha e como evitar que o aluno pule etapas."
---
Olá jovem, bão?

Estava pensando, depois de uma gravação de aula para o EAD da universidade e de um [vídeo do Mano Deyvin](https://www.youtube.com/watch?v=_cKniWsyzyc), sobre o impacto do momento que vivemos na educação, mais especificamente do uso de Inteligência Artificial (em especial a IA Generativa). No vídeo, o Deyvin discute como a IA pode entregar o resultado de quem estudou sem entregar o conhecimento, deixando muita confiança no lugar. E não, você não vai me ver dizendo que não devemos utilizar IA, afinal essa é uma tecnologia que veio para ficar e eu uso bastante no meu dia a dia. Mas será que o uso por quem está iniciando a sua jornada (ou o uso desenfreado) não pode trazer mais impactos negativos do que positivos?

Spoiler 1: este texto está sendo escrito por mim. Usei  modelos  para revisar e fazer uma busca em alguns estudos, mas pode ficar de boas, ainda é um humano escrevendo :)

Spoiler 2: todos os travessões deste texto foram colocados por mim, afinal travessão é útil e eu já usava antes da fama da IA, fica aqui minha reclamação com o sequestro do travessão.

## Contexto

Antes de iniciar os apontamentos, é importante situar você sobre quem eu sou. Iniciei minha jornada na educação com o canal ROVEEb, em meados de 2019, e depois participei da [Formação Aztec](https://formacao.aztecweb.net/), elaborando e facilitando o conteúdo e encontros. Em 2022, recebi o convite para fazer parte da primeira turma do já extinto [CRIE_TI](https://www.univates.br/crieti), em que atuei como tutor e professor secundário, junto a professores de mercado e ao coordenador, Fabrício Pretto. O canal continuou e, em 2023, comecei como professor solo em turmas de Jovem Aprendiz TI, ensinando (ou tentando ensinar) jovens a programar. Na metade de 2023, fui chamado, de maneira emergencial, para o Curso Técnico de Informática da Univates, no qual dou aulas até hoje. Em julho de 2026, fiz o processo seletivo e comecei na graduação, dando aulas presencial e remotamente nos cursos de Engenharia de Software, Engenharia da Computação, Gestão de TI, Sistemas de Informação e Dados. Em paralelo, ministrei várias oficinas para professores e para o público em geral. O canal continua e, nos últimos 4 anos, estive em contato com diferentes níveis de formação, o que serve de contexto para o restante do texto.

## Gepeteco: gere um subtítulo

"ChatGPT, revise esse código para mim e me diga quais diferentes formas eu poderia ter utilizado para resolver". Esse foi um dos primeiros prompts que usei quando comecei a pedir para o gepeteco me ajudar com código. Na época, em 2023, muito se falava da qualidade do prompt, da forma como o pedido era feito, dos exemplos fornecidos e da ferramenta como apoio. Pois bem, três anos depois, e com a IA para desenvolvimento de código muito mais evoluída, a história mudou. Dificilmente alguém escreve um prompt como esse hoje. Provavelmente será só um "faz para mim", um "arruma esse bug" ou até mesmo um copiar e colar, sem ao menos ler o que está escrito ali. Fica aqui a menção ao desenvolvimento agêntico e às melhores formas de desenvolver com IA, que não caberiam neste post.

Mas vamos lá. Ao ver a tecnologia surgindo e avançando, fiquei fascinado, tanto como aluno quanto como professor, e mais ainda como desenvolvedor. Poderíamos acelerar muitas coisas, criar ferramentas antes impensáveis e pensar em coisas maiores para resolver problemas. Bom, eu me iludi em certos pontos. Muitos dos jovens alunos (e eu também, em alguns momentos) veem a ferramenta como a solução para aquela tarefa chata que não estamos a fim de fazer. O problema: isso vicia. É legal dar um prompt, ver 88 agentes conversando entre si e resolvendo uma tarefa e, quando vemos, voilà, não entendemos nada do que foi feito.

Mas não entenda mal a frase final do parágrafo anterior, isso não é necessariamente um problema. Como o próprio Deyvin traz no vídeo, há projetos em que não temos tempo de entender, linha por linha, tudo o que foi feito e realmente aprender. Entretanto, se não pensarmos ou não tirarmos um tempo para aprender, seremos meros proxies burros (saudações ao Filipe Deschamps, que usou essa expressão em um [vídeo clássico de quase 3 horas que recomendo assistir](https://www.youtube.com/watch?v=vaFHawMRsps)). E isso sim me preocupa, afinal, se não movimentarmos o cérebro, se não exercitarmos a habilidade de aprender, o que será de nós?

## Uso de IA no aprendizado

Agora sim, dado o contexto e essa visão inicial, como tenho percebido o uso de IA no aprendizado? Bom, primeiro as partes boas... sinto que, como professor, consigo entregar mais. Consigo gerar materiais interativos e dinâmicos, em que o estudante pode clicar, ver o resultado e entender que, ao usar `justify-content: space-between` (dependendo do `flex-direction`), o espaço livre é distribuído entre os elementos, e VER ISSO ACONTECENDO. Além disso, algumas tarefas repetitivas do meu dia a dia como professor também foram aceleradas, como a busca por notícias e artigos e a geração de slides (sim, eu não gosto de fazer slides, então crio o conteúdo em markdown estruturado e depois o [Kami](https://kami.tw93.fun/) faz a magia acontecer e gera as "lâminas").

![Playground do material de revisão de React Native: com justifyContent em space-between, o espaço livre é distribuído entre as caixas](/images/uploads/flexbox-space-between.png)

*Print do material de revisão de React Native, por isso a propriedade aparece como `justifyContent`, o equivalente ao `justify-content` do CSS.*

Porém, nem tudo são flores. Sinto que vários estudantes preferem pular etapas. Conteúdos de base, como estruturas de dados, orientação a objetos e algoritmos, acabam sendo "acelerados" e não praticados, gerando um "finjo que faço".

E esse "finjo que faço" não é só impressão minha. Um estudo publicado na PNAS deu acesso ao GPT-4 para quase mil alunos de ensino médio nas aulas de matemática. Com a ferramenta, as notas subiram 48%. Quando ela foi retirada, o desempenho desses alunos ficou 17% abaixo do de quem nunca teve acesso ([Bastani et al., 2025](https://doi.org/10.1073/pnas.2422633122)). Uma versão configurada como tutor, que dava dicas em vez de respostas, evitou boa parte dessa queda — funcionando como apoio, quem diria.

Mais perto da minha realidade, na Universidade Técnica de Munique, 275 alunos de uma disciplina introdutória de programação fizeram um exercício de 90 minutos sobre concorrência, divididos em três grupos: ChatGPT liberado, um tutor que só dava dicas e sem IA ([Bassner et al., 2025](https://doi.org/10.1016/j.caeai.2025.100537)). Os dois grupos com IA tiraram notas bem maiores e se frustraram menos. Nos testes de conhecimento antes e depois, e numa tarefa de compreensão de código, nenhum deles foi melhor do que quem fez sem IA. O tutor também não fez ninguém aprender mais, mas foi o único que aumentou a motivação dos alunos. Mesmo assim, os alunos acharam o ChatGPT, que podia entregar a solução completa, mais fácil de usar e mais útil. Os autores chamam isso de "armadilha do conforto": o aluno prefere o que menos o ajuda a aprender. Ou seja, a nota sobe e o aprendizado fica onde estava. E aqui vai uma frase de coach: **aprender não é confortável**, ainda mais quando somos muito desafiados.

Qual o problema disso tudo? Se não soubermos quais caminhos seguir, ou não soubermos o básico do básico, como vamos saber se o que um modelo está gerando é bom? Aliás, qual é a definição de bom? Isso traz desafios interessantes. Pedir **somente** código já não é tão didático, e é aí que entram estratégias e formas de pensar diferentes para tentarmos equilibrar as coisas, afinal os alunos também podem não ter noção de que aquilo que estão delegando para a IA vai ser importante lá na frente.

## Estratégias de mitigação e considerações finais

Continuo achando que escrever código é importante, afinal só saberemos interpretá-lo se entendermos o que ele realmente faz e, na minha visão, nada melhor do que escrever para aprender. Mas só isso já não basta. Eu, como professor, preciso pensar em outras estratégias de avaliação, sem focar puramente em código quando o componente permite. E aí vem o desafio: preciso me atualizar, pensar, desenhar, descrever e simular ainda mais, olhar por perspectivas diferentes, para atingir os mesmos objetivos de aprendizado, que giram em torno do entendimento daquele conhecimento e do que o rodeia — mas ser professor é isso, não? Bom, pelo menos deveria ser. Mas não entenda isso como generalização, leve em conta que sou professor universitário. Professores da educação básica (educação infantil, ensino fundamental e ensino médio) têm outros desafios, bem mais urgentes do que esse, e sobre eles eu nem posso opinar, afinal não é o meu dia a dia.

Os próprios autores do estudo de Munique concluem que precisamos de formas de avaliação que funcionem num cenário em que o desempenho não mostra mais, de forma confiável, se o aluno entendeu. É o que comentei acima, e por isso venho testando algumas coisas:

- o aluno me explica o código que entregou, por que foi feito assim e o que acontece se mudar uma linha;
- peço uma alteração na aplicação na hora, em aula;
- ensino a pedir "me dá uma dica" ou "onde está meu erro, sem me dar a resposta" em vez de "faz pra mim";
- estruturas de dados, algoritmos e OO continuam sendo escritos por eles, na mão;
- antes de qualquer código, o aluno precisa entender onde quer chegar, quebrando o problema em partes menores e sabendo o que cada uma precisa fazer. Só assim, quando o uso de IA é incentivado, dá para conferir se o que ela gerou está certo.

![Fluxo de uso da IA no aprendizado: entender onde quer chegar, quebrar o problema em partes, tentar na mão, pedir uma dica, conferir o resultado e explicar o código](/images/uploads/fluxo-ia-aprendizado.svg)

Lembro daquele prompt de 2023: "revise esse código para mim e me diga quais diferentes formas eu poderia ter utilizado para resolver". Eu pedia para a IA me ensinar a resolver, e é esse uso que quero ver nos meus alunos em sua fase inicial de aprendizado. Por isso insisto em não pular etapas. Aprender a programar é como ir à academia: ninguém ganha músculo vendo outra pessoa levantar peso (e, convenhamos, a IA levanta muito bem, rsrs). A IA veio para ficar e eu sigo usando todos os dias, depois de quase 10 anos de jornada técnica e 7 de ensino. Mas, seja no técnico ou na graduação, quem está aprendendo ainda precisa saber dizer se o que ela gerou está certo e faz sentido e, o mais fundamental, precisa estar aprendendo.

## Referências

- BASTANI, H. et al. [Generative AI without guardrails can harm learning: Evidence from high school mathematics](https://doi.org/10.1073/pnas.2422633122). *Proceedings of the National Academy of Sciences (PNAS)*, 2025.
- BASSNER, P. et al. [Less stress, better scores, same learning: The dissociation of performance and learning in AI-supported programming education](https://doi.org/10.1016/j.caeai.2025.100537). *Computers and Education: Artificial Intelligence*, 2025.
- MANO DEYVIN. [Vibe coding está criando IDIOTAS confiantes](https://www.youtube.com/watch?v=_cKniWsyzyc). YouTube, 2026.
- DESCHAMPS, F. [O Fim da Programação: Minha Opinião DEFINITIVA](https://www.youtube.com/watch?v=vaFHawMRsps). YouTube, 2025.

// see you later
