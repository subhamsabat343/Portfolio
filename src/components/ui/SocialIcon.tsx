import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface SocialIconProps {
  icon: LucideIcon;
  href: string;
  name: string;
  delay: number;
  className?: string;
}

export default function SocialIcon({
  icon: Icon,
  href,
  name,
  delay,
  className = "",
}: SocialIconProps) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:scale-110 transition-transform shadow-lg hover:shadow-xl ${className}`}
      whileHover={{ scale: 1.15, rotate: 5 }}
      whileTap={{ scale: 0.9 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      aria-label={name}
    >
      <Icon size={20} />
    </motion.a>
  );
}
