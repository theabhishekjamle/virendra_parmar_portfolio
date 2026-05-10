"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function PricingSection() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-cinema-black">
      {/* Background image layer */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=1920&q=80')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-cinema-black via-cinema-black/90 to-cinema-black" />
      </div>

      {/* Grid & scanline */}
      <div className="absolute inset-0 z-0 grid-bg opacity-10" />
      <div className="absolute inset-0 z-0 scanline pointer-events-none" />

      {/* Film sprockets */}
      <Sprockets />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Reels Packages */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-20">
          {/* Single Reel */}
          <PricingCard
            title="Single Reel"
            price="1,500"
            originalPrice="2,500"
            description="Perfect for one-off events or product launches"
            features={[
              "1 Cinematic Reel (15–30 sec)",
              "Professional Color Grading",
              "Custom Motion Graphics",
              "Background Score Included",
              "2 Revisions",
              "⚡ 24-Hour Delivery",
              "Social Media Optimized",
            ]}
            badge={null}
            popular={false}
          />

          {/* 5 Reels - Best Value */}
          <PricingCard
            title="5 Reels Package"
            price="7,000"
            originalPrice="12,500"
            description="Most popular for wedding highlights & campaigns"
            features={[
              "5 Cinematic Reels (15–30 sec each)",
              "Premium Color Grading",
              "Advanced Motion Graphics",
              "Custom Background Score",
              "5 Revisions Total",
              "⚡ 48-Hour Delivery",
              "Priority Support",
              "Bonus: Vertical Cuts Included",
            ]}
            badge="BEST VALUE"
            popular={true}
          />

          {/* 10+ Reels - Enterprise */}
          <PricingCard
            title="10+ Reels"
            price="Negotiable"
            description="For agencies, events, or bulk content needs"
            features={[
              "10+ Cinematic Reels",
              "Bulk Discount Applied",
              "Dedicated Editor",
              "Unlimited Revisions",
              "Flexible Delivery Timeline",
              "RAW Footage Included",
              "Commercial Rights",
              "Custom Brand Package",
            ]}
            badge="ENTERPRISE"
            popular={false}
            isCustom
          />
        </div>

        {/* Add-On Services */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl md:text-3xl font-display text-white text-center mb-10">
            Add-On Services
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                name: "Drone Footage",
                price: "+₹2,000",
                desc: "Aerial shots included",
              },
              {
                name: "Rush Delivery",
                price: "+₹1,000",
                desc: "12-hour turnaround",
              },
              {
                name: "Extended Cut",
                price: "+₹1,500",
                desc: "60 sec version",
              },
              {
                name: "RAW Footage",
                price: "+₹3,000",
                desc: "All unedited clips",
              },
            ].map((addon, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="border border-cinema-gold/20 rounded-lg p-5 bg-cinema-black/40 backdrop-blur-sm hover:border-cinema-gold/50 transition-all"
              >
                <div className="font-display text-white text-lg">
                  {addon.name}
                </div>
                <div className="font-mono text-cinema-gold text-sm mt-1">
                  {addon.price}
                </div>
                <div className="text-xs text-cinema-gray-light mt-2">
                  {addon.desc}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-20 text-center"
        >
          <div className="max-w-2xl mx-auto mb-10">
            <h3 className="font-display text-xl text-white mb-4">
              Still have questions?
            </h3>
            <p className="text-cinema-gray-light text-sm">
              Every project is unique. Let's discuss your specific requirements
              and get a custom quote tailored just for you.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-cinema-filled inline-block">
              Let's Discuss Your Project
            </Link>
            <Link href="/work" className="btn-cinema inline-block">
              View Portfolio
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function PricingCard({
  title,
  price,
  originalPrice,
  description,
  features,
  badge,
  popular,
  isCustom = false,
}: {
  title: string;
  price: string;
  originalPrice?: string;
  description: string;
  features: string[];
  badge: string | null;
  popular: boolean;
  isCustom?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`relative rounded-2xl overflow-hidden transition-all duration-300 ${
        popular
          ? "border-2 border-cinema-gold shadow-2xl shadow-cinema-gold/20 scale-105 md:scale-110 z-10"
          : "border border-cinema-gold/20 hover:border-cinema-gold/50"
      }`}
    >
      {badge && (
        <div className="absolute top-0 right-0 z-10">
          <div className="bg-cinema-gold text-cinema-black font-mono text-[9px] tracking-[3px] px-4 py-1.5 font-bold">
            {badge}
          </div>
        </div>
      )}

      <div className="p-6 md:p-8 bg-gradient-to-br from-cinema-black/90 to-cinema-black/70 backdrop-blur-sm">
        <h3 className="font-display text-xl md:text-2xl text-white">{title}</h3>
        <p className="text-cinema-gray-light text-sm mt-2">{description}</p>

        <div className="mt-6 pb-4 border-b border-cinema-gold/20">
          {isCustom ? (
            <div className="font-display text-3xl md:text-4xl text-cinema-gold">
              {price}
            </div>
          ) : (
            <div className="flex items-baseline gap-2 flex-wrap">
              <span className="font-display text-4xl md:text-5xl text-cinema-gold">
                ₹{price}
              </span>
              {originalPrice && (
                <span className="text-cinema-gray line-through text-sm">
                  ₹{originalPrice}
                </span>
              )}
            </div>
          )}
        </div>

        <ul className="mt-6 space-y-3">
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-start gap-2 text-sm">
              <svg
                className="w-4 h-4 text-cinema-gold mt-0.5 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span className="text-cinema-gray-light">{feature}</span>
            </li>
          ))}
        </ul>

        <Link
          href={isCustom ? "/contact" : "/book"}
          className={`block text-center mt-8 py-3 px-6 rounded-lg font-mono text-xs tracking-[2px] transition-all ${
            popular
              ? "bg-cinema-gold text-cinema-black hover:bg-cinema-gold-dark"
              : "border border-cinema-gold text-cinema-gold hover:bg-cinema-gold/10"
          }`}
        >
          {isCustom ? "Request Quote →" : "Book This Package →"}
        </Link>
      </div>
    </motion.div>
  );
}

function Sprockets() {
  return (
    <>
      <div className="absolute left-0 top-0 bottom-0 w-8 flex flex-col justify-around items-center py-8 opacity-10 z-10 pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="w-4 h-4 rounded-sm border border-cinema-gold-dark"
          />
        ))}
      </div>
      <div className="absolute right-0 top-0 bottom-0 w-8 flex flex-col justify-around items-center py-8 opacity-10 z-10 pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="w-4 h-4 rounded-sm border border-cinema-gold-dark"
          />
        ))}
      </div>
    </>
  );
}
