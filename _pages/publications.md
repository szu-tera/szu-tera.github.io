---
title: "TeRA Lab - Publications"
layout: gridlay
body_class: arial-page
excerpt: "TeRA Lab -- Publications."
sitemap: false
permalink: /publications/
---


# Publications

<p class="publication-legend">Group members are <span class="publication-lab-author">underlined</span>. *Equal contribution. <sup font-size="65%">#</sup>Corresponding author.</p>

<div class="publication-list">
{% capture lab_author_names %}{% for member in site.data.team_members %}{% assign member_name = member.name | strip_html | split: "," | first | strip | downcase %}|{{ member_name }}{% endfor %}{% for member in site.data.students %}{% assign member_name = member.name | strip_html | split: "," | first | strip | downcase %}|{{ member_name }}{% endfor %}{% for member in site.data.visiting_interns %}{% assign member_name = member.name | strip_html | split: "," | first | strip | downcase %}|{{ member_name }}{% endfor %}|{% endcapture %}
{% for publi in site.data.publist %}
{% if publi.highlight == 1 %}

{% assign venue_link_url = nil %}
{% assign arxiv_link_url = nil %}
{% assign paper_icon_link_url = nil %}
{% if publi.links %}
  {% for link in publi.links %}
    {% if link.display == "arXiv" %}
      {% if arxiv_link_url == nil %}
        {% assign arxiv_link_url = link.url %}
      {% endif %}
    {% else %}
      {% if venue_link_url == nil %}
        {% assign venue_link_url = link.url %}
      {% endif %}
      {% if link.paper_icon and paper_icon_link_url == nil %}
        {% assign paper_icon_link_url = link.url %}
      {% endif %}
    {% endif %}
  {% endfor %}
{% elsif publi.link %}
  {% if publi.link.display == "arXiv" %}
    {% assign arxiv_link_url = publi.link.url %}
  {% else %}
    {% assign venue_link_url = publi.link.url %}
    {% if publi.link.paper_icon %}
      {% assign paper_icon_link_url = publi.link.url %}
    {% endif %}
  {% endif %}
{% endif %}
{% if paper_icon_link_url == nil %}
  {% assign paper_icon_link_url = arxiv_link_url %}
{% endif %}
{% assign image_link_url = arxiv_link_url %}
{% capture equal_contribution_author_names %}{% if publi.equal_contribution_authors %}{% for author in publi.equal_contribution_authors %}{% assign equal_contribution_author_name = author | strip | downcase %}|{{ equal_contribution_author_name }}{% endfor %}|{% endif %}{% endcapture %}
{% capture corresponding_author_names %}{% if publi.corresponding_authors %}{% for author in publi.corresponding_authors %}{% assign corresponding_author_name = author | strip | downcase %}|{{ corresponding_author_name }}{% endfor %}|{% endif %}{% endcapture %}

{% capture venue_html %}
{% assign venue_count = 0 %}
{% if publi.links %}
  {% for link in publi.links %}
    {% unless link.display == "arXiv" %}
      {% if venue_count > 0 %}; {% endif %}
      <a href="{{ link.url }}">{{ link.display }}</a>
      {% assign venue_count = venue_count | plus: 1 %}
    {% endunless %}
  {% endfor %}
{% elsif publi.link %}
  {% unless publi.link.display == "arXiv" %}
    <a href="{{ publi.link.url }}">{{ publi.link.display }}</a>
  {% endunless %}
{% endif %}
{% endcapture %}
{% assign venue_html = venue_html | strip %}
{% if venue_html == "" and publi.arxiv_year and arxiv_link_url %}
  {% capture venue_html %}<a href="{{ arxiv_link_url }}">arXiv {{ publi.arxiv_year }}</a>{% endcapture %}
  {% assign venue_html = venue_html | strip %}
{% endif %}

<article class="publication-entry">
 <div class="publication-media">
  {% if publi.image %}
  {% if image_link_url %}<a href="{{ image_link_url }}" class="publication-image-link"><img src="{{ site.baseurl }}/images/pubpic/{{ publi.image }}" class="img-responsive publication-image" alt="{{ publi.title }}" /></a>{% else %}<img src="{{ site.baseurl }}/images/pubpic/{{ publi.image }}" class="img-responsive publication-image" alt="{{ publi.title }}" />{% endif %}
  {% endif %}
 </div>
 <div class="publication-content">
  <h2 class="publication-title"><span class="publication-title-text">{{ publi.title }}</span><span class="publication-icon-links">{% if paper_icon_link_url %}<a href="{{ paper_icon_link_url }}" class="publication-icon-link publication-icon-paper" aria-label="Paper page: {{ publi.title }}" title="Paper page"><svg aria-hidden="true" focusable="false" viewBox="0 0 24 24"><path class="publication-paper-fill" d="M6 3h8l4 4v14H6z" /><path class="publication-paper-stroke" d="M14 3v5h4M9 12h6M9 16h6" /></svg></a>{% endif %}{% if publi.github %}<a href="{{ publi.github }}" class="publication-icon-link publication-icon-github" aria-label="GitHub repository: {{ publi.title }}" title="GitHub repository"><svg aria-hidden="true" focusable="false" viewBox="0 0 16 16"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82A7.55 7.55 0 0 1 8 3.86c.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8z" /></svg></a>{% endif %}</span></h2>
  <p class="publication-authors">{% assign author_list = publi.authors | split: ", " %}{% for author in author_list %}{% assign author_name = author | strip %}{% assign author_key = "|" | append: author_name | downcase | append: "|" %}<span class="publication-author-unit">{% if lab_author_names contains author_key %}<span class="publication-lab-author">{{ author_name }}</span>{% if equal_contribution_author_names contains author_key %}<span class="publication-author-note publication-equal-contribution-author">*</span>{% endif %}{% if corresponding_author_names contains author_key %}<sup class="publication-author-note publication-corresponding-author">#</sup>{% endif %}{% else %}{{ author_name }}{% endif %}</span>{% unless forloop.last %}, {% endunless %}{% endfor %}</p>
  {% if venue_html != "" %}
  <p class="publication-venue">{{ venue_html }}</p>
  {% endif %}
  <p class="publication-description">{{ publi.description }}</p>
  {% if publi.news1 %}
  <p class="publication-note text-danger"><strong>{{ publi.news1 }}</strong></p>
  {% endif %}
  {% if publi.news2 %}
  <p class="publication-note">{{ publi.news2 }}</p>
  {% endif %}
 </div>
</article>

{% endif %}
{% endfor %}
</div>

<p> &nbsp; </p>
