// Footer — basePath prop converts root-relative hrefs to the depth of the current page.
// Items without href render as non-linked text (page not yet built).

const FOOTER_COLS = [
  {
    t: "The Challenge",
    l: [
      { name: "Growth Bottleneck",  href: "the-challenge/growth-bottleneck/" },
      { name: "AI Mandate",         href: "the-challenge/ai-mandate/" },
      { name: "Scale Ambition",     href: "the-challenge/scale-ambition/" },
      { name: "Compliance Event",   href: "the-challenge/compliance-event/" },
    ],
  },
  {
    t: "Who We Serve",
    l: [
      { name: "CFO & Finance Director",    href: "who-we-serve/cfo-finance-director/" },
      { name: "COO & Operations Director", href: "who-we-serve/coo-operations-director/" },
      { name: "CEO & Board",               href: "who-we-serve/ceo-board/" },
      { name: "CTO & IT Director",         href: "who-we-serve/cto-it-director/" },
    ],
  },
  {
    t: "The Journey",
    l: [
      { name: "Overview",                            href: "the-journey/" },
      { name: "Stage 1 — Operational Foundation",    href: "the-journey/stage-1-operational-foundation/" },
      { name: "Stage 2 — Intelligent Automation",    href: "the-journey/stage-2-intelligent-automation/" },
      { name: "Stage 3 — AI-Augmented Finance",      href: "the-journey/stage-3-ai-augmented-finance/" },
      { name: "Stage 4 — Agentic Finance Operations",href: "the-journey/stage-4-agentic-finance-operations/" },
      { name: "AI Readiness Assessment",             href: "ai-readiness-assessment.html" },
      { name: "Agentic Finance Governance",          href: "the-journey/agentic-finance-governance/" },
      { name: "Finance Operations Review",           href: "the-journey/finance-operations-review/" },
      { name: "ISV Partner Ecosystem",               href: "the-journey/isv-partner-ecosystem/" },
    ],
  },
  {
    t: "Solutions",
    l: [
      { name: "Compare Platforms",          href: "solutions/" },
      { name: "Sage Intacct",              href: "solutions/sage-intacct/" },
      { name: "Sage X3",                   href: "solutions/sage-x3/" },
      { name: "X3CloudDocs",               href: "solutions/x3clouddocs/" },
      { name: "Manufacturing & Distribution", href: "solutions/manufacturing-distribution/" },
      { name: "Food & Beverage",              href: "solutions/food-beverage/" },
      { name: "Professional Services & SaaS", href: "solutions/professional-services-saas/" },
      { name: "Not-for-Profit & Healthcare",  href: "solutions/not-for-profit-healthcare/" },
      { name: "Financial Services",           href: "solutions/financial-services/" },
      { name: "ISV Partner Ecosystem",        href: "the-journey/isv-partner-ecosystem/" },
    ],
  },
  {
    t: "Insights",
    l: [
      { name: "CFO Strategy",              href: "insights/cfo-strategy/" },
      { name: "Operational Transformation", href: "insights/operational-transformation/" },
      { name: "Strategic Insight",          href: "insights/strategic-insight/" },
      { name: "Events & Webinars",          href: "insights/events-webinars/" },
      { name: "AI Bootcamp",                 href: "resources/ai-bootcamp/" },
      { name: "AI-Ready Finance Guide",     href: "insights/ai-ready-finance-guide/" },
      { name: "ERP Selection Framework",    href: "insights/erp-selection-framework/" },
      { name: "Customer Stories",           href: "insights/customer-transformation-stories/" },
      { name: "Demo Hub",                   href: "insights/demo-hub/" },
    ],
  },
  {
    t: "About",
    l: [
      { name: "Our Story",              href: "about/our-story/" },
      { name: "Meet the Team",          href: "about/meet-the-team/" },
      { name: "Careers",                href: "about/careers/" },
      { name: "Sage Platinum 2025",     href: "about/sage-platinum-club-2025/" },
      { name: "Support Portal",         href: "about/support-portal/" },
      { name: "Contact",                href: "contact/" },
    ],
  },
];

