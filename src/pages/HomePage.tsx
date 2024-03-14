import { AboutSection } from "../components/AboutSection/AboutSection";
import { HeroSection } from "../components/HeroSection/HeroSection";
import { ProjectSection } from "../components/ProjectSection/ProjectSection";

export function Component() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ProjectSection />
    </>
  );
}

Component.displayName = "HomePage";
