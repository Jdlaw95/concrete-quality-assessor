"use client";

import { useState } from "react";

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", company: "", phone: "", email: "", service: "", message: "" });
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  const set = (k: string, v: string) => setForm((p) => ({ ...p, [k]: v }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    // Build WhatsApp message
    const msg = encodeURIComponent(
      `Hi, I'm contacting via your website.\n\nName: ${form.name}\nCompany: ${form.company}\nPhone: ${form.phone}\nEmail: ${form.email}\nService needed: ${form.service}\n\nMessage: ${form.message}`
    );
    setTimeout(() => {
      setSending(false);
      setSent(true);
      window.open(`https://wa.me/27659562884?text=${msg}`, "_blank");
    }, 800);
  };

  return (
    <section id="contact" style={{ background: "#0a0a0a", padding: "6rem 0" }}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <p className="section-label" style={{ marginBottom: ".6rem" }}>GET IN TOUCH</p>
          <h2 className="display-lg" style={{ marginBottom: "1rem" }}>
            Let&apos;s Protect Your <span className="grad-amber">Investment</span>
          </h2>
          <p className="body-lg" style={{ maxWidth: "520px", margin: "0 auto" }}>
            Ready to ensure your concrete meets South African structural standards? Reach out — we respond within 2 business hours.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: "3rem", alignItems: "start" }} className="contact-grid">

          {/* Left: Info */}
          <div>
            <div style={{ marginBottom: "2.5rem" }}>
              <h3 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: "1.25rem", color: "#f5f5f5" }}>Contact Details</h3>

              {[
                {
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="2">
                      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.09 9.81 19.79 19.79 0 01.06 3.18 2 2 0 012.06 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
                    </svg>
                  ),
                  label: "Phone & WhatsApp",
                  content: (
                    <div>
                      <a href="tel:+27659562884" style={{ display: "block", color: "#f5f5f5", textDecoration: "none", fontWeight: 600, transition: "color .2s" }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = "#f59e0b")} onMouseLeave={(e) => (e.currentTarget.style.color = "#f5f5f5")}>
                        065 956 2884
                      </a>
                      <a href="tel:+27671168058" style={{ display: "block", color: "#f5f5f5", textDecoration: "none", fontWeight: 600, transition: "color .2s" }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = "#f59e0b")} onMouseLeave={(e) => (e.currentTarget.style.color = "#f5f5f5")}>
                        067 116 8058
                      </a>
                    </div>
                  ),
                },
                {
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="2">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
                    </svg>
                  ),
                  label: "Email",
                  content: (
                    <a href="mailto:concretequalityassessor@gmail.com"
                      style={{ color: "#f59e0b", textDecoration: "none", fontWeight: 600, wordBreak: "break-all" }}>
                      concretequalityassessor@gmail.com
                    </a>
                  ),
                },
                {
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="2">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
                    </svg>
                  ),
                  label: "Service Area",
                  content: <span style={{ color: "#f5f5f5", fontWeight: 600 }}>Western Cape & surrounding regions</span>,
                },
              ].map((item, i) => (
                <div key={i} style={{ display: "flex", gap: "1rem", marginBottom: "1.25rem" }}>
                  <div style={{
                    width: "2.5rem", height: "2.5rem", borderRadius: ".75rem",
                    background: "rgba(245,158,11,.1)", border: "1px solid rgba(245,158,11,.2)",
                    display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                  }}>
                    {item.icon}
                  </div>
                  <div>
                    <div style={{ fontSize: ".75rem", color: "#6b7280", fontWeight: 600, marginBottom: ".2rem", letterSpacing: ".04em" }}>{item.label.toUpperCase()}</div>
                    {item.content}
                  </div>
                </div>
              ))}
            </div>

            {/* Social buttons */}
            <div style={{ display: "flex", gap: ".75rem", flexWrap: "wrap" }}>
              <a
                href="https://wa.me/27659562884?text=Hi%2C%20I%27d%20like%20to%20enquire%20about%20your%20services."
                target="_blank" rel="noopener noreferrer"
                className="btn-whatsapp"
                style={{ padding: ".65rem 1.25rem", borderRadius: ".875rem", fontSize: ".875rem" }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.553 4.116 1.524 5.847L.057 23.882l6.195-1.448A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.892 0-3.657-.501-5.187-1.377l-.372-.22-3.858.901.939-3.758-.243-.386A9.96 9.96 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
                </svg>
                WhatsApp Us
              </a>
              <a
                href="https://facebook.com/ConcreteQualityAssessor"
                target="_blank" rel="noopener noreferrer"
                className="btn-facebook"
                style={{ padding: ".65rem 1.25rem", borderRadius: ".875rem", fontSize: ".875rem" }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                Follow on Facebook
              </a>
            </div>
          </div>

          {/* Right: Form */}
          <div style={{ background: "#111111", border: "1px solid rgba(255,255,255,.08)", borderRadius: "1.25rem", padding: "2rem" }}>
            {sent ? (
              <div style={{ textAlign: "center", padding: "2rem 0" }}>
                <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>✅</div>
                <h3 style={{ fontSize: "1.3rem", fontWeight: 700, marginBottom: ".75rem" }}>Message Sent!</h3>
                <p style={{ color: "#9ca3af", marginBottom: "1.5rem" }}>
                  Your enquiry has been sent via WhatsApp. We&apos;ll respond within 2 business hours.
                </p>
                <button onClick={() => setSent(false)} className="btn-outline" style={{ padding: ".65rem 1.5rem", borderRadius: ".875rem", fontSize: ".9rem" }}>
                  Send Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <h3 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: "1.5rem" }}>Send us a message</h3>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "1rem" }}>
                  <div>
                    <label style={{ fontSize: ".78rem", fontWeight: 600, color: "#9ca3af", display: "block", marginBottom: ".35rem" }}>Full Name *</label>
                    <input className="cq-input" placeholder="Your name" required value={form.name} onChange={(e) => set("name", e.target.value)}/>
                  </div>
                  <div>
                    <label style={{ fontSize: ".78rem", fontWeight: 600, color: "#9ca3af", display: "block", marginBottom: ".35rem" }}>Company</label>
                    <input className="cq-input" placeholder="Your company" value={form.company} onChange={(e) => set("company", e.target.value)}/>
                  </div>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "1rem" }}>
                  <div>
                    <label style={{ fontSize: ".78rem", fontWeight: 600, color: "#9ca3af", display: "block", marginBottom: ".35rem" }}>Phone</label>
                    <input className="cq-input" placeholder="0XX XXX XXXX" value={form.phone} onChange={(e) => set("phone", e.target.value)}/>
                  </div>
                  <div>
                    <label style={{ fontSize: ".78rem", fontWeight: 600, color: "#9ca3af", display: "block", marginBottom: ".35rem" }}>Email</label>
                    <input className="cq-input" type="email" placeholder="you@company.co.za" value={form.email} onChange={(e) => set("email", e.target.value)}/>
                  </div>
                </div>
                <div style={{ marginBottom: "1rem" }}>
                  <label style={{ fontSize: ".78rem", fontWeight: 600, color: "#9ca3af", display: "block", marginBottom: ".35rem" }}>Service Needed</label>
                  <select className="cq-input" value={form.service} onChange={(e) => set("service", e.target.value)}>
                    <option value="">Select a service…</option>
                    <option>Concrete Cube Testing (SANS 5863)</option>
                    <option>Slump &amp; Workability Testing</option>
                    <option>Non-Destructive Testing</option>
                    <option>Mix Design Verification</option>
                    <option>On-Site Quality Control</option>
                    <option>SANS Compliance Report</option>
                    <option>Failure Investigation</option>
                    <option>Third-Party Inspection</option>
                    <option>Other / General Enquiry</option>
                  </select>
                </div>
                <div style={{ marginBottom: "1.5rem" }}>
                  <label style={{ fontSize: ".78rem", fontWeight: 600, color: "#9ca3af", display: "block", marginBottom: ".35rem" }}>Message *</label>
                  <textarea
                    className="cq-input" rows={4} required
                    placeholder="Tell us about your project — location, size, timeline…"
                    value={form.message} onChange={(e) => set("message", e.target.value)}
                    style={{ resize: "vertical" }}
                  />
                </div>
                <button
                  type="submit"
                  className="btn-amber"
                  disabled={sending}
                  style={{ width: "100%", padding: ".85rem", borderRadius: ".875rem", fontSize: ".95rem", opacity: sending ? .7 : 1 }}
                >
                  {sending ? "Sending…" : "Send via WhatsApp →"}
                </button>
                <p style={{ fontSize: ".75rem", color: "#4b5563", textAlign: "center", marginTop: ".75rem" }}>
                  Your message will open WhatsApp directly — fast, simple, no email delays.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>

      <style>{`@media(max-width:768px){.contact-grid{grid-template-columns:1fr!important;}}`}</style>
    </section>
  );
}
