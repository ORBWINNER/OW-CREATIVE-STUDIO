import Image from "next/image";

import { Container } from "@/components/ui/container";
import { homeProcessSteps } from "@/data/process";

import styles from "./creative-process.module.css";

export function CreativeProcess() {
  return (
    <section
      className={styles.section}
      aria-labelledby="creative-process-title"
    >
      <Container>
        <div className={styles.header}>
          <p className={styles.eyebrow}>
            <span className={styles.line} aria-hidden="true" />
            How we work
          </p>

          <h2 id="creative-process-title" className={styles.heading}>
            Our Creative
            Process
          </h2>

          <p className={styles.description}>
            Every successful project follows a structured creative journey.
            From the first conversation to the final installation, every step
            is intentional.
          </p>
        </div>

        <div className={styles.grid}>
          {homeProcessSteps.map((step) => (
            <article key={step.number} className={styles.card}>
              <div className={styles.imageWrapper}>
                <Image
                  src={step.image}
                  alt={step.imageAlt}
                  width={720}
                  height={480}
                  sizes="(max-width: 767px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className={styles.image}
                />
              </div>

              <span className={styles.number}>{step.number}</span>

              <h3>{step.title}</h3>

              <p>{step.description}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}