---
layout: plugin
title: Order opmerkingen versturen
description: Deze plugin maakt het mogelijk om opmerkingen die bij een order zijn geplaatst te mailen naar de klant.
plugin_name: Order opmerkingen versturen
plugin_url: "https://app.afosto.com/plugins/105-sale-comment-mailer"
group: Order opmerkingen versturen
parent: plugins
toc: true
redirect_from:
- /order-opmerking-versturen
---

## instellingen
Na de installatie krijg je een overzicht van onderstaande instellingen te zien. 

### E-mail adres afzender
Stel hier het adres in welke als afzenderadres ingevuld moet worden.

### Onderwerp
Hier kun je het onderwerp in plaatsen. Dit is standaard, geef hier dus ook een algemene benaming aan, bijvoorbeeld: 'Bericht over uw order'.

### Email template
Hier zie je een preview van de mailopmaak welke verstuurd wordt. Deze kun je bewerken door op de knop 'Bewerken' te klikken. Het template is opgemaakt in html/css in combinatie met TWIG. de opmerking roep je aan door `{% raw %}{{object.comment}}{% endraw %}`.  
Weet je niet hoe dit moet? Dan kun je contact opnemen via [support@afosto.com](mailto:support@afosto.com?subject=order%20opmerking%20template%20aanvraag).


## Opmerking mailen

Je kunt een opmerking bij een order plaatsen. Nadat je dit gedaan hebt kun je met de knop ‘Mailen’ achter de opmerking, de opmerking naar de klant mailen.


