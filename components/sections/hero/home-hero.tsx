import Image from "next/image";
import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  MoveUpRight,
  Sparkles,
} from "lucide-react";

import { Container } from "@/components/ui/container";

import heroArt from "@/public/images/home/hero/hero-main.webp";

import styles from "./home-hero.module.css";

const statistics = [
  {
    value: "10+",
    label: "Years of creative experience",
  },
  {
    value: "250+",
    label: "Completed projects",
  },
  {
    value: "98%",
    label: "Client satisfaction",
  },
  {
    value: "24/7",
    label: "Creative support",
  },
];

export function HomeHero() {
  return (
    <section className={styles.section}>
      <div className={styles.backgroundGrid} aria-hidden="true" />
      <div className={styles.backgroundGlow} aria-hidden="true" />

      <Container className={styles.container}>
        <div className={styles.heroGrid}>
          <div className={styles.content}>
            <div className={styles.eyebrow}>
              <Sparkles size={14} strokeWidth={1.8} aria-hidden="true" />
              <span>Creative Design Studio</span>
            </div>

            <h1 className={styles.title}>
              We create spaces
              <span>that feel unforgettable.</span>
            </h1>

            <p className={styles.description}>
              OW Creative Studio combines art, interior thinking and visual
              storytelling to transform ordinary environments into meaningful,
              distinctive experiences.
            </p>

            <div className={styles.actions}>
              <Link href="/portfolio" className={styles.primaryAction}>
                Explore Our Work
                <ArrowRight size={16} aria-hidden="true" />
              </Link>

              <Link href="/quote" className={styles.secondaryAction}>
                Start a Project
                <MoveUpRight size={16} aria-hidden="true" />
              </Link>
            </div>
          </div>

          <div className={styles.visual}>
            <div className={styles.imageFrame}>
              <Image
                src={heroArt}
                alt="Artistic interior created by OW Creative Studio"
                fill
                priority
                placeholder="blur"
                sizes="(max-width: 1100px) 92vw, 48vw"
                className={styles.image}
              />

              <div className={styles.imageShade} aria-hidden="true" />

              <div className={styles.imageTop}>
                <span>Art · Space · Identity</span>
                <span>OW / 01</span>
              </div>

              <div className={styles.imageBottom}>
                <div>
                  <span>Independent Creative Studio</span>

                  <strong>
                    Creative work shaped around real spaces.
                  </strong>
                </div>

                <span>Est. 2016</span>
              </div>
            </div>

            <div className={styles.visualLabel}>
              <span>Selected Discipline</span>
              <strong>Spatial Art</strong>
            </div>
          </div>
        </div>

        <div className={styles.bottomRow}>
          <div className={styles.statistics}>
            {statistics.map((statistic) => (
              <div key={statistic.label} className={styles.statistic}>
                <strong>{statistic.value}</strong>
                <span>{statistic.label}</span>
              </div>
            ))}
          </div>

          <a href="#studio-introduction" className={styles.scrollLink}>
            <span>Discover More</span>
            <ArrowDown size={15} aria-hidden="true" />
          </a>
        </div>
      </Container>
    </section>
  );
}