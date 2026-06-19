import { PortfolioItemSchema, PortfolioItem } from "./schema";
import { webProjects } from "./projects/web";
import { aiProjects } from "./projects/ai";          // <-- Add this
import { linuxProjects } from "./projects/linux";    // <-- Add this

// Combine all arrays
const rawData: PortfolioItem[] = [
  ...webProjects,
  ...aiProjects,                                     // <-- Add this
  ...linuxProjects,                                  // <-- Add this
];

export const allPortfolioItems = rawData.map((item) => 
  PortfolioItemSchema.parse(item)
);

export const getFeaturedItems = () => allPortfolioItems.filter(item => item.featured);
export const getItemsByCategory = (category: PortfolioItem["category"]) => 
  allPortfolioItems.filter(item => item.category === category);