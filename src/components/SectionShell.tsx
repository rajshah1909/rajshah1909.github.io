import type { ReactNode } from "react";

export function SectionShell(props: {
  id: string;
  label: string;
  children: ReactNode;
}) {
  return (
    <section id={props.id} className="scroll-mt-20 border-t border-rule">
      <div className="mx-auto max-w-5xl px-6 py-16 md:grid md:grid-cols-[8rem_1fr] md:gap-8">
        <div className="mb-8 font-mono text-sm text-inkFaint md:mb-0">
          {props.label}
        </div>
        <div className="min-w-0">{props.children}</div>
      </div>
    </section>
  );
}
