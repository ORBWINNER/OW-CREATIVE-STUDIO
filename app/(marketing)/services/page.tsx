import type { Metadata } from "next";

import {
  MarketingPageShell,
  MarketingSection,
} from "@/components/layout/marketing-page-shell";

import { FinalCta } from "@/components/sections/cta/final-cta";
import { ServicesPageContent } from "@/components/sections/services/services-page-content";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore OW Creative Studio services including wall painting, mural art, terracotta art, canvas painting and creative space enhancement.",
};

export default function ServicesPage() {
  return (
    <MarketingPageShell>
      <MarketingSection tone="light">
        <ServicesPageContent />
      </MarketingSection>

      <MarketingSection tone="dark">
        <FinalCta />
      </MarketingSection>
    </MarketingPageShell>
  );
}