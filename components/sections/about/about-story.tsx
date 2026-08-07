import { ArrowDownRight } from "lucide-react";

import { Container } from "@/components/ui/container";

import styles from "./about-story.module.css";

const studioPillars = [
  {
    number: "01",
    title: "Purpose",
    description:
      "We begin by understanding the people, identity and experience a space needs to support.",
  },
  {
    number: "02",
    title: "Expression",
    description:
      "Art, colour, texture and material become tools for creating a distinctive visual character.",
  },
  {
    number: "03",
    title: "Craft",
    description:
      "Every concept is developed with attention to proportion, detail, execution and lasting quality.",
  },
];

export function AboutStory() {
  return (
    <section
      id="about-story"
      className={styles.section}
      aria-labelledby="about-story-title"
    >
      <Container>
        <div className={styles.introduction}>
          <div className={styles.labelColumn}>
            <p className={styles.eyebrow}>
              <span className={styles.eyebrowLine} aria-hidden="true" />
              Our story
            </p>

            <span className={styles.sectionIndex}>OW / 02</span>
          </div>

          <div className={styles.headingColumn}>
            <h2 id="about-story-title" className={styles.heading}>
              A creative studio built around the belief that{" "}
              <span>spaces should carry meaning.</span>
            </h2>
          </div>
        </div>

        <div className={styles.storyGrid}>
          <div className={styles.visualColumn}>
            <div className={styles.primaryVisual}>
              <div className={styles.primaryVisualContent}>
                <span className={styles.visualLabel}>
                  Art · Interior · Identity
                </span>

                <div className={styles.visualSymbol} aria-hidden="true">
                  <span>O</span>
                  <span>W</span>
                </div>

                <div className={styles.visualFooter}>
                  <p>
                    Creating visual experiences that belong naturally within
                    the spaces they inhabit.
                  </p>

                  <span>Creative Studio</span>
                </div>
              </div>
            </div>

            <div className={styles.secondaryVisual}>
              <span className={styles.secondaryLine} aria-hidden="true" />

              <p>
                Thoughtful environments emerge when creativity and context are
                developed together.
              </p>
            </div>
          </div>

          <div className={styles.copyColumn}>
            <p className={styles.lead}>
              OW Creative Studio brings together artistic expression and
              practical design thinking to create environments with a clear,
              recognisable identity.
            </p>

            <div className={styles.bodyCopy}>
              <p>
                Our work moves across wall painting, murals, canvas art,
                terracotta, interior styling and site-specific creative
                direction. Instead of treating these disciplines as separate
                services, we use them together to shape a complete experience.
              </p>

              <p>
                Every project begins with observation. We study the architecture,
                light, materials, culture and people connected to the space.
                From there, we develop an artistic direction that feels relevant
                rather than decorative.
              </p>

              <p>
                The result is work designed not only to attract attention, but
                also to create atmosphere, memory and a lasting sense of place.
              </p>
            </div>

            <a href="#about-philosophy" className={styles.anchorLink}>
              <span>Explore our philosophy</span>

              <span className={styles.anchorIcon}>
                <ArrowDownRight size={18} strokeWidth={1.8} />
              </span>
            </a>
          </div>
        </div>

        <div className={styles.pillars}>
          {studioPillars.map((pillar) => (
            <article key={pillar.number} className={styles.pillar}>
              <div className={styles.pillarHeader}>
                <span className={styles.pillarNumber}>{pillar.number}</span>
                <span className={styles.pillarDot} aria-hidden="true" />
              </div>

              <h3>{pillar.title}</h3>
              <p>{pillar.description}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}