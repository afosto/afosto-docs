---
layout: docs
title: rapportages
description: "Binnen Afosto heb je verschillende mogelijkheden om rapportages uit te draaien."
group: rapportages
parent: platform
toc: true
redirect from:
- /rapportages/
---

Je kunt standaard kiezen uit twee type rapportages. Andere rapportages zijn als plugin beschikbaar, zoals een rapportage op basis van specificaties of een rapportage voor een winkelgroep. Wil je meer weten over de mogelijkheden in rapportages? Neem dan contact op met [support@afosto.com](mailto:support@afosto.com?subject=Aanvraag%20uitgebruide%20Facebook%20implementatie&amp;body=Ik%20wil%20graag%20meer%20weten%20over%20de%20rapportage%20plugins).  
In deze handleiding behandelen we de standaard rapportages **groepen** en **producten**.

## Groepen
Met dit type rapportage wordt een overzicht van de verschillende Grootboekrekeningen gegeneerd.

### Verkoopkanaal
Hier kan worden opgegeven voor welk verkoopkanaal de rapportage gedraaid dient te worden.

### Tijdsperiode
Er kan een tijdsperiode geselecteerd worden. Standaard staat vandaag aangevinkt. Als dit vinkje wordt verwijderd, wordt er een invulveld getoond. Wanneer er op dit veld geklikt wordt komt er een datumselector in beeld. 

### PDF of XLS
Er kan gekozen worden om een export als pdf te genereren of als xls (excel bestand). Zodra het gewenste bestand aangeklikt wordt, wordt deze voor je gegenereerd. 

### rapportage opbouw
De rapportage bestaat uit de onderstaande tabellen. Op de PDF verschijnen deze onder elkaar. In het XLS bestand verschijnt elk overzicht op een los tabblad. 

#### Grootboekrekeningoverzicht
Dit overzicht bevat de volgende kolommen.

| **Grootboekrekening** | Alle gespecificeerde grootboekrekeningen met omzet voor de opgegeven periode |
| **BTW** | Het BTW percentage van de betreffende grootboekrekening. Indien een grootboekrekening meerdere BTW percentages bevat wordt dit op losse regels getoond |
| **Aantal** | Het aantal verkochte producten binnen de grootboekrekening | 
| **Omzet zonder korting** | De totale omzet zonder korting van de betreffende grootboekrekening (inclusief BTW) |
| **Korting** | Totale inkoop gegeven over deze grootboekrekening. Hieronder valt ook de verdeelde bonkorting* |
| **Omzet** | Totale omzet van de betreffende grootboekrekening inclusief BTW |
| **Netto** | Totale omzet van de betreffende grootboekrekening exclusief BTW |
| **Inkoop** | Totale inkoopwaarde van de verkochte producten van de betreffende grootboekrekening (exclusief BTW).|
| **Winst** | Netto - Inkoop |
| **Marge** | Winst/Netto | 
{: .table.table-bordered }

#### Extra kostenoverzicht
Dit overzicht bevat de volgende kolommen.

| **Post** | Omschrijving van de extra kosten |
| **BTW** | Het BTW percentage gerekend over de extra kosten |
| **Aantal** | Aantal orders met deze extra kosten |
| **Omzet** | Omzet van de extra kosten inclusief BTW |
| **Netto** | Omzet van de extra kosten exclusief BTW |
{: .table.table-bordered }

#### Btw overzicht
Dit overzicht bevat de volgende kolommen.

| **BTW-tarief** | Het betreffende BTW tarief |
| **Omzet** | De gegenereerde omzet exclusief BTW gegenereerd voor het betreffende BTW-tarief |
| **Netto** | De gegenereerde omzet  inclusief BTW gegenereerd voor het betreffende BTW-tarief |
| **BTW-bedrag** | De gegenereerde BTW |
{: .table.table-bordered }

#### Betalingsoverzicht
Dit overzicht bevat de volgende kolommen.

| **Betaalmethode** | De naam van de betaalmethode |
| **Voldaan** | De gegeneerde omzet voor de betreffende betaalmethode |
{: .table.table-bordered }

#### Loyalty
Dit overzicht bevat de volgende kolommen.

