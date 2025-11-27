+++
title = "Projetos"
description = "Projetos criados"
aliases = ["projects","projetos"]
commentable = true
+++

<!-- omit in toc -->
## Acesso rápido
- [Pets RS](#pets-rs)
- [Pets Vale do Taquari](#pets-vale-do-taquari)
- [Prefa](#prefa)
- [Universidade Brasileira Livre](#universidade-brasileira-livre)
- [municipios.dev](#municipiosdev)
- [ROVEEb](#roveeb)
- [Sorteador](#sorteador)

## [Pets Vale do Taquari](petsvaledotaquari.com.br/)

O [Pets RS](petsrs.com.br) é um projeto criado em 6h em parceria com o Zeno Sbardellotto Júnior e o Fabrício Pretto. Esse projeto foi pensado para ajudar a os animaizinhos atingidos pelas enchentes de setembro que o Vale do Taquari (RS) sofreu e é totalmente voluntário. O projeto é a evolução do Pets Vale do Taquari e foi expandido para o estado do Rio Grande do Sul em virtude das enchentes de Maio/2024.

![petsrs.com.br](/images/uploads/petsrs.png)

O projeto foi reconhecido pelo Estado do RS como plataforma oficial de reencontro de tutores e animais perdidos. Além disso, contou com mais de 100 voluntários, seja cadastrando, automatizando, trabalhando com IA, respondendo pessoas em busca de seus animais, apoiando nos abrigos ou buscando tutores.


<!-- omit in toc -->
### Infraestrutura
- **Strapi CMS**: gerenciar os dados
- **PostgreSQL**: banco de dados
- **Amazon SES**: envio de e-mails
- **Amazon S3**: armazenamento de imagens
- **Amazon Cloudfront**: CDN para entrega das imagens
- **PM2**: executar o Strapi CMS
- **NGINX**: proxy reverso
- **Cloudflare**: DNS e SSL
- **Github Actions**: pipeline de deploy
- **IA própria**: modelos usando ML para busca de animais similares

<!-- omit in toc -->
### Mídia
Materias e entrevistas sobre o projeto
- [PetsRS Dataset : a benchmark and baseline for pet recognition in a climate disaster scenario](https://lume.ufrgs.br/handle/10183/279189)
- [GRAD - Grupo de Respostas a Animais em Desastres](https://gradbrasil.org.br/reencontro-de-animais-resgatados-com-seus-tutores-no-rio-grande-do-sul/)
- [Governo do RS](https://www.facebook.com/GovernoDoRS/videos/a-primeira-feira-de-ado%C3%A7%C3%A3o-respons%C3%A1vel-de-c%C3%A3es-e-gatos-resgatados-nas-enchentes-/444386955067301/)
- [Band News](https://www.youtube.com/watch?v=z1pkWx9tACQ)
- [Terra - Site ajuda a reencontrar animais desaparecidos em todo o RS](terra.com.br/noticias/site-ajuda-a-reencontrar-animais-desaparecidos-em-todo-o-rs,71cd94c90bb3a50f098ce8a2ce7194e3a7qksbns.html)
- [Canaltech - Redes sociais ajudam a encontrar animais perdidos](https://canaltech.com.br/redes-sociais/chuvas-no-rs-redes-sociais-ajudam-a-encontrar-animais-perdidos-288373/)
- [Veja - Tutores vivem reencontros emocionantes com seus pets no RS](https://veja.abril.com.br/comportamento/tutores-vivem-reencontros-emocionantes-com-seus-pets-no-rs/)
E várias outras não mapeadas..

## [Pets Vale do Taquari](petsvaledotaquari.com.br/)

O [Pets Vale do Taquari](petsvaledotaquari.com.br) é um projeto criado em 6h em parceria com o Zeno Sbardellotto Júnior e o Fabrício Pretto. Esse projeto foi pensado para ajudar a os animaizinhos atingidos pelas enchentes de setembro que o Vale do Taquari (RS) sofreu e é totalmente voluntário.

![petsvaledotaquari.com.br](/images/uploads/petsvaledotaquari.png)

Já conta com mais de 1000 seguidores no Instagram, mais de 6000 visitantes únicos e vários pets encontrados.


<!-- omit in toc -->
### Infraestrutura
- **Strapi CMS**: gerenciar os dados
- **PostgreSQL**: banco de dados
- **Amazon SES**: envio de e-mails
- **Amazon S3**: armazenamento de imagens
- **Amazon Cloudfront**: CDN para entrega das imagens
- **PM2**: executar o Strapi CMS
- **NGINX**: proxy reverso
- **Cloudflare**: DNS e SSL
- **Github Actions**: pipeline de deploy
- **Cloudflare Pages**: frontend desenvolvido pelo Zeno (VueJS)

Esboço da infraestrutura usada no projeto:
![Infraestrutura petsvaledotaquari.com.br](/images/uploads/infra-pets.jpg)

Pipelines que são usadas no projeto:
![Infraestrutura petsvaledotaquari.com.br](/images/uploads/pipelines-pets.jpg)

<!-- omit in toc -->
### Mídia
Materias e entrevistas sobre o projeto
- [G1 - Ciclone no RS: ONG ajuda a reunir tutores e animais perdidos durante enchentes](https://g1.globo.com/rs/rio-grande-do-sul/noticia/2023/09/19/ciclone-no-rs-ong-ajuda-a-reunir-tutores-e-animais-perdidos-durante-enchentes.ghtml)
- [Agora no Vale - Portal "Pets do Vale do Taquari" ajuda na localização de animais perdidos na enchente](https://agoranovale.com.br/noticias/valedotaquari/portal-pets-do-vale-do-taquari-ajuda-na-localizacao-de-animais-perdidos-na-enchente/)
- [Diário Gaúcho - Vale do Taquari: site reúne pets e seus donos após enchentes](https://diariogaucho.clicrbs.com.br/rs/dia-a-dia/noticia/2023/09/vale-do-taquari-site-reune-pets-e-seus-donos-apos-enchentes-34130840.html)
- [Jornal do Almoço](https://www.instagram.com/p/Cxa9N96LMht/)
- [Rádio Gaúcha](https://soundcloud.com/radiogaucha/mateus-roveda-engenheiro-de-software-e-um-dos-idealizadores-do-pets-vale-do-taquari-20092023?si=5e261549fd8a4b289bffe8a2efec0a69&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing)
- [Univates - Professor, estudante e diplomado da Univates criam portal para ajudar na localização de animais perdidos durante enchente](https://www.univates.br/noticia/34253-professor-estudante-e-diplomado-da-univates-criam-portal-para-ajudar-na-localizacao-de-animais-perdidos-durante-enchente)
- [Record RS TV](https://www.youtube.com/watch?v=s00s_EJ2pm4)
- [Grupo A Hora - Em busca da solução](https://grupoahora.net.br/conteudos/2023/09/22/numero-de-animais-em-abrigos-cresce-apos-a-enchente/)

## [Prefa](https://prefa.digital)

Empresa com foco em desenvolvimento de soluções inteligentes para governo. Originada do trabalho de conclusão de curso dos alunos Zeno Sbardellotto Júnior e Mateus Roveda, com orientação do Fabrício Pretto.

![Prefa Digital](/images/uploads/prefadigital.png)

A Prefa visa tornar as rotinas das pessoas mais práticas e simples. Por enquanto, dois produtos estão em desenvolvimento:
- **Prefa 156**: Plataforma de comunicação e de centralização de informações e solicitações
- **LOGI**: Ferramenta para auxiliar na entrega de doações. Criado para auxiliar o Vale do Taquari na enchente de setembro de 2023.

<!-- omit in toc -->
### Mídia
- [Univates - Estudantes criam solução tecnológica para Prefeituras](https://www.univates.br/noticia/33390-estudantes-criam-solucao-tecnologica-para-prefeituras)
- [Prefeitura POA - Anunciadas as 15 startups selecionadas para o Acelera X – POA inovadora](https://prefeitura.poa.br/gi/noticias/anunciadas-15-startups-selecionadas-para-o-acelera-x-poa-inovadora)
- [Pro_move Lajeado - Ideias Selecionadas](https://www.promovelajeado.com.br/_files/ugd/b0b896_c09d379bacaa486da2cea3304641532e.pdf)

![Prefa 156](/images/uploads/prefa156.png)

## [Universidade Brasileira Livre](https://ulivre.dev)

Organização sem fins lucrativos fundada em 2021 que organiza o conteúdo online em português para aumentar o acesso de Brasileiros a educação.

O projeto nasceu inspirado na OSSU e foi criado pelo Camilo de Cunha Azevedo.

Já conta com mais de 10.000 estrelas no Github e diversos estudantes consumindo os materiais.

![ULivre](/images/uploads/ulivre.png)

<!-- omit in toc -->
### Mídia
- [Universidade Livre: Um caminho para a educação autodidata em Ciência da Computação](https://plus.diolinux.com.br/t/universidade-livre-um-caminho-para-a-educacao-autodidata-em-ciencia-da-computacao/37540)
## [municipios.dev](https://github.com/mateusrovedaa/municipios.dev)

API para retornar informações do portal https://www.ibge.gov.br/cidades-e-estados/ e pesquisar o website de prefeituras, para facilitar quem precisa dessas informações.

![municipios.dev](/images/uploads/municipiosdev.png)

## [ROVEEb](https://roveeb.com)

Nasceu como um canal no youtube no dia 07/03/2020. De lá para cá, cresceu e já conta com mais de 8.000 inscritos e diversos vídeos de diversas áreas. Além disso, o site em que você está lendo faz parte dessa comunidade, com posts e informações para auxiliar na área da TI e, principalmente, em software livre.

![ROVEEb](/images/uploads/roveeb.png)

- [Canal no Youtube](https://youtube.com/ROVEEb)

## [Sorteador](https://github.com/mateusrovedaa/sorteador)

Sistema de sorteio criado para o Tech Talks Day, um evento organizado pelo Diretório Acadêmico da Univates.

Essa aplicação está construida no formato de API e Front-end, utiliza da linguagem TypeScript e do Sequelize para comunicação com banco de dados.

As pessoas que estão no evento colocam seus nomes e, aleatóriamente, são sorteadas.

![sorteador](/images/uploads/sorteador.png)