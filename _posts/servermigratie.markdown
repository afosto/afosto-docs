---
layout: post
title:  DNS instellingen webshop
sub_title: "Help.afosto.com"
date:   2018-03-20 10:44:00 +0100
categories: platform update release
---



---
layout: page
title: DNS instellingen webshop
description: Met de juiste DNS instellingen kun je de webshop online zetten
group: webshop
parent: webshop
toc: true
redirect_from:
- /inventariseren
---

## Wat zijn DNS instellingen?
DNS zorgt ervoor dat, achter de schermen, je domeinnaam wordt omgezet naar een ip adres. In dit geval dus het ip-adres van de servers van Afosto.

## DNS instellingen
Zorg er voor dat de regels die bij de webshop horen (`www` en `niet-www`) correct staan ingesteld. We nemen hierbij het voorbeeld van de fictieve webshop *mijnwebshop.nl*.

| Url                | TTL   | Type | Waarde         |
|--------------------|-------|------|----------------|
| www.mijnwebshop.nl | 1 dag | CNAME| mijnwebshop.nl |
| mijnwebshop.nl     | 1 dag | A    | 185.67.200.166 |

Omdat we willen dat *mijnwebshop.nl* zowel via `www.mijnwebshop.nl` als `mijnwebshop.nl` bereikbaar is voegen we voor beide de instellingen toe zoals beschreven.

## Pro-tip
Indien je webshop enkel via een subdomein bereikbaar hoeft te zijn kun je ook het volgende voorbeeld gebruiken:

| Url                        | TTL   | Type | Waarde         |
|----------------------------|-------|------|----------------|
| webshop.mijnwebshop.nl     | 1 dag | CNAME| lb.afosto.com  |
| www.webshop.mijnwebshop.nl | 1 dag | CNAME| lb.afosto.com  |

De laatste regel (`www.webshop.mijnwebshop.nl`) zul je waarschijnlijk niet toevoegen, het is erg ongebruikelijk maar staat hier voor de volledigheid.