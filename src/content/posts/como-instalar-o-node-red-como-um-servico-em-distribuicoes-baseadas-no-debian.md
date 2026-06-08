---
title: Como instalar o Node-RED como um serviço em distribuições baseadas no Debian
date: 2020-12-24T10:05:51-03:00
author: Mateus Roveda
categorias:
  - node-red
  - software livre
  - tutoriais
tags:
  - sysadmin
  - devops
  - debian
---

![Node-RED logo](/images/uploads/node-red.png)

O Node-RED vem crescendo e expandindo suas fronteiras na utilização em integrações e automações. Seu principal diferencial é ser uma ferramenta low-code, tendo uma curva de aprendizado bem baixa e podendo ser utilizada para muitas aplicações.

No canal onde eu produzo vídeos, [ROVEEb](https://www.youtube.com/roveeb), estou construindo uma série de vídeos onde irei mostrar do início a construção de um bot que notifica no Telegram a cada vídeo novo postado no Youtube, facilitando assim a interação, reduzindo meu esforço em divulgação e construindo um processo com menos falhas.
Nesse post, vou ensinar (transcrever) o que ensinei na Aula 02 dessa série, ou seja, a instalação do Node-RED em distribuições baseadas no Debian (Ubuntu, por exemplo) como um serviço, podendo assim ser utilizado em servidores.

Caso você prefira, pode assistir o tutorial feito em vídeo.

<iframe width="100%" height="400" src="https://www.youtube.com/embed/TVU_qkelFmU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen loading="lazy"></iframe>

<br>

# Instalar o Node-RED

A instalação será feita utilizando um script disponibilizado na própria [documentação](https://nodered.org/docs/getting-started/raspberrypi) do Node-RED.

1. Instalar os pacotes essenciais na sua distribuição;
   ```
   sudo apt install build-essential git
   ```
2. Alternar para o usuário root;
   ```
   sudo su -
   ```
3. Executar o script disponibilizado;
   ```
   bash <(curl -sL https://raw.githubusercontent.com/node-red/linux-installers/master/deb/update-nodejs-and-nodered)
   ```
4. Responder as perguntas com as seguintes opções:
   * Are you really sure you want to install as root ? (y/N) ? y
   * Are you really sure you want to do this ? \[y/N] ? y
   * Would you like to install the Pi-specific nodes ? \[y/N] ? n
5. Agora o Node-RED já se encontra instalado como um serviço, para iniciá-lo toda vez que o sistema reiniciar, é necessário rodar o comando `sudo systemctl enable nodered.service`. Para desativar, basta rodar o comando `sudo systemctl disable nodered.service`.
6. Para controlar o Node-RED, são utilizados os seguintes comandos:
   ```
   sudo node-red-start
   sudo node-red-stop
   sudo node-red-restart
   sudo node-red-log
   ```
7. Utilize, caso esteja rodando localmente, a URL http://localhost:1880 para acessar o Node-RED;
8. Também é possível utilizar o NGINX para poder acessar o Node-RED por um endereço, a configuração você pode encontrar [nesse tópico](https://discourse.nodered.org/t/node-red-server-with-nginx-reverse-proxy-howto-guide/27397).

# Desinstalar o Node-RED

A remoção do Node-RED é simples, mesmo como instalado como um serviço.

1. Pare o Node-RED/serviço;
   ```
   sudo node-red-stop
   sudo systemctl stop nodered
   ```
2. Remova a inicialização do Node-RED ao reiniciar o sistema;
   ```
   sudo systemctl disable nodered
   ```
3. Remova o Node-RED;
   ```
   sudo npm -g remove node-red
   sudo npm -g remove node-red-admin
   ```
4. Caso o NodeJS não seja usado para outra aplicação, também pode ser removido;
   ```
   sudo apt remove nodejs
   ```
5. Remova a pasta do Node-RED (se a instalação foi como usuário root, a pasta se encontra na home desse usuário).
   ```
   sudo su -
   rm -rf ~/.node-red
   ```
6. Rode o comando find para encontrar se ainda existem pastas ou arquivos relacionados ao Node-RED. Caso existam, basta remove-las.
   ```
   find / | grep nodered
   ```

// see you later
