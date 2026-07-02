"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { useLanguage, t } from "@/lib/language";

export function Leader() {
  const { lang } = useLanguage();
  return (
    <section className="py-24 sm:py-32" style={{ background: "var(--color-teal-dark)" }}>
      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="grid sm:grid-cols-[auto_1fr] gap-8 items-center"
        >
          <div
            className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl flex items-center justify-center font-display font-bold text-3xl shrink-0"
            style={{ background: "var(--color-marigold)", color: "var(--color-teal-dark)" }}
          >
            AS
          </div>
          <div>
            <Quote className="w-8 h-8 mb-3" style={{ color: "var(--color-marigold)" }} />
            <p className="font-display text-xl sm:text-2xl leading-snug text-white">
              {t(
                lang,
                "“A developed village creates a developed nation. Every road we build and every certificate we digitize is a promise kept to Suryapura.”",
                "“एक विकसित गांव एक विकसित राष्ट्र बनाता है। हर सड़क और हर डिजिटल प्रमाणपत्र सूर्यपुरा से किया गया वादा है।”"
              )}
            </p>
            <p className="mt-4 font-semibold text-white">Arjun Singh</p>
            <p className="text-sm" style={{ color: "rgba(255,255,255,0.6)" }}>
              {t(lang, "Village Development Ambassador", "ग्राम विकास दूत")}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
