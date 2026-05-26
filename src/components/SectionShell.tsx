import type { ReactNode } from "react";

export function SectionShell(props: {
  id: string;
  title: string;
  eyebrow?: string;
  children: ReactNode;
  subtitle?: string;
}) {
  return (
    <section id={props.id} className="mx-auto max-w-6xl px-5 py-16 scroll-mt-20">
      <div className="mb-10">
        {props.eyebrow ? (
          <div className="mb-3 text-xs font-semibold tracking-[0.18em] text-white/50">
            {props.eyebrow}
          </div>
        ) : null}
        <h2 className="text-2xl font-semibold tracking-tight">{props.title}</h2>
        {props.subtitle ? (
          <p className="mt-3 max-w-3xl text-white/65">{props.subtitle}</p>
        ) : null}
      </div>
      {props.children}
    </section>
  );
}

