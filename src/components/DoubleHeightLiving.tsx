"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import RevealAnimation from "./ui/RevealAnimation";

export default function DoubleHeightLiving() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 0.5], [1.05, 1]);

  return (
    <section
      ref={ref}
      className="relative bg-ivory overflow-hidden"
    >
      {/* Full-bleed image with parallax */}
      <div className="relative w-full h-[65vh] md:h-[80vh] lg:h-screen overflow-hidden">
        <motion.div
          className="absolute inset-0"
          style={{ scale: imageScale }}
        >
          <Image
            src="/double-height.jpeg"
            alt="The Everett — Double-height living space flooded with natural light"
            fill
            className="object-cover"
            sizes="100vw"
            quality={90}
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-ivory" />
      </div>

      {/* Editorial Text Block */}
      <div className="max-w-[1440px] mx-auto px-8 md:px-12 lg:px-20 py-20 md:py-28 lg:py-36">
        <div className="max-w-3xl mx-auto text-center">
          <RevealAnimation delay={0}>
            <p className="font-body text-[10px] md:text-xs tracking-[0.4em] uppercase text-champagne mb-6">
              Volume & Light
            </p>
          </RevealAnimation>

          <RevealAnimation delay={0.2}>
            <div className="flex justify-center mb-8">
              <div className="w-10 h-[1px] bg-champagne/50" />
            </div>
          </RevealAnimation>

          <RevealAnimation delay={0.4}>
            <h2 className="font-heading text-4xl md:text-6xl lg:text-8xl text-charcoal font-light leading-[1.05] tracking-tight mb-10">
              Rooms That
              <br />
              <span className="italic text-champagne">Rise</span>
            </h2>
          </RevealAnimation>

          <RevealAnimation delay={0.6}>
            <p className="font-body text-sm md:text-lg text-soft-gray font-light leading-[2] tracking-wide max-w-xl mx-auto">
              Double-height living spaces that dissolve the boundary between
              indoors and sky. Floor-to-ceiling glass frames the city as a
              living canvas — changing with every hour, every season.
            </p>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
}
