import { usePortfolio } from "../hooks/usePortfolio";

export function HeroSection() {
  const { profile, experience } = usePortfolio();
  const current = experience.find((e) => e.current);
  // Current role first, then earlier roles, so the strip is always full.
  const metrics = [current, ...experience.filter((e) => !e.current)]
    .flatMap((e) => (e ? e.metrics.map((m) => ({ ...m, company: e.companyShort ?? e.company })) : []))
    .slice(0, 3);

  return (
    <section id="home" className="scroll-mt-20">
      <div className="mx-auto max-w-5xl px-6 pb-12 pt-16 md:pt-24">
        <div className="grid gap-10 md:grid-cols-[1fr_11rem] md:items-start">
          <div className="min-w-0">
            <p className="font-mono text-xs uppercase tracking-[0.14em] text-signal">
              {profile.name} · {profile.role}
            </p>
            <h1 className="mt-5 max-w-[24ch] text-3xl font-semibold leading-[1.15] text-ink md:text-[2.75rem]">
              {profile.thesis}
            </h1>
            <p className="mt-6 max-w-[60ch] text-inkMuted">{profile.standfirst}</p>

            <div className="mt-9 flex flex-wrap items-center gap-3 font-mono text-sm">
              <a
                href="#projects"
                className="border border-signal bg-signal px-4 py-2 text-ground transition-colors hover:bg-transparent hover:text-signal"
              >
                View work
              </a>
              {profile.resumeUrl ? (
                <a
                  href={profile.resumeUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="border border-rule px-4 py-2 text-ink transition-colors hover:border-inkMuted"
                >
                  Resume (PDF)
                </a>
              ) : null}
              {profile.social.email ? (
                <a
                  href={`mailto:${profile.social.email}`}
                  className="px-2 py-2 text-inkMuted underline underline-offset-4 hover:text-ink"
                >
                  Email
                </a>
              ) : null}
            </div>
          </div>

          {profile.avatarImage ? (
            <figure className="order-first md:order-none">
              <img
                src={profile.avatarImage}
                alt={profile.name}
                width={176}
                height={200}
                className="h-36 w-32 border border-rule object-cover grayscale-[35%] md:h-[12.5rem] md:w-44"
              />
              {profile.location ? (
                <figcaption className="mt-2 font-mono text-xs text-inkFaint">{profile.location}</figcaption>
              ) : null}
            </figure>
          ) : null}
        </div>

        {metrics.length > 0 ? (
          <dl className="mt-14 grid grid-cols-1 border-y border-rule sm:grid-cols-3">
            {metrics.map((m, i) => (
              <div
                key={m.label}
                className={"flex flex-col px-0 py-5 sm:px-5 " + (i > 0 ? "border-t border-rule sm:border-l sm:border-t-0" : "sm:pl-0")}
              >
                <dt className="order-2 mt-1 text-xs text-inkFaint">
                  {m.label} · <span className="font-mono">{m.company}</span>
                </dt>
                <dd className="order-1 tabular font-mono text-2xl text-ink">{m.value}</dd>
              </div>
            ))}
          </dl>
        ) : null}
      </div>
    </section>
  );
}
