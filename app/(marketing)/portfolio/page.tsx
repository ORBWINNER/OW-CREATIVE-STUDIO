import type { Metadata } from "next";

import {
  MarketingPageShell,
  MarketingSection,
} from "@/components/layout/marketing-page-shell";

import { FinalCta } from "@/components/sections/cta/final-cta";
import { PortfolioPageContent } from "@/components/sections/portfolio/portfolio-page-content";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Explore selected wall painting, mural art, terracotta, canvas, decorative art and visual identity projects by OW Creative Studio.",
};

export default function PortfolioPage() {
  return (
    <MarketingPageShell>
      <MarketingSection tone="light">
        <PortfolioPageContent />
      </MarketingSection>

      <MarketingSection tone="dark">
        <FinalCta />
      </MarketingSection>
    </MarketingPageShell>
  );
}