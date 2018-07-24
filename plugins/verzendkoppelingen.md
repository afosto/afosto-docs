---
layout: plugin
title: Verzendkoppelingen
description: Met deze koppeling kan een verzendlabel opgehaald worden bij Sendcloud of Fietskoeriers
plugin_name: Verzendkoppelingen
plugin_url: "https://app.afosto.com/plugins/13-shippingproviders" 
group: Verzendkoppelingen
parent: plugins
toc: true
redirect_from:
- /verzendkoppelingen
---

## Omschrijving
Met deze koppeling is het mogelijk om een verzendlabel op te halen bij de ondersteunde pakketbezorgers.
Momenteel ondersteund Afosto alleen [Sendcloud](//www.sendcloud.nl/){:target="_blank"} en [Fietskoeriers](//www.fietskoeriers.nl/){:target="_blank"}.
Activatie van deze plugin doet het volgende.

- Op het niveau van het verkoopkanaal, onder **Verzendmethodes** is het mogelijk een koppeling met de pakketbezorger, of pakketbezorgers naar keuze tot stand te brengen.
- Een verzendmethode binnen Afosto kan gekoppeld worden met de verzendmethode van de pakketbezorg.
- Op de order pagina komt de functie `Pakketlabel afdrukken` beschikbaar. 


## Pakketbezorger koppelen
Ga naar het dashboard van je verkoopkanaal en open de **Verzendmethodes** pagina.
Klik vervolgens rechtsboven op ‘Beheer verzendkoppelingen’.
Hier zie je een overzicht met ingestelde koppelingen.
Om een nieuwe koppeling toe te voegen klik je rechtsboven op `Nieuwe koppeling`.
In het formulier dat tevoorschijn komt dien je een naam in te vullen waaraan je de koppeling kan herkennen.
Maak hier ook een keuze voor de pakketbezorger koppeling, Sendcloud of Fiestkoeriers.
Afhankelijk van de pakketbezorger die je kiest zullen er extra velden tevoorschijn komen.

### Sendcloud
Voor sendcloud dien je twee velden in te vullen: `Publieke sleutel` en `Geheime sleutel`. 
Deze sleutels zijn te vinden onder integraties binnen je Sendcloud account.
[Login bij Sendcloud](//panel.sendcloud.nl/){:target="_blank"} om deze sleutels te vinden.
Met deze sleutels kan Afosto contact maken met het Sendcloud systeem.

Heb je geen account voor Sendcloud? [Maak een Sendcloud account aan](//www.sendcloud.nl/){:target="_blank"}.

### Fietskoeriers
Voor Fietskoeriers dien je de gebruikersnaam en het wachtwoord van je Fietskoeriers account in te vullen.
Met deze gegevens kan Afosto contact maken met het Fietskoeriers systeem.

Heb je geen account voor Fietskoeriers? [Maak een fietskoeriers account aan](//www.fietskoeriers.nl/){:target="_blank"}.

Sla de ingevulde gegevens op en de koppeling met de pakketbezorger zal worden aangemaakt.


## Verzendmethode koppelen
Als je een pakketbezorger hebt gekoppeld voor het verkoopkanaal, kun je een verzendmethode van Afosto koppelen met de verzendmethode van de gekoppelde pakketbezorger.
Klik bij de verzendmethode die je wil koppeling op de knop `Koppeling`.
Selecteer de koppeling die je wil gebruiken voor deze verzendmethode.
Op basis van de gekozen koppeling worden de beschikbare verzendmethodes opgehaald uit het systeem van pakketbezorger.
Maak een keuze uit de beschikbare verzendmethodes en klik op opslaan.
De Afosto verzendmethode is nu gekoppeld aan de verzendmethode van de pakketbezorger. 

## Label ophalen
Wanneer een klant bij een order heeft gekozen voor een gekoppelde verzendmethode, zal de optie om een pakketlabel af te drukken beschikbaar worden.
Als je naar een order gaat zie je in de linkerlijst onder 'Orderafhandeling' een item `Pakketlabel afdrukken`.
Door hier op te klikken wordt het pakketlabel opgehaald bij de pakketbezorger.
Deze kun je direct afdrukken of opslaan voor later.
