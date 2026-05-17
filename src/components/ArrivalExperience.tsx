"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import RevealAnimation from "./ui/RevealAnimation";

export default function ArrivalExperience() {
  return (
    <section className="relative py-0 bg-charcoal overflow-hidden">
      {/* Full-width immersive image */}
      <div className="relative w-full h-[70vh] md:h-[85vh] lg:h-[90vh]">
        <motion.div
          initial={{ scale: 1.06, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0"
        >
          <Image
            src="/lobby-hires.jpg"
            alt="The Everett — Grand arrival lobby with curated ambience"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </motion.div>

        {/* Dark gradient overlay from bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/30 to-transparent" />
        <div className="absolute inset-0 bg-charcoal/20" />
      </div>

      {/* Text below image — Editorial layout */}
      <div className="relative max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 py-20 md:py-28 lg:py-36">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          <div className="lg:col-span-5 lg:col-start-2">
            <RevealAnimation delay={0}>
              <p className="font-body text-[10px] md:text-xs tracking-[0.4em] uppercase text-champagne mb-6">
                The Arrival
              </p>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <div className="w-10 h-[1px] bg-champagne/40 mb-8" />
            </RevealAnimation>
            <RevealAnimation delay={0.4}>
              <h2 className="font-heading text-4xl md:text-5xl lg:text-7xl text-ivory font-light leading-[1.05] tracking-tight">
                A Grand
                <br />
                <span className="italic text-champagne">Prelude</span>
              </h2>
            </RevealAnimation>
          </div>

          <div className="lg:col-span-4 lg:col-start-8 lg:pt-8">
            <RevealAnimation direction="right" delay={0.5}>
              <p className="font-body text-sm md:text-base text-ivory/60 font-light leading-[2] tracking-wide mb-6">
                The moment you step in, the world outside dissolves.
                A hospitality-inspired lobby curated with the precision
                of a private members&apos; club — where every surface,
                every shadow, every silence has been considered.
              </p>
            </RevealAnimation>
            <RevealAnimation direction="right" delay={0.7}>
              <p className="font-body text-sm md:text-base text-ivory/60 font-light leading-[2] tracking-wide">
                This is not an entrance. It is an experience — a quiet
                announcement that you have arrived somewhere exceptional.
              </p>
            </RevealAnimation>
          </div>
        </div>
      </div>
    </section>
  );
}
