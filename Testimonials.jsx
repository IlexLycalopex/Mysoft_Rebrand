// Client Transformation Stories — reframed from "case studies"
// Each story has a sector badge, transformation stage badge, and outcome metrics.

const STORIES = [
  {
    quote: "Mysoft did not just implement the software. They redesigned how our finance function works. We closed our last period in two days — it used to take two weeks.",
    author: "Group Finance Director",
    company: "Leading UK Pharmaceutical Distributor",
    sector: "Pharmaceutical",
    platform: "Sage Intacct",
    stage: "Stage 2",
    stageLabel: "Intelligent Automation",
    metrics: [
      { n: "2 days", l: "period close (was 2 weeks)" },
      { n: "84%", l: "reduction in manual AP tasks" },
    ],
  },
  {
    quote: "The AI Readiness Assessment gave us a clear roadmap. We knew exactly what we needed to fix before we could deploy AI safely. That structured approach gave our board the confidence to approve the investment.",
    author: "CFO",
    company: "Mid-market SaaS Business, Series B",
    sector: "Software & SaaS",
    platform: "Sage Intacct",
    stage: "Stage 3",
    stageLabel: "AI-Augmented Finance",
    metrics: [
      { n: "Stage 3", l: "maturity in 14 months" },
      { n: "100%", l: "board AI strategy approval" },
    ],
  },
  {
    quote: "X3CloudDocs transformed what was a bottleneck into a competitive advantage. Our procurement team now processes three times the volume with the same headcount.",
    author: "Operations Director",
    company: "National Food & Beverage Manufacturer",
    sector: "Food & Beverage",
    platform: "Sage X3 + X3CloudDocs",
    stage: "Stage 2",
    stageLabel: "Intelligent Automation",
    metrics: [
      { n: "3×", l: "procurement throughput" },
      { n: "Zero", l: "additional headcount required" },
    ],
  },
];

const StoryCard = ({ s, active, onEnter, onLeave }) => (
  <div
    onMouseEnter={onEnter}
    onMouseLeave={onLeave}
    style={{
      background: "#fff", borderRadius: 4, padding: "32px 28px",
      border: "1px solid var(--border-1)",
      boxShadow: active ? "var(--shadow-md)" : "var(--shadow-sm)",
      transform: active ? "translateY(-3px)" : "translateY(0)",
      transition: "box-shadow 220ms var(--ease-out), transform 220ms var(--ease-out)",
      display: "flex", flexDirection: "column", gap: 0,
    }}
  >
    {/* Header badges */}
    <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 20 }}>
      <span style={{
        fontFamily: "var(--font-sans)", fontSize: 10, fontWeight: 600,
        letterSpacing: "0.08em", textTransform: "uppercase",
        color: "var(--navy)", background: "var(--bg)",
        border: "1px solid var(--border-1)",
        borderRadius: 4, padding: "3px 9px",
      }}>{s.sector}</span>
      <span style={{
        fontFamily: "var(--font-sans)", fontSize: 10, fontWeight: 600,
        letterSpacing: "0.08em", textTransform: "uppercase",
        color: "var(--cyan)", background: "rgba(0,182,237,0.08)",
        border: "1px solid rgba(0,182,237,0.2)",
        borderRadius: 4, padding: "3px 9px",
      }}>{s.stage} · {s.stageLabel}</span>
    </div>

    {/* Quote mark */}
    <div style={{
      fontFamily: "var(--font-display)", fontWeight: 600,
      fontSize: 48, color: "var(--cyan)", lineHeight: 0.8,
      marginBottom: 12, userSelect: "none",
    }}>"</div>

    <blockquote style={{
      fontFamily: "var(--font-display)", fontWeight: 400,
      fontSize: 16.5, lineHeight: 1.55, letterSpacing: "-0.005em",
      color: "var(--navy)", margin: 0, flex: 1,
    }}>{s.quote}</blockquote>

    {/* Attribution */}
    <div style={{ marginTop: 24, paddingTop: 20, borderTop: "1px solid var(--border-1)" }}>
      <div style={{ fontFamily: "var(--font-sans)", fontWeight: 600, fontSize: 13, color: "var(--navy)" }}>{s.author}</div>
      <div style={{ fontFamily: "var(--font-sans)", fontSize: 12, color: "var(--fg-3)", marginTop: 2 }}>{s.company}</div>
      <div style={{ fontFamily: "var(--font-sans)", fontSize: 11, color: "var(--cyan)", marginTop: 3 }}>{s.platform}</div>
    </div>

    {/* Metrics */}
    <div style={{
      marginTop: 20, display: "grid",
      gridTemplateColumns: "1fr 1fr", gap: 12,
    }}>
      {s.metrics.map((m, i) => (
        <div key={i} style={{
          background: "var(--bg)", borderRadius: 4, padding: "12px 14px",
          border: "1px solid var(--border-1)",
        }}>
          <div style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 22, letterSpacing: "-0.02em", color: "var(--navy)", lineHeight: 1 }}>{m.n}</div>
          <div style={{ fontFamily: "var(--font-sans)", fontSize: 11, color: "var(--fg-3)", marginTop: 4, lineHeight: 1.3 }}>{m.l}</div>
        </div>
      ))}
    </div>
  </div>
);

const Testimonials = () => {
  const [active, setActive] = React.useState(null);

  return (
    <Section tone="light" id="stories">
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: 32, flexWrap: "wrap", marginBottom: 52 }}>
        <div>
          <Eyebrow>Customer Transformation Stories</Eyebrow>
          <h2 style={{
            fontFamily: "var(--font-display)", fontWeight: 600,
            fontSize: "clamp(2rem, 3.2vw, 2.8rem)", letterSpacing: "-0.025em",
            lineHeight: 1.1, color: "var(--navy)", margin: "14px 0 0",
          }}>Real businesses.<br />Measurable outcomes.</h2>
        </div>
        <Button variant="ghost" size="md" icon="→" href="#">All transformation stories</Button>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
        {STORIES.map((s, i) => (
          <StoryCard
            key={i} s={s}
            active={active === i}
            onEnter={() => setActive(i)}
            onLeave={() => setActive(null)}
          />
        ))}
      </div>
    </Section>
  );
};

Object.assign(window, { Testimonials });
