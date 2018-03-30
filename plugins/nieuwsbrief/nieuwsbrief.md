---
layout: docs
title: Nieuwsbrief instellen
description: Configurereer je nieuwsbrieven binnen afosto
group: plugins
parent: plugins
toc: true
redirect_from:
  - /plugins/
  - /plugins/nieuwsbrief/
  - /nieuwsbrief/
---

# Niewsbrief plugin
Om gebruik te maken van de niewsbrief plugin zal het een en ander ingesteld moeten worden 
* Afzender
* Instellen van emails
* verwerking in het template.





## voor je webshop
Navigeer naar de nieuwsbrief instellingen.

**Dashboard** > **je webshop** > **nieuwsbrief** (te vinden onder het kopje *apps*)

Hier zie je de ingestelde nieuwsbrieven staan, je kunt hier nieuwe lijsten toevoegen,
en bestaande lijsten bewerken

### instellen van het template
ga naar de [plugin](https://app.afosto.com/plugins/90-newsletter),

### Template variablen
De volgende variablen kunnen worden gebruikt om de mail template's en mail onderwerp te creeren.

> |twig paramater|waarde   | notes |
> |------|-------------|---|
> |{{object.channel.domain}}|www.afosto.com| de url van de website |          
> |{{object.channel.name}}|Afosto| de naam van de website|                
> |{{object.customer.email}}|klant@afosto.com| NAW van de klant|             
> |{{object.customer.name}}|Volledige naam|       
> |{{object.customer.first_name}}|Voornaam|  
> |{{object.customer.last_name_prefix}}|Tussenvoegsel| 
> |{{object.customer.last_name}}|Achternaam|   
> |{{object.customer.is_female}}|0|     0 = man, 1 = vrouw , leeg = onbekend|
> |{{object.list.title}}|Niewsbrief| label van de nieuwsbrief|
> |{{object.list.verification_url}}|#| url voor opt in|
> |{{object.list.unsubscribe_url}}|#|  url voor opt out|

Er zijn 3 templates nodig voordat de plugin zijn werk volledig kan doen.

|Template|Functie|                                
|------|-------------|                          
|Bevestigings E-mail|Bevestiging dat er daadwerkelijk door de email eigenaar is aangemeld | 
|Uitschrijvings E-mail|Bevestiging dat de klant zich heeft uitgeschreven| 
|Aangemeld E-mail|De klant is aangemeld bij de nieuwsbrief en staat als ontvangend in het systeem| 

nadat de instellingen zijn ingevuld en opgeslagen is het instelwerk afgerond en kunnen er inschrijvingen plaatsvinden.


##Op de webshop

> Op webshops die nieuwer zijn dan december 2017 en gebaseerd zijn vanaf het standaard template 
> zit de onderstaande code al in het template   

### Formulier voor in de footer
> **standaard** word de eerste nieuwsbrief gebruikt.

mocht je gebruik willen maken van een specifieke nieuwsbrief kun je de te gebruiken nieuwsbrief gebruiken
Dit zul je normaliter boven in je template definieren.
> **twig bestand** : *layouts/footer.twig*
```twig
         {% set newsletter = pluginData.newsletter[<nieuwsbrief id>] %}             
```
Om gebruik te maken van een aanmeld formulier in de footer kan de onderstaande code gebruikt worden.
>**twig bestand** : *layouts/footer.twig*
```twig 

{% if has_app('newsletter') %}
    {% if newsletter is not defined %}
        {% set newsletter = pluginData.newsletter|first %}       
    {% endif %}    
    <form method="post" name="subscribe" action="{{newsletter.subscription_url}}" >
        <div class="form-group">
        <span class="h3">{{"Nieuwsbrief"|t}}</span>
            <p class="hidden-xs">{{'Blijf op de hoogte van acties en het laatste nieuws door je aan te melden voor de nieuwsbrief.'|t}}</p>
            <div class="input-group">
                <input type="email" name="email" id="mail" class="form-control" placeholder="{{'e-mailadres'|t}}">
                <span class="input-group-btn">
                    <button type="submit" class="btn btn-success">{{'Verstuur'|t}}</button>
                </span>
            </div>
        </div>
    </form>
{% else %}
    {{'Vraag naar de nieuwsbrief plugin of gebruik een email marketing programma zoals Mailchimp.'|t}}
{% endif %}
```


### In de checkout
Binnen de checkout kan er ook gebruik gemaakt worden van niewsbrief aanmeldingen.
>standaard worden alle niewsbrieven getoond. 

wil je een specifieke nieuwsbrief tonen? gebruik dan de onderstaande code om er een te selecteren
```twig
{% set newsletter = pluginData.newsletter[<newsletter ID>] %}#}
```    

vervolgens zul je de nieuwsbrieven weergeven in de checkout met de odnerstaande code.

>**twig bestand** : *checkout/steps/step1.twig*
```twig
{% if (has_app('newsletter') %}
    {% if newsletter is not defined %}
        {% set newsletter = pluginData.newsletter|first %}       
    {% endif %}
    <div class="row">
        <div class="col-md-12">
            {% for newsletterId,newsletter in newsletters|default(pluginData.newsletter) if (postdata.plugin.newsletter[newsletterId]|default(account.pluginData.newsletter[newsletterId].is_subscribed|default(0)) == 0))%}
                <div class="form-group">
                    <div class="checkbox af">
                        <label for="newsletter-{{newsletterId}}">
                            <input type="checkbox" value="1" id="newsletter-{{newsletterId}}" class="" name="plugin[newsletter][{{newsletterId}}]">
                            <div class="checkbox-button"></div>
                           {{'Inschrijven voor {niewsbrief-label}'|t({'{niewsbrief-label}' : newsletter.label })}}
                        </label>
                    </div>
                </div>
            {% endfor %}
        </div>
    </div>
{% endif %}
```            




### in Mijn account



De klant zal in zijn account omgeving de instellingen willen aanpassen dit kan door de onderstaande code toe te voegen.
>mocht  je een apparte pagina voor nieuwsbrieven willen in de account omgeving? neem dan contact op met *support@afosto.com*

het onderstaande template zorgt voor een nieuwsbrieven blok op de instellingen pagina van mijn account
 
>**twig bestand** : *account/settings.twig*
```twig
{% if has_app('newsletter') %}
    <div class="row">
        <div class="col-xs-12">        
            <h2>
                {{'Nieuwsbrieven'|t}}
            </h2>                    
            <form method="post" id="customer_newsletter">
               {# niet nodig op de settings pagina zelf #}
               {#<input type="hidden" name="__returnUrl" value="{{home_url}}account/settings">#}
               
               {% for newsletterId,newsletter in newsletters|default(pluginData.newsletter)%}
                    {% set checked = (postdata.plugin.newsletter[newsletterId]|default(account.pluginData.newsletter[newsletterId].is_subscribed|default(0)) == 1) %}
                    <div class="form-group">
                        <div class="checkbox af">
                            <label for="newsletter-{{newsletterId}}">
                                <input type="hidden" value="0" name="pluginData[newsletter][{{newsletterId}}]">
                                <input type="checkbox" value="1" id="newsletter-{{newsletterId}}" class="" name="pluginData[newsletter][{{newsletterId}}]" {% if checked %} checked {% endif %}>
                                <div class="checkbox-button"></div>
                               {{'Niewsbrief ontvangen voor {niewsbrief-label}'|t({'{niewsbrief-label}' : newsletter.label })}}
                            </label>
                        </div>
                    </div>
                {% endfor %}
                <button type="submit" class="btn btn-success">{{'Opslaan'|t}}</button>
           </form> 
            <hr>
        </div>
    </div>
{% endif %}
```
