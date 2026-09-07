"use client";

import { useCallback, useEffect, useState } from "react";

/** Galería con lightbox: flechas y Esc para navegar. */
export default function Gallery({ images, title }: { images: string[]; title: string }) {
  const [open, setOpen] = useState<number | null>(null);

  const mover = useCallback(
    (paso: number) => setOpen((i) => (i === null ? null : (i + paso + images.length) % images.length)),
    [images.length]
  );

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
      if (e.key === "ArrowRight") mover(1);
      if (e.key === "ArrowLeft") mover(-1);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, mover]);

  if (images.length === 0) return null;

  return (
    <>
      <div className="grid gap-3 [grid-template-columns:repeat(auto-fill,minmax(220px,1fr))]">
        {images.map((src, i) => (
          <button
            key={src}
            onClick={() => setOpen(i)}
            className="overflow-hidden rounded-marca border border-hueso/10"
            aria-label={`Abrir imagen ${i + 1} de ${title}`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={src}
              alt={`${title} — imagen ${i + 1}`}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </button>
        ))}
      </div>

      {open !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`Galería de ${title}`}
          className="fixed inset-0 z-[100] grid place-items-center bg-tinta/95 p-6 backdrop-blur"
          onClick={() => setOpen(null)}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={images[open]}
            alt={`${title} — imagen ${open + 1}`}
            className="max-h-[85vh] max-w-full rounded-marca object-contain"
            onClick={(e) => e.stopPropagation()}
          />

          <button
            onClick={() => setOpen(null)}
            aria-label="Cerrar galería"
            className="absolute right-6 top-6 grid h-11 w-11 place-items-center rounded-full border border-hueso/25 text-hueso hover:bg-hueso hover:text-tinta"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>

          {images.length > 1 && (
            <>
              <button
                onClick={(e) => { e.stopPropagation(); mover(-1); }}
                aria-label="Imagen anterior"
                className="absolute left-4 grid h-12 w-12 place-items-center rounded-full border border-hueso/25 text-hueso hover:bg-hueso hover:text-tinta"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round"><path d="M15 5l-7 7 7 7" /></svg>
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); mover(1); }}
                aria-label="Imagen siguiente"
                className="absolute right-4 grid h-12 w-12 place-items-center rounded-full border border-hueso/25 text-hueso hover:bg-hueso hover:text-tinta"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round"><path d="M9 5l7 7-7 7" /></svg>
              </button>
            </>
          )}
        </div>
      )}
    </>
  );
}
