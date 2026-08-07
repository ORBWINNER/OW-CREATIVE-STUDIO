import {
  Brush,
  Compass,
  Eye,
  Layers3,
  Lightbulb,
  Sparkles,
} from "lucide-react";

import { Container } from "@/components/ui/container";

import styles from "./about-philosophy.module.css";

const philosophyPrinciples = [
  {
    icon: Eye,
    number: "01",
    title: "Observe deeply",
    description:
      "We begin by understanding the architecture, people, culture, light and existing character of each space.",
  },
  {
    icon: Compass,
    number: "02",
    title: "Define direction",
    description:
      "A clear creative direction connects the project’s purpose, visual identity and desired emotional experience.",
  },
  {
    icon: Lightbulb,
    number: "03",
    title: "Develop ideas",
    description:
      "Concepts are explored through references, sketches, materials, colours, scale and spatial composition.",
  },
  {
    icon: Layers3,
    number: "04",
    title: "Build coherence",
    description:
      "Every artistic and interior element is considered as part of one complete and recognisable environment.",
  },
  {
    icon: Brush,
    number: "05",
    title: "Execute with craft",
    description:
      "Careful preparation and skilled execution ensure that the final work carries clarity, quality and detail.",
  },
  {
    icon: Sparkles,
    number: "06",
    title: "Create experience",
    description:
      "The finished space should feel meaningful, memorable and naturally connected to the people who use it.",
  },
];

export function AboutPhilosophy() {
  return (
    <section
      id="about-philosophy"
      className={styles.section}
      aria-labelledby="about-philosophy-title"
    >
      <Container>
        <div className={styles.header}>
          <div className={styles.headerMeta}>
            <p className={styles.eyebrow}>
              <span className={styles.eyebrowLine} aria-hidden="true" />
              Our philosophy
            </p>

            <span className={styles.sectionIndex}>OW / 03</span>
          </div>

          <div className={styles.headerContent}>
            <h2 id="about-philosophy-title" className={styles.heading}>
              Creativity becomes meaningful when every decision has{" "}
              <span>purpose, context and intention.</span>
            </h2>

            <p className={styles.introduction}>
              Our approach balances artistic freedom with structured design
              thinking. We do not begin with decoration. We begin by defining
              what the space needs to communicate, how it should function and
              how people should feel within it.
            </p>
          </div>
        </div>

        <div className={styles.statementGrid}>
          <div className={styles.statementVisual}>
            <div className={styles.visualCircle} aria-hidden="true" />

            <div className={styles.visualContent}>
              <span className={styles.visualLabel}>
                Art shaped by understanding
              </span>

              <div className={styles.visualMark} aria-hidden="true">
                <span>O</span>
                <span>W</span>
              </div>

              <div className={styles.visualFooter}>
                <strong>
                  We design from the inside out—from meaning to material.
                </strong>

                <span>Creative philosophy</span>
              </div>
            </div>
          </div>

          <div className={styles.statementCopy}>
            <span className={styles.statementNumber}>01 — 06</span>

            <blockquote>
              “A memorable space is not created by adding more. It is created
              by understanding what truly belongs.”
            </blockquote>

            <p>
              This belief guides how we select materials, develop artwork,
              organise visual elements and execute every detail. The objective
              is always a unified experience rather than a collection of
              unrelated features.
            </p>
          </div>
        </div>

        <div className={styles.principles}>
          {philosophyPrinciples.map((principle) => {
            const Icon = principle.icon;

            return (
              <article key={principle.number} className={styles.principle}>
                <div className={styles.principleTop}>
                  <span className={styles.principleIcon}>
                    <Icon size={21} strokeWidth={1.5} />
                  </span>

                  <span className={styles.principleNumber}>
                    {principle.number}
                  </span>
                </div>

                <h3>{principle.title}</h3>
                <p>{principle.description}</p>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}