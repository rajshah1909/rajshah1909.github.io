import { AboutSection } from "./components/AboutSection";
import { ExperienceSection } from "./components/ExperienceSection";
import { Footer } from "./components/Footer";
import { HeroSection } from "./components/HeroSection";
import { Navbar } from "./components/Navbar";
import { ProjectsSection } from "./components/ProjectsSection";
import { Reveal } from "./components/Reveal";
import { SkillsSection } from "./components/SkillsSection";

export default function App() {
  return (
    <div className="min-h-screen bg-ground text-ink">
      <a href="#projects" className="skip-link">
        Skip to projects
      </a>
      <Navbar />
      <main>
        <HeroSection />
        <Reveal>
          <ExperienceSection />
        </Reveal>
        <Reveal>
          <ProjectsSection />
        </Reveal>
        <Reveal>
          <SkillsSection />
        </Reveal>
        <Reveal>
          <AboutSection />
        </Reveal>
      </main>
      <Footer />
    </div>
  );
}
