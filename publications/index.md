---
title: Publications
layout: default
order: 1
---

# Academic Contributions
<hr/>
<br/>


### Accepted and In-Press Publications

<ul>
{% for member in site.data.inpress %}
  <li>
  {% assign sza = member.author | size  %}
  {% assign count = 0 %}
  {% for author in member.author %}
    {% assign words = author.given | split: ' ' %}
    {% assign kev = words[0] | slice: 0 %}
    {% if author.family == 'Cazelles' and kev == 'K' %} <b> {% endif %}
    {% assign count = count | plus: 1 %}
    {{author.family}}
    {% if count == sza %}
      {% for word in words %} {{ word | slice: 0 }}. {% endfor %}
    {% else %}
      {% for word in words %} {{ word | slice: 0 }}.{% endfor %},
    {% endif %}
    {% if author.family == 'Cazelles' and kev == 'K' %} </b> {% endif %}
    {% endfor %}
    ({{member.year}})
    <b>{{member.title}}</b>.
   <i>{{member.container-title}}</i>
  </li>
  <br>

{% endfor %}
</ul>


### Under review

<ul>
{% for member in site.data.review %}
  <li>
  {% assign sza = member.author | size  %}
  {% assign count = 0 %}
  {% for author in member.author %}
    {% assign words = author.given | split: ' ' %}
    {% assign kev = words[0] | slice: 0 %}
    {% if author.family == 'Cazelles' and kev == 'K' %} <b> {% endif %}
    {% assign count = count | plus: 1 %}
    {{author.family}}
    {% if count == sza %}
      {% for word in words %} {{ word | slice: 0 }}. {% endfor %}
    {% else %}
      {% for word in words %} {{ word | slice: 0 }}.{% endfor %},
    {% endif %}
    {% if author.family == 'Cazelles' and kev == 'K' %} </b> {% endif %}
    {% endfor %}
    ({{member.year}})
    <b>{{member.title}}</b>.
   <i>{{member.container-title}}</i>
  </li>
  <br>

{% endfor %}
</ul>


### Published


{% assign  years = "2017,2016,2015,2014,2013" | split: "," %}

{% for pub_year in years %}

  <h4 style="text-align:left;"> {{ pub_year }} </h4>


  <ol>

  {% for member in site.data.mypub.references %}

    {% if (member.issued[0].year == pub_year) %}
      <li>
      {% assign sza = member.author | size  %}
      {% assign count = 0 %}

      {% for author in member.author %}
        {% assign words = author.given | split: ' ' %}
        {% assign kev = words[0] | slice: 0 %}
        {% if author.family == 'Cazelles' and kev == 'K' %} <b> {% endif  %}
        {% assign count = count | plus: 1 %}
        {{author.family}}
        {% if count == sza %}
          {% for word in words %} {{ word | slice: 0 }}. {% endfor %}
        {% else %}
          {% for word in words %} {{ word | slice: 0 }}.{% endfor %},
        {% endif %}
        {% if author.family == 'Cazelles' and kev == 'K' %} </b> {%   endif %}
      {% endfor %}

        ({{member.issued[0].year}})
        <a href="{{member.URL}}">{{member.title}}</a>.
        <i>{{member.container-title}}</i>,

        {% if member.volume %}
          <b>{{ member.volume }}</b>, {{ member.page }}
        {% endif %}

        DOI: {{member.DOI}}

        &nbsp;
        <a href="mailto:kevin.cazelles@um2.fr?subject=PaperRequested:  {{member.title}}&body=Dear Dr. Cazelles, %0D%0A%0D%0A Could you  please send me your paper entitled'{{member.title}}'?">
        <i class="fa fa-envelope"></i></a>
        </li>
        <br>

    {% endif %}

  {% endfor %}
  </ol>

{% endfor %}





<br/><br/>

# Popularization Science

<hr/>
<br/>

<ul>
{% for member in site.data.repopu %}
  {% if member.category == 'popularization' %}
  <li>
    {{ member.author }} ({{member.year}}) <a href="{{ member.URL }}">  <b>{{ member.name }}</b></a>. <i>{{ member.journal }}</i>{% if member.volume %}, <b>{{ member.volume}}.</b>{% else %}.{% endif %}

    &nbsp;<a href="{{ site.baseurl }}/publications/assets/{{ member.file }}"> <i class="fa fa-file-pdf-o"></i></a>
  </li>
  <br>
  {% endif %}
{% endfor %}
</ul>



<br/><br/>

# Reports

<hr/>
<br/>

<ul>
{% for member in site.data.repopu %}
  {% if member.category == 'report' %}
  <li>
    {{ member.author }} ({{member.year}}) <b>{{ member.name }}</b>. <i>{{ member.journal }}</i>{% if member.volume %}, <b>{{ member.volume}}.</b>{% else %}.{% endif %}

    &nbsp;<a href="{{ site.baseurl }}/publications/assets/{{ member.file }}"> <i class="fa fa-file-pdf-o"></i></a>
  </li>
  <br>
  {% endif %}
{% endfor %}
</ul>
