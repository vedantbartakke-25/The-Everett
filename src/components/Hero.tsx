"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import CTAButton from "./ui/CTAButton";

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      id="hero"
      ref={ref}
      className="relative h-screen w-full overflow-hidden bg-charcoal"
    >
      {/* Background Image with Slower Parallax */}
      <motion.div className="absolute inset-0 opacity-80" style={{ y }}>
        <Image
          src="/hero.png"
          alt="The Everett - Ultra Luxury Residences"
          fill
          className="object-cover"
          priority
          quality={90}
          sizes="100vw"
        />
      </motion.div>

      {/* Softer Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal/40 via-transparent to-charcoal/80" />

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 h-full flex flex-col justify-center items-center text-center pb-20 px-6 md:px-12 lg:px-16 max-w-[1440px] mx-auto"
      >
        {/* Main Headline */}
        <div className="overflow-hidden mb-6">
          <motion.h1
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 1.4,
              delay: 0.5,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="font-heading text-5xl sm:text-6xl md:text-8xl lg:text-9xl text-ivory font-light leading-none tracking-tight"
          >
            The Everett.
          </motion.h1>
        </div>

        {/* Separator */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: 40 }}
          transition={{ duration: 1.4, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="h-[1px] bg-champagne/60 mb-8"
        />

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 1, ease: [0.22, 1, 0.36, 1] }}
          className="font-body text-xs md:text-sm text-ivory/60 font-light tracking-[0.3em] uppercase max-w-xl mb-12"
        >
          A quiet masterpiece in Lullanagar
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 1.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <CTAButton variant="outline" href="#contact" className="border-ivory/30 text-ivory hover:bg-ivory hover:text-charcoal transition-all duration-700">
            Private Preview
          </CTAButton>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="font-body text-[9px] tracking-[0.3em] uppercase text-ivory/40">
            Scroll
          </span>
          <div className="w-[1px] h-8 bg-gradient-to-b from-champagne/60 to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  );
}
