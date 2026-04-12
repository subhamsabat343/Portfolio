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
      "HTML",
      "CSS",
      "Bootstrap",
      "Tailwind CSS",
      "JavaScript",
      "TypeScript",
      "React",
      "React Native",
      "Next",
      "Angular"
    ],
  },
  {
    title: "Backend",
    icon: Server,
    skills: ["Node", "Express", "Nest", "Spring", "Spring Boot"],
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
    skills: ["Git", "GitHub", "Linux", "Docker", "Nginx", "AWS", "Jira"],
  },
  {
    title: "Problem Solving",
    icon: Brain,
    skills: ["Data Structures and Algorithms", "System Design"],
  },
];