| **Actie** | Deze kolom geeft aan of het om ‘Uitgegeven’ of ‘Geincasseerde’ Credits gaat |
| **Campagne** | De naam van de campagne |
| **Aantal punten** | Het aantal punten dat is uitgegeven of geïncasseerd |
| **Waarde in Euro** | De waarde die de punten maal het ingestelde inwisselratio |
{: .table.table-bordered }

#### Orderoverzicht
Dit overzicht bevat de volgende kolommen.

| **Aantal orders** | Het aantal orders dat gedaan is gedurende de opgegeven periode |
| **Gemiddeld per order** | De totale omzet van de grootboekrekeningen / Aantal orders. Hier worden extra kosten (extra kostenoverzicht) niet in meegerekend |
{: .table.table-bordered } 

#### Verdeelde bonkorting
Gegeven bonkorting wordt verdeeld over alle producten op de bon. Geef je een bonkorting van 10% dan wordt deze doorgerekend op elk product op de bon/ factuur. 

## Producten
Met dit type rapportage wordt een overzicht getoond van alle producten die aan 1 of meerdere geselecteerde specificaties voldoen.

### Verkoopkanaal
Hier kan worden opgegeven voor welk verkoopkanaal de rapportage gedraaid dient te worden.

### Tijdsperiode
Er kan een tijdsperiode geselecteerd worden. Standaard staat vandaag aangevinkt. Als dit vinkje wordt verwijderd, wordt er een invulveld getoond. Wanneer er op dit veld geklikt wordt komt er een datumselector in beeld. 

### Filter op specificatie
Er kan gekozen worden voor een rapportage welke voldoet aan 1 of meerdere opgegeven specificaties. Bijvoorbeeld: Toon mij een overzicht van alle producten van het merk: XXX en in de kleur rood. 

### PDF of XLS
Er kan gekozen worden om een export als pdf te genereren of als xls (excel bestand). Zodra het gewenste bestand aangeklikt wordt, wordt deze voor je gegenereerd. 

### rapportage opbouw
De rapportage bestaat uit de onderstaande tabel en bevat de volgende kolommen.

| **EAN** | De EAN wordt alleen getoond bij het XLS bestand. Dit is de barcode van het product |
| **Product** | De naam van het product inclusief eventuele attributen |
| **BTW** | Het BTW percentage van het betreffende product |
| **Aantal**  | Het aantal verkochte producten |
| **Omzet zonder korting** | De totale omzet zonder korting (inclusief BTW) |
| **Korting** | Totale inkoop. Hieronder valt ook de verdeelde bonkorting* |
| **Omzet** | Totale omzet inclusief BTW |
| **Netto** | Totale omzet exclusief BTW |
| **Inkoop** | Totale inkoopwaarde van de verkochte producten (exclusief BTW) |
| **Winst** | Netto - Inkoop |
| **Marge** | Winst/Netto |
{: .table.table-bordered }


## Rapportage plugins
Om andere typen rapportages uit te kunnen draaien zijn er een aantal plugins beschikbaar gemaakt. Om gebruik te maken van onderstaande plugins, of voor meer informatie, kunt u contact opnemen met [support@afosto.com](mailto:support@afosto.com?subject=Aanvraag%20plugin&amp;body=Ik%20wil%20graag%20meer%20weten%20over%20de%20rapportage%20plugins).

|**Rapportage voor producten** | [Aanvragen](mailto:support@afosto.com?subject=Aanvraag%20plugin&amp;body=Ik%20wil%20graag%20gebruik%20maken%20van%20de%20Rapportage%20voor%20producten%20plugin) | |  
|**Winkelgroep rapportages** | [Aanvragen](mailto:support@afosto.com?subject=Aanvraag%20plugin&amp;body=Ik%20wil%20graag%20gebruik%20maken%20van%20de%20Winkelgroep%20rapportages%20plugin) | |
|**Rapportage voor magazijn en verzendingen** | [Aanvragen](mailto:support@afosto.com?subject=Aanvraag%20plugin&amp;body=Ik%20wil%20graag%20gebruik%20maken%20van%20de%20Rapportage%20voor%20magazijn%20en%20verzendingen%20plugin)| |
|**Specificatie rapportages** | [Aanvragen](mailto:support@afosto.com?subject=Aanvraag%20plugin&amp;body=Ik%20wil%20graag%20gebruik%20maken%20van%20de%20Specificatie%20rapportages%20plugin) | [handleiding](/plugins/specificatie-rapportages)|  
{: .table}
