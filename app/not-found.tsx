import Link from "next/link";
import { Iso } from "@/components/BrandMark";

export default function NotFound() {
  return (
    <main className="dark-block grid min-h-screen place-items-center bg-tinta px-6 text-center text-hueso">
      <div>
        <Iso width={90} className="mx-auto mb-8 text-verde" />
        <h1 className="mb-4" style={{ fontSize: "clamp(40px,7vw,80px)" }}>
          Esta página
          <br />
          <span className="outline">no existe.</span>
        </h1>
        <p className="lead mx-auto mb-8">La dirección que buscas no está aquí.</p>
        <Link href="/" className="btn">
          Volver al inicio
        </Link>
      </div>
    </main>
  );
}
