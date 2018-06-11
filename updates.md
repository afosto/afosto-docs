---
layout: updates
title: Platform updates
description: Er vinden regelmatig updates plaats op het platform. Hier worden de releasenotes geplaatst.
group: updates 
toc: true
redirect_from:
    - /releases
---

## 12-06-2018

### In deze release

**Kassa (3.0.75)**

- In het Afosto platform is een kassa-instelling toegevoegd waarbij een standaard termijn voor een reservering / leverorder kan worden ingesteld, indien gebruik wordt gemaakt van de **interne verzendingen plugin**.
- In het Afosto platform is een kassa-instelling toegevoegd voor het instellen van een standaard coupon kortingspercentage, indien gebruikt wordt gemaakt van de **kortingen plugin**.
- De volgorde van de invoervelden van het coupon formulier is gewijzigd. De invoervelden die het snelste zullen worden aangepast staan nu hoger ten opzichte van de invoervelden die bijna altijd hetzelfde zijn. (**kortingen plugin**)
- Er is een probleem verholpen m.b.t. het scannen van de barcode op de kassabon in het geval van meerdere vestigingen. Hierbij werd af en toe een kassabon met hetzelfde nummer van een andere vestiging geopend.
- Er is een probleem verholpen m.b.t. ontbrekende vertalingen bij de coupon datum instellingen. (**kortingen plugin**)
- Er is een probleem verholpen bij het koppelen / ontkoppelen van een klant aan de kassabon vanaf de bon bewerk pagina. Hierbij werd na het koppelen / ontkoppelen de gebruiker onterecht teruggestuurd naar het betaalscherm in plaats van naar het bon bewerk scherm.
- Er zijn verbeteringen doorgevoerd m.b.t het loggen van foutmeldingen, waardoor wij fouten nog gemakkelijker kunnen herkennen en oplossen.
- Er zijn een aantal andere kleine verbeteringen doorgevoerd.

**Platform (1.71)**

