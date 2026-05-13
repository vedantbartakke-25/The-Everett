"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import CTAButton from "./ui/CTAButton";

const benefits = [
  {
    title: "Early-Stage Pricing",
    description: "Access pre-launch pricing advantages unavailable post-launch.",
  },
  {
    title: "Priority Inventory",
    description: "First selection of the most coveted floor plans and views.",
  },
  {
    title: "Private Preview",
    description: "Exclusive walkthrough before the public launch.",
  },
  {
    title: "Preferred Terms",
    description: "Bespoke payment plans for EOI registrants.",
  },
];

export default function EOISection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="relative py-24 md:py-36 bg-warm-beige overflow-hidden">
      {/* Subtle shimmer effect */}
      <div className="absolute inset-0 animate-shimmer" />

      <div
        ref={ref}
        className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16"
      >
        <div className="max-w-4xl mx-auto text-center">
          {/* Eyebrow */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            className="font-body text-[10px] tracking-[0.4em] uppercase text-champagne mb-6"
          >
            Expression of Interest
          </motion.p>

          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: 60 } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
            className="h-[1px] bg-champagne mx-auto mb-10"
          />

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            className="font-heading text-3xl md:text-5xl lg:text-6xl text-charcoal font-light leading-[1.1] mb-6"
          >
            The Window of
            <br />
            <span className="italic text-champagne">Opportunity</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
            className="font-body text-sm md:text-base text-soft-gray font-light leading-relaxed tracking-wide mb-16 max-w-2xl mx-auto"
          >
            The EOI benefit window closes soon. Register your interest today to
            secure privileged access to The Everett&apos;s most exclusive
            offerings.
          </motion.p>

          {/* Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-16">
            {benefits.map((benefit, i) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.6,
                  delay: 0.4 + i * 0.1,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
                className="p-8 border border-charcoal/[0.06] text-left hover:border-champagne/20 transition-colors duration-500"
              >
                <p className="font-body text-[10px] tracking-[0.3em] uppercase text-champagne mb-3">
                  0{i + 1}
                </p>
                <h4 className="font-heading text-xl md:text-2xl text-charcoal font-light mb-3">
                  {benefit.title}
                </h4>
                <p className="font-body text-xs text-soft-gray font-light tracking-wide leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <CTAButton variant="primary" href="#contact">
              Register Your Interest
            </CTAButton>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
