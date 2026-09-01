import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import type { MemoryPhoto } from "@/data/card";
import { Hero } from "@/components/birthday/hero";
import { Gallery } from "@/components/birthday/gallery";
import { Letter } from "@/components/birthday/letter";
import { Masti } from "@/components/birthday/masti";
import { Closing } from "@/components/birthday/closing";
import { Lightbox } from "@/components/birthday/lightbox";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  const [active, setActive] = useState<MemoryPhoto | null>(null);

  return (
    <main className="paper-root">
      <div className="stage">
        <Hero onOpen={setActive} />
        <Gallery onOpen={setActive} />
        <Letter />
        <Masti />
        <Closing onOpen={setActive} />
      </div>
      <Lightbox photo={active} onClose={() => setActive(null)} />
    </main>
  );
}
