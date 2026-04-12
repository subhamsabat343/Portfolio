import { Experience } from "@/types";

export const experiences: Experience[] = [
  {
    role: "Software Engineer",
    company: "Tech Company",
    duration: "2024 — Present",
    description:
      "Full-stack development of enterprise web applications using modern JavaScript/TypeScript frameworks. Contributing to architecture decisions and code reviews.",
    contributions: [
      "Developed and maintained full-stack features using React, Next.js, and Node.js",
      "Implemented RESTful APIs and integrated with PostgreSQL databases",
      "Collaborated with cross-functional teams to deliver products on schedule",
      "Improved application performance through code optimization and caching strategies",
    ],
    tech: ["React", "Next.js", "Node.js", "TypeScript", "PostgreSQL"],
  },
  {
    role: "Junior Developer",
    company: "Startup Inc.",
    duration: "2022 — 2024",
    description:
      "Worked on frontend development for customer-facing applications, building responsive UIs and integrating backend APIs.",
    contributions: [
      "Built responsive web interfaces using React and Tailwind CSS",
      "Integrated REST APIs and managed application state",
      "Wrote unit and integration tests to ensure code quality",
      "Participated in agile sprints and daily standups",
    ],
    tech: ["React", "JavaScript", "Tailwind CSS", "Git"],
  },
];
