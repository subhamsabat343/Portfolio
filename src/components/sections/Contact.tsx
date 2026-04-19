"use client";

import { motion } from "framer-motion";
import { Send, ArrowUpRight, Check, Copy } from "lucide-react";
import { contactInfo, contactSocialLinks } from "@/constants/contact";
import SectionTitle from "@/components/ui/SectionTitle";
import GlassCard from "@/components/ui/GlassCard";
import Button from "@/components/ui/Button";
import { useState, useCallback } from "react";

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [copied, setCopied] = useState(false);

  const copyEmail = useCallback(() => {
    navigator.clipboard.writeText("subhamsabat343@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formState.name,
          email: formState.email,
          message: formState.message,
        }),
      });

      const result = await response.json();
      if (result.success) {
        setSubmitStatus("success");
        setFormState({ name: "", email: "", message: "", });
      } else {
        setSubmitStatus("error");
      }
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
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
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon;
              return (
                <GlassCard key={info.label} delay={index * 0.1}>
                  <div className="flex items-start gap-4 group/card">
                    <div className="w-10 h-10 rounded-xl bg-[var(--color-accent-glow)] flex items-center justify-center flex-shrink-0 group-hover/card:scale-110 transition-transform">
                      <IconComponent className="text-[var(--color-accent)]" size={18} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs text-[var(--color-text-tertiary)] uppercase tracking-wider font-medium mb-0.5">
                        {info.label}
                      </p>
                      <p className="text-sm text-[var(--color-text-primary)] font-medium truncate">
                        {info.value}
                      </p>
                    </div>
                    {info.label === "Email" && (
                      <button 
                        onClick={(e) => { e.preventDefault(); copyEmail(); }}
                        className="p-2 rounded-lg hover:bg-[var(--color-accent-glow)] text-[var(--color-text-tertiary)] hover:text-[var(--color-accent)] transition-all"
                      >
                        {copied ? <Check size={14} className="text-emerald-500" /> : <Copy size={14} />}
                      </button>
                    )}
                  </div>
                </GlassCard>
              );
            })}

            <div className="pt-4">
              <p className="text-xs text-[var(--color-text-tertiary)] uppercase tracking-wider font-medium mb-3">
                Find me on
              </p>
              {/* Social links */}
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
                        <span className="text-sm font-medium">{social.name}</span>
                      </div>
                      <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-all" />
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
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

              <form onSubmit={handleSubmit} className="space-y-4 text-left">
                <input 
                  type="checkbox" 
                  name="botcheck" 
                  className="hidden" 
                  style={{ display: "none" }} 
                  onChange={handleChange}
                />

                {/* Name & Email Fields */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-[var(--color-text-tertiary)] uppercase tracking-wider font-medium mb-2">
                      Name
                    </label>
                    <input
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
                    <label className="block text-xs text-[var(--color-text-tertiary)] uppercase tracking-wider font-medium mb-2">
                      Email
                    </label>
                    <input
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
                {/* Message Field */}
                <div>
                  <label className="block text-xs text-[var(--color-text-tertiary)] uppercase tracking-wider font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project..."
                    rows={5}
                    className={`${inputStyles} resize-none`}
                    required
                  />
                </div>

                {/* Submit Button */}
                <Button variant="primary" size="lg" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </div>
                  ) : (
                    <><Send size={16} />Send Message</>
                  )}
                </Button>

                {/* Form Status Messages */}
                {submitStatus === "success" && (
                  <p className="text-sm text-emerald-500 font-medium text-center bg-emerald-500/10 py-3 rounded-xl border border-emerald-500/20">
                    Message sent successfully!
                  </p>
                )}
                {submitStatus === "error" && (
                  <p className="text-sm text-red-500 font-medium text-center bg-red-500/10 py-3 rounded-xl border border-red-500/20">
                    Error sending message. Please try again.
                  </p>
                )}
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
