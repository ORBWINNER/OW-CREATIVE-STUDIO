export type HomePortfolioItem = {
  id: string;
  title: string;
  category: string;
  image: string;
  href: string;
};

export type PortfolioProject = {
  title: string;
  category: string;
  location: string;
  year: string;
};

export const homePortfolioItems: HomePortfolioItem[] = [
  {
    id: "01",
    title: "Luxury Interior Wall Art",
    category: "Residential",
    image: "/images/home/portfolio/project-01.webp",
    href: "/portfolio/luxury-interior-wall-art",
  },
  {
    id: "02",
    title: "Restaurant Mural Design",
    category: "Commercial",
    image: "/images/home/portfolio/project-02.webp",
    href: "/portfolio/restaurant-mural-design",
  },
  {
    id: "03",
    title: "Terracotta Feature Wall",
    category: "Art Installation",
    image: "/images/home/portfolio/project-03.webp",
    href: "/portfolio/terracotta-feature-wall",
  },
];

export const portfolioProjects: PortfolioProject[] = [
  {
    title: "Nature’s Flow",
    category: "Wall Painting",
    location: "Residential Interior",
    year: "2026",
  },
  {
    title: "Abstract Harmony",
    category: "Canvas Painting",
    location: "Private Collection",
    year: "2026",
  },
  {
    title: "Botanical Elegance",
    category: "Mural Art",
    location: "Hospitality Space",
    year: "2025",
  },
  {
    title: "Earthbound Forms",
    category: "Terracotta Art",
    location: "Commercial Interior",
    year: "2025",
  },
  {
    title: "Quiet Geometry",
    category: "Decorative Wall Art",
    location: "Contemporary Residence",
    year: "2025",
  },
  {
    title: "Living Identity",
    category: "Brand Identity",
    location: "Creative Business",
    year: "2025",
  },
];