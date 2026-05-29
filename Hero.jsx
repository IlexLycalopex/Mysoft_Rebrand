// Hero — leads with transformation outcome, not ERP products.
// Right panel: AI Journey visualiser (4-stage stepper with animated progress)

const HERO_OUTCOMES = [
  "Built for growth",
  "Ready for the AI era",
  "Free of friction",
  "Designed to scale",
  "Made for what's next",
  "Taking you further",
  "Start Up to Enterprise",
];

const JOURNEY_STAGES = [
  { n: "01", name: "Operational Foundation", status: "complete",    color: "var(--cyan)" },
  { n: "02", name: "Intelligent Automation",  status: "active",     color: "var(--cyan)" },
  { n: "03", name: "AI-Augmented Finance",    status: "upcoming",   color: "rgba(255,255,255,0.35)" },
  { n: "04", name: "Agentic Finance Ops",     status: "upcoming",   color: "rgba(255,255,255,0.35)" },
];

const HeroJourneyPanel = () => {
  const [progress, setProgress] = React.useState(62);
  React.useEffect(() => {
    const t = setInterval(() => setProgress(p => p >= 88 ? 38 : p + 1), 120);
    return () => clearInterval(t);
  }, []);

  return (
    <div style={{
      background: "var(--navy)", borderRadius: 4, padding: 32,
      color: "#fff", boxShadow: "var(--shadow-lg)",
      position: "relative", overflow: "hidden",
      aspectRatio: "9 / 10",
      display: "flex", flexDirection: "column",
    }}>
      {/* Glow */}
      <div style={{
        position: "absolute", top: -80, right: -80, width: 260, height: 260,
        borderRadius: "999px",
        background: "radial-gradient(circle, rgba(0,182,237,0.22), transparent 70%)",
        pointerEvents: "none",
      }} />

      {/* Header */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div style={{ fontFamily: "var(--font-sans)", fontSize: 10, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--cyan)" }}>AI Transformation Journey</div>
        <div style={{ display: "flex", gap: 5 }}>
          <span style={{ width: 7, height: 7, borderRadius: 999, background: "#F8C556" }} />
          <span style={{ width: 7, height: 7, borderRadius: 999, background: "var(--cyan)" }} />
          <span style={{ width: 7, height: 7, borderRadius: 999, background: "rgba(255,255,255,0.25)" }} />
        </div>
      </div>

      {/* Company */}
      <div style={{ marginTop: 20 }}>
        <div style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 20, letterSpacing: "-0.01em" }}>Example Customer</div>
        <div style={{ fontFamily: "var(--font-sans)", fontSize: 12, color: "rgba(255,255,255,0.55)", marginTop: 3 }}>Sage X3 · Manufacturing · UK + North America</div>
      </div>

      {/* Stage stepper */}
      <div style={{ marginTop: 28, flex: 1, display: "flex", flexDirection: "column", gap: 0 }}>
        {JOURNEY_STAGES.map((s, i) => (
          <div key={s.n} style={{ display: "flex", alignItems: "stretch", gap: 14 }}>
            {/* Line + dot */}
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: 20, flexShrink: 0 }}>
              <div style={{
                width: 20, height: 20, borderRadius: 999, flexShrink: 0,
                background: s.status === "upcoming" ? "rgba(255,255,255,0.1)" : "var(--cyan)",
                border: s.status === "active" ? "3px solid var(--cyan)" : "none",
                display: "flex", alignItems: "center", justifyContent: "center",
                boxShadow: s.status === "active" ? "0 0 0 4px rgba(0,182,237,0.22)" : "none",
                transition: "all 220ms",
              }}>
                {s.status === "complete" && (
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <path d="M2 5l2.5 2.5L8 3" stroke="var(--navy)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
                {s.status === "active" && <div style={{ width: 6, height: 6, borderRadius: 999, background: "#fff" }} />}
              </div>
              {i < JOURNEY_STAGES.length - 1 && (
                <div style={{
                  flex: 1, width: 1, minHeight: 32,
                  background: s.status === "complete" ? "var(--cyan)" : "rgba(255,255,255,0.12)",
                  margin: "3px 0",
                }} />
              )}
            </div>

            {/* Content */}
            <div style={{ paddingBottom: i < JOURNEY_STAGES.length - 1 ? 20 : 0, flex: 1 }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <div style={{ fontFamily: "var(--font-sans)", fontSize: 11, color: s.color, fontWeight: 500 }}>Stage {s.n}</div>
                {s.status === "active" && (
                  <div style={{
                    fontFamily: "var(--font-sans)", fontSize: 10, fontWeight: 600,
                    color: "var(--navy)", background: "var(--cyan)",
                    borderRadius: 4, padding: "2px 8px", letterSpacing: "0.04em",
                  }}>IN PROGRESS</div>
                )}
              </div>
              <div style={{
                fontFamily: "var(--font-display)", fontWeight: s.status === "active" ? 600 : 400,
                fontSize: s.status === "active" ? 15 : 13.5,
                lineHeight: 1.3, marginTop: 2,
                color: s.status === "upcoming" ? "rgba(255,255,255,0.38)" : "#fff",
              }}>{s.name}</div>

              {/* Progress bar for active stage */}
              {s.status === "active" && (
                <div style={{ marginTop: 10 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4 }}>
                    <div style={{ fontFamily: "var(--font-sans)", fontSize: 10, color: "rgba(255,255,255,0.5)" }}>Automation coverage</div>
                    <div style={{ fontFamily: "var(--font-sans)", fontSize: 10, color: "var(--cyan)", fontWeight: 600 }}>{progress}%</div>
                  </div>
                  <div style={{ height: 5, borderRadius: 999, background: "rgba(255,255,255,0.1)", overflow: "hidden" }}>
                    <div style={{ height: "100%", width: `${progress}%`, background: "var(--cyan)", borderRadius: 999, transition: "width 120ms linear" }} />
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Bottom card */}
      <div style={{
        marginTop: 20, padding: "14px 16px",
        background: "rgba(255,255,255,0.06)",
        border: "1px solid rgba(255,255,255,0.1)",
        borderRadius: 4,
      }}>
        <div style={{ fontFamily: "var(--font-sans)", fontSize: 10, color: "rgba(255,255,255,0.5)", letterSpacing: "0.06em", textTransform: "uppercase" }}>Next milestone</div>
        <div style={{ fontFamily: "var(--font-display)", fontWeight: 500, fontSize: 14, marginTop: 4 }}>X3CloudDocs AP automation go-live</div>
        <div style={{ fontFamily: "var(--font-sans)", fontSize: 12, color: "rgba(255,255,255,0.5)", marginTop: 2 }}>Quarterly AI Optimisation Review — Q3 2026</div>
      </div>
    </div>
  );
};

const Hero = ({ onAssess }) => {
  const [idx, setIdx] = React.useState(0);
  const [isMobile, setIsMobile] = React.useState(window.innerWidth < 768);
  React.useEffect(() => {
    const t = setInterval(() => setIdx(x => (x + 1) % HERO_OUTCOMES.length), 2800);
    return () => clearInterval(t);
  }, []);
  React.useEffect(() => {
    const fn = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", fn);
    return () => window.removeEventListener("resize", fn);
  }, []);

  return (
    <section style={{ background: "var(--bg)", padding: isMobile ? "calc(var(--nav-h) + 40px) 20px 56px" : "148px 32px 96px" }}>
      <div style={{ maxWidth: "var(--container)", margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1.1fr 0.9fr", gap: isMobile ? 40 : 72, alignItems: "center" }}>

          {/* Left */}
          <div>
            <Eyebrow>Sage ERP &amp; Finance Transformation — Powered by AI</Eyebrow>

            <h1 style={{
              fontFamily: "var(--font-display)", fontWeight: 600,
              fontSize: "clamp(2.6rem, 4.5vw, 4.2rem)",
              lineHeight: 1.04, letterSpacing: "-0.025em",
              color: "var(--navy)", margin: "18px 0 0",
            }}>
              Build the essential<br />infrastructure for your<br />next chapter.
            </h1>

            {/* Cycling word */}
            <div style={{ position: "relative", height: "calc(clamp(2.6rem, 4.5vw, 4.2rem) * 2.3)", overflow: "hidden", marginTop: 4 }}>
              {HERO_OUTCOMES.map((w, i) => (
                <div key={w} style={{
                  position: "absolute", inset: 0,
                  fontFamily: "var(--font-display)", fontWeight: 600,
                  fontSize: "clamp(2.6rem, 4.5vw, 4.2rem)",
                  lineHeight: 1.04, letterSpacing: "-0.025em",
                  color: "var(--cyan)",
                  opacity: i === idx ? 1 : 0,
                  transform: i === idx ? "translateY(0)" : "translateY(14px)",
                  transition: "opacity 420ms var(--ease-out), transform 420ms var(--ease-out)",
                }}>{w}.</div>
              ))}
            </div>

            <p style={{
              fontFamily: "var(--font-sans)", fontSize: "clamp(1rem, 1.4vw, 1.125rem)",
              lineHeight: 1.65, color: "var(--fg-2)",
              maxWidth: 520, margin: "28px 0 0",
            }}>
              We implement Sage X3 and Sage Intacct for ambitious mid-market organisations, extend them with our own X3CloudDocs automation IP, and leverage AI at every stage to give finance and operations the capacity to scale with the business.
            </p>

            <div style={{ marginTop: 36, display: "flex", gap: 12, flexWrap: "wrap" }}>
              <Button variant="primary" size="lg" icon="→" onClick={onAssess}>Assess Your AI Readiness</Button>
              <Button variant="ghost" size="lg" href="#journey">See How We Work</Button>
            </div>

            {/* Trust strip */}
            <div style={{ marginTop: 48, display: "flex", gap: 0, alignItems: "stretch" }}>
              {[
                { label: "Sage Platinum Club 2025" },
                { label: "20+ Years' Experience" },
                { label: "UK + North America" },
                { label: "First UK Sage X3 Partner" },
              ].map((t, i) => (
                <div key={t.label} style={{
                  fontFamily: "var(--font-sans)", fontSize: 11.5, fontWeight: 500,
                  color: "var(--fg-3)", letterSpacing: "0.03em",
                  paddingLeft: i === 0 ? 0 : 20, marginLeft: i === 0 ? 0 : 20,
                  borderLeft: i === 0 ? "none" : "1px solid var(--border-1)",
                  lineHeight: 1.4,
                }}>{t.label}</div>
              ))}
            </div>
          </div>

          {/* Right — hidden on mobile */}
          {!isMobile && <HeroJourneyPanel />}
        </div>
      </div>
    </section>
  );
};

Object.assign(window, { Hero });
