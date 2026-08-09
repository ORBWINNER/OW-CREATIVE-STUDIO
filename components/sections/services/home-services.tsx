import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Container } from "@/components/ui/container";
import { homeServices } from "@/data/services";

import styles from "./home-services.module.css";

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
          {homeServices.map((service, index) => {
            const Icon = service.icon;

            return (
              <article key={service.title} className={styles.card}>
                <Link
                  href={service.href}
                  className={styles.cardLinkArea}
                  aria-label={`Explore ${service.title}`}
                >
                  <div className={styles.imageWrapper}>
                    {service.image ? (
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        sizes="(max-width: 767px) 100vw, (max-width: 1100px) 50vw, 34vw"
                        className={styles.image}
                      />
                    ) : null}

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

                    <p className={styles.text}>
                      {service.homeDescription}
                    </p>

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