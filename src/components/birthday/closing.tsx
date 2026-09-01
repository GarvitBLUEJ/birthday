import { CLOSING_PHOTO, COPY, type MemoryPhoto } from "@/data/card";
import { Polaroid } from "./polaroid";
import { Reveal } from "./reveal";

export function Closing({ onOpen }: { onOpen: (photo: MemoryPhoto) => void }) {
  return (
    <section className="pb-6 pt-8">
      <Reveal className="mx-auto w-[min(280px,70%)]">
        <Polaroid photo={CLOSING_PHOTO} tape="center" onOpen={onOpen} />
      </Reveal>
      <Reveal delay={100} as="p" className="mt-8 text-center font-hand text-[1.55rem] leading-snug text-wine">
        {COPY.signoff}
      </Reveal>
      <footer className="mt-14 pb-4 text-center font-display text-sm text-ink-soft">
        {COPY.footer}
      </footer>
    </section>
  );
}
