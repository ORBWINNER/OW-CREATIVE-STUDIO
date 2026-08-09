"use client";

import { ChangeEvent, FormEvent, useRef, useState } from "react";
import {
  ArrowUpRight,
  Check,
  FileImage,
  Paperclip,
  ShieldCheck,
  Sparkles,
  Upload,
  X,
} from "lucide-react";

import { Container } from "@/components/ui/container";
import {
  quoteBudgetOptions,
  quoteProjectTypeOptions,
  quoteServiceOptions,
  quoteSpaceSizeOptions,
  quoteTimelineOptions,
} from "@/data/project-form-options";

import styles from "./quote-page-content.module.css";

const processSteps = [
  {
    number: "01",
    title: "Project review",
    description:
      "We review your requirements, references, space and creative direction.",
  },
  {
    number: "02",
    title: "Discovery conversation",
    description:
      "Our team contacts you to clarify the scope, timeline and expectations.",
  },
  {
    number: "03",
    title: "Tailored quotation",
    description:
      "You receive a clear quotation based on the final project requirements.",
  },
  {
    number: "04",
    title: "Creative work begins",
    description:
      "Once approved, we schedule the project and begin the creative process.",
  },
];

const acceptedFileTypes = [
  "image/jpeg",
  "image/png",
  "image/webp",
  "application/pdf",
];

const maximumFileSize = 8 * 1024 * 1024;
const maximumFiles = 5;

