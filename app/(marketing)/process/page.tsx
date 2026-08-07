import type { Metadata } from "next";

import { FinalCta } from "@/components/sections/cta/final-cta";
import { ProcessPageContent } from "@/components/sections/process/process-page-content";

export const metadata: Metadata = {
  title: "Our Creative Process",
  description:
    "Discover how OW Creative Studio develops artistic and design projects through discovery, concept development, approval, creation, installation and final delivery.",
};

export default function ProcessPage() {
  return (
    <>
      <ProcessPageContent />
      <FinalCta />
    </>
  );
}