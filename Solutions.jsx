// Solutions — mirrors The Journey layout: bordered container, tab sidebar, navy detail panel.
// Right panel splits: content left, product screenshot right.

// ─── Image paths ──────────────────────────────────────────────────────

const PRODUCT_IMGS = {
  intacct: (window.__resources && window.__resources.productIntacct) || "assets/product-intacct.png",
  x3:      (window.__resources && window.__resources.productX3)       || "assets/product-x3.png",
  x3cd:    (window.__resources && window.__resources.productX3CD)     || "assets/product-x3cd.png",
};

const IMG_POSITIONS = { intacct: "top left", x3: "top left", x3cd: "top right" };

// ─── Platform data ────────────────────────────────────────────────────

const PLATFORMS = [
  {
    key: "intacct",
    eyebrow: "Sage Intacct",
    headline: "Finance infrastructure designed for the business you are building.",
    body: "The AI-native cloud finance platform for mid-market organisations. Multi-entity consolidation, dimensional reporting, and an open API architecture that integrates your full technology stack. Implemented and governed by Mysoft from Stage 1 to Stage 4.",
    tags: ["Multi-entity", "AI-native", "Open API"],
    cta: "Explore Sage Intacct",
    href: "solutions/sage-intacct/",
    caption: "CFO daily view — Sage Intacct with Copilot AI",
  },
  {
    key: "x3",
    eyebrow: "Sage X3",
    headline: "Built for businesses that outgrow simple ERP.",
    body: "Operational ERP for manufacturing, distribution, and food & beverage businesses with complex requirements. Production orders, supply chain, multi-site, multi-currency — and the operational data foundation that makes AI adoption meaningful at Stage 2 and above.",
    tags: ["Multi-site", "Multi-currency", "Supply Chain"],
    cta: "Explore Sage X3",
    href: "solutions/sage-x3/",
    caption: "Warehouse manager view — Sage X3 with Copilot insights",
  },
  {
    key: "x3cd",
    eyebrow: "X3CloudDocs",
    headline: "The automation foundation that makes AI adoption possible.",
    body: "Mysoft-built and Mysoft-exclusive. The Stage 2 anchor of the AI maturity journey. AP invoice automation, outbound document dispatch, custom approval workflows, and email intelligence — all governed from the outset. The top-rated product on the Sage X3 Marketplace.",
    tags: ["AP Automation", "Document Management", "Mysoft-exclusive", "Stage 2 anchor"],
    cta: "Explore X3CloudDocs",
    href: "solutions/x3clouddocs/",
    caption: "Live invoice processing — X3CloudDocs automated field matching",
    badge: true,
  },
];

// ─── Tab (matches StageTab style exactly) ────────────────────────────

const PlatformTab = ({ p, active, onClick }) => (
  <button
    onClick={() => onClick(p.key)}
    style={{
      background: active ? "rgba(0,182,237,0.06)" : "transparent",
      border: "none", cursor: "pointer",
      textAlign: "left", padding: "20px 24px",
      borderLeft: active ? "3px solid var(--cyan)" : "3px solid transparent",
      transition: "border-color 220ms, background 220ms",
    }}
  >
    <div style={{
      fontFamily: "var(--font-sans)", fontWeight: 600,
      fontSize: 10, letterSpacing: "0.18em", textTransform: "uppercase",
      color: active ? "var(--cyan)" : "var(--fg-3)",
      transition: "color 220ms",
    }}>Platform</div>
    <div style={{
      fontFamily: "var(--font-display)", fontWeight: 600,
      fontSize: 15, lineHeight: 1.3, marginTop: 4,
      color: active ? "var(--navy)" : "var(--fg-2)",
      transition: "color 220ms",
    }}>{p.eyebrow}</div>
  </button>
);

// ─── Detail panel (matches StageDetail style, adds screenshot) ────────

