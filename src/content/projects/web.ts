import { PortfolioItem } from "../schema";

export const webProjects: PortfolioItem[] = [
  {
    id: "diagram-viewer",
    title: "Diagram Viewer Pro",
    category: "web",
    description: "A fast, interactive tool for visualizing complex software architectures and DAGs.",
    coverImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop", // Dummy image for now
    tags: ["Next.js", "TypeScript", "Tailwind"],
    links: [
      { type: "github", url: "https://github.com/Ibrahim71Reza/diagram-viewer" },
      { type: "demo", url: "https://diagram-viewer.vercel.app" }
    ],
    featured: true,
  },
  {
    id: "fitness-tracker",
    title: "FitLife Tracker",
    category: "web",
    description: "Cross-platform student fitness application backed by Supabase.",
    coverImage: "https://images.unsplash.com/photo-1526506114622-6b99de23405f?q=80&w=1000&auto=format&fit=crop",
    tags: ["Flutter", "Supabase", "React"],
    links: [
      { type: "github", url: "https://github.com/Ibrahim71Reza" }
    ],
    featured: false,
  }
];