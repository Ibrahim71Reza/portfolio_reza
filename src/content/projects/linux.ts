import { PortfolioItem } from "../schema";

export const linuxProjects: PortfolioItem[] = [
  {
    id: "kali-hunter-script",
    title: "Kali Hunter Auto-Recon",
    category: "linux-tool",
    description: "Automated bash script for CTF enumeration and vulnerability scanning.",
    coverImage: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1000&auto=format&fit=crop",
    tags: ["Bash", "Cybersecurity", "Nmap"],
    links: [
      { type: "github", url: "https://github.com/" }
    ],
    featured: false,
  }
];