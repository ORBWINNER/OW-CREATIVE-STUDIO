import type { LucideIcon } from "lucide-react";
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

export type ServiceItem = {
  title: string;
  href: string;
  icon: LucideIcon;
  homeDescription?: string;
  pageDescription: string;
  image?: string;
  featuredOnHome?: boolean;
};

export const artisticServices: ServiceItem[] = [
  {
    title: "Wall Painting",
    href: "/services/wall-painting",
    icon: Paintbrush,
    image: "/images/home/services/wall-painting.webp",
    featuredOnHome: true,
    homeDescription:
      "Custom wall paintings that bring colour, emotion and identity to residential, commercial and hospitality spaces.",
    pageDescription:
      "Custom wall painting solutions created to introduce colour, character and visual identity into residential and commercial spaces.",
  },
  {
    title: "Mural Art",
    href: "/services/mural-art",
    icon: Brush,
    image: "/images/home/services/mural-art.webp",
    featuredOnHome: true,
    homeDescription:
      "Large-scale murals shaped around architecture, brand character and meaningful visual storytelling.",
    pageDescription:
      "Large-scale mural artwork developed around the story, atmosphere and purpose of each environment.",
  },
  {
    title: "Terracotta Art",
    href: "/services/terracotta-art",
    icon: Shapes,
    image: "/images/home/services/terracotta-art.webp",
    featuredOnHome: true,
    homeDescription:
      "Handcrafted terracotta compositions that combine traditional material with contemporary spatial design.",
    pageDescription:
      "Handcrafted terracotta artwork combining traditional material, artistic detail and contemporary spatial presentation.",
  },
  {
    title: "Canvas Painting",
    href: "/services/canvas-painting",
    icon: Frame,
    image: "/images/home/services/canvas-painting.webp",
    featuredOnHome: true,
    homeDescription:
      "Bespoke canvas artworks developed with a distinctive visual language for your interior and collection.",
    pageDescription:
      "Original and customized canvas paintings created to complement the mood, scale and visual language of a space.",
  },
  {
    title: "Decorative Wall Art",
    href: "/services/decorative-wall-art",
    icon: ImageIcon,
    pageDescription:
      "Purposeful decorative compositions that transform plain walls into expressive and visually balanced focal points.",
  },
  {
    title: "Custom Artwork",
    href: "/services/custom-artwork",
    icon: Palette,
    pageDescription:
      "Bespoke artwork developed according to the client's space, concept, preferred style and creative requirements.",
  },
  {
    title: "Art Space Enhancement",
    href: "/services/art-space-enhancement",
    icon: Building2,
    image: "/images/home/services/art-space-enhancement.webp",
    featuredOnHome: true,
    homeDescription:
      "Thoughtful artistic interventions that improve atmosphere, identity and the overall experience of a space.",
    pageDescription:
      "Carefully selected artistic elements that improve the atmosphere, character and visual experience of an existing space.",
  },
];

export const designServices: ServiceItem[] = [
  {
    title: "Graphic Design",
    href: "/services/graphic-design",
    icon: PenTool,
    pageDescription:
      "Clear and professional visual communication created for digital platforms, print materials and business applications.",
  },
  {
    title: "Logo Design",
    href: "/services/logo-design",
    icon: Sparkles,
    pageDescription:
      "Distinctive logo systems designed to communicate the personality, purpose and professional identity of a brand.",
  },
  {
    title: "Brand Identity",
    href: "/services/brand-identity",
    icon: Layers3,
    pageDescription:
      "Consistent visual identity systems that connect logo, typography, colour and supporting brand elements.",
  },
];

export const homeServices = artisticServices.filter(
  (service) => service.featuredOnHome,
);