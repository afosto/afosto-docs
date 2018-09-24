---
layout: docs
title: Template aanpassingen voor FB AddToCart tracking
description: "De uitgebreide implementatie van de Facebook pixel plugin vereist een aantal aanpassingen aan je webshop. In deze handleiding staat uitgelegd wat je moet aanpassen om deze implementatie te ondersteunen."
group: Facebook
parent: plugins
toc: true
redirect_from:
---

<div class="alert alert-warning">
Deze handleiding is bedoeld voor jouw webshop beheerder. Ben je niet bekend met de template code en bijbehorende programmeer talen, neem dan contact op met je implementatie partner of mail naar <a href="mailto:support@afosto.com?subject=Aanvraag%20uitgebruide%20Facebook%20implementatie&body=Ik%20wil%20graag%20gebruik%20maken%20van%20de%20uitgebreide%20Facebook%20pixel%20implementatie" target="_blank">support@afosto.com</a>.
</div>

Het event AddToCart van de **Facebook plugin** wordt standaard aangeroepen als de klant op de winkelwagen pagina terecht komt. Dit kan zorgen voor vertekenende data doordat de klant dus niet altijd een product toevoegt aan zijn/haar winkelwagen als dit event wordt aangeroepen. Andersom is het ook zo dat wanneer de **Product toevoegen redirect/verwijzing plugin** op een andere optie dan `Winkelmandje` wordt het event niet aangeroepen. Het laatste scenario waar dit gebeurd is wanneer je shop is uitgerust met AJAX functionaliteit om producten toe te voegen. 

