import {
  Brush,
  Building2,
  Frame,
  ImageIcon,
  Layers3,
  Palette,
  Paintbrush,
  PenTool,
  Shapes,
  Sparkles,
} from "lucide-react";

import { Container } from "@/components/ui/container";

import styles from "./services-page-content.module.css";

const artisticServices = [
  {
    title: "Wall Painting",
    description:
      "Custom wall painting solutions created to introduce colour, character and visual identity into residential and commercial spaces.",
    icon: Paintbrush,
  },
  {
    title: "Mural Art",
    description:
      "Large-scale mural artwork developed around the story, atmosphere and purpose of each environment.",
    icon: Brush,
  },
  {
    title: "Terracotta Art",
    description:
      "Handcrafted terracotta artwork combining traditional material, artistic detail and contemporary spatial presentation.",
    icon: Shapes,
  },
  {
    title: "Canvas Painting",
    description:
      "Original and customized canvas paintings created to complement the mood, scale and visual language of a space.",
    icon: Frame,
  },
  {
    title: "Decorative Wall Art",
    description:
      "Purposeful decorative compositions that transform plain walls into expressive and visually balanced focal points.",
    icon: ImageIcon,
  },
  {
    title: "Custom Artwork",
    description:
      "Bespoke artwork developed according to the client's space, concept, preferred style and creative requirements.",
    icon: Palette,
  },
  {
    title: "Art Space Enhancement",
    description:
      "Carefully selected artistic elements that improve the atmosphere, character and visual experience of an existing space.",
    icon: Building2,
  },
];

const designServices = [
  {
    title: "Graphic Design",
    description:
      "Clear and professional visual communication created for digital platforms, print materials and business applications.",
    icon: PenTool,
  },
  {
    title: "Logo Design",
    description:
      "Distinctive logo systems designed to communicate the personality, purpose and professional identity of a brand.",
    icon: Sparkles,
  },
  {
    title: "Brand Identity",
    description:
      "Consistent visual identity systems that connect logo, typography, colour and supporting brand elements.",
    icon: Layers3,
  },
];

export function ServicesPageContent() {
  return (
    <main>
      <section
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
                        <p>{service.description}</p>
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
                        <p>{service.description}</p>
                      </div>
                    </article>
                  );
                })}
              </div>
            </section>
          </div>
        </Container>
      </section>
    </main>
  );
}