const PlatformDetail = ({ platform }) => (
  <div style={{
    background: "var(--navy)", borderRadius: 4,
    color: "#fff", overflow: "hidden",
    display: "grid", gridTemplateColumns: "1fr 1fr",
    minHeight: 480,
  }}>
    {/* Left — text content */}
    <div style={{ padding: "40px 36px", display: "flex", flexDirection: "column" }}>
      <Eyebrow color="var(--cyan)" style={{ fontSize: 13, fontWeight: 700 }}>{platform.eyebrow}</Eyebrow>

      {platform.badge && (
        <div style={{
          display: "inline-flex", marginTop: 10, alignSelf: "flex-start",
          fontFamily: "var(--font-sans)", fontSize: 10, fontWeight: 700,
          color: "var(--navy)", background: "#F8C556",
          borderRadius: 4, padding: "2px 9px", letterSpacing: "0.04em",
        }}>Mysoft-exclusive IP</div>
      )}

      <h3 style={{
        fontFamily: "var(--font-display)", fontWeight: 600,
        fontSize: "clamp(1.3rem, 1.8vw, 1.7rem)", lineHeight: 1.2,
        letterSpacing: "-0.02em", margin: "12px 0 0",
      }}>{platform.headline}</h3>

      <p style={{
        fontFamily: "var(--font-sans)", fontSize: 14, lineHeight: 1.7,
        color: "rgba(255,255,255,0.72)", margin: "16px 0 0", flex: 1,
      }}>{platform.body}</p>

      <div style={{ marginTop: 20, display: "flex", flexWrap: "wrap", gap: 6 }}>
        {platform.tags.map(t => (
          <span key={t} style={{
            fontFamily: "var(--font-sans)", fontSize: 11, fontWeight: 500,
            color: "rgba(255,255,255,0.6)",
            background: "rgba(255,255,255,0.08)",
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: 4, padding: "3px 9px",
          }}>{t}</span>
        ))}
      </div>

      <a href={platform.href || "#"} style={{
        marginTop: 24, display: "inline-flex", alignItems: "center", gap: 6,
        fontFamily: "var(--font-sans)", fontWeight: 600, fontSize: 13,
        color: "var(--cyan)", textDecoration: "none",
      }}>{platform.cta} →</a>
      <a href="insights/demo-hub/" style={{
        marginTop: 10, display: "inline-flex", alignItems: "center", gap: 6,
        fontFamily: "var(--font-sans)", fontWeight: 600, fontSize: 13,
        color: "rgba(255,255,255,0.5)", textDecoration: "none",
      }}>Book a demo →</a>
    </div>

    {/* Right — product screenshot, inset with padding */}
    <div style={{ padding: "20px 20px 20px 0", display: "flex", alignItems: "stretch" }}>
      <div style={{
        flex: 1, borderRadius: 4, overflow: "hidden",
        boxShadow: "0 4px 24px rgba(0,0,0,0.35)",
        position: "relative",
      }}>
        <img
          src={PRODUCT_IMGS[platform.key]}
          alt={platform.caption}
          style={{
            width: "100%", height: "100%",
            objectFit: "cover",
            objectPosition: IMG_POSITIONS[platform.key],
            display: "block",
          }}
        />
      </div>
    </div>
  </div>
);

// ─── Stats band ───────────────────────────────────────────────────────

