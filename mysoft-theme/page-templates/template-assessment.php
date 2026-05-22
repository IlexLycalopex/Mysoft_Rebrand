<?php
/**
 * Template Name: AI Readiness Assessment
 * Template Post Type: page
 */
get_header();
?>

<!-- PAGE: WELCOME -->
<div class="page active" id="page-welcome">
  <div class="welcome-hero">
    <span class="eyebrow eyebrow-inverse">5 Domains · 13 Questions · ~6 minutes</span>
    <h1>How ready is your business for AI-led transformation?</h1>
    <p>Answer 13 questions across five domains to find your position on the AI maturity ladder — and get a shortlist of next steps tailored to your platform.</p>
    <div class="welcome-meta">
      <span class="welcome-meta-item">
        <svg width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
        5–7 minutes to complete
      </span>
      <span class="welcome-meta-item">
        <svg width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>
        Instant results, no login
      </span>
      <span class="welcome-meta-item">
        <svg width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
        Tailored to your platform
      </span>
    </div>
    <button class="btn btn--accent btn--lg" onclick="goToPlatform()">
      Start the assessment <span class="btn-arrow">→</span>
    </button>
  </div>

  <div class="welcome-lift">
    <div class="domain-grid">
      <div class="domain-tile">
        <div class="domain-tile-icon" style="background:#E0F6FD;"><svg width="20" height="20" fill="none" stroke="#001A22" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4.03 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5"/></svg></div>
        <h4>ERP &amp; Data Foundation</h4>
        <p>System maturity and data quality</p>
      </div>
      <div class="domain-tile">
        <div class="domain-tile-icon" style="background:#E7ECEE;"><svg width="20" height="20" fill="none" stroke="#001A22" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg></div>
        <h4>Process Maturity</h4>
        <p>Workflows, approvals, close cycle</p>
      </div>
      <div class="domain-tile">
        <div class="domain-tile-icon" style="background:#FEF6E1;"><svg width="20" height="20" fill="none" stroke="#001A22" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="2"/><rect x="9" y="9" width="6" height="6" rx="1"/><path d="M9 2v2M15 2v2M9 20v2M15 20v2M2 9h2M2 15h2M20 9h2M20 15h2"/></svg></div>
        <h4>AI &amp; Tech Readiness</h4>
        <p>Cloud, data strategy, AI exposure</p>
      </div>
      <div class="domain-tile">
        <div class="domain-tile-icon" style="background:#FFFBEB;"><svg width="20" height="20" fill="none" stroke="#001A22" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg></div>
        <h4>Governance &amp; Controls</h4>
        <p>Internal controls and AI policy</p>
      </div>
      <div class="domain-tile">
        <div class="domain-tile-icon" style="background:#E1F1E9;"><svg width="20" height="20" fill="none" stroke="#001A22" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg></div>
        <h4>Organisational Readiness</h4>
        <p>Leadership mandate and capability</p>
      </div>
    </div>
  </div>
</div>

<!-- PAGE: PLATFORM -->
<div class="page" id="page-platform">
  <div class="page-shell">
    <span class="eyebrow">About your business</span>
    <h2 class="page-title">What best describes your organisation?</h2>
    <p class="page-desc">This helps us tailor your results to your sector. There are no wrong answers — we work with organisations at every stage of their journey.</p>

    <div class="platform-grid">
      <div class="platform-card" onclick="selectPlatform('x3', this)">
        <div class="plat-icon"><svg width="24" height="24" fill="none" stroke="#001A22" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg></div>
        <h3>Manufacturing, Distribution or Wholesale</h3>
        <p>You make, move, or sell physical goods — operations and stock are central to your business</p>
      </div>
      <div class="platform-card" onclick="selectPlatform('intacct', this)">
        <div class="plat-icon"><svg width="24" height="24" fill="none" stroke="#001A22" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/><line x1="2" y1="20" x2="22" y2="20"/></svg></div>
        <h3>Professional Services, Technology or Finance</h3>
        <p>Revenue is driven by people, projects or subscriptions — the finance function is your operational core</p>
      </div>
      <div class="platform-card" onclick="selectPlatform('both', this)">
        <div class="plat-icon"><svg width="24" height="24" fill="none" stroke="#001A22" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/></svg></div>
        <h3>Mixed, non-profit or not sure yet</h3>
        <p>Your business does not fit neatly into either category, or you are still exploring your options</p>
      </div>
    </div>

    <div style="display:flex;gap:12px;align-items:center;">
      <button class="btn btn--ghost btn--md" onclick="goToWelcome()">← Back</button>
      <button class="btn btn--primary btn--md" id="btn-start-questions" onclick="startQuestions()" disabled>
        Continue <span class="btn-arrow">→</span>
      </button>
    </div>
  </div>
