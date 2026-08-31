import type { Metadata } from "next";

import {
  MarketingPageShell,
  MarketingSection,
} from "@/components/layout/marketing-page-shell";

import { QuotePageContent } from "@/components/sections/quote/quote-page-content";

export const metadata: Metadata = {
  title: "Request a Quote",
  description:
    "Request a tailored quotation for murals, wall paintings, canvas art, interior artwork, branding and custom creative projects from OW Creative Studio.",
};

export default function QuotePage() {
  return (
    <MarketingPageShell>
      <MarketingSection tone="light">
        <QuotePageContent />
      </MarketingSection>
    </MarketingPageShell>
  );
}