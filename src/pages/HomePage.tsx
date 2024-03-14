import { AboutSection } from "../components/AboutSection/AboutSection";
import { HeroSection } from "../components/HeroSection/HeroSection";
import { ProjectSection } from "../components/ProjectSection/ProjectSection";
import { SkillsSection } from "../components/SkillsSection/SkillsSection";

export function Component() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ProjectSection />
      <SkillsSection />
    </>
  );
}

Component.displayName = "HomePage";
