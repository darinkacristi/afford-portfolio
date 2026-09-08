"use client";

import { useState } from "react";
import { siteConfig } from "@/lib/site";

type Estado = "listo" | "enviando" | "enviado" | "error";

/**
 * Formulario de contacto.
 *
 * Envía a /api/contacto, que despacha el correo por el SMTP de Hostinger. Las
 * credenciales del buzón viven solo en las variables de entorno de Vercel: el
 * navegador nunca las ve.
 */
export default function ContactForm() {
  const [estado, setEstado] = useState<Estado>("listo");
  const [error, setError] = useState("");

  async function enviar(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const datos = new FormData(form);

    const nombre = String(datos.get("nombre") ?? "").trim();
    const correo = String(datos.get("correo") ?? "").trim();
    const mensaje = String(datos.get("mensaje") ?? "").trim();

    if (!nombre || !mensaje) {
      setError("Falta tu nombre o el mensaje.");
      return;
    }
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(correo)) {
      setError("Revisa el correo, no parece válido.");
      return;
    }

    setError("");
    setEstado("enviando");

    try {
      const res = await fetch("/api/contacto", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nombre,
          correo,
          mensaje,
          botcheck: datos.get("botcheck") ?? "",
        }),
      });
      if (!res.ok) throw new Error("fallo");
      setEstado("enviado");
    } catch {
      setEstado("error");
    }
  }

  if (estado === "enviado") {
    return (
      <div className="mx-auto max-w-[460px] rounded-marca border border-brote/40 px-5 py-7 text-center">
        <svg viewBox="0 0 24 24" className="mx-auto h-7 w-7 text-brote" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 12l5 5L20 7" />
        </svg>
        <p className="mt-2 text-[16px] text-hueso">Mensaje enviado</p>
        <p className="mt-1 text-[13px] text-[#93A29A]">Te respondemos dentro del día hábil.</p>
      </div>
    );
  }

  return (
    <form onSubmit={enviar} className="mx-auto max-w-[460px] text-left">
      {/* Trampa antispam: invisible para las personas, irresistible para los bots */}
      <input
        type="text"
        name="botcheck"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      <div className="mb-3 grid gap-3 [grid-template-columns:repeat(auto-fit,minmax(160px,1fr))]">
        <div>
          <label htmlFor="nombre" className="mb-1.5 block text-[12px] text-[#93A29A]">
            Nombre
          </label>
          <input
            id="nombre"
            name="nombre"
            type="text"
            placeholder="María Pérez"
            onInput={() => setError("")}
            className="w-full rounded-lg border border-hueso/20 bg-hueso/5 px-3 py-2.5 text-sm text-hueso outline-none transition-colors placeholder:text-[#6E7B75] focus:border-brote"
          />
        </div>
        <div>
          <label htmlFor="correo" className="mb-1.5 block text-[12px] text-[#93A29A]">
            Correo
          </label>
          <input
            id="correo"
            name="correo"
            type="email"
            placeholder="maria@empresa.cl"
            onInput={() => setError("")}
            className="w-full rounded-lg border border-hueso/20 bg-hueso/5 px-3 py-2.5 text-sm text-hueso outline-none transition-colors placeholder:text-[#6E7B75] focus:border-brote"
          />
        </div>
      </div>

      <label htmlFor="mensaje" className="mb-1.5 block text-[12px] text-[#93A29A]">
        Qué necesitas
      </label>
      <textarea
        id="mensaje"
        name="mensaje"
        rows={3}
        placeholder="Necesitamos video para una campaña de dos semanas."
        onInput={() => setError("")}
        className="w-full resize-y rounded-lg border border-hueso/20 bg-hueso/5 px-3 py-2.5 text-sm text-hueso outline-none transition-colors placeholder:text-[#6E7B75] focus:border-brote"
      />

      {error && <p className="mt-2 text-[13px] text-[#F09595]">{error}</p>}

      {estado === "error" && (
        <p className="mt-2 text-[13px] text-[#F09595]">
          No se pudo enviar. Escríbenos por WhatsApp o a {siteConfig.email}.
        </p>
      )}

      <button
        type="submit"
        disabled={estado === "enviando"}
        className="mt-3.5 w-full rounded-full border border-hueso/35 px-6 py-3 text-[15px] font-medium text-hueso transition-colors hover:bg-hueso hover:text-tinta disabled:opacity-50 disabled:hover:bg-transparent disabled:hover:text-hueso"
      >
        {estado === "enviando" ? "Enviando…" : "Enviar mensaje"}
      </button>
    </form>
  );
}
