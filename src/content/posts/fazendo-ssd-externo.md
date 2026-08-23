---
title: "Fazendo um SSD Externo confiável e com custo reduzido"
date: 2024-12-29T16:06:02-03:00
draft: false
author: Mateus Roveda
categorias:
  - tutoriais
tags:
  - hd-externo
  - hardware
---

# Fazendo um SSD Externo confiável e com custo reduzido

Meu HD externo morreu depois de 5 anos guardando vídeos e backups do Nextcloud. Em vez de comprar outro pronto, montei um SSD externo. Ficou mais barato, mais rápido e com manutenção simples.

## O problema dos HDs Externos

![hd-externo](/images/uploads/hd-externo.png)

HD externo é um disco rígido em case USB (ou Type-C) para levar arquivos ou fazer backup, como fotos e vídeos de viagem. Usei um por 5 anos para guardar vídeos e uma cópia do [Nextcloud](https://roveeb.com/como-guardo-meus-dados-na-nuvem/). Funcionou bem, mas exige cuidado no transporte por ser mecânico.

Um dia ele parou de funcionar. Abri para entender. Com ajuda do [Régis Tomkiel](https://www.youtube.com/@TomkielTV) consegui uma controladora parecida com a da foto abaixo. A ideia era trocar e recuperar os arquivos, mas ao abrir o case vi que a controladora era soldada no disco e não dava para trocar sem um trabalho que não valia a pena. Eu já tinha cópia em outro lugar.

![placa](/images/uploads/placa.png)

O susto me fez procurar uma solução com mais controle: poder aumentar a capacidade, usar o disco interno num PC e trocar só o case. E usar SSD, que é bem mais rápido que HD.

## Montando um SSD Externo

Eu já tinha reaproveitado cases de HD de notebook para copiar dados, mas nunca tinha colocado SSD neles — o tamanho é o mesmo. Encontrei cases por cerca de R$30 em 2024 (hoje já vi por R$13 na Amazon). Não deixo link porque não avaliei a procedência. O que usei está aqui: [case na Amazon](https://amzn.to/3BWMhWE).

![placa](/images/uploads/case.png)

O case aceita HD SATA de notebook e SSD de 2,5". Comprei um SSD WD Green de 480GB por R$210. Você pode usar qualquer SSD 2,5" — inclusive montar um de 1TB. Por que montar em vez de comprar pronto? Se a controladora queimar, você troca só o case por R$30 ou liga o SSD direto no PC. Também dá para trocar o SSD depois sem depender do fabricante.

![ssd](/images/uploads/ssd.png)

Monte as partes e, ao conectar pela primeira vez, formate. Recomendo exFAT para usar em Windows, GNU/Linux e macOS.

O resultado: meu SSD externo de 480GB. Custo total R$240, mais barato que HDs externos lentos e que SSDs prontos de 512GB que vi por R$360. Uso há 8 meses. É rápido e não preciso me preocupar em carregar na mochila.

![ssd](/images/uploads/projetossd.png)

## Quanto custa e o que vale

Com menos de R$250 você monta um SSD externo mais rápido, durável e fácil de manter. Mantenha sempre outra cópia, como no Nextcloud, para não depender de um único disco.

//see you later
