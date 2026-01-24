import { GridBackground } from "@/components/landing/grid-background";
import { Hero } from "@/components/landing/hero";
import { Navbar } from "@/components/landing/navbar";
import { BentoGridSection } from "@/components/landing/bento-grid";
import { FAQSection } from "@/components/landing/faq";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden selection:bg-primary/20">
      <GridBackground />
      <Navbar />

      <div className="relative z-10 pt-20 pb-20">
        <Hero />
        <BentoGridSection />
        <FAQSection />
      </div>
    </main>
  );
}
