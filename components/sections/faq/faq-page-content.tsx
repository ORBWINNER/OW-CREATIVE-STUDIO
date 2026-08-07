"use client";

import { useId, useState } from "react";
import { Minus, Plus } from "lucide-react";

import { Container } from "@/components/ui/container";

import styles from "./faq-page-content.module.css";

const faqItems = [
  {
    question: "What services does OW Creative Studio offer?",
    answer:
      "We provide wall painting, mural art, terracotta art, canvas painting, decorative wall art, custom artwork, art space enhancement, graphic design, logo design and brand identity services.",
  },
  {
    question: "Do you work with both residential and commercial spaces?",
    answer:
      "Yes. We work with residential interiors, offices, hospitality spaces, retail environments and other commercial locations. The creative direction is adapted to the atmosphere, purpose and scale of each space.",
  },
  {
    question: "Can you create completely custom artwork?",
    answer:
      "Yes. Custom artwork is developed around the client’s preferred theme, space, colour direction, dimensions and visual requirements. We do not limit every project to a fixed design template.",
  },
  {
    question: "How does the creative process work?",
    answer:
      "The process normally includes discovery, concept development, design approval, creation, installation where required and final delivery. The exact workflow may be adjusted depending on the type and scale of the project.",
  },
  {
    question: "How long does a project usually take?",
    answer:
      "The timeline depends on the size, complexity, location, materials and approval process. A clear estimated schedule is discussed after the project requirements have been reviewed.",
  },
  {
    question: "How is project pricing determined?",
    answer:
      "Pricing is based on factors such as project size, design complexity, materials, production time, location and installation requirements. A customized quotation is prepared after understanding the complete scope.",
  },
  {
    question: "Can I request changes to the proposed concept?",
    answer:
      "Yes. Feedback and reasonable revisions are part of the concept development and approval stages. The number and scope of revisions may depend on the agreement made for the project.",
  },
  {
    question: "Do you provide on-site installation or execution?",
    answer:
      "Yes, where the project requires it. Wall painting, murals, decorative artwork and certain custom installations may include on-site preparation, execution and final quality inspection.",
  },
  {
    question: "Can the artwork match my existing interior style?",
    answer:
      "Yes. We can develop a creative direction that responds to the existing architecture, furniture, colours, materials and atmosphere of the space while maintaining an original artistic identity.",
  },
  {
    question: "Do you accept projects outside your local area?",
    answer:
      "Projects outside the local area may be considered depending on the location, scope, schedule and practical requirements. Remote design and branding projects can also be discussed.",
  },
  {
    question: "What information should I provide before requesting a quote?",
    answer:
      "Helpful information includes the required service, project location, approximate dimensions, preferred style, reference images, expected timeline and available budget range. These details help us prepare a more accurate response.",
  },
  {
    question: "How can I start a project with OW Creative Studio?",
    answer:
      "You can begin by contacting us or completing the project quotation form. After reviewing your information, we will discuss the requirements, recommended direction and next steps.",
  },
];

export function FaqPageContent() {
  const accordionId = useId();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  function toggleItem(index: number) {
    setOpenIndex((currentIndex) =>
      currentIndex === index ? null : index,
    );
  }

  return (
    <main>
      <section
        className={styles.section}
        aria-labelledby="faq-page-title"
      >
        <Container>
          <div className={styles.hero}>
            <div className={styles.heroMeta}>
              <p className={styles.eyebrow}>
                <span className={styles.eyebrowLine} aria-hidden="true" />
                Questions and answers
              </p>

              <span className={styles.pageIndex}>OW / FAQ</span>
            </div>

            <div className={styles.heroContent}>
              <h1 id="faq-page-title" className={styles.heading}>
                Clear answers before your
                <span>creative project begins.</span>
              </h1>

              <p className={styles.introduction}>
                Explore common questions about our services, process, pricing,
                customization and project delivery. Every project is different,
                but these answers provide a clear starting point.
              </p>
            </div>
          </div>

          <div className={styles.faqHeader}>
            <div>
              <span className={styles.sectionNumber}>01</span>

              <h2>
                Frequently asked
                <span>questions</span>
              </h2>
            </div>

            <p>
              Select a question to view the answer. For project-specific
              information, requirements can be discussed directly with the
              studio.
            </p>
          </div>

          <div className={styles.accordion}>
            {faqItems.map((item, index) => {
              const isOpen = openIndex === index;
              const questionId = `${accordionId}-question-${index}`;
              const answerId = `${accordionId}-answer-${index}`;

              return (
                <article
                  key={item.question}
                  className={`${styles.item} ${
                    isOpen ? styles.itemOpen : ""
                  }`}
                >
                  <button
                    id={questionId}
                    type="button"
                    className={styles.trigger}
                    aria-expanded={isOpen}
                    aria-controls={answerId}
                    onClick={() => toggleItem(index)}
                  >
                    <span className={styles.itemNumber}>
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className={styles.question}>{item.question}</span>

                    <span className={styles.toggleIcon} aria-hidden="true">
                      {isOpen ? (
                        <Minus size={21} strokeWidth={1.6} />
                      ) : (
                        <Plus size={21} strokeWidth={1.6} />
                      )}
                    </span>
                  </button>

                  <div
                    id={answerId}
                    className={styles.answerWrapper}
                    role="region"
                    aria-labelledby={questionId}
                    aria-hidden={!isOpen}
                  >
                    <div className={styles.answerInner}>
                      <p>{item.answer}</p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          <div className={styles.supportBlock}>
            <span className={styles.supportNumber}>02</span>

            <div>
              <h2>
                Still have a
                <span>specific question?</span>
              </h2>

              <p>
                Share a short description of your project, preferred service,
                location and approximate timeline. We can then provide more
                relevant information based on your requirements.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}