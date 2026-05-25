// Shared primitives — Button, Eyebrow, Section, Wordmark
// Must be loaded first; all other components depend on these.

const Button = ({ variant = "primary", size = "md", icon = null, children, onClick, type = "button", href, style = {} }) => {
  const base = {
    display: "inline-flex", alignItems: "center", gap: 10,
    fontFamily: "var(--font-sans)", fontWeight: 500, lineHeight: 1.45,
    border: "1px solid transparent", borderRadius: 4,
    cursor: "pointer", whiteSpace: "nowrap", textDecoration: "none",
    transition: "background var(--dur-fast) var(--ease-out), color var(--dur-fast) var(--ease-out), border-color var(--dur-fast) var(--ease-out), transform var(--dur-fast) var(--ease-out)",
  };
  const sizes = {
    sm: { padding: "8px 16px", fontSize: 13 },
    md: { padding: "12px 22px", fontSize: 14 },
    lg: { padding: "15px 30px", fontSize: 15 },
    xl: { padding: "18px 36px", fontSize: 16 },
  };
  const variants = {
    primary: { background: "var(--navy)", color: "#fff", borderColor: "var(--navy)" },
    accent:  { background: "var(--cyan)", color: "var(--navy)", borderColor: "var(--cyan)" },
    ghost:   { background: "transparent", color: "var(--navy)", borderColor: "var(--border-1)" },
    ghostWhite: { background: "transparent", color: "#fff", borderColor: "rgba(255,255,255,0.35)" },
    invert:  { background: "#fff", color: "var(--navy)", borderColor: "#fff" },
  };
  const props = {
    type: href ? undefined : type,
    onClick,
    className: `btn btn-${variant}`,
    style: { ...base, ...sizes[size], ...variants[variant], ...style },
  };
  const inner = (
    <>
      {children}
      {icon && <span className="btn-arrow" style={{ display: "inline-block", transition: "transform var(--dur-fast) var(--ease-out)" }}>{icon}</span>}
    </>
  );
  return href ? <a href={href} {...props}>{inner}</a> : <button {...props}>{inner}</button>;
};

const Eyebrow = ({ color = "var(--cyan)", children, style }) => (
  <div style={{
    fontFamily: "var(--font-sans)", fontWeight: 500,
    fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", color,
    ...style,
  }}>{children}</div>
);

const Section = ({ tone = "light", id, children, style = {} }) => {
  const tones = {
    light: { background: "var(--bg)",    color: "var(--fg-1)" },
    white: { background: "#fff",          color: "var(--fg-1)" },
    navy:  { background: "var(--navy)",   color: "#fff" },
    deep:  { background: "#000d14",       color: "#fff" },
  };
  return (
    <section id={id} style={{ ...tones[tone], padding: "100px 32px", ...style }}>
      <div style={{ maxWidth: "var(--container)", margin: "0 auto" }}>
        {children}
      </div>
    </section>
  );
};

const Wordmark = ({ tone = "navy", size = 28 }) => (
  <div style={{
    display: "inline-flex", alignItems: "flex-start",
    fontFamily: "var(--font-display)", fontWeight: 600,
    fontSize: size, letterSpacing: "-0.02em",
    color: tone === "navy" ? "var(--navy)" : "#fff",
    lineHeight: 1,
  }}>
    Mysoft<span style={{ color: "var(--cyan)", fontWeight: 400, fontSize: size * 0.52, marginLeft: 2, marginTop: size * 0.09, lineHeight: 1 }}>/</span>
  </div>
);

// Divider utility
const Divider = ({ style }) => (
  <div style={{ height: 1, background: "var(--border-1)", ...style }} />
);

Object.assign(window, { Button, Eyebrow, Section, Wordmark, Divider });
