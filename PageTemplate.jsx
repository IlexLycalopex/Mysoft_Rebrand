// Page template — all standard section patterns with lorem-ipsum text and gradient image blocks.
// Derive any interior page from this file: swap lorem copy, swap gradients for real images.

const LOREM = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.";
const LOREM_LONG = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.";

// Coloured gradient block — stands in for every image / screenshot / illustration.
const GradientBlock = ({ gradient, style = {}, aspectRatio }) => (
  <div style={{
    borderRadius: "var(--radius-md)",
    background: gradient || "linear-gradient(135deg, var(--navy) 0%, var(--cyan) 60%, var(--yellow) 140%)",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    ...(aspectRatio ? { aspectRatio } : {}),
    ...style,
  }}>
    <span style={{
      fontFamily: "var(--font-sans)", fontSize: 11, fontWeight: 500,
      color: "rgba(255,255,255,0.4)", letterSpacing: "0.12em", textTransform: "uppercase",
      userSelect: "none",
    }}>Image placeholder</span>
  </div>
);

// ─── 1. Hero ──────────────────────────────────────────────────────────

const TemplateHero = ({ onAssess }) => (
  <section style={{ background: "var(--bg)", padding: "148px 32px 96px" }}>
    <div style={{ maxWidth: "var(--container)", margin: "0 auto" }}>
      <div style={{ display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: 72, alignItems: "center" }}>

        <div>
          <Eyebrow>Page category — section label</Eyebrow>
          <h1 style={{
            fontFamily: "var(--font-display)", fontWeight: 600,
            fontSize: "clamp(2.6rem, 4.5vw, 4.2rem)",
            lineHeight: 1.04, letterSpacing: "-0.025em",
            color: "var(--navy)", margin: "18px 0 0",
          }}>
            The primary hero<br />headline spans two<br />or three lines.
          </h1>
          <div style={{
            fontFamily: "var(--font-display)", fontWeight: 600,
            fontSize: "clamp(2.6rem, 4.5vw, 4.2rem)",
            lineHeight: 1.04, letterSpacing: "-0.025em",
            color: "var(--cyan)", marginTop: 4,
          }}>Accent colour line.</div>

          <p style={{
            fontFamily: "var(--font-sans)", fontSize: "clamp(1rem, 1.4vw, 1.125rem)",
            lineHeight: 1.65, color: "var(--fg-2)", maxWidth: 520, margin: "28px 0 0",
          }}>{LOREM}</p>

          <div style={{ marginTop: 36, display: "flex", gap: 12, flexWrap: "wrap" }}>
            <Button variant="primary" size="lg" icon="→" onClick={onAssess}>Primary CTA</Button>
            <Button variant="ghost" size="lg" href="#">Secondary CTA</Button>
          </div>

          <div style={{ marginTop: 48, display: "flex", alignItems: "stretch" }}>
            {["Trust signal one", "Trust signal two", "Trust signal three", "Trust signal four"].map((t, i) => (
              <div key={t} style={{
                fontFamily: "var(--font-sans)", fontSize: 11.5, fontWeight: 500,
                color: "var(--fg-3)", letterSpacing: "0.03em", lineHeight: 1.4,
                paddingLeft: i === 0 ? 0 : 20, marginLeft: i === 0 ? 0 : 20,
                borderLeft: i === 0 ? "none" : "1px solid var(--border-1)",
              }}>{t}</div>
            ))}
          </div>
        </div>

        <GradientBlock
          aspectRatio="9/10"
          gradient="linear-gradient(145deg, var(--navy) 0%, #004D5E 55%, var(--cyan) 130%)"
          style={{ boxShadow: "var(--shadow-lg)", borderRadius: 4 }}
        />

      </div>
    </div>
  </section>
);

// ─── 2. Stats band ────────────────────────────────────────────────────

