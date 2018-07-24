---
layout: docs
title: Backorder instellingen
description: 'Binnen Afosto heb je de mogelijkheid per product of in het algemeen backorders toe te staan.'
group: Backorder instellingen
parent: webshop
toc: true
redirect_from:
- /backorder-instellingen
---

## Webshop instelling
Voor de webshop kun je de instelling `Producten kunnen bestellen wanneer deze niet op voorraad zijn` aan of uit zetten. 
Wanner deze instelling uit staat worden producten met een voorraad van 0 of kleiner, niet meer getoond op je webshop.
Staat hij aan, dan kunnen producten besteld worden ongeacht de voorraad.
Deze instelling is te vinden bij **Voorraadinstellingen**  onder het kopje **instellingen** op het dashboard van je webshop.

## Product instelling
Op het productformulier kan onder **Product informatie** de instelling `Backorders toegestaan` in- of uitgeschakeld worden. 
Als deze instelling aan staat, dan zal het product bij een voorraad van 0 of kleiner zichtbaar blijven op de webshop.
Als de webshop instelling `Producten kunnen bestellen wanneer deze niet op voorraad zijn` uit staat, zal deze in dit geval overschreven worden.
Als deze instelling uit staat, dan zal het product bij een voorraad van 0 of kleiner verdwijnen van de webshop.

## Instellen via een batch
Onder het tabje **Producten** bij de batches is de batch **Product Backorder** beschikbaar.
JDeze batch kan je alleen gebruiken om parent producten aan te passen. De backorder instelling is namelijk niet in te stellen voor varianten.
Je kan de data voor een batch in Excel gereed maken.
Kopieer de kolommen in Excel en plak deze in de tabel van de batch.
Wil je een mail ontvangen wanneer de batch is afgerond? Vink dan de optie `Stuur mij een mail wanneer de taak is volbracht`.


**Referentie**  
Hier kun je een referentie opgeven die in de historie getoond wordt.
Zo je later makkelijk terug kijken wat je gedaan hebt.
Klik op `Toevoegen` om naar de volgende stap te gaan.


### Kolommen
**EAN**  
Vul in deze kolom de EANs van de producten in waarvoor je de instelling wil aanpassen.

**Backorder toegestaan?**  
In deze kolom vul je de nieuwe status van de instelling in.  
Backorder niet toegestaan: Vul in **0** of **nee**.  
Backorder toegestaan: Vul in **1** of **ja**.

Door op `toevoegen` te klikken start je de batch en worden de aanpassingen op de achtergrond verwerkt.
