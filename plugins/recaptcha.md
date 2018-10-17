---
layout: plugin
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
om gebruik te maken van reCAPTCHA dien je credentials aan te maken.
Dit kan via de volgende link. 

[Manage reCAPTCHA Keys](https://www.google.com/recaptcha/admin#list){:target="_blank"}

Vul onder **Register a new site** een herkenbaar label in, bijvoorbeeld: **afosto recaptcha**.
Kies voor de optie **Checkbox** en vul de url van je site in.
Dit dient de url van de homepage te zijn bijvoorbeeld: **afosto.com**.
Heb je meerdere sites waar je reCAPTCHA wil gebruiken? Vul dan ook die domeinen in.

Zodra je op register klikt kom je op het scherm met jouw unieke credentials.

## Instellingen
Ga in het Afosto platform naar [de plugin](https://app.afosto.com/plugins/93-re-captcha){:target="_blank"} om deze juist in te stellen. 

### Site key
Vul hier de **site key** in welke je bij het aanmaken hebt verkregen.

### Secret
Vul hier de **secret key** in welke je bij het aanmaken hebt verkregen.


De plugin is nu ingesteld.

## Webshop aanpassingen

De json van het formulier dient aangepast te worden om reCAPTCHA te ondersteunen. Deze bestanden zijn te vinden in 'twig > forms > [form_naam].json'. Voeg hier onderstaande code aan toe.

### Json
[form_naam].json
{% highlight json linenos %}{% raw %}
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
        }{% endraw %}{% endhighlight %}

### Twig
In dezelfde map dien je corresponderende twig bestand ook aan te passen. Vervang de code tussen de '<form>' tags met onderstaande code.

[form_naam].twig
{% highlight twig linenos %}{% raw %}
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
 </button>{% endraw %}{% endhighlight %}

Als je bijvoorbeeld het formulier op de contact pagina hebt gemaakt, dien je de volgende code toe te voegen aan het formulier. Hiermee roep je het reCAPTCHA veld aan.

contact.twig
{% highlight twig linenos %}{% raw %}{{call("recaptcha")|first}}{% endraw %}{% endhighlight %}
