"use client";

import { motion } from "framer-motion";
import { Wheat, GraduationCap, HeartPulse, Route, Landmark, Fingerprint, LucideIcon } from "lucide-react";
import { developmentAreas } from "@/lib/data";
import { SectionHeading } from "./SectionHeading";
import { useLanguage, t } from "@/lib/language";

const iconMap: Record<string, LucideIcon> = {
  Wheat,
  GraduationCap,
  HeartPulse,
  Route,
  Landmark,
  Fingerprint,
};

export function DevelopmentAreas() {
  const { lang } = useLanguage();
  return (
    <section id="areas" className="py-24 sm:py-32" style={{ background: "var(--color-card)" }}>
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <SectionHeading
          eyebrow={t(lang, "Development Areas", "विकास क्षेत्र")}
          title={t(lang, "Six pillars of Suryapura's growth", "सूर्यपुरा की प्रगति के छह स्तंभ")}
          align="center"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
          {developmentAreas.map((area, i) => {
            const Icon = iconMap[area.icon];
            return (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
                whileHover={{ y: -6 }}
                className="p-7 rounded-2xl border transition-shadow hover:shadow-lg"
                style={{ borderColor: "var(--color-line)", background: "var(--color-paper)" }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{ background: "var(--color-marigold-soft)" }}
                >
                  <Icon className="w-6 h-6" style={{ color: "var(--color-teal-dark)" }} />
                </div>
                <h3 className="font-display font-semibold text-lg mt-5" style={{ color: "var(--color-ink)" }}>
                  {area.title}
                </h3>
                <p className="text-sm mt-2 leading-relaxed" style={{ color: "var(--color-ink-soft)" }}>
                  {area.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
