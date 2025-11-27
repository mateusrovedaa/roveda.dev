---
title: Como criar pendrive bootável pelo terminal
url: /post/criar-pendrive-bootavel-terminal
author: Mateus Roveda
date: '2022-05-17'
categorias:
  - tutoriais
tags:
  - terminal
  - pendrive
  - bootavel
---

# Criar pendrive bootável pelo terminal

Como um bom utilizador das distribuições GNU/Linux, estou constantemente criando pendrives bootáveis.

Não é uma tarefa difícil, mas não gosto de depender de softwares para algo funcionar. Então, o tutorial abaixo será de como criar um pendrive bootável utilizando somente a linha de comando.

Caso queira, fiz um vídeo ensinando:
<iframe width="100%" height="630" src="https://www.youtube.com/embed/mlFIRzlHIzs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


## Download da ISO do sistema

O primeiro passo para conseguir criar um pendrive bootável pelo terminal é baixar uma ISO de um sistema que deseja instalar.

No tutorial estarei utilizando uma imagem do Linux Mint 20 como exemplo.

## Descoberta do pendrive

Após termos a ISO baixada, precisamos descobrir o nome/diretório onde o nosso pendrive está montado. Lembre-se que para esse passo é
necessário ter espetado o pendrive na máquina.

Para descobrir tal informação, basta rodar o comando
```bash
df -h
```

Uma saída parecida com essa será mostrada:

![saída comando df no terminal](/images/uploads/df.png)

No exemplo, o caminho para o meu pendrive é `/dev/sda1`.

Como podemos visualizar na imagem, o meu pendrive é o último dispositivo. Não é uma afirmação, mas na maioria dos casos ele aparece listado por último. Você pode verificar pelo nome dele ou até pelo espaço utilizado. (adicione um `-h` ao comando `df` para ter uma melhor visualização da saída)

## Criação do pendrive bootável

Agora que já temos a ISO baixada e a informação de onde o nosso pendrive está montado, podemos utilizar um comando mágico que irá criar o pendrive bootável para nós. Não vou entrar em muitos detalhes, mas vamos utilizar o comando `dd` para realizar essa tarefa. Caso queira ler um pouco mais, [aqui vai um post](https://www.linuxdescomplicado.com.br/2016/11/alguns-exemplos-de-que-o-comando-dd-pode-ser-considerado-umas-das-ferramentas-mais-versateis-do-linux.html) bem bacana falando sobre ele.

O comando utilizado para fazer isso é o:
```bash
sudo dd if=/caminho-para-a-iso of=/caminho-pendrive bs=4M status=progress
```

Ou seja, no trecho `if=/caminho-para-a-iso` altere para o caminho de onde você salvou a ISO do sistema. Ex.: `if=/home/mateus/Downloads/linux-mint-20.iso`. Já no trecho `of=/caminho-pendrive` é o caminho para o pendrive. Como vimos na imagem da seção anterior, o caminho para o meu pendrive é `/dev/sda1`, então, o meu of ficaria: `of=/dev/sda1`.

Exemplo do comando preenchido:
```bash
sudo dd if=/home/mateus/Downloads/linux-mint-20.iso of=/dev/sda1 bs=4M status=progress
```

Para finalizar, só dar um ENTER e aguardar o processo executar. Ao final, seu pendrive já será bootável e você poderá utilizá-lo para instalar o sistema desejado seja na sua máquina ou em outras máquinas.

E ai, curtiu o tutorial? Deixa teu comentário aqui em baixo com sugestões :-)

// see you later

