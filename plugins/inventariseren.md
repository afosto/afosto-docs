---
layout: docs
title: Producten inventariseren
description: Hier wordt uitgelegd hoe je producten kunt inventariseren. 
group: plugins
parent: plugins
toc: true
redirect_from:
- /inventariseren
---
## Pluginnaam
Inventarisatie

## Omschrijving
Met deze plugin kan de voorraad worden geïnventariseerd. De plugin is ook geoptimaliseerd voor mobiel en tablet. Dit in tegenstelling tot het platform.

## Plugin Instellingen
Plugin Instellingen zijn voor deze plugin niet van toepassing.

## Gebruik
Deze plugin kan op verschillende manieren worden gebruikt.

### Optie 1, scannen maar
Dit is verreweg de simpelste manier om de Inventarisatie te gebruiken.
1. Je selecteert het juiste magazijn
2. Je kunt beginnen met scannen of een product opzoeken via de zoekfunctie
Op het moment dat je een product hebt gescand komt het product in een van de volgende lijsten terecht:
1. Aandacht vereist
In deze lijst staan producten welke je gescand hebt en waarbij de gescande voorraad afwijkt van de verwachte voorraad. Je kunt rustig doorgaan met scannen, wellicht kom je dit product nog ergens anders tegen. Mocht je klaar zijn met scannen, dan heb je hier een overzicht met producten met een afwijkende voorraad (meer of minder). Je kunt aangeven wat er met deze producten dient te gebeuren door ze door middel van de buttons in een andere lijst te plaatsen.
2. Aangepast
In deze lijst staan producten waarvan de voorraad wordt aangepast.
3. Ongewijzigd
In deze lijst staan producten waarvan de gescande voorraad hetzelfde is als de verwachte voorraad. 
4. Niet geïnventariseerd
Hier komen de producten welke je handmatig (middels een button) in deze lijst hebt geplaatst. Het product zal de oorspronkelijke waarde houden, maar wel opgeslagen worden als geïnventariseerd.  

### Optie 2, Een inventarisatielijst maken
Dit gedeelte wordt momenteel geherstructureerd. Dit houdt in dat de werkwijze wordt aangepast. Op dit moment wordt geadviseerd om dit gedeelte van het inventariseren niet te gebruiken.

## Opslaan
Bij het opslaan van deze lijst worden de aanpassingen opgeslagen als productmutatie. Bij een productmutatie wordt middels een harde waarde de voorraad opgeslagen. Dit betekent dat:
* Producten in de lijst _aandacht vereist_ worden opgeslagen met het oorspronkelijke aantal.
* Producten in de lijst _aangepast_ worden opgeslagen met het nieuwe (geïnventariseerde) aantal.
* Producten in de lijst _ongewijzigd_ worden opgeslagen met het oorspronkelijke aantal.
* Producten in de lijst _niet geïnventariseerd_ worden opgeslagen met het oorspronkelijke aantal.
 