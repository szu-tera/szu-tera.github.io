---
title: "TeRA Lab - Home"
layout: homelay
body_class: "arial-page home-page"
excerpt: "TeRA Lab at Shenzhen University."
sitemap: false
permalink: /
---


<!-- TeRA Lab is a research group led by Dr. Yile Wang at the College of Computer Science and Software Engineering, Shenzhen University. The lab is dedicated to fundamental and applied research in natural language processing (NLP) and artificial intelligence, with a core focus on four pillars: Text Representation, Reasoning, Analysis, and Agent technologies. Our mission is to advance the frontiers of large language models (LLMs) through both theoretical insights and innovative applications. -->
Text Reasoning and Analysis (TeRA) Lab is a research group at the Visual Computing Center, College of Computer Science and Software Engineering, Shenzhen University. TeRA is dedicated to research in natural language processing and large language models, exploring text-oriented advanced AI technologies such as reasoning, representation, analysis, and agents.

<p class="home-recruitment-note">We recruit several incoming Master&amp;PhD students and also undergraduate students as interns each year. See page <a href="{{ site.baseurl }}/join-us/">join us</a> for details.</p>

<div markdown="0" id="carousel" class="carousel slide slider-fit-carousel" data-ride="carousel" data-interval="4000" data-pause="hover" >
    <!-- Items -->
    <div class="carousel-inner" markdown="0">
        <div class="item active">
            <img src="{{ site.baseurl }}/images/slider/zhizhen-seven%20flour.jpg" alt="Slide 4" class="slider-crop-image" />
        </div>
        <div class="item">
            <img src="{{ site.baseurl }}/images/slider/after-ktv.jpg" alt="Slide 3" class="slider-crop-image" />
        </div>
        <div class="item">
            <img src="{{ site.baseurl }}/images/slider/Austria.jpg" alt="Slide 1" />
        </div>
        <div class="item">
            <img src="{{ site.baseurl }}/images/slider/ktv.jpg" alt="Slide 2" />
        </div>
        <!--
        <div class="item">
            <a href="https://arxiv.org/abs/2512.15146" class="slider-image-link" aria-label="SCOPE arXiv paper">
                <img src="{{ site.baseurl }}/images/slider/SCOPE_2026.png" alt="SCOPE paper" />
            </a>
        </div>
        <div class="item">
            <a href="https://arxiv.org/abs/2604.11129" class="slider-image-link" aria-label="DeCoVec arXiv paper">
                <img src="{{ site.baseurl }}/images/slider/DeCoVec_2026.png" alt="DeCoVec paper" />
            </a>
        </div>
        <div class="item">
            <a href="https://arxiv.org/abs/2601.05075" class="slider-image-link" aria-label="SemPA arXiv paper">
                <img src="{{ site.baseurl }}/images/slider/SemPA_2026.png" alt="SemPA paper" />
            </a>
        </div>
        <div class="item">
            <a href="https://arxiv.org/abs/2604.17377" class="slider-image-link" aria-label="AnchorMem arXiv paper">
                <img src="{{ site.baseurl }}/images/slider/AnchorMem_2026.png" alt="AnchorMem paper" />
            </a>
        </div>
        -->
    </div>
    <a class="left carousel-control" href="#carousel" role="button" data-slide="prev" aria-label="Previous slide">
        <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
    </a>
    <a class="right carousel-control" href="#carousel" role="button" data-slide="next" aria-label="Next slide">
        <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
    </a>
    <!-- Menu -->
    <ol class="carousel-indicators">
        <li data-target="#carousel" data-slide-to="0" class="active"></li>
        <li data-target="#carousel" data-slide-to="1"></li>
        <li data-target="#carousel" data-slide-to="2"></li>
        <li data-target="#carousel" data-slide-to="3"></li>
    </ol>
</div>

<script>
(function () {
  function fitCarouselFrame() {
    var carousel = document.getElementById("carousel");
    if (!carousel) return;

    var inner = carousel.querySelector(".carousel-inner");
    var images = carousel.querySelectorAll(".carousel-inner img:not(.slider-crop-image)");
    if (!inner || !images.length) return;

    var maxWidth = 0;
    var maxHeight = 0;
    Array.prototype.forEach.call(images, function (image) {
      maxWidth = Math.max(maxWidth, image.naturalWidth || 0);
      maxHeight = Math.max(maxHeight, image.naturalHeight || 0);
    });
    if (!maxWidth || !maxHeight) return;

    var availableWidth = carousel.clientWidth;
    var scale = Math.min(1, availableWidth / maxWidth);
    var frameHeight = Math.ceil(maxHeight * scale);

    inner.style.height = frameHeight + "px";
    carousel.classList.add("carousel-measured");
  }

  function fitAfterImagesLoad() {
    var carousel = document.getElementById("carousel");
    if (!carousel) return;

    var images = Array.prototype.slice.call(carousel.querySelectorAll(".carousel-inner img"));
    var pending = images.length;
    if (!pending) return;

    function done() {
      pending -= 1;
      if (pending === 0) fitCarouselFrame();
    }

    images.forEach(function (image) {
      if (image.complete && image.naturalWidth) {
        done();
      } else {
        image.addEventListener("load", done);
        image.addEventListener("error", done);
      }
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", fitAfterImagesLoad);
  } else {
    fitAfterImagesLoad();
  }

  window.addEventListener("resize", fitCarouselFrame);
})();
</script>

<section markdown="0" class="research-thrusts" aria-labelledby="research-thrusts-title">
  <h2 id="research-thrusts-title">What We Work on?</h2>
  <!-- <p class="research-thrust-intro">TeRA Lab focuses on research in Natural Language Processing and Artificial Intelligence, especially Text Reasoning, Representation, Agent, and Analysis.</p> -->
  <div class="research-thrust-grid">
    <article class="research-thrust-card thrust-reasoning">
      <div class="research-thrust-mark" aria-hidden="true">R</div>
      <div>
        <h3>Reasoning</h3>
        <p>Strengthening LLM reasoning by fine-tuning, reinforcement learning and inference scaling for diverse solutions and robust inference.</p>
      </div>
    </article>
    <article class="research-thrust-card thrust-text">
      <div class="research-thrust-mark" aria-hidden="true">R</div>
      <div>
        <h3>Representation</h3>
        <p>Building compact, effective representations and keeping them interpretable across tasks, such as retrieval and generation.</p>
      </div>
    </article>
    <article class="research-thrust-card thrust-analysis">
      <div class="research-thrust-mark" aria-hidden="true">A</div>
      <div>
        <h3>Analysis</h3>
        <p>Locating, steering, and refining AI behavior using interpretable units and causal methods for mechanism-guided tuning.</p>
      </div>
    </article>
      <article class="research-thrust-card thrust-agent">
      <div class="research-thrust-mark" aria-hidden="true">A</div>
      <div>
        <h3>Agent</h3>
        <p>Designing memory, tool use, and interactions for long-context AI agents that act reliably across real-world tasks.</p>
      </div>
    </article>
  </div>
</section>
