import type { Metadata } from "next";

import {
  MarketingPageShell,
  MarketingSection,
} from "@/components/layout/marketing-page-shell";

import { FinalCta } from "@/components/sections/cta/final-cta";
import { ContactPageContent } from "@/components/sections/contact/contact-page-content";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact OW Creative Studio to discuss your wall painting, mural art, terracotta, canvas painting or creative space project.",
};

export default function ContactPage() {
  return (
    <MarketingPageShell>
      <MarketingSection tone="light">
        <ContactPageContent />
      </MarketingSection>

      <MarketingSection tone="dark">
        <FinalCta />
      </MarketingSection>
    </MarketingPageShell>
  );
}