const TemplateStatsBand = () => (
  <div style={{ background: "var(--navy)", padding: "64px 32px" }}>
    <div style={{ maxWidth: "var(--container)", margin: "0 auto" }}>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 32 }}>
        {[
          { n: "00+",  l: "Stat label one",   sub: "Supporting context" },
          { n: "00+",  l: "Stat label two",   sub: "Supporting context" },
          { n: "000+", l: "Stat label three", sub: "Supporting context" },
          { n: "00%",  l: "Stat label four",  sub: "Supporting context" },
        ].map((s, i) => (
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

// ─── 3. Feature cards (3-col grid) ───────────────────────────────────

const FEATURE_CARDS = [
  { title: "Feature one headline", gradient: "linear-gradient(135deg, var(--cyan) 0%, #006380 100%)" },
  { title: "Feature two headline", gradient: "linear-gradient(135deg, var(--yellow) 0%, #C28F1F 100%)" },
  { title: "Feature three headline", gradient: "linear-gradient(135deg, var(--navy) 0%, #2D4148 100%)" },
];

const TemplateFeatureCards = () => (
  <Section tone="white" id="features">
    <div style={{ textAlign: "center", maxWidth: 640, margin: "0 auto 56px" }}>
      <Eyebrow>Section eyebrow label</Eyebrow>
      <h2 style={{
        fontFamily: "var(--font-display)", fontWeight: 600,
        fontSize: "clamp(2rem, 3.2vw, 2.8rem)", letterSpacing: "-0.025em", lineHeight: 1.1,
        color: "var(--navy)", margin: "14px 0 0",
      }}>Three-column feature<br />section heading.</h2>
      <p style={{ fontFamily: "var(--font-sans)", fontSize: 16, lineHeight: 1.65, color: "var(--fg-2)", marginTop: 20 }}>{LOREM}</p>
    </div>

    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 28 }}>
      {FEATURE_CARDS.map((f, i) => (
        <div key={i} style={{
          background: "#fff", border: "1px solid var(--border-1)",
          borderRadius: 10, overflow: "hidden", boxShadow: "var(--shadow-sm)",
        }}>
          <GradientBlock gradient={f.gradient} aspectRatio="5/3" style={{ borderRadius: 0 }} />
          <div style={{ padding: "24px 28px 28px" }}>
            <h4 style={{
              fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "1.1rem",
              color: "var(--navy)", margin: 0, lineHeight: 1.3,
            }}>{f.title}</h4>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: 14, lineHeight: 1.7, color: "var(--fg-2)", marginTop: 12 }}>{LOREM}</p>
            <a href="#" style={{
              display: "inline-flex", alignItems: "center", gap: 6,
              fontFamily: "var(--font-sans)", fontWeight: 600, fontSize: 13,
              color: "var(--cyan)", textDecoration: "none", marginTop: 16,
            }}>Learn more →</a>
          </div>
        </div>
      ))}
    </div>
  </Section>
);

// ─── 4. Spotlight (text + image, optionally reversed) ─────────────────

const TemplateSpotlight = ({ reversed = false, tone = "white" }) => {
  const textCol = (
    <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
      <Eyebrow>Spotlight section label</Eyebrow>
      <h2 style={{
        fontFamily: "var(--font-display)", fontWeight: 600,
        fontSize: "clamp(1.8rem, 2.8vw, 2.4rem)", letterSpacing: "-0.025em", lineHeight: 1.15,
        color: "var(--navy)", margin: "14px 0 0",
      }}>A two-column content<br />spotlight section.</h2>
      <p style={{ fontFamily: "var(--font-sans)", fontSize: 15.5, lineHeight: 1.7, color: "var(--fg-2)", marginTop: 20 }}>{LOREM_LONG}</p>
      <div style={{ marginTop: 20, display: "flex", flexWrap: "wrap", gap: 8 }}>
        {["Tag one", "Tag two", "Tag three"].map(t => (
          <span key={t} style={{
            fontFamily: "var(--font-sans)", fontSize: 11.5, fontWeight: 500,
            color: "var(--fg-3)", background: "var(--bg)",
            border: "1px solid var(--border-1)", borderRadius: 999, padding: "4px 12px",
          }}>{t}</span>
        ))}
      </div>
      <div style={{ marginTop: 28, display: "flex", gap: 12 }}>
        <Button variant="primary" size="md" icon="→">Primary action</Button>
        <Button variant="ghost" size="md">Secondary action</Button>
      </div>
    </div>
  );

  const imageCol = (
    <GradientBlock
      gradient="linear-gradient(145deg, #001A22 0%, #00B6ED 80%, #F8C556 130%)"
      aspectRatio="4/3"
    />
  );

  return (
    <Section tone={tone}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 72, alignItems: "center" }}>
        {reversed ? <>{imageCol}{textCol}</> : <>{textCol}{imageCol}</>}
      </div>
    </Section>
  );
};

// ─── 5. Tabbed content (matches Solutions / AIJourney pattern exactly) ─

const TABS = [
  { key: "a", label: "Tab One",   headline: "First tab content headline.",  tags: ["Tag A", "Tag B", "Tag C"], gradient: "linear-gradient(135deg, #001A22 0%, #006380 100%)" },
  { key: "b", label: "Tab Two",   headline: "Second tab content headline.", tags: ["Tag D", "Tag E"],          gradient: "linear-gradient(135deg, #00B6ED 0%, #001A22 100%)" },
  { key: "c", label: "Tab Three", headline: "Third tab content headline.",  tags: ["Tag F", "Tag G", "Tag H"],gradient: "linear-gradient(135deg, #F8C556 20%, #001A22 120%)" },
];