export function QuotePageContent() {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [fileError, setFileError] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleFileSelection = (event: ChangeEvent<HTMLInputElement>) => {
    const incomingFiles = Array.from(event.target.files ?? []);

    if (incomingFiles.length === 0) {
      return;
    }

    const availableSlots = maximumFiles - selectedFiles.length;

    if (availableSlots <= 0) {
      setFileError(`You can upload a maximum of ${maximumFiles} files.`);
      event.target.value = "";
      return;
    }

    const validFiles: File[] = [];
    let validationMessage = "";

    incomingFiles.slice(0, availableSlots).forEach((file) => {
      if (!acceptedFileTypes.includes(file.type)) {
        validationMessage =
          "Only JPG, PNG, WEBP and PDF files can be uploaded.";
        return;
      }

      if (file.size > maximumFileSize) {
        validationMessage = "Each uploaded file must be smaller than 8 MB.";
        return;
      }

      const alreadySelected = selectedFiles.some(
        (selectedFile) =>
          selectedFile.name === file.name &&
          selectedFile.size === file.size &&
          selectedFile.lastModified === file.lastModified,
      );

      if (!alreadySelected) {
        validFiles.push(file);
      }
    });

    setSelectedFiles((currentFiles) =>
      [...currentFiles, ...validFiles].slice(0, maximumFiles),
    );

    setFileError(validationMessage);
    event.target.value = "";
  };

  const removeSelectedFile = (fileIndex: number) => {
    setSelectedFiles((currentFiles) =>
      currentFiles.filter((_, index) => index !== fileIndex),
    );

    setFileError("");
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitted(true);

    window.setTimeout(() => {
      setIsSubmitted(false);
    }, 6000);
  };

  return (
    <div>
      <section className={styles.hero}>
        <div className={styles.heroGlow} aria-hidden="true" />
        <div className={styles.heroGrid} aria-hidden="true" />

        <Container>
          <div className={styles.heroLayout}>
            <div className={styles.heroContent}>
              <span className={styles.eyebrow}>
                <Sparkles size={15} strokeWidth={1.8} />
                Project quotation
              </span>

              <h1 className={styles.heroTitle}>
                Tell us about the space you want to{" "}
                <span>transform.</span>
              </h1>

              <p className={styles.heroDescription}>
                Share the details of your project and receive a considered,
                transparent quotation tailored to your creative vision, space
                and timeline.
              </p>
            </div>

            <div className={styles.heroAside}>
              <span className={styles.asideNumber}>01</span>

              <p>
                Every meaningful creative project begins with understanding the
                space, purpose and people behind it.
              </p>

              <div className={styles.heroAssurance}>
                <ShieldCheck size={18} strokeWidth={1.7} />

                <span>
                  Your project information and uploaded references remain
                  private.
                </span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className={styles.formSection}>
        <Container>
          <div className={styles.formLayout}>
            <aside className={styles.projectGuide}>
              <span className={styles.sectionEyebrow}>Before you begin</span>

              <h2 className={styles.guideTitle}>
                A few details help us prepare a more accurate quotation.
              </h2>

              <p className={styles.guideDescription}>
                You do not need to have everything finalized. Share what you
                already know and our team will help define the remaining
                details.
              </p>

              <div className={styles.guideList}>
                <div className={styles.guideItem}>
                  <span>
                    <Check size={15} strokeWidth={2} />
                  </span>

                  <p>
                    Include the approximate size and type of your space where
                    possible.
                  </p>
                </div>

                <div className={styles.guideItem}>
                  <span>
                    <Check size={15} strokeWidth={2} />
                  </span>

                  <p>
                    Upload photographs, architectural drawings or visual
                    references.
                  </p>
                </div>

                <div className={styles.guideItem}>
                  <span>
                    <Check size={15} strokeWidth={2} />
                  </span>

                  <p>
                    Mention your expected timeline, location and approximate
                    budget.
                  </p>
                </div>
              </div>

              <div className={styles.guideNote}>
                <span>Typical response time</span>
                <strong>Within 1–2 business days</strong>
              </div>
            </aside>

            <div className={styles.formPanel}>
              <div className={styles.formHeading}>
                <span>Project enquiry</span>

                <h2>Request your tailored quotation.</h2>

                <p>
                  Fields marked with an asterisk are required to review your
                  project.
                </p>
              </div>

              <form className={styles.form} onSubmit={handleSubmit}>
                <fieldset className={styles.fieldset}>
                  <legend>
                    <span>01</span>
                    Your information
                  </legend>

                  <div className={styles.twoColumnGrid}>
                    <div className={styles.field}>
                      <label htmlFor="quote-full-name">
                        Full name <span>*</span>
                      </label>

                      <input
                        id="quote-full-name"
                        name="fullName"
                        type="text"
                        autoComplete="name"
                        placeholder="Your full name"
                        required
                      />
                    </div>

                    <div className={styles.field}>
                      <label htmlFor="quote-company-name">
                        Company or organization
                      </label>

                      <input
                        id="quote-company-name"
                        name="companyName"
                        type="text"
                        autoComplete="organization"
                        placeholder="Optional"
                      />
                    </div>

                    <div className={styles.field}>
                      <label htmlFor="quote-email">
                        Email address <span>*</span>
                      </label>

                      <input
                        id="quote-email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        placeholder="you@example.com"
                        required
                      />
                    </div>

                    <div className={styles.field}>
                      <label htmlFor="quote-phone">
                        Phone number <span>*</span>
                      </label>

                      <input
                        id="quote-phone"
                        name="phone"
                        type="tel"
                        autoComplete="tel"
                        placeholder="+880"
                        required
                      />
                    </div>
                  </div>
                </fieldset>

                <fieldset className={styles.fieldset}>
                  <legend>
                    <span>02</span>
                    Project overview
                  </legend>

                  <div className={styles.twoColumnGrid}>
                    <div className={styles.field}>
                      <label htmlFor="quote-service">
                        Required service <span>*</span>
                      </label>

                      <div className={styles.selectWrapper}>
                        <select
                          id="quote-service"
                          name="service"
                          defaultValue=""
                          required
                        >
                          <option value="" disabled>
                            Select a service
                          </option>

                          {quoteServiceOptions.map((option) => (
                            <option key={option} value={option}>
                              {option}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className={styles.field}>
                      <label htmlFor="quote-project-type">
                        Project type <span>*</span>
                      </label>

                      <div className={styles.selectWrapper}>
                        <select
                          id="quote-project-type"
                          name="projectType"
                          defaultValue=""
                          required
                        >
                          <option value="" disabled>
                            Select project type
                          </option>

                          {quoteProjectTypeOptions.map((option) => (
                            <option key={option} value={option}>
                              {option}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className={styles.field}>
                      <label htmlFor="quote-location">
                        Project location <span>*</span>
                      </label>

                      <input
                        id="quote-location"
                        name="location"
                        type="text"
                        placeholder="City and area"
                        required
                      />
                    </div>

                    <div className={styles.field}>
                      <label htmlFor="quote-space-size">
                        Approximate space size
                      </label>

                      <div className={styles.selectWrapper}>
                        <select
                          id="quote-space-size"
                          name="spaceSize"
                          defaultValue=""
                        >
                          <option value="" disabled>
                            Select approximate size
                          </option>

                          {quoteSpaceSizeOptions.map((option) => (
                            <option key={option} value={option}>
                              {option}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>
                </fieldset>

                <fieldset className={styles.fieldset}>
                  <legend>
                    <span>03</span>
                    Timeline and budget
                  </legend>

                  <div className={styles.twoColumnGrid}>
                    <div className={styles.field}>
                      <label htmlFor="quote-timeline">
                        Preferred timeline <span>*</span>
                      </label>

                      <div className={styles.selectWrapper}>
                        <select
                          id="quote-timeline"
                          name="timeline"
                          defaultValue=""
                          required
                        >
                          <option value="" disabled>
                            Select a timeline
                          </option>

                          {quoteTimelineOptions.map((option) => (
                            <option key={option} value={option}>
                              {option}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className={styles.field}>
                      <label htmlFor="quote-budget">
                        Approximate budget <span>*</span>
                      </label>

                      <div className={styles.selectWrapper}>
                        <select
                          id="quote-budget"
                          name="budget"
                          defaultValue=""
                          required
                        >
                          <option value="" disabled>
                            Select a budget range
                          </option>

                          {quoteBudgetOptions.map((option) => (
                            <option key={option} value={option}>
                              {option}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>
                </fieldset>

                <fieldset className={styles.fieldset}>
                  <legend>
                    <span>04</span>
                    Creative direction
                  </legend>

                  <div className={styles.field}>
                    <label htmlFor="quote-project-description">
                      Describe your project <span>*</span>
                    </label>

                    <textarea
                      id="quote-project-description"
                      name="projectDescription"
                      rows={8}
                      placeholder="Tell us about the space, creative direction, objectives, preferred style, colours and any important requirements."
                      required
                    />
                  </div>

                  <div className={styles.uploadField}>
                    <div className={styles.uploadHeading}>
                      <div>
                        <label htmlFor="quote-reference-files">
                          Reference files
                        </label>

                        <p>
                          Upload space photographs, drawings, moodboards or
                          inspiration.
                        </p>
                      </div>

                      <span>
                        {selectedFiles.length}/{maximumFiles}
                      </span>
                    </div>

                    <input
                      ref={fileInputRef}
                      id="quote-reference-files"
                      name="referenceFiles"
                      type="file"
                      accept=".jpg,.jpeg,.png,.webp,.pdf"
                      multiple
                      className={styles.hiddenFileInput}
                      onChange={handleFileSelection}
                    />

                    <button
                      type="button"
                      className={styles.uploadArea}
                      onClick={() => fileInputRef.current?.click()}
                    >
                      <span className={styles.uploadIcon}>
                        <Upload size={22} strokeWidth={1.7} />
                      </span>

                      <span className={styles.uploadCopy}>
                        <strong>Choose files or add references</strong>
                        <small>JPG, PNG, WEBP or PDF — maximum 8 MB each</small>
                      </span>

                      <span className={styles.uploadAction}>
                        Browse files
                        <Paperclip size={15} strokeWidth={1.8} />
                      </span>
                    </button>

                    {fileError ? (
                      <p className={styles.fileError} role="alert">
                        {fileError}
                      </p>
                    ) : null}

                    {selectedFiles.length > 0 ? (
                      <div
                        className={styles.selectedFiles}
                        aria-label="Selected reference files"
                      >
                        {selectedFiles.map((file, index) => (
                          <div
                            key={`${file.name}-${file.lastModified}`}
                            className={styles.selectedFile}
                          >
                            <span className={styles.fileIcon}>
                              <FileImage size={17} strokeWidth={1.7} />
                            </span>

                            <span className={styles.fileDetails}>
                              <strong>{file.name}</strong>

                              <small>
                                {(file.size / 1024 / 1024).toFixed(2)} MB
                              </small>
                            </span>

                            <button
                              type="button"
                              aria-label={`Remove ${file.name}`}
                              onClick={() => removeSelectedFile(index)}
                            >
                              <X size={16} strokeWidth={1.8} />
                            </button>
                          </div>
                        ))}
                      </div>
                    ) : null}
                  </div>
                </fieldset>

                <div className={styles.consentRow}>
                  <input
                    id="quote-consent"
                    name="consent"
                    type="checkbox"
                    required
                  />

                  <label htmlFor="quote-consent">
                    I agree that OW Creative Studio may use the information
                    provided to review my project and contact me regarding this
                    quotation request. <span>*</span>
                  </label>
                </div>

                <div className={styles.submitRow}>
                  <button
                    type="submit"
                    className={styles.submitButton}
                    disabled={isSubmitted}
                  >
                    {isSubmitted ? "Request received" : "Request a Quote"}

                    {isSubmitted ? (
                      <Check size={18} strokeWidth={2} />
                    ) : (
                      <ArrowUpRight size={18} strokeWidth={1.8} />
                    )}
                  </button>

                  <p>
                    This form currently provides the quotation enquiry
                    interface. Submission integration will be connected during
                    the production phase.
                  </p>
                </div>

                {isSubmitted ? (
                  <div className={styles.successMessage} role="status">
                    <span>
                      <Check size={18} strokeWidth={2} />
                    </span>

                    <div>
                      <strong>Your project enquiry has been prepared.</strong>

                      <p>
                        The live submission workflow will be activated during
                        backend integration.
                      </p>
                    </div>
                  </div>
                ) : null}
              </form>
            </div>
          </div>
        </Container>
      </section>

      <section className={styles.processSection}>
        <Container>
          <div className={styles.processHeader}>
            <div>
              <span className={styles.sectionEyebrow}>
                What happens next
              </span>

              <h2>
                A clear journey from first enquiry to finished artwork.
              </h2>
            </div>

            <p>
              Our process is designed to keep every decision clear,
              collaborative and aligned with the character of your space.
            </p>
          </div>

          <div className={styles.processGrid}>
            {processSteps.map((step) => (
              <article key={step.number} className={styles.processCard}>
                <span className={styles.processNumber}>{step.number}</span>

                <div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className={styles.closingSection}>
        <Container>
          <div className={styles.closingContent}>
            <span className={styles.sectionEyebrow}>
              Not ready for a quote?
            </span>

            <h2>
              Begin with a conversation about your space and creative ideas.
            </h2>

            <a href="/contact" className={styles.closingLink}>
              Contact the studio
              <ArrowUpRight size={18} strokeWidth={1.8} />
            </a>
          </div>
        </Container>
      </section>
    </div>
  );
}