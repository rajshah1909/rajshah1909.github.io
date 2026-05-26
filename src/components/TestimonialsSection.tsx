import { SectionShell } from "./SectionShell";
import { usePortfolio } from "../hooks/usePortfolio";

export function TestimonialsSection() {
  const { testimonials } = usePortfolio();
  if (!testimonials || testimonials.length === 0) return null;

  return (
    <SectionShell id="testimonials" title="Testimonials" subtitle="(Hidden when empty — no fake quotes.)">
      <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] p-6">
        <div className="flex gap-4 animate-[marquee_30s_linear_infinite] hover:[animation-play-state:paused]">
          {[...testimonials, ...testimonials].map((t, idx) => (
            <div
              key={`${t.id}-${idx}`}
              className="min-w-[320px] max-w-[380px] rounded-2xl border border-white/10 bg-[#0F0F0F] p-6"
            >
              <p className="text-white/75 italic leading-relaxed">“{t.quote}”</p>
              <div className="mt-5 flex items-center gap-3">
                <div
                  className="h-10 w-10 rounded-full"
                  style={{ background: t.avatarColor ?? "#A855F7" }}
                />
                <div>
                  <div className="text-xs font-semibold tracking-[0.12em] text-white/85 uppercase">
                    {t.name}
                  </div>
                  <div className="text-xs text-white/55">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-\\[marquee_30s_linear_infinite\\] {
            animation: none !important;
          }
        }
      `}</style>
    </SectionShell>
  );
}

