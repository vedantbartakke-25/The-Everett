"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import RevealAnimation from "./ui/RevealAnimation";

export default function PrivateSanctuary() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "-6%"]);

  return (
    <section ref={ref} className="relative py-28 md:py-40 lg:py-56 bg-ivory overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* Image — Left, large */}
          <motion.div
            className="lg:col-span-7"
            style={{ y: imageY }}
          >
            <motion.div
              initial={{ scale: 1.04, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full aspect-[4/3] md:aspect-[16/10] overflow-hidden"
            >
              <Image
                src="/bedroom.png"
                alt="The Everett — Private master bedroom sanctuary"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 60vw"
              />
            </motion.div>
          </motion.div>

          {/* Text — Right */}
          <div className="lg:col-span-4 lg:col-start-9">
            <RevealAnimation direction="right" delay={0.2}>
              <p className="font-body text-[10px] md:text-xs tracking-[0.4em] uppercase text-champagne mb-6">
                Private Retreat
              </p>
            </RevealAnimation>

            <RevealAnimation direction="right" delay={0.3}>
              <div className="w-10 h-[1px] bg-champagne/50 mb-8" />
            </RevealAnimation>

            <RevealAnimation direction="right" delay={0.5}>
              <h3 className="font-heading text-3xl md:text-4xl lg:text-6xl text-charcoal font-light leading-[1.1] tracking-tight mb-8">
                Personal
                <br />
                <span className="italic text-champagne">By Design</span>
              </h3>
            </RevealAnimation>

            <RevealAnimation direction="right" delay={0.7}>
              <p className="font-body text-sm md:text-base text-soft-gray font-light leading-[2] tracking-wide">
                Bedrooms are planned with generous wardrobes and abundant storage,
                while the master suite extends into a walk-in closet. Living spaces
                remain effortlessly clean and composed.
              </p>
            </RevealAnimation>

            <RevealAnimation direction="right" delay={0.9}>
              <p className="font-body text-sm md:text-base text-soft-gray font-light leading-[2] tracking-wide mt-6">
                Every detail is thought through — to make the home feel more
                resolved, more functional, and easier to live in.
              </p>
            </RevealAnimation>
          </div>
        </div>
      </div>
    </section>
  );
}
