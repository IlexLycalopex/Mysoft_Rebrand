// AI Readiness Assessment CTA — primary conversion section
// Plus Insights cards below

const INSIGHTS = [
  {
    tag: "CFO Strategy",
    title: "The AI-Ready Finance Function: A CFO Readiness Guide",
    body: "Why AI success starts with finance process maturity — not technology. A structured guide for CFOs who have been asked for a credible AI strategy.",
    readTime: "12 min read",
    accent: "var(--cyan)",
  },
  {
    tag: "Strategic Insight",
    title: "Agentic AI in Finance and Operations: Reality Versus Hype",
    body: "What agentic finance actually means in practice, what governance it requires, and why most organisations are not yet ready — but can be.",
    readTime: "8 min read",
    accent: "var(--yellow)",
  },
  {
    tag: "Operational Transformation",
    title: "Why Mid-Market Businesses Are Building the Finance Function of 2030 Now",
    body: "The operational infrastructure, automation foundations, and AI capabilities that allow finance and operations to scale with the business rather than constrain it.",
    readTime: "10 min read",
    accent: "var(--cyan)",
  },
];

const AssessmentCTA = ({ onAssess }) => {
  const [name, setName] = React.useState("");
  const [company, setCompany] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [submitted, setSubmitted] = React.useState(false);
  const [hoveredCard, setHoveredCard] = React.useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && company && email) setSubmitted(true);
  };

  const inputStyle = {
    width: "100%", padding: "13px 16px",
    fontFamily: "var(--font-sans)", fontSize: 14,
    color: "#fff", background: "rgba(255,255,255,0.08)",
    border: "1px solid rgba(255,255,255,0.16)",
    borderRadius: 4, outline: "none", boxSizing: "border-box",
    transition: "border-color 140ms",
  };

  return (
    <>
      {/* Assessment CTA — navy */}
      <section id="assessment" style={{ background: "var(--navy)", padding: "100px 32px" }}>
        <div style={{ maxWidth: "var(--container)", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: 80, alignItems: "start" }}>

            {/* Left — copy */}
            <div>
              <Eyebrow color="var(--cyan)">AI Readiness Assessment</Eyebrow>
              <h2 style={{
                fontFamily: "var(--font-display)", fontWeight: 600,
                fontSize: "clamp(2rem, 3.5vw, 3.2rem)", lineHeight: 1.1,
                letterSpacing: "-0.025em", color: "#fff", margin: "16px 0 20px",
              }}>
                Is your finance function<br />ready for AI?
              </h2>
              <p style={{
                fontFamily: "var(--font-sans)", fontSize: 16, lineHeight: 1.7,
                color: "rgba(255,255,255,0.65)", margin: 0, maxWidth: 480,
              }}>
                Most CFOs cannot yet answer that question credibly — because their operational foundations are not ready to support AI deployment safely. Our AI Readiness Assessment changes that.
              </p>

              <div style={{ marginTop: 36, display: "flex", flexDirection: "column", gap: 16 }}>
                {[
                  { n: "01", t: "Complete six CFO-oriented questions", sub: "Under five minutes" },
                  { n: "02", t: "Receive your maturity stage score", sub: "Stages 1–4 with a gap analysis" },
                  { n: "03", t: "Get your recommended next step", sub: "A named, specific action — not generic advice" },
                ].map(step => (
                  <div key={step.n} style={{ display: "flex", alignItems: "flex-start", gap: 16 }}>
                    <div style={{
                      width: 32, height: 32, borderRadius: 4,
                      background: "rgba(0,182,237,0.15)",
                      border: "1px solid rgba(0,182,237,0.3)",
                      flexShrink: 0,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontFamily: "var(--font-display)", fontWeight: 600,
                      fontSize: 13, color: "var(--cyan)",
                    }}>{step.n}</div>
                    <div>
                      <div style={{ fontFamily: "var(--font-sans)", fontWeight: 500, fontSize: 14, color: "#fff" }}>{step.t}</div>
                      <div style={{ fontFamily: "var(--font-sans)", fontSize: 12, color: "rgba(255,255,255,0.45)", marginTop: 2 }}>{step.sub}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div style={{ marginTop: 32, fontFamily: "var(--font-sans)", fontSize: 12, color: "rgba(255,255,255,0.35)" }}>
                Free. No commitment. No sales call required unless you want one.
              </div>
            </div>

            {/* Right — form */}
            <div style={{
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.12)",
              borderRadius: 4, padding: 36,
            }}>
              {submitted ? (
                <div style={{ textAlign: "center", padding: "20px 0" }}>
                  <div style={{
                    width: 52, height: 52, borderRadius: 999,
                    background: "rgba(0,182,237,0.2)", border: "2px solid var(--cyan)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    margin: "0 auto 20px",
                  }}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--cyan)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </div>
                  <div style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 22, color: "#fff" }}>You're on the list.</div>
                  <div style={{ fontFamily: "var(--font-sans)", fontSize: 14, color: "rgba(255,255,255,0.55)", marginTop: 10, lineHeight: 1.6 }}>
                    We'll be in touch within one business day with your maturity stage assessment and recommended next step.
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 20, color: "#fff", marginBottom: 24 }}>
                    Start your assessment
                  </div>

                  {[
                    { label: "Your name", val: name, set: setName, type: "text", placeholder: "Alex Johnson" },
                    { label: "Company", val: company, set: setCompany, type: "text", placeholder: "Thornfield Group" },
                    { label: "Work email", val: email, set: setEmail, type: "email", placeholder: "alex@thornfield.co.uk" },
                  ].map(f => (
                    <div key={f.label} style={{ marginBottom: 16 }}>
                      <label style={{ display: "block", fontFamily: "var(--font-sans)", fontSize: 12, fontWeight: 500, color: "rgba(255,255,255,0.6)", marginBottom: 6, letterSpacing: "0.04em" }}>{f.label}</label>
                      <input
                        type={f.type}
                        value={f.val}
                        onChange={e => f.set(e.target.value)}
                        placeholder={f.placeholder}
                        required
                        style={inputStyle}
                        onFocus={e => e.target.style.borderColor = "var(--cyan)"}
                        onBlur={e => e.target.style.borderColor = "rgba(255,255,255,0.16)"}
                      />
                    </div>
                  ))}

                  <button
                    type="submit"
                    style={{
                      width: "100%", padding: "15px 24px", marginTop: 8,
                      background: "var(--cyan)", color: "var(--navy)",
                      border: "none", borderRadius: 4,
                      fontFamily: "var(--font-sans)", fontWeight: 700, fontSize: 14,
                      cursor: "pointer", letterSpacing: "0.01em",
                      transition: "opacity 140ms",
                    }}
                  >
                    Assess My AI Readiness →
                  </button>
                  <div style={{ marginTop: 12, fontFamily: "var(--font-sans)", fontSize: 11, color: "rgba(255,255,255,0.3)", textAlign: "center" }}>
                    Free. No spam. You can unsubscribe at any time.
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Insights */}
      <Section tone="white" id="insights">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: 32, marginBottom: 48 }}>
          <div>
            <Eyebrow>Insights</Eyebrow>
            <h2 style={{
              fontFamily: "var(--font-display)", fontWeight: 600,
              fontSize: "clamp(1.8rem, 2.8vw, 2.6rem)", letterSpacing: "-0.025em",
              lineHeight: 1.1, color: "var(--navy)", margin: "12px 0 0",
            }}>Finance and operations in the AI era.</h2>
          </div>
          <Button variant="ghost" size="md" icon="→" href="#">All insights</Button>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
          {INSIGHTS.map((ins, i) => (
            <a
              key={i} href="#"
              onMouseEnter={() => setHoveredCard(i)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{
                textDecoration: "none", display: "flex", flexDirection: "column",
                background: "#fff", borderRadius: 4, overflow: "hidden",
                border: "1px solid var(--border-1)",
                boxShadow: hoveredCard === i ? "var(--shadow-md)" : "var(--shadow-sm)",
                transform: hoveredCard === i ? "translateY(-3px)" : "translateY(0)",
                transition: "box-shadow 220ms var(--ease-out), transform 220ms var(--ease-out)",
              }}
            >
              {/* Accent bar */}
              <div style={{ height: 4, background: ins.accent, flexShrink: 0 }} />
              <div style={{ padding: "24px 24px 28px", flex: 1, display: "flex", flexDirection: "column" }}>
                <div style={{ fontFamily: "var(--font-sans)", fontSize: 10, fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: ins.accent === "var(--yellow)" ? "#b08a00" : "var(--cyan)" }}>{ins.tag}</div>
                <div style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 17, lineHeight: 1.3, letterSpacing: "-0.01em", color: "var(--navy)", margin: "10px 0 12px" }}>{ins.title}</div>
                <p style={{ fontFamily: "var(--font-sans)", fontSize: 13.5, lineHeight: 1.65, color: "var(--fg-2)", margin: 0, flex: 1 }}>{ins.body}</p>
                <div style={{ marginTop: 20, fontFamily: "var(--font-sans)", fontSize: 12, color: "var(--fg-3)" }}>{ins.readTime}</div>
              </div>
            </a>
          ))}
        </div>
      </Section>
    </>
  );
};

Object.assign(window, { AssessmentCTA });
