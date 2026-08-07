import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

import { Container } from "@/components/ui/container";

import styles from "./final-cta.module.css";

export function FinalCta() {
  return (
    <section
      className={styles.section}
      aria-labelledby="final-cta-title"
    >
      <div className={styles.backgroundImage} aria-hidden="true">
        <Image
          src="/images/home/cta/cta-background.webp"
          alt=""
          fill
          sizes="100vw"
          className={styles.image}
        />

        <div className={styles.imageOverlay} />
      </div>

      <Container className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.content}>
            <p className={styles.eyebrow}>
              <span className={styles.eyebrowLine} aria-hidden="true" />
              Start a creative project
            </p>

            <h2 id="final-cta-title" className={styles.heading}>
              Let&apos;s Create a Space
              <span>Worth Remembering.</span>
            </h2>

            <p className={styles.description}>
              Share your idea with us and let&apos;s shape it into a distinctive
              artistic experience.
            </p>

            <div className={styles.actions}>
              <Link href="/contact" className={styles.primaryAction}>
                Start Your Project
                <ArrowUpRight size={15} aria-hidden="true" />
              </Link>

              <Link href="/portfolio" className={styles.secondaryAction}>
                View Our Work
                <ArrowRight size={15} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}