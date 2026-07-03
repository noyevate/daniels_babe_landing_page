import { useState, useEffect, useRef } from "react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import localConnectLogo from "@/imports/logo_localconnect.png";
import annabelPhoto from "@/imports/IMG_5553.jpg";

/* ─── Images ─────────────────────────────────────────────── */

/* ─── Data ────────────────────────────────────────────────── */
const SKILLS = [
  "Product Strategy",
  "Roadmapping",
  "User Research",
  "Agile / Scrum",
  "Market Analysis",
  "PRD Writing",
  "Stakeholder Mgmt",
  "Go-to-Market",
];

const PROJECTS = [
  {
    index: "01",
    category: "Product Discovery & Strategy",
    title: "LocalConnect — Defining the Platform",
    description:
      "Led discovery for LocalConnect, a service marketplace connecting residents in Ibadan with verified local artisans. Conducted 60+ user interviews across residents and providers, synthesised pain points into a prioritised backlog, and wrote the founding PRD that shaped the platform's core search, verification, and booking flows.",
    outcomes: ["60+ interviews distilled into 1 PRD", "MVP shipped in 12 weeks", "8 service categories at launch"],
    tags: ["PRD Writing", "User Research", "Product Strategy"],
    gradient: "linear-gradient(135deg, #0a2e2c 0%, #0d4a45 50%, #0a3a52 100%)",
    accent: "#2DD4BF",
    year: "2026",
    role: "Lead Product Analyst",
  },
];

/* ─── Helpers ─────────────────────────────────────────────── */
function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

/* ─── Sub-components ─────────────────────────────────────── */
function SkillTag({ label, dark }: { label: string; dark?: boolean }) {
  const [hov, setHov] = useState(false);
  const base = dark ? "rgba(255,255,255,0.15)" : "rgba(0,0,0,0.1)";
  const baseColor = dark ? "rgba(255,255,255,0.45)" : "#7A7468";
  return (
    <span
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        fontSize: "0.72rem",
        letterSpacing: "0.1em",
        textTransform: "uppercase",
        border: `1px solid ${hov ? "#B8965A" : base}`,
        padding: "0.4rem 0.85rem",
        color: hov ? "#B8965A" : baseColor,
        transition: "border-color 0.25s, color 0.25s",
        cursor: "default",
      }}
    >
      {label}
    </span>
  );
}

function ContactLink({
  href,
  icon,
  label,
  external,
  dark,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
  external?: boolean;
  dark?: boolean;
}) {
  const [hov, setHov] = useState(false);
  const base = dark ? "rgba(255,255,255,0.45)" : "#7A7468";
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        textDecoration: "none",
        fontSize: "0.8rem",
        color: hov ? "#B8965A" : base,
        letterSpacing: "0.08em",
        transition: "color 0.25s",
        display: "flex",
        alignItems: "center",
        gap: "0.5rem",
      }}
    >
      <span style={{ width: 14, height: 14, flexShrink: 0 }}>{icon}</span>
      {label}
    </a>
  );
}

