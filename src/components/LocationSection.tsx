"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import RevealAnimation from "./ui/RevealAnimation";

const landmarks = [
  { name: "Southern Command Hospital", distance: "2 min" },
  { name: "Magarpatta City", distance: "5 min" },
  { name: "Pune International Airport", distance: "20 min" },
  { name: "Premium Schools & Colleges", distance: "5 min" },
  { name: "IT Hubs — Hadapsar & Kharadi", distance: "10 min" },
  { name: "Shopping & Lifestyle Hubs", distance: "5 min" },
];

export default function LocationSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="location"
      className="relative py-28 md:py-40 lg:py-56 luxury-gradient overflow-hidden scroll-mt-24"
    >
      {/* Decorative */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle, rgba(201,169,110,0.4) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div
        ref={ref}
        className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left — Header + Description + Landmarks */}
          <div className="lg:col-span-5">
            <RevealAnimation delay={0}>
              <p className="font-body text-[10px] md:text-xs tracking-[0.4em] uppercase text-champagne mb-6">
                The Address
              </p>
            </RevealAnimation>

            <RevealAnimation delay={0.2}>
              <div className="w-10 h-[1px] bg-champagne/40 mb-8" />
            </RevealAnimation>

            <RevealAnimation delay={0.4}>
              <h2 className="font-heading text-4xl md:text-5xl lg:text-7xl text-ivory font-light leading-[1.05] tracking-tight mb-8">
                Lullanagar,
                <br />
                <span className="italic text-champagne">Pune</span>
              </h2>
            </RevealAnimation>

            <RevealAnimation delay={0.6}>
              <p className="font-body text-sm md:text-base text-ivory/50 font-light leading-[2] tracking-wide mb-6">
                Located in one of Pune&apos;s most established residential enclaves,
                The Everett commands a position of quiet prominence. Rising ~370 feet
                across 31 levels, it is designed to be the defining tower of this
                micro-market.
              </p>
            </RevealAnimation>

            <RevealAnimation delay={0.8}>
              <p className="font-body text-sm md:text-base text-ivory/50 font-light leading-[2] tracking-wide mb-12">
                Surrounded by mature infrastructure, premium connectivity, and the
                understated elegance of an elite neighborhood — this is an address
                that needs no introduction.
              </p>
            </RevealAnimation>

            <RevealAnimation delay={1.0}>
              <p className="font-body text-[10px] tracking-[0.3em] uppercase text-ivory/30 mb-8">
                Key Proximities
              </p>
              <div className="space-y-0">
                {landmarks.map((landmark, i) => (
                  <div
                    key={landmark.name}
                    className="flex items-center justify-between py-4 border-b border-ivory/[0.06] group"
                  >
                    <span className="font-body text-sm text-ivory/60 font-light tracking-wide group-hover:text-ivory/80 transition-colors duration-500">
                      {landmark.name}
                    </span>
                    <span className="font-body text-xs text-champagne/60 tracking-[0.15em] uppercase">
                      {landmark.distance}
                    </span>
                  </div>
                ))}
              </div>
            </RevealAnimation>
          </div>

          {/* Right — Location Map Image */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1.2, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="relative w-full rounded-lg overflow-hidden bg-white/5 border border-ivory/10 shadow-2xl">
                <Image
                  src="/location-map2.jpg"
                  alt="The Everett — Location map, Lullanagar, Pune"
                  width={1440}
                  height={1000}
                  className="w-full h-auto object-contain"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
