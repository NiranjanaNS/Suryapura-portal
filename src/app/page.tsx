import { LanguageProvider } from "@/lib/language";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Stats } from "@/components/Stats";
import { News } from "@/components/News";
import { Vision } from "@/components/Vision";
import { DevelopmentAreas } from "@/components/DevelopmentAreas";
import { Services } from "@/components/Services";
import { Schemes } from "@/components/Schemes";
import { Leader } from "@/components/Leader";
import { Stories } from "@/components/Stories";
import { Gallery } from "@/components/Gallery";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <LanguageProvider>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <News />
        <Vision />
        <DevelopmentAreas />
        <Services />
        <Schemes />
        <Leader />
        <Stories />
        <Gallery />
        <CTA />
      </main>
      <Footer />
    </LanguageProvider>
  );
}