const Footer = ({ onAssess, basePath = "./" }) => (
  <footer style={{ background: "var(--navy)", color: "#fff", padding: "80px 32px 32px" }}>
    <div style={{ maxWidth: "var(--container)", margin: "0 auto" }}>

      {/* Top — wordmark + tagline + CTA */}
      <div className="footer-top-grid" style={{
        gap: 48, alignItems: "end",
        paddingBottom: 56, marginBottom: 56,
        borderBottom: "1px solid rgba(255,255,255,0.1)",
      }}>
        <div>
          <a href={basePath} style={{ textDecoration: "none" }}>
            <Wordmark tone="white" size={32} />
          </a>
          <p style={{
            marginTop: 20, fontFamily: "var(--font-sans)", fontSize: 15,
            color: "rgba(255,255,255,0.6)", lineHeight: 1.6, maxWidth: 400,
          }}>
            AI-enabled Sage ERP and finance transformation partner. Implementing <a href={basePath + "solutions/sage-x3/"} style={{color:"rgba(255,255,255,0.7)",fontWeight:600}}>Sage X3</a> and <a href={basePath + "solutions/sage-intacct/"} style={{color:"rgba(255,255,255,0.7)",fontWeight:600}}>Sage Intacct</a>, extending with proprietary <a href={basePath + "solutions/x3clouddocs/"} style={{color:"rgba(255,255,255,0.7)",fontWeight:600}}>X3CloudDocs</a> automation IP, and leveraging AI to help ambitious organisations scale their finance and operations functions with confidence.
          </p>
          <div style={{ marginTop: 24, display: "flex", gap: 10 }}>
            {[
              { l: "LinkedIn", d: "M4.5 6.5h3v11h-3zM6 3a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M9.5 6.5h3v1.7c.6-1 1.8-1.9 3.4-1.9 2.4 0 3.6 1.5 3.6 4.3v6.4h-3v-5.6c0-1.6-.6-2.4-1.9-2.4-1.3 0-2.1.9-2.1 2.4v5.6h-3z" },
              { l: "YouTube",  d: "M12 5c5 0 8 .3 8 .3a2.2 2.2 0 0 1 1.6 1.6c.4 1.4.4 5.1.4 5.1s0 3.7-.4 5.1A2.2 2.2 0 0 1 20 18.7s-3 .3-8 .3-8-.3-8-.3a2.2 2.2 0 0 1-1.6-1.6C2 15.7 2 12 2 12s0-3.7.4-5.1A2.2 2.2 0 0 1 4 5.3S7 5 12 5m-2 4v6l5-3z" },
            ].map(s => (
              <a key={s.l} href="#" aria-label={s.l} style={{
                width: 38, height: 38, borderRadius: 999,
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.12)",
                display: "grid", placeItems: "center",
                color: "rgba(255,255,255,0.6)",
                textDecoration: "none",
              }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d={s.d} />
                </svg>
              </a>
            ))}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 16 }}>
          <div style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 22, lineHeight: 1.2, color: "#fff" }}>
            Ready to build the infrastructure your next chapter actually needs?
          </div>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            <Button variant="accent" size="lg" icon="→" href={basePath + "ai-readiness-assessment.html"}>
              Assess Your AI Readiness
            </Button>
            <Button variant="ghostWhite" size="lg" href={basePath + "contact/"}>
              Contact Us
            </Button>
          </div>
          <div style={{ fontFamily: "var(--font-sans)", fontSize: 12, color: "rgba(255,255,255,0.35)" }}>
            Free. No commitment. Results within one business day.
          </div>
        </div>
      </div>

      {/* Nav cols */}
      <div className="footer-nav-grid" style={{ gap: 28 }}>
        {FOOTER_COLS.map(col => (
          <div key={col.t}>
            <div style={{
              fontFamily: "var(--font-sans)", fontWeight: 600,
              fontSize: 10, letterSpacing: "0.18em", textTransform: "uppercase",
              color: "var(--cyan)", marginBottom: 16,
            }}>{col.t}</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 11 }}>
              {col.l.map(it => {
                const href = it.href ? basePath + it.href : null;
                return (
                  <a
                    key={it.name}
                    href={href || undefined}
                    onClick={e => { if (!href) e.preventDefault(); }}
                    style={{
                      fontFamily: "var(--font-sans)", fontSize: 13,
                      color: href ? "rgba(255,255,255,0.6)" : "rgba(255,255,255,0.3)",
                      textDecoration: "none", cursor: href ? "pointer" : "default",
                      transition: "color 140ms",
                    }}
                    onMouseEnter={e => { if (href) e.target.style.color = "#fff"; }}
                    onMouseLeave={e => { e.target.style.color = href ? "rgba(255,255,255,0.6)" : "rgba(255,255,255,0.3)"; }}
                  >{it.name}</a>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Bottom bar */}
      <div style={{
        marginTop: 64, paddingTop: 24,
        borderTop: "1px solid rgba(255,255,255,0.1)",
        display: "flex", justifyContent: "space-between",
        alignItems: "center", flexWrap: "wrap", gap: 16,
      }}>
        <div style={{ fontFamily: "var(--font-sans)", fontSize: 12, color: "rgba(255,255,255,0.35)" }}>
          © 2026 Mysoft Ltd. All rights reserved. Registered in England &amp; Wales.
        </div>
        <div style={{ display: "flex", gap: 24 }}>
          {["Privacy Policy", "Terms &amp; Conditions", "Cookie Policy", "Site Map"].map(l => (
            <a key={l} href="#" style={{
              fontFamily: "var(--font-sans)", fontSize: 12,
              color: "rgba(255,255,255,0.35)", textDecoration: "none",
            }}
              dangerouslySetInnerHTML={{ __html: l }}
            />
          ))}
        </div>
      </div>
    </div>
  </footer>
);

Object.assign(window, { Footer });
