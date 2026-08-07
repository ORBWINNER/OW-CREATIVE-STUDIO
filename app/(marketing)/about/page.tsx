import type { Metadata } from "next";

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
    <>
      <AboutHero />
      <AboutStory />
      <AboutPhilosophy />
    </>
  );
}