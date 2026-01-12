import { motion } from "framer-motion";

interface SectionTitleProps {
  title: string;
  description?: string;
  className?: string;
}

export default function SectionTitle({
  title,
  description,
  className = "",
}: SectionTitleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`text-center mb-16 ${className}`}
    >
      <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
        {title}
      </h2>
      <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6" />
      {description && (
        <p className="text-lg text-gray-600 dark:text-gray-400 mt-6 max-w-2xl mx-auto">
          {description}
        </p>
      )}
    </motion.div>
  );
}
