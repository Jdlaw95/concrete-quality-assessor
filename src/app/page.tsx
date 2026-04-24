import Link from "next/link";
import AnimatedStats from "@/components/AnimatedStats";
import ContactSection from "@/components/ContactSection";

/* ── Data ─────────────────────────────────────────────────── */
const SERVICES = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8m-4-4v4"/>
      </svg>
    ),
    title: "Concrete Cube Testing",
    std: "SANS 5863",
    desc: "28-day compressive strength testing to verify your concrete meets specified grade requirements. Certified results accepted by all major banks and municipalities.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/>
      </svg>
    ),
    title: "Slump & Flow Testing",
    std: "SANS 5862",
    desc: "On-site workability assessment ensuring your concrete is correctly batched and placeable without compromising final structural strength.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
      </svg>
    ),
    title: "Non-Destructive Testing",
    std: "Schmidt Hammer / UPV",
    desc: "Assess in-situ concrete strength without core extraction — ideal for existing structures, dispute resolution and pre-purchase assessments.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
      </svg>
    ),
    title: "Mix Design Verification",
    std: "SANS 10100",
    desc: "Independent verification that your mix design achieves target strength, workability and durability requirements before large pours begin.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/>
      </svg>
    ),
    title: "On-Site Quality Control",
    std: "Full Supervision",
    desc: "Dedicated QC technician embedded on your site for full pours — real-time monitoring, sampling and immediate reporting to your site foreman.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/>
      </svg>
    ),
    title: "SANS Compliance Reports",
    std: "Bank & Council Ready",
    desc: "Formal compliance certificates and test reports accepted by NHBRC, all major South African banks, municipalities and structural engineers.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
      </svg>
    ),
    title: "Failure Investigation",
    std: "Forensic Analysis",
    desc: "Expert analysis when concrete fails — identify root cause, quantify extent, and provide a remedial action plan backed by documented evidence.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    title: "Third-Party Inspections",
    std: "Independent Oversight",
    desc: "Neutral, independent concrete quality oversight for developers, banks, insurance assessors and legal proceedings across the Western Cape.",
  },
];

const PROJECTS = [
  {
    title: "Commercial Slab Pour — Concrete Pump Operation",
    type: "Commercial",
    location: "Western Cape",
    img: "/qca-branded-site.jpeg",
    scope: "On-site QC, cube testing & SANS compliance reporting",
  },
  {
    title: "Large-Scale Structural Slab — Dual Pump Pour",
    type: "Civil Engineering",
    location: "Western Cape",
    img: "/pump-pour.jpeg",
    scope: "Full site QC supervision for high-volume slab pour",
  },
  {
    title: "Foundation Excavation & Soil Assessment",
    type: "Geotechnical",
    location: "Western Cape",
    img: "/excavation-site.jpeg",
    scope: "Excavation test pits, DCP testing & bearing capacity assessment",
  },
  {
    title: "Concrete Core Extraction — NDT Investigation",
    type: "Non-Destructive Testing",
    location: "Western Cape",
    img: "/core-drill.jpeg",
    scope: "In-situ core sampling to verify structural concrete strength",
  },
  {
    title: "Core Sample Analysis — Compressive Strength",
    type: "Forensic / Investigation",
    location: "Western Cape",
    img: "/core-samples.jpeg",
    scope: "Failure investigation — core extraction, testing & remedial report",
  },
  {
    title: "DCP Soil Bearing Capacity Testing",
    type: "Geotechnical",
    location: "Western Cape",
    img: "/dcp-test.jpeg",
    scope: "Dynamic Cone Penetrometer testing for foundation design",
  },
];

const TESTIMONIALS = [
  {
    quote: "We brought in Concrete Quality Assessor after a failed cube test on our Century City development. Within 48 hours they had diagnosed the problem, issued a forensic report, and given us a clear remedial action plan that our engineer and bank accepted without question. Absolute professionals.",
    name: "Jacques van der Merwe",
    role: "Project Developer",
    company: "JVM Developments, Cape Town",
    initials: "JV",
  },
  {
    quote: "We've used CQA on four of our civil engineering projects in the Western Cape. Their SANS 5863 reports are thorough, always on time, and have never been queried by any municipality or consulting engineer. They're our first call on every project now.",
    name: "Thabo Mokoena",
    role: "Senior Civil Engineer",
    company: "TMK Engineering Solutions",
    initials: "TM",
  },
  {
    quote: "As a bank-appointed inspector, I need independent concrete reports I can rely on. Concrete Quality Assessor delivers precisely that — properly structured test reports, correct SANS references, and an assessor who knows what he's looking at. Highly recommended.",
    name: "Sandra Botha",
    role: "Construction Risk Assessor",
    company: "Nedbank Property Finance",
    initials: "SB",
  },
];

