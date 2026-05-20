"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);

  return (
    <section
      id="hero"
      ref={ref}
      className="relative h-screen w-full overflow-hidden bg-charcoal"
    >
      {/* Background Image with Slow Parallax + Subtle Zoom */}
      <motion.div className="absolute inset-0" style={{ y, scale }}>
        <Image
          src="/hero.png"
          alt="The Everett - A Quiet Masterpiece in Lullanagar"
          fill
          className="object-cover"
          priority
          quality={90}
          sizes="100vw"
        />
      </motion.div>

      {/* Softer Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal/60 via-transparent to-charcoal/80" />
      <div className="absolute inset-0 bg-gradient-to-r from-charcoal/30 via-transparent to-charcoal/30" />

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 h-full flex flex-col justify-center items-center text-center pb-32 px-8 md:px-12 lg:px-20 max-w-[1440px] mx-auto"
      >
        {/* Main Headline */}
        <div className="overflow-hidden mb-6">
          <motion.h1
            initial={{ y: 120, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 1.4,
              delay: 0.5,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="font-heading text-6xl sm:text-7xl md:text-8xl lg:text-[10rem] text-ivory font-light leading-none tracking-tight"
          >
            The Everett
          </motion.h1>
        </div>

        {/* Separator */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: 50 }}
          transition={{ duration: 1.4, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="h-[1px] bg-champagne/50 mb-8"
        />

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 1.1, ease: [0.22, 1, 0.36, 1] }}
          className="font-body text-[10px] md:text-xs text-ivory/70 font-light tracking-[0.35em] uppercase max-w-xl mb-14"
        >
          A Quiet Masterpiece in Lullanagar
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1.4, ease: [0.22, 1, 0.36, 1] }}
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-3 bg-champagne text-charcoal px-10 py-4 font-body text-[10px] md:text-xs tracking-[0.2em] uppercase transition-all duration-600 hover:bg-champagne-light hover:shadow-lg hover:shadow-champagne/20 hover:-translate-y-0.5"
          >
            Book Private Preview
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-3"
        >
          <span className="font-body text-[8px] tracking-[0.4em] uppercase text-ivory/30">
            Discover
          </span>
          <div className="w-[1px] h-10 bg-gradient-to-b from-champagne/40 to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  );
}
