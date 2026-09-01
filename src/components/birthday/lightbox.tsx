import { useEffect } from "react";
import { X } from "lucide-react";
import type { MemoryPhoto } from "@/data/card";

export function Lightbox({
  photo,
  onClose,
}: {
  photo: MemoryPhoto | null;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!photo) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [photo, onClose]);

  if (!photo) return null;

  return (
    <div className="lightbox" role="dialog" aria-modal="true" aria-label={photo.alt} onClick={onClose}>
      <button
        type="button"
        className="close-masti"
        style={{ animationDelay: "0ms", opacity: 1 }}
        onClick={onClose}
        aria-label="Close photo"
      >
        <X size={20} strokeWidth={1.75} />
      </button>
      <div
        className={`lightbox-card relative ${photo.caption ? "has-cap" : ""}`}
        style={{ transform: `rotate(${photo.rotate * 0.4}deg)` }}
        onClick={(e) => e.stopPropagation()}
      >
        <span className="tape" aria-hidden />
        <img src={photo.src} alt={photo.alt} />
        {photo.caption ? <span className="cap">{photo.caption}</span> : null}
      </div>
    </div>
  );
}
