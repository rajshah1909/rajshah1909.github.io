import { BrainCircuit, Cloud, Database, Server } from "lucide-react";
import type { ReactNode } from "react";
import { usePortfolio } from "../hooks/usePortfolio";
import { SectionShell } from "./SectionShell";

const icons: Record<string, ReactNode> = {
  backend: <Server size={18} />,
  "ai-llm": <BrainCircuit size={18} />,
  data: <Database size={18} />,
  cloud: <Cloud size={18} />,
};

export function ServicesSection() {
  const { capabilities } = usePortfolio();

  return (
    <SectionShell
      id="services"
      title="What I Build"
      subtitle="Capabilities I ship in production — plus the tools I use to deliver them."
    >
      <div className="grid gap-4 md:grid-cols-2">
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

            <h3 className="mt-3 text-lg font-semibold">{cap.title}</h3>

            <p className="mt-4 text-xs font-semibold uppercase tracking-[0.14em] text-white/45">
              Capabilities
            </p>
            <ul className="mt-2 space-y-2 text-sm text-white/70">
              {cap.items.map((item) => (
                <li
                  key={item}
                  className="rounded-xl border border-white/10 bg-white/[0.02] px-4 py-2.5"
                >
                  {item}
                </li>
              ))}
            </ul>

            <p className="mt-5 text-xs font-semibold uppercase tracking-[0.14em] text-white/45">
              Stack
            </p>
            <div className="mt-2 flex flex-wrap gap-2">
              {cap.tools.map((tool) => (
                <span
                  key={tool}
                  className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-white/70"
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
