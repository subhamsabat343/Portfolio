"use client";

import { motion } from "framer-motion";
import { Send, ArrowUpRight } from "lucide-react";
import { contactInfo, contactSocialLinks } from "@/constants/contact";
import SectionTitle from "@/components/ui/SectionTitle";
import GlassCard from "@/components/ui/GlassCard";
import Button from "@/components/ui/Button";
import { useState } from "react";

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Open mailto with form data as a fallback
    const subject = encodeURIComponent(`Portfolio Contact from ${formState.name}`);
    const body = encodeURIComponent(
      `Name: ${formState.name}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}`
    );
    window.open(
      `mailto:subhamsabat343@gmail.com?subject=${subject}&body=${body}`,
      "_blank"
    );
  };

  const inputStyles =
    "w-full px-4 py-3 rounded-xl bg-[var(--color-bg-tertiary)] border border-[var(--color-border)] text-[var(--color-text-primary)] placeholder:text-[var(--color-text-tertiary)] focus:border-[var(--color-accent)] focus:ring-1 focus:ring-[var(--color-accent)] outline-none transition-colors text-sm";

  return (
    <section id="contact" className="section-padding py-16 min-h-[80vh]">
      <div className="max-w-4xl mx-auto">
        <SectionTitle
          
          subtitle="Contact"
          title="Get In Touch"
          description="I'm always open to new opportunities and interesting projects. Let's connect and build something great together."
        />

        <div className="grid md:grid-cols-5 gap-8">
          {/* Left - Info & Social */}
          <div className="md:col-span-2 space-y-4">
            {/* Contact info cards */}
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon;
              const content = (
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[var(--color-accent-glow)] flex items-center justify-center flex-shrink-0">
                    <IconComponent
                      className="text-[var(--color-accent)]"
                      size={18}
                    />
                  </div>
                  <div>
                    <p className="text-xs text-[var(--color-text-tertiary)] uppercase tracking-wider font-medium mb-0.5">
                      {info.label}
                    </p>
                    <p className="text-sm text-[var(--color-text-primary)] font-medium">
                      {info.value}
                    </p>
                  </div>
                </div>
              );

              return (
                <GlassCard key={info.label} delay={index * 0.1}>
                  {info.href ? (
                    <a
                      href={info.href}
                      className="block hover:text-[var(--color-accent)] transition-colors"
                    >
                      {content}
                    </a>
                  ) : (
                    content
                  )}
                </GlassCard>
              );
            })}

            {/* Social links */}
            <div className="pt-4">
              <p className="text-xs text-[var(--color-text-tertiary)] uppercase tracking-wider font-medium mb-3">
                Find me on
              </p>
              <div className="space-y-2">
                {contactSocialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between px-4 py-3 rounded-xl border border-[var(--color-border)] text-[var(--color-text-tertiary)] hover:text-[var(--color-accent)] hover:border-[var(--color-accent-muted)] hover:bg-[var(--color-accent-glow)] transition-all group"
                      initial={{ opacity: 0, x: -15 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + index * 0.08 }}
                    >
                      <div className="flex items-center gap-3">
                        <IconComponent size={16} />
                        <span className="text-sm font-medium">
                          {social.name}
                        </span>
                      </div>
                      <ArrowUpRight
                        size={14}
                        className="opacity-0 group-hover:opacity-100 transition-opacity"
                      />
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right - Contact Form */}
          <motion.div
            className="md:col-span-3"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="glass rounded-2xl p-6 sm:p-8">
              <h3 className="text-lg font-semibold text-[var(--color-text-primary)] mb-6">
                Send a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-xs text-[var(--color-text-tertiary)] uppercase tracking-wider font-medium mb-2"
                    >
                      Name
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className={inputStyles}
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-xs text-[var(--color-text-tertiary)] uppercase tracking-wider font-medium mb-2"
                    >
                      Email
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className={inputStyles}
                      required
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-xs text-[var(--color-text-tertiary)] uppercase tracking-wider font-medium mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project or opportunity..."
                    rows={5}
                    className={`${inputStyles} resize-none`}
                    required
                  />
                </div>
                <Button variant="primary" size="lg" className="w-full">
                  <Send size={16} />
                  Send Message
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
