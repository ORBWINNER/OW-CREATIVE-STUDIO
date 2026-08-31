"use client";

import type { FormEvent } from "react";
import { useState } from "react";
import {
  ArrowUpRight,
  CheckCircle2,
  Clock3,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
} from "lucide-react";

import { Container } from "@/components/ui/container";
import {
  contactBudgetOptions,
  contactServiceOptions,
  contactTimelineOptions,
} from "@/data/project-form-options";

import styles from "./contact-page-content.module.css";

const contactDetails = [
  {
    label: "Email",
    value: "hello@owcreativestudio.com",
    note: "For general enquiries and project discussions",
    href: "mailto:hello@owcreativestudio.com",
    icon: Mail,
  },
  {
    label: "Phone",
    value: "+880 1886295628",
    note: "Available during regular business hours",
    href: "tel:+8801886295628",
    icon: Phone,
  },
  {
    label: "WhatsApp",
    value: "+880 1886295628",
    note: "For quick project-related communication",
    href: "https://wa.me/8801886295628",
    icon: MessageCircle,
  },
  {
    label: "Studio Location",
    value: "Bangladesh",
    note: "Full studio address will be added later",
    href: null,
    icon: MapPin,
  },
];

type SubmissionState = "idle" | "submitting" | "success" | "error";

