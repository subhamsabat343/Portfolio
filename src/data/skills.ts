import {
  Palette,
  Server,
  Database,
  Code2,
  Wrench,
  Brain,
} from "lucide-react";
import { SkillCategory } from "@/types";

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    icon: Palette,
    skills: [
      "HTML5",
      "CSS3",
      "Bootstrap",
      "Tailwind CSS",
      "JavaScript",
      "TypeScript",
      "React",
      "React Native",
      "Next.js",
    ],
  },
  {
    title: "Backend",
    icon: Server,
    skills: ["Node.js", "Express", "NestJS", "Spring", "Spring Boot"],
  },
  {
    title: "Databases",
    icon: Database,
    skills: ["MongoDB", "PostgreSQL", "MySQL", "Oracle"],
  },
  {
    title: "Languages",
    icon: Code2,
    skills: ["C", "C++", "Java", "Python"],
  },
  {
    title: "Tools",
    icon: Wrench,
    skills: ["Git", "Linux", "Docker"],
  },
  {
    title: "Problem Solving",
    icon: Brain,
    skills: ["Data Structures", "Algorithms", "System Design"],
  },
];