function ProjectCard({ project, idx, dark }: { project: typeof PROJECTS[0]; idx: number; dark?: boolean }) {
  const { ref, inView } = useInView(0.05);
  const [hov, setHov] = useState(false);
  const fg = dark ? "#F5F0E8" : "#111110";
  const muted = dark ? "rgba(255,255,255,0.4)" : "#7A7468";
  const border = dark ? "rgba(255,255,255,0.07)" : "rgba(0,0,0,0.08)";

  return (
    <div
      ref={ref}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(40px)",
        transition: `opacity 0.8s ease ${idx * 0.1}s, transform 0.8s ease ${idx * 0.1}s`,
        margin: "0 4rem 0",
        borderBottom: `1px solid ${border}`,
      }}
      className="project-card-wrap"
    >
      {/* ── Top bar: logo + meta ── */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr auto",
          alignItems: "center",
          padding: "2.5rem 0 2rem",
          borderBottom: `1px solid ${border}`,
          gap: "2rem",
        }}
        className="project-topbar"
      >
        {/* Logo lockup */}
        <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
          <ImageWithFallback
            src={localConnectLogo}
            alt="LocalConnect logo"
            style={{ width: 180, height: 110, objectFit: "contain", display: "block", flexShrink: 0 }}
          />
          <div>
            <div
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "1.65rem",
                fontWeight: 700,
                color: fg,
                lineHeight: 1.1,
                letterSpacing: "-0.01em",
              }}
            >
              LocalConnect
            </div>
            <a
              href="https://www.localconnectng.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontSize: "0.72rem",
                letterSpacing: "0.1em",
                color: "#0d9488",
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: "0.3rem",
                marginTop: "0.25rem",
                transition: "color 0.2s",
              }}
              onMouseEnter={e => (e.currentTarget.style.color = "#B8965A")}
              onMouseLeave={e => (e.currentTarget.style.color = "#0d9488")}
            >
              <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                <path d="M1 11L11 1M11 1H4M11 1V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              www.localconnectng.com
            </a>
          </div>
        </div>

        {/* Right meta */}
        <div style={{ textAlign: "right" }}>
          <div style={{ fontSize: "0.65rem", letterSpacing: "0.25em", textTransform: "uppercase", color: "#B8965A" }}>
            {project.category}
          </div>
          <div style={{ fontSize: "0.65rem", letterSpacing: "0.15em", textTransform: "uppercase", color: muted, marginTop: "0.3rem" }}>
            {project.role} · {project.year}
          </div>
        </div>
      </div>

      {/* ── Body: description + stats + tags ── */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 340px",
          gap: "4rem",
          padding: "2.5rem 0 3rem",
          alignItems: "start",
        }}
        className="project-body"
      >
        {/* Left: description */}
        <div>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(1.5rem, 2.5vw, 2.4rem)",
              fontWeight: 700,
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
              color: fg,
              marginBottom: "1.25rem",
            }}
          >
            {project.title.replace("LocalConnect — ", "")}
          </h2>
          <p style={{ fontSize: "0.9rem", lineHeight: 1.9, color: muted, maxWidth: "520px" }}>
            {project.description}
          </p>

          {/* Tags */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", marginTop: "1.75rem" }}>
            {project.tags.map((t) => (
              <span
                key={t}
                style={{
                  fontSize: "0.65rem",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  border: `1px solid ${border}`,
                  padding: "0.35rem 0.85rem",
                  color: muted,
                }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Right: outcomes + stat bar */}
        <div
          style={{
            borderLeft: `1px solid ${border}`,
            paddingLeft: "3rem",
          }}
          className="project-outcomes"
        >
          <div style={{ fontSize: "0.62rem", letterSpacing: "0.28em", textTransform: "uppercase", color: "#B8965A", marginBottom: "1.25rem" }}>
            Key Outcomes
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {project.outcomes.map((o) => (
              <div key={o} style={{ borderBottom: "1px solid rgba(0,0,0,0.06)", paddingBottom: "1.25rem" }}>
                <div
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "1.4rem",
                    fontWeight: 700,
                    color: "#0d9488",
                    lineHeight: 1,
                  }}
                >
                  {o.split(" ")[0]}
                </div>
                <div style={{ fontSize: "0.78rem", color: muted, marginTop: "0.3rem", lineHeight: 1.5 }}>
                  {o.split(" ").slice(1).join(" ")}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Root ────────────────────────────────────────────────── */
export default function App() {
  const [visible, setVisible] = useState(false);
  const [dark, setDark] = useState(false);
  const { ref: portfolioRef, inView: portfolioInView } = useInView(0.05);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 50);
    return () => clearTimeout(t);
  }, []);

  const bg       = dark ? "#0E0E0D" : "#FAFAF7";
  const fg       = dark ? "#F5F0E8" : "#111110";
  const muted    = dark ? "rgba(255,255,255,0.45)" : "#7A7468";
  const border   = dark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.1)";
  const sectionBg= dark ? "#111110" : "#FAFAF7";

  return (
    <div style={{ fontFamily: "'Jost', sans-serif", fontWeight: 300, background: bg, color: fg, transition: "background 0.3s, color 0.3s" }}>

      {/* ── HERO ─────────────────────────────────────────── */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 480px", minHeight: "100vh" }} className="portfolio-grid">

        {/* Left */}
        <div
          style={{
            padding: "4rem 5rem 4rem 6rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            borderRight: `1px solid ${border}`,
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 0.9s ease, transform 0.9s ease",
          }}
        >
          {/* Top row: tag + dark mode toggle */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <div style={{ fontSize: "0.68rem", letterSpacing: "0.35em", textTransform: "uppercase", color: "#B8965A" }}>
              Product &amp; Project Management Professional
            </div>
            <button
              onClick={() => setDark(d => !d)}
              title={dark ? "Switch to light mode" : "Switch to dark mode"}
              style={{
                background: "none",
                border: `1px solid ${border}`,
                borderRadius: "50%",
                width: 36,
                height: 36,
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: muted,
                flexShrink: 0,
                transition: "border-color 0.2s, color 0.2s",
              }}
            >
              {dark
                ? <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
                : <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}><path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/></svg>
              }
            </button>
          </div>

          <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", gap: "1.8rem", padding: "3rem 0" }}>
            <h1
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(3.8rem, 6vw, 7rem)",
                fontWeight: 700,
                lineHeight: 0.95,
                letterSpacing: "-0.03em",
                color: fg,
              }}
            >
              Annabel
              <span style={{ display: "block", fontStyle: "italic", fontWeight: 400, color: "#B8965A" }}>Oladejo</span>
            </h1>

            <p style={{ fontSize: "0.8rem", letterSpacing: "0.2em", textTransform: "uppercase", color: muted, borderLeft: "3px solid #B8965A", paddingLeft: "1rem", lineHeight: 1.8 }}>
              Founder &nbsp;·&nbsp; Product Analyst<br />
              Product &amp; Project Management
            </p>

            <p style={{ fontSize: "0.95rem", lineHeight: 1.85, color: muted, maxWidth: "500px" }}>
              <strong style={{ color: fg, fontWeight: 600 }}>Transforming real-world challenges into scalable solutions.</strong>
              {" "}Experienced in product discovery, market research, customer analysis, stakeholder engagement, and business strategy.
            </p>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
              {SKILLS.map((s) => <SkillTag key={s} label={s} dark={dark} />)}
            </div>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "2.5rem", paddingTop: "2rem", borderTop: `1px solid ${border}`, flexWrap: "wrap" }}>
            <ContactLink href="mailto:Annabeloladejo8@gmail.com" icon={<EmailIcon />} label="Annabeloladejo8@gmail.com" dark={dark} />
            <ContactLink href="https://www.linkedin.com/in/annabel-oladejo-32a414245/" icon={<LinkedInIcon />} label="LinkedIn" external dark={dark} />
            <HireMeBtn />
          </div>
        </div>

        {/* Right photo */}
        <div style={{ position: "relative", overflow: "hidden", background: "#e8e6f0", opacity: visible ? 1 : 0, transition: "opacity 1.1s ease 0.2s" }}>
          <ImageWithFallback
            src={annabelPhoto}
            alt="Annabel Oladejo"
            style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "50% 10%", display: "block" }}
          />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(20,18,16,0.02) 0%, rgba(20,18,16,0) 40%, rgba(20,18,16,0.6) 100%)" }} />
          <div style={{ position: "absolute", bottom: "2.5rem", left: "2rem" }}>
            <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.1rem", fontWeight: 700, color: "#F5F0E8", letterSpacing: "0.04em" }}>
              Annabel Oladejo
            </div>
            <div style={{ fontSize: "0.65rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "#B8965A", marginTop: "0.3rem" }}>
              Product &amp; Project Management
            </div>
          </div>
          <a
            href="#portfolio"
            style={{ position: "absolute", bottom: "2.5rem", right: "2rem", display: "flex", flexDirection: "column", alignItems: "center", gap: "0.4rem", color: "rgba(245,240,232,0.55)", textDecoration: "none", fontSize: "0.6rem", letterSpacing: "0.25em", textTransform: "uppercase" }}
          >
            <span>Work</span>
            <svg width={12} height={20} viewBox="0 0 12 20" fill="none">
              <line x1="6" y1="0" x2="6" y2="16" stroke="currentColor" strokeWidth={1} />
              <polyline points="2,12 6,18 10,12" fill="none" stroke="currentColor" strokeWidth={1} />
            </svg>
          </a>
        </div>
      </div>

      {/* ── PORTFOLIO ─────────────────────────────────────── */}
      <section id="portfolio" style={{ background: sectionBg, transition: "background 0.3s" }}>
        <div
          ref={portfolioRef}
          style={{
            padding: "5rem 6rem 3.5rem",
            borderBottom: `1px solid ${border}`,
            opacity: portfolioInView ? 1 : 0,
            transform: portfolioInView ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.7s ease, transform 0.7s ease",
          }}
          className="portfolio-header"
        >
          <div style={{ display: "flex", alignItems: "center", gap: "1rem", flexWrap: "wrap" }}>
            <span style={{ fontSize: "0.68rem", letterSpacing: "0.35em", textTransform: "uppercase", color: "#B8965A" }}>Case Study</span>
            <span style={{ fontSize: "0.68rem", letterSpacing: "0.15em", textTransform: "uppercase", background: "linear-gradient(90deg, #0d9488, #2563eb)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", fontWeight: 500 }}>
              LocalConnect Nigeria · 2026
            </span>
          </div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.5rem, 5vw, 3.4rem)", fontWeight: 700, lineHeight: 1.1, letterSpacing: "-0.02em", marginTop: "1rem", maxWidth: "560px", color: fg }}>
            Building Ibadan's local services
            <span style={{ fontStyle: "italic", fontWeight: 400, color: "#B8965A" }}> marketplace</span>
          </h2>
          <p style={{ marginTop: "0.85rem", fontSize: "0.9rem", color: muted, lineHeight: 1.75, maxWidth: "520px" }}>
            A full-cycle product engagement — from discovery through go-to-market, trust infrastructure, and growth — on a platform connecting residents with verified artisans across Ibadan.
          </p>
        </div>

        {PROJECTS.map((p, i) => <ProjectCard key={p.index} project={p} idx={i} dark={dark} />)}

        <div style={{ padding: "4rem 6rem", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "1.5rem" }} className="footer-cta">
          <p style={{ fontSize: "0.9rem", color: muted, letterSpacing: "0.05em", maxWidth: "380px", lineHeight: 1.7 }}>
            Interested in collaborating or learning more about any of these projects?
          </p>
          <HireMeBtn />
        </div>
      </section>

      {/* ── Responsive overrides ─────────────────────────── */}
      <style>{`
        @media (max-width: 900px) {
          .portfolio-grid {
            grid-template-columns: 1fr !important;
          }
          .portfolio-grid > div:last-child {
            height: 60vw;
            max-height: 400px;
            order: -1;
          }
          .portfolio-grid > div:first-child {
            padding: 2.5rem 2rem !important;
          }
          .portfolio-header {
            padding: 2.5rem 1.25rem 1.75rem !important;
          }
          .footer-cta {
            padding: 2.5rem 1.25rem !important;
          }
          .project-card-wrap {
            margin: 0 !important;
            padding: 0 1.25rem !important;
          }
          .project-topbar {
            grid-template-columns: 1fr !important;
            gap: 1rem !important;
          }
          .project-body {
            grid-template-columns: 1fr !important;
            gap: 1.75rem !important;
            padding: 1.75rem 0 2rem !important;
          }
          .project-outcomes {
            border-left: none !important;
            padding-left: 0 !important;
            border-top: 1px solid rgba(128,128,128,0.15) !important;
            padding-top: 1.75rem !important;
          }
        }
        @media (max-width: 480px) {
          .portfolio-header h2 {
            font-size: 1.6rem !important;
          }
          .portfolio-header {
            padding: 2rem 1rem 1.5rem !important;
          }
          .project-card-wrap {
            padding: 0 1rem !important;
          }
        }
      `}</style>
    </div>
  );
}

/* ─── Tiny reusables ─────────────────────────────────────── */
function HireMeBtn() {
  const [hov, setHov] = useState(false);
  return (
    <a
      href="mailto:Annabeloladejo8@gmail.com"
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        display: "inline-block",
        padding: "0.75rem 2rem",
        background: hov ? "#B8965A" : "#111110",
        color: "#F5F0E8",
        fontSize: "0.75rem",
        letterSpacing: "0.18em",
        textTransform: "uppercase" as const,
        textDecoration: "none",
        transition: "background 0.3s",
        whiteSpace: "nowrap" as const,
      }}
    >
      Hire Me
    </a>
  );
}

function EmailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} width={14} height={14}>
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="M2 7l10 7 10-7" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={14} height={14}>
      <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zm2-3a2 2 0 110-4 2 2 0 010 4z" />
    </svg>
  );
}
