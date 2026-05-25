// New buyer-trigger-led navigation
// Architecture: The Challenge | The Journey | Solutions | Insights | About | [Assess Your AI Readiness]

// Mega-menu link with hover state.
// it.href (relative to site root) is set only for pages that exist;
// basePath converts root-relative paths to the depth of the current page.
const MegaLink = ({ it, basePath = "./" }) => {
  const [hovered, setHovered] = React.useState(false);
  const href = it.href ? basePath + it.href : null;
  return (
    <a
      href={href || undefined}
      style={{ textDecoration: "none", display: "block", cursor: href ? "pointer" : "default" }}
      onClick={e => { if (!href) e.preventDefault(); }}
      onMouseEnter={() => setHovered(!!href)}
      onMouseLeave={() => setHovered(false)}
    >
      <div style={{
        fontFamily: "var(--font-sans)", fontSize: 13.5, fontWeight: 500,
        lineHeight: 1.3, display: "flex", alignItems: "center", gap: 5,
        color: hovered ? "var(--cyan)" : href ? "var(--navy)" : "var(--fg-3)",
        transition: "color 140ms var(--ease-out)",
      }}>
        {it.name}
        {href && (
          <span style={{
            fontSize: 12, color: "var(--cyan)",
            opacity: hovered ? 1 : 0,
            transform: hovered ? "translateX(0)" : "translateX(-5px)",
            transition: "opacity 140ms var(--ease-out), transform 140ms var(--ease-out)",
            display: "inline-block",
          }}>→</span>
        )}
      </div>
      {it.sub && (
        <div style={{
          fontFamily: "var(--font-sans)", fontSize: 12,
          color: "var(--fg-3)", marginTop: 2,
        }}>{it.sub}</div>
      )}
    </a>
  );
};

// href values are root-relative paths; prepend basePath at render time.
// Omitting href means the page doesn't exist yet — the link renders as plain text.
const NAV_ITEMS = {
  challenge: {
    label: "The Challenge",
    href: "the-challenge/",
    cols: [
      { t: "Triggers", l: [
        { name: "Growth Bottleneck",  sub: "When your back office can't keep pace", href: "the-challenge/growth-bottleneck/" },
        { name: "AI Mandate",         sub: "Board has asked for a credible AI strategy", href: "the-challenge/ai-mandate/" },
        { name: "Scale Ambition",     sub: "Infrastructure for 2× or 3× growth", href: "the-challenge/scale-ambition/" },
        { name: "Compliance Event",   sub: "Acquisition, audit, or regulatory change", href: "the-challenge/compliance-event/" },
      ]},
      { t: "Who We Serve", l: [
        { name: "CFO & Finance Director",    sub: "AI strategy, close cycle, scalable infrastructure", href: "who-we-serve/cfo-finance-director/" },
        { name: "COO & Operations Director", sub: "Integrated operational ERP and supply chain",       href: "who-we-serve/coo-operations-director/" },
        { name: "CEO & Board",               sub: "Investment case, governance, strategic finance",    href: "who-we-serve/ceo-board/" },
        { name: "CTO & IT Director",         sub: "Architecture, integration, security, and TCO",      href: "who-we-serve/cto-it-director/" },
      ]},
    ],
  },
  journey: {
    label: "The Journey",
    href: "the-journey/",
    cols: [
      { t: "AI Transformation Stages", l: [
        { name: "The Journey — Overview",              sub: "How we take you from Stage 1 to Stage 4",  href: "the-journey/" },
        { name: "Stage 1 — Operational Foundation",    sub: "Build the platform your business deserves", href: "the-journey/stage-1-operational-foundation/" },
        { name: "Stage 2 — Intelligent Automation",    sub: "Remove the manual transactional layer",     href: "the-journey/stage-2-intelligent-automation/" },
        { name: "Stage 3 — AI-Augmented Finance",      sub: "Intelligence at the speed of the business", href: "the-journey/stage-3-ai-augmented-finance/" },
        { name: "Stage 4 — Agentic Finance Operations",sub: "Finance at scale without headcount growth",  href: "the-journey/stage-4-agentic-finance-operations/" },
      ]},
      { t: "Frameworks & Tools", l: [
        { name: "AI Readiness Assessment",     sub: "Free — find your maturity stage",  href: "the-journey/ai-readiness-assessment/" },
        { name: "Agentic Finance Governance",  sub: "Board-defensible AI governance",   href: "the-journey/agentic-finance-governance/" },
        { name: "Finance Operations Review",   sub: "Structured discovery process",     href: "the-journey/finance-operations-review/" },
        { name: "ISV Partner Ecosystem",       sub: "The integrated technology stack",  href: "the-journey/isv-partner-ecosystem/" },
      ]},
    ],
  },
  solutions: {
    label: "Solutions",
    cols: [
      { t: "Platforms", l: [
        { name: "Sage Intacct",       sub: "Finance-first cloud ERP",                href: "solutions/sage-intacct/" },
        { name: "Sage X3",            sub: "Operational ERP for complex businesses", href: "solutions/sage-x3/" },
        { name: "X3CloudDocs",        sub: "AI document automation — Mysoft IP",     href: "solutions/x3clouddocs/" },
        { name: "ISV Partner Ecosystem", sub: "Netstock, Lynq, Phocas, SEI and more", href: "the-journey/isv-partner-ecosystem/" },
      ]},
      { t: "By Sector", l: [
        { name: "Manufacturing & Distribution", sub: "Sage X3 for complex operations", href: "solutions/manufacturing-distribution/" },
        { name: "Food & Beverage",              sub: "FEFO, traceability, compliance",         href: "solutions/food-beverage/" },
        { name: "Professional Services & SaaS", sub: "Project accounting, revenue recognition", href: "solutions/professional-services-saas/" },
        { name: "Not-for-Profit & Healthcare",  sub: "Fund accounting, SORP compliance",        href: "solutions/not-for-profit-healthcare/" },
        { name: "Financial Services",           sub: "Multi-entity, regulated environments",    href: "solutions/financial-services/" },
      ]},
    ],
  },
  insights: {
    label: "Insights",
    href: "insights/",
    cols: [
      { t: "Content", l: [
        { name: "CFO Strategy",              sub: "Finance as a growth enabler",          href: "insights/cfo-strategy/" },
        { name: "Operational Transformation",sub: "AI in AP, AR, and beyond",             href: "insights/operational-transformation/" },
        { name: "Strategic Insight",         sub: "Agentic AI — reality versus hype",     href: "insights/strategic-insight/" },
        { name: "Events & Webinars",         sub: "ERP selection events and roundtables", href: "insights/events-webinars/" },
      ]},
      { t: "Resources", l: [
        { name: "AI-Ready Finance Guide",           sub: "Gated — free download",          href: "insights/ai-ready-finance-guide/" },
        { name: "ERP Selection Framework",          sub: "Six-stage evaluation process",   href: "insights/erp-selection-framework/" },
        { name: "Customer Transformation Stories",  sub: "Measurable outcomes",            href: "insights/customer-transformation-stories/" },
        { name: "Demo Hub",                         sub: "Watch on demand or book live",   href: "insights/demo-hub/" },
      ]},
    ],
  },
  about: {
    label: "About",
    cols: [
      { t: "Who We Are", l: [
        { name: "Our Story",    sub: "20 years. UK's first Sage X3 partner" },
        { name: "Meet the Team",sub: "50+ in-house Sage experts" },
        { name: "Careers",      sub: "Join us" },
      ]},
      { t: "Credentials", l: [
        { name: "Sage Platinum Club 2025",          sub: null },
        { name: "Excellence Partner of the Year",   sub: null },
        { name: "Customer Transformation Stories",  sub: null },
        { name: "Support Portal",                   sub: null },
      ]},
    ],
  },
};