const StatsBand = () => {
  const stats = [
    { n: "50+",  l: "Sage Experts on the team",         sub: "UK + US, all in-house"        },
    { n: "20+",  l: "Years open for business",           sub: "UK's first Sage X3 partner"   },
    { n: "450+", l: "Collective years' Sage experience", sub: "Across the full team"         },
    { n: "98%",  l: "First-response SLA met",            sub: "Trailing 12 months"           },
  ];
  return (
    <div style={{ background: "var(--navy)", padding: "64px 32px" }}>
      <div style={{ maxWidth: "var(--container)", margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 32 }}>
          {stats.map((s, i) => (
            <div key={s.l} style={{ borderLeft: i === 0 ? "none" : "1px solid rgba(255,255,255,0.1)", paddingLeft: i === 0 ? 0 : 32 }}>
              <div style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "clamp(2.4rem, 3.8vw, 3.8rem)", letterSpacing: "-0.03em", lineHeight: 1, color: "#fff" }}>{s.n}</div>
              <div style={{ marginTop: 14, fontFamily: "var(--font-sans)", fontSize: 14, color: "#fff", lineHeight: 1.4 }}>{s.l}</div>
              <div style={{ marginTop: 4, fontFamily: "var(--font-sans)", fontSize: 12, color: "rgba(255,255,255,0.45)" }}>{s.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// ─── Main section ─────────────────────────────────────────────────────

const Solutions = () => {
  const [active, setActive] = React.useState("intacct");
  const current = PLATFORMS.find(p => p.key === active);

  return (
    <>
      <StatsBand />
      <Section tone="white" id="solutions">

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: 32, flexWrap: "wrap", marginBottom: 56 }}>
          <div style={{ maxWidth: 580 }}>
            <Eyebrow>Solutions</Eyebrow>
            <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "clamp(2rem, 3.2vw, 2.8rem)", letterSpacing: "-0.025em", lineHeight: 1.1, color: "var(--navy)", margin: "14px 0 0" }}>
              Choose your platform.<br />We design the transformation.
            </h2>
          </div>
          <Button variant="ghost" size="md" icon="→" href="solutions/">Compare platforms</Button>
        </div>

        {/* Bordered container — mirrors Journey layout */}
        <div style={{ display: "grid", gridTemplateColumns: "240px 1fr", gap: 0, border: "1px solid var(--border-1)", borderRadius: 4, overflow: "hidden" }}>

          {/* Left — platform tabs */}
          <div style={{ borderRight: "1px solid var(--border-1)", display: "flex", flexDirection: "column" }}>
            {PLATFORMS.map(p => (
              <PlatformTab key={p.key} p={p} active={active === p.key} onClick={setActive} />
            ))}
            <div style={{ flex: 1, borderTop: "1px solid var(--border-1)", padding: 20 }}>
              <div style={{ fontFamily: "var(--font-sans)", fontSize: 12, color: "var(--fg-3)", lineHeight: 1.5 }}>
                Extended by a curated ISV ecosystem across warehousing, logistics, BI, and people.
              </div>
              <a href="the-journey/isv-partner-ecosystem/" style={{
                marginTop: 12, display: "inline-flex", alignItems: "center", gap: 5,
                fontFamily: "var(--font-sans)", fontWeight: 600, fontSize: 12,
                color: "var(--cyan)", background: "none", border: "none", cursor: "pointer",
                textDecoration: "none",
              }}>Explore ecosystem →</a>
            </div>
          </div>

          {/* Right — detail panel */}
          <div style={{ padding: 12 }}>
            <PlatformDetail platform={current} />
          </div>
        </div>

        {/* ISV strip */}
        <div style={{ marginTop: 28, padding: "18px 24px", background: "var(--bg)", borderRadius: 4, border: "1px solid var(--border-1)", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 24 }}>
          <div style={{ fontFamily: "var(--font-sans)", fontSize: 12, color: "var(--fg-3)", display: "flex", alignItems: "center", gap: 20, flexWrap: "wrap" }}>
            <span style={{ fontWeight: 600, color: "var(--navy)" }}>Partner ISV Ecosystem</span>
            <span>Netstock · Lynq · SEI · Phocas · ZAP BI · Velixo · WebExpenses · Payhawk</span>
          </div>
          <a href="the-journey/isv-partner-ecosystem/" style={{ fontFamily: "var(--font-sans)", fontWeight: 600, fontSize: 12, color: "var(--navy)", textDecoration: "none", flexShrink: 0 }}>Full ecosystem →</a>
        </div>

      </Section>
    </>
  );
};

Object.assign(window, { Solutions, StatsBand });
