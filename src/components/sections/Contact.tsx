"use client";

import { motion } from "framer-motion";
import { contactInfo, contactSocialLinks } from "@/data/contact";
import SectionTitle from "@/components/ui/SectionTitle";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
    >
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          title="Get In Touch"
          description="I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions. Feel free to reach out!"
        />

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {contactInfo.map((info, index) => {
            const IconComponent = info.icon;
            const cardContent = (
              <>
                <div
                  className={`w-16 h-16 rounded-full bg-gradient-to-r ${info.color} flex items-center justify-center mb-4`}
                >
                  <IconComponent className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
                  {info.label}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {info.value}
                </p>
              </>
            );

            return (
              <motion.div
                key={info.label}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={info.href ? { y: -5, scale: 1.02 } : {}}
              >
                {info.href ? (
                  <a
                    href={info.href}
                    className="block bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all"
                  >
                    {cardContent}
                  </a>
                ) : (
                  <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 border border-gray-100 dark:border-gray-700">
                    {cardContent}
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-10">
            Connect With Me
          </h3>
          <div className="flex flex-wrap justify-center gap-6">
            {contactSocialLinks.map((social, index) => {
              const IconComponent = social.icon;
              return (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-3 p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all min-w-[140px] border border-gray-100 dark:border-gray-700"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="w-14 h-14 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center">
                    <IconComponent className="text-white" size={24} />
                  </div>
                  <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                    {social.name}
                  </span>
                </motion.a>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
