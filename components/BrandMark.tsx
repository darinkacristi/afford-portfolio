/**
 * Marca de Afford renderizada como máscara CSS: hereda el color del texto
 * (className="text-hueso", "text-verde", …) y conserva siempre la proporción
 * original del manual. Nunca se deforma ni cambia de color fuera de paleta.
 */
export function Logo({ className = "", width = 120 }: { className?: string; width?: number }) {
  return (
    <span
      className={`marca-logo block ${className}`}
      style={{ width }}
      role="img"
      aria-label="Afford"
    />
  );
}

export function Iso({ className = "", width = 60 }: { className?: string; width?: number | string }) {
  return <span className={`marca-iso block ${className}`} style={{ width }} aria-hidden="true" />;
}
