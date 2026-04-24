"use client";

import { useState, useEffect } from "react";

function abrams(wc: number) {
  // Modified Abrams' law: fc28 = K1 / K2^(W/C)
  return Math.round(96 / Math.pow(4.0, wc));
}

function gradeFromStrength(fc: number) {
  if (fc >= 60) return { grade: "M60", color: "#10b981" };
  if (fc >= 50) return { grade: "M50", color: "#14b8a6" };
  if (fc >= 45) return { grade: "M45", color: "#6366f1" };
  if (fc >= 40) return { grade: "M40", color: "#8b5cf6" };
  if (fc >= 35) return { grade: "M35", color: "#f59e0b" };
  if (fc >= 30) return { grade: "M30", color: "#f97316" };
  if (fc >= 25) return { grade: "M25", color: "#ef4444" };
  if (fc >= 20) return { grade: "M20", color: "#dc2626" };
  return { grade: "M15", color: "#991b1b" };
}

const PRESETS = [
  { label: "High Strength (HPC)", wc: 0.32, cement: 440 },
  { label: "Standard Structural", wc: 0.50, cement: 320 },
  { label: "General Purpose", wc: 0.60, cement: 280 },
  { label: "Plain Concrete", wc: 0.70, cement: 240 },
];

export default function LivePreview() {
  const [wc, setWc] = useState(0.48);
  const [cement, setCement] = useState(340);
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  const strength = abrams(wc);
  const { grade, color } = gradeFromStrength(strength);

  // Gauge
  const radius = 72;
  const circ = 2 * Math.PI * radius;
  const maxStrength = 90;
  const pct = Math.min(strength / maxStrength, 1);
  const offset = circ - pct * circ;

  // Score
  let score = 0;
  if (wc <= 0.35) score = 95;
  else if (wc <= 0.40) score = 87;
  else if (wc <= 0.45) score = 80;
  else if (wc <= 0.50) score = 72;
  else if (wc <= 0.55) score = 63;
  else if (wc <= 0.60) score = 53;
  else if (wc <= 0.65) score = 43;
  else score = 32;

  if (cement >= 400) score = Math.min(100, score + 5);
  else if (cement < 260) score = Math.max(0, score - 8);

  const qualityLabel =
    score >= 85 ? "Excellent" :
    score >= 70 ? "Good" :
    score >= 55 ? "Satisfactory" :
    score >= 40 ? "Poor" : "Unacceptable";

  const application =
    grade === "M60" ? "High-rise, prestressed, marine" :
    grade === "M50" ? "High-rise buildings, bridges" :
    grade === "M45" ? "Elevated structures, marine" :
    grade === "M40" ? "Heavy civil engineering" :
    grade === "M35" ? "Pre-tensioned concrete" :
    grade === "M30" ? "Prestressed structures" :
    grade === "M25" ? "Slabs, beams, columns" :
    grade === "M20" ? "Standard RCC construction" :
    "Plain concrete, footings";

  if (!mounted) {
    return (
      <div style={{
        borderRadius: "1.5rem", padding: "2rem",
        background: "rgba(255,255,255,.04)",
        border: "1px solid rgba(255,255,255,.08)",
        height: "460px",
        display: "flex", alignItems: "center", justifyContent: "center",
        color: "#6b7280", fontSize: ".9rem",
      }}>
        Loading predictor…
      </div>
    );
  }

  return (
    <div
      style={{
        borderRadius: "1.5rem", overflow: "hidden",
        border: "1px solid rgba(245,158,11,.2)",
        background: "rgba(8,10,15,.9)",
        backdropFilter: "blur(20px)",
        boxShadow: "0 24px 60px rgba(0,0,0,.5), 0 0 40px rgba(245,158,11,.08)",
        position: "relative",
      }}
      className="anim-glow-pulse"
    >
      {/* Header */}
      <div style={{
        padding: "1rem 1.25rem",
        borderBottom: "1px solid rgba(255,255,255,.06)",
        display: "flex", alignItems: "center", gap: ".75rem",
        background: "rgba(245,158,11,.04)",
      }}>
        <div style={{ display: "flex", gap: ".35rem" }}>
          {["#ef4444","#f59e0b","#10b981"].map((c) => (
            <div key={c} style={{ width: "10px", height: "10px", borderRadius: "50%", background: c, opacity: .7 }}/>
          ))}
        </div>
        <span style={{ fontSize: ".8rem", color: "#6b7280", fontFamily: "var(--font-mono, monospace)" }}>
          live-strength-predictor.tsx
        </span>
        <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: ".4rem", color: "#10b981", fontSize: ".75rem", fontWeight: 600 }}>
          <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#10b981" }} className="anim-pulse-glow"/>
          LIVE
        </div>
      </div>

      <div style={{ padding: "1.5rem" }}>
        {/* Presets */}
        <div style={{ display: "flex", gap: ".4rem", marginBottom: "1.25rem", flexWrap: "wrap" }}>
          {PRESETS.map((p) => (
            <button
              key={p.label}
              onClick={() => { setWc(p.wc); setCement(p.cement); }}
              style={{
                padding: ".25rem .7rem", borderRadius: "9999px",
                fontSize: ".72rem", fontWeight: 500,
                border: "1px solid rgba(255,255,255,.1)",
                background: Math.abs(wc - p.wc) < 0.01 ? "rgba(245,158,11,.15)" : "transparent",
                color: Math.abs(wc - p.wc) < 0.01 ? "#f59e0b" : "#6b7280",
                cursor: "pointer", transition: "all .2s ease",
              }}
            >
              {p.label}
            </button>
          ))}
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "1.5rem" }}>
          {/* Gauge */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: ".5rem" }}>
            <div style={{ position: "relative", display: "inline-flex" }}>
              <svg width="160" height="160" style={{ transform: "rotate(-90deg)" }}>
                <circle cx="80" cy="80" r={radius} fill="none" stroke="rgba(255,255,255,.05)" strokeWidth="10"/>
                <circle
                  cx="80" cy="80" r={radius} fill="none"
                  stroke={color} strokeWidth="10"
                  strokeLinecap="round"
                  strokeDasharray={circ}
                  strokeDashoffset={offset}
                  style={{ transition: "stroke-dashoffset .6s cubic-bezier(.4,0,.2,1), stroke .4s ease" }}
                />
              </svg>
              <div style={{
                position: "absolute", inset: 0,
                display: "flex", flexDirection: "column",
                alignItems: "center", justifyContent: "center",
              }}>
                <span style={{ fontSize: "1.9rem", fontWeight: 800, color, lineHeight: 1, transition: "color .4s ease" }}>
                  {strength}
                </span>
                <span style={{ fontSize: ".65rem", color: "#6b7280", fontWeight: 600 }}>MPa</span>
              </div>
            </div>
            <div style={{
              display: "inline-flex", alignItems: "center", gap: ".4rem",
              padding: ".25rem .75rem", borderRadius: "9999px",
              background: `${color}18`, border: `1px solid ${color}35`,
            }}>
              <span style={{ fontSize: ".85rem", fontWeight: 800, color }}>Grade {grade}</span>
            </div>
          </div>

          {/* Sliders */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem", justifyContent: "center" }}>
            <div>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: ".4rem" }}>
                <label style={{ fontSize: ".78rem", color: "#9ca3af", fontWeight: 600 }}>W/C Ratio</label>
                <span style={{ fontSize: ".78rem", color: "#f59e0b", fontWeight: 700, fontFamily: "var(--font-mono, monospace)" }}>{wc.toFixed(2)}</span>
              </div>
              <input type="range" min="0.30" max="0.80" step="0.01" value={wc}
                onChange={(e) => setWc(parseFloat(e.target.value))}/>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: ".68rem", color: "#4b5563", marginTop: ".2rem" }}>
                <span>0.30 (best)</span><span>0.80 (worst)</span>
              </div>
            </div>

            <div>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: ".4rem" }}>
                <label style={{ fontSize: ".78rem", color: "#9ca3af", fontWeight: 600 }}>Cement</label>
                <span style={{ fontSize: ".78rem", color: "#6366f1", fontWeight: 700, fontFamily: "var(--font-mono, monospace)" }}>{cement} kg/m³</span>
              </div>
              <input type="range" min="200" max="500" step="10" value={cement}
                onChange={(e) => setCement(parseInt(e.target.value))}/>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: ".68rem", color: "#4b5563", marginTop: ".2rem" }}>
                <span>200</span><span>500 kg/m³</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom info bar */}
        <div style={{
          borderRadius: "1rem", padding: "1rem 1.15rem",
          background: "rgba(255,255,255,.03)", border: "1px solid rgba(255,255,255,.06)",
          display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: ".75rem",
        }}>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: ".7rem", color: "#6b7280", marginBottom: ".2rem" }}>Quality Score</div>
            <div style={{ fontSize: "1.1rem", fontWeight: 800, color: color }}>{score}/100</div>
            <div style={{ fontSize: ".68rem", color: "#4b5563" }}>{qualityLabel}</div>
          </div>
          <div style={{ textAlign: "center", borderLeft: "1px solid rgba(255,255,255,.06)", borderRight: "1px solid rgba(255,255,255,.06)" }}>
            <div style={{ fontSize: ".7rem", color: "#6b7280", marginBottom: ".2rem" }}>28-day fc</div>
            <div style={{ fontSize: "1.1rem", fontWeight: 800, color: "#f9fafb" }}>{strength} MPa</div>
            <div style={{ fontSize: ".68rem", color: "#4b5563" }}>predicted</div>
          </div>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: ".7rem", color: "#6b7280", marginBottom: ".2rem" }}>Application</div>
            <div style={{ fontSize: ".72rem", fontWeight: 600, color: "#9ca3af", lineHeight: 1.3 }}>{application}</div>
          </div>
        </div>

        <div style={{ textAlign: "center", marginTop: "1rem" }}>
          <a
            href="/assess"
            style={{
              fontSize: ".8rem", color: "#f59e0b", textDecoration: "none",
              fontWeight: 600, display: "inline-flex", alignItems: "center", gap: ".3rem",
              opacity: .85, transition: "opacity .2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = ".85")}
          >
            Full 8-factor assessment →
          </a>
        </div>
      </div>
    </div>
  );
}
