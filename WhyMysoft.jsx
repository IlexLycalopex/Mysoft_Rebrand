// WhyMysoft — Identity statement band + 3 proprietary IP pillars

const PILLARS = [
  {
    key: "ip",
    eyebrow: "Proprietary IP",
    title: "The only UK Sage partner with production-ready AI automation IP.",
    body: "X3CloudDocs — the top-rated Sage X3 Marketplace product — is Mysoft-built and Mysoft-exclusive. It is the automation foundation that bridges Stage 1 and Stage 2 of every AI transformation journey we deliver on Sage X3. We also leverage native automation functionality built into Sage X3 and Sage Intacct at every stage of the journey.",
    stat: "#1",
    statLabel: "Rated Sage X3 Marketplace product",
    icon: (
      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
    ),
  },
  {
    key: "framework",
    eyebrow: "Governance Framework",
    title: "A structured path to AI that your board can defend.",
    body: "Our Agentic Finance AI Governance Framework gives finance leaders a four-layer governance model — process, control, intelligence, and agentic workflow. It makes AI adoption auditable, incremental, and board-defensible. No competitor currently articulates this depth.",
    stat: "4",
    statLabel: "Layer governance model",
    icon: (
      <><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="M9 12l2 2 4-4" /></>
    ),
  },
  {
    key: "ecosystem",
    eyebrow: "Curated ISV Ecosystem",
    title: "The integrated technology stack that extends transformation beyond ERP.",
    body: "A curated partner ecosystem that extends the value of Sage X3 and Sage Intacct across warehousing, manufacturing, logistics, BI, and people. Designed to work together and governed from the outset. Netstock · Lynq · SEI · Phocas · ZAP BI · Velixo · WebExpenses · Payhawk",
    stat: "8+",
    statLabel: "Certified ISV partners",
    icon: (
      <><circle cx="12" cy="12" r="3" /><path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1" /></>
    ),
  },
];