const BLOG_POSTS = [
  {
    slug: "sans-5863-explained",
    title: "Understanding SANS 5863: Concrete Cube Testing in South Africa",
    excerpt: "Why compressive strength testing matters, how the SANS standard works, and what your results actually mean for your structure.",
    category: "Technical",
    date: "12 March 2025",
    img: "/core-samples.jpeg",
    readTime: "5 min read",
  },
  {
    slug: "cape-town-marine-concrete",
    title: "Cape Town's Marine Environment: Why Coastal Concrete Needs Special Care",
    excerpt: "Chloride-induced corrosion is the leading cause of premature concrete failure on the Western Cape coast. Here's what developers and contractors must know.",
    category: "Western Cape",
    date: "28 February 2025",
    img: "https://images.unsplash.com/photo-1580674285054-bed31e145f59?auto=format&fit=crop&w=400&q=80",
    readTime: "7 min read",
  },
  {
    slug: "cost-of-poor-concrete",
    title: "The True Cost of Skipping Concrete Quality Tests on Your Development",
    excerpt: "A single failed test can halt a project for weeks. We break down the real financial risk of underinvesting in concrete QC — and why it's never worth it.",
    category: "Business Case",
    date: "14 February 2025",
    img: "/core-drill.jpeg",
    readTime: "6 min read",
  },
];

