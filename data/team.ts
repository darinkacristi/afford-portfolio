import type { TeamMember } from "@/lib/types";

// Las fotos van en /public/about/<slug>.jpg — sin foto se muestra la inicial
export const team: TeamMember[] = [
  { slug: "baithiare", name: "Baithiare Vásquez", role: "Producción audiovisual" },
  { slug: "darinka", name: "Darinka Cristi", role: "Producción audiovisual" },
  { slug: "camila", name: "Camila González", role: "Diseño gráfico" },
];

export function memberBySlug(slug: string) {
  return team.find((m) => m.slug === slug);
}
