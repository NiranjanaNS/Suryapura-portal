"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { schemes } from "@/lib/data";
import { SectionHeading } from "./SectionHeading";
import { useLanguage, t } from "@/lib/language";

export function Schemes() {
  const { lang } = useLanguage();
  return (
    <section id="schemes" className="py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
          <SectionHeading
            eyebrow={t(lang, "Government Schemes", "सरकारी योजनाएं")}
            title={t(lang, "Support that reaches every household", "हर घर तक पहुंचती सहायता")}
          />
        </div>

        <div className="grid sm:grid-cols-2 gap-5 mt-12">
          {schemes.map((s, i) => (
            <motion.a
              href="#"
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group flex items-start justify-between gap-4 p-6 rounded-2xl border transition-colors hover:border-transparent"
              style={{ borderColor: "var(--color-line)", background: "var(--color-card)" }}
            >
              <div>
                <span
                  className="text-[11px] font-semibold uppercase tracking-wide px-2.5 py-1 rounded-full"
                  style={{ background: "var(--color-marigold-soft)", color: "var(--color-teal-dark)" }}
                >
                  {s.tag}
                </span>
                <h3 className="font-display font-semibold text-lg mt-3" style={{ color: "var(--color-ink)" }}>
                  {s.title}
                </h3>
                <p className="text-sm mt-1.5 leading-relaxed" style={{ color: "var(--color-ink-soft)" }}>
                  {s.desc}
                </p>
              </div>
              <ArrowUpRight
                className="w-5 h-5 mt-1 shrink-0 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                style={{ color: "var(--color-teal)" }}
              />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
