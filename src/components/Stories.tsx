"use client";

import { motion } from "framer-motion";
import { stories } from "@/lib/data";
import { SectionHeading } from "./SectionHeading";
import { useLanguage, t } from "@/lib/language";

export function Stories() {
  const { lang } = useLanguage();
  return (
    <section id="stories" className="py-24 sm:py-32" style={{ background: "var(--color-card)" }}>
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <SectionHeading
          eyebrow={t(lang, "Success Stories", "सफलता की कहानियां")}
          title={t(lang, "Voices from Suryapura", "सूर्यपुरा की आवाजें")}
          align="center"
        />

        <div className="grid sm:grid-cols-3 gap-6 mt-14">
          {stories.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 24, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-7 rounded-2xl border flex flex-col"
              style={{ borderColor: "var(--color-line)", background: "var(--color-paper)" }}
            >
              <span
                className="text-[11px] font-semibold uppercase tracking-wide self-start px-2.5 py-1 rounded-full"
                style={{ background: "var(--color-marigold-soft)", color: "var(--color-teal-dark)" }}
              >
                {s.tag}
              </span>
              <p className="text-sm mt-4 leading-relaxed italic" style={{ color: "var(--color-ink)" }}>
                "{s.quote}"
              </p>
              <div className="mt-6 pt-4" style={{ borderTop: "1px solid var(--color-line)" }}>
                <p className="font-display font-semibold text-sm" style={{ color: "var(--color-ink)" }}>
                  {s.name}
                </p>
                <p className="text-xs mt-0.5" style={{ color: "var(--color-ink-soft)" }}>
                  {s.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
