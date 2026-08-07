import Image from "next/image";

import { Container } from "@/components/ui/container";

import styles from "./creative-process.module.css";

const steps = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We understand your space, objectives, style preferences and project requirements before any creative direction begins.",
    image: "/images/home/process/discovery.webp",
    imageAlt:
      "Creative discovery and project planning by OW Creative Studio",
  },
  {
    number: "02",
    title: "Concept",
    description:
      "Ideas are translated into moodboards, layouts, sketches and material directions that define the project's identity.",
    image: "/images/home/process/concept.webp",
    imageAlt:
      "Art concept development and material selection process",
  },
  {
    number: "03",
    title: "Creation",
    description:
      "Our artists carefully develop every detail with craftsmanship, balance and lasting visual quality.",
    image: "/images/home/process/creation.webp",
    imageAlt:
      "Artist creating a custom artwork for an interior space",
  },
  {
    number: "04",
    title: "Installation",
    description:
      "Every element is completed with precision so the finished space feels natural, timeless and memorable.",
    image: "/images/home/process/installation.webp",
    imageAlt:
      "Professional artwork installation in a completed interior",
  },
];

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
          {steps.map((step) => (
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