/* ── Page ─────────────────────────────────────────────────── */
export default function HomePage() {
  return (
    <>
      {/* ═══════════════════════════════════════════════
          HERO
      ═══════════════════════════════════════════════ */}
      <section
        id="home"
        style={{
          minHeight: "100vh",
          position: "relative",
          display: "flex",
          alignItems: "center",
          overflow: "hidden",
          background: "#050505",
        }}
      >
        {/* Background image */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/pump-pour.jpeg"
          alt=""
          style={{
            position: "absolute", inset: 0,
            width: "100%", height: "100%", objectFit: "cover",
            opacity: 0.22, zIndex: 0,
          }}
        />

        {/* Gradient overlay */}
        <div style={{
          position: "absolute", inset: 0, zIndex: 1,
          background: "linear-gradient(135deg,rgba(0,0,0,.92) 0%,rgba(0,0,0,.75) 50%,rgba(0,0,0,.88) 100%)",
        }}/>

        {/* Amber glow accent */}
        <div style={{
          position: "absolute", bottom: "-10%", left: "-5%",
          width: "50vw", height: "50vw", borderRadius: "50%",
          background: "radial-gradient(circle,rgba(245,158,11,.07) 0%,transparent 70%)",
          zIndex: 1, pointerEvents: "none",
        }}/>

        {/* Content */}
        <div className="container" style={{ position: "relative", zIndex: 2, padding: "10rem 1.5rem 7rem" }}>
          <div style={{ maxWidth: "780px" }}>
            {/* Badge */}
            <div
              className="anim-fade-in"
              style={{
                display: "inline-flex", alignItems: "center", gap: ".5rem",
                padding: ".3rem 1rem", borderRadius: "9999px",
                border: "1px solid rgba(245,158,11,.3)", background: "rgba(245,158,11,.08)",
                marginBottom: "1.75rem", fontSize: ".78rem",
                fontWeight: 700, color: "#f59e0b", letterSpacing: ".08em",
              }}
            >
              <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#f59e0b", display: "inline-block", animation: "pulse 2s ease-in-out infinite" }}/>
              WESTERN CAPE&apos;S TRUSTED CONCRETE QA SPECIALISTS
            </div>

            <h1 className="display-xl anim-fade-up d-2" style={{ marginBottom: "1.5rem", color: "#ffffff" }}>
              Built on Precision.{" "}
              <span className="grad-amber" style={{ display: "block" }}>Trusted to Last.</span>
            </h1>

            <p
              className="anim-fade-up d-3"
              style={{ fontSize: "1.2rem", lineHeight: 1.75, color: "#c9c9c9", maxWidth: "600px", marginBottom: "2.5rem" }}
            >
              Professional concrete quality assessment, SANS-compliant testing and independent inspection services protecting your structural investment across the Western Cape.
            </p>

            <div className="anim-fade-up d-4" style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginBottom: "3rem" }}>
              <a
                href="https://wa.me/27659562884?text=Hi%2C%20I%27d%20like%20to%20get%20a%20quote%20for%20concrete%20quality%20assessment."
                target="_blank" rel="noopener noreferrer"
                className="btn-whatsapp"
                style={{ padding: "1rem 2rem", borderRadius: ".875rem", fontSize: "1rem" }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.553 4.116 1.524 5.847L.057 23.882l6.195-1.448A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.892 0-3.657-.501-5.187-1.377l-.372-.22-3.858.901.939-3.758-.243-.386A9.96 9.96 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
                </svg>
                Get a Free Quote
              </a>
              <a href="/#work" className="btn-outline" style={{ padding: "1rem 2rem", borderRadius: ".875rem", fontSize: "1rem" }}>
                View Our Work ↓
              </a>
            </div>

            {/* Trust indicators */}
            <div className="anim-fade-in d-6" style={{ display: "flex", gap: "2rem", flexWrap: "wrap" }}>
              {["SANS Compliant", "CIDB Registered", "NHBRC Aligned", "Bank-Accepted Reports"].map((t) => (
                <div key={t} style={{ display: "flex", alignItems: "center", gap: ".4rem" }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="2.5">
                    <path d="M20 6L9 17l-5-5"/>
                  </svg>
                  <span style={{ fontSize: ".82rem", color: "#9ca3af", fontWeight: 500 }}>{t}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div style={{
          position: "absolute", bottom: "2rem", left: "50%", transform: "translateX(-50%)",
          zIndex: 2, animation: "float 3s ease-in-out infinite",
        }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,.3)" strokeWidth="2">
            <path d="M12 5v14M5 12l7 7 7-7"/>
          </svg>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          TRUST STRIP
      ═══════════════════════════════════════════════ */}
      <section style={{ background: "#0d0d0d", borderTop: "1px solid rgba(255,255,255,.05)", borderBottom: "1px solid rgba(255,255,255,.05)", padding: "1.75rem 0" }}>
        <div className="container">
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "3rem", flexWrap: "wrap" }}>
            <span style={{ fontSize: ".72rem", color: "#4b5563", fontWeight: 600, letterSpacing: ".08em" }}>CERTIFIED & COMPLIANT WITH</span>
            {[
              { code: "SANS 5863", name: "Cube Testing" },
              { code: "SANS 5862", name: "Slump Testing" },
              { code: "SANS 10100", name: "Structural Concrete" },
              { code: "NHBRC", name: "Aligned" },
              { code: "CIDB", name: "Registered" },
            ].map((item) => (
              <div key={item.code} className="trust-item">
                <span style={{ fontSize: ".85rem", fontWeight: 800, color: "#f5f5f5" }}>{item.code}</span>
                <span style={{ fontSize: ".68rem", color: "#6b7280" }}>{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          WHO WE ARE
      ═══════════════════════════════════════════════ */}
      <section
        id="about"
        style={{
          position: "relative", overflow: "hidden",
          background: "#0a0a0a", padding: "7rem 0",
        }}
      >
        {/* Decorative vertical amber line */}
        <div style={{
          position: "absolute", top: 0, left: "50%", bottom: 0,
          width: "1px", background: "linear-gradient(180deg,transparent,rgba(245,158,11,.15),transparent)",
          pointerEvents: "none",
        }}/>

        <div className="container">
          {/* Overline */}
          <div style={{ textAlign: "center", marginBottom: "1.5rem" }}>
            <p className="section-label">WHO WE ARE</p>
          </div>

          {/* Big quote */}
          <div style={{
            maxWidth: "860px", margin: "0 auto 5rem",
            textAlign: "center", position: "relative",
          }}>
            <div style={{
              fontSize: "8rem", lineHeight: 0, color: "rgba(245,158,11,.15)",
              fontFamily: "Georgia, serif", position: "absolute", top: "-1rem", left: "-1rem",
              fontWeight: 900, userSelect: "none",
            }}>
              &ldquo;
            </div>
            <p style={{
              fontSize: "clamp(1.4rem, 3vw, 2rem)", fontWeight: 700, lineHeight: 1.5,
              color: "#e5e7eb", letterSpacing: "-.01em",
            }}>
              We don&apos;t just test concrete.{" "}
              <span className="grad-amber">We ensure that every structure built in the Western Cape is built to last.</span>
            </p>
          </div>

          {/* Two-column story */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "start" }} className="about-grid">
            <div>
              <h2 className="display-md" style={{ marginBottom: "1.5rem" }}>
                Founded on Integrity.<br/>
                <span style={{ color: "#f59e0b" }}>Driven by Standards.</span>
              </h2>
              <p className="body-lg" style={{ marginBottom: "1.25rem" }}>
                Concrete Quality Assessor Pty Ltd was built on a single conviction: that every South African property developer, contractor and homeowner deserves to know — with complete certainty — that the concrete in their structure is safe, compliant and built to last.
              </p>
              <p className="body-md" style={{ marginBottom: "1.25rem" }}>
                Based in the Western Cape, we serve contractors, developers, consulting engineers and financial institutions from Cape Town to Stellenbosch, Paarl, George and beyond. Our assessors are on-site, hands-on, and available when your pours happen — not just behind a desk.
              </p>
              <p className="body-md" style={{ marginBottom: "2rem" }}>
                Every test we conduct is referenced against current SANS standards. Every report we issue is structured to be accepted by banks, municipalities and engineers without question. Because in construction, the paperwork is just as important as the pour.
              </p>
              <a href="/#services" className="btn-amber" style={{ padding: ".85rem 2rem", borderRadius: ".875rem", fontSize: ".95rem" }}>
                Explore Our Services →
              </a>
            </div>

            {/* Right: values + image */}
            <div>
              <div style={{ position: "relative", marginBottom: "2rem", borderRadius: "1.25rem", overflow: "hidden", aspectRatio: "4/3" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/team-site.jpg"
                  alt="Concrete quality testing on a Western Cape construction site"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
                <div style={{
                  position: "absolute", inset: 0,
                  background: "linear-gradient(135deg,rgba(0,0,0,.4) 0%,transparent 100%)",
                }}/>
                {/* Overlay stat */}
                <div style={{
                  position: "absolute", bottom: "1.25rem", left: "1.25rem",
                  background: "rgba(0,0,0,.85)", backdropFilter: "blur(12px)",
                  border: "1px solid rgba(245,158,11,.25)",
                  borderRadius: ".875rem", padding: ".85rem 1.25rem",
                }}>
                  <div style={{ fontSize: "1.8rem", fontWeight: 900, color: "#f59e0b", lineHeight: 1 }}>850+</div>
                  <div style={{ fontSize: ".8rem", color: "#9ca3af", marginTop: ".2rem" }}>projects quality-assured</div>
                </div>
              </div>

              {/* Value pillars */}
              <div style={{ display: "flex", flexDirection: "column", gap: ".75rem" }}>
                {[
                  { icon: "🏗️", title: "Precision Testing", desc: "Every test follows SANS protocol precisely. No shortcuts." },
                  { icon: "📋", title: "Bank-Grade Reporting", desc: "Reports accepted by Nedbank, Standard Bank, Absa & FNB." },
                  { icon: "⚡", title: "Fast Turnaround", desc: "Results within 24 hours where required. We understand deadlines." },
                  { icon: "🤝", title: "SA Construction Expertise", desc: "We understand local conditions, materials and contractor challenges." },
                ].map((v) => (
                  <div
                    key={v.title}
                    className="value-pill"
                    style={{
                      display: "flex", gap: ".85rem", alignItems: "flex-start",
                      padding: ".85rem 1rem", borderRadius: ".875rem",
                      background: "#111111", border: "1px solid rgba(255,255,255,.06)",
                      transition: "all .25s ease",
                    }}
                  >
                    <span style={{ fontSize: "1.2rem", flexShrink: 0 }}>{v.icon}</span>
                    <div>
                      <div style={{ fontSize: ".875rem", fontWeight: 700, color: "#f5f5f5", marginBottom: ".2rem" }}>{v.title}</div>
                      <div style={{ fontSize: ".8rem", color: "#6b7280", lineHeight: 1.55 }}>{v.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <style>{`@media(max-width:900px){.about-grid{grid-template-columns:1fr!important; gap:3rem!important;}}`}</style>
      </section>

      {/* ═══════════════════════════════════════════════
          ANIMATED STATS
      ═══════════════════════════════════════════════ */}
      <AnimatedStats />

      {/* ═══════════════════════════════════════════════
          SERVICES
      ═══════════════════════════════════════════════ */}
      <section id="services" style={{ background: "#0f0f0f", padding: "7rem 0" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <p className="section-label" style={{ marginBottom: ".6rem" }}>WHAT WE DO</p>
            <h2 className="display-lg" style={{ marginBottom: "1rem" }}>
              Complete Concrete{" "}
              <span className="grad-amber">Quality Solutions</span>
            </h2>
            <p className="body-lg" style={{ maxWidth: "520px", margin: "0 auto" }}>
              From the first slump test to your final compliance certificate — we cover every quality checkpoint your project needs.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "1.1rem" }} className="services-grid">
            {SERVICES.map((s, i) => (
              <div key={i} className="service-card">
                <div className="service-icon">{s.icon}</div>
                <div style={{ fontSize: ".65rem", fontWeight: 700, color: "#f59e0b", letterSpacing: ".08em", marginBottom: ".4rem" }}>{s.std}</div>
                <h3 style={{ fontSize: ".95rem", fontWeight: 700, marginBottom: ".6rem", color: "#f5f5f5" }}>{s.title}</h3>
                <p style={{ fontSize: ".82rem", color: "#6b7280", lineHeight: 1.65 }}>{s.desc}</p>
              </div>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: "3rem" }}>
            <a
              href="https://wa.me/27659562884?text=Hi%2C%20I%27d%20like%20to%20discuss%20your%20services."
              target="_blank" rel="noopener noreferrer"
              className="btn-amber"
              style={{ padding: ".9rem 2.25rem", borderRadius: ".875rem", fontSize: ".95rem" }}
            >
              Discuss Your Project →
            </a>
          </div>
        </div>

        <style>{`
          @media(max-width:1100px){.services-grid{grid-template-columns:repeat(3,1fr)!important;}}
          @media(max-width:768px) {.services-grid{grid-template-columns:repeat(2,1fr)!important;}}
          @media(max-width:480px) {.services-grid{grid-template-columns:1fr!important;}}
        `}</style>
      </section>

      {/* ═══════════════════════════════════════════════
          HOW WE WORK
      ═══════════════════════════════════════════════ */}
      <section style={{ background: "#0a0a0a", padding: "6rem 0" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <p className="section-label" style={{ marginBottom: ".6rem" }}>THE PROCESS</p>
            <h2 className="display-lg">How It Works</h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "1.5rem", position: "relative" }} className="process-grid">
            {/* Connector */}
            <div style={{
              position: "absolute", top: "3rem", left: "20%", right: "20%", height: "1px",
              background: "linear-gradient(90deg, rgba(245,158,11,.3), rgba(245,158,11,.15), rgba(245,158,11,.3))",
              zIndex: 0,
            }} className="connector"/>

            {[
              { n: "01", title: "Get in Touch", desc: "WhatsApp or email us with your project details — location, pour date, concrete volume and grade required. We respond fast." },
              { n: "02", title: "We Come to You", desc: "Our assessor arrives on site, conducts sampling and testing exactly when and where your pour happens. No delays, no excuses." },
              { n: "03", title: "Report & Certificate", desc: "You receive a fully formatted SANS-compliant test report within 24 hours — ready for your engineer, bank or municipality." },
            ].map((step, i) => (
              <div key={i} style={{ textAlign: "center", position: "relative", zIndex: 1 }}>
                <div style={{
                  width: "5rem", height: "5rem", borderRadius: "50%",
                  background: "linear-gradient(135deg,rgba(245,158,11,.15),rgba(245,158,11,.05))",
                  border: "2px solid rgba(245,158,11,.35)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  margin: "0 auto 1.5rem",
                  boxShadow: "0 0 28px rgba(245,158,11,.15)",
                }}>
                  <span style={{ fontSize: "1.3rem", fontWeight: 900, color: "#f59e0b" }}>{step.n}</span>
                </div>
                <h3 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: ".75rem" }}>{step.title}</h3>
                <p className="body-md">{step.desc}</p>
              </div>
            ))}
          </div>

          <style>{`@media(max-width:768px){.process-grid{grid-template-columns:1fr!important;} .connector{display:none!important;}}`}</style>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          OUR WORK / PORTFOLIO
      ═══════════════════════════════════════════════ */}
      <section id="work" style={{ background: "#0f0f0f", padding: "7rem 0" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <p className="section-label" style={{ marginBottom: ".6rem" }}>PORTFOLIO</p>
            <h2 className="display-lg" style={{ marginBottom: "1rem" }}>
              Our Work Across the <span className="grad-amber">Western Cape</span>
            </h2>
            <p className="body-lg" style={{ maxWidth: "480px", margin: "0 auto" }}>
              From residential complexes to major civil infrastructure — quality-assured from first mix to final certificate.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "1.25rem" }} className="portfolio-grid">
            {PROJECTS.map((p, i) => (
              <div key={i} className="portfolio-card">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={p.img} alt={p.title} loading="lazy"/>
                <span className="portfolio-label">{p.type}</span>
                <div className="portfolio-overlay">
                  <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "#fff", marginBottom: ".3rem" }}>{p.title}</h3>
                  <p style={{ fontSize: ".8rem", color: "#f59e0b", marginBottom: ".3rem" }}>📍 {p.location}</p>
                  <p style={{ fontSize: ".78rem", color: "#d1d5db" }}>{p.scope}</p>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: "2.5rem" }}>
            <a href="/#contact" className="btn-outline" style={{ padding: ".85rem 2rem", borderRadius: ".875rem", fontSize: ".9rem" }}>
              Start Your Project With Us →
            </a>
          </div>
        </div>

        <style>{`
          @media(max-width:900px){.portfolio-grid{grid-template-columns:repeat(2,1fr)!important;}}
          @media(max-width:560px){.portfolio-grid{grid-template-columns:1fr!important;}}
          .portfolio-overlay{opacity:0;transition:opacity .35s ease;}
          .portfolio-card:hover .portfolio-overlay{opacity:1;}
        `}</style>
      </section>

      {/* ═══════════════════════════════════════════════
          TESTIMONIALS
      ═══════════════════════════════════════════════ */}
      <section style={{ background: "#0a0a0a", padding: "7rem 0" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <p className="section-label" style={{ marginBottom: ".6rem" }}>TESTIMONIALS</p>
            <h2 className="display-lg">
              What Our Clients <span className="grad-amber">Say</span>
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "1.5rem" }} className="testi-grid">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="testi-card">
                {/* Stars */}
                <div style={{ display: "flex", gap: ".2rem", marginBottom: "1.1rem" }}>
                  {[...Array(5)].map((_, j) => (
                    <svg key={j} width="14" height="14" viewBox="0 0 24 24" fill="#f59e0b">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  ))}
                </div>
                <p style={{ fontSize: ".9rem", color: "#9ca3af", lineHeight: 1.75, marginBottom: "1.5rem", fontStyle: "italic" }}>
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div style={{ display: "flex", alignItems: "center", gap: ".85rem" }}>
                  <div style={{
                    width: "2.75rem", height: "2.75rem", borderRadius: "50%",
                    background: "linear-gradient(135deg,#f59e0b,#d97706)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: ".85rem", fontWeight: 800, color: "#0a0a0a", flexShrink: 0,
                  }}>
                    {t.initials}
                  </div>
                  <div>
                    <div style={{ fontSize: ".9rem", fontWeight: 700, color: "#f5f5f5" }}>{t.name}</div>
                    <div style={{ fontSize: ".78rem", color: "#6b7280" }}>{t.role}</div>
                    <div style={{ fontSize: ".75rem", color: "#f59e0b" }}>{t.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <style>{`@media(max-width:900px){.testi-grid{grid-template-columns:1fr!important;}}`}</style>
      </section>

      {/* ═══════════════════════════════════════════════
          BLOG PREVIEW
      ═══════════════════════════════════════════════ */}
      <section style={{ background: "#0f0f0f", padding: "7rem 0" }}>
        <div className="container">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "3rem", flexWrap: "wrap", gap: "1rem" }}>
            <div>
              <p className="section-label" style={{ marginBottom: ".5rem" }}>KNOWLEDGE HUB</p>
              <h2 className="display-lg">Latest from the <span className="grad-amber">Blog</span></h2>
            </div>
            <Link href="/blog" className="btn-outline" style={{ padding: ".65rem 1.5rem", borderRadius: ".875rem", fontSize: ".875rem" }}>
              All Articles →
            </Link>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "1.5rem" }} className="blog-grid">
            {BLOG_POSTS.map((post, i) => (
              <Link key={i} href={`/blog/${post.slug}`} className="blog-card">
                <div style={{ position: "relative", overflow: "hidden" }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={post.img} alt={post.title} loading="lazy"/>
                  <div style={{
                    position: "absolute", top: ".85rem", left: ".85rem",
                    background: "rgba(245,158,11,.9)", color: "#0a0a0a",
                    fontSize: ".68rem", fontWeight: 700, letterSpacing: ".05em",
                    padding: ".2rem .65rem", borderRadius: "9999px",
                    textTransform: "uppercase",
                  }}>
                    {post.category}
                  </div>
                </div>
                <div style={{ padding: "1.5rem" }}>
                  <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "#f5f5f5", marginBottom: ".65rem", lineHeight: 1.4 }}>
                    {post.title}
                  </h3>
                  <p style={{ fontSize: ".84rem", color: "#6b7280", lineHeight: 1.65, marginBottom: "1rem" }}>{post.excerpt}</p>
                  <div style={{ display: "flex", justifyContent: "space-between", fontSize: ".75rem", color: "#4b5563" }}>
                    <span>{post.date}</span>
                    <span style={{ color: "#f59e0b" }}>{post.readTime}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <style>{`@media(max-width:900px){.blog-grid{grid-template-columns:1fr!important;}}`}</style>
      </section>

      {/* ═══════════════════════════════════════════════
          CTA BANNER
      ═══════════════════════════════════════════════ */}
      <section style={{
        background: "linear-gradient(135deg,#111111 0%,#141414 100%)",
        borderTop: "1px solid rgba(245,158,11,.15)",
        borderBottom: "1px solid rgba(245,158,11,.15)",
        padding: "5rem 0",
        position: "relative", overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", top: "-30%", right: "-10%",
          width: "50vw", height: "50vw", borderRadius: "50%",
          background: "radial-gradient(circle,rgba(245,158,11,.05) 0%,transparent 70%)",
          pointerEvents: "none",
        }}/>
        <div className="container" style={{ position: "relative", textAlign: "center" }}>
          <h2 className="display-lg" style={{ marginBottom: "1rem" }}>
            Ready to Protect Your <span className="grad-amber">Investment?</span>
          </h2>
          <p className="body-lg" style={{ maxWidth: "500px", margin: "0 auto 2.5rem" }}>
            Don&apos;t wait for a failed test to find out your concrete isn&apos;t up to standard. Get in touch today.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <a
              href="https://wa.me/27659562884?text=Hi%2C%20I%27d%20like%20to%20get%20a%20quote."
              target="_blank" rel="noopener noreferrer"
              className="btn-whatsapp"
              style={{ padding: "1rem 2rem", borderRadius: ".875rem", fontSize: "1rem" }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.553 4.116 1.524 5.847L.057 23.882l6.195-1.448A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.892 0-3.657-.501-5.187-1.377l-.372-.22-3.858.901.939-3.758-.243-.386A9.96 9.96 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
              </svg>
              WhatsApp for a Quote
            </a>
            <a
              href="https://facebook.com/ConcreteQualityAssessor"
              target="_blank" rel="noopener noreferrer"
              className="btn-facebook"
              style={{ padding: "1rem 2rem", borderRadius: ".875rem", fontSize: "1rem" }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              Follow on Facebook
            </a>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          CONTACT
      ═══════════════════════════════════════════════ */}
      <ContactSection />

      <style>{`
        @keyframes float{0%,100%{transform:translateY(0)}50%{transform:translateY(-14px)}}
        @keyframes pulse{0%,100%{opacity:1}50%{opacity:.4}}
        @keyframes fadeUp{from{opacity:0;transform:translateY(32px)}to{opacity:1;transform:translateY(0)}}
        @keyframes fadeIn{from{opacity:0}to{opacity:1}}
        .anim-fade-up{animation:fadeUp .8s ease both;}
        .anim-fade-in{animation:fadeIn .6s ease both;}
        .d-2{animation-delay:.2s;} .d-3{animation-delay:.3s;}
        .d-4{animation-delay:.4s;} .d-6{animation-delay:.6s;}
        .value-pill:hover{border-color:rgba(245,158,11,.25)!important;}
      `}</style>
    </>
  );
}
