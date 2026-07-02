import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "सूर्यपुरा ग्राम विकास पोर्टल | Suryapura Smart Village Portal",
  description:
    "Empowering every citizen of Suryapura through digital governance, modern education, sustainable agriculture and transparent public services.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@500;600;700;800&family=Inter:wght@400;500;600&family=Noto+Sans+Devanagari:wght@500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
