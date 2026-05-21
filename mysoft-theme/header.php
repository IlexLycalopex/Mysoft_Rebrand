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

		<div class="site-nav__center">

			<button class="site-nav__item" data-nav-key="challenge" aria-expanded="false">
				<span class="site-nav__item-label">The Challenge</span>
				<svg class="site-nav__item-chevron" width="9" height="9" viewBox="0 0 9 9" aria-hidden="true"><path d="M1.5 3 4.5 6 7.5 3" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>
			</button>

			<button class="site-nav__item" data-nav-key="journey" aria-expanded="false">
				<span class="site-nav__item-label">The Journey</span>
				<svg class="site-nav__item-chevron" width="9" height="9" viewBox="0 0 9 9" aria-hidden="true"><path d="M1.5 3 4.5 6 7.5 3" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>
			</button>

			<button class="site-nav__item" data-nav-key="solutions" aria-expanded="false">
				<span class="site-nav__item-label">Solutions</span>
				<svg class="site-nav__item-chevron" width="9" height="9" viewBox="0 0 9 9" aria-hidden="true"><path d="M1.5 3 4.5 6 7.5 3" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>
			</button>

			<button class="site-nav__item" data-nav-key="insights" aria-expanded="false">
				<span class="site-nav__item-label">Insights</span>
				<svg class="site-nav__item-chevron" width="9" height="9" viewBox="0 0 9 9" aria-hidden="true"><path d="M1.5 3 4.5 6 7.5 3" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>
			</button>

			<button class="site-nav__item" data-nav-key="about" aria-expanded="false">
				<span class="site-nav__item-label">About</span>
				<svg class="site-nav__item-chevron" width="9" height="9" viewBox="0 0 9 9" aria-hidden="true"><path d="M1.5 3 4.5 6 7.5 3" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>
			</button>

		</div><!-- /.site-nav__center -->

		<div class="site-nav__ctas">
			<a href="<?php echo esc_url( '#' ); ?>" class="site-nav__demo-link">Book a demo</a>
			<a href="<?php echo esc_url( get_permalink( get_page_by_path( 'ai-readiness-assessment' ) ) ); ?>" class="btn btn--primary btn--sm">Assess Your AI Readiness <span class="btn-arrow">&#8594;</span></a>
		</div><!-- /.site-nav__ctas -->

		<button class="mobile-nav__toggle" id="mobile-nav-toggle" aria-label="Toggle navigation" aria-expanded="false" aria-controls="mobile-nav">
			<span class="hamburger-line"></span>
			<span class="hamburger-line"></span>
			<span class="hamburger-line"></span>
		</button>

	</div><!-- /.site-nav__inner -->

	<!-- =============================================
	     MEGA PANEL: The Challenge
	     ============================================= -->
	<div class="mega-panel" id="mega-panel-challenge" role="region" aria-label="The Challenge">
		<div class="mega-panel__inner">

			<div class="mega-panel__col">
				<p class="mega-panel__col-kicker">Buying Triggers</p>
				<div class="mega-panel__links">
					<a href="<?php echo esc_url( '#' ); ?>" class="mega-panel__link">
						<span class="mega-panel__link-name">Growth Bottleneck</span>
						<span class="mega-panel__link-sub">When your back office can&#8217;t keep pace</span>
					</a>
					<a href="<?php echo esc_url( '#' ); ?>" class="mega-panel__link">
						<span class="mega-panel__link-name">AI Mandate</span>
						<span class="mega-panel__link-sub">Board has asked for a credible AI strategy</span>
					</a>
					<a href="<?php echo esc_url( '#' ); ?>" class="mega-panel__link">
						<span class="mega-panel__link-name">Scale Ambition</span>
						<span class="mega-panel__link-sub">Infrastructure for 2&#215; or 3&#215; growth</span>
					</a>
					<a href="<?php echo esc_url( '#' ); ?>" class="mega-panel__link">
						<span class="mega-panel__link-name">Compliance Event</span>
						<span class="mega-panel__link-sub">Acquisition, audit, or regulatory change</span>
					</a>
				</div>
			</div><!-- /.mega-panel__col -->

			<div class="mega-panel__col">
				<p class="mega-panel__col-kicker">Who We Serve</p>
				<div class="mega-panel__links">
					<a href="<?php echo esc_url( '#' ); ?>" class="mega-panel__link">
						<span class="mega-panel__link-name">CFO &amp; Finance Director</span>
					</a>
					<a href="<?php echo esc_url( '#' ); ?>" class="mega-panel__link">
						<span class="mega-panel__link-name">COO &amp; Operations Director</span>
					</a>
					<a href="<?php echo esc_url( '#' ); ?>" class="mega-panel__link">
						<span class="mega-panel__link-name">CEO &amp; Board</span>
					</a>
					<a href="<?php echo esc_url( '#' ); ?>" class="mega-panel__link">
						<span class="mega-panel__link-name">CTO &amp; IT Director</span>
					</a>
					<a href="<?php echo esc_url( '#' ); ?>" class="mega-panel__link">
						<span class="mega-panel__link-name">CIO</span>
					</a>
				</div>
			</div><!-- /.mega-panel__col -->

			<div class="mega-panel__col">
				<div class="mega-panel__cta-card">
					<p class="mega-panel__cta-eyebrow">Start here</p>
					<h3 class="mega-panel__cta-headline">Is your finance function ready for AI?</h3>
					<p class="mega-panel__cta-body">Free assessment. Maturity stage score and a recommended next step. No commitment.</p>
					<a href="<?php echo esc_url( get_permalink( get_page_by_path( 'ai-readiness-assessment' ) ) ); ?>" class="btn btn--accent btn--sm">Take the assessment &#8594;</a>
				</div>
			</div><!-- /.mega-panel__col -->

		</div><!-- /.mega-panel__inner -->
	</div><!-- /.mega-panel #mega-panel-challenge -->

	<!-- =============================================
	     MEGA PANEL: The Journey
	     ============================================= -->
	<div class="mega-panel" id="mega-panel-journey" role="region" aria-label="The Journey">
		<div class="mega-panel__inner">

			<div class="mega-panel__col">
				<p class="mega-panel__col-kicker">AI Transformation Stages</p>
				<div class="mega-panel__links">
					<a href="<?php echo esc_url( '#' ); ?>" class="mega-panel__link">
						<span class="mega-panel__link-name">The Journey &#8212; Overview</span>
						<span class="mega-panel__link-sub">How we take you from Stage 1 to Stage 4</span>
					</a>
					<a href="<?php echo esc_url( '#' ); ?>" class="mega-panel__link">
						<span class="mega-panel__link-name">Stage 1 &#8212; Operational Foundation</span>
						<span class="mega-panel__link-sub">Build the platform your business deserves</span>
					</a>
					<a href="<?php echo esc_url( '#' ); ?>" class="mega-panel__link">
						<span class="mega-panel__link-name">Stage 2 &#8212; Intelligent Automation</span>
						<span class="mega-panel__link-sub">Remove the manual transactional layer</span>
					</a>
					<a href="<?php echo esc_url( '#' ); ?>" class="mega-panel__link">
						<span class="mega-panel__link-name">Stage 3 &#8212; AI-Augmented Finance</span>
						<span class="mega-panel__link-sub">Intelligence at the speed of the business</span>
					</a>
					<a href="<?php echo esc_url( '#' ); ?>" class="mega-panel__link">
						<span class="mega-panel__link-name">Stage 4 &#8212; Agentic Finance Operations</span>
						<span class="mega-panel__link-sub">Finance at scale without headcount growth</span>
					</a>
				</div>
			</div><!-- /.mega-panel__col -->

			<div class="mega-panel__col">
				<p class="mega-panel__col-kicker">Frameworks &amp; Tools</p>
				<div class="mega-panel__links">
					<a href="<?php echo esc_url( '#' ); ?>" class="mega-panel__link">
						<span class="mega-panel__link-name">AI Readiness Assessment</span>
						<span class="mega-panel__link-sub">Free &#8212; find your maturity stage</span>
					</a>
					<a href="<?php echo esc_url( '#' ); ?>" class="mega-panel__link">
						<span class="mega-panel__link-name">Agentic Finance Governance</span>
						<span class="mega-panel__link-sub">Board-defensible AI governance</span>
					</a>
					<a href="<?php echo esc_url( '#' ); ?>" class="mega-panel__link">
						<span class="mega-panel__link-name">Finance Operations Review</span>
						<span class="mega-panel__link-sub">Structured discovery process</span>
					</a>
					<a href="<?php echo esc_url( '#' ); ?>" class="mega-panel__link">
						<span class="mega-panel__link-name">ISV Partner Ecosystem</span>
						<span class="mega-panel__link-sub">The integrated technology stack</span>
					</a>
				</div>
			</div><!-- /.mega-panel__col -->

			<div class="mega-panel__col">
				<div class="mega-panel__cta-card">
					<p class="mega-panel__cta-eyebrow">Start here</p>
					<h3 class="mega-panel__cta-headline">Is your finance function ready for AI?</h3>
					<p class="mega-panel__cta-body">Free assessment. Maturity stage score and a recommended next step. No commitment.</p>
					<a href="<?php echo esc_url( get_permalink( get_page_by_path( 'ai-readiness-assessment' ) ) ); ?>" class="btn btn--accent btn--sm">Take the assessment &#8594;</a>
				</div>
			</div><!-- /.mega-panel__col -->

		</div><!-- /.mega-panel__inner -->
	</div><!-- /.mega-panel #mega-panel-journey -->

	<!-- =============================================
	     MEGA PANEL: Solutions
	     ============================================= -->
	<div class="mega-panel" id="mega-panel-solutions" role="region" aria-label="Solutions">
		<div class="mega-panel__inner">

			<div class="mega-panel__col">
				<p class="mega-panel__col-kicker">Platforms</p>
				<div class="mega-panel__links">
					<a href="<?php echo esc_url( '#' ); ?>" class="mega-panel__link">
						<span class="mega-panel__link-name">Sage Intacct</span>
						<span class="mega-panel__link-sub">Finance-first cloud ERP</span>
					</a>
					<a href="<?php echo esc_url( '#' ); ?>" class="mega-panel__link">
						<span class="mega-panel__link-name">Sage X3</span>
						<span class="mega-panel__link-sub">Operational ERP for complex businesses</span>
					</a>
					<a href="<?php echo esc_url( '#' ); ?>" class="mega-panel__link">
						<span class="mega-panel__link-name">X3CloudDocs</span>
						<span class="mega-panel__link-sub">AI document automation &#8212; Mysoft IP</span>
					</a>
					<a href="<?php echo esc_url( '#' ); ?>" class="mega-panel__link">
						<span class="mega-panel__link-name">Partner Ecosystem</span>
						<span class="mega-panel__link-sub">Netstock, Lynq, Phocas, SEI and more</span>
					</a>
				</div>
			</div><!-- /.mega-panel__col -->

			<div class="mega-panel__col">
				<p class="mega-panel__col-kicker">By Sector</p>
				<div class="mega-panel__links">
					<a href="<?php echo esc_url( '#' ); ?>" class="mega-panel__link">
						<span class="mega-panel__link-name">Manufacturing &amp; Distribution</span>
					</a>
					<a href="<?php echo esc_url( '#' ); ?>" class="mega-panel__link">
						<span class="mega-panel__link-name">Food &amp; Beverage</span>
					</a>
					<a href="<?php echo esc_url( '#' ); ?>" class="mega-panel__link">
						<span class="mega-panel__link-name">Professional Services &amp; SaaS</span>
					</a>
					<a href="<?php echo esc_url( '#' ); ?>" class="mega-panel__link">
						<span class="mega-panel__link-name">Not-for-Profit &amp; Healthcare</span>
					</a>
					<a href="<?php echo esc_url( '#' ); ?>" class="mega-panel__link">
						<span class="mega-panel__link-name">Financial Services</span>
					</a>
				</div>
			</div><!-- /.mega-panel__col -->

			<div class="mega-panel__col">
				<div class="mega-panel__cta-card">
					<p class="mega-panel__cta-eyebrow">Start here</p>
					<h3 class="mega-panel__cta-headline">Is your finance function ready for AI?</h3>
					<p class="mega-panel__cta-body">Free assessment. Maturity stage score and a recommended next step. No commitment.</p>
					<a href="<?php echo esc_url( get_permalink( get_page_by_path( 'ai-readiness-assessment' ) ) ); ?>" class="btn btn--accent btn--sm">Take the assessment &#8594;</a>
				</div>
			</div><!-- /.mega-panel__col -->

		</div><!-- /.mega-panel__inner -->
	</div><!-- /.mega-panel #mega-panel-solutions -->

	<!-- =============================================
	     MEGA PANEL: Insights
	     ============================================= -->
	<div class="mega-panel" id="mega-panel-insights" role="region" aria-label="Insights">
		<div class="mega-panel__inner">

			<div class="mega-panel__col">
				<p class="mega-panel__col-kicker">Content</p>
				<div class="mega-panel__links">
					<a href="<?php echo esc_url( '#' ); ?>" class="mega-panel__link">
						<span class="mega-panel__link-name">CFO Strategy</span>
						<span class="mega-panel__link-sub">Finance as a growth enabler</span>
					</a>
					<a href="<?php echo esc_url( '#' ); ?>" class="mega-panel__link">
						<span class="mega-panel__link-name">Operational Transformation</span>
						<span class="mega-panel__link-sub">AI in AP, AR, and beyond</span>
					</a>
					<a href="<?php echo esc_url( '#' ); ?>" class="mega-panel__link">
						<span class="mega-panel__link-name">Strategic Insight</span>
						<span class="mega-panel__link-sub">Agentic AI &#8212; reality versus hype</span>
					</a>
					<a href="<?php echo esc_url( '#' ); ?>" class="mega-panel__link">
						<span class="mega-panel__link-name">Events &amp; Webinars</span>
						<span class="mega-panel__link-sub">ERP selection events and roundtables</span>
					</a>
				</div>
			</div><!-- /.mega-panel__col -->

			<div class="mega-panel__col">
				<p class="mega-panel__col-kicker">Resources</p>
				<div class="mega-panel__links">
					<a href="<?php echo esc_url( '#' ); ?>" class="mega-panel__link">
						<span class="mega-panel__link-name">AI-Ready Finance Guide</span>
						<span class="mega-panel__link-sub">Gated &#8212; free download</span>
					</a>
					<a href="<?php echo esc_url( '#' ); ?>" class="mega-panel__link">
						<span class="mega-panel__link-name">ERP Selection Framework</span>
					</a>
					<a href="<?php echo esc_url( '#' ); ?>" class="mega-panel__link">
						<span class="mega-panel__link-name">Customer Transformation Stories</span>
					</a>
					<a href="<?php echo esc_url( '#' ); ?>" class="mega-panel__link">
						<span class="mega-panel__link-name">Demo Hub</span>
					</a>
				</div>
			</div><!-- /.mega-panel__col -->

			<div class="mega-panel__col">
				<div class="mega-panel__cta-card">
					<p class="mega-panel__cta-eyebrow">Start here</p>
					<h3 class="mega-panel__cta-headline">Is your finance function ready for AI?</h3>
					<p class="mega-panel__cta-body">Free assessment. Maturity stage score and a recommended next step. No commitment.</p>
					<a href="<?php echo esc_url( get_permalink( get_page_by_path( 'ai-readiness-assessment' ) ) ); ?>" class="btn btn--accent btn--sm">Take the assessment &#8594;</a>
				</div>
			</div><!-- /.mega-panel__col -->

		</div><!-- /.mega-panel__inner -->
	</div><!-- /.mega-panel #mega-panel-insights -->

	<!-- =============================================
	     MEGA PANEL: About
	     ============================================= -->
	<div class="mega-panel" id="mega-panel-about" role="region" aria-label="About">
		<div class="mega-panel__inner">

			<div class="mega-panel__col">
				<p class="mega-panel__col-kicker">Who We Are</p>
				<div class="mega-panel__links">
					<a href="<?php echo esc_url( '#' ); ?>" class="mega-panel__link">
						<span class="mega-panel__link-name">Our Story</span>
						<span class="mega-panel__link-sub">20 years. UK&#8217;s first Sage X3 partner</span>
					</a>
					<a href="<?php echo esc_url( '#' ); ?>" class="mega-panel__link">
						<span class="mega-panel__link-name">Meet the Team</span>
						<span class="mega-panel__link-sub">50+ in-house Sage experts</span>
					</a>
					<a href="<?php echo esc_url( '#' ); ?>" class="mega-panel__link">
						<span class="mega-panel__link-name">Careers</span>
						<span class="mega-panel__link-sub">Join us</span>
					</a>
				</div>
			</div><!-- /.mega-panel__col -->

			<div class="mega-panel__col">
				<p class="mega-panel__col-kicker">Credentials</p>
				<div class="mega-panel__links">
					<a href="<?php echo esc_url( '#' ); ?>" class="mega-panel__link">
						<span class="mega-panel__link-name">Sage Platinum Club 2025</span>
					</a>
					<a href="<?php echo esc_url( '#' ); ?>" class="mega-panel__link">
						<span class="mega-panel__link-name">Excellence Partner of the Year</span>
					</a>
					<a href="<?php echo esc_url( '#' ); ?>" class="mega-panel__link">
						<span class="mega-panel__link-name">Customer Transformation Stories</span>
					</a>
					<a href="<?php echo esc_url( '#' ); ?>" class="mega-panel__link">
						<span class="mega-panel__link-name">Support Portal</span>
					</a>
				</div>
			</div><!-- /.mega-panel__col -->

			<div class="mega-panel__col">
				<div class="mega-panel__cta-card">
					<p class="mega-panel__cta-eyebrow">Start here</p>
					<h3 class="mega-panel__cta-headline">Is your finance function ready for AI?</h3>
					<p class="mega-panel__cta-body">Free assessment. Maturity stage score and a recommended next step. No commitment.</p>
					<a href="<?php echo esc_url( get_permalink( get_page_by_path( 'ai-readiness-assessment' ) ) ); ?>" class="btn btn--accent btn--sm">Take the assessment &#8594;</a>
				</div>
			</div><!-- /.mega-panel__col -->

		</div><!-- /.mega-panel__inner -->
	</div><!-- /.mega-panel #mega-panel-about -->

