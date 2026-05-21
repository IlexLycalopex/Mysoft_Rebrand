<?php
/**
 * Hero Section
 *
 * @package Mysoft
 */
?>

<section class="hero" id="hero">
	<div class="hero__grid container">

		<!-- Left Column -->
		<div class="hero__left">

			<span class="hero__eyebrow eyebrow">Sage ERP &amp; Finance Transformation — Powered by AI</span>

			<h1 class="hero__headline">
				Build the essential infrastructure for your next chapter.
			</h1>

			<div class="hero__cycling-wrap" aria-live="polite">
				<span class="hero__cycling-word is-active">Built for growth.</span>
				<span class="hero__cycling-word">Ready for the AI era.</span>
				<span class="hero__cycling-word">Free of operational drag.</span>
				<span class="hero__cycling-word">Designed to scale.</span>
				<span class="hero__cycling-word">Built for what&#8217;s next.</span>
			</div>

			<p class="hero__lead">
				We implement Sage X3 and Sage Intacct for ambitious mid-market organisations, extend them with our own X3CloudDocs automation IP, and leverage AI at every stage to give finance and operations the capacity to scale with the business.
			</p>

			<div class="hero__actions">
				<a href="<?php echo esc_url( get_permalink( get_page_by_path( 'ai-readiness-assessment' ) ) ); ?>" class="btn btn--primary btn--lg">
					Assess Your AI Readiness <span class="btn-arrow">&#8594;</span>
				</a>
				<a href="#journey" class="btn btn--ghost btn--lg">See How We Work</a>
			</div>

			<div class="hero__trust">
				<span class="hero__trust-item">Sage Platinum Club 2025</span>
				<span class="hero__trust-item">20 Years&#8217; Experience</span>
				<span class="hero__trust-item">UK + North America</span>
				<span class="hero__trust-item">98% SLA Met</span>
			</div>

		</div><!-- /.hero__left -->

		<!-- Right Column: Hero Journey Panel -->
		<div class="hero__right">

			<div class="hero-panel">

				<div class="hero-panel__glow"></div>

				<div class="hero-panel__header">
					<span class="hero-panel__kicker">AI Transformation Journey</span>
					<div class="hero-panel__dots">
						<span class="hero-panel__dot" style="background:#F8C556;"></span>
						<span class="hero-panel__dot" style="background:var(--cyan);"></span>
						<span class="hero-panel__dot" style="background:rgba(255,255,255,0.25);"></span>
					</div>
				</div>

				<div class="hero-panel__company">
					<div class="hero-panel__company-name">Thornfield Group</div>
					<div class="hero-panel__company-meta">Sage Intacct &middot; Manufacturing &middot; UK + North America</div>
				</div>

				<div class="hero-panel__stages">

					<!-- Stage 01 — Complete -->
					<div class="hero-panel__stage-row">
						<div class="hero-panel__stage-line">
							<div class="hero-panel__stage-dot hero-panel__stage-dot--complete">
								<svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
									<path d="M2 5l2.5 2.5L8 3" stroke="var(--navy)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
								</svg>
							</div>
							<div class="hero-panel__connector hero-panel__connector--done"></div>
						</div>
						<div class="hero-panel__stage-content">
							<div class="hero-panel__stage-num">Stage 01</div>
							<div class="hero-panel__stage-name">Operational Foundation</div>
						</div>
					</div>

					<!-- Stage 02 — Active -->
					<div class="hero-panel__stage-row">
						<div class="hero-panel__stage-line">
							<div class="hero-panel__stage-dot hero-panel__stage-dot--active">
								<span class="hero-panel__stage-dot-inner"></span>
							</div>
							<div class="hero-panel__connector hero-panel__connector--upcoming"></div>
						</div>
						<div class="hero-panel__stage-content">
							<div class="hero-panel__stage-num">
								Stage 02
								<span class="hero-panel__stage-badge">IN PROGRESS</span>
							</div>
							<div class="hero-panel__stage-name hero-panel__stage-name--active">Intelligent Automation</div>

							<div class="hero-panel__progress">
								<div class="hero-panel__progress-row">
									<span class="hero-panel__progress-label">Automation coverage</span>
									<span class="hero-panel__progress-pct" id="hero-journey-progress-label">62%</span>
								</div>
								<div class="hero-panel__progress-track">
									<div class="hero-panel__progress-fill" id="hero-journey-progress" style="width:62%;"></div>
								</div>
							</div>
						</div>
					</div>

					<!-- Stage 03 — Upcoming -->
					<div class="hero-panel__stage-row">
						<div class="hero-panel__stage-line">
							<div class="hero-panel__stage-dot hero-panel__stage-dot--upcoming"></div>
							<div class="hero-panel__connector hero-panel__connector--upcoming"></div>
						</div>
						<div class="hero-panel__stage-content">
							<div class="hero-panel__stage-num hero-panel__stage-num--upcoming">Stage 03</div>
							<div class="hero-panel__stage-name hero-panel__stage-name--upcoming">AI-Augmented Finance</div>
						</div>
					</div>

					<!-- Stage 04 — Upcoming -->
					<div class="hero-panel__stage-row">
						<div class="hero-panel__stage-line">
							<div class="hero-panel__stage-dot hero-panel__stage-dot--upcoming"></div>
						</div>
						<div class="hero-panel__stage-content">
							<div class="hero-panel__stage-num hero-panel__stage-num--upcoming">Stage 04</div>
							<div class="hero-panel__stage-name hero-panel__stage-name--upcoming">Agentic Finance Ops</div>
						</div>
					</div>

				</div><!-- /.hero-panel__stages -->

				<div class="hero-panel__milestone">
					<div class="hero-panel__milestone-kicker">Next milestone</div>
					<div class="hero-panel__milestone-title">X3CloudDocs AP automation go-live</div>
					<div class="hero-panel__milestone-sub">Quarterly AI Optimisation Review — Q3 2026</div>
				</div>

			</div><!-- /.hero-panel -->

		</div><!-- /.hero__right -->

	</div><!-- /.hero__grid -->
</section>
