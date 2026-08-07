import type { Metadata } from "next";

import { QuotePageContent } from "@/components/sections/quote/quote-page-content";

export const metadata: Metadata = {
  title: "Request a Quote | OW Creative Studio",
  description:
    "Request a tailored quotation for murals, wall paintings, canvas art, interior artwork, branding and custom creative projects from OW Creative Studio.",
};

export default function QuotePage() {
  return <QuotePageContent />;
}