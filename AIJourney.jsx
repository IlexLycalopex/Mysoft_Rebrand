// AI Transformation Journey — interactive 4-stage maturity ladder
// This is the central narrative anchor of the redesigned site.

const STAGES = [
  {
    n: "01",
    name: "Operational Foundation",
    tagline: "Build the platform your business deserves.",
    sell: "ERP implementation, data governance, and real-time visibility. The foundation on which every subsequent investment is built. Nothing at Stage 2 or above is possible without it.",
    buyer: "CFO / Finance Director",
    trigger: "ERP end-of-life, acquisition, compliance event, or growth stall",
    deliverables: [
      "Finance Operations Review",
      "Governance Configuration Record",
      "Process Governance Map",
    ],
    platforms: ["Sage Intacct", "Sage X3"],
    accent: "var(--cyan)",
  },
  {
    n: "02",
    name: "Intelligent Automation",
    tagline: "Free your team to work at their highest value.",
    sell: "Remove the manual transactional layer. X3CloudDocs, Intacct automation, and a curated partner ISV ecosystem on a governed foundation. People focus on analysis and commercial support — not process.",
    buyer: "CFO / Finance Manager",
    trigger: "High manual transaction volume, slow month-end, talent cost pressure",
    deliverables: [
      "Automation Scope of Work",
      "Tiered Approval Model",
      "First Quarterly AI Optimisation Review",
    ],
    platforms: ["X3CloudDocs", "Sage Intacct", "ISV Ecosystem"],
    accent: "#F8C556",
  },
  {
    n: "03",
    name: "AI-Augmented Finance",
    tagline: "Give finance the tools to work at the speed of the business.",
    sell: "Platform AI and ISV intelligence: forecasting, variance commentary, anomaly detection, and operational insight. Capabilities previously only available to larger organisations.",
    buyer: "CFO / Board Sponsor",
    trigger: "Board AI mandate, desire for forward-looking reporting, operational complexity",
    deliverables: [
      "Full 4-Layer AI Governance Framework",
      "Board AI Governance Report",
      "QAOR Advisory Programme",
    ],
    platforms: ["Sage Intacct AI", "Phocas", "ZAP BI", "Velixo", "Netstock"],
    accent: "var(--cyan)",
  },
  {
    n: "04",
    name: "Agentic Finance Operations",
    tagline: "Design the finance function of the next decade.",
    sell: "Governed AI agents handling defined workflows. Finance and operations at scale without proportional headcount growth. Humans in control of exceptions, strategy, and commercial judgement.",
    buyer: "CFO / Board",
    trigger: "Growth targets that cannot be met with current team size, AI strategy maturity",
    deliverables: [
      "Agentic Design Workshop",
      "Wave Deployment Programme",
      "Annual Governance Review",
    ],
    platforms: ["Agentic Workflow Engine", "Sage Intacct", "Sage X3"],
    accent: "#F8C556",
  },
];

const StageTab = ({ stage, active, onClick }) => (
  <button
    onClick={() => onClick(stage.n)}
    style={{
      background: "none", border: "none", cursor: "pointer",
      textAlign: "left", padding: "20px 24px",
      borderLeft: active ? "3px solid var(--cyan)" : "3px solid transparent",
      transition: "border-color 220ms, background 220ms",
      background: active ? "rgba(0,182,237,0.06)" : "transparent",
    }}
  >
    <div style={{
      fontFamily: "var(--font-sans)", fontWeight: 600,
      fontSize: 10, letterSpacing: "0.18em", textTransform: "uppercase",
      color: active ? "var(--cyan)" : "var(--fg-3)",
      transition: "color 220ms",
    }}>Stage {stage.n}</div>
    <div style={{
      fontFamily: "var(--font-display)", fontWeight: 600,
      fontSize: 15, lineHeight: 1.3, marginTop: 4,
      color: active ? "var(--navy)" : "var(--fg-2)",
      transition: "color 220ms",
    }}>{stage.name}</div>
  </button>
);

