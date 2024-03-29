---
layout: updates
title: Platform updates
description: Er vinden regelmatig updates plaats op het platform. Hieronder vindt je de notities van alle belangrijke wijzigingen in Afosto.
group: updates 
toc: true
redirect_from:
    - /releases
---

## 15-01-2019
**Platform (1.88)**

- De magazijn volgorde instellingen zijn verplaatst van **Administratie** naar **Voorraadinstellingen**.
- Met de nieuwe **Collectie uitsluiten van zoekresultaten plugin** is het mogelijk om een collectie te maken die buiten de zoekfunctionaliteit van de shop blijft. Zo kun je bijvoorbeeld aanvullende producten aanbieden die niet los te vinden zijn.
- Het overzicht van de Coupons is uitgebreid met een filter om alleen actieve coupons te tonen en een filter voor een tijdspan. Standaard worden nu alleen actieve coupons getoond.
- Wanneer een gebruiker een account aanmaakt krijgen ze een welkomst mail toegestuurd.
- Met de nieuwe **Datatrics** plugin koppel je jouw Afosto webshop gemakkelijk aan je Datatrics account.
- Het product overzicht is uitgebreid met kolommen voor SEO. Hierdoor kun je de SEO instellingen van een product ook exporteren.
- De SEO titel, beschrijving en keywords zijn uit de **Product beschrijvingen wijzigen** batch job gehaald. Deze zijn te wijzigen door middel van de **Product SEO** batch job.
- Het verzendingen overzicht is uitgebreid met een filter voor de status van de betaling.
- Wanneer je een andere prijsgroep selecteert bij een winkelgroep, worden de gekoppelde kassa’s nu standaard gesynchroniseerd.

**Fixes sinds de laatste release**

- Wanneer wij geen pickup point kunnen vinden, op basis van de informatie uit Sendcloud, wordt er nu een bericht getoond dat de verzending handmatig in Sendcloud aangemaakt dient te worden.
- De link in de email voor het wijzigen van het wachtwoord via login.afosto.com leidt weer naar de juiste pagina.
- Het berekenen van het subtotaal van een bundel die meerdere keren in je cart zit is gerepareerd.
- Er is een perfomance verbetering gedaan aan de api.



## 08-01-2019
**Kassa (3.0.85)**

- Er is functionaliteit toegevoegd voor het toevoegen van een product aan de bon met een daarbij behorende kostprijs. (Kassa kostprijs plugin)
- Er zijn verbeteringen doorgevoerd met betrekking tot de functionaliteit, voor het afhandelen van verkopen van andere verkoopkanalen (webshop / instore / kassa)
- Er zijn een aantal andere kleine verbeteringen doorgevoerd.



## 02-01-2019
**Platform (1.87)**

- Op de kassa is het nu mogelijk om orders van andere verkoopkanalen in te zien. Als deze nog niet betaald zijn kun je ze afrekenen op de kassa.
- Clean filter menu pagina’s zijn nu bereikbaar via elke combinatie. Voorheen was dit alleen het pad waarop de pagina was aangemaakt.
- Bij het bekijken van de leveringen van een sale kun je nu op het track&trace nummer klikken om de status te bekijken.
- De koppeling met Sendcloud is uitgebreid met de ondersteuning voor pickup points via PostNL en DHL.

**Fixes sinds de laatste release**

- Het informeren van de klant wanneer zijn/haar bestelling klaar ligt in de winkel is verbeterd.
- De icoontjes van de betaalmethoden en verzendmethoden kunnen weer worden verwijderd.

## 18-12-2018

**Platform (1.86)**

- Het product formulier is onder de loop genomen en geoptimaliseerd. Er is veel tijd gestoken in het verbeteren van de laadtijd van de pagina. Hierdoor werk je een stuk sneller producten bij.
- De Afbeelding importer plugin is uitgebreid met de optie om te identificeren op basis van de SKU.
- Er zijn een aantal aanpassingen gedaan omtrent de beveiliging van je webshop. Uw klanten shoppen nu nog veiliger.
- Een aantal foutmeldingen van de product importer zijn aangepast zodat ze beter te begrijpen zijn.
- De email templates voor de nieuwsbrieven plugin, verjaardagsemail plugin, pakbonnen automatisch mailen plugin zijn omgezet naar de nieuwe structuur.
- Ook de product verrijker plugin is omgezet naar de nieuwe editor.
- De Google Tag Manager plugin heeft nu ook ondersteuning voor een tracking categorie.
- Het is nu mogelijk om voor de batch opdrachten ‘Interne verzendingen aanmaken voor meerdere magazijnen’, om de magazijnen te selecteren waarnaar je wilt verzenden. Deze komen als kolommen in het overzicht te staan.

**Kassa (3.0.84)**