const TemplateTabbedSection = () => {
  const [active, setActive] = React.useState("a");
  const current = TABS.find(t => t.key === active);

  return (
    <Section tone="white" id="tabbed">
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 56, flexWrap: "wrap", gap: 24 }}>
        <div>
          <Eyebrow>Tabbed section label</Eyebrow>
          <h2 style={{
            fontFamily: "var(--font-display)", fontWeight: 600,
            fontSize: "clamp(2rem, 3.2vw, 2.8rem)", letterSpacing: "-0.025em", lineHeight: 1.1,
            color: "var(--navy)", margin: "14px 0 0",
          }}>Section with tab<br />sidebar navigation.</h2>
        </div>
        <Button variant="ghost" size="md" icon="→" href="#">View all</Button>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "240px 1fr", border: "1px solid var(--border-1)", borderRadius: 4, overflow: "hidden" }}>

        <div style={{ borderRight: "1px solid var(--border-1)", display: "flex", flexDirection: "column" }}>
          {TABS.map(tab => (
            <button
              key={tab.key}
              onClick={() => setActive(tab.key)}
              style={{
                background: active === tab.key ? "rgba(0,182,237,0.06)" : "transparent",
                border: "none", cursor: "pointer", textAlign: "left", padding: "20px 24px",
                borderLeft: active === tab.key ? "3px solid var(--cyan)" : "3px solid transparent",
                transition: "border-color 220ms, background 220ms",
              }}
            >
              <div style={{
                fontFamily: "var(--font-sans)", fontWeight: 600, fontSize: 10,
                letterSpacing: "0.18em", textTransform: "uppercase",
                color: active === tab.key ? "var(--cyan)" : "var(--fg-3)",
              }}>Category</div>
              <div style={{
                fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 15,
                lineHeight: 1.3, marginTop: 4,
                color: active === tab.key ? "var(--navy)" : "var(--fg-2)",
              }}>{tab.label}</div>
            </button>
          ))}

          <div style={{ flex: 1, borderTop: "1px solid var(--border-1)", padding: 20 }}>
            <div style={{ fontFamily: "var(--font-sans)", fontSize: 12, color: "var(--fg-3)", lineHeight: 1.5 }}>
              Supporting note or callout text for the tabbed section sidebar area.
            </div>
            <a href="#" style={{
              marginTop: 12, display: "inline-flex", alignItems: "center", gap: 5,
              fontFamily: "var(--font-sans)", fontWeight: 600, fontSize: 12,
              color: "var(--cyan)", textDecoration: "none",
            }}>Explore further →</a>
          </div>
        </div>

        <div style={{ padding: 12 }}>
          <div style={{
            background: "var(--navy)", borderRadius: 4, overflow: "hidden",
            display: "grid", gridTemplateColumns: "1fr 1fr", minHeight: 420,
          }}>
            <div style={{ padding: "40px 36px", display: "flex", flexDirection: "column" }}>
              <Eyebrow color="var(--cyan)">{current.label}</Eyebrow>
              <h3 style={{
                fontFamily: "var(--font-display)", fontWeight: 600,
                fontSize: "clamp(1.3rem, 1.8vw, 1.7rem)", lineHeight: 1.2,
                letterSpacing: "-0.02em", margin: "12px 0 0", color: "#fff",
              }}>{current.headline}</h3>
              <p style={{
                fontFamily: "var(--font-sans)", fontSize: 14, lineHeight: 1.7,
                color: "rgba(255,255,255,0.72)", margin: "16px 0 0", flex: 1,
              }}>{LOREM_LONG}</p>
              <div style={{ marginTop: 20, display: "flex", flexWrap: "wrap", gap: 6 }}>
                {current.tags.map(t => (
                  <span key={t} style={{
                    fontFamily: "var(--font-sans)", fontSize: 11, fontWeight: 500,
                    color: "rgba(255,255,255,0.6)",
                    background: "rgba(255,255,255,0.08)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    borderRadius: 4, padding: "3px 9px",
                  }}>{t}</span>
                ))}
              </div>
              <a href="#" style={{
                marginTop: 24, display: "inline-flex", alignItems: "center", gap: 6,
                fontFamily: "var(--font-sans)", fontWeight: 600, fontSize: 13,
                color: "var(--cyan)", textDecoration: "none",
              }}>Learn more →</a>
            </div>

            <div style={{ padding: "20px 20px 20px 0", display: "flex", alignItems: "stretch" }}>
              <GradientBlock
                gradient={current.gradient}
                style={{ flex: 1, width: "auto", borderRadius: 4 }}
              />
            </div>
          </div>
        </div>

      </div>
    </Section>
  );
};

// ─── 6. Testimonials (3-col) ──────────────────────────────────────────

