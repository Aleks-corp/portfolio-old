import { AboutSection } from "../components/AboutSection/AboutSection";
import { HeroSection } from "../components/HeroSection/HeroSection";

export function Component() {
  return (
    <>
      <HeroSection />
      <AboutSection />
    </>
  );
}

Component.displayName = "HomePage";
