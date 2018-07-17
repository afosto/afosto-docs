---
layout: plugin
title: 2FA - dubbele authenticatie
description: Met deze plugin dient de gebruiker met twee stappen in te loggen.
plugin_name: 2FA - Dubbele authenticatie
plugin_url: "https://app.afosto.com/plugins/109-two-factor-auth" 
group: 2fa dubbele authenticatie
parent: plugins
toc: true
redirect_from:
- /2fa
- /dubbele-authenticatie
- /plugins/2fa
---

## Plugin Instellingen
2FA staat voor 2 factor authenticatie. Voor deze plugin zijn de volgende instellingen van toepassing.

### Aantal dagen voordat opnieuw 2FA is vereist
Hier kan worden opgegeven na hoeveel dagen er opnieuw in twee stappen ingelogd dient te worden. In de tussenliggende periode kan worden volstaan met een enkele login. Wanneer dit veld de waarde ’0’ krijgt, of leeg gelaten wordt, zal altijd om 2FA gevraagd worden. 

### Gebruikersinstellingen
Voor elke gebruiker zijn onderstaande instellingen van toepassing. Alleen de hoofdgebruiker kan bij deze instellingen.

### Gebruikersgeheim
Deze code wordt automatisch gegenereerd.

### Mobiel telefoonnummer
Vul hier het telefoonnummer van de gebruiker in. Voor Nederlandse telefoonnummers hoeft het landnummer niet worden opgegeven. Als het telefoonnummer is ingevuld dien je eerst op opslaan te klikken. 

### Google Authenticator QR
Als het telefoonnummer is opgeslagen wordt er een QR code getoond. Deze kan gescand worden met de google authenticator app. 
Deze app kan gedownload worden in de [Google Play Store](https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2&hl=nl) en in de [App Store](https://itunes.apple.com/nl/app/google-authenticator/id388497605?mt=8) en heeft de naam: ‘Google Authenticator’. 
Ga vervolgens naar de app en klik hier op het ‘+’ teken. Scan de QR code van het scherm.

### Geen Google Authenticator app?
Geen nood, je kunt 2FA authenticatie ook gebruiken met SMS. Je kunt dit activeren door zonder de QR code door te gaan naar de stap ’2FA vereist voor gebruiker’.

### 2FA vereist voor gebruiker
Om de dubbele authenticatie te activeren dient dit veld te worden aangevinkt en te worden opgeslagen.

Wanneer nu wordt uitgelogd en weer wordt ingelogd zal gevraagd worden om een code van je authenticator app. 
Mocht je de app niet hebben geïnstalleerd, dan kan je een SMS laten versturen door op de betreffende link te klikken onder het inlogscherm.
