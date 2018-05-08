---
layout: docs
title: ReCAPTCHA
description: "Om spam op een contactformulier te voorkomen kun je gebruik maken van reCAPTCHA."
plugin_name: ReCAPTCHA
plugin_url: "https://app.afosto.com/plugins/93-re-captcha"
group: recaptcha
parent: plugins
toc: true
redirect_from:
---

## Omschrijving
Niets zo vervelend als je mailbox vol spam, afkomstig van je contactformulier. Met deze plugin voorkom je dit. Deze handleiding beschrijft
* Het aanmaken van credentials
* Het instellen van de plugin
* Het toevoegen van de velden aan formulieren
## Aanmaken Crendentials
om gebruik te maken van reCAPTCHA dien je credentials aan te maken.Dit kan via de volgende URL. ![https://www.google.com/recaptcha/admin#list](https://www.google.com/recaptcha/admin#list).
Onder 'Register a new site' vul je een herkenbaar label in, bijv.: afosto recaptcha.
Kies voor de optie 'reCAPTCHA V2' en vul de url van je site in. Dit dient de url van de homepage te zijn bijv.: 'afosto.com'. Heb je meerdere sites waar je reCAPTCHA wil gebruiken? Vul dan ook die domeinen in.
Zodra je op register klikt kom je op het scherm met jouw unieke credentials.
## Instellingen
Ga naar de plugin om deze juist in te stellen. 
### Credentials
Vul hier de 'site key'in welke je bij het aanmaken hebt verkregen
### Secret
Vul hier de 'secret'in welke je bij het aanmaken hebt verkregen

De plugin is nu ingesteld.

## Webshop aanpassingen

De json van het formulier dient aangepast te worden om reCAPTCHA te ondersteunen. Deze bestanden zijn te vinden in 'twig > forms > [form_naam].json'. Voeg hier onderstaande code aan toe.

### Json
[form_naam].json
{% highlight ruby linenos %}
{% raw %}
        {
            "name": "recaptcha",
            "type": "hidden",
            "rules": [
                    {
                        "length" : {
                            "is" : 0
                        }
                    }
            ]
        }
{% endraw %}
{% endhighlight %}

### Twig
In dezelfde map dien je corresponderende twig bestand ook aan te passen. Vervang de code tussen de '<form>' tags met onderstaande code.

[form_naam].twig
{% highlight ruby linenos %}
{% raw %}
 {% for field in fields %}
     <div class="form-group">
         {% if field.name == "recaptcha" %}
             {{call("recaptcha")|first}}
         {% else %}
             <label for="{{field.name}}-{{loop.index}}">
                 {{field.label}}
             </label>
             <input type="{{field.type}}" value="{{field.value}}" id="{{field.name}}-{{loop.index}}" name="{{field.name}}" class="form-control">
             {% if field.errors is not empty %}
                 {% for error in field.errors %}
                     {{error|t}}
                 {% endfor %}
             {% endif %}
         {% endif %}
     </div>
 {% endfor %}
 <button type="submit" class="btn btn-success">
     {{'Verstuur'|t}}
 </button>
 {% endraw%}
{% endhighlight %}

Als je bijvoorbeeld het formulier op de contact pagina hebt gemaakt, dien je de volgende code toe te voegen aan het formulier. Hiermee roep je het reCAPTCHA veld aan.

contact.twig
{% highlight ruby linenos %}
{% raw %}
	
 {{call("recaptcha")|first}}

{% endraw %}
{% endhighlight %}