export function ContactPageContent() {
  const [submissionState, setSubmissionState] =
    useState<SubmissionState>("idle");
  const [submissionMessage, setSubmissionMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (submissionState === "submitting") {
      return;
    }

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      phone: String(formData.get("phone") ?? ""),
      service: String(formData.get("service") ?? ""),
      projectDetails: String(formData.get("projectDetails") ?? ""),
      timeline: String(formData.get("timeline") ?? ""),
      budget: String(formData.get("budget") ?? ""),
      consent: formData.get("consent") === "on",
    };

    setSubmissionState("submitting");
    setSubmissionMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = (await response.json()) as {
        success?: boolean;
        message?: string;
      };

      if (!response.ok || !result.success) {
        setSubmissionState("error");
        setSubmissionMessage(
          result.message ||
            "We could not submit your enquiry. Please try again.",
        );
        return;
      }

      setSubmissionState("success");
      setSubmissionMessage(
        result.message || "Your enquiry has been received.",
      );

      form.reset();
    } catch {
      setSubmissionState("error");
      setSubmissionMessage(
        "Something went wrong while submitting your enquiry. Please try again.",
      );
    }
  }

  return (
    <div
      className={styles.section}
      aria-labelledby="contact-page-title"
    >
      <Container>
        <div className={styles.hero}>
          <div className={styles.heroMeta}>
            <p className={styles.eyebrow}>
              <span className={styles.eyebrowLine} aria-hidden="true" />
              Contact the studio
            </p>

            <span className={styles.pageIndex}>OW / Contact</span>
          </div>

          <div className={styles.heroContent}>
            <h1 id="contact-page-title" className={styles.heading}>
              Let&apos;s begin with a
              <span>creative conversation.</span>
            </h1>

            <p className={styles.introduction}>
              Share your idea, space or design requirement with us. Whether
              you already have a clear direction or are still exploring
              possibilities, we can discuss the most suitable next step.
            </p>
          </div>
        </div>

        <div className={styles.contactHeader}>
          <div>
            <span className={styles.sectionNumber}>01</span>

            <h2>
              Start your
              <span>enquiry</span>
            </h2>
          </div>

          <p>
            Provide a few essential project details and the studio will use
            them to understand your requirements before continuing the
            discussion.
          </p>
        </div>

        <div className={styles.contactLayout}>
          <aside className={styles.contactInformation}>
            <div className={styles.informationIntro}>
              <span className={styles.informationLabel}>
                Direct communication
              </span>

              <h3>Choose the most convenient way to reach us.</h3>

              <p>
                For a more accurate response, include the required service,
                project location, approximate dimensions and preferred
                timeline.
              </p>
            </div>

            <div className={styles.contactList}>
              {contactDetails.map((item) => {
                const Icon = item.icon;

                const content = (
                  <>
                    <span className={styles.contactIcon} aria-hidden="true">
                      <Icon size={20} strokeWidth={1.5} />
                    </span>

                    <span className={styles.contactText}>
                      <span className={styles.contactLabel}>{item.label}</span>
                      <strong>{item.value}</strong>
                      <small>{item.note}</small>
                    </span>

                    {item.href ? (
                      <ArrowUpRight
                        className={styles.contactArrow}
                        size={18}
                        strokeWidth={1.5}
                        aria-hidden="true"
                      />
                    ) : null}
                  </>
                );

                return item.href ? (
                  <a
                    key={item.label}
                    className={styles.contactItem}
                    href={item.href}
                    target={
                      item.label === "WhatsApp" ? "_blank" : undefined
                    }
                    rel={
                      item.label === "WhatsApp"
                        ? "noreferrer"
                        : undefined
                    }
                  >
                    {content}
                  </a>
                ) : (
                  <div key={item.label} className={styles.contactItem}>
                    {content}
                  </div>
                );
              })}
            </div>

            <div className={styles.businessHours}>
              <span className={styles.hoursIcon} aria-hidden="true">
                <Clock3 size={20} strokeWidth={1.5} />
              </span>

              <div>
                <span>Business hours</span>
                <strong>Saturday–Thursday</strong>
                <p>10:00 AM–7:00 PM</p>
              </div>
            </div>
          </aside>

          <div className={styles.formPanel}>
            <div className={styles.formHeading}>
              <span>Project enquiry form</span>

              <p>
                Fields marked with an asterisk are required to submit the
                form.
              </p>
            </div>

            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.fieldGrid}>
                <div className={styles.field}>
                  <label htmlFor="contact-name">
                    Full name <span aria-hidden="true">*</span>
                  </label>

                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    placeholder="Your full name"
                    required
                  />
                </div>

                <div className={styles.field}>
                  <label htmlFor="contact-email">
                    Email address <span aria-hidden="true">*</span>
                  </label>

                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="you@example.com"
                    required
                  />
                </div>
              </div>

              <div className={styles.fieldGrid}>
                <div className={styles.field}>
                  <label htmlFor="contact-phone">Phone number</label>

                  <input
                    id="contact-phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    placeholder="+880"
                  />
                </div>

                <div className={styles.field}>
                  <label htmlFor="contact-service">
                    Service needed <span aria-hidden="true">*</span>
                  </label>

                  <div className={styles.selectWrapper}>
                    <select
                      id="contact-service"
                      name="service"
                      defaultValue=""
                      required
                    >
                      <option value="" disabled>
                        Select a service
                      </option>

                      {contactServiceOptions.map((service) => (
                        <option key={service} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              <div className={styles.field}>
                <label htmlFor="contact-details">
                  Project details <span aria-hidden="true">*</span>
                </label>

                <textarea
                  id="contact-details"
                  name="projectDetails"
                  rows={7}
                  placeholder="Tell us about your idea, space, preferred style, dimensions, location or any other important requirements."
                  required
                />
              </div>

              <div className={styles.fieldGrid}>
                <div className={styles.field}>
                  <label htmlFor="contact-timeline">
                    Estimated timeline
                  </label>

                  <div className={styles.selectWrapper}>
                    <select
                      id="contact-timeline"
                      name="timeline"
                      defaultValue=""
                    >
                      <option value="" disabled>
                        Select a timeline
                      </option>

                      {contactTimelineOptions.map((timeline) => (
                        <option key={timeline} value={timeline}>
                          {timeline}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className={styles.field}>
                  <label htmlFor="contact-budget">
                    Estimated budget
                  </label>

                  <div className={styles.selectWrapper}>
                    <select
                      id="contact-budget"
                      name="budget"
                      defaultValue=""
                    >
                      <option value="" disabled>
                        Select a budget range
                      </option>

                      {contactBudgetOptions.map((budget) => (
                        <option key={budget} value={budget}>
                          {budget}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              <label className={styles.consent}>
                <input type="checkbox" name="consent" required />

                <span>
                  I agree that OW Creative Studio may use the submitted
                  information to respond to this enquiry.
                </span>
              </label>

              {submissionMessage ? (
                <div
                  role={submissionState === "error" ? "alert" : "status"}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    marginTop: "4px",
                    fontSize: "0.75rem",
                    lineHeight: 1.6,
                    color:
                      submissionState === "error"
                        ? "#9f2f20"
                        : "#355330",
                  }}
                >
                  {submissionState === "success" ? (
                    <CheckCircle2 size={18} strokeWidth={1.8} />
                  ) : null}

                  <span>{submissionMessage}</span>
                </div>
              ) : null}

              <div className={styles.formFooter}>
                <p>
                  Your enquiry will be reviewed by the studio before the next
                  project discussion.
                </p>

                <button
                  type="submit"
                  className={styles.submitButton}
                  disabled={submissionState === "submitting"}
                >
                  <span>
                    {submissionState === "submitting"
                      ? "Sending..."
                      : "Send enquiry"}
                  </span>

                  <Send size={18} strokeWidth={1.6} aria-hidden="true" />
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className={styles.studioStatement}>
          <span className={styles.statementNumber}>02</span>

          <div>
            <p className={styles.statementLabel}>A thoughtful beginning</p>

            <h2>
              Every creative project begins with
              <span>understanding the idea behind it.</span>
            </h2>

            <p className={styles.statementDescription}>
              You do not need to arrive with every detail finalized. A
              reference image, a description of the space or even an initial
              thought can provide enough direction to begin a meaningful
              creative discussion.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
}