---
title: Como instalar a ProtonVPN
date: 2022-05-17
author: Mateus Roveda
categorias:
  - tutoriais
tags:
  - terminal
  - vpn
  - protonvpn
  - segurança
---

# ProtonVPN

VPN é um assunto delicado. Aqui mostro uma opção gratuita e open source e dou base para você decidir com calma.

## Mas o que é uma VPN?

VPN é uma rede privada para proteger privacidade e segurança na conexão. Serve para baixar vídeo ou trocar IP em alguns casos, mas o principal é garantir segurança no acesso a servidores e serviços.

Este texto reflete minha opinião e meu uso. VPN lida com dados pessoais, então use com cuidado, por sua conta e risco.

### Um pouco mais sobre a ProtonVPN

A ProtonVPN é da Proton Technologies, a mesma do ProtonMail e que desenvolve o Proton Drive. Os dados trafegam pela Suíça, sem leis de retenção e monitoramento, e a empresa tem histórico de confiabilidade e segurança.

Virou open source em 2020 e por isso tem plano gratuito limitado que já atende uso básico. O plano topo dá acesso ao ProtonMail Pro, o que pode valer a pena se você quer e-mail privado e criptografado.

Pontos positivos: Secure Core, que prioriza servidores em países que respeitam privacidade; Kill Switch, que protege seu IP se a conexão cair; e política de não registrar navegação.

Pontos negativos: preço alto e suporte que pode deixar a desejar.

## Como instalar no GNU/Linux

A ProtonVPN tem [documentação](https://protonvpn.com/support/official-linux-client/) detalhada para várias distribuições.

Também gravei um vídeo com a instalação.

<iframe width="100%" height="400" src="https://www.youtube.com/embed/sgrPtWjuTzo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen loading="lazy"></iframe>

### Ubuntu/Debian/Linux Mint/Kali Linux/ParrotOS

Para distribuições baseadas no Debian:

```
sudo apt-get update
```

```
wget -q -O - https://repo.protonvpn.com/debian/public_key.asc | sudo apt-key add -
```

```
sudo add-apt-repository 'deb https://repo.protonvpn.com/debian unstable main'
```

```
sudo apt-get update && sudo apt-get install protonvpn
```

### Fedora 33

Para o Fedora 33:

```
sudo dnf upgrade
```

```
sudo vim /etc/yum.repos.d/fedora-33-unstable.repo
```

Cole dentro desse arquivo

> \[proton-fedora-33-unstable]
>
> name="fedora-33-unstable"
>
> baseurl=https://repo.protonvpn.com/fedora-33-unstable/
>
> enabled=1
>
> gpgcheck=1
>
> repo_gpgcheck=1
>
> gpgkey=https://repo.protonvpn.com/fedora-33-unstable/public_key.asc

```
sudo dnf update && sudo dnf install protonvpn
```

## Como usar

Faça login com usuário e senha.

```
protonvpn-cli login
```

Conecte.

```
protonvpn-cli connect
```

Para desconectar:

```
protonvpn-cli disconnect
```

## No fim

O plano gratuito ajuda bem em redes desconhecidas, como cafés, restaurantes e bibliotecas. Os planos pagos pesam no bolso e há opções mais baratas no mercado.

A ProtonVPN pode ser uma boa escolha, mas lembre que nenhuma VPN te deixa 100% seguro. Avalie o serviço e use com critério.

// see you later
