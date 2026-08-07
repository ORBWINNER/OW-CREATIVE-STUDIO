import { ArrowDownRight } from "lucide-react";

import { Container } from "@/components/ui/container";

import styles from "./about-hero.module.css";

const studioDetails = [
  {
    label: "Studio focus",
    value: "Art, interiors and meaningful spaces",
  },
  {
    label: "Creative approach",
    value: "Context-led and multidisciplinary",
  },
  {
    label: "Based in",
    value: "Bangladesh · Working beyond borders",
  },
];

export function AboutHero() {
  return (
    <section
      className={styles.section}
      aria-labelledby="about-hero-title"
    >
      <div className={styles.backgroundWord} aria-hidden="true">
        Studio
      </div>

      <Container>
        <div className={styles.topBar}>
          <p className={styles.eyebrow}>
            <span className={styles.eyebrowLine} aria-hidden="true" />
            About OW
          </p>

          <p className={styles.intro}>
            We are a multidisciplinary creative studio shaping spaces through
            art, material, colour and thoughtful design.
          </p>
        </div>

        <div className={styles.heroGrid}>
          <div className={styles.headingColumn}>
            <h1 id="about-hero-title" className={styles.heading}>
              We create spaces that feel
              <span> personal, expressive and alive.</span>
            </h1>

            <a href="#about-story" className={styles.scrollLink}>
              <span>Discover our story</span>
              <span className={styles.scrollIcon}>
                <ArrowDownRight size={18} strokeWidth={1.8} />
              </span>
            </a>
          </div>

          <div className={styles.visualColumn}>
            <div className={styles.visual}>
              <div className={styles.visualOrb} aria-hidden="true" />

              <div className={styles.visualContent}>
                <span className={styles.visualIndex}>OW / 01</span>

                <div className={styles.monogram} aria-hidden="true">
                  O<span>W</span>
                </div>

                <div className={styles.visualStatement}>
                  <span>Creative direction</span>
                  <strong>
                    Built around identity, experience and lasting expression.
                  </strong>
                </div>
              </div>
            </div>

            <div className={styles.quoteCard}>
              <span className={styles.quoteMark} aria-hidden="true">
                “
              </span>

              <p>
                Our work begins by understanding how a space should feel—not
                simply how it should look.
              </p>
            </div>
          </div>
        </div>

        <div className={styles.details}>
          {studioDetails.map((detail, index) => (
            <article key={detail.label} className={styles.detail}>
              <span className={styles.detailNumber}>
                {String(index + 1).padStart(2, "0")}
              </span>

              <div>
                <p className={styles.detailLabel}>{detail.label}</p>
                <p className={styles.detailValue}>{detail.value}</p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}