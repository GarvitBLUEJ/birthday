import { useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";
import { COPY, FEATURED, type MemoryPhoto } from "@/data/card";
import { Polaroid } from "./polaroid";
import { Heart, StarBurst, ScribbleArrow } from "./doodles";

export function Hero({ onOpen }: { onOpen: (photo: MemoryPhoto) => void }) {
  const frame = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = frame.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    const onMove = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      el.style.setProperty("--px", `${x * 10}px`);
      el.style.setProperty("--py", `${y * 8}px`);
    };
    const onLeave = () => {
      el.style.setProperty("--px", "0px");
      el.style.setProperty("--py", "0px");
    };
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerleave", onLeave);
    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return (
    <section className="relative flex min-h-[92svh] flex-col items-center justify-center px-1 pb-36 pt-14 text-center">
      <Heart className="float-speck text-rose" style={{ top: "11%", left: "8%" }} />
      <StarBurst className="float-speck text-peach" style={{ top: "16%", right: "10%", animationDelay: "1.2s" }} />
      <Heart className="float-speck text-blush-deep" style={{ bottom: "18%", left: "12%", animationDelay: "0.6s" }} />
      <StarBurst className="float-speck text-rose" style={{ bottom: "22%", right: "9%", animationDelay: "1.8s" }} />

      <div className="eyebrow-sticker mb-6">{COPY.eyebrow}</div>

      <h1 className="font-display text-[clamp(2.6rem,11vw,5.4rem)] font-bold italic leading-[0.92] text-balance text-wine">
        {COPY.heading}
        <span className="mt-1 block font-hand text-[clamp(3.2rem,14vw,6.2rem)] font-semibold not-italic leading-[0.9] text-ink">
          {COPY.name}
        </span>
      </h1>

      <p className="mt-6 max-w-[26rem] text-[0.98rem] leading-relaxed text-ink-soft text-pretty">
        {COPY.sub}
      </p>

      <div
        ref={frame}
        className="relative mt-10 w-[min(320px,74vw)]"
        style={{
          transform: "translate(var(--px, 0px), var(--py, 0px))",
          transition: "transform 500ms var(--ease-out-soft)",
        }}
      >
        <span className="pointer-events-none absolute -left-16 top-8 hidden text-rose sm:block">
          <ScribbleArrow />
        </span>
        <span className="pointer-events-none absolute -left-[4.6rem] top-2 hidden rotate-[-12deg] font-hand text-[1.15rem] text-wine sm:block">
          this one
        </span>
        <Polaroid photo={FEATURED} tape="blush" onOpen={onOpen} className="w-full" />
      </div>

      <a
        href="#memories"
        className="scroll-cue mt-12 inline-flex items-center gap-1 font-hand text-[1.15rem] text-ink-soft no-underline"
      >
        {COPY.scrollCue}
        <ChevronDown size={16} strokeWidth={1.75} />
      </a>
    </section>
  );
}
