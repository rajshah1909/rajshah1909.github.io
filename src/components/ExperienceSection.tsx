import { SectionShell } from "./SectionShell";
import { usePortfolio } from "../hooks/usePortfolio";

function Num(props: { n: number }) {
  return (
    <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-sm font-semibold text-white/80">
      {String(props.n).padStart(2, "0")}
    </div>
  );
}

export function ExperienceSection() {
  const { experience } = usePortfolio();

  return (
    <SectionShell
      id="experience"
      title="Experience"
      subtitle="Roles focused on shipping production-oriented ML + analytics."
    >
      <div className="space-y-6">
        {experience.map((e, idx) => (
          <div key={`${e.company}-${e.period}`} className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
            <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
              <div className="flex items-start gap-4">
                <Num n={idx + 1} />
                <div>
                  <h3 className="text-lg font-semibold tracking-tight">
                    {e.role} — <span className="text-white/80">{e.company}</span>
                  </h3>
                  <div className="mt-2 flex flex-wrap gap-2 text-xs text-white/55">
                    <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1">
                      {e.period}
                    </span>
                    {e.location ? (
                      <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1">
                        {e.location}
                      </span>
                    ) : null}
                  </div>
                </div>
              </div>
            </div>

            <p className="mt-4 max-w-4xl text-white/70">{e.summary}</p>

            <ul className="mt-4 grid gap-2 text-sm text-white/70 md:grid-cols-2">
              {e.highlights.slice(0, 4).map((h) => (
                <li key={h} className="rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3">
                  {h}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </SectionShell>
  );
}

