import SiteHeader from "@/components/SiteHeader";
import Hero from "@/components/Hero";
import ProblemSection from "@/components/ProblemSection";
import ProductGrid from "@/components/ProductGrid";
import WhyBlackout from "@/components/WhyBlackout";
import NightAudit from "@/components/NightAudit";
import Waitlist from "@/components/Waitlist";
import FAQ from "@/components/FAQ";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <div className="section-divider" />
        <ProblemSection />
        <div className="section-divider" />
        <ProductGrid />
        <div className="section-divider" />
        <WhyBlackout />
        <div className="section-divider" />
        <NightAudit />
        <div className="section-divider" />
        <Waitlist />
        <div className="section-divider" />
        <FAQ />
        <footer className="footer container">
          <div className="footer-left">
            <span className="footer-brand">BLACKOUT</span>
            <span>© 2026</span>
          </div>
          <span className="footer-slogan">Kroppen din gjør nattskift.</span>
        </footer>
      </main>
    </>
  );
}