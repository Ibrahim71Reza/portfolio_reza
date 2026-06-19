import { PortfolioItemSchema, PortfolioItem } from "./schema";
import { webProjects } from "./projects/web";
// We will import aiModels, linuxTools, etc. here later!

// 1. Combine all arrays
const rawData: PortfolioItem[] = [
  ...webProjects,
];

// 2. Validate everything strictly at build time
// If you make a typo in web.ts, the app will refuse to build and warn you!
export const allPortfolioItems = rawData.map((item) => 
  PortfolioItemSchema.parse(item)
);

// 3. Helper functions for the UI
export const getFeaturedItems = () => allPortfolioItems.filter(item => item.featured);
export const getItemsByCategory = (category: PortfolioItem["category"]) => 
  allPortfolioItems.filter(item => item.category === category);