import {
  BrainCircuit,
  Cloud,
  Code2,
  Cpu,
  Database,
} from "lucide-react";
import type { ReactNode } from "react";
import { usePortfolio } from "../hooks/usePortfolio";
import { SectionShell } from "./SectionShell";

const icons: Record<string, ReactNode> = {
  ai: <BrainCircuit size={18} />,
  ml: <Cpu size={18} />,
  programming: <Code2 size={18} />,
  data: <Database size={18} />,
  cloud: <Cloud size={18} />,
};

export function ServicesSection() {
  const { capabilities } = usePortfolio();

  return (
    <SectionShell
      id="services"
      title="What I Build"
      subtitle="AI · ML · Programming · Data · Cloud — structured around production systems I've shipped."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {capabilities.map((cap, idx) => (
          <div
            key={cap.id}
            className="rounded-2xl border border-white/10 bg-white/[0.02] p-6"
          >
            <div className="flex items-center justify-between">
              <div className="text-xs font-semibold tracking-[0.16em] text-white/45">
                {String(idx + 1).padStart(2, "0")}
              </div>
              <div className="text-white/55">{icons[cap.id] ?? null}</div>
            </div>

            <h3 className="mt-3 text-lg font-semibold tracking-tight">
              {cap.title}
            </h3>

            <p className="mt-2 text-sm leading-relaxed text-white/65 break-normal">
              {cap.focus}
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {cap.tools.map((tool) => (
                <span
                  key={tool}
                  className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-white/75"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </SectionShell>
  );
}
