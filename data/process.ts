import type { LucideIcon } from "lucide-react";
import {
  CheckCircle2,
  ClipboardCheck,
  Hammer,
  Lightbulb,
  MessageCircle,
  Paintbrush,
} from "lucide-react";

export type HomeProcessStep = {
  number: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
};

export type ProcessPageStep = {
  number: string;
  title: string;
  description: string;
  details: string[];
  icon: LucideIcon;
};

export const homeProcessSteps: HomeProcessStep[] = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We understand your space, objectives, style preferences and project requirements before any creative direction begins.",
    image: "/images/home/process/discovery.webp",
    imageAlt:
      "Creative discovery and project planning by OW Creative Studio",
  },
  {
    number: "02",
    title: "Concept",
    description:
      "Ideas are translated into moodboards, layouts, sketches and material directions that define the project's identity.",
    image: "/images/home/process/concept.webp",
    imageAlt:
      "Art concept development and material selection process",
  },
  {
    number: "03",
    title: "Creation",
    description:
      "Our artists carefully develop every detail with craftsmanship, balance and lasting visual quality.",
    image: "/images/home/process/creation.webp",
    imageAlt:
      "Artist creating a custom artwork for an interior space",
  },
  {
    number: "04",
    title: "Installation",
    description:
      "Every element is completed with precision so the finished space feels natural, timeless and memorable.",
    image: "/images/home/process/installation.webp",
    imageAlt:
      "Professional artwork installation in a completed interior",
  },
];

export const processPageSteps: ProcessPageStep[] = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We begin by discussing your ideas, goals, space, preferred style and practical requirements. This helps us understand the purpose and creative direction of the project.",
    details: [
      "Initial client discussion",
      "Space and requirement review",
      "Creative direction identification",
    ],
    icon: MessageCircle,
  },
  {
    number: "02",
    title: "Concept Development",
    description:
      "Based on the discovery stage, we develop the first creative concepts, visual references and artistic possibilities for the project.",
    details: [
      "Concept exploration",
      "Visual references and sketches",
      "Style and composition planning",
    ],
    icon: Lightbulb,
  },
  {
    number: "03",
    title: "Design Approval",
    description:
      "The preferred direction is refined and presented for approval. Materials, dimensions, colours, scope and project timing are confirmed before production begins.",
    details: [
      "Concept refinement",
      "Material and colour confirmation",
      "Scope and timeline approval",
    ],
    icon: ClipboardCheck,
  },
  {
    number: "04",
    title: "Creation",
    description:
      "The approved concept moves into production. Our team creates the artwork with careful attention to craftsmanship, consistency and visual quality.",
    details: [
      "Artwork production",
      "Quality-focused execution",
      "Progress review and coordination",
    ],
    icon: Paintbrush,
  },
  {
    number: "05",
    title: "Installation",
    description:
      "For projects requiring on-site work, the artwork is installed or executed within the selected space while maintaining cleanliness, safety and finishing quality.",
    details: [
      "On-site preparation",
      "Professional installation",
      "Detail and finish inspection",
    ],
    icon: Hammer,
  },
  {
    number: "06",
    title: "Final Delivery",
    description:
      "The completed project is reviewed together with the client. Final details are checked before the artwork or design is formally handed over.",
    details: [
      "Final quality review",
      "Client walkthrough",
      "Project completion and handover",
    ],
    icon: CheckCircle2,
  },
];