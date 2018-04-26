---
layout: docs
title: DNS instellingen webshop
description: Met de juiste DNS instellingen kun je de webshop online zetten
group: webshop
parent: platform
toc: true
redirect_from:
- /platform/dns_instellingen_webshop
---

## Wat zijn DNS instellingen?
DNS zorgt ervoor dat, achter de schermen, je domeinnaam wordt omgezet naar een ip adres. In dit geval dus het ip-adres van de servers van Afosto.

## DNS instellingen 
Zorg er voor dat de regels die bij de webshop horen (`www` en `niet-www`) correct staan ingesteld. We nemen hierbij het voorbeeld van de fictieve webshop *mijnwebshop.nl*.

| Url                | TTL   | Type | Waarde         |
|--------------------|-------|------|----------------|
| www.mijnwebshop.nl | 1 dag | CNAME| mijnwebshop.nl |
| mijnwebshop.nl     | 1 dag | A    | 185.67.200.166 |
{: .table.table-bordered}

Omdat we willen dat *mijnwebshop.nl* zowel via `www.mijnwebshop.nl` als `mijnwebshop.nl` bereikbaar is voegen we voor beide de instellingen toe zoals beschreven.

## Pro-tip
Indien je webshop enkel via een subdomein bereikbaar hoeft te zijn kun je ook het volgende voorbeeld gebruiken:

| Url                        | TTL   | Type | Waarde         |
|----------------------------|-------|------|----------------|
| webshop.mijnwebshop.nl     | 1 dag | CNAME| lb.afosto.com  |
| www.webshop.mijnwebshop.nl | 1 dag | CNAME| lb.afosto.com  |
{: .table.table-bordered}

De laatste regel (`www.webshop.mijnwebshop.nl`) zul je waarschijnlijk niet toevoegen, het is erg ongebruikelijk maar staat hier voor de volledigheid.