- Er is functionaliteit toegevoegd waardoor bij het aanmaken van een nieuwe RMA, de bijbehorende retourorder direct aan de RMA wordt gekoppeld. Hierdoor is het mogelijk om zowel vanuit platform als kassa via de retourorder de bijbehorende RMA's in te zien en vice versa. (Interne verzendingen plugin)
- Er is functionaliteit toegevoegd waardoor het nu mogelijk is om bij het aanmaken van een leverorder, reservering of RMA, eerst een product pagina te openen i.p.v. het product direct via het zoeken toe te voegen. Dit heeft als voordeel dat de volledige voorraad van het product kan worden ingezien, voordat het product  wordt toegevoegd. Het direct toevoegen is nog steeds mogelijk d.m.v. de knop die aan het einde van de rij staat, bij het zoeken naar producten. (Interne verzendingen plugin)
- Er is een probleem verholpen waarbij tijdens het zoeken van producten de voorraad niet zichtbaar was of deze visueel op 0 bleef staan, wanneer er tegelijkertijd een synchronisatie van producten plaats vond.
- Er zijn een aantal andere kleine verbeteringen doorgevoerd.

**Fixes sinds de laatste release**

- Er zijn aanpassingen gedaan voor de Bundel plugin.
- Ondersteuning voor Klarna in Oostenrijk is toegevoegd.
- Het zoeken op EAN’s en artikelnummers op de kassa is verbeterd.

## 04-12-2018
**Platform (1.85)**

- De **bundel plugin** is aanzienlijk verbeterd. 
Je maakt nu pakketen waarin één hoofd product zit en meerdere andere producten aan gekoppeld kunnen worden. 
Aan deze producten kun je afzonderlijk kortingen toekennen. 
Wil je meer weten? Neem contact op met [support@afosto.com](mailto:support@afosto.com?subject=Ik%20wil%20meer%20weten%20over%20de%20Bundel%20plugin&body=Ik%20wil%20graag%20meer%20weten%20over%20de%20bundel%20plugin.).
- Het is nu mogelijk om ook icoontjes bij verzendmethodes toe te voegen.
Wil je meer weten? Neem contact op met [support@afosto.com](mailto:support@afosto.com?subject=Ik%20wil%20meer%20weten%20over%20de%20icoontjes%20bij%20verzendmethodes&body=Ik%20wil%20graag%20meer%20weten%20over%20de%20icoontjes%20bij%20verzendmethodes.).
- Het is nu mogelijk om het sparen van loyalty punten bij bonkorting op de kassa uit te zetten. Wil je meer weten? Neem contact op met support@afosto.com.
- Wanneer je gebruik maakt van een andere valuta dan de Euro, wordt nu ook het juiste teken in het platform gehanteerd.
- De SEO instellingen bij collecties zijn uit het platform gehaald. 
Deze hadden al geen effect meer op je webshop.
De SEO instellingen zijn nu alleen te beheren per pagina en per product.

**Fixes sinds de laatste release**

- Het compileren van de css voor webshops is verbeterd.
- Er zijn controles toegevoegd aan de product import functionaliteit om fouten in het bestand te herkennen.
- Er zijn een aantal andere verbeteringen doorgevoerd.

## 20-11-2018
**Platform (1.84)**

