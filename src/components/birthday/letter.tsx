import { COPY } from "@/data/card";
import { Reveal } from "./reveal";

export function Letter() {
  return (
    <Reveal as="section" className="py-16">
      <article className="letter">
        <span className="wax" aria-hidden>
          <span className="absolute inset-0 grid place-items-center text-[13px] leading-none text-cream">
            ✦
          </span>
        </span>
        <h2 className="font-hand text-[2rem] leading-none text-wine">{COPY.letterTitle}</h2>
        <p className="mt-5 text-[1.02rem] leading-[1.75] text-ink text-pretty">
          {COPY.letterP1}
        </p>
        <p className="mt-4 text-[1.02rem] leading-[1.75] text-ink text-pretty">
          {COPY.letterP2}
        </p>
        <p className="signoff mt-7 font-hand text-[1.35rem] leading-snug text-wine">
          {COPY.signoff}
          <br />
          {COPY.from}
        </p>
      </article>
    </Reveal>
  );
}
