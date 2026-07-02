"use client";

import { motion } from "framer-motion";
import { Megaphone } from "lucide-react";
import { news } from "@/lib/data";
import { useLanguage, t } from "@/lib/language";

export function News() {
  const { lang } = useLanguage();
  return (
    <section className="py-6" style={{ background: "var(--color-indigo)" }}>
      <div className="max-w-7xl mx-auto px-5 sm:px-8 flex flex-col sm:flex-row sm:items-center gap-4">
        <div className="flex items-center gap-2 shrink-0 text-white">
          <Megaphone className="w-4 h-4" style={{ color: "var(--color-marigold)" }} />
          <span className="text-xs font-semibold uppercase tracking-wide">
            {t(lang, "Latest", "ताज़ा खबर")}
          </span>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-8 overflow-hidden">
          {news.map((n, i) => (
            <motion.div
              key={n.title}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="flex items-center gap-2 text-sm text-white/85"
            >
              <span className="text-white/50 shrink-0">{n.date}</span>
              <span className="truncate">{n.title}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
