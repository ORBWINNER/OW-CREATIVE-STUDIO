import type { Metadata } from "next";

import {
  MarketingPageShell,
  MarketingSection,
} from "@/components/layout/marketing-page-shell";

import { AboutHero } from "@/components/sections/about/about-hero";
import { AboutPhilosophy } from "@/components/sections/about/about-philosophy";
import { AboutStory } from "@/components/sections/about/about-story";

export const metadata: Metadata = {
  title: "About",
  description:
    "Discover the story, philosophy and creative approach behind OW Creative Studio.",
};

export default function AboutPage() {
  return (
    <MarketingPageShell>
      <MarketingSection tone="light">
        <AboutHero />
      </MarketingSection>

      <MarketingSection tone="dark">
        <AboutStory />
      </MarketingSection>

      <MarketingSection tone="light">
        <AboutPhilosophy />
      </MarketingSection>
    </MarketingPageShell>
  );
}