Om deze foutieve tracking te voorkomen is de functionaliteit uitgebreid met de keuze om deze tracking anders te implementeren, namelijk door middel van een door Afosto geregistreerd javascript event. Om hier gebruik van te maken dien je de optie aan te zetten bij de [plugin instellingen](https://app.afosto.com/plugins/37-fbq){:target="_blank"}. Kies bij `Versie` voor `V2.0` en sla de instellingen op. Wanneer je de instellingen opslaat zal er op je webshop een eventListener geregistreerd worden. Deze luistert naar het event `af.cart.add`. Om hier de juiste data naar te sturen dien je de volgende aanpassingen aan je shop te maken.

<div class="alert alert-info">
Is jouw shop gebouwd na 12-06-2018, dan hoef je niks te doen. Het template is al voorzien van deze code.
</div>

## Trigger functie

Om het simpel te houden maken we een javascript functie die we op de plekken waar het nodig kunnen aanroepen zodat het event aangeroepen.
Plaats onderaan in het bestand `assets/js/product.js` onderstaande code.

{% highlight js linenos %}{% raw %}
function afAddToCartEvent(data) {
    $(document).trigger('af.cart.add', [data]);
}{% endraw %}{% endhighlight %}
    

De functie `afAddToCartEvent()` verwacht een object met data. Dit dient de data te zijn van de producten die worden gepost. Deze functie kun je nu aanroepen op twee manieren, afhankelijk van je implementatie.


## Data object maken

Om de juiste data in alle gevallen op te sturen gebruiken we een functie om dit object op te stellen. Als input gebruiken we de data die het formulier bevat door de `.serializeArray()` functie over het formulier heen te halen. zo krijgen we gestructureerde data die we kunnen omvormen. 
Dit doen we door middel van een ingewikkelde functie die door de array heen gaat, ze groepeert wanneer er meerdere producten in één keer worden toegevoegd en in een nieuwe array zet. In deze array wordt per product een object gevuld met de velden die we nodig zijn. 
Voeg onderstaande functie ook onderaan `assets/js/product.js` toe.

{% highlight js linenos %}{% raw %}
function retrieveFormInput(form) {
    var approvedAttributes = ['product_id', 'price', 'quantity'];
    var products = form.serializeArray().reduce(function(product, item) {
        var val = 0;
        
        if (item.name.split('[')[1]) {
            key = item.name.split('[')[1].replace(']', '');
            attribute = item.name.split('[')[2].replace(']', '');
        } else {
            key = "0";
            attribute = item.name;
        }
        
        if ($.inArray(attribute, approvedAttributes) >= 0 && item.value !== "") {
            product[key] = product[key] || {};
            product[key][attribute] = item.value;
        }
        
        return product;
    }, []); 

    return products;
}{% endraw %}{% endhighlight %}


## AddToCartAjax functie

Wanneer je shop gebruikt maakt van de AJAX functie om producten toe te voegen dien je het volgende te doen. 
Zoek, door ctrl+F in te drukken, naar `handleAddToCartAjax` in het bestand `assets/js/product.js`. 
Dit is de functie die de daadwerkelijke post afhandelt. 
In de `beforeSend` parameter voeg je op onderstaande manier de gemarkeerde regel toe.

{% highlight js linenos %}{% raw %}
handleAddToCartAjax(e) {
  // ...
  
  var event_data = retrieveFormInput(form);
  $.ajax({
    // ...
  })
}{% endraw %}{% endhighlight %}
    
In de `success` parameter voeg je onderstaande regel bovenaan toe.

{% highlight js linenos %}{% raw %}
handleAddToCartAjax(e) {
  // ...
  
  $.ajax({
  // ...
  
    success: function (event, request, settings) {
      afAddToCart(event_data);
      
      // ...
    }
    
  // ...
}{% endraw %}{% endhighlight %}
    
Hiermee roep je de trigger aan wanneer het toevoegen aan het winkelmandje gelukt is. 
Aan deze functie geef je de `event_data` die we voor het versturen hebben opgezet.
In veel gevallen zal deze functionaliteit gebruikt worden, echter kan het ook zo zijn dat je formulier op de normale manier wordt gepost. 
Daarvoor is de implementatie iets anders.


## Normale formulier post

Een formulier dat niet met AJAX wordt verwerkt zal op een andere manier afgevangen moeten worden. 
Hiervoor zal je per product formulier dat op deze wijze wordt verstuurd een event listener toe moeten voegen. 
Onderstaande code wordt uitgevoerd wanneer een gebruiker het formulier met de ID `product-form` verstuurt. 
Wanneer dit gebeurt voeren we onze trigger functie uit en vuren we het event.

{% highlight js linenos %}{% raw %}
$('#product-form').on('submit', function() {
    afAddToCartEvent(retrieveFormInput($(this)));
});{% endraw %}{% endhighlight %}

Zet deze code bij voorkeur binnen de `startProductPage()` functie. 
Op deze manier wordt de event listener aangemaakt wanneer deze functie wordt uitgevoerd.
Dit is bijvoorbeeld nodig voor producten met maten.
Wanneer een gebruiker een maat kiest wordt de html vervangen.
Hierdoor vervallen de bestaande event listeners en moeten deze opnieuw worden geïnitialiseerd.
Dit gebeurt doordat na het laden van de html de functie `startProductPage()` wordt uitgevoerd, en dus de event listener opnieuw wordt toegevoegd.
De code zal er ongeveer zo uit zien.

{% highlight js linenos %}{% raw %}
startProductPage() {
  // ...
  
  $('#product-form').on('submit', function() {
      afAddToCartEvent(retrieveFormInput($(this)));
  });
}{% endraw %}{% endhighlight %}

## Formulieren gereed maken

Nu de functies gereed zijn moeten alleen de formulieren nog geüpdatet worden. Hiervoor moeten we elk formulier dat een product post bij langs gaan en één of twee input velden toegen, afhankelijk van hoe je webshop nu werkt. We hebben drie velden nodig om de tracking goed te laten verlopen. Zonder deze drie velden zal de functionaliteit niet werken en nog steed foute data versturen.

**Let op!** Afhankelijk van waar je het toevoegt zul je onderstaand de twig variabelen moet prefixen met `product.`. Dit is het geval als de producten uit een array komen, bijvoorbeeld in `twig/macros/displays/products.twig`. Als je dit niet doet wordt er lege data verstuurd en zal je formulier of de tracking niet juist werken.

**Product_id**
Het eerste veld, dat al in je formulier moet staan, is de `product_id`. 

{% highlight twig linenos %}{% raw %}
<input type="hidden" value="{{id}}" name="product_id" />{% endraw %}{% endhighlight %}
    
**Quantity**
Het tweede veld kan ook al in je formulier staan, namelijk `quantity`. Dit is de hoeveelheid de klant besteld van het product. Als er al een `<input>` of `<select>` aanwezig is voor dit veld hoef je niks te doen. Wij raden aan om er een number input voor te gebruiken, zoals onderstaande code.

{% highlight twig linenos %}{% raw %}
<div class="form-group">
    <label for="count">{{"Aantal"|t}}</label>
    <input type="number" id="count" name="quantity" class="form-control input-sm" value="1" min="1" {% if not available or not selected %} disabled {% endif %}>
</div>{% endraw %}{% endhighlight %}
    

Mocht je geen aantal veld willen tonen in de shop, dan kun je het veld ook toevoegen als een input van het type `hidden`. Dit gebruiken we ook voor de andere twee velden. Dit zorgt ervoor dat deze data wel mee wordt gestuurd maar niet zichtbaar is voor de gebruiker. 

{% highlight twig linenos %}{% raw %}
<input type="hidden" value="1" name="quantity" />{% endraw %}{% endhighlight %}
    
**Price**
Als laatste veld die niet in je formulier zal staan hebben we `price` nodig. Het is handig om deze direct onder of boven de `product_id` input te plaatsen zodat je hem makkelijk terug vindt.

{% highlight twig linenos %}{% raw %}
<input type="hidden" value="{{price}}" name="price" />{% endraw %}{% endhighlight %}
    
Belangrijke plekken om te controleren of de velden aanwezig zijn:

- twig/product/default.twig 
- twig/product/layout-#.twig *( hier kunnen meerdere van aanwezig zijn )*
- twig/product/quickview.twig
- twig/macros/displays/products.twig ( Hier zitten de producten in een array )

In deze bestanden kun je met ctrl+F zoeken naar de de waarde van `name` van bovenstaande inputs. Op die manier kun je zien of alle velden al aanwezig zijn.


## Testen

Om te testen of de velden allemaal doorkomen kun je de `afAddToCartEvent()` functie aanpassen zoals onderstaande code. De data die dan wordt verstuurd naar het event wordt dan gelogd in de console. Om je console te bekijken open je de dev tools van je browser. **Vergeet niet deze regel weer te verwijderen wanneer je klaar bent.**

{% highlight js linenos %}{% raw %}
function afAddToCartEvent(data) {
    console.log(data);
    $(document).trigger('af.cart.add', [data]);
}{% endraw %}{% endhighlight %}
    

Lukt het niet om alles werkend te krijgen? mail dan naar support@afosto.com. We zullen dan contact met je opnemen om je verder te helpen.

