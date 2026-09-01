import { useCallback, useEffect, useRef, useState } from "react";
import { X } from "lucide-react";
import { COPY, MASTI_PHOTOS } from "@/data/card";
import { Reveal } from "./reveal";

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  g: number;
  rot: number;
  vr: number;
  w: number;
  h: number;
  color: string;
  life: number;
  max: number;
};

const COLORS = ["#7A3A44", "#C27A76", "#E3B496", "#E7C4BE", "#FBF6EE", "#cfe8de"];

export function Masti() {
  const [open, setOpen] = useState(false);
  const [tick, setTick] = useState(0);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const parts = useRef<Particle[]>([]);
  const raf = useRef<number>(0);
  const reduced = useRef(false);

  useEffect(() => {
    reduced.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }, []);

  const burst = useCallback(() => {
    const c = canvasRef.current;
    if (!c) return;
    const cx = c.width / 2;
    const cy = c.height * 0.38;
    for (let i = 0; i < 90; i++) {
      parts.current.push({
        x: cx + (Math.random() - 0.5) * 80,
        y: cy,
        vx: (Math.random() - 0.5) * 11,
        vy: Math.random() * -11 - 3,
        g: 0.18 + Math.random() * 0.14,
        rot: Math.random() * 360,
        vr: (Math.random() - 0.5) * 12,
        w: 5 + Math.random() * 7,
        h: 8 + Math.random() * 10,
        color: COLORS[i % COLORS.length],
        life: 150,
        max: 150,
      });
    }
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const loop = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      parts.current.forEach((p) => {
        p.vy += p.g;
        p.x += p.vx;
        p.y += p.vy;
        p.rot += p.vr;
        p.life--;
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate((p.rot * Math.PI) / 180);
        ctx.globalAlpha = Math.max(0, p.life / p.max);
        ctx.fillStyle = p.color;
        ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
        ctx.restore();
      });
      parts.current = parts.current.filter((p) => p.life > 0 && p.y < canvas.height + 40);
      raf.current = requestAnimationFrame(loop);
    };
    if (!reduced.current) raf.current = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf.current);
      window.removeEventListener("resize", resize);
    };
  }, []);

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open, close]);

  const fire = () => {
    if (!reduced.current) burst();
    setOpen(true);
    setTick((n) => n + 1);
  };

  return (
    <>
      <Reveal className="press-wrap py-10 text-center">
        <p className="mb-5 font-hand text-xl text-ink-soft">a little chaos, as a treat</p>
        <button type="button" className="masti-btn" onClick={fire} aria-expanded={open}>
          {COPY.mastiBtn}
        </button>
        <div className="mt-3.5 text-[0.82rem] text-ink-soft">{COPY.mastiHint}</div>
      </Reveal>

      <canvas id="confetti" ref={canvasRef} aria-hidden />

      <div
        className={`masti-overlay ${open ? "open" : ""}`}
        aria-hidden={!open}
        role="dialog"
        aria-label="Masti photo surprise"
        onClick={close}
      >
        {open && (
          <>
            <button
              type="button"
              className="close-masti"
              onClick={close}
              aria-label="Close photo collage"
            >
              <X size={20} strokeWidth={1.75} />
            </button>
            {MASTI_PHOTOS.map((p, i) => (
              <figure
                key={`${p.id}-${tick}`}
                className={`pop-photo ${reduced.current ? "settled" : "flying"}`}
                data-slot={p.id}
                style={{
                  left: p.left,
                  top: p.top,
                  zIndex: p.z,
                  animationDelay: reduced.current ? "0ms" : `${i * 110}ms`,
                  ["--rotation" as string]: p.rotate,
                  ["--from-x" as string]: p.fromX,
                  ["--from-y" as string]: p.fromY,
                  ["--mid-x" as string]: p.midX,
                  ["--mid-y" as string]: p.midY,
                  ["--from-r" as string]: p.fromR,
                  ["--float-delay" as string]: `${i * -0.45}s`,
                }}
                onClick={(e) => e.stopPropagation()}
                onAnimationEnd={(e) => {
                  if (e.animationName === "photoFly" && !reduced.current) {
                    e.currentTarget.classList.remove("flying");
                    e.currentTarget.classList.add("settled");
                  }
                }}
              >
                <img src={p.src} alt={p.alt} draggable={false} />
              </figure>
            ))}
          </>
        )}
      </div>
    </>
  );
}
