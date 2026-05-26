<?php
/**
 * Template Part: Assessment CTA + Insights
 * Two sections: navy Assessment CTA and white Insights grid.
 */
?>

<!-- Part A: Assessment CTA -->
<section class="assessment-cta" id="assessment">
  <div class="container">
    <div class="assessment-cta__grid">

      <!-- Left Column -->
      <div class="assessment-cta__left">
        <span class="eyebrow" style="color:var(--cyan);">AI Readiness Assessment</span>
        <h2>Is your finance function<br>ready for AI?</h2>
        <p class="section-lead">Most CFOs cannot yet answer that question credibly — because their operational foundations are not ready to support AI deployment safely. Our AI Readiness Assessment changes that.</p>

        <ol class="assessment-cta__step-list">

          <li class="assessment-cta__step">
            <div class="assessment-cta__step-num">1</div>
            <div>
              <div class="assessment-cta__step-title">Complete six CFO-oriented questions</div>
              <div class="assessment-cta__step-sub">Under five minutes</div>
            </div>
          </li>

          <li class="assessment-cta__step">
            <div class="assessment-cta__step-num">2</div>
            <div>
              <div class="assessment-cta__step-title">Receive your maturity stage score</div>
              <div class="assessment-cta__step-sub">Stages 1–4 with a gap analysis</div>
            </div>
          </li>

          <li class="assessment-cta__step">
            <div class="assessment-cta__step-num">3</div>
            <div>
              <div class="assessment-cta__step-title">Get your recommended next step</div>
              <div class="assessment-cta__step-sub">A named, specific action — not generic advice</div>
            </div>
          </li>

        </ol>

        <p style="font-family:var(--font-sans);font-size:13px;color:rgba(255,255,255,0.45);margin:0;">Free. No commitment. No sales call required unless you want one.</p>
      </div><!-- /.assessment-cta__left -->

      <!-- Right Column: Card -->
      <div>
        <div class="assessment-cta__card">
          <div class="assessment-cta__card-title">Start your assessment</div>
          <p style="font-family:var(--font-sans);font-size:14px;color:rgba(255,255,255,0.65);margin:0 0 24px;line-height:1.6;">
            Answer 13 questions across five domains to find your maturity stage and get a personalised set of next steps.
          </p>
          <a href="<?php echo esc_url( get_permalink( get_page_by_path( 'ai-readiness-assessment' ) ) ); ?>" class="assessment-cta__card-btn">
            Assess My AI Readiness &rarr;
          </a>
          <p style="margin-top:12px;font-family:var(--font-sans);font-size:11px;color:rgba(255,255,255,0.3);text-align:center;">
            Free. Takes under 6 minutes. Instant results.
          </p>
        </div><!-- /.assessment-cta__card -->
      </div>

    </div><!-- /.assessment-cta__grid -->
  </div><!-- /.container -->
</section>

<!-- Part B: Insights -->
<section class="section section--white" id="insights">
  <div class="container">

    <!-- Header -->
    <div class="insights-header">
      <div>
        <span class="eyebrow">Insights</span>
        <h2>Finance and operations in the AI era.</h2>
      </div>
      <a href="<?php echo esc_url( '#' ); ?>" class="btn btn--ghost btn--md">All insights <span class="btn-arrow">→</span></a>
    </div><!-- /.insights-header -->

    <!-- Insights Grid -->
    <div class="insights-grid">

      <!-- Insight 1: CFO Strategy -->
      <a href="<?php echo esc_url( '#' ); ?>" class="insight-card" style="text-decoration:none;display:flex;flex-direction:column;background:#fff;border-radius:4px;overflow:hidden;border:1px solid var(--border-1);box-shadow:var(--shadow-sm);transition:box-shadow 220ms var(--ease-out),transform 220ms var(--ease-out);">
        <div style="height:4px;background:var(--cyan);flex-shrink:0;"></div>
        <div style="padding:24px 24px 28px;flex:1;display:flex;flex-direction:column;">
          <span class="eyebrow" style="color:var(--cyan);">CFO Strategy</span>
          <h3 style="font-family:var(--font-display);font-weight:600;font-size:17px;line-height:1.3;letter-spacing:-0.01em;color:var(--navy);margin:10px 0 12px;">The AI-Ready Finance Function: A CFO Readiness Guide</h3>
          <p style="font-family:var(--font-sans);font-size:13.5px;line-height:1.65;color:var(--fg-2);margin:0;flex:1;">Why AI success starts with finance process maturity — not technology. A structured guide for CFOs who have been asked for a credible AI strategy.</p>
          <div style="margin-top:20px;font-family:var(--font-sans);font-size:12px;color:var(--fg-3);">12 min read</div>
        </div>
      </a>

      <!-- Insight 2: Strategic Insight -->
      <a href="<?php echo esc_url( '#' ); ?>" class="insight-card" style="text-decoration:none;display:flex;flex-direction:column;background:#fff;border-radius:4px;overflow:hidden;border:1px solid var(--border-1);box-shadow:var(--shadow-sm);transition:box-shadow 220ms var(--ease-out),transform 220ms var(--ease-out);">
        <div style="height:4px;background:var(--yellow);flex-shrink:0;"></div>
        <div style="padding:24px 24px 28px;flex:1;display:flex;flex-direction:column;">
          <span class="eyebrow" style="color:#b08a00;">Strategic Insight</span>
          <h3 style="font-family:var(--font-display);font-weight:600;font-size:17px;line-height:1.3;letter-spacing:-0.01em;color:var(--navy);margin:10px 0 12px;">Agentic AI in Finance and Operations: Reality Versus Hype</h3>
          <p style="font-family:var(--font-sans);font-size:13.5px;line-height:1.65;color:var(--fg-2);margin:0;flex:1;">What agentic finance actually means in practice, what governance it requires, and why most organisations are not yet ready — but can be.</p>
          <div style="margin-top:20px;font-family:var(--font-sans);font-size:12px;color:var(--fg-3);">8 min read</div>
        </div>
      </a>

      <!-- Insight 3: Operational Transformation -->
      <a href="<?php echo esc_url( '#' ); ?>" class="insight-card" style="text-decoration:none;display:flex;flex-direction:column;background:#fff;border-radius:4px;overflow:hidden;border:1px solid var(--border-1);box-shadow:var(--shadow-sm);transition:box-shadow 220ms var(--ease-out),transform 220ms var(--ease-out);">
        <div style="height:4px;background:var(--cyan);flex-shrink:0;"></div>
        <div style="padding:24px 24px 28px;flex:1;display:flex;flex-direction:column;">
          <span class="eyebrow" style="color:var(--cyan);">Operational Transformation</span>
          <h3 style="font-family:var(--font-display);font-weight:600;font-size:17px;line-height:1.3;letter-spacing:-0.01em;color:var(--navy);margin:10px 0 12px;">Why Mid-Market Businesses Are Building the Finance Function of 2030 Now</h3>
          <p style="font-family:var(--font-sans);font-size:13.5px;line-height:1.65;color:var(--fg-2);margin:0;flex:1;">The operational infrastructure, automation foundations, and AI capabilities that allow finance and operations to scale with the business rather than constrain it.</p>
          <div style="margin-top:20px;font-family:var(--font-sans);font-size:12px;color:var(--fg-3);">10 min read</div>
        </div>
      </a>

    </div><!-- /.insights-grid -->
  </div><!-- /.container -->
</section>
