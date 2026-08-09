import { Container } from "@/components/ui/container";
import { processPageSteps } from "@/data/process";

import styles from "./process-page-content.module.css";

export function ProcessPageContent() {
  return (
    <section
      className={styles.section}
      aria-labelledby="process-page-title"
    >
      <Container>
        <div className={styles.hero}>
          <div className={styles.heroMeta}>
            <p className={styles.eyebrow}>
              <span className={styles.eyebrowLine} aria-hidden="true" />
              How we work
            </p>

            <span className={styles.pageIndex}>OW / Process</span>
          </div>

          <div className={styles.heroContent}>
            <h1 id="process-page-title" className={styles.heading}>
              A thoughtful process from
              <span>first idea to final creation.</span>
            </h1>

            <p className={styles.introduction}>
              Every project follows a clear and collaborative process. From
              understanding the initial idea to completing the final
              installation, each stage is carefully planned to maintain
              creative clarity, quality and consistency.
            </p>
          </div>
        </div>

        <div className={styles.processHeader}>
          <div>
            <span className={styles.sectionNumber}>01</span>

            <h2>
              Our creative
              <span>process</span>
            </h2>
          </div>

          <p>
            Our workflow keeps each project organized while leaving enough
            space for artistic exploration. Clients remain informed and
            involved throughout the important stages of development.
          </p>
        </div>

        <div className={styles.timeline}>
          {processPageSteps.map((step) => {
            const Icon = step.icon;

            return (
              <article key={step.number} className={styles.step}>
                <div className={styles.stepMarker}>
                  <span className={styles.stepNumber}>{step.number}</span>

                  <span className={styles.icon} aria-hidden="true">
                    <Icon size={22} strokeWidth={1.5} />
                  </span>
                </div>

                <div className={styles.stepContent}>
                  <h3>{step.title}</h3>

                  <p className={styles.stepDescription}>
                    {step.description}
                  </p>
                </div>

                <ul className={styles.details}>
                  {step.details.map((detail) => (
                    <li key={detail}>
                      <span aria-hidden="true" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>

        <div className={styles.processNote}>
          <span className={styles.noteLine} aria-hidden="true" />

          <p>
            The exact workflow may be adjusted depending on the scale,
            location and creative requirements of each project.
          </p>
        </div>
      </Container>
    </section>
  );
}