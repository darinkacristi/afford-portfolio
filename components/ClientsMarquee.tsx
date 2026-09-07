import { clients } from "@/data/clients";

/**
 * Carrusel continuo de marcas.
 *
 * El truco del bucle sin salto: se renderiza la lista dos veces y la animación
 * desplaza exactamente un 50%. Al terminar el ciclo, la segunda copia está en
 * la posición donde arrancó la primera, así que el reinicio no se ve.
 *
 * Los degradados laterales evitan que los logos aparezcan y desaparezcan de
 * golpe contra el borde de la pantalla.
 */
export default function ClientsMarquee() {
  const fila = [...clients, ...clients];

  return (
    <div className="relative overflow-hidden border-y border-hueso/10 py-10">
      {/* Difuminado en los bordes */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-tinta to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-tinta to-transparent" />

      <div className="group flex w-max animate-slide items-center hover:[animation-play-state:paused] motion-reduce:animate-none motion-reduce:overflow-x-auto">
        {fila.map((c, i) => (
          <div
            key={`${c.name}-${i}`}
            className="flex shrink-0 items-center px-10"
            aria-hidden={i >= clients.length}
          >
            {c.logo ? (
              <span className="flex h-12 w-[180px] items-center justify-center md:h-14 md:w-[210px]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={c.logo}
                  alt={c.name}
                  style={{ transform: `scale(${c.scale ?? 1})` }}
                  className={`max-h-full max-w-full object-contain opacity-70 transition-opacity duration-300 hover:opacity-100 ${
                    c.invert ? "brightness-0 invert" : ""
                  }`}
                />
              </span>
            ) : (
              <span className="whitespace-nowrap font-display text-[clamp(20px,2.6vw,30px)] text-[#7E8B85] transition-colors duration-300 hover:text-hueso">
                {c.name}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
