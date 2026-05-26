import { Copy } from "lucide-react";
import { usePortfolio } from "../hooks/usePortfolio";

function CopyButton(props: { text: string }) {
  return (
    <button
      type="button"
      className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-white/70 hover:text-white hover:border-white/20 transition-colors"
      onClick={() => navigator.clipboard.writeText(props.text)}
    >
      <Copy size={16} />
      Copy
    </button>
  );
}

export function Footer() {
  const { profile } = usePortfolio();
  const s = profile.social;

  return (
    <footer id="contact" className="border-t border-white/10 bg-black/20">
      <div className="mx-auto max-w-6xl px-5 py-14">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="text-xl font-semibold hero-heading">{profile.name}</div>
            <div className="mt-3 text-white/65">{profile.specialization}</div>
            {profile.location ? <div className="mt-2 text-white/45">{profile.location}</div> : null}
          </div>

          <div>
            <div className="text-xs font-semibold tracking-[0.18em] text-white/45 uppercase">
              Navigate
            </div>
            <div className="mt-4 grid gap-2 text-sm text-white/65">
              <a className="hover:text-white" href="#about">About</a>
              <a className="hover:text-white" href="#experience">Experience</a>
              <a className="hover:text-white" href="#projects">Projects</a>
              <a className="hover:text-white" href="#skills">Stack</a>
            </div>
          </div>

          <div>
            <div className="text-xs font-semibold tracking-[0.18em] text-white/45 uppercase">
              Reach out
            </div>
            <div className="mt-4 space-y-3 text-sm text-white/70">
              {s.email ? (
                <div className="flex flex-wrap items-center gap-3">
                  <a className="hover:text-white" href={`mailto:${s.email}`}>{s.email}</a>
                  <CopyButton text={s.email} />
                </div>
              ) : null}
              {s.linkedin ? (
                <a className="block hover:text-white" href={s.linkedin} target="_blank" rel="noopener">
                  LinkedIn
                </a>
              ) : null}
              {s.github ? (
                <a className="block hover:text-white" href={s.github} target="_blank" rel="noopener">
                  GitHub
                </a>
              ) : null}
              {profile.resumeUrl ? (
                <a className="block hover:text-white" href={profile.resumeUrl} target="_blank" rel="noopener">
                  Resume (PDF)
                </a>
              ) : null}
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-white/45 md:flex-row md:items-center md:justify-between">
          <div>© {new Date().getFullYear()} {profile.name}</div>
          <div>Built with React · Vite · Tailwind</div>
        </div>
      </div>
    </footer>
  );
}

