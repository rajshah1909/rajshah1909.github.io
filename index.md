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

    <div class="card">
      <span class="card-label">Current</span>
      <h3>AI &amp; ML Engineer — Boundary Remote Subsurface Solutions</h3>
      <p class="meta">Jan 2026 – Present</p>
      <p>
        Contributing to a production-oriented Geospatial AI framework for subsurface
        exploration and multimodal data fusion. Built end-to-end ML pipelines classifying
        lithology across geological datasets, standardized multi-source ingestion with
        Pandas and Parquet, and engineered preprocessing, validation, and batch inference
        workflows across 13+ heterogeneous datasets.
      </p>
      <span class="metric">~68% lithology classification accuracy · ~20% fewer preprocessing errors</span>
      <div class="tags">
        <span class="tag">Python</span>
        <span class="tag">ML Pipelines</span>
        <span class="tag">Geospatial AI</span>
        <span class="tag">Model Evaluation</span>
        <span class="tag">Data Validation</span>
        <span class="tag">Multimodal AI</span>
        <span class="tag">Parquet</span>
      </div>
    </div>

    <div class="card">
      <h3>Data Analyst Intern — The Marcus Harris Foundation</h3>
      <p class="meta">Aug 2025 – Nov 2025</p>
      <p>
        Cleaned and validated 1,500+ records with SQL and Python, built ETL workflows
        that cut manual reporting time by ~25%, and delivered Tableau dashboards for
        100+ stakeholders with optimized aggregation queries for faster KPI reporting.
      </p>
      <span class="metric">~25% data accuracy improvement · ~25% faster KPI reporting</span>
      <div class="tags">
        <span class="tag">Python</span>
        <span class="tag">SQL</span>
        <span class="tag">ETL</span>
        <span class="tag">Tableau</span>
        <span class="tag">EDA</span>
      </div>
    </div>

  </div>
</section>

<section id="projects">
  <div class="section-header">
    <h2>Featured Projects</h2>
    <p>AI systems, NLP forecasting, RAG deployment, and production data engineering.</p>
  </div>

  <div class="cards">

    <div class="card featured">
      <span class="card-label">Flagship · NLP + Time-Series ML</span>
      <h3>Decoding the Fed — FOMC Yield Curve Prediction System</h3>
      <p class="meta">Jan 2026 – May 2026</p>
      <p>
        Engineered an NLP + ML forecasting pipeline using 189 Federal Reserve statements
        and Treasury yield data (1994–2024). Extracted sentiment and policy signals via
        TF-IDF drift analysis, FinBERT embeddings, and hawkish/dovish lexicons, then trained
        Random Forest, Lasso, Ridge, Logistic Regression, and XGBoost with walk-forward
        validation to predict Treasury yield movement across 1-, 3-, and 5-day windows.
      </p>
      <span class="metric">0.0865 RMSE (2Y) · 0.529 accuracy / 0.426 F1 on spread direction</span>
      <div class="tags">
        <span class="tag">Python</span>
        <span class="tag">FinBERT</span>
        <span class="tag">XGBoost</span>
        <span class="tag">NLP</span>
        <span class="tag">Time-Series ML</span>
        <span class="tag">Walk-Forward Validation</span>
      </div>
    </div>

    <div class="card featured">
      <span class="card-label">Flagship · RAG + Production Deployment</span>
      <h3>RU-PATH — AI Campus Navigation &amp; Parking Assistant</h3>
      <p class="meta">Sept 2025 – Dec 2025</p>
      <p>
        Built a RAG-based AI assistant for Rutgers campus navigation, parking, and transit
        queries using authoritative datasets, retrieval grounding, and deterministic validation
        logic. Developed chatbot, parking, and routing engines across modular Python with
        Flask REST APIs, semantic search, and NLU intent routing — deployed via Docker,
        GitHub Actions, and Render.
      </p>
      <span class="metric">~89% response accuracy · 99% production uptime</span>
      <div class="tags">
        <span class="tag">LangChain</span>
        <span class="tag">RAG</span>
        <span class="tag">DeepSeek API</span>
        <span class="tag">Flask</span>
        <span class="tag">Docker</span>
        <span class="tag">GitHub Actions</span>
      </div>
      <div class="actions">
        <a href="https://github.com/rajshah1909/ru-path" target="_blank" rel="noopener">Repository</a>
        <a href="https://youtu.be/XkFiByMFBlc" target="_blank" rel="noopener">Demo Video</a>
      </div>
    </div>

    <div class="card">
      <span class="card-label">Geospatial AI · Production ML</span>
      <h3>Boundary RSS — Lithology Classification &amp; ML Pipelines</h3>
      <p class="meta">Professional · 2026</p>
      <p>
        Built end-to-end ML preprocessing and batch inference pipelines for subsurface
        geospatial data fusion — including predict_proba confidence scoring, validation
        workflows for dynamic batch inputs, and standardized Parquet-based dataset ingestion
        across heterogeneous geological sources.
      </p>
      <span class="metric">4 geological datasets · 13+ integrated data sources</span>
      <div class="tags">
        <span class="tag">Python</span>
        <span class="tag">Scikit-learn</span>
        <span class="tag">Pandas</span>
        <span class="tag">Batch Inference</span>
        <span class="tag">Geospatial AI</span>
      </div>
    </div>

    <div class="card">
      <h3>Automated Data Collection &amp; Analysis Pipeline</h3>
      <p>
        Built an automated Python + SQL analytics pipeline that reduced manual preprocessing
        time by ~80%, enforced validation checks, and generated Tableau-ready outputs for
        100+ stakeholders — turning 10+ hours/week of prep into under 2 hours.
      </p>
      <span class="metric">~80% time reduction · 100+ dashboard users</span>
      <div class="tags">
        <span class="tag">Python</span>
        <span class="tag">SQL</span>
        <span class="tag">Data Validation</span>
        <span class="tag">Tableau</span>
        <span class="tag">ETL</span>
      </div>
      <div class="actions">
        <a href="https://github.com/rajshah1909/Projects" target="_blank" rel="noopener">Repository</a>
      </div>
    </div>

    <div class="card">
      <h3>Evac AI — AI Disaster Response Platform</h3>
      <p class="meta">IBM Z × UNSA Hackathon · Mar 2026 – May 2026</p>
      <p>
        Built a FastAPI backend integrating weather, alerts, geolocation, and AI evacuation
        workflows with live risk scoring and modular REST APIs connecting iOS and web clients
        for scalable disaster preparedness.
      </p>
      <div class="tags">
        <span class="tag">FastAPI</span>
        <span class="tag">REST APIs</span>
        <span class="tag">Risk Scoring</span>
        <span class="tag">Real-Time AI</span>
        <span class="tag">Docker</span>
      </div>
    </div>

    <div class="card">
      <h3>Broadway Revenue Dashboard</h3>
      <p>
        Cleaned and analyzed Broadway gross revenue data and built interactive Tableau
        dashboards visualizing pricing, capacity, and weekly performance trends with
        clear stakeholder storytelling.
      </p>
      <div class="tags">
        <span class="tag">Tableau</span>
        <span class="tag">Data Storytelling</span>
        <span class="tag">EDA</span>
      </div>
      <div class="actions">
        <a href="https://github.com/rajshah1909/Projects" target="_blank" rel="noopener">Repository</a>
      </div>
    </div>

  </div>
