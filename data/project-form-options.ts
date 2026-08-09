const sharedServiceLabels = {
  wallPainting: "Wall Painting",
  muralArt: "Mural Art",
  terracottaArt: "Terracotta Art",
  decorativeWallArt: "Decorative Wall Art",
  customArtwork: "Custom Artwork",
  artSpaceEnhancement: "Art Space Enhancement",
  graphicDesign: "Graphic Design",
  logoDesign: "Logo Design",
  brandIdentity: "Brand Identity",
  other: "Other",
} as const;

export const contactServiceOptions = [
  sharedServiceLabels.wallPainting,
  sharedServiceLabels.muralArt,
  sharedServiceLabels.terracottaArt,
  "Canvas Painting",
  sharedServiceLabels.decorativeWallArt,
  sharedServiceLabels.customArtwork,
  sharedServiceLabels.artSpaceEnhancement,
  sharedServiceLabels.graphicDesign,
  sharedServiceLabels.logoDesign,
  sharedServiceLabels.brandIdentity,
  sharedServiceLabels.other,
];

export const quoteServiceOptions = [
  sharedServiceLabels.muralArt,
  sharedServiceLabels.wallPainting,
  "Canvas Art",
  "Interior Art",
  sharedServiceLabels.terracottaArt,
  sharedServiceLabels.decorativeWallArt,
  sharedServiceLabels.customArtwork,
  sharedServiceLabels.artSpaceEnhancement,
  sharedServiceLabels.graphicDesign,
  sharedServiceLabels.logoDesign,
  sharedServiceLabels.brandIdentity,
  sharedServiceLabels.other,
];

const sharedTimelines = {
  oneMonth: "Within 1 month",
  twoToThreeMonths: "Within 2–3 months",
  threeToSixMonths: "Within 3–6 months",
} as const;

export const contactTimelineOptions = [
  "As soon as possible",
  sharedTimelines.oneMonth,
  sharedTimelines.twoToThreeMonths,
  sharedTimelines.threeToSixMonths,
  "Flexible timeline",
];

export const quoteTimelineOptions = [
  "Urgent — Within 2 weeks",
  sharedTimelines.oneMonth,
  sharedTimelines.twoToThreeMonths,
  sharedTimelines.threeToSixMonths,
  "Flexible",
];

export const contactBudgetOptions = [
  "Not decided yet",
  "Under ৳25,000",
  "৳25,000–৳50,000",
  "৳50,000–৳100,000",
  "৳100,000–৳250,000",
  "Above ৳250,000",
];

export const quoteBudgetOptions = [
  "Under ৳50,000",
  "৳50,000–৳1,00,000",
  "৳1,00,000–৳3,00,000",
  "৳3,00,000–৳5,00,000",
  "Above ৳5,00,000",
  "Need guidance",
];

export const quoteProjectTypeOptions = [
  "Residential",
  "Commercial",
  "Office",
  "Restaurant",
  "Hotel",
  "Retail",
  "Hospitality",
  "Public Space",
  "Other",
];

export const quoteSpaceSizeOptions = [
  "Small — Under 100 sq. ft.",
  "Medium — 100–500 sq. ft.",
  "Large — 500–1,500 sq. ft.",
  "Extra Large — Above 1,500 sq. ft.",
  "Not sure yet",
];