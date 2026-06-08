---
title: Como instalar a ProtonVPN no GNU/Linux
date: 2021-03-19T22:18:49-03:00
author: Mateus Roveda
categorias:
  - vpn
  - segurança
  - gnu/linux
  - tutoriais
tags:
  - seguranca
  - protonvpn
---

A utilização de uma VPN ou até mesmo empresas que oferecem serviços de VPN são assuntos delicados para serem tratados e o intuito desse post é te mostrar uma VPN gratuita e OpenSource, além de dar um embasamento sobre o assunto.

# Mas, o que é uma VPN?

Uma VPN é uma rede privada utilizada para proteger a privacidade e melhorar a segurança em uma conexão. Uma VPN não necessariamente é para baixar vídeos ou apenas alterar seu IP, mas também para garantir a segurança em acesso a servidores e/ou serviços.

![ilustração que mostra uma vpn e para que é utilizada](/images/uploads/vpn.jpg)

Lembrando que esse texto expressa minha opinão e usabilidade de uma ferramenta que pode comprometer dados pessoais. Então o uso precisa ser com muito cuidado e responsabilidade e por sua conta e risco.

## Um pouco mais sobre a ProtonVPN

A ProtonVPN é mantida pela Proton Technologies, a mesma empresa conhecida pelo ProtonMail e que está desenvolvendo o Proton Drive (que gerou algumas controversas). Além dos dados serem movimentados na Suiça, ou seja, sem leis de armazenamento e monitoramento de dados, a Proton é conhecida pela confiabilidade e segurança entregada aos seus usuários.

A ProtonVPN passou a ser Open Source a pouco tempo (2020) e por conta disso também possui um plano gratuito que é limitado mas atende bem a um uso básico. O bacana é que o plano mais top da ProtonVPN também da acesso ao ProtonMail Pro, então pode valer muito apena o investimento se você deseja ter um e-mail privativo e criptografado.

Entre os pontos positivos estão o Secure Core, que prioriza os servidores em países amigos da privacidade. Outro ponto positivo é o Kill Switch, que protege seu IP caso a conexão cair ou oscilar e, o ponto fundamental, não logar os dados de navegação.

Entre os pontos negativos, podemos citar o alto preço e o suporte que pode não ser muito bom.

![protonvpn interface em um notebook e celular](/images/uploads/downloads-devices.jpg)

# Como instalar no GNU/Linux

A ProtonVPN possui uma [documentação](https://protonvpn.com/support/official-linux-client/) bem detalha para várias distribuições diferentes.

Além disso, criei um vídeo ensinando a como fazer essa instalação.

<iframe width="100%" height="400" src="https://www.youtube.com/embed/sgrPtWjuTzo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen loading="lazy"></iframe>

## Ubuntu/Debian/Linux Mint/Kali Linux/ParrotOS

Para distribuições baseadas no Debian precisamos rodar os seguintes comandos:

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

## Fedora 33

Para a distribuição Fedora 33 utilizamos esses comandos:

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

# Como utilizar

O primeiro passo é realizar login com as suas informações, ou seja, com usuário e senha.

```
protonvpn-cli login
```

Com o login feito, basta conectar.

```
protonvpn-cli connect
```

Para desconectar da VPN também é simples.

```
protonvpn-cli disconnect
```

# Considerações finais

O plano gratuito pode ser utilizado principalmente para garantir a privacidade em conexões em redes desconhecidas (como cafés, restaurantes, bibliotecas), porém os planos pagos dessa VPN podem pesar para o seu bolso, além de existirem opções mais baratas no mercado.

A ProtonVPN pode ser uma boa escolha, mas você deve ter cuidado com seus dados e saber que uma VPN, simplesmente, não irá te deixar seguro ou te proteger de tudo o que acontece na Internet.

// see you later
