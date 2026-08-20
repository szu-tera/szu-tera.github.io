---
title: "TeRA Lab - People"
layout: gridlay
excerpt: "TeRA Lab: People"
sitemap: false
permalink: /people/
---

# Group Members

## Faculty
{% assign number_printed = 0 %}
{% for member in site.data.team_members %}

{% assign even_odd = number_printed | modulo: 2 %}

{% if even_odd == 0 %}
<div class="row">
{% endif %}

<div class="col-sm-4 clearfix team-leader-card" markdown="0">
  <img src="{{ site.baseurl }}/images/people/{{ member.photo }}" class="img-responsive team-photo" />
  <h4>{{ member.name }}</h4>
  <div class="team-member-position">Assistant Professor</div>
  <i>{% include email.html address=member.email no_reveal=member.email_no_reveal %}</i>
  <ul style="overflow: hidden">

  {% if member.number_educ == 1 %}
  <li> {{ member.education1 }} </li>
  {% endif %}

  {% if member.number_educ == 2 %}
  <li> {{ member.education1 | markdownify}} </li>
  <li> {{ member.education2 | markdownify}} </li>
  {% endif %}

  {% if member.number_educ == 3 %}
  <li> {{ member.education1 | markdownify}} </li>
  <li> {{ member.education2 | markdownify}} </li>
  <li> {{ member.education3 | markdownify}} </li>
  {% endif %}

  {% if member.number_educ == 4 %}
  <li> {{ member.education1 | markdownify}} </li>
  <li> {{ member.education2 | markdownify}} </li>
  <li> {{ member.education3 | markdownify}} </li>
  <li> {{ member.education4 | markdownify}} </li>
  {% endif %}

  {% if member.number_educ == 5 %}
  <li> {{ member.education1 | markdownify}} </li>
  <li> {{ member.education2 | markdownify}} </li>
  <li> {{ member.education3 | markdownify}} </li>
  <li> {{ member.education4 | markdownify}} </li>
  <li> {{ member.education5 | markdownify}} </li>
  {% endif %}

  </ul>
</div>

{% assign number_printed = number_printed | plus: 1 %}

{% if even_odd == 1 %}
</div>
{% endif %}

{% endfor %}

{% assign even_odd = number_printed | modulo: 2 %}
{% if even_odd == 1 %}
</div>
{% endif %}



## Students

<div class="row team-master-grid">
{% for member in site.data.students %}
<div class="col-sm-4 team-master-card" markdown="0">
<img src="{{ site.baseurl }}/images/people/{{ member.photo }}" class="img-responsive team-master-photo" />
<h4>{{ member.name }}</h4>
<p class="team-member-info">
{{ member.info }}
{% if member.email %}
<br>{% include email.html address=member.email %}
{% endif %}
</p>
</div>
{% endfor %}
</div>

## Visiting Students and Interns
<div class="table-responsive team-visitor-table-wrap" markdown="0">
<table class="table table-condensed team-visitor-table">
<tbody>
{% for member in site.data.visiting_interns %}
<tr>
<td>{{ member.name }}</td>
<td>{{ member.school }}</td>
<td>{{ member.degree }}</td>
<td>{{ member.time }}</td>
</tr>
{% endfor %}
</tbody>
</table>
</div>
