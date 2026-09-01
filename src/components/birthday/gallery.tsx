import { COPY, GALLERY, type MemoryPhoto } from "@/data/card";
import { Polaroid } from "./polaroid";
import { Reveal } from "./reveal";

export function Gallery({ onOpen }: { onOpen: (photo: MemoryPhoto) => void }) {
  const [a, b, c, d] = GALLERY;

  return (
    <section id="memories" className="relative z-0 pb-8 pt-4">
      <Reveal
        as="p"
        className="relative z-20 mx-auto mb-12 max-w-[24rem] bg-cream/90 px-5 py-3 text-center font-hand text-[1.7rem] leading-snug text-ink"
      >
        this year's <em className="not-italic text-wine">most iconic</em> moments,
        curated with love (and zero chill)
      </Reveal>
      <span className="sr-only">{COPY.galleryLead}</span>

      <div className="grid grid-cols-2 items-start gap-x-3 gap-y-8 sm:gap-x-6 sm:gap-y-12">
        <Reveal delay={40} className="mt-6 sm:mt-10">
          <Polaroid photo={a} tape="left" onOpen={onOpen} />
        </Reveal>
        <Reveal delay={120}>
          <Polaroid photo={b} tape="right" onOpen={onOpen} />
        </Reveal>

        <Reveal delay={80} className="col-span-2 mx-auto w-[min(300px,78%)] sm:w-[min(320px,56%)]">
          <Polaroid photo={c} tape="blush" onOpen={onOpen} />
        </Reveal>

        <Reveal delay={60} className="col-span-2">
          <button
            type="button"
            className="filmstrip mx-auto w-[min(520px,100%)] cursor-zoom-in transition-transform duration-300 ease-[var(--ease-out-soft)] hover:-translate-y-1"
            onClick={() => onOpen(d)}
            aria-label={d.alt}
          >
            <img src={d.src} alt="" draggable={false} />
          </button>
        </Reveal>
      </div>
    </section>
  );
}
