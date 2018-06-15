---
layout: docs
title: Producten importeren
description: Hier wordt uitgelegd hoe je een importbestand voor je producten het beste kan opbouwen om deze te kunnen importeren. Daarnaast is het belangrijk de headers van je import juist te benoemen, dan worden deze automatisch overgenomen voor het importeren.
group: producten
parent: platform
toc: true
redirect_from:
    - /platform/importeren
---

### Artikelnummer _(verplicht)_  
Dit kan een willekeurig nummer zijn, maar ook het artikelnummer van de leverancier.

### Ean
De ean, vaak ook barcode genoemd zorgt ervoor dat producten makkelijk gescand kunnen worden aan de kassa. Ook voor de zoekmachines is het interessante informatie.
Het is aan te raden om hier het nummer van de leverancier voor te gebruiken. Wanneer het veld leeg wordt gelaten, genereerd het systeem automatisch een EAN nummer. 

### Naam _(verplicht)_  
De naam van een product is belangrijk voor de zoekmachines, de url en natuurlijk klantvriendelijkheid.
Het is aan te raden de naam volgens een patroon op te zetten, Voor een schoenenwinkel kan dit bijvoorbeeld zijn: 
 
**Voorbeeld:**
> {Merk} {type} {categorie_enkelvoud} {kleur}  
> Puma xjt sandaal zwart
### Korte beschrijving _(verplicht)_
De korte beschrijving is de ondertitel van een product. Deze kan naar wens worden ingevuld. Wel geldt ook hier dat het raadzaam is om dit volgens een bepaald patroon te doen.

### Beschrijving
De beschrijving van het product is hier in te voeren. 

### Kostprijs
_Formaat: 00.00 (een punt gebruiken als decimaalteken)_  
De kostprijs is exclusief BTW. Deze is op maatniveau op te geven.

### Verkoopprijs _(verplicht)_
_Formaat: 00.00 (een punt gebruiken als decimaalteken)_  
De verkoopprijs is inclusief BTW. De verkoopprijs is op attribuutniveau (bijvoorbeeld maat) in te stellen.

### Actieprijs 
_Formaat: 00.00 (een punt gebruiken als decimaalteken)_  
Wanneer deze waarde is ingevuld wordt deze in Afosto geplaatst.

### BTW _(verplicht)_
_Formaat: 21 (zonder het procentteken)_

### Collecties
_Formaat: collectie1;collectie2_  
De menu-items kunnen (gedeeltelijk) worden ingericht met behulp van collecties. Een product kan aan meerdere collecties zijn toegewezen. 

### Gewicht _(verplicht)_
_Formaat: rond getal tussen de 0 en 12002_   
Gewicht wordt gebruikt om de verzendkosten te berekenen. Er kunnen hier een aantal puntnen worden opgegeven. Het systeem berekend aan de hand hiervan de verzenkosten.

|Omschrijving| getal|  
|---|---|  
|Geen gewicht|	0|
|10 per enveloppe|	9|
|5 per enveloppe|	18|
|3 per enveloppe|	30|  
|2 per enveloppe|	45|
|1 per enveloppe|	90|
|100 per pakket|	120|
|50 per pakket|	240|
|40 per pakket|	300|
|25 per pakket|	480|
|20 per pakket|	600|
|10 per pakket|	1200|
|5 per pakket|	2400|
|4 per pakket|	3000|
|2 per pakket|	6000|
|1 per pakket|	12000|
|anders|	12001|  
  

### Grootboekrekening
_Formaat: tekst_
Hier kan het grootboekrekeningnummer worden opgegeven. Dit wordt gebruikt voor rapportage en koppelingen met boekhoudsoftware. 

### Leverancier
_Formaat: tekst_  
Hier kan de leverancier opgegeven. Deze wordt gebruikt voor de uitgebreide rapportage.

### Afbeeldingen
_Formaat: url, scheidingsteken: ;_  
Afbeeldingen kunnen geimporteerd worden vanaf een URL. De gehele URL dient in het bestand worden geplaatst. Ook is het mogelijk om meerdere afbeeldingen te importeren, dit kan gedaan wor

### Parent
_Formaat: 1 (anders leeglaten)_  
Het veld parent wordt gebruikt voor het kenmerken van een product met meerdere opties. Bijvoorbeeld schoenen in een verschillende maat. In onderstaande tabel een voorbeeld:  

|sku|naam|parent|maat|
|---|---|---|---|
||schoen type xx|1||
|1001|schoen type xx||36|
|1002|schoen type xx||37|
|1003|schoen type xx||38|
|1004|schoen type xx||39|  

> Producten met 1 variant dienen op dezelfde wijze geimporteerd te worden.

### Attribuut
_Formaat: getal of tekst_  
Het veld attribuut is bijvoorbeeld de maat zoals in het voorbeeld gegeven onder _Parent_. De kolomnaam is relevant, want deze wordt overgenomen bij een import. Het is zaak maar 1 attribuut per product te hebben.

>Attributen kunnen gebruikt worden om op te filteren.  

### specificatie
_Formaat: getal of tekst_  
Het is mogelijk tot 50 specificaties aan te maken. Specificaties worden voor diverse doeleinden gebruikt. Natuurlijk om bij een product te tonen, maar ook voor het opbouwen van breadcrumbs, filters, gekoppelde producten of voor het automatisch genereren van Titles, Seo titles, enzovoort. 

>Specificaties kunnen gebruikt worden om op te filteren.  


### Basisbestand
Als basis kunnen de kolommen uit onderstaande tabel gebruikt worden.  

|Kolomnaam|Toelichting|
|---|---|
|Artikelnummer||
|Ean (barcode)||
|Naam||
|Korte omschrijving||
|Omschrijving||
|Kostprijs||
|Prijs||
|Actieprijs||
|BTW||
|Gewicht||
|Groobtoekrekening||
|Leverancier||
{: .table.table-bordered}



