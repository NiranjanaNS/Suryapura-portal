"use client";

import { motion } from "framer-motion";
import { stats } from "@/lib/data";
import { Counter } from "./Counter";

export function Stats() {
  return (
    <section className="relative -mt-8 sm:-mt-10 z-10">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div
          className="rounded-3xl grid grid-cols-2 sm:grid-cols-4 gap-px overflow-hidden shadow-xl"
          style={{ background: "var(--color-line)" }}
        >
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="px-5 py-8 sm:py-10 text-center"
              style={{ background: "var(--color-card)" }}
            >
              <p className="font-display font-extrabold text-3xl sm:text-4xl" style={{ color: "var(--color-teal-dark)" }}>
                <Counter value={s.value} suffix={s.suffix} />
              </p>
              <p className="mt-2 text-xs sm:text-sm font-medium" style={{ color: "var(--color-ink-soft)" }}>
                {s.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
