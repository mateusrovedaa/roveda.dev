---
title: "Configurando o N8N com NGINX em um servidor"
date: 2025-05-17T16:15:33-03:00
draft: false
author: Mateus Roveda
categorias:
  - tutoriais
tags:
  - n8n
  - nginx
  - devops
---

# Configurando o N8N com NGINX em um servidor

Começamos uma série no canal sobre N8N. Já mostrei como instalar local com Docker. Muita gente pediu a instalação em servidor com NGINX. Abaixo estão todos os comandos. Tem vídeo no YouTube com o mesmo passo a passo.

OBS: Todos os comandos abaixo foram executados no Ubuntu 24.04.

## Instalando o Docker

Instale o Docker pela [documentação oficial](https://docs.docker.com/engine/install/).

```bash
# Add Docker's official GPG key:
sudo apt-get update
sudo apt-get install ca-certificates curl
sudo install -m 0755 -d /etc/apt/keyrings
sudo curl -fsSL https://download.docker.com/linux/ubuntu/gpg -o /etc/apt/keyrings/docker.asc
sudo chmod a+r /etc/apt/keyrings/docker.asc

# Add the repository to Apt sources:
echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.asc] https://download.docker.com/linux/ubuntu \
  $(. /etc/os-release && echo "${UBUNTU_CODENAME:-$VERSION_CODENAME}") stable" | \
  sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
sudo apt-get update
```

```bash
sudo apt-get install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
```

## Clone e ajustes do repositório

No servidor, clone o repositório com as configurações.

```bash
git clone https://github.com/mateusrovedaa/n8n-postgres-redis-workers.git
```

Entre na pasta criada

```bash
cd n8n-postgres-redis-workers
```

Crie uma cópia do arquivo .env.example e ajuste protocolo, host, key e senha.

```bash
cp .env.example .env
```

```bash
vim .env

# n8n config
N8N_PROTOCOL=https
N8N_HOST=[host]
N8N_ENCRYPTION_KEY=[string aleatória sem símbolos]
N8N_RUNNERS_ENABLED=true
NODE_ENV=production

# Optional timezone to set which gets used by Cron-Node by default
# If not set New York time will be used
GENERIC_TIMEZONE=Europe/London

# Postgres config
POSTGRES_USER=postgres
POSTGRES_PASSWORD=[senha]
POSTGRES_DB=n8n
POSTGRES_NON_ROOT_USER=n8n
POSTGRES_NON_ROOT_PASSWORD=[senha]
```

Suba os serviços.

```bash
docker compose up -d
```

## Instalação e configuração do NGINX

Instale o NGINX e configure para servir o N8N.

```bash
sudo apt install nginx-light
```

Copie o arquivo de configuração do NGINX-http.

```bash
sudo cp webserver-example/nginx-http.conf.example /etc/nginx/sites-avaliable/[host]
```

Ajuste o host no arquivo.

```bash
sudo vim /etc/nginx/sites-available/[host]

Altere a linha server_name [host];
```

Crie o link para o sites-enabled.

```bash
sudo ln -s /etc/nginx/sites-available/[host] /etc/nginx/sites-enabled/[host]
```

Recarregue o NGINX.

```bash
sudo bash -c "nginx -t && systemctl nginx reload"
```

## Apontamento de DNS

Na sua zona de DNS crie um registro A com o host definido, apontando para o IP do servidor.

![dns](/images/uploads/apontamento-dns.png)

## Geração de certificado com o Certbot

Instale o certbot pela [documentação oficial](https://certbot.eff.org/instructions?ws=nginx&os=snap).

```bash
sudo snap install --classic certbot
```

Crie o link para o certbot.

```bash
sudo ln -s /snap/bin/certbot /usr/bin/certbot
```

Gere o certificado.

```bash
sudo certbot --nginx
```

Digite Enter, depois Y e Enter e escolha o domínio listado (em geral basta pressionar 1)

![certificado](/images/uploads/certificado.png)

Recarregue o NGINX.

```bash
sudo bash -c "nginx -t && systemctl nginx reload"
```

### Renovação automática do certificado

Adicione ao crontab a linha abaixo para renovar quando disponível.

```bash
sudo crontab -e
```

```bash
0 4 1 * * /usr/bin/certbot renew --post-hook "systemctl reload nginx"
```

## Extra: Firewall

Para mais segurança, configure um firewall.

```bash
sudo apt install ufw
sudo ufw allow https
sudo ufw allow http
sudo ufw allow ssh
sudo ufw default deny incoming
sudo ufw enable
```

## Pronto

Acesse a URL que definiu para o N8N. Ele já deve estar no ar.

// see you later
