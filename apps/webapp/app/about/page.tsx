import { AboutCTASection } from "@/components/about/about-cta-section";
import { AboutHero } from "@/components/about/about-hero";
import { AboutTimeline } from "@/components/about/about-timeline";

export default function About() {
  return (
    <>
      <AboutHero />
      <AboutCTASection />
      <AboutTimeline />
    </>
  );
}
