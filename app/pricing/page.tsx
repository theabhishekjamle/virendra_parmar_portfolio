import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import CTASection from "@/components/sections/CTASection";
import FilmReelMarquee from "@/components/sections/FilmReelMarquee";
import PricingSection from "@/components/sections/PricingSection";

export const metadata: Metadata = {
  title: "Pricing | Virendra Parmar - Video Production Packages",
  description:
    "Affordable video editing and cinematic reel packages. Single reel at ₹1,500 with 24-hour delivery, 5 reels at ₹7,000 with 48-hour delivery. Custom packages available.",
};

export default function PricingPage() {
  return (
    <>
      <CustomCursor />
      <Navbar />
      <main>
        {/* Page Header */}
        <section className="pt-40 pb-20 relative bg-cinema-dark">
          <div className="absolute inset-0 grid-bg opacity-20" />
          <div className="max-w-7xl mx-auto px-6 text-center">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-px w-12 bg-cinema-gold opacity-60" />
              <span className="font-mono text-[10px] tracking-[5px] text-cinema-gold uppercase">
                Investment
              </span>
              <div className="h-px w-12 bg-cinema-gold opacity-60" />
            </div>
            <h1 className="font-display text-5xl md:text-7xl text-cinema-white tracking-wider">
              Simple & <span className="text-gold-shimmer">Transparent</span>
            </h1>
            <p className="font-body text-xl text-cinema-gray italic mt-4 max-w-xl mx-auto">
              Choose the perfect package for your content needs.
            </p>
          </div>
        </section>

        <PricingSection />
        <FilmReelMarquee />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
