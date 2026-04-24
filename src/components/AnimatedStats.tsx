"use client";

import { useState, useEffect, useRef } from "react";

const STATS = [
  { end: 15,   suffix: "+", label: "Years of Experience",    sub: "in SA construction" },
  { end: 850,  suffix: "+", label: "Projects Completed",     sub: "across the Western Cape" },
  { end: 25000,suffix: "+", label: "Tests Conducted",        sub: "cube, slump & NDT" },
  { end: 98,   suffix: "%", label: "Client Retention Rate",  sub: "they come back to us" },
];

function Counter({ end, suffix, duration = 1800 }: { end: number; suffix: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting && !started) setStarted(true); },
      { threshold: 0.5 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    let start: number | null = null;
    const step = (ts: number) => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / duration, 1);
      const ease = 1 - Math.pow(1 - p, 3);
      setCount(Math.round(end * ease));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [started, end, duration]);

  return (
    <span ref={ref}>
      {count.toLocaleString("en-ZA")}{suffix}
    </span>
  );
}

export default function AnimatedStats() {
  return (
    <section style={{ background: "linear-gradient(135deg,#111111,#0f0f0f)", borderTop: "1px solid rgba(255,255,255,.06)", borderBottom: "1px solid rgba(255,255,255,.06)" }}>
      <div className="container" style={{ padding: "4rem 1.5rem" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "1.5rem", textAlign: "center" }} className="stats-grid">
          {STATS.map((s) => (
            <div key={s.label} style={{ padding: "1.5rem 1rem" }}>
              <div style={{
                fontSize: "clamp(2.2rem,4vw,3rem)", fontWeight: 900, lineHeight: 1,
                background: "linear-gradient(135deg,#fbbf24,#f59e0b)",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
                marginBottom: ".4rem",
              }}>
                <Counter end={s.end} suffix={s.suffix} />
              </div>
              <div style={{ fontSize: "1rem", fontWeight: 700, color: "#f5f5f5", marginBottom: ".25rem" }}>{s.label}</div>
              <div style={{ fontSize: ".8rem", color: "#6b7280" }}>{s.sub}</div>
            </div>
          ))}
        </div>
      </div>
      <style>{`@media(max-width:640px){.stats-grid{grid-template-columns:repeat(2,1fr)!important;}}`}</style>
    </section>
  );
}
