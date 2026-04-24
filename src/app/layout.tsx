import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import FloatingCTA from "@/components/FloatingCTA";

export const metadata: Metadata = {
  title: "Concrete Quality Assessor Pty Ltd | Western Cape's Trusted Concrete Testing Experts",
  description:
    "Professional concrete quality assessment, cube testing, slump testing and SANS compliance reporting across the Western Cape. Protecting your structural investment.",
  keywords:
    "concrete testing Cape Town, concrete quality Western Cape, SANS 5863, cube testing, slump test, concrete compliance, structural concrete assessment, NHBRC, CIDB",
  openGraph: {
    title: "Concrete Quality Assessor Pty Ltd",
    description: "Western Cape's trusted concrete testing and quality assurance specialists.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="antialiased">
      <body className="min-h-screen flex flex-col" style={{ background: "#0a0a0a" }}>
        <Navigation />
        <main className="flex-1">{children}</main>

        {/* Footer */}
        <footer style={{ background: "#050505", borderTop: "1px solid rgba(255,255,255,.06)" }}>
          <div className="container" style={{ padding: "4rem 1.5rem 2rem" }}>
            <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: "3rem", marginBottom: "3rem" }} className="footer-grid">

              {/* Brand */}
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: ".65rem", marginBottom: "1rem" }}>
                  <div style={{
                    width: "2.5rem", height: "2.5rem", borderRadius: ".6rem",
                    background: "linear-gradient(135deg,#f59e0b,#d97706)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    flexShrink: 0,
                  }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(0,0,0,0.85)" strokeWidth="2.5">
                      <path d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2v-4M9 21H5a2 2 0 01-2-2v-4m0 0h18"/>
                    </svg>
                  </div>
                  <div>
                    <div style={{ fontWeight: 800, fontSize: ".95rem", color: "#f5f5f5", lineHeight: 1.2 }}>Concrete Quality</div>
                    <div style={{ fontWeight: 800, fontSize: ".95rem", color: "#f59e0b", lineHeight: 1.2 }}>Assessor Pty Ltd</div>
                  </div>
                </div>
                <p style={{ color: "#6b7280", fontSize: ".875rem", lineHeight: 1.7, maxWidth: "280px", marginBottom: "1.25rem" }}>
                  Western Cape&apos;s trusted concrete quality testing and assurance specialists. Protecting your structural investment with precision and integrity.
                </p>
                <div style={{ display: "flex", gap: ".75rem" }}>
                  <a href="https://wa.me/27659562884" target="_blank" rel="noopener noreferrer"
                    style={{ width: "2.25rem", height: "2.25rem", borderRadius: "50%", background: "#25D366", display: "flex", alignItems: "center", justifyContent: "center", transition: "all .2s" }}
                  className="social-icon-btn"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.553 4.116 1.524 5.847L.057 23.882l6.195-1.448A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.892 0-3.657-.501-5.187-1.377l-.372-.22-3.858.901.939-3.758-.243-.386A9.96 9.96 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
                    </svg>
                  </a>
                  <a href="https://facebook.com/ConcreteQualityAssessor" target="_blank" rel="noopener noreferrer"
                    style={{ width: "2.25rem", height: "2.25rem", borderRadius: "50%", background: "#1877F2", display: "flex", alignItems: "center", justifyContent: "center", transition: "all .2s" }}
                  className="social-icon-btn"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                </div>
              </div>

              {/* Quick links */}
              <div>
                <h4 style={{ fontSize: ".85rem", fontWeight: 700, color: "#f5f5f5", marginBottom: "1.1rem", letterSpacing: ".05em" }}>COMPANY</h4>
                {["About Us", "Our Services", "Our Work", "Blog", "Contact"].map((link) => (
                  <a key={link} href={link === "Blog" ? "/blog" : `/#${link.toLowerCase().replace(/ /g, "-")}`}
                    className="footer-link"
                    style={{ display: "block", fontSize: ".875rem", marginBottom: ".5rem", textDecoration: "none" }}
                  >{link}</a>
                ))}
              </div>

              {/* Services */}
              <div>
                <h4 style={{ fontSize: ".85rem", fontWeight: 700, color: "#f5f5f5", marginBottom: "1.1rem", letterSpacing: ".05em" }}>SERVICES</h4>
                {["Cube Testing", "Slump Testing", "NDT Inspection", "Mix Design", "SANS Reports", "Site QC"].map((s) => (
                  <div key={s} style={{ color: "#6b7280", fontSize: ".875rem", marginBottom: ".5rem" }}>{s}</div>
                ))}
              </div>

              {/* Contact */}
              <div>
                <h4 style={{ fontSize: ".85rem", fontWeight: 700, color: "#f5f5f5", marginBottom: "1.1rem", letterSpacing: ".05em" }}>CONTACT</h4>
                <div style={{ fontSize: ".875rem", color: "#6b7280", marginBottom: ".6rem" }}>
                  <span style={{ color: "#9ca3af" }}>📍</span> Western Cape, South Africa
                </div>
                <div style={{ fontSize: ".875rem", color: "#6b7280", marginBottom: ".6rem" }}>
                  <span style={{ color: "#9ca3af" }}>📞</span>{" "}
                  <a href="tel:+27659562884" style={{ color: "#6b7280", textDecoration: "none" }}>065 956 2884</a>
                </div>
                <div style={{ fontSize: ".875rem", color: "#6b7280", marginBottom: ".6rem" }}>
                  <span style={{ color: "#9ca3af" }}>📞</span>{" "}
                  <a href="tel:+27671168058" style={{ color: "#6b7280", textDecoration: "none" }}>067 116 8058</a>
                </div>
                <div style={{ fontSize: ".875rem", marginBottom: ".6rem" }}>
                  <a href="mailto:concretequalityassessor@gmail.com" style={{ color: "#f59e0b", textDecoration: "none", wordBreak: "break-all" }}>
                    concretequalityassessor@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className="divider" style={{ marginBottom: "1.5rem" }}/>

            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem" }}>
              <p style={{ color: "#4b5563", fontSize: ".8rem" }}>
                © 2025 Concrete Quality Assessor Pty Ltd. All rights reserved. Western Cape, South Africa.
              </p>
              <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                {["CIDB Registered", "SANS Compliant", "NHBRC Aligned"].map((b) => (
                  <span key={b} style={{
                    fontSize: ".72rem", fontWeight: 600, padding: ".2rem .65rem",
                    borderRadius: "9999px", border: "1px solid rgba(245,158,11,.2)",
                    color: "#f59e0b", background: "rgba(245,158,11,.06)",
                  }}>{b}</span>
                ))}
              </div>
            </div>
          </div>
        </footer>

        <FloatingCTA />

        <style>{`
          @media(max-width:900px){.footer-grid{grid-template-columns:1fr 1fr!important;}}
          @media(max-width:560px){.footer-grid{grid-template-columns:1fr!important;}}
          .footer-link{color:#6b7280;transition:color .2s;}
          .footer-link:hover{color:#f59e0b;}
          .social-icon-btn{transition:transform .2s;}
          .social-icon-btn:hover{transform:scale(1.1);}
        `}</style>
      </body>
    </html>
  );
}