const PANEL_CTAS = {
  challenge: {
    tag: "Start here",
    title: "Is your finance function ready for AI?",
    body: "Free assessment. Maturity stage score and a recommended next step. No commitment.",
    cta: "Take the assessment →",
    href: null,
  },
  journey: {
    tag: "Customer outcomes",
    title: "See what finance transformation looks like in practice.",
    body: "Real outcomes from real organisations — measurable results, not testimonial quotes.",
    cta: "Read customer stories →",
    href: "insights/customer-transformation-stories/",
  },
  solutions: {
    tag: "Speak to an expert",
    title: "Discuss your platform requirements with a Mysoft consultant.",
    body: "Sector expertise. Platform depth. No obligation. Most conversations are 30 minutes.",
    cta: "Speak with a consultant →",
    href: "the-journey/finance-operations-review/",
  },
  insights: {
    tag: "See it live",
    title: "See the platform against your specific use cases.",
    body: "Scenario-based, expert-led demonstrations. On demand or book a live session tailored to your context.",
    cta: "Visit Demo Hub →",
    href: "insights/demo-hub/",
  },
  about: {
    tag: "Get in touch",
    title: "Talk to us about your finance and operations challenge.",
    body: "We respond within one business day. No obligation, no sales process.",
    cta: "Contact us →",
    href: "the-journey/finance-operations-review/",
  },
};

