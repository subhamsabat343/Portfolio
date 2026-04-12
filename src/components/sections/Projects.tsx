"use client";

import { motion } from "framer-motion";
import { ExternalLink, Globe, FolderGit2 } from "lucide-react";
import { projects } from "@/data/projects";
import SectionTitle from "@/components/ui/SectionTitle";
import Badge from "@/components/ui/Badge";

export default function Projects() {
  return (
    <section id="projects" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          number="03."
          subtitle="Work"
          title="Featured Projects"
          description="A selection of projects that showcase my problem-solving skills and technical range."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="glass rounded-2xl overflow-hidden group glow-hover flex flex-col"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
            >
              {/* Project image area / colored header */}
              <div className="relative h-40 bg-gradient-to-br from-[var(--color-bg-tertiary)] to-[var(--color-bg-elevated)] flex items-center justify-center border-b border-[var(--color-border)] overflow-hidden">
                <FolderGit2
                  className="text-[var(--color-text-tertiary)] opacity-20 group-hover:opacity-30 transition-opacity"
                  size={56}
                />
                {/* Category badge */}
                <div className="absolute top-4 left-4">
                  <Badge variant="accent">{project.category}</Badge>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-lg font-bold text-[var(--color-text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                  {project.title}
                </h3>

                <p className="text-sm text-[var(--color-text-tertiary)] leading-relaxed mb-4 flex-1">
                  {project.description}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2.5 py-1 rounded-md bg-[var(--color-bg-tertiary)] text-[var(--color-text-tertiary)] font-medium border border-[var(--color-border)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action links */}
                <div className="flex gap-4 pt-4 border-t border-[var(--color-border)]">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-[var(--color-text-tertiary)] hover:text-[var(--color-accent)] transition-colors text-sm font-medium"
                    whileHover={{ x: 2 }}
                  >
                    <Globe size={16} />
                    <span>Code</span>
                  </motion.a>
                  {project.live && (
                    <motion.a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-[var(--color-text-tertiary)] hover:text-[var(--color-accent)] transition-colors text-sm font-medium"
                      whileHover={{ x: 2 }}
                    >
                      <ExternalLink size={16} />
                      <span>Live Demo</span>
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
