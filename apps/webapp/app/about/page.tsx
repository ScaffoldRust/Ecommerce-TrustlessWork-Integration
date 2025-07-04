import { AboutCTASection } from "@/components/about/about-cta-section";
import { AboutHero } from "@/components/about/about-hero";
import { AboutTimeline } from "@/components/about/about-timeline";
import { MissionVision } from "@/components/about/mission-vision-section";

export default function About() {
  return (
    <>
      <AboutHero />
      <AboutCTASection />
      <AboutTimeline />
      <MissionVision />
    </>
  );
}
