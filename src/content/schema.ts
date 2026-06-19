import { z } from "zod";

// The types of links a project can have
export const LinkSchema = z.object({
  type: z.enum(["github", "demo", "download", "huggingface", "store", "paper"]),
  url: z.string().url(),
  label: z.string().optional(),
});

// The blueprint for EVERY item in your portfolio
export const PortfolioItemSchema = z.object({
  id: z.string(), // e.g., "phishguard-ext"
  title: z.string(),
  category: z.enum([
    "web", "ai", "desktop", "linux-tool", "vscode", 
    "chrome-ext", "cybersec-ctf", "certificate", "research"
  ]),
  description: z.string(),
  coverImage: z.string(), // e.g., "/images/phishguard.png"
  tags: z.array(z.string()), // e.g., ["Python", "Machine Learning"]
  links: z.array(LinkSchema),
  featured: z.boolean().default(false), // If true, shows on the Home page
});

// Export the TypeScript type so our React components can use it
export type PortfolioItem = z.infer<typeof PortfolioItemSchema>;