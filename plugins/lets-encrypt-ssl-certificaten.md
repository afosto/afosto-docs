---
layout: plugin
title: Lets Encrypt SSL certificaten
description: Met deze plugin wordt automatisch een SSL certificaat gegenereerd en verlengd.
plugin_name: Lets Encrypt SSL certificaten
plugin_url: "https://app.afosto.com/plugins/75-lets-encrypt" 
group: lets encrypt ssl certificaten
parent: plugins
toc: true
redirect_from:
- /inventariseren
---

## Omschrijving

Deze plugin doet het volgende

1. Maakt automatisch een certificaat aan voor de geselecteerde domeinen.
2. Installeert het certificaat vervolgens op het domein. De velden binnen de ‘Geavanveerde instellingen’ van de betreffende shop worden automatisch gevuld.
3. Als het certificaat dreigt te verlopen, wordt deze automatisch verlengd.

Bij het installeren van een certificaat vinden er veel processen op de achtergrond plaats.
Door deze processen ontstaat een tijdelijk (maximaal 10 minuten) conflict op je webshop met een melding vanuit je browser.
Het is daarom aan te raden een certificaat vroeg in de ochtend te installeren.

## Instellingen

### Domeinen
Onder domeinen worden de webshops weergegeven waarvoor je deze plugin kunt gebruiken.
Vink de shops aan waarvoor je deze plugin wilt gebruiken en sla de instellingen op. 

