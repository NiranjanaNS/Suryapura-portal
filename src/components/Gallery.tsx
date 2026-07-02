"use client";

import { motion } from "framer-motion";
import { ImageIcon } from "lucide-react";
import { galleryItems } from "@/lib/data";
import { SectionHeading } from "./SectionHeading";
import { useLanguage, t } from "@/lib/language";

const toneMap: Record<string, string> = {
  teal: "var(--color-teal)",
  marigold: "var(--color-marigold)",
  indigo: "var(--color-indigo)",
  brick: "var(--color-brick)",
};

export function Gallery() {
  const { lang } = useLanguage();
  return (
    <section id="gallery" className="py-24 sm:py-32" style={{ background: "var(--color-card)" }}>
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <SectionHeading
          eyebrow={t(lang, "Gallery", "गैलरी")}
          title={t(lang, "Suryapura, in pictures", "तस्वीरों में सूर्यपुरा")}
          align="center"
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-14">
          {galleryItems.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, scale: 0.94 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: (i % 3) * 0.08 }}
              className={`relative rounded-2xl overflow-hidden flex items-end p-4 ${
                i === 0 ? "sm:col-span-2 sm:row-span-2 aspect-square sm:aspect-auto" : "aspect-square"
              }`}
              style={{
                background: `linear-gradient(160deg, ${toneMap[item.tone]}, var(--color-ink))`,
              }}
            >
              <ImageIcon className="absolute top-4 right-4 w-5 h-5 text-white/50" />
              <p className="relative text-white text-sm font-medium leading-snug">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
