import type { Metadata } from "next";

import { FinalCta } from "@/components/sections/cta/final-cta";
import { ContactPageContent } from "@/components/sections/contact/contact-page-content";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact OW Creative Studio to discuss wall painting, mural art, terracotta, custom artwork, graphic design, logo design and brand identity projects.",
};

export default function ContactPage() {
  return (
    <>
      <ContactPageContent />
      <FinalCta />
    </>
  );
}