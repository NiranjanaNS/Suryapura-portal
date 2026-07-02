"use client";

import { useState, useEffect } from "react";
import { Menu, X, Languages } from "lucide-react";
import { SunMotif } from "./SunMotif";
import { useLanguage, t } from "@/lib/language";

const links = [
  { en: "Home", hi: "मुख्य", href: "#home" },
  { en: "Vision", hi: "दृष्टि", href: "#vision" },
  { en: "Services", hi: "सेवाएं", href: "#areas" },
  { en: "Schemes", hi: "योजनाएं", href: "#schemes" },
  { en: "Stories", hi: "कहानियां", href: "#stories" },
  { en: "Gallery", hi: "गैलरी", href: "#gallery" },
  { en: "Contact", hi: "संपर्क", href: "#contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { lang, toggle } = useLanguage();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled ? "backdrop-blur-md" : ""
      }`}
      style={{
        background: scrolled ? "rgba(251,245,233,0.9)" : "transparent",
        borderBottom: scrolled ? "1px solid var(--color-line)" : "1px solid transparent",
      }}
    >
      <nav className="max-w-7xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2.5">
          <SunMotif className="w-8 h-8" rays={12} />
          <span className="font-devanagari font-semibold text-lg" style={{ color: "var(--color-teal-dark)" }}>
            सूर्यपुरा
          </span>
        </a>

        <div className="hidden lg:flex items-center gap-7">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium hover:opacity-70 transition-opacity"
              style={{ color: "var(--color-ink)" }}
            >
              {t(lang, l.en, l.hi)}
            </a>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-3">
          <button
            onClick={toggle}
            className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full border transition-colors"
            style={{ borderColor: "var(--color-line)", color: "var(--color-ink-soft)" }}
          >
            <Languages className="w-3.5 h-3.5" />
            {lang === "en" ? "हिंदी" : "English"}
          </button>
          <a
            href="#services"
            className="text-sm font-semibold px-5 py-2.5 rounded-full text-white transition-transform hover:scale-[1.03]"
            style={{ background: "var(--color-teal)" }}
          >
            {t(lang, "Citizen Services", "नागरिक सेवाएं")}
          </a>
        </div>

        <button className="lg:hidden" onClick={() => setOpen((o) => !o)} aria-label="Toggle menu">
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {open && (
        <div className="lg:hidden px-5 pb-6 flex flex-col gap-4" style={{ background: "var(--color-paper)" }}>
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-sm font-medium">
              {t(lang, l.en, l.hi)}
            </a>
          ))}
          <div className="flex items-center gap-3 pt-2">
            <button
              onClick={toggle}
              className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full border"
              style={{ borderColor: "var(--color-line)" }}
            >
              <Languages className="w-3.5 h-3.5" />
              {lang === "en" ? "हिंदी" : "English"}
            </button>
            <a
              href="#services"
              className="text-sm font-semibold px-5 py-2.5 rounded-full text-white"
              style={{ background: "var(--color-teal)" }}
            >
              {t(lang, "Citizen Services", "नागरिक सेवाएं")}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
