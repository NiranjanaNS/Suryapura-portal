"use client";

import { motion } from "framer-motion";
import { FileText, Droplets, Zap, Tractor, HeartHandshake, Home, ArrowRight } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { useLanguage, t } from "@/lib/language";

const services = [
  { icon: FileText, en: "Birth Certificate", hi: "जन्म प्रमाणपत्र" },
  { icon: FileText, en: "Income Certificate", hi: "आय प्रमाणपत्र" },
  { icon: HeartHandshake, en: "Pension Application", hi: "पेंशन आवेदन" },
  { icon: Tractor, en: "Farmer Registration", hi: "किसान पंजीकरण" },
  { icon: Droplets, en: "Water Connection", hi: "जल संबंध" },
  { icon: Zap, en: "Electricity Complaint", hi: "बिजली शिकायत" },
  { icon: Home, en: "Property Tax", hi: "संपत्ति कर" },
  { icon: FileText, en: "Death Certificate", hi: "मृत्यु प्रमाणपत्र" },
];

export function Services() {
  const { lang } = useLanguage();
  return (
    <section id="services" className="py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <SectionHeading
          eyebrow={t(lang, "Citizen Services", "नागरिक सेवाएं")}
          title={t(lang, "Apply online, from any phone", "किसी भी फोन से ऑनलाइन आवेदन करें")}
          align="center"
        />

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-14">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.a
                href="#"
                key={s.en}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: (i % 4) * 0.07 }}
                whileHover={{ y: -4 }}
                className="group p-5 rounded-2xl border flex flex-col gap-4"
                style={{ borderColor: "var(--color-line)", background: "var(--color-card)" }}
              >
                <Icon className="w-6 h-6" style={{ color: "var(--color-teal)" }} />
                <div className="flex items-end justify-between gap-2">
                  <span className="text-sm font-semibold leading-tight" style={{ color: "var(--color-ink)" }}>
                    {t(lang, s.en, s.hi)}
                  </span>
                  <ArrowRight
                    className="w-4 h-4 shrink-0 transition-transform group-hover:translate-x-1"
                    style={{ color: "var(--color-marigold)" }}
                  />
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
