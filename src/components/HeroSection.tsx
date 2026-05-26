import { motion } from "framer-motion";
import { usePortfolio } from "../hooks/usePortfolio";
import { SocialLinks } from "./SocialLinks";

export function HeroSection() {
  const { profile } = usePortfolio();

  return (
    <section
      id="home"
      className="relative mx-auto flex min-h-[92vh] max-w-6xl flex-col items-center justify-center px-5 pb-10 pt-16"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-70">
        <div className="absolute left-0 top-[-120px] h-[420px] w-[420px] rounded-full bg-fuchsia-500/10 blur-3xl" />
        <div className="absolute right-[-80px] top-[10%] h-[520px] w-[520px] rounded-full bg-orange-500/10 blur-3xl" />
      </div>

      <motion.h1
        className="hero-heading text-center text-[clamp(3rem,12vw,8.5rem)] font-extrabold leading-[0.9] tracking-[-0.06em]"
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Hi, I'm {profile.shortName}
      </motion.h1>

      <div className="mt-6 grid w-full items-center gap-10 md:grid-cols-[1fr_auto_1fr]">
        <div className="hidden md:block" />

        <motion.div
          className="relative mx-auto"
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.05 }}
        >
          <div className="absolute -inset-8 rounded-[2.5rem] bg-white/[0.03] shadow-soft" />
          <img
            src={profile.avatarImage}
            alt={profile.name}
            className="relative h-[220px] w-[220px] rounded-[2rem] border border-white/10 object-cover object-top"
            loading="eager"
          />
        </motion.div>

        <div className="hidden md:block" />
      </div>

      <motion.p
        className="mt-8 max-w-3xl text-center text-lg font-medium text-white/80"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.08 }}
      >
        {profile.tagline}
      </motion.p>

      <motion.p
        className="mt-4 max-w-3xl text-center text-white/60"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.12 }}
      >
        {profile.specialization}
      </motion.p>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        {profile.resumeUrl ? (
          <a
            className="rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-black shadow-soft"
            href={profile.resumeUrl}
            target="_blank"
            rel="noopener"
          >
            Resume
          </a>
        ) : null}
        <a
          className="rounded-full border border-white/10 bg-white/[0.03] px-5 py-2.5 text-sm font-semibold text-white/80 hover:text-white hover:border-white/20 transition-colors"
          href="#projects"
        >
          View Projects
        </a>
      </div>

      <div className="mt-10">
        <SocialLinks />
      </div>
    </section>
  );
}