const TESTIMONIALS = [
  {
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim.",
    name: "Jane Smith",  role: "Chief Financial Officer", company: "Acme Corporation",
    avatarGrad: "linear-gradient(135deg, var(--cyan) 0%, #006380 100%)",
  },
  {
    quote: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo.",
    name: "John Davis",  role: "Chief Operating Officer", company: "Thornfield Group",
    avatarGrad: "linear-gradient(135deg, var(--navy) 0%, #2D4148 100%)",
  },
  {
    quote: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas.",
    name: "Sarah Wilson", role: "Finance Director", company: "Meridian Holdings",
    avatarGrad: "linear-gradient(135deg, var(--yellow) 0%, #C28F1F 100%)",
  },
];

const TemplateTestimonials = () => (
  <Section tone="light" id="testimonials">
    <div style={{ textAlign: "center", maxWidth: 560, margin: "0 auto 56px" }}>
      <Eyebrow>Customer stories</Eyebrow>
      <h2 style={{
        fontFamily: "var(--font-display)", fontWeight: 600,
        fontSize: "clamp(2rem, 3.2vw, 2.8rem)", letterSpacing: "-0.025em", lineHeight: 1.1,
        color: "var(--navy)", margin: "14px 0 0",
      }}>What our customers say.</h2>
    </div>
    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
      {TESTIMONIALS.map((t, i) => (
        <div key={i} style={{
          background: "#fff", borderRadius: 16,
          border: "1px solid var(--border-1)", padding: 32,
          boxShadow: "var(--shadow-sm)", display: "flex", flexDirection: "column",
        }}>
          <div style={{ display: "flex", gap: 3, marginBottom: 20 }}>
            {[...Array(5)].map((_, si) => (
              <svg key={si} width="14" height="14" viewBox="0 0 14 14" fill="var(--yellow)">
                <path d="M7 1l1.5 4.5H13L9 8.5l1.5 4.5L7 10.5 3.5 13 5 8.5 1 5.5h4.5z" />
              </svg>
            ))}
          </div>
          <p style={{
            fontFamily: "var(--font-sans)", fontSize: 14.5, lineHeight: 1.7,
            color: "var(--fg-2)", flex: 1, fontStyle: "italic",
          }}>"{t.quote}"</p>
          <div style={{ marginTop: 24, display: "flex", alignItems: "center", gap: 12 }}>
            <div style={{ width: 44, height: 44, borderRadius: 999, flexShrink: 0, background: t.avatarGrad }} />
            <div>
              <div style={{ fontFamily: "var(--font-sans)", fontWeight: 600, fontSize: 14, color: "var(--navy)" }}>{t.name}</div>
              <div style={{ fontFamily: "var(--font-sans)", fontSize: 12, color: "var(--fg-3)", marginTop: 2 }}>{t.role}, {t.company}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </Section>
);

// ─── 7. CTA band ─────────────────────────────────────────────────────

const TemplateCTA = ({ onAssess }) => (
  <section id="page-cta" style={{ background: "var(--navy)", padding: "96px 32px" }}>
    <div style={{ maxWidth: "var(--container-narrow)", margin: "0 auto", textAlign: "center" }}>
      <Eyebrow color="var(--cyan)">Get started today</Eyebrow>
      <h2 style={{
        fontFamily: "var(--font-display)", fontWeight: 600,
        fontSize: "clamp(2rem, 3.5vw, 3rem)", letterSpacing: "-0.025em", lineHeight: 1.1,
        color: "#fff", margin: "18px 0 0",
      }}>Ready to start your<br />transformation journey?</h2>
      <p style={{
        fontFamily: "var(--font-sans)", fontSize: 17, lineHeight: 1.65,
        color: "rgba(255,255,255,0.65)", maxWidth: 520, margin: "24px auto 0",
      }}>{LOREM}</p>
      <div style={{ marginTop: 40, display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
        <Button variant="accent" size="lg" icon="→" onClick={onAssess}>Primary CTA Label</Button>
        <Button variant="ghostWhite" size="lg">Secondary CTA</Button>
      </div>
      <div style={{ marginTop: 20, fontFamily: "var(--font-sans)", fontSize: 13, color: "rgba(255,255,255,0.4)" }}>
        No commitment required. Free to start.
      </div>
    </div>
  </section>
);

// ─── Assembly ─────────────────────────────────────────────────────────

const PageTemplate = ({ onAssess }) => (
  <main>
    <TemplateHero onAssess={onAssess} />
    <TemplateStatsBand />
    <TemplateFeatureCards />
    <TemplateSpotlight reversed={false} tone="white" />
    <TemplateSpotlight reversed={true} tone="light" />
    <TemplateTabbedSection />
    <TemplateTestimonials />
    <TemplateCTA onAssess={onAssess} />
  </main>
);

Object.assign(window, { PageTemplate });
