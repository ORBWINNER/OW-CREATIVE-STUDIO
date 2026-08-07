import {
  Brush,
  Eye,
  Lightbulb,
  ShieldCheck,
  UserRound,
} from "lucide-react";

import { Container } from "@/components/ui/container";

import styles from "./why-choose-us.module.css";

const values = [
  {
    title: "Artistic Vision",
    description:
      "Concept-driven designs created with artistic excellence and a distinctive visual identity.",
    icon: Eye,
  },
  {
    title: "Crafted with Care",
    description:
      "Meticulous attention to composition, material, finishing and every creative detail.",
    icon: Brush,
  },
  {
    title: "Innovative Solutions",
    description:
      "Original ideas that transform ordinary environments into meaningful spaces.",
    icon: Lightbulb,
  },
  {
    title: "Client Focused",
    description:
      "Your vision, priorities and experience guide the project from start to finish.",
    icon: UserRound,
  },
  {
    title: "Quality & Integrity",
    description:
      "Committed to dependable communication, skilled execution and lasting quality.",
    icon: ShieldCheck,
  },
];

export function WhyChooseUs() {
  return (
    <section
      className={styles.section}
      aria-labelledby="why-choose-us-title"
    >
      <Container>
        <div className={styles.header}>
          <p className={styles.eyebrow}>Why choose us</p>

          <h2 id="why-choose-us-title" className={styles.heading}>
            Our Design Philosophy
          </h2>

          <span className={styles.headingLine} aria-hidden="true" />
        </div>

        <div className={styles.grid}>
          {values.map((value, index) => {
            const Icon = value.icon;

            return (
              <article key={value.title} className={styles.item}>
                <div className={styles.iconWrap} aria-hidden="true">
                  <Icon size={31} strokeWidth={1.45} />
                </div>

                <div className={styles.content}>
                  <span className={styles.number}>
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <h3 className={styles.title}>{value.title}</h3>

                  <p className={styles.description}>{value.description}</p>
                </div>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}