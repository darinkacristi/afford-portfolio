"use client";

import { useState } from "react";
import { Iso } from "./BrandMark";
import type { VideoSource } from "@/lib/types";

/**
 * Reproductor con *facade*: mientras nadie hace clic solo se muestra una
 * portada estática. El iframe (que en YouTube pesa alrededor de un megabyte
 * de JavaScript) se monta recién al presionar play, así una página con varias
 * piezas no arrastra el peso de todos los reproductores a la vez.
 */
export default function MediaPlayer({
  video,
  cover,
  title,
  ratio = "16 / 9",
}: {
  video: VideoSource;
  cover?: string;
  title: string;
  ratio?: string;
}) {
  const [playing, setPlaying] = useState(false);

  const src = (() => {
    switch (video.kind) {
      case "youtube":
        // Sirve igual para un Short: se usa el ID, no la URL /shorts/
        return `https://www.youtube-nocookie.com/embed/${video.id}?autoplay=1&rel=0&modestbranding=1`;
      case "vimeo":
        return `https://player.vimeo.com/video/${video.id}?autoplay=1&title=0&byline=0`;
      case "bunny":
        return `https://iframe.mediadelivery.net/embed/${video.libraryId}/${video.videoId}?autoplay=true`;
      case "file":
        return video.url;
    }
  })();

  // Sin ID configurado todavía: se muestra el placeholder en vez de un player roto
  const sinFuente =
    (video.kind === "youtube" || video.kind === "vimeo") && !video.id.trim();

  return (
    <div
      className="relative w-full overflow-hidden rounded-marca border border-hueso/10 bg-[#101914]"
      style={{ aspectRatio: ratio }}
    >
      {playing && !sinFuente ? (
        video.kind === "file" ? (
          // eslint-disable-next-line jsx-a11y/media-has-caption
          <video src={src} controls autoPlay playsInline className="h-full w-full object-contain" />
        ) : (
          <iframe
            src={src}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="h-full w-full"
          />
        )
      ) : (
        <button
          type="button"
          onClick={() => !sinFuente && setPlaying(true)}
          aria-label={sinFuente ? "Video no disponible todavía" : `Reproducir ${title}`}
          disabled={sinFuente}
          className="group relative grid h-full w-full place-items-center"
          style={
            cover
              ? { background: `center/cover no-repeat url(${cover})` }
              : { background: "linear-gradient(150deg,#1A2B22,#101914)" }
          }
        >
          {!cover && <Iso width="26%" className="absolute text-brote/20" />}

          {sinFuente ? (
            <span className="relative z-10 rounded-full bg-tinta/70 px-4 py-2 text-[11px] uppercase tracking-[0.16em] text-hueso/50">
              Falta el video
            </span>
          ) : (
            <span className="relative z-10 grid h-[74px] w-[74px] place-items-center rounded-full bg-verde/90 text-hueso backdrop-blur transition-all duration-300 group-hover:scale-110 group-hover:bg-brote group-hover:text-bosque">
              <svg viewBox="0 0 24 24" className="ml-1 h-7 w-7" fill="currentColor">
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
          )}
        </button>
      )}
    </div>
  );
}