</section>

<section id="stack">
  <div class="section-header">
    <h2>Technical Stack</h2>
    <p>Tools I use to ship reliable AI and data systems.</p>
  </div>

  <div class="grid-2">
    <div class="card">
      <h3>AI / ML</h3>
      <p>
        PyTorch, Scikit-learn, XGBoost, LangChain, RAG pipelines,
        FinBERT, NLP, evaluation systems, feature engineering, walk-forward validation
      </p>
    </div>
    <div class="card">
      <h3>Backend &amp; Deployment</h3>
      <p>
        Python, Flask, FastAPI, Docker, GitHub Actions, REST APIs,
        SQL, AWS, CI/CD, batch inference, API development
      </p>
    </div>
    <div class="card">
      <h3>Data Engineering</h3>
      <p>
        ETL/ELT, Pandas, NumPy, Parquet, data validation,
        batch processing, Tableau, Power BI, data transformation
      </p>
    </div>
    <div class="card">
      <h3>Languages</h3>
      <p>
        Python, SQL, R, Java — with emphasis on Python for ML systems and SQL for analytics pipelines
      </p>
    </div>
  </div>
</section>

<section id="education">
  <div class="section-header">
    <h2>Education</h2>
  </div>

  <div class="card edu-card">
    <h3>Rutgers University, New Brunswick</h3>
    <p class="meta">B.S. Computer Science &amp; Data Science · <span class="gpa">GPA 3.79</span></p>
    <p>
      Honors: Computer Science Honors &amp; Data Science Honors · Dean's List (2023–2026) · Phi Theta Kappa.
      Coursework: Machine Learning, Intro to AI, Data Structures &amp; Algorithms, Data Visualization.
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
      <a href="mailto:rajshah.ap302@gmail.com">rajshah.ap302@gmail.com</a>
    </div>
    <div class="contact-item">
      <strong>GitHub</strong>
      <a href="https://github.com/rajshah1909" target="_blank" rel="noopener">github.com/rajshah1909</a>
    </div>
    <div class="contact-item">
      <strong>LinkedIn</strong>
      <a href="https://www.linkedin.com/in/raj-shah-ai" target="_blank" rel="noopener">linkedin.com/in/raj-shah-ai</a>
    </div>
    <div class="contact-item">
      <strong>Resume</strong>
      <a href="{{ '/Raj_Shah_Resume.pdf' | relative_url }}" target="_blank" rel="noopener">Download PDF</a>
    </div>
  </div>
</section>
