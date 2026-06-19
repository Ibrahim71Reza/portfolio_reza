import { PortfolioItem } from "../schema";

export const aiProjects: PortfolioItem[] = [
  {
    id: "hqc-nids",
    title: "HQC-NIDS Hybrid Classifier",
    category: "ai",
    description: "Quantum-classical model for intrusion detection on CICIDS2018 dataset.",
    coverImage: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1000&auto=format&fit=crop",
    tags: ["Quantum ML", "PyTorch", "HuggingFace"],
    links: [
      { type: "huggingface", url: "https://huggingface.co/" },
      { type: "paper", url: "https://ieee.org" }
    ],
    featured: true,
  }
];