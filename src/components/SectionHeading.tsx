"use client";

import { motion } from "framer-motion";

export function SectionHeading({
  eyebrow,
  title,
  desc,
  align = "left",
  light = false,
}: {
  eyebrow: string;
  title: string;
  desc?: string;
  align?: "left" | "center";
  light?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={align === "center" ? "text-center mx-auto max-w-2xl" : ""}
    >
      <span
        className={`inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase ${
          light ? "text-marigold" : "text-teal"
        }`}
        style={{ color: light ? "var(--color-marigold)" : "var(--color-teal)" }}
      >
        <span className="h-px w-6" style={{ background: light ? "var(--color-marigold)" : "var(--color-teal)" }} />
        {eyebrow}
      </span>
      <h2
        className={`font-display font-bold mt-3 text-3xl sm:text-4xl leading-tight ${
          light ? "text-white" : ""
        }`}
        style={{ color: light ? "#fff" : "var(--color-ink)" }}
      >
        {title}
      </h2>
      {desc && (
        <p
          className="mt-4 text-base sm:text-lg leading-relaxed"
          style={{ color: light ? "rgba(255,255,255,0.75)" : "var(--color-ink-soft)" }}
        >
          {desc}
        </p>
      )}
    </motion.div>
  );
}
