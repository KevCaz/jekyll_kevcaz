---
layout: default
title: Blog
order: 5
---

# Posts

  <p class="rss-subscribe">subscribe <a href="{{ "/feed.xml" | prepend: site.baseurl }}">via RSS <i class="fa fa-rss" aria-hidden="true"></i></a></p>


<div class="home">

  <ul class="post-list">
    {% for post in site.posts %}
        {% unless post.categories contains 'Rgraphics' %}
          <li>
            <h4>
              <a href="{{ post.url | prepend: site.baseurl }}">{{ post.title  
                }}</a> <small>{{ post.date | date: "%b %-d, %Y" }}</small>
            </h4>
          </li>
      {% endunless %}
    {% endfor %}
  </ul>

  <br>



  <!-- <p class="rss-subscribe"><i class="fa fa-rss"></i> subscribe <a href="{{ "/feed.xml" | prepend: site.baseurl }}">via RSS</a></p> -->

</div>
