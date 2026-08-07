import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Container } from "@/components/ui/container";

import styles from "./selected-works.module.css";

const works = [
  {
    id: "01",
    title: "Luxury Interior Wall Art",
    category: "Residential",
    image: "/images/home/portfolio/project-01.webp",
    href: "/portfolio/luxury-interior-wall-art",
  },
  {
    id: "02",
    title: "Restaurant Mural Design",
    category: "Commercial",
    image: "/images/home/portfolio/project-02.webp",
    href: "/portfolio/restaurant-mural-design",
  },
  {
    id: "03",
    title: "Terracotta Feature Wall",
    category: "Art Installation",
    image: "/images/home/portfolio/project-03.webp",
    href: "/portfolio/terracotta-feature-wall",
  },
];

export function SelectedWorks() {
  return (
    <section
      className={styles.section}
      aria-labelledby="selected-works-title"
    >
      <Container>
        <div className={styles.header}>
          <div className={styles.headingGroup}>
            <p className={styles.eyebrow}>
              <span className={styles.eyebrowLine} aria-hidden="true" />
              Selected projects
            </p>

            <h2 id="selected-works-title" className={styles.heading}>
              Creative
              Portfolio
            </h2>
          </div>

          <div className={styles.headerContent}>
            <p className={styles.description}>
              Every project is developed around the identity of the client, the
              character of the space and the experience we want people to
              remember.
            </p>

            <Link href="/portfolio" className={styles.headerLink}>
              View Full Portfolio
              <ArrowUpRight size={15} aria-hidden="true" />
            </Link>
          </div>
        </div>

        <div className={styles.grid}>
          {works.map((work) => (
            <article key={work.id} className={styles.project}>
              <Link
                href={work.href}
                className={styles.imageLink}
                aria-label={`View ${work.title}`}
              >
                <div className={styles.imageFrame}>
                  <Image
                    src={work.image}
                    alt={work.title}
                    fill
                    sizes="(max-width: 767px) 100vw, (max-width: 1024px) 50vw, 58vw"
                    className={styles.image}
                  />

                  <div className={styles.imageOverlay} aria-hidden="true" />

                  <span className={styles.imageArrow} aria-hidden="true">
                    <ArrowUpRight size={17} strokeWidth={1.6} />
                  </span>
                </div>
              </Link>

              <div className={styles.projectContent}>
                <div className={styles.meta}>
                  <span className={styles.number}>{work.id}</span>
                  <span className={styles.category}>{work.category}</span>
                </div>

                <div className={styles.titleRow}>
                  <h3 className={styles.title}>
                    <Link href={work.href}>{work.title}</Link>
                  </h3>

                  <Link
                    href={work.href}
                    className={styles.projectLink}
                    aria-label={`Open ${work.title}`}
                  >
                    <ArrowUpRight size={16} aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}