---
layout: docs
title: Product identificatie
description: Een tool om snel producten op te kunnen zoeken en een EAN(Barcode) toe te voegen 
group: plugins
parent: plugins
toc: true
redirect_from:
- /inventariseren
---
## Pluginnaam
Algolia
## URL Plugin
pid.afosto.com  
_De plugin dient op app.afosto.com ingesteld te worden. Vervolgens kan deze gebruikt worden op pid.afosto.com_
## Omschrijving
In de fashion is het vaak zo dat producten op het moment van bestellen nog geen barcode hebben, maar deze pas op het laatste moment wordt toegevoegd. Op het moment dat de producten binnenkomen in de winkel of distributiecentrum dient het product in Afosto gekoppeld te worden aan de juiste barcode. Deze Plugin zorgt ervoor dat je een product snel kan opzoeken en voorzien van de barcode welke de leverancier heeft verschaft.  
Na het activeren en instellen van de plugin verschijnt er een menu item 'Product identificatie' in het linkermenu.
## Instellingen
De plugin zelf heeft een aantal instellingen. Het wordt geadvisseerd deze plugin door een partner laten te configureren. 
### Credentials
De Algolia Credentials.
### Search-Only API Key
De Algolia API key voor het zoeken.
### Admin API Key
De Algolia API key om admin setting aan te kunnen passen.
### Configuratie
Hier wordt de plugin geconfigureerd om de juiste gegevens voor de klant te tonen.
### Row template
Hier wordt de plugin geconfigureerd om de juiste gegeven per rij te tonen.
## Product identificatie
Onder het menu item is de volgende informatie te vinden
### Product informatie
Hier zijn de statistieken te vinden over geidentificeerde producten.
### Gebruikers
Hier wordt weergegeven hoeveel gebruikers er voor deze tool zijn aangemaakt. Gebruikers welke op app.afosto.com kunnen inloggen kunnen met deze gegevens ook inloggen op pid.afosto.com, deze gebruikers hoeven niet meer apart worden aangemaakt. Gebruikers kunnen ingesteld worden voor gebruikers welke alleen bij de tool moeten kunnen. 
Voor deze plugin kunnen gebruikers worden aangemaakt. Dit doe je door naar het menu item 'Product identificatie' te gaan. Vervolgens heb je rechtsboven een knop 'Beheer gebruikers'. Hier kan een gebruiker worden toegevoegd middels de volgende velden:
#### Gebruikersnaam
Geef hier een e-mailadres op van de gebruiker.  
De gebruiker kan vervolgens naar pid.afosto.com gaan en op wachtwoord vergeten klikken om zijn wachtwoord in te stellen.
## De Tool
Wanneer je inlogd op pid.afosto.com krijg je een scherm welke is geoptimaliseerd voor het zoeken van producten. Links vind je een aantal filtermogelijkheden. In het midden het zoekveld en de resultaten. Aan de rechterkant wordt het product weergegeven als deze is geselecteerd.
### Statussen
Een product kan status rood, oranje of groen hebben.
#### Rood
Product is nog niet geidentificeerd.
#### Oranje
Product is gedeeltelijk geidentificeerd. Bijvoorbeeld maat 42 wel, maar de overige maten niet.
#### Groen
Het product is geheel geidentificeerd.
### Product identificeren
Als het product is opgezocht krijg je aan de rechterkant specifieke informatie te zien. Je ziet hier de specificaties welke zijn ingesteld (onderaan). Ook zie je de sku en de huidige EAN. Als een productvariant nog niet geidentificeerd is kun je hier de EAN opgeven. Wanneer er een scanner is aangesloten kun je de barcode scannen.  
Naast het EAN invulveld staat een knop om de huidige EAN te kopieren in het invulvak. Dit gebruik je bijvoorbeeld om wel aan te geven dat het product geidentificeerd is, maar het geen barcode van de leverancier heeft. Ook is hier de opslaan knop te vinden.


