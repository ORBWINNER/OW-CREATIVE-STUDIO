import {
  CheckCircle2,
  ClipboardCheck,
  Hammer,
  Lightbulb,
  MessageCircle,
  Paintbrush,
} from "lucide-react";

import { Container } from "@/components/ui/container";

import styles from "./process-page-content.module.css";

const processSteps = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We begin by discussing your ideas, goals, space, preferred style and practical requirements. This helps us understand the purpose and creative direction of the project.",
    details: [
      "Initial client discussion",
      "Space and requirement review",
      "Creative direction identification",
    ],
    icon: MessageCircle,
  },
  {
    number: "02",
    title: "Concept Development",
    description:
      "Based on the discovery stage, we develop the first creative concepts, visual references and artistic possibilities for the project.",
    details: [
      "Concept exploration",
      "Visual references and sketches",
      "Style and composition planning",
    ],
    icon: Lightbulb,
  },
  {
    number: "03",
    title: "Design Approval",
    description:
      "The preferred direction is refined and presented for approval. Materials, dimensions, colours, scope and project timing are confirmed before production begins.",
    details: [
      "Concept refinement",
      "Material and colour confirmation",
      "Scope and timeline approval",
    ],
    icon: ClipboardCheck,
  },
  {
    number: "04",
    title: "Creation",
    description:
      "The approved concept moves into production. Our team creates the artwork with careful attention to craftsmanship, consistency and visual quality.",
    details: [
      "Artwork production",
      "Quality-focused execution",
      "Progress review and coordination",
    ],
    icon: Paintbrush,
  },
  {
    number: "05",
    title: "Installation",
    description:
      "For projects requiring on-site work, the artwork is installed or executed within the selected space while maintaining cleanliness, safety and finishing quality.",
    details: [
      "On-site preparation",
      "Professional installation",
      "Detail and finish inspection",
    ],
    icon: Hammer,
  },
  {
    number: "06",
    title: "Final Delivery",
    description:
      "The completed project is reviewed together with the client. Final details are checked before the artwork or design is formally handed over.",
    details: [
      "Final quality review",
      "Client walkthrough",
      "Project completion and handover",
    ],
    icon: CheckCircle2,
  },
];

export function ProcessPageContent() {
  return (
    <main>
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
            {processSteps.map((step) => {
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
    </main>
  );
}