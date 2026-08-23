---
title: Como criar pendrive bootável pelo terminal
date: 2022-05-17
author: Mateus Roveda
categorias:
  - tutoriais
tags:
  - terminal
  - pendrive
  - bootavel
---

# Criar pendrive bootável pelo terminal

Uso GNU/Linux e vivo criando pendrives bootáveis. Não gosto de depender de programas gráficos para isso, então aqui vai o passo a passo só com linha de comando.

Se preferir, tem vídeo:

<iframe width="100%" height="400" src="https://www.youtube.com/embed/mlFIRzlHIzs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen loading="lazy"></iframe>

## Download da ISO do sistema

Primeiro baixe a ISO do sistema que vai instalar. No exemplo uso Linux Mint 20.

## Descoberta do pendrive

Com a ISO baixada, descubra onde o pendrive foi montado. Espete o pendrive na máquina e rode:

```bash
df -h
```

Saída parecida com esta:

![saída comando df no terminal](/images/uploads/df.png)

No exemplo, o caminho é `/dev/sda1`. Na imagem, é o último dispositivo. Normalmente aparece por último, mas confirme pelo nome ou pelo espaço usado. Use `df -h` para ver tamanhos legíveis.

## Criação do pendrive bootável

Com a ISO e o caminho do pendrive, use o `dd`. Para entender melhor o comando, veja [este post](https://www.linuxdescomplicado.com.br/2016/11/alguns-exemplos-de-que-o-comando-dd-pode-ser-considerado-umas-das-ferramentas-mais-versateis-do-linux.html).

O comando é:

```bash
sudo dd if=/caminho-para-a-iso of=/caminho-pendrive bs=4M status=progress
```

Troque `if=/caminho-para-a-iso` pelo caminho da ISO. Ex.: `if=/home/mateus/Downloads/linux-mint-20.iso`. Troque `of=/caminho-pendrive` pelo caminho do pendrive. No exemplo, `of=/dev/sda1`.

Exemplo preenchido:

```bash
sudo dd if=/home/mateus/Downloads/linux-mint-20.iso of=/dev/sda1 bs=4M status=progress
```

Dê ENTER e aguarde. No fim, o pendrive já estará bootável para instalar na sua máquina ou em outra.

Tem sugestão? Deixe nos comentários.

// see you later
