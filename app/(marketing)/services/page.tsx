import type { Metadata } from "next";

import { FinalCta } from "@/components/sections/cta/final-cta";
import { ServicesPageContent } from "@/components/sections/services/services-page-content";

export const metadata: Metadata = {
  title: "Creative Services",
  description:
    "Explore wall painting, mural art, terracotta art, canvas painting, custom artwork, space enhancement, graphic design, logo design and brand identity services from OW Creative Studio.",
};

export default function ServicesPage() {
  return (
    <>
      <ServicesPageContent />
      <FinalCta />
    </>
  );
}