- De gegenereerde pdf facturen kunnen nu uitgebreidere informatie tonen van betalingen. Bijvoorbeeld de factuur van een kassa order kan nu informatie over de pin betalingen tonen. Mocht je deze informatie op je factuur willen tonen, neem dan contact op met [support@afosto.com](mailto:support@afosto.com?subject=Factuur%20data%20uitbreiden&body=Ik%20wil%20graag%20mijn%20factuur%20data%20uitbreiden%20met%20payment%20data.).
- De nieuwe **Uitgebreide email plugin** maakt het mogelijk om je berichtgeving emails op te maken. Hiervoor is een nieuwe code editor geïntroduceerd waarin email templates gemaakt kunnen worden. Heb je geen kennis van HTML, CSS en Twig? neem dan contact op met [support@afosto.com](mailto:support@afosto.com?subject=Ik%20wil%20graag%20opgemaakte%20emails&body=Ik%20wil%20graag%20gebruik%20maken%20van%20de%20Uitgebreide%20emails%20plugin.) en vraag naar de mogelijk.
- Bij de **verzendkoppelingen plugin** is het nu mogelijk te koppelen met `Veloyd`. Dit platform is onderdeel van de pakket dienst [Raas Koeriers](https://raaskoeriers.nl/).

**Kassa (3.0.83)**

- Er is functionaliteit toegevoegd waardoor nu RMA's (Return merchandise authorization), zoals klachtafhandeling / reparaties, kunnen worden aangemaakt vanaf de kassa. (**plugin**)
- De sortering van de producten lijst bij het zoeken van producten is verbeterd. Hierdoor komen producten met de meest relevante score, nu bovenaan te staan.
- Er is een probleem verholpen m.b.t. het installeren / resetten van het kassasysteem op iPads met de laatste IOS update (12.1.0).
- Er zijn een aantal andere kleine verbeteringen doorgevoerd.

**Fixes sinds de laatste release**

- Er zijn veel verbeteringen gedaan aan de zoekmachine.



## 05-11-2018
**Platform (1.83)**

- Het zoeken is aanzienlijk verbeterd, dit geldt voor zowel je shop als het platform.
- Het sorteren van producten op een menu item is aangepast. Je kan nu een selectie maken van producten die je handmatig sorteert en boven aan komen te staan. De overige producten kun je automatisch sorteren.
- Er zijn kleine verbeteringen doorgevoerd in het valideren van coupon codes en in de api.

**Fixes sinds de laatste release**

- Het zoeken naar menu items is verbeterd zodat elk menu doorzocht kan worden.
- Er zijn meerderen aanpassingen gedaan aan het compileren van de assets in de template editor.



## 23-10-2018
**Platform (1.82)**

- De **interne verzendingen plugin** is uitgebreid. Bij het aanmaken van een automatische leverorder heb je een veld beschikbaar om het maximaal te verzenden aantal kunt instellen.
- De **Google Data Studio plugin** verstuurd nu realtime nieuwe orders door naar Data Studio. 
- Voor de webshop bouwers: de snelheid van het compileren van javascript en scss is verbeterd.

**Kassa (3.0.82)**

- Notificaties zijn nu gegroepeerd in de volgende basis groepen: `Updates`, `Nieuws` en `Orders` .
Tevens zijn er groepen aangemaakt voor de plugins, zoals `Reserveringen / Leverorders` en het printen van labels.
- In de **leverorder / reserveringen plugin**, is een instelling toegevoegd waarbij voor het aanmaken van een leverorder, het oorsprongsmagazijn wordt vastgezet.
- Er zijn kleine verbeteringen doorgevoerd m.b.t. de afhandeling van leverorders / reserveringen (plugin).
- Verlopen coupons zijn nu wel zichtbaar op de kassa, zodat inzichtelijk is wanneer een coupon precies is verlopen.
Tevens wordt op het betaalscherm getoond hoe lang een coupon nog geldig is.
- Er zijn een aantal andere kleine verbeteringen doorgevoerd.

**Fixes sinds de laatste release**

- Importeren van producten met afbeeldingen via een csv is verbeterd.
- Het verwerken van prijs mutaties via de **prijs mutatie bucket plugin** is geoptimaliseerd.



## 16-10-2018

**Kassa (3.0.81)**
- **Belangrijk**: Voor het opstarten / refreshen / kassa resetten en het uitvoeren van kassa updates, is een stabiele internetverbinding nu een vereiste. Indien er op deze momenten geen sprake is van een stabiele internetverbinding, dan kan de kassa niet worden geladen.
- Het opstarten van de kassa (indien deze niet al is opgestart) zou iets langer kunnen duren dan normaal, afhankelijk van de stabiliteit en snelheid van de internetverbinding.

## 02-10-2018

**Platform (1.81)**

- Het is nu mogelijk om bij het menu overzicht ook te zoeken binnen het actieve menu.
Het zoekveld deed dit voorheen alleen voor pagina’s zonder menu.
Ook staat achter elk menu item de slug van de pagina.
- Voor webshops is nu mogelijk de verzendmethoden te sorteren.
Dit werkt op de zelfde manier als het sorteren van betaalmethoden.
- In de **Inventarisatie plugin** zijn een aantal aanpassingen gedaan.
  - De producten staan nu in twee tabellen in plaats van drie.
  Hierbij bevat een van de tabellen de 3 laatst gescande producten.
  - Het is nu mogelijk om een opmerking te plaatsen per regel.
- Bij het voorraadmutaties overzicht is het nu ook mogelijk opmerkingen te plaatsen per regel.
- In de overzichten voor klanten, producten, orders en pakbonnen kun je nu een export maken van de aangevinkte regels.

**Kassa (3.0.80)**

- Het is nu mogelijk om orders in te zien (niet bewerken) van de overige verkoopkanalen, zoals webshop orders en kassa orders die bij een andere kassa zijn afgerond.
- Het is nu mogelijk om een aantal standaard rechten toe te kennen aan de kassamedewerkers, zodat deze bijvoorbeeld niet de rapportages kunnen inzien, indien dat niet wenselijk is.
- Er zijn een aantal andere kleine verbeteringen doorgevoerd.

**Fixes sinds de laatste release**

- Er is een verbetering gedaan in de **Interne verzendingen plugin**.
- In het producten overzicht is er per verkoopkanaal een kolom beschikbaar gemaakt genaamd `Publicatie datum`. Deze geeft aan wanneer een product voor het eerst beschikbaar is gekomen op dat verkoopkanaal.



## 18-09-2018
**Platform (1.80)**

- Het is nu mogelijk in Afosto een nieuwe type gebruiker aan te maken. 
Het gebruiker type `Medewerker` geeft toegang tot het inloggen op de kassa. 
Je hoeft dus nu niet meer het hoofd account te gebruiken.
- Het is nu mogelijk om producten uit te sluiten van coupon korting en bon korting. 
Dit is echter alleen van toepassing op de kassa. 
Ondersteuning voor de webshop wordt aan gewerkt.
- Bij het aanmaken van een retour order is het nu mogelijk om verzendkosten mee te rekenen in de credit.

**Kassa (3.0.79)**

- Het is nu mogelijk om producten uit te sluiten van coupon korting en bon korting.
- Het is nu mogelijk om gebruikers (`medewerkers`) toe te voegen in het Afosto platform, zodat op de kassa niet meer ingelogd hoeft te worden met het hoofdaccount. 
Deze gebruikers kunnen worden gekoppeld aan verkoopkanalen. 
Hierdoor is het nu mogelijk om bijvoorbeeld per locatie een gebruiker aan te maken en deze alleen toegang te geven tot de bijbehorende verkoopkanalen van die locatie.
- Er zijn een aantal andere kleine verbeteringen doorgevoerd.

**Fixes sinds de laatste release**

- In de redirect lijst is het mogelijk gemaakt om regels in bulk te verwijderen.

## 04-09-2018
**Platform (1.79)**

- De nieuwe plugin **Standaard land in de checkout op basis van IP** zet automatisch in de checkout de keuze voor het land.
Dit gebeurd door de locatie van de gebruiker te controleren op basis van zijn/haar IP adres.
- De webshops ondersteunen nu meerdere valuta. De weergave van de prijs zal op basis van de valuta en de taal van de webshop worden aangepast.
De valuta kun je instellen bij de prijsgroepen.
- De **Retourorders** plugin is uitgebreid met de ondersteuning voor het retourneren van spaarpunten.
- In het producten grid is het nu mogelijk om per prijsgroep te tonen welke verkoopkanalen deze is gekoppeld.
- De instellingen voor de **Betaalrapportage** op de kassa zijn uitgebreid. Hierbij is de optie toegevoegd om de eindstand van de vorige betaalrapportage, automatisch in te vullen bij de beginstand van een nieuwe betaalrapportage.
Deze instelling staat standaard uit en is in het platform bij de kassa instellingen te wijzigen.

**Kassa (****3.0.78****)**

- Er zijn meerdere verbeteringen doorgevoerd m.b.t. de **betaalrapportage** functionaliteit. 
  - Alle waarden die ingevuld moeten worden voordat een betaalrapportage kan worden afgerond, vallen nu meer op indien deze niet zijn ingevuld. 
  - Op de regels voor het tellen van de kassalade / kasmutaties / afromen, is bij de betaalrapportage een knop bijgekomen waarmee de kassalade kan worden geopend. 
- Er zijn een aantal andere kleine verbeteringen doorgevoerd.

**Fixes sinds de laatste release**

- De specificaties en collecties rapportages zijn geoptimaliseerd.
- Een aantal kleine bugs die naar voren kwamen na het uitrollen van de betaalrapportage zijn verholpen.
Deze bugs hebben verder geen impact gehad op de uiteindelijke data in de rapportage.


## 21-08-2018
**Platform (1.78)**

- Bij het sorteren van filter opties en specificatie attributen is de optie toegevoegd om snel een voor sortering te doen.
Door op een van de twee knoppen rechts bovenin te klikken kun je de opties oplopend of aflopend voorsorteren.
- Bij het aanmaken van een interne verzending kun je nu een notificatie ontvangen op de kassa.
Hiervoor kun je kassa’s koppelen aan magazijnen.
Zodra er een interne verzending wordt aangemeld voor een magazijn, krijgen de gekoppelde kassa’s een notificatie.
- Om de nieuwe **betaalrapportages** van de kassa in te kunnen zien is er in het platform de mogelijk deze te bekijken en downloaden.

**Kassa (3.0.75)**

- De dagtotaal functionaliteit en kasmutaties zijn vervangen door de **betaalrapportage**.
Hiermee is het opmaken van een dagelijkse rapportage en het bijhouden van kasmutaties verwerkt in één omgeving. 
  - Op deze rapportage is per betaalmethode de omzet berekening uitgesplitst.
  - Het is nu ook mogelijk deze rapportage te delen met meerder kassalades.
  Zo kun je één dagelijkse rapportage opmaken voor je hele winkel.
  - Ook is de mogelijkheid toegevoegd om opmerkingen toe te voegen en correcties in te voeren.

**Fixes sinds de laatste release**

- In het product formulier is een aanpassing gedaan op het invullen van magazijnlocaties.
Deze worden nu niet meer vanaf boven overgenomen. 
- Filters van het type **radio** werken nu ook goed samen met filtermenu items.
- Berichten die door het platform naar de webshop worden gestuurd, bijvoorbeeld `[name] was added to cart`, zijn nu standaard ook te vinden in de vertaallijsten en te vertalen.
- Bij de **Freshdesk plugin** is het downloaden van de import lijst weer gerepareerd.



## 14-08-2018
**Platform (1.77)**

- Met de nieuwe plugin **Dynamische filters** kun je binnen een menu item een filter toepassen.
De twee beschikbare opties zijn zijn datum of tijdsvak en op afgeprijsde producten.
Zo kun je makkelijk een sale pagina maken of laatst toegevoegde producten tonen.
- Bij de **Shop meer links** plugin is het nu mogelijk pagina's uit te sluiten.
Je kan links uitsluiten van de lijst met shop meer links.
- Voor developers is het nu mogelijk om prijs mutaties door te geven via webhooks door middel van de **Prijs mutatie bucket plugin**.
Om hiervan gebruik te maken kun je contact opnemen met [support@afosto.com](mailto:support@afosto.com?subject=Aanvraag%20prijs%20mutatie%20bucket%20plugin&body=Ik%20wil%20graag%20gebruik%20maken%20van%20de%20Prijs%20mutatie%20bucket%20plugin).

**Fixes sinds de laatste release**

- Afbeeldingen en bestanden worden nu standaard geserveerd vanaf een nieuwe CDN.
Hier hoef je niks voor aan te passen. 
Wil je dat je afbeeldingen van een eigen subdomein geserveerd worden?
Neem dan contact op met [support@afosto.com](mailto:support@afosto.com?subject=Aanvraag%20custom%20cdn%20url&body=Ik%20wil%20graag%20een%20eigen%20cdn%20url%20voor%20mijn%20afbeeldingen).
- Een aantal plugins zijn aan de achterkant aangepast en verbeterd.



## 31-07-2018

**Platform (1.76)**

- De zichtbaarheid van product variant op de shop is vanaf nu gelijk aan die van het hoofdproduct.
Het is niet meer mogelijk om de zichtbaarheid van varianten in te stellen.
- Afbeeldingen worden vanaf nu standaard geserveerd vanaf een nieuwe <abbr title="Content Delivery Network">CDN</abbr>.
Daarnaast is de **CDN plugin** beschikbaar gemaakt.
Met deze plugin kun je een eigen CDN url opgeven waar de afbeeldingen vanaf worden geserveerd aan je webshop.
Neem contact op met [support@afosto.com](mailto:support@afosto.com?subject=Plugin%20aanvraag%3A%20CDN&body=Ik%20wil%20graag%20gebruik%20maken%20van%20de%20CDN%20plugin.) voor de mogelijkheden.
- Het is nu mogelijk producten als een set toe te voegen aan de winkelwagen.
Bijvoorbeeld een camera met een SD-kaart, deze kunnen dan als één producten worden getoond.
Dit kan bijvoorbeeld gebruikt worden om Addon producten uit de **Up-selling, verwante producten en cross-selling plugin** bij het hoofdproduct te zetten.
Voor meer informatie kun je contact opnemen met [support@afosto.com](mailto:support@afosto.com?subject=Informatie%20aanvraag%3A%20Product%20sets%20d.m.v.%20addon%20producten&body=Ik%20wil%20graag%20meer%20informatie%20over%20Product%20sets%20en%20de%20addon%20producten.).

**Fixes sinds de laatste release**

- Een kleine bug in het navigeren van de batch lijsten door middel van de tabjes is weggehaald.
Hierdoor werd bij het klikken op een tabje de pagina een stuk naar beneden gescrold.
- Een aantal kleine aanpassingen zijn doorgevoerd en een aantal typefouten zijn uit het platform gehaald.



## 24-07-2018
**Platform (1.75)**

- Het is nu mogelijk om bij een betaalmethode een afbeelding te koppelen.
Deze kan in de checkout van je webshop worden getoond. Je webshop zal hiervoor aangepast moeten worden.
Neem contact op met [support@afosto.com](mailto:support@afosto.com?subject=Aanvraag%20afbeeldingen%20bij%20betaalmethoden&body=Ik%20wil%20graag%20gebruik%20maken%20van%20afbeeldingen%20bij%20de%20betaalmethoden) om te vragen naar de mogelijkheden.
- Wanneer het product toevoegen via een AJAX request (op de achtergrond zonder pagina herladen) wordt uitgevoerd krijgt de browser een antwoordt van het Afosto platform.
Dit antwoord is uitgebreid met de data van het laatst toegevoegde product.
- Er zijn verbeteringen doorgevoerd waarbij de verwerking van producten is verfijnd.
Hierbij zijn taken van de voorgrond naar de achtergrond verplaatst.
Daardoor is het opslaan van de producten soepeler en beter geworden.
- De **Up-selling, verwante producten en cross-selling plugin** is uitgebreid met de **Addon producten**.
Deze producten kunnen zowel op de productpagina als de cart pagina getoond worden.
Hiermee kun je bijvoorbeeld uitbreidingen op een product instellen en aanbieden aan je klanten.
Neem voor meer informatie contact op met [support@afosto.com](mailto:support@afosto.com?subject=Meer%20informatie%20over%20addon%20producten&body=Ik%20wil%20graag%20meer%20informatie%20over%20Addon%20producten).


## 17-07-2018
**Platform (1.74)**

- Het is nu mogelijk icoontjes te uploaden voor filter opties.
Bijvoorbeeld rondjes met de kleur van de optie.
Je webshop dient hier wel voor aangepast te worden.
Hiervoor kun je contact opnemen met onze [support afdeling](mailto:support@afosto.com?subject=Aanvraag%20icoontjes%20bij%20filteropties%20in%20webshop&body=Ik%20wil%20mijn%20shop%20aangepast%20hebben%20zodat%20ik%20icoontjes%20bij%20mijn%20filter%20opties%20kan%20tonen).
- De **Interne verzendingen plugin** is aangepast met een verbeterde interface voor de automatische leverorder.
Het maken van een selectie is nu makkelijker en uitgebreider.

**Fixes sinds de laatste release**

- De **Family Blend plugin** is aangepast zodat de noscript pixel altijd ingeladen wordt.
- In een bepaald scenario werd bij het handmatig aanmaken van een factuur de betaalstatus niet correct opgeslagen.
Dit kan nu niet meer voorkomen.
- De kortingen in de **Specificatie rapportages plugin** worden nu goed doorberekend in de totalen wanneer de korting velden leeg zijn.


## 11-07-2018
**Platform (1.73)**

- De nieuwe **2FA - Dubbele authenticatie plugin** maakt het mogelijk om two factor authenticatie toe te voegen voor je users.
Hiermee voeg je een extra beveiliging toe aan je account.
Je kan hiervoor gebruik maken van bijvoorbeeld de Google Authenticator app, maar je kan ook een sms laten sturen naar het ingestelde telefoonnummer.
- Met de **2FA - Dubbele authenticatie plugin** word ook het nieuwe sms overzicht geïntroduceerd.
Hierin kun je alle sms’jes zien die via jouw account zijn verstuurd.
- Met de nieuwe **Verzendingen beheren plugin** kun je meerdere pakbonnen of facturen in één keer afdrukken. 
- Het is nu mogelijk om per product aan te geven of het toegestaan is deze als backorder te bestellen.
Deze zal de instelling van je shop dan overschrijven en het product op de shop bestelbaar houden.

**Fixes sinds de laatste release**

- Een probleem met de weergave van producten in de orders binnen de mijn account pagina’s van de shops is verholpen.
- Een bug waarbij foute url’s werden aangemaakt is verholpen.
- Het aanmaken van interne verzendingen via de POS gaf in sommige gevallen foutmeldingen.
Deze zijn verholpen en het aanmaken via de POS werkt weer.
- Wanneer een geüploade pdf beschadigd is wordt hier nu een melding van gemaakt binnen het platform.
Je kan deze zien in het Logs overzicht.


## 26-06-2018
**Kassa (3.0.76)**
- Er zijn verbeteringen doorgevoerd m.b.t het starten en controleren van pin transacties van de **Pay.nl** pin koppeling, bij wegvallende pin / internet verbindingen.
Bij het starten van een nieuwe pin betaling, wordt nu altijd eerst de status van de laatste niet geslaagde pin transactie opnieuw opgehaald.
In het geval dat een klant wel betaald heeft maar de kassa geen feedback heeft ontvangen, dan wordt deze pin transactie alsnog op betaald gezet.
Indien de kassa wel feedback heeft gehad, wordt een nieuwe pin transactie gestart.
- In het Afosto platform zijn voor de kassa voorraad instellingen toegevoegd waarbij kan worden ingesteld welke magazijnen worden weergegeven op de kassa.
De weergave van de totale voorraad op de kassa is dan ook gebaseerd op de geselecteerde magazijnen.
- Er zijn een aantal andere kleine verbeteringen doorgevoerd.

**Platform (1.72)**

- De **Facebook pixel plugin** is uitgebreid met een extra instelling.
Er wordt dan extra data meegestuurd naar Facebook wanneer een klant een product aan de winkelwagen toevoegt.
Om hier gebruik van te maken zijn aanpassingen aan de code van je webshop vereist.
Neem contact op met je expert of met [support@afosto.com](mailto:support@afosto.com?subject=Aanvraag%20uitgebruide%20Facebook%20implementatie&body=Ik%20wil%20graag%20gebruik%20maken%20van%20de%20uitgebreide%20Facebook%20pixel%20implementatie).
Ben je zelf handig met code? kijk dan naar [de handleiding](https://help.afosto.com/plugins/uitgebreide-facebook-pixel-implementatie){:target="_blank"} om dit te implementeren.
- Het is nu mogelijk om een order gedeeltelijk te retourneren.
De **Betalingen terugboeken plugin** is hiervoor ook aangepast en maakt het mogelijk om voor deze gedeeltelijke retour ook een terugbetaling aan te maken.
- De nieuwe **Specificatie rapportages plugin** voegt twee nieuwe rapportage types toe.
Hierbij is het mogelijk om op basis van specificaties een overzicht te krijgen per specificatie / specificatie set.
De tweede maakte het mogelijk om producten te filteren op basis van een of meerdere specificaties zodat alleen de producten die deze specificaties hebben, in de rapportage worden opgenomen.

**Fixes sinds de laatste release**

- Het downloaden van de foutmeldingen bij een import is weer werkend.
- De **LetsEncrypt plugin** vult nu automatisch certificaat en bundel in.
- Reserveringen / leverorders kunnen op de kassa weer verwijderd worden.
- In de rode menubalk is het zoekveld vervangen voor een link naar [help.afosto.com](https://help.afosto.com/) en een overbodige link weggehaald.
- Een bug waarbij de homepage verwijderd kon worden vanuit het menu is verholpen.
- De **Producten gegroepeerd weergeven plugin** is verbeterd en kan gebruikt worden voor accounts met veel producten.
- De pagina’s van de **Mijn wensenlijst plugin** hebben een `noindex folow` meta attribuut gekregen. Hierdoor wordt deze niet geïndexeerd voor Google Search maar wel gevolgd door Google Analytics.
- Een bug in de **Google Analytics plugin** is na de release direct verholpen. Hierdoor werden events tijdelijk niet gevuurd naar Google Analytics.
- Het zoeken op meerdere woorden op de webshops is gerepareerd.



## 12-06-2018
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
- **Fietskoeriers** is toegevoegd aan de **Verzend koppelingen** om het mogelijk te maken om Same Day Delivery te ondersteunen. 
- Het probleem waarbij orders wel betaald waren maar geen factuur hadden is verholpen.
- De nieuwe plugin **Order opmerkingen versturen** maakt het mogelijk om opmerkingen bij verkopen te versturen naar de klant in een opgemaakte email.
- De **Google Analytics plugin** verstuurd ip-adressen nu geanonimiseerd naar Google om de privacy van uw klanten te waarborgen.
- In het producten overzicht zijn de titels van de kolommen voor **Prijs incl.**, **Actie prijs incl.**, **Actief** en **BTW %** aangevuld met de naam van de prijsgroep waar deze bij horen. Ook zijn voor de taalgroepen de kolommen voor **Naam**, **Korte omschrijving** en **Omschrijving** aangevuld met de naam van de productgroep waar deze bij horen.
- Een nieuwe plugin die een koppeling mogelijk maakt met [**Family Blend**](http://familyblend.nl/){:target="_blank"}.

**Fixes sinds de laatste release**

- Het menu aan de linker kant kan nu omhoog en naar beneden gescrollt worden.
- Een fout bij het zoeken op volledige EAN’s voor **Aanvullende, Upsell en impulsverkoop** producten is verholpen.
- In het klanten overzicht is het nu mogelijk om te zoeken op postcode.
- Er is een verbetering doorgevoerd in het kiezen van de beste levermagazijnen.
- De **Fashion Partner plugin** is uitgebreid met de mogelijkheid om de inhoud van dozen, die met een interne verzending zijn opgevraagd, in een keer op te boeken.
- Na de server migratie van [02-05-2018](#02-05-2018) werden kopieën van facturen en orders niet altijd verstuurd naar de bij berichtgeving ingestelde e-mailadressen. Dit is nu weer verholpen.
- Developers kunnen in de [API documentatie](https://docs.afosto.com/){:target="_blank"} weer de autorisatie om test calls te doen weer gebruiken.

## 29-05-2018
- Het zoeken van producten in zowel platform als webshop is verbeterd waardoor het zoeken op EAN en SKU betere resultaten geeft.
- De plugin **clusterraportage** is herschreven om een beter overzicht te genereren in een excel bestand.
- De BetaOut plugin is uitgebreid met ondersteuning voor desktop push berichten.

**Fixes sinds de laatste release** 
- Mogelijkheid om voorraad te tonen per winkelgroep in het producten overzicht. Hierbij worden de aan de winkelgroep gekoppelde magazijnen gebruikt.
- Door een bug in de pagina **Kortingsregels** konden deze niet opgeslagen worden, dit is opgelost en kan weer gebruikt worden.
- Het zoeken op specificaties gaf een foutmelding wanneer de zoekterm een `‘` bevat, bijv. Levi’s. De ondersteuning voor speciale tekens in deze zoekopdracht is verbeterd.
- Betaalmethodes van de kassa kunnen weer opgeslagen worden in het platform.
- Het pagina overzicht is verwijderd. Je kan de pagina’s nu alleen bewerken via **Menu’s**.
- Het uploaden van logo’s bij kassa en webshop administratie is weer gerepareerd.
- Het zoeken op specificaties was tijdelijk uitgeschakeld. Doordat er een proces op de perfomance drukte zorgde dit voor problemen. Dit is nu gerepareerd en je kan weer zoeken op specificaties.
- Het verwijderen van klanten waar een coupon code aan is gekoppeld is mogelijk gemaakt.


## 15-05-2018
**Platform**

- De Price Group Switch plugin is uitgebreid 
  - Er is de mogelijkheid toegevoegd om bij een prijsgroep aan te geven dat de gebruiker ingelogd moet zijn om de shop te gebruiken.
  - De tabel met e-mailadressen die toegang krijgen tot deze prijsgroep was op kleinere schermen niet meer te zien. Dat is nu verholpen door een minimale hoogte te geven aan de tabel.
- De beschikbaarheid van verzendmethoden in andere landen op basis van het gewicht van de order is verbeterd.
- Kopieën van orders die na de server migratie van 02-05-2018 niet meer werden verstuurd worden nu weer verstuurd.

**Kassa**

De kassa bevat een update van de PayNL SDK waardoor er een paar wijzigingen nodig waren.
- Fashionchecks kunnen nu weer naar behoren gebruikt worden
- De bon bevat bij een pin betaling meer informatie over de kaart waar mee is betaald en de transactie die ermee is volbracht. 

## 07-05-2018
**Platform**

- Toegevoegd bij onderdeel 'kassa' > 'Algemene POS instellingen' - Leverorders: Items standaard weergegeven als geleverd.
- Toegevoegd bij onderdeel 'kassa' > 'Algemene POS instellingen' - Reservering: Items standaard weergegeven als geleverd.

**Kassa**

- Toegevoegd bij onderdeel 'Leveringsorders'- Button met twee opties: 'Alles op niet geleverd zetten' / 'Alles op geleverd zetten'. Tevens kan de standaard waarde van deze button worden ingesteld onder instellingen. 
- Er is een probleem verholpen m.b.t. kasmutaties, waarbij de kassalade niet altijd open gaat.
- Indien je beschikt over de interfiliaal verkeer plugin, dan is er functionaliteit toegevoegd waarbij bij het nu mogelijk is om leverorders vanaf de kassa aan te maken.
- Indien je beschikt over de print product labels plugin (POS), dan is er functionaliteit toegevoegd waarbij je vanaf de kassa per product een product label kunt laten genereren en downloaden.
- Er zijn een aantal andere kleine verbeteringen doorgevoerd.

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

- Nieuwe plugin 'extra orderstatus' toegevoegd: Met deze plugin is het mogelijk handmatig orderstatussen te kunnen opgeven. Documentatie is [hier](/plugins/extra-orderstatus) te vinden.

## 26-04-2018
**Platform**

- Toegevoegd bij onderdeel 'verkopen': Kunnen zoeken op datumrange voor zowel orderdatum als factuurdatum.
- Toegevoegd bij onderdeel 'producten': Kunnen zoeken op voorraad per verkoopkanaal.
- Voor zowel onderdeel 'verkopen' als 'producten': View aangepast voor zoeken. Je kunt nu 'zoeken' en 'geavanceerd zoeken'.

## 25-04-2018
**Kassa**
- Beschikbaarheid extra betaalmethoden welke op het Platform zijn aangemaakt.

**Platform**
- Toegevoegd bij onderdeel 'kassa > Betaalmethodes': Een extra betaalmethode kunnen toevoegen.

## Updates voor 25-04-2018
_Oudere releasenotes zijn te vinden op [wiki.afosto.com](https://wiki.afosto.com/display/PUB/Updates){:target="_blank"}
