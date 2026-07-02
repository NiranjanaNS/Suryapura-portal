"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { SunMotif } from "./SunMotif";
import { useLanguage, t } from "@/lib/language";

export function CTA() {
  const { lang } = useLanguage();
  return (
    <section className="py-24 sm:py-28 relative overflow-hidden" style={{ background: "var(--color-teal)" }}>
      <SunMotif className="absolute -right-16 -top-16 w-64 h-64 opacity-15" color="#ffffff" />
      <div className="max-w-4xl mx-auto px-5 sm:px-8 text-center relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white leading-tight">
            {t(lang, "Together we can build tomorrow's village", "साथ मिलकर बनाएं कल का गांव")}
          </h2>
          <p className="mt-4 text-white/80 max-w-xl mx-auto">
            {t(
              lang,
              "Whether you farm the land, teach in a classroom, or simply care about Suryapura — there's a place for you in this mission.",
              "चाहे आप खेती करें, कक्षा में पढ़ाएं, या सिर्फ सूर्यपुरा की परवाह करें — इस मिशन में आपके लिए जगह है।"
            )}
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 text-sm font-semibold px-6 py-3.5 rounded-full transition-transform hover:scale-[1.03]"
              style={{ background: "var(--color-marigold)", color: "var(--color-teal-dark)" }}
            >
              {t(lang, "Volunteer", "स्वयंसेवक बनें")}
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-sm font-semibold px-6 py-3.5 rounded-full border-2 border-white/40 text-white hover:bg-white/10 transition-colors"
            >
              {t(lang, "Contact Panchayat", "पंचायत से संपर्क करें")}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
