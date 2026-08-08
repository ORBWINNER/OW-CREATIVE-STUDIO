import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Brush,
  Frame,
  Layers3,
  Paintbrush,
  Shapes,
} from "lucide-react";

import { Container } from "@/components/ui/container";

import styles from "./home-services.module.css";

const services = [
  {
    title: "Wall Painting",
    description:
      "Custom wall paintings that bring colour, emotion and identity to residential, commercial and hospitality spaces.",
    href: "/services/wall-painting",
    image: "/images/home/services/wall-painting.webp",
    icon: Paintbrush,
  },
  {
    title: "Mural Art",
    description:
      "Large-scale murals shaped around architecture, brand character and meaningful visual storytelling.",
    href: "/services/mural-art",
    image: "/images/home/services/mural-art.webp",
    icon: Brush,
  },
  {
    title: "Terracotta Art",
    description:
      "Handcrafted terracotta compositions that combine traditional material with contemporary spatial design.",
    href: "/services/terracotta-art",
    image: "/images/home/services/terracotta-art.webp",
    icon: Shapes,
  },
  {
    title: "Canvas Painting",
    description:
      "Bespoke canvas artworks developed with a distinctive visual language for your interior and collection.",
    href: "/services/canvas-painting",
    image: "/images/home/services/canvas-painting.webp",
    icon: Frame,
  },
  {
    title: "Art Space Enhancement",
    description:
      "Thoughtful artistic interventions that improve atmosphere, identity and the overall experience of a space.",
    href: "/services/art-space-enhancement",
    image: "/images/home/services/art-space-enhancement.webp",
    icon: Layers3,
  },
];

export function HomeServices() {
  return (
    <section
      className={styles.section}
      aria-labelledby="home-services-title"
    >
      <Container>
        <div className={styles.header}>
          <div className={styles.headingGroup}>
            <p className={styles.eyebrow}>
              <span className={styles.eyebrowLine} aria-hidden="true" />
              What we create
            </p>

            <h2 id="home-services-title" className={styles.heading}>
              Our Creative <span>Services</span>
            </h2>

            <p className={styles.description}>
              From expressive wall art to handcrafted spatial details, we
              create visual experiences shaped around the identity, atmosphere
              and purpose of every project.
            </p>
          </div>

          <Link href="/services" className={styles.headerLink}>
            View All Services
            <ArrowUpRight size={15} aria-hidden="true" />
          </Link>
        </div>

        <div className={styles.grid}>
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <article key={service.title} className={styles.card}>
                <Link
                  href={service.href}
                  className={styles.cardLinkArea}
                  aria-label={`Explore ${service.title}`}
                >
                  <div className={styles.imageWrapper}>
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(max-width: 767px) 100vw, (max-width: 1100px) 50vw, 34vw"
                      className={styles.image}
                    />

                    <div className={styles.overlay} aria-hidden="true" />
                  </div>

                  <div className={styles.cardTop}>
                    <span className={styles.number}>
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className={styles.icon} aria-hidden="true">
                      <Icon size={16} strokeWidth={1.45} />
                    </span>
                  </div>

                  <div className={styles.cardContent}>
                    <h3 className={styles.title}>{service.title}</h3>

                    <p className={styles.text}>{service.description}</p>

                    <span className={styles.cardAction}>
                      Explore Service
                      <ArrowUpRight size={13} aria-hidden="true" />
                    </span>
                  </div>
                </Link>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}