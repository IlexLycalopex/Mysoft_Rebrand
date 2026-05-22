<!doctype html>
<html <?php language_attributes(); ?>>
<head>
<meta charset="<?php bloginfo( 'charset' ); ?>">
<meta name="viewport" content="width=device-width, initial-scale=1">
<?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<?php wp_body_open(); ?>

<nav class="site-nav" id="site-nav">
	<div class="site-nav__inner">

		<a href="<?php echo esc_url( home_url( '/' ) ); ?>" class="wordmark site-nav__logo">Mysoft<span class="wordmark-slash">/</span></a>

		<div class="site-nav__items" id="site-nav-items">

			<!-- The Challenge -->
			<div class="site-nav__item">
				<button class="site-nav__btn" aria-expanded="false">
					The Challenge
					<svg class="site-nav__chevron" width="9" height="9" viewBox="0 0 9 9" aria-hidden="true"><path d="M1.5 3 4.5 6 7.5 3" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>
				</button>
				<div class="site-nav__panel" role="region" aria-label="The Challenge">
					<div class="site-nav__panel-inner site-nav__panel-inner--2col">
						<div>
							<p class="site-nav__col-title">Buying Triggers</p>
							<div class="site-nav__links">
								<a href="<?php echo esc_url( '#' ); ?>" class="site-nav__link">
									<span class="site-nav__link-name">Growth Bottleneck <span class="site-nav__link-arrow">&#8594;</span></span>
									<span class="site-nav__link-sub">When your back office can&#8217;t keep pace</span>
								</a>
								<a href="<?php echo esc_url( '#' ); ?>" class="site-nav__link">
									<span class="site-nav__link-name">AI Mandate <span class="site-nav__link-arrow">&#8594;</span></span>
									<span class="site-nav__link-sub">Board has asked for a credible AI strategy</span>
								</a>
								<a href="<?php echo esc_url( '#' ); ?>" class="site-nav__link">
									<span class="site-nav__link-name">Scale Ambition <span class="site-nav__link-arrow">&#8594;</span></span>
									<span class="site-nav__link-sub">Infrastructure for 2&#215; or 3&#215; growth</span>
								</a>
								<a href="<?php echo esc_url( '#' ); ?>" class="site-nav__link">
									<span class="site-nav__link-name">Compliance Event <span class="site-nav__link-arrow">&#8594;</span></span>
									<span class="site-nav__link-sub">Acquisition, audit, or regulatory change</span>
								</a>
							</div>
						</div>
						<div>
							<p class="site-nav__col-title">Who We Serve</p>
							<div class="site-nav__links">
								<a href="<?php echo esc_url( '#' ); ?>" class="site-nav__link">
									<span class="site-nav__link-name">CFO &amp; Finance Director <span class="site-nav__link-arrow">&#8594;</span></span>
								</a>
								<a href="<?php echo esc_url( '#' ); ?>" class="site-nav__link">
									<span class="site-nav__link-name">COO &amp; Operations Director <span class="site-nav__link-arrow">&#8594;</span></span>
								</a>
								<a href="<?php echo esc_url( '#' ); ?>" class="site-nav__link">
									<span class="site-nav__link-name">CEO &amp; Board <span class="site-nav__link-arrow">&#8594;</span></span>
								</a>
								<a href="<?php echo esc_url( '#' ); ?>" class="site-nav__link">
									<span class="site-nav__link-name">CTO &amp; IT Director <span class="site-nav__link-arrow">&#8594;</span></span>
								</a>
								<a href="<?php echo esc_url( '#' ); ?>" class="site-nav__link">
									<span class="site-nav__link-name">CIO <span class="site-nav__link-arrow">&#8594;</span></span>
								</a>
							</div>
						</div>
						<div class="site-nav__cta-card">
							<p class="site-nav__cta-card-kicker">Start here</p>
							<h3 class="site-nav__cta-card-title">Is your finance function ready for AI?</h3>
							<p class="site-nav__cta-card-body">Free assessment. Maturity stage score and a recommended next step. No commitment.</p>
							<a href="<?php echo esc_url( get_permalink( get_page_by_path( 'ai-readiness-assessment' ) ) ); ?>" class="site-nav__cta-card-btn">Take the assessment &#8594;</a>
						</div>
					</div>
				</div>
			</div><!-- /.site-nav__item -->

			<!-- The Journey -->
			<div class="site-nav__item">
				<button class="site-nav__btn" aria-expanded="false">
					The Journey
					<svg class="site-nav__chevron" width="9" height="9" viewBox="0 0 9 9" aria-hidden="true"><path d="M1.5 3 4.5 6 7.5 3" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>
				</button>
				<div class="site-nav__panel" role="region" aria-label="The Journey">
					<div class="site-nav__panel-inner site-nav__panel-inner--2col">
						<div>
							<p class="site-nav__col-title">AI Transformation Stages</p>
							<div class="site-nav__links">
								<a href="<?php echo esc_url( '#' ); ?>" class="site-nav__link">
									<span class="site-nav__link-name">The Journey &#8212; Overview <span class="site-nav__link-arrow">&#8594;</span></span>
									<span class="site-nav__link-sub">How we take you from Stage 1 to Stage 4</span>
								</a>
								<a href="<?php echo esc_url( '#' ); ?>" class="site-nav__link">
									<span class="site-nav__link-name">Stage 1 &#8212; Operational Foundation <span class="site-nav__link-arrow">&#8594;</span></span>
									<span class="site-nav__link-sub">Build the platform your business deserves</span>
								</a>
								<a href="<?php echo esc_url( '#' ); ?>" class="site-nav__link">
									<span class="site-nav__link-name">Stage 2 &#8212; Intelligent Automation <span class="site-nav__link-arrow">&#8594;</span></span>
									<span class="site-nav__link-sub">Remove the manual transactional layer</span>
								</a>
								<a href="<?php echo esc_url( '#' ); ?>" class="site-nav__link">
									<span class="site-nav__link-name">Stage 3 &#8212; AI-Augmented Finance <span class="site-nav__link-arrow">&#8594;</span></span>
									<span class="site-nav__link-sub">Intelligence at the speed of the business</span>
								</a>
								<a href="<?php echo esc_url( '#' ); ?>" class="site-nav__link">
									<span class="site-nav__link-name">Stage 4 &#8212; Agentic Finance Operations <span class="site-nav__link-arrow">&#8594;</span></span>
									<span class="site-nav__link-sub">Finance at scale without headcount growth</span>
								</a>
							</div>
						</div>
						<div>
							<p class="site-nav__col-title">Frameworks &amp; Tools</p>
							<div class="site-nav__links">
								<a href="<?php echo esc_url( '#' ); ?>" class="site-nav__link">
									<span class="site-nav__link-name">AI Readiness Assessment <span class="site-nav__link-arrow">&#8594;</span></span>
									<span class="site-nav__link-sub">Free &#8212; find your maturity stage</span>
								</a>
								<a href="<?php echo esc_url( '#' ); ?>" class="site-nav__link">
									<span class="site-nav__link-name">Agentic Finance Governance <span class="site-nav__link-arrow">&#8594;</span></span>
									<span class="site-nav__link-sub">Board-defensible AI governance</span>
								</a>
								<a href="<?php echo esc_url( '#' ); ?>" class="site-nav__link">
									<span class="site-nav__link-name">Finance Operations Review <span class="site-nav__link-arrow">&#8594;</span></span>
									<span class="site-nav__link-sub">Structured discovery process</span>
								</a>
								<a href="<?php echo esc_url( '#' ); ?>" class="site-nav__link">
									<span class="site-nav__link-name">ISV Partner Ecosystem <span class="site-nav__link-arrow">&#8594;</span></span>
									<span class="site-nav__link-sub">The integrated technology stack</span>
								</a>
							</div>
						</div>
						<div class="site-nav__cta-card">
							<p class="site-nav__cta-card-kicker">Start here</p>
							<h3 class="site-nav__cta-card-title">Is your finance function ready for AI?</h3>
							<p class="site-nav__cta-card-body">Free assessment. Maturity stage score and a recommended next step. No commitment.</p>
							<a href="<?php echo esc_url( get_permalink( get_page_by_path( 'ai-readiness-assessment' ) ) ); ?>" class="site-nav__cta-card-btn">Take the assessment &#8594;</a>
						</div>
					</div>
				</div>
			</div><!-- /.site-nav__item -->

			<!-- Solutions -->
			<div class="site-nav__item">
				<button class="site-nav__btn" aria-expanded="false">
					Solutions
					<svg class="site-nav__chevron" width="9" height="9" viewBox="0 0 9 9" aria-hidden="true"><path d="M1.5 3 4.5 6 7.5 3" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>
				</button>
				<div class="site-nav__panel" role="region" aria-label="Solutions">
					<div class="site-nav__panel-inner site-nav__panel-inner--2col">
						<div>
							<p class="site-nav__col-title">Platforms</p>
							<div class="site-nav__links">
								<a href="<?php echo esc_url( '#' ); ?>" class="site-nav__link">
									<span class="site-nav__link-name">Sage Intacct <span class="site-nav__link-arrow">&#8594;</span></span>
									<span class="site-nav__link-sub">Finance-first cloud ERP</span>
								</a>
								<a href="<?php echo esc_url( '#' ); ?>" class="site-nav__link">
									<span class="site-nav__link-name">Sage X3 <span class="site-nav__link-arrow">&#8594;</span></span>
									<span class="site-nav__link-sub">Operational ERP for complex businesses</span>
								</a>
								<a href="<?php echo esc_url( '#' ); ?>" class="site-nav__link">
									<span class="site-nav__link-name">X3CloudDocs <span class="site-nav__link-arrow">&#8594;</span></span>
									<span class="site-nav__link-sub">AI document automation &#8212; Mysoft IP</span>
								</a>
								<a href="<?php echo esc_url( '#' ); ?>" class="site-nav__link">
									<span class="site-nav__link-name">Partner Ecosystem <span class="site-nav__link-arrow">&#8594;</span></span>
									<span class="site-nav__link-sub">Netstock, Lynq, Phocas, SEI and more</span>
								</a>
							</div>
						</div>
						<div>
							<p class="site-nav__col-title">By Sector</p>
							<div class="site-nav__links">
								<a href="<?php echo esc_url( '#' ); ?>" class="site-nav__link">
									<span class="site-nav__link-name">Manufacturing &amp; Distribution <span class="site-nav__link-arrow">&#8594;</span></span>
								</a>
								<a href="<?php echo esc_url( '#' ); ?>" class="site-nav__link">
									<span class="site-nav__link-name">Food &amp; Beverage <span class="site-nav__link-arrow">&#8594;</span></span>
								</a>
								<a href="<?php echo esc_url( '#' ); ?>" class="site-nav__link">
									<span class="site-nav__link-name">Professional Services &amp; SaaS <span class="site-nav__link-arrow">&#8594;</span></span>
								</a>
								<a href="<?php echo esc_url( '#' ); ?>" class="site-nav__link">
									<span class="site-nav__link-name">Not-for-Profit &amp; Healthcare <span class="site-nav__link-arrow">&#8594;</span></span>
								</a>
								<a href="<?php echo esc_url( '#' ); ?>" class="site-nav__link">
									<span class="site-nav__link-name">Financial Services <span class="site-nav__link-arrow">&#8594;</span></span>
								</a>
							</div>
						</div>
						<div class="site-nav__cta-card">
							<p class="site-nav__cta-card-kicker">Start here</p>
							<h3 class="site-nav__cta-card-title">Is your finance function ready for AI?</h3>
							<p class="site-nav__cta-card-body">Free assessment. Maturity stage score and a recommended next step. No commitment.</p>
							<a href="<?php echo esc_url( get_permalink( get_page_by_path( 'ai-readiness-assessment' ) ) ); ?>" class="site-nav__cta-card-btn">Take the assessment &#8594;</a>
						</div>
					</div>
				</div>
			</div><!-- /.site-nav__item -->

			<!-- Insights -->
			<div class="site-nav__item">
				<button class="site-nav__btn" aria-expanded="false">
					Insights
					<svg class="site-nav__chevron" width="9" height="9" viewBox="0 0 9 9" aria-hidden="true"><path d="M1.5 3 4.5 6 7.5 3" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>
				</button>
				<div class="site-nav__panel" role="region" aria-label="Insights">
					<div class="site-nav__panel-inner site-nav__panel-inner--2col">
						<div>
							<p class="site-nav__col-title">Content</p>
							<div class="site-nav__links">
								<a href="<?php echo esc_url( '#' ); ?>" class="site-nav__link">
									<span class="site-nav__link-name">CFO Strategy <span class="site-nav__link-arrow">&#8594;</span></span>
									<span class="site-nav__link-sub">Finance as a growth enabler</span>
								</a>
								<a href="<?php echo esc_url( '#' ); ?>" class="site-nav__link">
									<span class="site-nav__link-name">Operational Transformation <span class="site-nav__link-arrow">&#8594;</span></span>
									<span class="site-nav__link-sub">AI in AP, AR, and beyond</span>
								</a>
								<a href="<?php echo esc_url( '#' ); ?>" class="site-nav__link">
									<span class="site-nav__link-name">Strategic Insight <span class="site-nav__link-arrow">&#8594;</span></span>
									<span class="site-nav__link-sub">Agentic AI &#8212; reality versus hype</span>
								</a>
								<a href="<?php echo esc_url( '#' ); ?>" class="site-nav__link">
									<span class="site-nav__link-name">Events &amp; Webinars <span class="site-nav__link-arrow">&#8594;</span></span>
									<span class="site-nav__link-sub">ERP selection events and roundtables</span>
								</a>
							</div>
						</div>
						<div>
							<p class="site-nav__col-title">Resources</p>
							<div class="site-nav__links">
								<a href="<?php echo esc_url( '#' ); ?>" class="site-nav__link">
									<span class="site-nav__link-name">AI-Ready Finance Guide <span class="site-nav__link-arrow">&#8594;</span></span>
									<span class="site-nav__link-sub">Gated &#8212; free download</span>
								</a>
								<a href="<?php echo esc_url( '#' ); ?>" class="site-nav__link">
									<span class="site-nav__link-name">ERP Selection Framework <span class="site-nav__link-arrow">&#8594;</span></span>
								</a>
								<a href="<?php echo esc_url( '#' ); ?>" class="site-nav__link">
									<span class="site-nav__link-name">Customer Transformation Stories <span class="site-nav__link-arrow">&#8594;</span></span>
								</a>
								<a href="<?php echo esc_url( '#' ); ?>" class="site-nav__link">
									<span class="site-nav__link-name">Demo Hub <span class="site-nav__link-arrow">&#8594;</span></span>
								</a>
							</div>
						</div>
						<div class="site-nav__cta-card">
							<p class="site-nav__cta-card-kicker">Start here</p>
							<h3 class="site-nav__cta-card-title">Is your finance function ready for AI?</h3>
							<p class="site-nav__cta-card-body">Free assessment. Maturity stage score and a recommended next step. No commitment.</p>
							<a href="<?php echo esc_url( get_permalink( get_page_by_path( 'ai-readiness-assessment' ) ) ); ?>" class="site-nav__cta-card-btn">Take the assessment &#8594;</a>
						</div>
					</div>
				</div>
			</div><!-- /.site-nav__item -->

			<!-- About -->
			<div class="site-nav__item">
				<button class="site-nav__btn" aria-expanded="false">
					About
					<svg class="site-nav__chevron" width="9" height="9" viewBox="0 0 9 9" aria-hidden="true"><path d="M1.5 3 4.5 6 7.5 3" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>
				</button>
				<div class="site-nav__panel" role="region" aria-label="About">
					<div class="site-nav__panel-inner site-nav__panel-inner--2col">
						<div>
							<p class="site-nav__col-title">Who We Are</p>
							<div class="site-nav__links">
								<a href="<?php echo esc_url( '#' ); ?>" class="site-nav__link">
									<span class="site-nav__link-name">Our Story <span class="site-nav__link-arrow">&#8594;</span></span>
									<span class="site-nav__link-sub">20 years. UK&#8217;s first Sage X3 partner</span>
								</a>
								<a href="<?php echo esc_url( '#' ); ?>" class="site-nav__link">
									<span class="site-nav__link-name">Meet the Team <span class="site-nav__link-arrow">&#8594;</span></span>
									<span class="site-nav__link-sub">50+ in-house Sage experts</span>
								</a>
								<a href="<?php echo esc_url( '#' ); ?>" class="site-nav__link">
									<span class="site-nav__link-name">Careers <span class="site-nav__link-arrow">&#8594;</span></span>
									<span class="site-nav__link-sub">Join us</span>
								</a>
							</div>
						</div>
						<div>
							<p class="site-nav__col-title">Credentials</p>
							<div class="site-nav__links">
								<a href="<?php echo esc_url( '#' ); ?>" class="site-nav__link">
									<span class="site-nav__link-name">Sage Platinum Club 2025 <span class="site-nav__link-arrow">&#8594;</span></span>
								</a>
								<a href="<?php echo esc_url( '#' ); ?>" class="site-nav__link">
									<span class="site-nav__link-name">Excellence Partner of the Year <span class="site-nav__link-arrow">&#8594;</span></span>
								</a>
								<a href="<?php echo esc_url( '#' ); ?>" class="site-nav__link">
									<span class="site-nav__link-name">Customer Transformation Stories <span class="site-nav__link-arrow">&#8594;</span></span>
								</a>
								<a href="<?php echo esc_url( '#' ); ?>" class="site-nav__link">
									<span class="site-nav__link-name">Support Portal <span class="site-nav__link-arrow">&#8594;</span></span>
								</a>
							</div>
						</div>
						<div class="site-nav__cta-card">
							<p class="site-nav__cta-card-kicker">Start here</p>
							<h3 class="site-nav__cta-card-title">Is your finance function ready for AI?</h3>
							<p class="site-nav__cta-card-body">Free assessment. Maturity stage score and a recommended next step. No commitment.</p>
							<a href="<?php echo esc_url( get_permalink( get_page_by_path( 'ai-readiness-assessment' ) ) ); ?>" class="site-nav__cta-card-btn">Take the assessment &#8594;</a>
						</div>
					</div>
				</div>
			</div><!-- /.site-nav__item -->

			<!-- Mobile-only CTAs (hidden on desktop) -->
			<div class="site-nav__mobile-ctas">
				<a href="<?php echo esc_url( '#' ); ?>" class="btn btn--ghost btn--full">Book a demo</a>
				<a href="<?php echo esc_url( get_permalink( get_page_by_path( 'ai-readiness-assessment' ) ) ); ?>" class="btn btn--primary btn--full">Assess Your AI Readiness &#8594;</a>
			</div>

		</div><!-- /.site-nav__items -->

		<div class="site-nav__ctas">
			<a href="<?php echo esc_url( '#' ); ?>" class="site-nav__demo-link">Book a demo</a>
			<a href="<?php echo esc_url( get_permalink( get_page_by_path( 'ai-readiness-assessment' ) ) ); ?>" class="btn btn--primary btn--sm">Assess Your AI Readiness <span class="btn-arrow">&#8594;</span></a>
		</div>

		<button class="site-nav__mobile-toggle" id="site-nav-mobile-toggle" aria-label="Toggle navigation" aria-expanded="false">
			<span></span><span></span><span></span>
		</button>

	</div><!-- /.site-nav__inner -->
</nav><!-- /.site-nav -->
