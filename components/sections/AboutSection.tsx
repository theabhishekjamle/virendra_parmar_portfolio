"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import virendraImage from "@/public/images/virendra_image.png";
import { tools } from "@/lib/data";

function useCountUp(target: number, shouldStart: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!shouldStart) return;

    let start = 0;
    const duration = 2000;
    const step = target / (duration / 16);

    const timer = setInterval(() => {
      start += step;

      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [shouldStart, target]);

  return count;
}

export default function AboutSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { ref: statsRef, inView: statsInView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const { ref: contentRef, inView: contentInView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const imgY = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);

  const stats = [
    {
      value: 150,
      suffix: "+",
      label: "Projects Completed",
      desc: "Across diverse genres",
    },
    {
      value: 5,
      suffix: "+",
      label: "Years Experience",
      desc: "In cinematography",
    },
    {
      value: 50,
      suffix: "+",
      label: "Happy Clients",
      desc: "From across India",
    },
    {
      value: 100,
      suffix: "%",
      label: "Client Satisfaction",
      desc: "Always delivered",
    },
  ];

  return (
    <section
      className="relative overflow-hidden bg-cinema-dark py-32"
      ref={containerRef}
    >
      {/* Background */}
      <div className="grid-bg absolute inset-0 opacity-20" />

      <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-cinema-gold-dark to-transparent opacity-30" />

      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <motion.div
          ref={contentRef}
          initial={{ opacity: 0, y: 40 }}
          animate={contentInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-20 flex items-center justify-center gap-4"
        >
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-cinema-gold-dark opacity-40" />

          <span className="font-mono text-[10px] uppercase tracking-[6px] text-cinema-gold">
            About Me
          </span>

          <div className="h-px flex-1 bg-gradient-to-l from-transparent to-cinema-gold-dark opacity-40" />
        </motion.div>

        {/* Main Content */}
        <div className="mb-24 grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          {/* Left Image */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={contentInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9 }}
            className="relative"
          >
            <motion.div style={{ y: imgY }} className="relative">
              <div className="relative aspect-[3/4] overflow-hidden rounded-sm">
                <Image
                  src={virendraImage}
                  alt="Virendra Parmar"
                  fill
                  priority
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              </div>

              {/* Decorative Border */}
              <div className="absolute -left-4 -top-4 h-24 w-24 border-l-2 border-t-2 border-cinema-gold opacity-60" />

              <div className="absolute -bottom-4 -right-4 h-24 w-24 border-b-2 border-r-2 border-cinema-gold opacity-60" />

              {/* Floating Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={contentInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.5 }}
                className="absolute -right-6 bottom-8 bg-cinema-gold px-6 py-4 font-display text-sm tracking-[4px] text-cinema-black shadow-2xl"
              >
                DIRECTOR
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={contentInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.2 }}
          >
            <h2 className="mb-6 font-display text-4xl leading-tight tracking-wider text-cinema-white md:text-5xl">
              The{" "}
              <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                Vision
              </span>{" "}
              Behind the Lens
            </h2>

            <div className="space-y-5 font-body text-lg leading-relaxed text-cinema-gray">
              <p>
                I&apos;m{" "}
                <span className="font-semibold text-cinema-white">
                  Virendra Parmar
                </span>
                , a passionate cinematographer and video editor based in
                Jabalpur with over 5 years of experience crafting visual stories
                that transcend the ordinary.
              </p>

              <p>
                My journey began with a simple camera and a deep passion for
                storytelling. Today, I combine cinematic visuals, motion
                graphics, and creative editing to deliver unforgettable visual
                experiences.
              </p>

              <p>
                Specializing in{" "}
                <span className="text-cinema-gold">Wedding Films</span>,{" "}
                <span className="text-cinema-gold">Commercial Productions</span>
                , and <span className="text-cinema-gold">Motion Graphics</span>,
                I bring every frame to life using advanced editing and cinematic
                techniques.
              </p>
            </div>

            {/* Signature */}
            <div className="mt-10 flex items-center gap-6">
              <div className="h-px w-12 bg-cinema-gold opacity-60" />

              <div>
                <div className="font-display text-2xl tracking-[6px] text-cinema-gold">
                  Virendra
                </div>

                <div className="font-mono text-[9px] uppercase tracking-[4px] text-cinema-gray">
                  Cinematographer & Editor
                </div>
              </div>
            </div>

            {/* Instagram */}
            <div className="mt-8">
              <a
                href="https://www.instagram.com/virendra421_/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 border border-cinema-border px-5 py-4 font-mono text-[10px] uppercase tracking-[3px] text-cinema-gray transition-all duration-300 hover:border-cinema-gold hover:text-cinema-gold"
              >
                <span className="text-cinema-gold">📸</span>
                @virendra421_ on Instagram
                <span>→</span>
              </a>
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <div ref={statsRef} className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {stats.map((stat, index) => (
            <StatCard
              key={stat.label}
              {...stat}
              index={index}
              inView={statsInView}
            />
          ))}
        </div>

        {/* Tools */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={contentInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="mt-24"
        >
          <div className="mb-10 text-center">
            <div className="font-mono text-[10px] uppercase tracking-[5px] text-cinema-gold">
              Tools & Technology
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {tools.map((tool, i) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={contentInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.7 + i * 0.05 }}
                whileHover={{
                  scale: 1.05,
                  y: -5,
                }}
                className="group flex items-center gap-3 border border-cinema-border bg-cinema-card px-5 py-4 transition-all duration-300 hover:border-cinema-gold"
              >
                <span className="text-2xl">{tool.icon}</span>

                <div>
                  <div className="font-mono text-[10px] tracking-widest text-cinema-white">
                    {tool.name}
                  </div>

                  <div className="font-mono text-[8px] uppercase tracking-[3px] text-cinema-gray">
                    {tool.category}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function StatCard({ value, suffix, label, desc, index, inView }: any) {
  const count = useCountUp(value, inView);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        delay: index * 0.1,
        duration: 0.7,
      }}
      whileHover={{
        y: -8,
      }}
      className="group border border-cinema-border bg-cinema-card p-6 text-center transition-all duration-300 hover:border-cinema-gold-dark"
    >
      <div className="font-display text-4xl leading-none text-cinema-gold md:text-5xl">
        {count}
        {suffix}
      </div>

      <div className="mt-3 font-display text-sm tracking-wider text-cinema-white">
        {label}
      </div>

      <div className="mt-2 font-mono text-[9px] uppercase tracking-[3px] text-cinema-gray">
        {desc}
      </div>
    </motion.div>
  );
}