const NavBar = ({ onAssess, basePath = "./" }) => {
  const [open, setOpen] = React.useState(null);
  const [scrolled, setScrolled] = React.useState(false);
  const closeTimer = React.useRef(null);

  React.useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const scheduleClose = () => {
    closeTimer.current = setTimeout(() => setOpen(null), 180);
  };
  const cancelClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  };
  const closePanel = () => {
    cancelClose();
    setOpen(null);
  };

  return (
    <nav
      style={{
        position: "fixed", inset: "0 0 auto 0", zIndex: 100,
        background: scrolled ? "rgba(255,255,255,0.94)" : "#fff",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: "1px solid var(--border-1)",
        transition: "background 220ms var(--ease-out)",
      }}
    >
      <div style={{
        maxWidth: "var(--container)", margin: "0 auto",
        height: "var(--nav-h)", padding: "0 32px",
        display: "flex", alignItems: "center", justifyContent: "space-between",
      }}>
        {/* Logo — always returns to homepage */}
        <a href={basePath} style={{ textDecoration: "none" }} onClick={closePanel}>
          <Wordmark size={26} />
        </a>

        {/* Centre nav */}
        <div style={{ display: "flex", alignItems: "center", gap: 4 }} onMouseLeave={scheduleClose}>
          {Object.entries(NAV_ITEMS).map(([key, item]) => (
            <button
              key={key}
              onMouseEnter={() => { cancelClose(); setOpen(key); }}
              onClick={() => {
                if (item.href) {
                  window.location.href = basePath + item.href;
                } else {
                  setOpen(open === key ? null : key);
                }
              }}
              style={{
                background: "transparent", border: 0, cursor: "pointer",
                fontFamily: "var(--font-sans)", fontWeight: 500, fontSize: 13.5,
                color: open === key ? "var(--cyan)" : "var(--navy)",
                padding: "8px 10px",
                display: "inline-flex", alignItems: "center", gap: 4,
                transition: "color 140ms",
              }}
            >
              {item.label}
              <svg width="9" height="9" viewBox="0 0 9 9" style={{ transform: open === key ? "rotate(180deg)" : "none", transition: "transform 140ms" }}>
                <path d="M1.5 3 4.5 6 7.5 3" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          ))}
        </div>

        {/* CTAs */}
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <a href="#" style={{
            fontFamily: "var(--font-sans)", fontWeight: 500, fontSize: 13,
            color: "var(--fg-2)", textDecoration: "none", padding: "8px 10px",
            transition: "color 140ms",
          }}
            onMouseEnter={e => e.target.style.color = "var(--navy)"}
            onMouseLeave={e => e.target.style.color = "var(--fg-2)"}
          >Book a demo</a>
          <Button variant="primary" size="sm" icon="→" onClick={onAssess}>
            Assess Your AI Readiness
          </Button>
        </div>
      </div>

      {/* Mega-panel */}
      {open && (
        <div
          onMouseEnter={cancelClose}
          onMouseLeave={scheduleClose}
          style={{
            position: "absolute", top: "100%", left: 0, right: 0,
            background: "#fff", borderTop: "1px solid var(--border-1)",
            boxShadow: "var(--shadow-md)",
          }}
        >
          <div style={{
            maxWidth: "var(--container)", margin: "0 auto",
            padding: "32px 32px 36px",
            display: "grid",
            gridTemplateColumns: `repeat(${NAV_ITEMS[open].cols.length}, 1fr) 1.2fr`,
            gap: 32,
          }}>
            {NAV_ITEMS[open].cols.map((col, ci) => (
              <div key={ci}>
                <div style={{
                  fontFamily: "var(--font-sans)", fontWeight: 500,
                  fontSize: 10, letterSpacing: "0.18em", textTransform: "uppercase",
                  color: "var(--cyan)", marginBottom: 16,
                }}>{col.t}</div>
                <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                  {col.l.map((it, li) => (
                    <MegaLink key={li} it={it} basePath={basePath} />
                  ))}
                </div>
              </div>
            ))}

            {/* Panel CTA card — content varies per open tab */}
            {(() => {
              const c = PANEL_CTAS[open] || PANEL_CTAS.challenge;
              const handleClick = () => {
                closePanel();
                if (c.href) { window.location.href = basePath + c.href; }
                else { onAssess && onAssess(); }
              };
              return (
                <div style={{
                  background: "var(--navy)", borderRadius: 4, padding: 24,
                  display: "flex", flexDirection: "column", justifyContent: "space-between",
                  color: "#fff",
                }}>
                  <div>
                    <div style={{ fontFamily: "var(--font-sans)", fontSize: 10, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--cyan)" }}>{c.tag}</div>
                    <div style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 17, lineHeight: 1.25, marginTop: 10 }}>{c.title}</div>
                    <div style={{ fontFamily: "var(--font-sans)", fontSize: 13, color: "rgba(255,255,255,0.65)", lineHeight: 1.5, marginTop: 8 }}>{c.body}</div>
                  </div>
                  <button
                    onClick={handleClick}
                    style={{
                      marginTop: 20, display: "inline-flex", alignItems: "center", gap: 8,
                      background: "#fff", color: "var(--navy)", border: "none",
                      borderRadius: 4, padding: "10px 16px",
                      fontFamily: "var(--font-sans)", fontWeight: 600, fontSize: 13, cursor: "pointer",
                    }}
                  >
                    {c.cta}
                  </button>
                </div>
              );
            })()}
          </div>
        </div>
      )}
    </nav>
  );
};

Object.assign(window, { NavBar });
