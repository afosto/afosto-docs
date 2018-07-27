---
layout: docs
title: Geavanceerde instellingen
description: Binnen geavanceerde instellingen kun je doorverwijzingen (redirect) van een ander domein naar het geselecteerde domein instellen. Tevens kun je hier je SSL certificaat uploaden.
group: geavanceerde instellingen
parent: webshop
toc: true
redirect_from:
- /geavanceerde-instellingen
- /ssl-certificaten
---

## Instellingen
Deze instellingen werken ook samen met de plugin [Lets Encrypt SSL certificaten](/plugins/lets-encrypt-ssl-certificaten).
 
### Status
Hier zie je de status van Het SSL certificaat. Als deze status ‘Actief’ heeft is deze goed ingesteld.

### SSL geldigheid
Hier wordt weergegeven hoeveel dagen het geïnstalleerde certificaat nog geldig is. 

### Geldige SSL domeinen
Elk certificaat kan een aantal domeinen omvatten. Hier wordt weergegeven voor welke domeinen het certificaat geldig is.

### DNS status
Afosto doet een check of de verwijzingen van je domeinen goed staan ingesteld. Als deze status groen heeft, staat dit goed ingesteld. 

### Doorverwijzingen
Hier kun je 1 of meerdere urls opgeven welke een doorverwijzing moeten krijgen naar het huidige domein. 
Op deze domeinen wordt geen SSL geïnstalleerd. Is er wel vereist op het domein, dan dient er een apart verkoopkanaal aangemaakt te worden waar er op het domein een SSL geinstalleerd wordt. 

### SSL certificaat bundel
Plak hier de SSL certificaat bundel. Deze verkrijg je nadat je een certificaat hebt aangeschaft. Na opslaan wordt deze key hier uit veiligheidsoverwegingen maar gedeeltelijk getoond.  
Maak je gebruik van de plugin ‘Lets Encrypt SSL certificaten’ dan wordt dit veld automatisch gevuld. 

### SSL sleutel
Plak hier de SSL sleutel. Deze verkrijg je nadat je een certificaat hebt aangeschaft. Na opslaan wordt deze key hier uit veiligheidsoverwegingen maar gedeeltelijk getoond.  
Maak je gebruik van de plugin ‘Lets Encrypt SSL certificaten’ dan wordt dit veld automatisch gevuld. 

