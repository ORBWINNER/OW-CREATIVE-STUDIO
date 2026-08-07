import Image from "next/image";

import { Container } from "@/components/ui/container";

import styles from "./client-testimonials.module.css";

const testimonials = [
  {
    image: "/images/home/testimonials/client-01.webp",
    alt: "OW Creative Studio client testimonial",
  },
  {
    image: "/images/home/testimonials/client-02.webp",
    alt: "OW Creative Studio client testimonials",
  },
];

export function ClientTestimonials() {
  return (
    <section
      className={styles.section}
      aria-labelledby="client-testimonials-title"
    >
      <Container>
        <div className={styles.header}>
          <div className={styles.headingGroup}>
            <p className={styles.eyebrow}>
              <span className={styles.eyebrowLine} aria-hidden="true" />
              Client Stories
            </p>

            <h2
              id="client-testimonials-title"
              className={styles.heading}
            >
              What Our Clients
              Say
            </h2>
          </div>

          <p className={styles.introduction}>
            Every collaboration is built on trust, thoughtful communication,
            craftsmanship and long-term relationships.
          </p>
        </div>

        <div className={styles.grid}>
          {testimonials.map((testimonial) => (
            <article key={testimonial.image} className={styles.card}>
              <Image
                src={testimonial.image}
                alt={testimonial.alt}
                width={1200}
                height={800}
                sizes="(max-width: 767px) 100vw, 50vw"
                className={styles.image}
              />
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}