import {
  Palette,
  Settings,
  Database,
  Code2,
  Wrench,
  Brain,
} from "lucide-react";
import { SkillCategory } from "@/types";

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend Development",
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
    title: "Backend Development",
    icon: Settings,
    skills: ["Node.js", "Express", "NestJS", "Spring", "Spring Boot"],
  },
  {
    title: "Databases",
    icon: Database,
    skills: ["MongoDB", "PostgreSQL", "MySQL", "Oracle"],
  },
  {
    title: "Programming Languages",
    icon: Code2,
    skills: ["C", "C++", "Java", "Python"],
  },
  {
    title: "Development Tools",
    icon: Wrench,
    skills: ["Git", "Linux", "Docker"],
  },
  {
    title: "Problem Solving",
    icon: Brain,
    skills: ["Data Structures", "Algorithms", "System Design"],
  },
];
