import { ArrowDownRight } from "lucide-react";

import { Container } from "@/components/ui/container";
import { portfolioProjects } from "@/data/portfolio";

import styles from "./portfolio-page-content.module.css";

const projectVisualClasses = [
  styles.visualOne,
  styles.visualTwo,
  styles.visualThree,
  styles.visualFour,
  styles.visualFive,
  styles.visualSix,
];

export function PortfolioPageContent() {
  return (
    <section
      className={styles.section}
      aria-labelledby="portfolio-page-title"
    >
      <Container>
        <div className={styles.hero}>
          <div className={styles.heroMeta}>
            <p className={styles.eyebrow}>
              <span className={styles.eyebrowLine} aria-hidden="true" />
              Selected portfolio
            </p>

            <span className={styles.pageIndex}>OW / Portfolio</span>
          </div>

          <div className={styles.heroContent}>
            <h1 id="portfolio-page-title" className={styles.heading}>
              Creative work shaped for
              <span>real environments.</span>
            </h1>

            <p className={styles.introduction}>
              A growing collection of commissioned paintings, murals,
              decorative artwork and visual design projects created around
              the identity, atmosphere and purpose of each space or brand.
            </p>
          </div>
        </div>

        <div className={styles.portfolioIntro}>
          <div>
            <span className={styles.sectionNumber}>01</span>

            <h2>
              Featured
              <span>projects</span>
            </h2>
          </div>

          <p>
            Each project begins with a different environment, requirement and
            creative direction. The result is developed through careful
            observation, artistic interpretation and attention to detail.
          </p>
        </div>

        <div className={styles.grid}>
          {portfolioProjects.map((project, index) => (
            <article key={project.title} className={styles.project}>
              <div
                className={`${styles.visual} ${projectVisualClasses[index]}`}
                aria-hidden="true"
              >
                <div className={styles.visualOverlay}>
                  <span>{project.category}</span>

                  <span className={styles.visualIcon}>
                    <ArrowDownRight size={20} strokeWidth={1.6} />
                  </span>
                </div>
              </div>

              <div className={styles.projectContent}>
                <div>
                  <h3>{project.title}</h3>

                  <p>
                    {project.category}
                    <span aria-hidden="true">·</span>
                    {project.location}
                  </p>
                </div>

                <div className={styles.projectMeta}>
                  <span>{project.year}</span>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className={styles.portfolioNote}>
          <span className={styles.noteLine} aria-hidden="true" />

          <p>
            Additional commissioned and ongoing work will be added as the
            studio portfolio continues to develop.
          </p>
        </div>
      </Container>
    </section>
  );
}