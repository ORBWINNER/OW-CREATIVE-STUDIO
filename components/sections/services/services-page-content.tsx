import { Container } from "@/components/ui/container";
import {
  artisticServices,
  designServices,
} from "@/data/services";

import styles from "./services-page-content.module.css";

export function ServicesPageContent() {
  return (
    <div
      className={styles.section}
      aria-labelledby="services-page-title"
    >
      <Container>
        <div className={styles.hero}>
          <div className={styles.heroMeta}>
            <p className={styles.eyebrow}>
              <span className={styles.eyebrowLine} aria-hidden="true" />
              Creative services
            </p>

            <span className={styles.index}>OW / Services</span>
          </div>

          <div className={styles.heroContent}>
            <h1 id="services-page-title" className={styles.heading}>
              Artistic solutions for
              <span>meaningful spaces and brands.</span>
            </h1>

            <p className={styles.introduction}>
              OW Creative Studio provides artistic and creative solutions
              that transform walls, enhance existing spaces and build
              distinctive visual identities. Every service is shaped around
              the project&apos;s purpose, environment and individual
              character.
            </p>
          </div>
        </div>

        <div className={styles.servicesBody}>
          <section
            className={styles.category}
            aria-labelledby="artistic-services-title"
          >
            <div className={styles.categoryHeader}>
              <div>
                <span className={styles.categoryNumber}>01</span>

                <h2 id="artistic-services-title">
                  Art for Walls
                  <span>and Spaces</span>
                </h2>
              </div>

              <p>
                Custom artistic work created to introduce expression,
                atmosphere and visual character into residential, commercial
                and public environments.
              </p>
            </div>

            <div className={styles.grid}>
              {artisticServices.map((service, index) => {
                const Icon = service.icon;

                return (
                  <article key={service.title} className={styles.card}>
                    <div className={styles.cardTop}>
                      <span className={styles.cardNumber}>
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span className={styles.icon} aria-hidden="true">
                        <Icon size={22} strokeWidth={1.5} />
                      </span>
                    </div>

                    <div className={styles.cardContent}>
                      <h3>{service.title}</h3>
                      <p>{service.pageDescription}</p>
                    </div>
                  </article>
                );
              })}
            </div>
          </section>

          <section
            className={styles.category}
            aria-labelledby="design-services-title"
          >
            <div className={styles.categoryHeader}>
              <div>
                <span className={styles.categoryNumber}>02</span>

                <h2 id="design-services-title">
                  Visual Design
                  <span>and Branding</span>
                </h2>
              </div>

              <p>
                Professional visual design services developed to help
                businesses communicate clearly and present a recognizable,
                consistent identity.
              </p>
            </div>

            <div className={`${styles.grid} ${styles.designGrid}`}>
              {designServices.map((service, index) => {
                const Icon = service.icon;

                return (
                  <article key={service.title} className={styles.card}>
                    <div className={styles.cardTop}>
                      <span className={styles.cardNumber}>
                        {String(index + 8).padStart(2, "0")}
                      </span>

                      <span className={styles.icon} aria-hidden="true">
                        <Icon size={22} strokeWidth={1.5} />
                      </span>
                    </div>

                    <div className={styles.cardContent}>
                      <h3>{service.title}</h3>
                      <p>{service.pageDescription}</p>
                    </div>
                  </article>
                );
              })}
            </div>
          </section>
        </div>
      </Container>
    </div>
  );
}