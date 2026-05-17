"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import RevealAnimation from "./ui/RevealAnimation";

export default function SanctuaryWithin() {
  return (
    <section className="relative py-28 md:py-40 lg:py-56 bg-charcoal overflow-hidden scroll-mt-24">
      {/* Atmospheric Background — Hardware Accelerated to prevent scroll lag */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none transform-gpu will-change-transform">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle, rgba(201,169,110,0.5) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* Text — Left */}
          <div className="lg:col-span-5 lg:col-start-1 order-2 lg:order-1">
            <RevealAnimation delay={0}>
              <p className="font-body text-[10px] md:text-xs tracking-[0.4em] uppercase text-champagne mb-6">
                Spiritual Wellness
              </p>
            </RevealAnimation>

            <RevealAnimation delay={0.2}>
              <div className="w-10 h-[1px] bg-champagne/40 mb-8" />
            </RevealAnimation>

            <RevealAnimation delay={0.4}>
              <h2 className="font-heading text-4xl md:text-5xl lg:text-7xl text-ivory font-light leading-[1.05] tracking-tight mb-10">
                A Sanctuary
                <br />
                <span className="italic text-champagne">Within</span>
              </h2>
            </RevealAnimation>

            <RevealAnimation delay={0.6}>
              <p className="font-body text-sm md:text-base text-ivory/50 font-light leading-[2] tracking-wide mb-8">
                A dedicated Ganesh temple within the premises — a serene space
                for devotion, reflection, and inner calm. Designed with the same
                reverence as the residences themselves.
              </p>
            </RevealAnimation>

            <RevealAnimation delay={0.8}>
              <p className="font-body text-sm md:text-base text-ivory/50 font-light leading-[2] tracking-wide">
                In a world that moves relentlessly forward, The Everett honours
                what endures — tradition, ritual, and the quiet power of a
                space held sacred.
              </p>
            </RevealAnimation>

            {/* Subtle wellness markers */}
            <RevealAnimation delay={1.0}>
              <div className="flex flex-wrap gap-6 mt-12 pt-8 border-t border-ivory/[0.06]">
                {["Vastu Aligned", "Zen Garden", "Meditation Spaces"].map(
                  (item) => (
                    <span
                      key={item}
                      className="font-body text-[10px] tracking-[0.2em] uppercase text-ivory/30"
                    >
                      {item}
                    </span>
                  )
                )}
              </div>
            </RevealAnimation>
          </div>

          {/* Image — Right */}
          <div className="lg:col-span-6 lg:col-start-7 order-1 lg:order-2">
            <motion.div
              initial={{ scale: 1.05, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full aspect-[4/5] md:aspect-[3/4] overflow-hidden"
            >
              <Image
                src="/mandir-optimized.jpg"
                alt="The Everett — Sacred Ganesh temple and spiritual sanctuary"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-charcoal/15" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
