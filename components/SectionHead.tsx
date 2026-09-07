import Reveal from "./Reveal";
import type { ReactNode } from "react";

export default function SectionHead({
  eyebrow,
  title,
  outline,
  lead,
}: {
  eyebrow: string;
  title: ReactNode;
  outline: ReactNode;
  lead?: string;
}) {
  return (
    <Reveal>
      <div className="mb-[clamp(40px,5vw,64px)] grid max-w-wrap gap-5 md:grid-cols-[1.15fr_.85fr] md:items-end md:gap-12">
        <div>
          <p className="eyebrow">{eyebrow}</p>
          <h2 style={{ fontSize: "clamp(36px,5.6vw,72px)" }}>
            {title}
            <br />
            <span className="outline">{outline}</span>
          </h2>
        </div>
        {lead && <p className="lead">{lead}</p>}
      </div>
    </Reveal>
  );
}
