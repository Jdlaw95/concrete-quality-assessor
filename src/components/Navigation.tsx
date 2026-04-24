"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { label: "Home",     href: "/" },
  { label: "About",    href: "/#about" },
  { label: "Services", href: "/#services" },
  { label: "Our Work", href: "/#work" },
  { label: "Blog",     href: "/blog" },
  { label: "Contact",  href: "/#contact" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const navStyle: React.CSSProperties = {
    position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
    transition: "all .3s ease",
    background: scrolled ? "rgba(5,5,5,.97)" : "transparent",
    backdropFilter: scrolled ? "blur(20px)" : "none",
    WebkitBackdropFilter: scrolled ? "blur(20px)" : "none",
    borderBottom: scrolled ? "1px solid rgba(255,255,255,.06)" : "1px solid transparent",
    boxShadow: scrolled ? "0 4px 32px rgba(0,0,0,.5)" : "none",
  };

  return (
    <nav style={navStyle}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 1.5rem" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: "4.5rem" }}>

          {/* Logo */}
          <Link href="/" style={{ display: "flex", alignItems: "center", gap: ".65rem", textDecoration: "none" }}>
            <div style={{
              width: "2.25rem", height: "2.25rem", borderRadius: ".55rem",
              background: "linear-gradient(135deg,#f59e0b,#d97706)",
              display: "flex", alignItems: "center", justifyContent: "center",
              boxShadow: "0 0 16px rgba(245,158,11,.3)", flexShrink: 0,
            }}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="rgba(0,0,0,0.85)" strokeWidth="2.5">
                <path d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2v-4M9 21H5a2 2 0 01-2-2v-4m0 0h18"/>
              </svg>
            </div>
            <div style={{ lineHeight: 1.2 }}>
              <div style={{ fontWeight: 800, fontSize: ".82rem", color: "#f5f5f5", letterSpacing: ".01em" }}>Concrete Quality</div>
              <div style={{ fontWeight: 800, fontSize: ".82rem", color: "#f59e0b", letterSpacing: ".01em" }}>Assessor Pty Ltd</div>
            </div>
          </Link>

          {/* Desktop links */}
          <div style={{ display: "flex", alignItems: "center", gap: "1.75rem" }} className="nav-desktop">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`nav-link ${pathname === link.href ? "active" : ""}`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA + mobile toggle */}
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <a
              href="https://wa.me/27659562884?text=Hi%2C%20I%27d%20like%20to%20get%20a%20quote."
              target="_blank" rel="noopener noreferrer"
              className="btn-whatsapp nav-desktop"
              style={{ padding: ".5rem 1.25rem", borderRadius: ".75rem", fontSize: ".875rem" }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" style={{ flexShrink: 0 }}>
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.553 4.116 1.524 5.847L.057 23.882l6.195-1.448A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.892 0-3.657-.501-5.187-1.377l-.372-.22-3.858.901.939-3.758-.243-.386A9.96 9.96 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
              </svg>
              Get a Quote
            </a>

            {/* Hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="nav-mobile"
              style={{ background: "none", border: "none", cursor: "pointer", color: "#9ca3af", padding: ".25rem" }}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                {mobileOpen
                  ? <path d="M6 18L18 6M6 6l12 12"/>
                  : <path d="M4 6h16M4 12h16M4 18h16"/>}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div style={{
            borderTop: "1px solid rgba(255,255,255,.06)",
            paddingBottom: "1.25rem", paddingTop: ".5rem",
            background: "rgba(5,5,5,.98)",
          }}>
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                style={{
                  display: "block", padding: ".75rem 0",
                  color: "#9ca3af", textDecoration: "none",
                  fontSize: ".95rem", fontWeight: 500,
                  borderBottom: "1px solid rgba(255,255,255,.04)",
                  transition: "color .2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#f59e0b")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#9ca3af")}
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://wa.me/27659562884?text=Hi%2C%20I%27d%20like%20to%20get%20a%20quote."
              target="_blank" rel="noopener noreferrer"
              className="btn-whatsapp"
              style={{ marginTop: "1rem", width: "100%", padding: ".75rem", borderRadius: ".875rem", fontSize: ".9rem" }}
            >
              💬 WhatsApp for a Quote
            </a>
          </div>
        )}
      </div>

      <style>{`
        .nav-desktop{display:flex!important;}
        .nav-mobile{display:none!important;}
        @media(max-width:900px){
          .nav-desktop{display:none!important;}
          .nav-mobile{display:block!important;}
        }
      `}</style>
    </nav>
  );
}