const StageDetail = ({ stage }) => (
  <div style={{
    flex: 1,
    background: "var(--navy)", borderRadius: 4, padding: "40px 44px",
    color: "#fff", position: "relative", overflow: "hidden",
    minHeight: 480,
  }}>
    {/* Stage number watermark */}
    <div style={{
      fontFamily: "var(--font-display)", fontWeight: 600,
      fontSize: 80, lineHeight: 1, letterSpacing: "-0.04em",
      color: "rgba(255,255,255,0.05)", position: "absolute",
      top: 20, right: 36, userSelect: "none",
    }}>{stage.n}</div>

    <div style={{ position: "relative" }}>
      <Eyebrow color="#fff" style={{ fontSize: 13, fontWeight: 700 }}>Stage {stage.n}</Eyebrow>
      <h3 style={{
        fontFamily: "var(--font-display)", fontWeight: 600,
        fontSize: "clamp(1.6rem, 2.4vw, 2.2rem)", lineHeight: 1.15,
        letterSpacing: "-0.02em", margin: "12px 0 6px",
      }}>{stage.name}</h3>
      <p style={{
        fontFamily: "var(--font-display)", fontWeight: 400,
        fontSize: 17, color: stage.accent, fontStyle: "italic", margin: 0,
      }}>"{stage.tagline}"</p>

      <p style={{
        fontFamily: "var(--font-sans)", fontSize: 15,
        lineHeight: 1.7, color: "rgba(255,255,255,0.72)",
        margin: "20px 0 0", maxWidth: 540,
      }}>{stage.sell}</p>

      <div style={{ marginTop: 32, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32 }}>
        {/* Deliverables */}
        <div>
          <div style={{ fontFamily: "var(--font-sans)", fontSize: 10, letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", marginBottom: 12 }}>Key Deliverables</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {stage.deliverables.map((d, i) => (
              <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                <div style={{ width: 16, height: 16, borderRadius: 4, background: stage.accent, flexShrink: 0, marginTop: 1, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg width="9" height="9" viewBox="0 0 9 9" fill="none">
                    <path d="M1.5 4.5l2 2 4-4" stroke={stage.accent === "#F8C556" ? "var(--navy)" : "var(--navy)"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <span style={{ fontFamily: "var(--font-sans)", fontSize: 13.5, lineHeight: 1.4, color: "rgba(255,255,255,0.85)" }}>{d}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Meta */}
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div>
            <div style={{ fontFamily: "var(--font-sans)", fontSize: 10, letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", marginBottom: 8 }}>Primary Buyer</div>
            <div style={{ fontFamily: "var(--font-sans)", fontSize: 14, fontWeight: 500, color: "#fff" }}>{stage.buyer}</div>
          </div>
          <div>
            <div style={{ fontFamily: "var(--font-sans)", fontSize: 10, letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", marginBottom: 8 }}>Entry Trigger</div>
            <div style={{ fontFamily: "var(--font-sans)", fontSize: 13, lineHeight: 1.5, color: "rgba(255,255,255,0.65)" }}>{stage.trigger}</div>
          </div>
          <div>
            <div style={{ fontFamily: "var(--font-sans)", fontSize: 10, letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", marginBottom: 8 }}>Platforms</div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
              {stage.platforms.map(p => (
                <span key={p} style={{
                  fontFamily: "var(--font-sans)", fontSize: 11, fontWeight: 500,
                  color: "rgba(255,255,255,0.7)",
                  background: "rgba(255,255,255,0.08)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: 4, padding: "3px 9px",
                }}>{p}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const AIJourney = ({ onAssess }) => {
  const [active, setActive] = React.useState("01");
  const current = STAGES.find(s => s.n === active);

  return (
    <Section tone="white" id="journey">
      <div style={{ maxWidth: 900, marginBottom: 56 }}>
        <Eyebrow>The Journey</Eyebrow>
        <h2 style={{
          fontFamily: "var(--font-display)", fontWeight: 600,
          fontSize: "clamp(2rem, 3.2vw, 3rem)", letterSpacing: "-0.025em",
          lineHeight: 1.1, color: "var(--navy)", margin: "14px 0 16px",
        }}>Four stages from operational<br />foundation to agentic finance.</h2>
        <p style={{ fontFamily: "var(--font-sans)", fontSize: 16, lineHeight: 1.65, color: "var(--fg-2)", maxWidth: 600, margin: 0 }}>
          Each stage is a commercial milestone. Each builds on the last. Most organisations enter at Stage 1 — wherever you are, we design the path forward.
        </p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "240px 1fr", gap: 0, border: "1px solid var(--border-1)", borderRadius: 20, overflow: "hidden" }}>
        {/* Stage tabs */}
        <div style={{ borderRight: "1px solid var(--border-1)", display: "flex", flexDirection: "column" }}>
          {STAGES.map(s => (
            <StageTab key={s.n} stage={s} active={active === s.n} onClick={setActive} />
          ))}
          <div style={{ flex: 1, borderTop: "1px solid var(--border-1)", padding: 20 }}>
            <div style={{ fontFamily: "var(--font-sans)", fontSize: 12, color: "var(--fg-3)", lineHeight: 1.5 }}>
              Most UK organisations are at Stage 1 or 2. Very few have a credible path to Stage 4.
            </div>
            <button
              onClick={onAssess}
              style={{
                marginTop: 14, display: "inline-flex", alignItems: "center", gap: 6,
                fontFamily: "var(--font-sans)", fontWeight: 600, fontSize: 12,
                color: "var(--cyan)", background: "none", border: "none", cursor: "pointer", padding: 0,
              }}
            >
              Find your stage →
            </button>
          </div>
        </div>

        {/* Detail panel */}
        <div style={{ padding: 12 }}>
          <StageDetail stage={current} />
        </div>
      </div>

      {/* Bottom CTA strip */}
      <div style={{
        marginTop: 40, padding: "28px 36px",
        background: "var(--bg)", borderRadius: 4,
        display: "flex", justifyContent: "space-between", alignItems: "center", gap: 24,
        border: "1px solid var(--border-1)",
      }}>
        <div>
          <div style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 20, color: "var(--navy)" }}>Not sure which stage you're at?</div>
          <div style={{ fontFamily: "var(--font-sans)", fontSize: 14, color: "var(--fg-2)", marginTop: 4 }}>Our AI Readiness Assessment takes under five minutes and gives you a maturity stage score, a gap analysis, and a recommended next step.</div>
        </div>
        <Button variant="primary" size="lg" icon="→" onClick={onAssess} style={{ flexShrink: 0 }}>Assess Your Readiness</Button>
      </div>
    </Section>
  );
};

Object.assign(window, { AIJourney });
