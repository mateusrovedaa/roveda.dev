---
title: "Como guardo meus dados na nuvem"
date: 2020-12-29T16:38:43-03:00
draft: false
author: Mateus Roveda
categorias:
  - software livre
  - privacidade
  - segurança
tags:
  - nextcloud
  - dados pessoais
  - personalização
  - linux
  - GNU
  - contabo
---

![Nextcloud logo](/images/uploads/nextcloud.png)

É cada vez mais difícil confiar em quem promete privacidade, segurança e disponibilidade. Muitos serviços têm plano grátis, mas com termos confusos que abrem brecha para venda de dados. Aqui mostro como guardo meus arquivos e que estrutura uso.

Uso ferramentas livres sempre que posso. Software livre me dá controle total dos dados e abre espaço para personalizar conforme meu uso.

Uso [Nextcloud](https://nextcloud.com/), uma nuvem livre bem expansível. Tenho um vídeo no canal [ROVEEb](https://www.youtube.com/roveeb) onde mostro como montar um servidor com Nextcloud + Docker + Let's Encrypt, rápido e direto. Lá também tem outro vídeo sobre os apps essenciais para a nuvem.

<iframe width="100%" height="400" src="https://www.youtube.com/embed/48rYcegMWgc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen loading="lazy"></iframe>

O [Nextcloud](https://nextcloud.com/) nasceu de um fork do ownCloud, criado por Frank Karlitschek, um dos fundadores do ownCloud. O fork aconteceu quando o ownCloud mudou políticas e passou a focar no comercial, deixando a cultura do software livre de lado.

Por que uso [Nextcloud](https://nextcloud.com/)? Não confio em [Google Drive](https://drive.google.com) ou [Dropbox](https://www.dropbox.com/pt_BR/) para dados pessoais. Mesmo com grande fatia de mercado e proteção contra ataques, os termos são confusos e deixam brecha para venda de dados. No Nextcloud, instalo só o que preciso, com apps da comunidade que ampliam as funções.

Hoje rodo em uma VPS da [Contabo](https://contabo.com/) — jurisdição razoável para privacidade, preço acessível e boa para o que preciso. Por estudos, agora não uso Docker, mas já usei e ainda uso esse repositório em instalações para parceiros.

O [Nextcloud](https://nextcloud.com/) consome pouco recurso. Só pesa quando uso o OnlyOffice para planilhas ou apresentações. Fora isso, fica abaixo de 500MB de RAM no meu monitoramento.

Instalar apps é ótimo, mas exige cuidado. Um app mal escolhido pode criar brecha de segurança, privacidade ou desempenho. Os que uso no dia a dia e não abro mão:

- [Two-Factor TOTP Provider](https://github.com/nextcloud/twofactor_totp#readme): habilita 2FA na instância. Para mim, é essencial.
- [OnlyOffice](https://www.onlyoffice.com/): edito planilhas, textos e apresentações 100% online via Document Server. Está em evolução e já tem bastante recurso.
- [Notes](https://github.com/nextcloud/notes): troquei o Joplin por ele. Edito notas na web e no celular, com Markdown.
- [Deck](https://github.com/nextcloud/deck): troquei o Trello por ele para fluxos de leitura e tarefas. Ainda falta data de término, capas e há alguns bugs, mas atende bem.
- [News](https://github.com/nextcloud/news): centralizo feeds das minhas fontes de informação e leio tudo em um lugar.
- [Keeweb](https://github.com/jhass/nextcloud-keeweb): uso KeePass para senhas. Quando preciso pegar uma senha rápido na web, abro o banco pelo Keeweb e edito direto.
- [Contacts](https://github.com/nextcloud/contacts#readme): todos os contatos aqui. Ainda tem pontos a melhorar, mas não perco mais contatos ao trocar de chip ou celular.
- [Calendar](https://github.com/nextcloud/calendar/): meu calendário principal. Integra com Deck e Tasks.
- [Mail](https://github.com/nextcloud/mail#readme) e [RainLoop](https://github.com/pierre-alain-b/rainloop-nextcloud): Mail tem interface integrada ao Nextcloud, bonito de ver, mas ainda precisa melhorar. Por isso testo o RainLoop junto e estou satisfeito.

#### Mais sobre aplicativos

<iframe width="100%" height="400" src="https://www.youtube.com/embed/ZbqiFASh6KM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen loading="lazy"></iframe>

Além da nuvem, mantenho cópia em HD externo para o caso de falha (nunca se sabe). Planejo levar o backup para um bucket, mas o custo ainda não cabe.

O [Nextcloud](https://nextcloud.com/) também pode ser comercial: dá para hospedar para parceiros ou dividir com amigos e cobrar por conta para custear o servidor. Para uso pessoal, você já ganha privacidade e controle total para deixar do seu jeito.

E você, como guarda suas informações?

// see you later
