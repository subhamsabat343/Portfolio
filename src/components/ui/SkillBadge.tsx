import { motion } from "framer-motion";
import { techIcons, defaultTechIcon } from "@/data/techIcons";

interface SkillBadgeProps {
  skill: string;
  delay: number;
}

export default function SkillBadge({ skill, delay }: SkillBadgeProps) {
  const icon = techIcons[skill] || defaultTechIcon;
  
  return (
    <motion.span
      className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-700 dark:text-blue-300 rounded-lg text-sm font-semibold border border-blue-200/50 dark:border-blue-700/50"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{
        delay,
        duration: 0.3,
      }}
      whileHover={{ scale: 1.1 }}
    >
      <span className="text-base leading-none">{icon}</span>
      <span>{skill}</span>
    </motion.span>
  );
}
