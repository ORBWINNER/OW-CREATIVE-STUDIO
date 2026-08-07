import { FinalCta } from "@/components/sections/cta/final-cta";
import { HomeHero } from "@/components/sections/hero/home-hero";
import { StudioIntroduction } from "@/components/sections/introduction/studio-introduction";
import { SelectedWorks } from "@/components/sections/portfolio/selected-works";
import { CreativeProcess } from "@/components/sections/process/creative-process";
import { HomeServices } from "@/components/sections/services/home-services";
import { ClientTestimonials } from "@/components/sections/testimonials/client-testimonials";
import { WhyChooseUs } from "@/components/sections/why-choose-us/why-choose-us";

import styles from "./page.module.css";

export default function HomePage() {
  return (
    <div className={styles.page}>
      <div className={styles.backgroundPattern} aria-hidden="true" />

      <main className={styles.sectionStack}>
        <div className={`${styles.sectionFrame} ${styles.lightFrame}`}>
          <HomeHero />
        </div>

        <div className={`${styles.sectionFrame} ${styles.darkFrame}`}>
          <WhyChooseUs />
        </div>

        <div className={`${styles.sectionFrame} ${styles.lightFrame}`}>
          <StudioIntroduction />
        </div>

        <div className={`${styles.sectionFrame} ${styles.darkFrame}`}>
          <HomeServices />
        </div>

        <div className={`${styles.sectionFrame} ${styles.lightFrame}`}>
          <SelectedWorks />
        </div>

        <div className={`${styles.sectionFrame} ${styles.darkFrame}`}>
          <CreativeProcess />
        </div>

        <div className={`${styles.sectionFrame} ${styles.lightFrame}`}>
          <ClientTestimonials />
        </div>

        <div className={`${styles.sectionFrame} ${styles.darkFrame}`}>
          <FinalCta />
        </div>
      </main>
    </div>
  );
}