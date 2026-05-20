"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import RevealAnimation from "./ui/RevealAnimation";

export default function Philosophy() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "-8%"]);

  return (
    <section
      id="philosophy"
      ref={sectionRef}
      className="relative py-32 md:py-44 lg:py-56 bg-ivory overflow-hidden scroll-mt-24"
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">
        {/* Section Header — Left aligned, editorial */}
        <div className="mb-20 md:mb-32 lg:mb-40">
          <RevealAnimation delay={0}>
            <p className="font-body text-[10px] md:text-[20px] tracking-[0.4em] uppercase text-champagne mb-6">
              The Everett Philosophy
            </p>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <div className="w-12 h-[1px] bg-champagne/50 mb-10" />
          </RevealAnimation>
          <RevealAnimation delay={0.4}>
            <h2 className="font-heading text-4xl md:text-6xl lg:text-8xl text-charcoal font-light leading-[1.05] tracking-tight max-w-4xl">
              Where Architecture
              <br />
              <span className="italic text-champagne">Breathes</span>
            </h2>
          </RevealAnimation>
        </div>

        {/* Asymmetrical Layout — Large Image + Short Copy */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          {/* Large Image — Offset */}
          <motion.div
            className="lg:col-span-7 lg:col-start-1 relative"
            style={{ y: imageY }}
          >
            <div className="relative w-full aspect-[4/5] md:aspect-[3/4] lg:aspect-[4/5] overflow-hidden">
              <motion.div
                initial={{ scale: 1.08, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true, margin: "-15%" }}
                transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
                className="w-full h-full"
              >
                <Image
                  src="/interior.png"
                  alt="The Everett — Double height living space with panoramic views"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                />
              </motion.div>
            </div>
          </motion.div>

          {/* Editorial Copy — Right side */}
          <div className="lg:col-span-4 lg:col-start-9 lg:pt-32">
            <RevealAnimation direction="right" delay={0.3}>
              <p className="font-body text-sm md:text-base text-soft-gray font-light leading-[2] tracking-wide mb-10">
                Trophy properties are not defined by scale. They are defined by
                how few people get to own them.
              </p>
            </RevealAnimation>

            <RevealAnimation direction="right" delay={0.5}>
              <p className="font-body text-sm md:text-base text-soft-gray font-light leading-[2] tracking-wide mb-10">
                At The Everett, we&apos;ve kept the number of residences deliberately
                limited — so ownership here remains rare, and therefore, valuable.
              </p>
            </RevealAnimation>

            <RevealAnimation direction="right" delay={0.7}>
              <div className="space-y-5 pt-6 border-t border-charcoal/[0.06]">
                {[
                  "Architectural Restraint",
                  "Double-Height Spaces",
                  "Private Elevator Access",
                  "Panoramic Decks",
                  "Vastu Planning",
                  "Curated Exclusivity",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-4">
                    <div className="w-6 h-[1px] bg-champagne/40" />
                    <span className="font-body text-xs tracking-[0.15em] uppercase text-charcoal/60 font-light">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </RevealAnimation>
          </div>
        </div>
      </div>
    </section>
  );
}