</nav><!-- /.site-nav -->

<!-- =============================================
     MOBILE NAV DRAWER
     ============================================= -->
<div class="mobile-nav" id="mobile-nav" aria-hidden="true">

	<div class="mobile-nav__section">
		<p class="mobile-nav__section-heading">The Challenge</p>
		<a href="<?php echo esc_url( '#' ); ?>" class="mobile-nav__link">Growth Bottleneck</a>
		<a href="<?php echo esc_url( '#' ); ?>" class="mobile-nav__link">AI Mandate</a>
		<a href="<?php echo esc_url( '#' ); ?>" class="mobile-nav__link">Scale Ambition</a>
		<a href="<?php echo esc_url( '#' ); ?>" class="mobile-nav__link">Compliance Event</a>
		<a href="<?php echo esc_url( '#' ); ?>" class="mobile-nav__link">CFO &amp; Finance Director</a>
		<a href="<?php echo esc_url( '#' ); ?>" class="mobile-nav__link">COO &amp; Operations Director</a>
		<a href="<?php echo esc_url( '#' ); ?>" class="mobile-nav__link">CEO &amp; Board</a>
		<a href="<?php echo esc_url( '#' ); ?>" class="mobile-nav__link">CTO &amp; IT Director</a>
		<a href="<?php echo esc_url( '#' ); ?>" class="mobile-nav__link">CIO</a>
	</div>

	<div class="mobile-nav__section">
		<p class="mobile-nav__section-heading">The Journey</p>
		<a href="<?php echo esc_url( '#' ); ?>" class="mobile-nav__link">The Journey &#8212; Overview</a>
		<a href="<?php echo esc_url( '#' ); ?>" class="mobile-nav__link">Stage 1 &#8212; Operational Foundation</a>
		<a href="<?php echo esc_url( '#' ); ?>" class="mobile-nav__link">Stage 2 &#8212; Intelligent Automation</a>
		<a href="<?php echo esc_url( '#' ); ?>" class="mobile-nav__link">Stage 3 &#8212; AI-Augmented Finance</a>
		<a href="<?php echo esc_url( '#' ); ?>" class="mobile-nav__link">Stage 4 &#8212; Agentic Finance Operations</a>
		<a href="<?php echo esc_url( '#' ); ?>" class="mobile-nav__link">AI Readiness Assessment</a>
		<a href="<?php echo esc_url( '#' ); ?>" class="mobile-nav__link">Agentic Finance Governance</a>
		<a href="<?php echo esc_url( '#' ); ?>" class="mobile-nav__link">Finance Operations Review</a>
		<a href="<?php echo esc_url( '#' ); ?>" class="mobile-nav__link">ISV Partner Ecosystem</a>
	</div>

	<div class="mobile-nav__section">
		<p class="mobile-nav__section-heading">Solutions</p>
		<a href="<?php echo esc_url( '#' ); ?>" class="mobile-nav__link">Sage Intacct</a>
		<a href="<?php echo esc_url( '#' ); ?>" class="mobile-nav__link">Sage X3</a>
		<a href="<?php echo esc_url( '#' ); ?>" class="mobile-nav__link">X3CloudDocs</a>
		<a href="<?php echo esc_url( '#' ); ?>" class="mobile-nav__link">Partner Ecosystem</a>
		<a href="<?php echo esc_url( '#' ); ?>" class="mobile-nav__link">Manufacturing &amp; Distribution</a>
		<a href="<?php echo esc_url( '#' ); ?>" class="mobile-nav__link">Food &amp; Beverage</a>
		<a href="<?php echo esc_url( '#' ); ?>" class="mobile-nav__link">Professional Services &amp; SaaS</a>
		<a href="<?php echo esc_url( '#' ); ?>" class="mobile-nav__link">Not-for-Profit &amp; Healthcare</a>
		<a href="<?php echo esc_url( '#' ); ?>" class="mobile-nav__link">Financial Services</a>
	</div>

	<div class="mobile-nav__section">
		<p class="mobile-nav__section-heading">Insights</p>
		<a href="<?php echo esc_url( '#' ); ?>" class="mobile-nav__link">CFO Strategy</a>
		<a href="<?php echo esc_url( '#' ); ?>" class="mobile-nav__link">Operational Transformation</a>
		<a href="<?php echo esc_url( '#' ); ?>" class="mobile-nav__link">Strategic Insight</a>
		<a href="<?php echo esc_url( '#' ); ?>" class="mobile-nav__link">Events &amp; Webinars</a>
		<a href="<?php echo esc_url( '#' ); ?>" class="mobile-nav__link">AI-Ready Finance Guide</a>
		<a href="<?php echo esc_url( '#' ); ?>" class="mobile-nav__link">ERP Selection Framework</a>
		<a href="<?php echo esc_url( '#' ); ?>" class="mobile-nav__link">Customer Transformation Stories</a>
		<a href="<?php echo esc_url( '#' ); ?>" class="mobile-nav__link">Demo Hub</a>
	</div>

	<div class="mobile-nav__section">
		<p class="mobile-nav__section-heading">About</p>
		<a href="<?php echo esc_url( '#' ); ?>" class="mobile-nav__link">Our Story</a>
		<a href="<?php echo esc_url( '#' ); ?>" class="mobile-nav__link">Meet the Team</a>
		<a href="<?php echo esc_url( '#' ); ?>" class="mobile-nav__link">Careers</a>
		<a href="<?php echo esc_url( '#' ); ?>" class="mobile-nav__link">Sage Platinum Club 2025</a>
		<a href="<?php echo esc_url( '#' ); ?>" class="mobile-nav__link">Excellence Partner of the Year</a>
		<a href="<?php echo esc_url( '#' ); ?>" class="mobile-nav__link">Support Portal</a>
	</div>

	<div class="mobile-nav__ctas">
		<a href="<?php echo esc_url( '#' ); ?>" class="btn btn--outline btn--full">Book a demo</a>
		<a href="<?php echo esc_url( get_permalink( get_page_by_path( 'ai-readiness-assessment' ) ) ); ?>" class="btn btn--primary btn--full">Assess Your AI Readiness &#8594;</a>
	</div>

</div><!-- /.mobile-nav -->