</div>

<!-- PAGE: QUESTION -->
<div class="page" id="page-question">
  <div class="progress-bar-wrap">
    <div class="progress-top-row">
      <span class="progress-domain-label" id="q-domain-label"></span>
      <span class="progress-count-label" id="q-count-label"></span>
    </div>
    <div class="progress-track">
      <div class="progress-fill" id="progress-fill" style="width:0%"></div>
    </div>
    <div class="step-dots" id="step-dots"></div>
  </div>

  <div class="page-shell" style="padding-top:16px;">
    <div class="q-card">
      <div class="q-domain-badge" id="q-domain-badge"></div>
      <div class="q-text" id="q-text"></div>
      <div class="q-why" id="q-why"></div>
      <div class="answer-list" id="answer-list"></div>
      <div class="q-nav">
        <button class="btn btn--ghost btn--md" id="btn-prev" onclick="prevQuestion()">← Previous</button>
        <span class="q-nav-hint" id="q-nav-hint">Select an answer to continue</span>
        <button class="btn btn--primary btn--md" id="btn-next" onclick="nextQuestion()" disabled>
          Next <span class="btn-arrow">→</span>
        </button>
      </div>
    </div>
  </div>
</div>

<!-- PAGE: RESULTS -->
<div class="page" id="page-results">
  <div class="results-hero">
    <span class="eyebrow eyebrow-inverse">Your Results</span>
    <h2>AI Readiness Assessment</h2>
    <p>Here is where your organisation stands today — and a clear path forward.</p>
  </div>

  <div class="results-body">
    <div class="stage-result-card" id="stage-result-card">
      <div class="stage-header">
        <div class="stage-header-left">
          <div id="stage-badge-el"></div>
          <div class="stage-name" id="stage-name-el"></div>
          <div class="stage-desc" id="stage-desc-el"></div>
        </div>
        <div class="score-block">
          <div>
            <span class="score-num" id="score-num-el">0</span>
            <span class="score-denom">/ 39</span>
          </div>
          <div class="score-label">Overall score</div>
        </div>
      </div>
      <div id="override-alerts-el"></div>
    </div>

    <div class="two-col">
      <div class="card">
        <div class="card-title">Domain Scores</div>
        <div id="domain-bars-el"></div>
      </div>
      <div class="card">
        <div class="card-title">Maturity Ladder</div>
        <div class="ladder" id="ladder-el"></div>
      </div>
    </div>

    <div class="recs-card">
      <div class="card-title" id="recs-title-el">Priority Recommendations</div>
      <div id="recs-list-el"></div>
    </div>

    <div class="cta-card">
      <span class="eyebrow eyebrow-inverse">Next step</span>
      <h3>Speak to our experts</h3>
      <p>We will walk you through a detailed roadmap tailored to your stage, platform, and sector — with a clear commercial plan to get you there.</p>
      <div class="cta-btn-row">
        <a href="<?php echo esc_url('#'); ?>" class="btn-cta-primary">
          Book a discovery call <span style="display:inline-block;transition:transform .14s;">→</span>
        </a>
        <button class="btn btn--ghost-white btn--md" onclick="window.print()">
          <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M6 9V2h12v7M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect x="6" y="14" width="12" height="8"/></svg>
          Print / Save PDF
        </button>
      </div>
    </div>

    <div class="results-footer">
      <button onclick="restartAssessment()">Retake assessment</button>
      &nbsp;·&nbsp; Mysoft AI Readiness Assessment v1.0
    </div>
  </div>
</div>

<?php get_footer(); ?>
