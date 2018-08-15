---
layout: plugin
title: Koppeling Freshdesk
description: Deze plugin zorgt voor een koppeling met Freshdesk
plugin_name: Freshdesk
plugin_url: "https://app.afosto.com/plugins/42-freshdesk" 
group: freshdesk koppeling
parent: plugins
toc: true
redirect_from:
- /freshdesk
---
## Omschrijving
Deze plugin zorgt voor een koppeling met Freshdesk. Klanten kunnen in hun accountoverzicht tickets inzien. Daarnaast kan in Freshdesk orderinformatie teruggevonden worden en in Afosto Freshdesk informatie. 
### Klantinformatie freshdesk
De plugin stuurt klantinformatie naar Freshdesk, zodat de klant bekend is in Freshdesk. In freshdesk komt een link te staan van de klant in Afosto.
### Klantenkaart Afosto
De plugin geeft bij een klant een overzicht van Freshdesk tickets. De volgende velden worden getoond.
* Ticketnummer
* Naam aanvrager
* onderwerp
* Status
* Aangemaakt op
* Bijgewerkt op
* Link naar ticket in freshdesk

### Webshop
De ticketinformatie is ook beschikbaar voor de klant. Dit is te vinden in het 'mijn account' gedeelte van de webshop.
* Ticketnummer
* Naam aanvrager
* onderwerp
* Status
* Aangemaakt op
* Bijgewerkt op

## Plugin instellingen
De plugin zorgt voor de koppeling met Freshdesk door de volgende instellingen te configureren.
### API key
Hier vul je de API key in van Freshdesk. Deze API key kun je vinden onder je profielinstellingen. 
### freshdesk.com domein
Hier vul je je freshdesk domeinnaam in.
### Aangepast URL veld voor klant link
Zoals hiervoor genoemd kan vanuit Freshdesk de klant in Afosto benaderd worden. Hier moet een nieuw veld voor aangemaakt worden op de Freshdesk klantenkaart. Dit dien je te doen onder Beheer > Algemene instellingen > Klantvelden. Vervolgens kan je boven het getoonde formulier nieuwe velden toevoegen  (zie: [https://support.freshdesk.com/support/solutions/articles/203410-customizing-customer-fields] (https://support.freshdesk.com/support/solutions/articles/203410-customizing-customer-fields){:target="_blank"} ). Het is belangrijk dat je het type 'url' veld hiervoor gebruikt. Bij het veld label kan je een willekeurige waarde invullen. 
Als je dit gedaan hebt wordt deze optie getoond in deze instelling van de Freshdesk plugin in Afosto. Deze dien je hier te selecteren.
### Download importbestand
Met deze optie kun je een klantenbestand downloaden vanuit Afosto welke je kunt importeren in Freshdesk. Dit kan je gebruiken bij de start met Freshdesk

