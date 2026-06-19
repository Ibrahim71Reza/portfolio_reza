export type ExperienceItem = {
  id: string;
  title: string;
  organization: string;
  date: string;
  description: string;
  type: "work" | "education" | "research";
};

export const experienceData: ExperienceItem[] = [
  {
    id: "1",
    title: "Cybersecurity Researcher",
    organization: "MIST Cyber Security Club",
    date: "2023 - Present",
    description: "Conducting research on Quantum-classical ML models for intrusion detection. Publishing findings in IEEE conferences.",
    type: "research",
  },
  {
    id: "2",
    title: "Full Stack Developer",
    organization: "Freelance / Independent",
    date: "2022 - Present",
    description: "Built and deployed over 15+ websites, multiple Chrome extensions, and cross-platform desktop applications.",
    type: "work",
  },
  {
    id: "3",
    title: "B.Sc. in Computer Science",
    organization: "Military Institute of Science and Technology (MIST)",
    date: "2021 - 2025",
    description: "Focused on advanced algorithms, cryptography, and systems architecture. Active participant in AtCoder heuristic contests.",
    type: "education",
  },
];