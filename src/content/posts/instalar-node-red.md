---
title: Instalação do Node-RED
date: 2022-05-17
author: Mateus Roveda
categorias:
  - tutoriais
tags:
  - node-red
  - low-code
---

# Node-RED

O Node-RED tem crescido em integrações e automações. O diferencial é ser low-code, com curva baixa e muitas aplicações.

No canal [ROVEEb](https://www.youtube.com/roveeb) estou publicando uma série onde construo, do zero, um bot que avisa no Telegram a cada vídeo novo no YouTube. Isso corta trabalho manual de divulgação e deixa o fluxo mais confiável.

Aqui transcrevo a Aula 02: instalação do Node-RED como serviço em distribuições baseadas no Debian (Ubuntu, por exemplo), para rodar em servidores.

Se preferir, veja o vídeo.

<iframe width="100%" height="400" src="https://www.youtube.com/embed/TVU_qkelFmU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen loading="lazy"></iframe>

## Instalar o Node-RED

A instalação usa um script da própria [documentação](https://nodered.org/docs/getting-started/raspberrypi) do Node-RED.

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
5. Agora o Node-RED já está instalado como serviço. Para iniciar sempre que o sistema reiniciar, rode `sudo systemctl enable nodered.service`. Para desativar, `sudo systemctl disable nodered.service`.
6. Para controlar o Node-RED:
   ```
   sudo node-red-start
   sudo node-red-stop
   sudo node-red-restart
   sudo node-red-log
   ```
7. Se estiver local, acesse http://localhost:1880;
8. Também dá para expor via NGINX. Veja [este guia](https://discourse.nodered.org/t/node-red-server-with-nginx-reverse-proxy-howto-guide/27397).

## Desinstalar o Node-RED

A remoção é direta, mesmo com serviço.

1. Pare o Node-RED/serviço;
   ```
   sudo node-red-stop
   sudo systemctl stop nodered
   ```
2. Remova a inicialização ao reiniciar;
   ```
   sudo systemctl disable nodered
   ```
3. Remova o Node-RED;
   ```
   sudo npm -g remove node-red
   sudo npm -g remove node-red-admin
   ```
4. Se o NodeJS não for usado em outra aplicação, pode ser removido;
   ```
   sudo apt remove nodejs
   ```
5. Remova a pasta do Node-RED (se instalou como root, fica na home desse usuário).
   ```
   sudo su -
   rm -rf ~/.node-red
   ```
6. Procure por restos e remova se houver.
   ```
   find / | grep nodered
   ```

// see you later
