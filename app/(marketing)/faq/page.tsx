import type { Metadata } from "next";

import {
  MarketingPageShell,
  MarketingSection,
} from "@/components/layout/marketing-page-shell";

import { FinalCta } from "@/components/sections/cta/final-cta";
import { FaqPageContent } from "@/components/sections/faq/faq-page-content";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Find answers about OW Creative Studio services, creative process, project timelines, pricing, customization, installation and project enquiries.",
};

export default function FaqPage() {
  return (
    <MarketingPageShell>
      <MarketingSection tone="light">
        <FaqPageContent />
      </MarketingSection>

      <MarketingSection tone="dark">
        <FinalCta />
      </MarketingSection>
    </MarketingPageShell>
  );
}