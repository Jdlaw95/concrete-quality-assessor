"use client";

import { useEffect, useRef } from "react";

type Shape = "hex" | "tri" | "sq" | "dia";

interface Particle {
  x: number; y: number;
  vx: number; vy: number;
  size: number;
  rotation: number;
  rotSpeed: number;
  shape: Shape;
  r: number; g: number; b: number; a: number;
}

function drawHex(ctx: CanvasRenderingContext2D, size: number) {
  ctx.beginPath();
  for (let i = 0; i < 6; i++) {
    const a = (Math.PI / 3) * i - Math.PI / 6;
    const x = size * Math.cos(a), y = size * Math.sin(a);
    i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
  }
  ctx.closePath();
}

function drawTri(ctx: CanvasRenderingContext2D, size: number) {
  ctx.beginPath();
  ctx.moveTo(0, -size);
  ctx.lineTo(size * 0.866, size * 0.5);
  ctx.lineTo(-size * 0.866, size * 0.5);
  ctx.closePath();
}

function drawDia(ctx: CanvasRenderingContext2D, size: number) {
  ctx.beginPath();
  ctx.moveTo(0, -size);
  ctx.lineTo(size * 0.6, 0);
  ctx.lineTo(0, size);
  ctx.lineTo(-size * 0.6, 0);
  ctx.closePath();
}

const PALETTES: [number, number, number][] = [
  [245, 158, 11],   // amber
  [99, 102, 241],   // indigo
  [16, 185, 129],   // emerald
  [255, 255, 255],  // white
  [156, 163, 175],  // grey
  [249, 115, 22],   // orange
];

export default function ParticleCanvas({ count = 55 }: { count?: number }) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf: number;
    const particles: Particle[] = [];

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    const spawn = () => {
      particles.length = 0;
      const shapes: Shape[] = ["hex", "tri", "sq", "dia"];
      for (let i = 0; i < count; i++) {
        const [r, g, b] = PALETTES[Math.floor(Math.random() * PALETTES.length)];
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.28,
          vy: (Math.random() - 0.5) * 0.28,
          size: Math.random() * 3.5 + 1.5,
          rotation: Math.random() * Math.PI * 2,
          rotSpeed: (Math.random() - 0.5) * 0.015,
          shape: shapes[Math.floor(Math.random() * shapes.length)],
          r, g, b,
          a: Math.random() * 0.45 + 0.1,
        });
      }
    };

    const tick = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (const p of particles) {
        p.x += p.vx; p.y += p.vy;
        p.rotation += p.rotSpeed;
        if (p.x < -20) p.x = canvas.width + 20;
        if (p.x > canvas.width + 20) p.x = -20;
        if (p.y < -20) p.y = canvas.height + 20;
        if (p.y > canvas.height + 20) p.y = -20;

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotation);
        ctx.fillStyle = `rgba(${p.r},${p.g},${p.b},${p.a})`;
        ctx.strokeStyle = `rgba(${p.r},${p.g},${p.b},${Math.min(p.a * 1.4, 1)})`;
        ctx.lineWidth = 0.4;

        switch (p.shape) {
          case "hex": drawHex(ctx, p.size); break;
          case "tri": drawTri(ctx, p.size); break;
          case "dia": drawDia(ctx, p.size); break;
          default:
            ctx.beginPath();
            ctx.rect(-p.size, -p.size, p.size * 2, p.size * 2);
            break;
        }
        ctx.fill();
        ctx.stroke();
        ctx.restore();
      }
      raf = requestAnimationFrame(tick);
    };

    resize();
    spawn();
    tick();

    const onResize = () => { resize(); spawn(); };
    window.addEventListener("resize", onResize);
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", onResize); };
  }, [count]);

  return (
    <canvas
      ref={ref}
      style={{
        position: "absolute", inset: 0, width: "100%", height: "100%",
        pointerEvents: "none", opacity: 0.65,
      }}
    />
  );
}
