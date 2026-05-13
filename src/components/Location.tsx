"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import SectionHeading from "./ui/SectionHeading";
import RevealAnimation from "./ui/RevealAnimation";

const landmarks = [
  { name: "South Command Hospital", distance: "2 min", category: "Healthcare" },
  { name: "Little Italy Restaurant", distance: "3 min", category: "Dining" },
  { name: "Sarasbaug", distance: "5 min", category: "Leisure" },
  { name: "Swargate Metro Station", distance: "7 min", category: "Transit" },
  { name: "Pune Railway Station", distance: "12 min", category: "Transit" },
  { name: "Pune Airport", distance: "25 min", category: "Travel" },
  { name: "IT Park Hinjewadi", distance: "35 min", category: "Business" },
  { name: "Premium Schools & Colleges", distance: "5–10 min", category: "Education" },
];

export default function Location() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="location"
      className="relative py-20 md:py-32 lg:py-48 luxury-gradient overflow-hidden"
    >
      <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">
        <SectionHeading
          eyebrow="The Location"
          title="Lullanagar, Pune"
          subtitle="Positioned at the confluence of connectivity and calm, The Everett enjoys proximity to Pune's finest social infrastructure."
          light
        />

        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 mt-16 md:mt-24 lg:mt-32">
          {/* Distance Cards */}
          <div className="lg:col-span-5 lg:col-start-2">
            <RevealAnimation direction="right" delay={0.2}>
              <p className="font-body text-[10px] md:text-xs tracking-[0.4em] uppercase text-champagne mb-4 md:mb-6">
                Proximity
              </p>
              <h3 className="font-heading text-3xl md:text-5xl lg:text-6xl text-ivory font-light mb-10 md:mb-12 leading-[1.1] tracking-tight">
                Everything Within
                <br />
                <span className="italic text-champagne">Reach</span>
              </h3>
            </RevealAnimation>

            <div className="space-y-0">
              {landmarks.map((landmark, i) => (
                <motion.div
                  key={landmark.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 1.2,
                    delay: 0.4 + i * 0.1,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="group flex items-center justify-between py-6 border-b border-ivory/[0.04] hover:border-champagne/30 transition-colors duration-700 cursor-default"
                >
                  <div className="flex items-center gap-6">
                    <span className="font-body text-[10px] tracking-[0.3em] uppercase text-champagne/50 w-20">
                      {landmark.category}
                    </span>
                    <span className="font-body text-sm md:text-base text-ivory/70 font-light tracking-wide group-hover:text-ivory transition-colors duration-500">
                      {landmark.name}
                    </span>
                  </div>
                  <span className="font-body text-xs text-champagne tracking-widest font-light">
                    {landmark.distance}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Map Placeholder — Stylish Dark */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 1.4, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full aspect-square md:aspect-[4/5] rounded-none overflow-hidden"
            >
              <div className="absolute inset-0 bg-charcoal-light">
                {/* Stylized Map Background */}
                <div className="absolute inset-0 opacity-[0.03]" style={{
                  backgroundImage: `
                    linear-gradient(rgba(201,169,110,1) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(201,169,110,1) 1px, transparent 1px)
                  `,
                  backgroundSize: '80px 80px'
                }} />

                {/* Center Pin */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="relative"
                  >
                    <div className="w-2 h-2 bg-champagne rounded-full" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 border border-champagne/40 rounded-full" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 border border-champagne/10 rounded-full" />
                  </motion.div>
                </div>

                {/* Location Label */}
                <div className="absolute bottom-10 left-10 right-10">
                  <p className="font-body text-[10px] tracking-[0.4em] uppercase text-champagne mb-3">
                    The Everett
                  </p>
                  <p className="font-heading text-3xl md:text-4xl text-ivory font-light mb-2">
                    Lullanagar
                  </p>
                  <p className="font-body text-xs text-ivory/40 tracking-widest">
                    18.4961° N, 73.8882° E
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
