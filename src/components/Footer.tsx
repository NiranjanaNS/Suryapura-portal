"use client";

import { MapPin, Phone, Mail, Share2, MessageCircle, Globe } from "lucide-react";
import { SunMotif } from "./SunMotif";
import { useLanguage, t } from "@/lib/language";

export function Footer() {
  const { lang } = useLanguage();
  return (
    <footer id="contact" className="pt-20 pb-8" style={{ background: "var(--color-ink)" }}>
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-2">
              <SunMotif className="w-8 h-8" rays={12} />
              <span className="font-devanagari font-semibold text-lg text-white">सूर्यपुरा</span>
            </div>
            <p className="text-sm mt-4 leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
              {t(
                lang,
                "The digital gateway to Suryapura Gram Panchayat's citizen services and development programs.",
                "सूर्यपुरा ग्राम पंचायत की नागरिक सेवाओं और विकास कार्यक्रमों का डिजिटल प्रवेश द्वार।"
              )}
            </p>
            <div className="flex items-center gap-3 mt-5">
              {[
                { Icon: Share2, label: "Facebook" },
                { Icon: MessageCircle, label: "Instagram" },
                { Icon: Globe, label: "Village website" },
              ].map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-9 h-9 rounded-full flex items-center justify-center border border-white/15 hover:border-white/40 transition-colors"
                >
                  <Icon className="w-4 h-4 text-white/70" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-display font-semibold text-sm uppercase tracking-wide">
              {t(lang, "Quick Links", "त्वरित लिंक")}
            </h4>
            <ul className="mt-4 space-y-3 text-sm" style={{ color: "rgba(255,255,255,0.6)" }}>
              {["Vision", "Services", "Schemes", "Gallery"].map((l) => (
                <li key={l}><a href="#" className="hover:text-white transition-colors">{l}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-display font-semibold text-sm uppercase tracking-wide">
              {t(lang, "Government Links", "सरकारी लिंक")}
            </h4>
            <ul className="mt-4 space-y-3 text-sm" style={{ color: "rgba(255,255,255,0.6)" }}>
              {["Digital India", "PM Kisan", "District Portal", "RTI"].map((l) => (
                <li key={l}><a href="#" className="hover:text-white transition-colors">{l}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-display font-semibold text-sm uppercase tracking-wide">
              {t(lang, "Contact", "संपर्क")}
            </h4>
            <ul className="mt-4 space-y-3 text-sm" style={{ color: "rgba(255,255,255,0.6)" }}>
              <li className="flex items-start gap-2"><MapPin className="w-4 h-4 mt-0.5 shrink-0" /> Suryapura Panchayat Bhavan, District Road</li>
              <li className="flex items-center gap-2"><Phone className="w-4 h-4 shrink-0" /> +91 98765 43210</li>
              <li className="flex items-center gap-2"><Mail className="w-4 h-4 shrink-0" /> panchayat@suryapura.gov.in</li>
            </ul>
          </div>
        </div>

        <div
          className="mt-14 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs"
          style={{ borderTop: "1px solid rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.4)" }}
        >
          <p>© {new Date().getFullYear()} Suryapura Gram Panchayat. All rights reserved.</p>
          <div className="flex gap-5">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
