"use client";

import { motion } from "framer-motion";
import { ArrowRight, Compass } from "lucide-react";
import { VillageSkyline } from "./SunMotif";
import { useLanguage, t } from "@/lib/language";

export function Hero() {
  const { lang } = useLanguage();

  return (
    <section id="home" className="relative pt-32 pb-16 sm:pt-40 sm:pb-24 overflow-hidden bg-grain">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <span
            className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase px-3 py-1.5 rounded-full"
            style={{ background: "var(--color-marigold-soft)", color: "var(--color-teal-dark)" }}
          >
            <Compass className="w-3.5 h-3.5" />
            {t(lang, "Suryapura Gram Panchayat", "सूर्यपुरा ग्राम पंचायत")}
          </span>

          <h1 className="font-devanagari font-bold mt-5 text-4xl sm:text-6xl leading-[1.1]" style={{ color: "var(--color-teal-dark)" }}>
            सूर्यपुरा ग्राम विकास पोर्टल
          </h1>

          <p className="font-display font-semibold mt-4 text-xl sm:text-2xl" style={{ color: "var(--color-ink)" }}>
            {t(
              lang,
              "Every village, wired for tomorrow.",
              "हर गांव, कल के लिए तैयार।"
            )}
          </p>

          <p className="mt-5 text-base sm:text-lg leading-relaxed max-w-lg" style={{ color: "var(--color-ink-soft)" }}>
            {t(
              lang,
              "Connecting citizens to digital governance, modern education, sustainable agriculture and transparent public services — from any phone, in any hamlet.",
              "नागरिकों को डिजिटल शासन, आधुनिक शिक्षा, टिकाऊ कृषि और पारदर्शी सार्वजनिक सेवाओं से जोड़ना — किसी भी फोन से, किसी भी बस्ती में।"
            )}
          </p>

          <div className="flex flex-wrap gap-4 mt-8">
            <a
              href="#areas"
              className="group inline-flex items-center gap-2 text-sm font-semibold px-6 py-3.5 rounded-full text-white transition-transform hover:scale-[1.03]"
              style={{ background: "var(--color-teal)" }}
            >
              {t(lang, "Explore Village", "गांव देखें")}
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 text-sm font-semibold px-6 py-3.5 rounded-full border-2 transition-colors hover:bg-white"
              style={{ borderColor: "var(--color-teal)", color: "var(--color-teal-dark)" }}
            >
              {t(lang, "Apply for Services", "सेवाओं हेतु आवेदन करें")}
            </a>
          </div>

          <div className="flex items-center gap-6 mt-10 pt-8" style={{ borderTop: "1px solid var(--color-line)" }}>
            {[
              { n: "12", l: t(lang, "Schools", "विद्यालय") },
              { n: "520+", l: t(lang, "Farmers", "किसान") },
              { n: "48 km", l: t(lang, "Roads Built", "सड़कें") },
            ].map((s) => (
              <div key={s.l}>
                <p className="font-display font-bold text-2xl" style={{ color: "var(--color-teal-dark)" }}>{s.n}</p>
                <p className="text-xs" style={{ color: "var(--color-ink-soft)" }}>{s.l}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
          className="relative"
        >
          <div
            className="rounded-[2rem] overflow-hidden border"
            style={{ borderColor: "var(--color-line)", background: "var(--color-card)" }}
          >
            <VillageSkyline className="w-full h-auto" />
          </div>
          <div
            className="absolute -bottom-6 -left-6 rounded-2xl px-5 py-4 shadow-lg hidden sm:block"
            style={{ background: "var(--color-card)", border: "1px solid var(--color-line)" }}
          >
            <p className="text-xs font-semibold uppercase tracking-wide" style={{ color: "var(--color-teal)" }}>
              {t(lang, "Digital ID Coverage", "डिजिटल पहचान")}
            </p>
            <p className="font-display font-bold text-2xl" style={{ color: "var(--color-ink)" }}>95%</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
