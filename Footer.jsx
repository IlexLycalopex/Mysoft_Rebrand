// Footer — updated navigation structure aligned to new buyer-trigger architecture

const FOOTER_COLS = [
  {
    t: "The Challenge",
    l: [
      "Growth Bottleneck",
      "AI Mandate",
      "Scale Ambition",
      "Compliance Event",
      "Who We Serve",
    ],
  },
  {
    t: "The Journey",
    l: [
      "AI Transformation Journey",
      "AI Readiness Assessment",
      "Agentic Finance Governance",
      "Finance Operations Review",
      "ISV Partner Ecosystem",
    ],
  },
  {
    t: "Solutions",
    l: [
      "Sage Intacct",
      "Sage X3",
      "X3CloudDocs",
      "By Sector",
      "Partner Ecosystem",
    ],
  },
  {
    t: "Insights",
    l: [
      "CFO Strategy",
      "Frameworks & Guides",
      "Events & Webinars",
      "Customer Transformation Stories",
      "AI-Ready Finance Guide",
    ],
  },
  {
    t: "About",
    l: [
      "Our Story",
      "Meet the Team",
      "Careers",
      "Sage Platinum Club 2025",
      "Support Portal",
    ],
  },
];

const Footer = ({ onAssess }) => (
  <footer style={{ background: "var(--navy)", color: "#fff", padding: "80px 32px 32px" }}>
    <div style={{ maxWidth: "var(--container)", margin: "0 auto" }}>

      {/* Top — wordmark + tagline + CTA */}
      <div style={{
        display: "grid", gridTemplateColumns: "1fr 1fr",
        gap: 48, alignItems: "end",
        paddingBottom: 56, marginBottom: 56,
        borderBottom: "1px solid rgba(255,255,255,0.1)",
      }}>
        <div>
          <Wordmark tone="white" size={32} />
          <p style={{
            marginTop: 20, fontFamily: "var(--font-sans)", fontSize: 15,
            color: "rgba(255,255,255,0.6)", lineHeight: 1.6, maxWidth: 400,
          }}>
            AI-enabled Sage ERP and finance transformation partner. Implementing <a href="#" style={{color:"rgba(255,255,255,0.7)",fontWeight:600}}>Sage X3</a> and <a href="#" style={{color:"rgba(255,255,255,0.7)",fontWeight:600}}>Sage Intacct</a>, extending with proprietary <a href="#" style={{color:"rgba(255,255,255,0.7)",fontWeight:600}}>X3CloudDocs</a> automation IP, and leveraging AI to help ambitious organisations scale their finance and operations functions with confidence.
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
          <Button variant="accent" size="lg" icon="→" onClick={onAssess}>
            Assess Your AI Readiness
          </Button>
          <div style={{ fontFamily: "var(--font-sans)", fontSize: 12, color: "rgba(255,255,255,0.35)" }}>
            Free. No commitment. Results within one business day.
          </div>
        </div>
      </div>

      {/* Nav cols */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 32 }}>
        {FOOTER_COLS.map(col => (
          <div key={col.t}>
            <div style={{
              fontFamily: "var(--font-sans)", fontWeight: 600,
              fontSize: 10, letterSpacing: "0.18em", textTransform: "uppercase",
              color: "var(--cyan)", marginBottom: 16,
            }}>{col.t}</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 11 }}>
              {col.l.map(it => (
                <a key={it} href="#" style={{
                  fontFamily: "var(--font-sans)", fontSize: 13,
                  color: "rgba(255,255,255,0.6)", textDecoration: "none",
                  transition: "color 140ms",
                }}
                  onMouseEnter={e => e.target.style.color = "#fff"}
                  onMouseLeave={e => e.target.style.color = "rgba(255,255,255,0.6)"}
                >{it}</a>
              ))}
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
