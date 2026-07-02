"use client";

import { motion } from "framer-motion";
import { Landmark } from "lucide-react";
import { galleryItems } from "@/lib/data";
import { SectionHeading } from "./SectionHeading";
import { useLanguage, t } from "@/lib/language";

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
              className={`group relative rounded-2xl overflow-hidden ${
                item.large ? "sm:col-span-2 sm:row-span-2 aspect-square sm:aspect-auto" : "aspect-square"
              }`}
            >
              {item.illustrated ? (
                <div
                  className="absolute inset-0 flex items-center justify-center"
                  style={{ background: "linear-gradient(160deg, var(--color-indigo), var(--color-ink))" }}
                >
                  <Landmark className="w-12 h-12 text-white/40" />
                </div>
              ) : (
                <img
                  src={`https://images.unsplash.com/${item.photo}?w=900&q=80&auto=format&fit=crop`}
                  alt={item.label}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              )}
              <div
                className="absolute inset-0 flex items-end p-4"
                style={{ background: "linear-gradient(180deg, transparent 55%, rgba(0,0,0,0.55) 100%)" }}
              >
                <div>
                  <p className="text-white text-sm font-medium leading-snug">{item.label}</p>
                  {item.credit && (
                    <p className="text-white/60 text-[11px] mt-0.5">Photo: {item.credit} / Unsplash</p>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
