"use client";

import { motion, AnimatePresence, useInView } from "framer-motion";
import { useRef, useState } from "react";

const residences = [
  {
    id: "3bed",
    tab: "3 Bed",
    type: "3 Bedroom Residence",
    area: "~1,800",
    price: "₹4 Cr",
    label: "Starting",
    highlights: ["Private Elevator", "Panoramic Deck", "Vastu Compliant"],
  },
  {
    id: "4bed",
    tab: "4 Bed",
    type: "4 Bedroom Residence",
    area: "~2,250",
    price: "₹4.75 Cr+",
    label: "Onwards",
    highlights: [
      "Multiple Master Suites",
      "Walk-in Wardrobes",
      "Double-Height Living",
    ],
  },
  {
    id: "large4bed",
    tab: "Large 4 Bed",
    type: "Large 4 Bedroom Residence",
    area: "~2,450",
    price: "₹5.35 Cr+",
    label: "Onwards",
    highlights: [
      "Expanded Living Spaces",
      "Premium Corner Units",
      "Unobstructed Views",
    ],
  },
  {
    id: "5bed",
    tab: "5 Bed",
    type: "5 Bedroom Residence",
    area: "~3,300",
    price: "₹7.9 Cr+",
    label: "Onwards",
    highlights: [
      "Ultra-Spacious Layout",
      "Grand Master Suite",
      "Private Terrace",
    ],
  },
  {
    id: "duplex",
    tab: "Duplex",
    type: "5 Bed Duplex",
    area: "~2,800",
    price: "₹6.3 Cr+",
    label: "Onwards",
    highlights: [
      "Duplex Living",
      "Internal Staircase",
      "Sky Lounge Access",
    ],
  },
];

export default function Residences() {
  const [activeIndex, setActiveIndex] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const active = residences[activeIndex];

  return (
    <section
      id="configurations"
      className="relative py-28 md:py-40 lg:py-56 luxury-gradient overflow-hidden scroll-mt-24"
    >
      <div
        ref={ref}
        className="relative z-10 max-w-[1440px] mx-auto px-8 md:px-12 lg:px-20"
      >
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 md:mb-24"
        >
          <p className="font-body text-[10px] md:text-[20px] tracking-[0.4em] uppercase text-champagne mb-6">
            The Residences
          </p>
          <div className="w-10 h-[1px] bg-champagne/40 mb-8" />
          <h2 className="font-heading text-4xl md:text-6xl lg:text-8xl text-ivory font-light leading-[1.05] tracking-tight">
            Curated
            <br />
            <span className="italic text-champagne">Volumes</span>
          </h2>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 1,
            delay: 0.3,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="flex flex-wrap gap-2 md:gap-3 mb-16 md:mb-24"
        >
          {residences.map((res, i) => (
            <button
              key={res.id}
              onClick={() => setActiveIndex(i)}
              className={`residence-tab ${
                activeIndex === i ? "active" : ""
              }`}
            >
              {res.tab}
            </button>
          ))}
        </motion.div>

        {/* Active Residence Card — Immersive editorial */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start"
          >
            {/* Left — Large Type */}
            <div className="lg:col-span-6">
              <p className="font-body text-[10px] tracking-[0.4em] uppercase text-champagne/70 mb-8">
                {active.type}
              </p>

              {/* Area — Hero size */}
              <div className="mb-10 lg:mb-14">
                <span className="font-heading text-4xl md:text-5xl lg:text-[5em] text-ivory font-light tracking-tight leading-none">
                  {active.area}
                </span>
                <span className="font-body text-xs text-ivory/30 ml-4 tracking-[0.2em] uppercase">
                  sq.ft
                </span>
              </div>

              <div className="w-16 h-[1px] bg-champagne/30 mb-10" />

              {/* Price */}
              <div>
                <a
                  href="#contact"
                  className="inline-block group"
                >
                  <p className="font-body text-[9px] tracking-[0.3em] uppercase text-ivory/30 mb-3 group-hover:text-champagne transition-colors duration-400">
                    Pricing
                  </p>
                  <p className="font-heading text-xl md:text-2xl mb-[20px] text-ivory font-light tracking-tight group-hover:text-champagne transition-colors duration-400">
                    Pricing Available Upon Request
                  </p>
                </a>
              </div>
            </div>

            {/* Right — Highlights */}
            <div className="lg:col-span-4 lg:col-start-9 lg:pt-12">
              <p className="font-body text-[10px] tracking-[0.3em] uppercase text-ivory/30 mb-8">
                Signature Highlights
              </p>
              <div className="space-y-6">
                {active.highlights.map((highlight, i) => (
                  <motion.div
                    key={highlight}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.8,
                      delay: i * 0.12,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="flex items-center gap-5"
                  >
                    <div className="w-5 h-[1px] bg-champagne/30" />
                    <span className="font-body text-sm text-ivory/60 tracking-wider font-light">
                      {highlight}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* Private Request Link */}
              <motion.a
                href="#contact"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="inline-flex items-center gap-4 mt-14 group"
              >
                <span className="font-body text-[10px] tracking-[0.25em] uppercase text-champagne group-hover:text-ivory transition-colors duration-600">
                  Enquire Now
                </span>
                <span className="w-8 h-[1px] bg-champagne group-hover:w-12 group-hover:bg-ivory transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]" />
              </motion.a>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
