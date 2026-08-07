import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Quote } from "lucide-react";

import { Container } from "@/components/ui/container";

import styles from "./studio-introduction.module.css";

const principles = [
  {
    title: "Purpose before decoration",
    description:
      "Every visual decision begins with the people, space and experience it needs to serve.",
  },
  {
    title: "Art shaped by context",
    description:
      "Architecture, culture, light and material guide every creative direction.",
  },
  {
    title: "Details that create identity",
    description:
      "Colour, texture, scale and craftsmanship make each project recognisable.",
  },
];

export function StudioIntroduction() {
  return (
    <section
      id="studio-introduction"
      className={styles.section}
      aria-labelledby="studio-introduction-title"
    >
      <Container>
        <div className={styles.header}>
          <p className={styles.eyebrow}>
            <span className={styles.eyebrowLine} aria-hidden="true" />
            Our philosophy

            </p>

            <h1 id="studio-introduction-title" className={styles.heading}>
            Great spaces begin with a clear idea
             and become memorable through{" "}
            <span>artful execution.</span>
            </h1>
          
        </div>

        <div className={styles.layout}>
          <div className={styles.visual}>
            <div className={styles.imageFrame}>
              <Image
                src="/images/home/introduction/studio-art.webp"
                alt="An artistic interior environment created by OW Creative Studio"
                fill
                sizes="(max-width: 1024px) 92vw, 48vw"
                className={styles.image}
              />

              <div className={styles.imageOverlay} aria-hidden="true" />

              <div className={styles.imageHeader}>
                <span>Meaningful environments</span>
                <span>OW / 02</span>
              </div>

              <div className={styles.imageFooter}>
                <strong>
                  Designed to be experienced, not simply observed.
                </strong>

                <span>Art · Interior · Identity</span>
              </div>
            </div>

            <div className={styles.quoteCard}>
              <span className={styles.quoteIcon}>
                <Quote size={17} strokeWidth={1.7} aria-hidden="true" />
              </span>

              <p>
                Beauty becomes meaningful when purpose, context and function
                work together.
              </p>
            </div>
          </div>

          <div className={styles.content}>
            <p className={styles.lead}>
              We approach every project as a conversation between{" "}
              <span>space, people and identity.</span>
            </p>

            <p className={styles.body}>
              From interior concepts and wall painting to murals, canvas work
              and terracotta art, we connect artistic expression with practical
              design thinking. The result is a space that feels coherent,
              personal and lasting.
            </p>

            <div className={styles.principles}>
              {principles.map((principle, index) => (
                <article key={principle.title} className={styles.principle}>
                  <span className={styles.number}>
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div>
                    <h3>{principle.title}</h3>
                    <p>{principle.description}</p>
                  </div>
                </article>
              ))}
            </div>

            <Link href="/about" className={styles.link}>
              Discover Our Studio
              <ArrowUpRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}