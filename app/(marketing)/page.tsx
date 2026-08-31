import type { Metadata } from "next";

import {
  MarketingPageShell,
  MarketingSection,
} from "@/components/layout/marketing-page-shell";

import { FinalCta } from "@/components/sections/cta/final-cta";
import { HomeHero } from "@/components/sections/hero/home-hero";
import { StudioIntroduction } from "@/components/sections/introduction/studio-introduction";
import { SelectedWorks } from "@/components/sections/portfolio/selected-works";
import { CreativeProcess } from "@/components/sections/process/creative-process";
import { HomeServices } from "@/components/sections/services/home-services";
import { ClientTestimonials } from "@/components/sections/testimonials/client-testimonials";
import { WhyChooseUs } from "@/components/sections/why-choose-us/why-choose-us";

export const metadata: Metadata = {
  title: {
    absolute: "OW Creative Studio | Art, Murals & Creative Spaces",
  },
  description:
    "OW Creative Studio creates wall paintings, murals, terracotta art, canvas artwork, visual identities and artistic solutions for meaningful spaces.",
  alternates: {
    canonical: "/",
  },
};

export default function HomePage() {
  return (
    <MarketingPageShell>
      <MarketingSection tone="light">
        <HomeHero />
      </MarketingSection>

      <MarketingSection tone="dark">
        <WhyChooseUs />
      </MarketingSection>

      <MarketingSection tone="light">
        <StudioIntroduction />
      </MarketingSection>

      <MarketingSection tone="dark">
        <HomeServices />
      </MarketingSection>

      <MarketingSection tone="light">
        <SelectedWorks />
      </MarketingSection>

      <MarketingSection tone="dark">
        <CreativeProcess />
      </MarketingSection>

      <MarketingSection tone="light">
        <ClientTestimonials />
      </MarketingSection>

      <MarketingSection tone="dark">
        <FinalCta />
      </MarketingSection>
    </MarketingPageShell>
  );
}