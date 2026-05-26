---
layout: default
title: Raj Shah — AI / ML Engineer
---

<section id="experience">
  <div class="section-header">
    <h2>Experience</h2>
    <p>Production ML systems, data quality, and stakeholder-facing analytics.</p>
  </div>

  <div class="timeline">

    {% for exp in site.data.portfolio.experience %}
    <div class="card">
      {% if exp.label %}
        <span class="card-label">{{ exp.label }}</span>
      {% endif %}
      <h3>{{ exp.title }}</h3>
      <p class="meta">{{ exp.period }}</p>
      <p>
        {{ exp.summary }}
      </p>
      {% if exp.metric %}
        <span class="metric">{{ exp.metric }}</span>
      {% endif %}
      <div class="tags">
        {% for tag in exp.tags %}
          <span class="tag">{{ tag }}</span>
        {% endfor %}
      </div>
    </div>
    {% endfor %}

  </div>
</section>

<section id="projects">
  <div class="section-header">
    <h2>Featured Projects</h2>
    <p>AI systems, NLP forecasting, RAG deployment, and production data engineering.</p>
  </div>

  <div class="cards">

    {% for proj in site.data.portfolio.projects %}
    <div class="card{% if proj.featured %} featured{% endif %}">
      {% if proj.card_label %}
        <span class="card-label">{{ proj.card_label }}</span>
      {% endif %}
      <h3>{{ proj.title }}</h3>
      {% if proj.period %}
        <p class="meta">{{ proj.period }}</p>
      {% endif %}
      <p>
        {{ proj.description }}
      </p>
      {% if proj.metric %}
        <span class="metric">{{ proj.metric }}</span>
      {% endif %}
      <div class="tags">
        {% for tag in proj.tags %}
          <span class="tag">{{ tag }}</span>
        {% endfor %}
      </div>

      {% if proj.actions and proj.actions.size > 0 %}
        <div class="actions">
          {% for action in proj.actions %}
            <a href="{{ action.url }}" target="_blank" rel="noopener">{{ action.label }}</a>
          {% endfor %}
        </div>
      {% endif %}

    </div>
    {% endfor %}

  </div>
</section>

<section id="stack">
  <div class="section-header">
    <h2>Technical Stack</h2>
    <p>Tools I use to ship reliable AI and data systems.</p>
  </div>

  <div class="grid-2">
    {% for cat in site.data.portfolio.stack.categories %}
    <div class="card">
      <h3>{{ cat.title }}</h3>
      <p>
        {{ cat.description }}
      </p>
    </div>
    {% endfor %}
  </div>
</section>

<section id="education">
  <div class="section-header">
    <h2>Education</h2>
  </div>

  <div class="card edu-card">
    <h3>{{ site.data.portfolio.education.school }}</h3>
    <p class="meta">
      {{ site.data.portfolio.education.degree }} · <span class="gpa">GPA {{ site.data.portfolio.education.gpa }}</span>
    </p>
    <p>
      {{ site.data.portfolio.education.summary }}
    </p>
  </div>
</section>

<section id="how">
  <div class="section-header">
    <h2>How I Build</h2>
    <p>Production mindset — not notebook demos.</p>
  </div>

  <div class="grid-2">
    <details open>
      <summary>Engineering Principles</summary>
      <ul>
        <li>Start from real constraints: data quality, ambiguity, and reliability.</li>
        <li>Separate deterministic validation from probabilistic LLM outputs.</li>
        <li>Fail fast with validation instead of silently shipping bad results.</li>
        <li>Iterate with evaluation sets, metrics, and failure-mode analysis.</li>
      </ul>
    </details>

    <details open>
      <summary>What I Optimize For</summary>
      <ul>
        <li>End-to-end systems: ingestion → validation → model/RAG → deployment.</li>
        <li>Measurable impact: accuracy, uptime, latency, and stakeholder time saved.</li>
        <li>Scalable pipelines over one-off scripts.</li>
        <li>Documentation and reproducibility for team handoff.</li>
      </ul>
    </details>
  </div>
</section>

<section id="contact">
  <div class="section-header">
    <h2>Contact</h2>
    <p>Interested in AI / ML engineering roles — let's connect.</p>
  </div>

  <div class="contact-grid">
    <div class="contact-item">
      <strong>Email</strong>
      <a href="mailto:{{ site.data.portfolio.profile.social.email }}">{{ site.data.portfolio.profile.social.email }}</a>
    </div>

    <div class="contact-item">
      <strong>GitHub</strong>
      <a href="{{ site.data.portfolio.profile.social.github }}" target="_blank" rel="noopener">{{ site.data.portfolio.profile.social.github | replace: 'https://', '' }}</a>
    </div>

    <div class="contact-item">
      <strong>LinkedIn</strong>
      <a href="{{ site.data.portfolio.profile.social.linkedin }}" target="_blank" rel="noopener">linkedin.com/in/raj-shah-ai</a>
    </div>

    <div class="contact-item">
      <strong>Resume</strong>
      <a href="{{ site.data.portfolio.profile.resume_url | relative_url }}" target="_blank" rel="noopener">Download PDF</a>
    </div>
  </div>
</section>
