// components/sections/ServicesSection.tsx
"use client";

import { motion } from "framer-motion";
import { services } from "@/lib/data";
import Link from "next/link";

export default function ServicesSection() {
  const serviceIcons = {
    "🎬": (
      <svg
        className="w-12 h-12 text-cinema-gold"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
        />
      </svg>
    ),
    "✂️": (
      <svg
        className="w-12 h-12 text-cinema-gold"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 5.758a3 3 0 10-4.243 4.243 3 3 0 004.243-4.243zm0-5.758a3 3 0 10-4.243-4.243 3 3 0 004.243 4.243z"
        />
      </svg>
    ),
    "✨": (
      <svg
        className="w-12 h-12 text-cinema-gold"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
        />
      </svg>
    ),
    "💍": (
      <svg
        className="w-12 h-12 text-cinema-gold"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0zm-5-3.5a.5.5 0 11-1 0 .5.5 0 011 0z"
        />
      </svg>
    ),
    "📱": (
      <svg
        className="w-12 h-12 text-cinema-gold"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
        />
      </svg>
    ),
    "🏢": (
      <svg
        className="w-12 h-12 text-cinema-gold"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
        />
      </svg>
    ),
  };

  return (
    <section className="py-24 bg-gradient-to-b from-cinema-black to-cinema-dark relative overflow-hidden">
      <section className="pt-40 pb-20 relative bg-cinema-dark">
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-12 bg-cinema-gold opacity-60" />
            <span className="font-mono text-[10px] tracking-[5px] text-cinema-gold uppercase">
              What I Offer
            </span>
            <div className="h-px w-12 bg-cinema-gold opacity-60" />
          </div>
          <h1 className="font-display text-5xl md:text-7xl text-cinema-white tracking-wider">
            My <span className="text-gold-shimmer">Services</span>
          </h1>
          <p className="font-body text-xl text-cinema-gray italic mt-4 max-w-xl mx-auto">
            Complete cinematic production from concept to final cut.
          </p>
        </div>
      </section>
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-cinema-gold/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cinema-gold/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-cinema-black/60 backdrop-blur-sm rounded-2xl p-8 border border-cinema-gold/20 hover:border-cinema-gold/60 transition-all duration-500 hover:transform hover:-translate-y-2"
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-cinema-gold/5 via-transparent to-transparent" />

              {/* Icon */}
              <div className="mb-6 relative">
                <div className="absolute inset-0 bg-cinema-gold/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                {serviceIcons[service.icon as keyof typeof serviceIcons] || (
                  <svg
                    className="w-12 h-12 text-cinema-gold"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                    />
                  </svg>
                )}
              </div>

              {/* Title */}
              <h3 className="font-display text-2xl text-cinema-white mb-3 group-hover:text-cinema-gold transition-colors duration-300">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-cinema-gray-light text-sm leading-relaxed mb-6">
                {service.description}
              </p>

              {/* Features List */}
              <div className="space-y-2 mb-6">
                {service.features.slice(0, 4).map((feature, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 text-xs text-cinema-gray"
                  >
                    <svg
                      className="w-3 h-3 text-cinema-gold"
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
                    <span>{feature}</span>
                  </div>
                ))}
                {service.features.length > 4 && (
                  <div className="text-xs text-cinema-gold/70 mt-2">
                    +{service.features.length - 4} more features
                  </div>
                )}
              </div>

              {/* Tools Tags */}
              <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-cinema-gold/20">
                {service.tools?.slice(0, 3).map((tool, idx) => (
                  <span
                    key={idx}
                    className="text-[9px] font-mono tracking-wider text-cinema-gold/70 border border-cinema-gold/30 rounded-full px-2 py-1"
                  >
                    {tool}
                  </span>
                ))}
                {service.tools && service.tools.length > 3 && (
                  <span className="text-[9px] font-mono tracking-wider text-cinema-gray">
                    +{service.tools.length - 3}
                  </span>
                )}
              </div>

              {/* Learn More Link */}
              <Link
                href={`/services/${service.id}`}
                className="inline-flex items-center gap-2 mt-6 text-sm font-mono tracking-wider text-cinema-gold hover:text-cinema-gold-dark transition-colors group-hover:gap-3 transition-all duration-300"
              >
                <span>LEARN MORE</span>
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