const PillarCard = ({ p, hovered, onEnter, onLeave }) => (
  <div
    onMouseEnter={onEnter}
    onMouseLeave={onLeave}
    style={{
      background: "#fff", borderRadius: 4, padding: 32,
      border: "1px solid var(--border-1)",
      boxShadow: hovered ? "var(--shadow-md)" : "var(--shadow-sm)",
      transform: hovered ? "translateY(-3px)" : "translateY(0)",
      transition: "box-shadow 220ms var(--ease-out), transform 220ms var(--ease-out)",
      display: "flex", flexDirection: "column", gap: 0,
    }}
  >
    {/* Icon */}
    <div style={{
      width: 48, height: 48, borderRadius: 4,
      background: "var(--bg)", border: "1px solid var(--border-1)",
      display: "flex", alignItems: "center", justifyContent: "center",
      color: "var(--navy)",
    }}>
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        {p.icon}
      </svg>
    </div>

    <div style={{ fontFamily: "var(--font-sans)", fontWeight: 500, fontSize: 10, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--cyan)", marginTop: 20 }}>{p.eyebrow}</div>

    <h3 style={{
      fontFamily: "var(--font-display)", fontWeight: 600,
      fontSize: 20, lineHeight: 1.25, letterSpacing: "-0.01em",
      color: "var(--navy)", margin: "10px 0 14px",
    }}>{p.title}</h3>

    <p style={{
      fontFamily: "var(--font-sans)", fontSize: 14, lineHeight: 1.7,
      color: "var(--fg-2)", margin: 0, flex: 1,
    }}>{p.body}</p>

    {/* Stat */}
    <div style={{
      marginTop: 28, paddingTop: 20,
      borderTop: "1px solid var(--border-1)",
      display: "flex", alignItems: "flex-end", gap: 12,
    }}>
      <div style={{
        fontFamily: "var(--font-display)", fontWeight: 600,
        fontSize: 36, lineHeight: 1, letterSpacing: "-0.03em",
        color: "var(--navy)",
      }}>{p.stat}</div>
      <div style={{ fontFamily: "var(--font-sans)", fontSize: 12, color: "var(--fg-3)", lineHeight: 1.4, paddingBottom: 4 }}>{p.statLabel}</div>
    </div>
  </div>
);

const WhyMysoft = () => {
  const [hovered, setHovered] = React.useState(null);

  return (
    <>
      {/* Identity statement — navy */}
      <section style={{ background: "var(--navy)", padding: "100px 32px" }}>
        <div style={{ maxWidth: "var(--container)", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>
            <div>
              <h2 style={{
                fontFamily: "var(--font-display)", fontWeight: 600,
                fontSize: "clamp(2rem, 3.5vw, 3.4rem)",
                lineHeight: 1.1, letterSpacing: "-0.025em",
                color: "#fff", margin: 0,
              }}>
                We are not here<br />to sell software.
              </h2>
              <h2 style={{
                fontFamily: "var(--font-display)", fontWeight: 600,
                fontSize: "clamp(2rem, 3.5vw, 3.4rem)",
                lineHeight: 1.1, letterSpacing: "-0.025em",
                color: "var(--cyan)", margin: "12px 0 0",
              }}>
                We are here to build<br />the infrastructure your<br />next chapter needs.
              </h2>
            </div>
            <div>
              <p style={{
                fontFamily: "var(--font-sans)", fontSize: 17, lineHeight: 1.7,
                color: "rgba(255,255,255,0.7)", margin: "0 0 28px",
              }}>
                Most Sage partners implement software. Mysoft designs operating models. The AI transformation journey, governance approach, ISV partner ecosystem, and ongoing optimisation services are differentiators no other UK Sage partner currently articulates credibly. We implement <a href="solutions/sage-x3/" style={{ color: "#fff", fontWeight: 600, textDecoration: "none" }}>Sage X3</a>, <a href="solutions/sage-intacct/" style={{ color: "#fff", fontWeight: 600, textDecoration: "none" }}>Sage Intacct</a>, and our own <a href="solutions/x3clouddocs/" style={{ color: "#fff", fontWeight: 600, textDecoration: "none" }}>X3CloudDocs</a>.
              </p>
              <p style={{
                fontFamily: "var(--font-sans)", fontSize: 15, lineHeight: 1.6,
                color: "rgba(255,255,255,0.5)", margin: 0,
                borderLeft: "3px solid var(--cyan)", paddingLeft: 16,
              }}>
                "Mysoft didn't just implement Sage Intacct — they fundamentally changed how our finance function operates. Three years on, they're still our first call. They've guided us well beyond the ERP, into automation and now AI readiness. That's a very different relationship to what we expected."
              </p>
              <div style={{ fontFamily: "var(--font-sans)", fontSize: 12, color: "rgba(255,255,255,0.35)", marginTop: 8, paddingLeft: 19 }}>— Group Finance Director, Mid-market Professional Services Business</div>
            </div>
          </div>
        </div>
      </section>

      {/* 3 Pillars */}
      <Section tone="light" id="why-mysoft">
        <div style={{ marginBottom: 56 }}>
          <Eyebrow>Why Mysoft</Eyebrow>
          <h2 style={{
            fontFamily: "var(--font-display)", fontWeight: 600,
            fontSize: "clamp(2rem, 3.2vw, 2.8rem)", letterSpacing: "-0.025em",
            lineHeight: 1.1, color: "var(--navy)", margin: "14px 0 16px",
          }}>Proprietary IP that no competitor<br />currently matches.</h2>
          <p style={{ fontFamily: "var(--font-sans)", fontSize: 16, lineHeight: 1.65, color: "var(--fg-2)", maxWidth: 580, margin: 0 }}>
            With 20+ years of Sage expertise, proprietary automation IP, and a structured AI governance framework, we go further than any other UK Sage partner.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
          {PILLARS.map(p => (
            <PillarCard
              key={p.key} p={p}
              hovered={hovered === p.key}
              onEnter={() => setHovered(p.key)}
              onLeave={() => setHovered(null)}
            />
          ))}
        </div>
      </Section>
    </>
  );
};

Object.assign(window, { WhyMysoft });