- De plugins waar wij al jaren aan werken zijn nu ook voor u inzichtelijk. De instellingen van de bij u geïnstalleerde plugins zijn nu beschikbaar op het dashboard of via het nieuwe icoontje bovenin de rode balk.
- Het importeren van producten is omgezet naar jobs. Hierdoor is het aanzienlijk sneller geworden en worden zware processen op de achtergrond verwerkt. Daarbij is het ook mogelijk om de **product verrijker plugin** er aan te koppelen.
- Nieuwe plugin om producten van het zelfde type te groeperen binnen een collectie pagina. Op basis van de filters wordt dan uit deze groep het meest overeenkomende product getoond.
- Fietskoeriers is toegevoegd aan de Verzend koppelingen om het mogelijk te maken om Same Day Delivery te ondersteunen. 
- Het probleem waarbij orders wel betaald waren maar geen factuur hadden is verholpen.
- De nieuwe plugin **Order opmerkingen versturen** maakt het mogelijk om opmerkingen bij verkopen te versturen naar de klant in een opgemaakte email.
- De **Google Analytics plugin** verstuurd ip-adressen nu geanonimiseerd naar Google om de privacy van uw klanten te waarborgen.
- In het producten overzicht zijn de titels van de kolommen voor **Prijs incl.**, **Actie prijs incl.**, **Actief** en **BTW %** aangevuld met de naam van de prijsgroep waar deze bij horen. Ook zijn voor de taalgroepen de kolommen voor **Naam**, **Korte omschrijving** en **Omschrijving** aangevuld met de naam van de productgroep waar deze bij horen.
- Een nieuwe plugin die een koppeling mogelijk maakt met [**Family Blend**](http://familyblend.nl/).

### Fixes sinds de laatste release

- Het menu aan de linker kant kan nu omhoog en naar beneden gescrollt worden.
- Een fout bij het zoeken op volledige EAN’s voor **Aanvullende, Upsell en impulsverkoop** producten is verholpen.
- In het klanten overzicht is het nu mogelijk om te zoeken op postcode.
- Er is een verbetering doorgevoerd in het kiezen van de beste levermagazijnen.
- De **Fashion Partner plugin** is uitgebreid met de mogelijkheid om de inhoud van dozen, die met een interne verzending zijn opgevraagd, in een keer op te boeken.
- Na de server migratie van [02-05-2018](#02-05-2018) werden kopieën van facturen en orders niet altijd verstuurd naar de bij berichtgeving ingestelde e-mailadressen. Dit is nu weer verholpen.
- Developers kunnen in de [API documentatie](https://docs.afosto.com/) weer de autorisatie om test calls te doen weer gebruiken.

## 29-05-2018

### In deze release
* Het zoeken van producten in zowel platform als webshop is verbeterd waardoor het zoeken op EAN en SKU betere resultaten geeft.
* De plugin **clusterraportage** is herschreven om een beter overzicht te genereren in een excel bestand.
* De BetaOut plugin is uitgebreid met ondersteuning voor desktop push berichten.

### Fixes sinds de laatste release 
* Mogelijkheid om voorraad te tonen per winkelgroep in het producten overzicht. Hierbij worden de aan de winkelgroep gekoppelde magazijnen gebruikt.
* Door een bug in de pagina **Kortingsregels** konden deze niet opgeslagen worden, dit is opgelost en kan weer gebruikt worden.
* Het zoeken op specificaties gaf een foutmelding wanneer de zoekterm een `‘` bevat, bijv. Levi’s. De ondersteuning voor speciale tekens in deze zoekopdracht is verbeterd.
* Betaalmethodes van de kassa kunnen weer opgeslagen worden in het platform.
* Het pagina overzicht is verwijderd. Je kan de pagina’s nu alleen bewerken via **Menu’s**.
* Het uploaden van logo’s bij kassa en webshop administratie is weer gerepareerd.
* Het zoeken op specificaties was tijdelijk uitgeschakeld. Doordat er een proces op de perfomance drukte zorgde dit voor problemen. Dit is nu gerepareerd en je kan weer zoeken op specificaties.
* Het verwijderen van klanten waar een coupon code aan is gekoppeld is mogelijk gemaakt.


## 15-05-2018
**Platform**

* De Price Group Switch plugin is uitgebreid 
  * Er is de mogelijkheid toegevoegd om bij een prijsgroep aan te geven dat de gebruiker ingelogd moet zijn om de shop te gebruiken.
  * De tabel met e-mailadressen die toegang krijgen tot deze prijsgroep was op kleinere schermen niet meer te zien. Dat is nu verholpen door een minimale hoogte te geven aan de tabel.
* De beschikbaarheid van verzendmethoden in andere landen op basis van het gewicht van de order is verbeterd.
* Kopieën van orders die na de server migratie van 02-05-2018 niet meer werden verstuurd worden nu weer verstuurd.

**Kassa**

De kassa bevat een update van de PayNL SDK waardoor er een paar wijzigingen nodig waren.
* Fashionchecks kunnen nu weer naar behoren gebruikt worden
* De bon bevat bij een pin betaling meer informatie over de kaart waar mee is betaald en de transactie die ermee is volbracht. 

## 07-05-2018
**Platform**

* Toegevoegd bij onderdeel 'kassa' > 'Algemene POS instellingen' - Leverorders: Items standaard weergegeven als geleverd.
* Toegevoegd bij onderdeel 'kassa' > 'Algemene POS instellingen' - Reservering: Items standaard weergegeven als geleverd.

**Kassa**

* Toegevoegd bij onderdeel 'Leveringsorders'- Button met twee opties: 'Alles op niet geleverd zetten' / 'Alles op geleverd zetten'. Tevens kan de standaard waarde van deze button worden ingesteld onder instellingen. 
* Er is een probleem verholpen m.b.t. kasmutaties, waarbij de kassalade niet altijd open gaat.
* Indien je beschikt over de interfiliaal verkeer plugin, dan is er functionaliteit toegevoegd waarbij bij het nu mogelijk is om leverorders vanaf de kassa aan te maken.
* Indien je beschikt over de print product labels plugin (POS), dan is er functionaliteit toegevoegd waarbij je vanaf de kassa per product een product label kunt laten genereren en downloaden.
* Er zijn een aantal andere kleine verbeteringen doorgevoerd.

## 02-05-2018
**Platform**

Het Platform draait vanaf vandaag op een nieuwe server.

**Kassa**

De kassa draait vanaf vandaag op een nieuwe server.

**Webshop**

De webshop kun je vanaf vandaag vanaf de nieuwe server laten draaien. Je dient deze instellingen voor 9 mei aangepast te hebben. Je kunt [hier](/webshop/dns-instellingen-webshop) de instellingen vinden. Beheert Afosto je domeinnaam, dan zullen wij dit voor je regelen.

**API**

De API draait vanaf vandaag op een nieuwe server.

## 30-04-2018
**Platform**

* Nieuwe plugin 'extra orderstatus' toegevoegd: Met deze plugin is het mogelijk handmatig orderstatussen te kunnen opgeven. Documentatie is [hier](/plugins/extra-orderstatus) te vinden.

## 26-04-2018
**Platform**

* Toegevoegd bij onderdeel 'verkopen': Kunnen zoeken op datumrange voor zowel orderdatum als factuurdatum.
* Toegevoegd bij onderdeel 'producten': Kunnen zoeken op voorraad per verkoopkanaal.
* Voor zowel onderdeel 'verkopen' als 'producten': View aangepast voor zoeken. Je kunt nu 'zoeken' en 'geavanceerd zoeken'.

## 25-04-2018
**Kassa**
* Beschikbaarheid extra betaalmethoden welke op het Platform zijn aangemaakt.

**Platform**
* Toegevoegd bij onderdeel 'kassa > Betaalmethodes': Een extra betaalmethode kunnen toevoegen.

## Updates voor 25-04-2018
_Oudere releasenotes zijn te vinden op [wiki.afosto.com](https://wiki.afosto.com/display/PUB/Updates)_
