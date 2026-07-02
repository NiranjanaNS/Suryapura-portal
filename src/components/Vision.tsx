"use client";

import { motion } from "framer-motion";
import { timeline } from "@/lib/data";
import { SectionHeading } from "./SectionHeading";
import { useLanguage, t } from "@/lib/language";

export function Vision() {
  const { lang } = useLanguage();
  return (
    <section id="vision" className="py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 grid lg:grid-cols-[0.9fr_1.1fr] gap-16">
        <div>
          <SectionHeading
            eyebrow={t(lang, "Our Vision", "हमारी दृष्टि")}
            title={t(lang, "Building a smart village, one road at a time.", "एक समय में एक कदम, स्मार्ट गांव की ओर।")}
            desc={t(
              lang,
              "A digitally empowered, self-sufficient community where education, healthcare, agriculture and governance move forward together — not in isolation.",
              "एक डिजिटल रूप से सशक्त, आत्मनिर्भर समुदाय जहां शिक्षा, स्वास्थ्य, कृषि और शासन एक साथ आगे बढ़ते हैं।"
            )}
          />
        </div>

        <div className="relative pl-8 sm:pl-10">
          <div className="absolute left-0 top-2 bottom-2 w-px" style={{ background: "var(--color-line)" }} />
          <div className="space-y-10">
            {timeline.map((item, i) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative"
              >
                <span
                  className="absolute -left-8 sm:-left-10 top-1 w-3.5 h-3.5 rounded-full border-2"
                  style={{ background: "var(--color-marigold)", borderColor: "var(--color-paper)" }}
                />
                <p className="font-display font-bold text-sm tracking-wide" style={{ color: "var(--color-teal)" }}>
                  {item.year}
                </p>
                <h3 className="font-display font-semibold text-lg mt-1" style={{ color: "var(--color-ink)" }}>
                  {item.title}
                </h3>
                <p className="text-sm mt-1 leading-relaxed" style={{ color: "var(--color-ink-soft)" }}>
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
