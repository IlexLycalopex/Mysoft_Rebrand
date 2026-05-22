// New buyer-trigger-led navigation
// Architecture: The Challenge | The Journey | Solutions | Insights | About | [Assess Your AI Readiness]

// Mega-menu link with hover state
const MegaLink = ({ it }) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <a
      href="#"
      style={{ textDecoration: "none", display: "block" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div style={{
        fontFamily: "var(--font-sans)", fontSize: 13.5, fontWeight: 500,
        lineHeight: 1.3, display: "flex", alignItems: "center", gap: 5,
        color: hovered ? "var(--cyan)" : "var(--navy)",
        transition: "color 140ms var(--ease-out)",
      }}>
        {it.name}
        <span style={{
          fontSize: 12, color: "var(--cyan)",
          opacity: hovered ? 1 : 0,
          transform: hovered ? "translateX(0)" : "translateX(-5px)",
          transition: "opacity 140ms var(--ease-out), transform 140ms var(--ease-out)",
          display: "inline-block",
        }}>→</span>
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

const NAV_ITEMS = {
  challenge: {
    label: "The Challenge",
    cols: [
      { t: "Buying Triggers", l: [
        { name: "Growth Bottleneck", sub: "When your back office can't keep pace" },
        { name: "AI Mandate", sub: "Board has asked for a credible AI strategy" },
        { name: "Scale Ambition", sub: "Infrastructure for 2× or 3× growth" },
        { name: "Compliance Event", sub: "Acquisition, audit, or regulatory change" },
      ]},
      { t: "Who We Serve", l: [
        { name: "CFO & Finance Director", sub: null },
        { name: "COO & Operations Director", sub: null },
        { name: "CEO & Board", sub: null },
        { name: "CTO & IT Director", sub: null },
        { name: "CIO", sub: null },
      ]},
    ],
  },
  journey: {
    label: "The Journey",
    cols: [
      { t: "AI Transformation Stages", l: [
        { name: "The Journey — Overview", sub: "How we take you from Stage 1 to Stage 4" },
        { name: "Stage 1 — Operational Foundation", sub: "Build the platform your business deserves" },
        { name: "Stage 2 — Intelligent Automation", sub: "Remove the manual transactional layer" },
        { name: "Stage 3 — AI-Augmented Finance", sub: "Intelligence at the speed of the business" },
        { name: "Stage 4 — Agentic Finance Operations", sub: "Finance at scale without headcount growth" },
      ]},
      { t: "Frameworks & Tools", l: [
        { name: "AI Readiness Assessment", sub: "Free — find your maturity stage" },
        { name: "Agentic Finance Governance", sub: "Board-defensible AI governance" },
        { name: "Finance Operations Review", sub: "Structured discovery process" },
        { name: "ISV Partner Ecosystem", sub: "The integrated technology stack" },
      ]},
    ],
  },
  solutions: {
    label: "Solutions",
    cols: [
      { t: "Platforms", l: [
        { name: "Sage Intacct", sub: "Finance-first cloud ERP" },
        { name: "Sage X3", sub: "Operational ERP for complex businesses" },
        { name: "X3CloudDocs", sub: "AI document automation — Mysoft IP" },
        { name: "Partner Ecosystem", sub: "Netstock, Lynq, Phocas, SEI and more" },
      ]},
      { t: "By Sector", l: [
        { name: "Manufacturing & Distribution", sub: null },
        { name: "Food & Beverage", sub: null },
        { name: "Professional Services & SaaS", sub: null },
        { name: "Not-for-Profit & Healthcare", sub: null },
        { name: "Financial Services", sub: null },
      ]},
    ],
  },
  insights: {
    label: "Insights",
    cols: [
      { t: "Content", l: [
        { name: "CFO Strategy", sub: "Finance as a growth enabler" },
        { name: "Operational Transformation", sub: "AI in AP, AR, and beyond" },
        { name: "Strategic Insight", sub: "Agentic AI — reality versus hype" },
        { name: "Events & Webinars", sub: "ERP selection events and roundtables" },
      ]},
      { t: "Resources", l: [
        { name: "AI-Ready Finance Guide", sub: "Gated — free download" },
        { name: "ERP Selection Framework", sub: null },
        { name: "Customer Transformation Stories", sub: null },
        { name: "Demo Hub", sub: null },
      ]},
    ],
  },
  about: {
    label: "About",
    cols: [
      { t: "Who We Are", l: [
        { name: "Our Story", sub: "20 years. UK's first Sage X3 partner" },
        { name: "Meet the Team", sub: "50+ in-house Sage experts" },
        { name: "Careers", sub: "Join us" },
      ]},
      { t: "Credentials", l: [
        { name: "Sage Platinum Club 2025", sub: null },
        { name: "Excellence Partner of the Year", sub: null },
        { name: "Customer Transformation Stories", sub: null },
        { name: "Support Portal", sub: null },
      ]},
    ],
  },
};

const NavBar = ({ onAssess, homeHref = "./" }) => {
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
        {/* Logo */}
        <a href={homeHref} style={{ textDecoration: "none" }} onClick={closePanel}>
          <Wordmark size={26} />
        </a>

        {/* Centre nav */}
        <div style={{ display: "flex", alignItems: "center", gap: 4 }} onMouseLeave={scheduleClose}>
          {Object.entries(NAV_ITEMS).map(([key, item]) => (
            <button
              key={key}
              onMouseEnter={() => { cancelClose(); setOpen(key); }}
              onClick={() => setOpen(open === key ? null : key)}
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
                  <MegaLink key={li} it={it} />
                ))}
                </div>
              </div>
            ))}

            {/* Panel CTA card */}
            <div style={{
              background: "var(--navy)", borderRadius: 4, padding: 24,
              display: "flex", flexDirection: "column", justifyContent: "space-between",
              color: "#fff",
            }}>
              <div>
                <div style={{ fontFamily: "var(--font-sans)", fontSize: 10, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--cyan)" }}>Start here</div>
                <div style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 17, lineHeight: 1.25, marginTop: 10 }}>
                  Is your finance function ready for AI?
                </div>
                <div style={{ fontFamily: "var(--font-sans)", fontSize: 13, color: "rgba(255,255,255,0.65)", lineHeight: 1.5, marginTop: 8 }}>
                  Free assessment. Maturity stage score and a recommended next step. No commitment.
                </div>
              </div>
              <button
                onClick={() => { onAssess && onAssess(); closePanel(); }}
                style={{
                  marginTop: 20, display: "inline-flex", alignItems: "center", gap: 8,
                  background: "var(--cyan)", color: "var(--navy)", border: "none",
                  borderRadius: 4, padding: "10px 16px",
                  fontFamily: "var(--font-sans)", fontWeight: 600, fontSize: 13, cursor: "pointer",
                }}
              >
                Take the assessment →
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

Object.assign(window, { NavBar });
