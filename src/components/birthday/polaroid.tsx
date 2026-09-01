import { cn } from "@/lib/utils";
import type { MemoryPhoto } from "@/data/card";

type Tape = "center" | "left" | "right" | "blush" | "none";

export function Polaroid({
  photo,
  className,
  tape = "center",
  onOpen,
}: {
  photo: MemoryPhoto;
  className?: string;
  tape?: Tape;
  onOpen?: (photo: MemoryPhoto) => void;
}) {
  return (
    <button
      type="button"
      className={cn("polaroid", photo.caption && "has-cap", className)}
      style={{ ["--r" as string]: `${photo.rotate}deg` }}
      onClick={() => onOpen?.(photo)}
      aria-label={photo.caption ? `${photo.alt}. ${photo.caption}` : photo.alt}
    >
      {tape !== "none" && (
        <span
          className={cn(
            "tape",
            tape === "left" && "left",
            tape === "right" && "right",
            tape === "blush" && "blush",
          )}
          aria-hidden
        />
      )}
      <img src={photo.src} alt="" draggable={false} />
      {photo.caption ? <span className="cap">{photo.caption}</span> : null}
    </button>
  );
}
