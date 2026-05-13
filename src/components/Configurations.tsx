"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import SectionHeading from "./ui/SectionHeading";

const configurations = [
  {
    type: "3 Bedroom",
    area: "~1,800",
    price: "₹4 Cr",
    label: "Starting",
    features: ["Private Elevator", "Panoramic Deck", "Vastu Compliant"],
  },
  {
    type: "4 Bedroom",
    area: "~2,250",
    price: "₹4.75 Cr+",
    label: "Onwards",
    features: [
      "Multiple Master Suites",
      "Walk-in Wardrobes",
      "Double-height Living",
    ],
  },
  {
    type: "Large 4 Bedroom",
    area: "~2,450",
    price: "₹5.35 Cr+",
    label: "Onwards",
    features: [
      "Expanded Living",
      "Premium Corner Units",
      "Unobstructed Views",
    ],
  },
  {
    type: "5 Bedroom",
    area: "~3,300",
    price: "₹7.9 Cr+",
    label: "Onwards",
    features: [
      "Ultra-Spacious Layout",
      "Grand Master Suite",
      "Private Terrace",
    ],
  },
  {
    type: "5 Bed Duplex",
    area: "~2,800",
    price: "₹6.3 Cr+",
    label: "Onwards",
    features: ["Duplex Living", "Internal Staircase", "Sky Lounge Access"],
  },
];

export default function Configurations() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="configurations"
      className="relative py-20 md:py-32 lg:py-48 luxury-gradient overflow-hidden"
    >
      <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">
        <SectionHeading
          eyebrow="The Residences"
          title="Curated Volumes"
          subtitle="Five distinct configurations, each a sanctuary of space, light, and architectural restraint."
          light
        />

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 lg:gap-y-24 gap-x-12 lg:gap-x-20 mt-16 md:mt-24 lg:mt-32">
          {configurations.map((config, index) => (
            <motion.div
              key={config.type}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 1.4,
                delay: index * 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={`group relative transition-all duration-1000 cursor-pointer ${
                index === 3 ? "lg:col-span-1 md:col-span-1" : ""
              }`}
            >
              {/* Type Label */}
              <p className="font-body text-xs tracking-[0.4em] uppercase text-champagne mb-8">
                {config.type}
              </p>

              {/* Area */}
              <div className="mb-8 lg:mb-10">
                <span className="font-heading text-5xl md:text-6xl lg:text-7xl text-ivory font-light tracking-tight">
                  {config.area}
                </span>
                <span className="font-body text-xs text-ivory/40 ml-3 tracking-widest uppercase">
                  sq.ft
                </span>
              </div>

              {/* Separator */}
              <div className="w-12 h-[1px] bg-champagne/40 mb-10 group-hover:w-full transition-all duration-1000 ease-[0.22,1,0.36,1]" />

              {/* Features */}
              <div className="space-y-4 mb-12">
                {config.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-4">
                    <span className="font-body text-sm text-ivory/60 tracking-wider font-light">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              {/* Price & Hover Arrow */}
              <div className="flex items-end justify-between">
                <div>
                  <p className="font-body text-[10px] tracking-[0.3em] uppercase text-ivory/40 mb-3">
                    {config.label}
                  </p>
                  <p className="font-heading text-3xl md:text-4xl text-ivory font-light">
                    {config.price}
                  </p>
                </div>
                
                <motion.div
                  className="opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                  whileHover={{ x: 8 }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                >
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="text-champagne"
                  >
                    <path
                      d="M5 12H19M19 12L12 5M19 12L12 19"
                      stroke="currentColor"
                      strokeWidth="1"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </motion.div>
              </div>
            </motion.div>
          ))}

          {/* Enquire Card */}
          <motion.a
            href="#contact"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 1.4,
              delay: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="group relative flex flex-col items-start justify-center cursor-pointer pt-12"
          >
            <div className="w-16 h-16 rounded-full flex items-center justify-center mb-8 border border-champagne/30 group-hover:bg-champagne group-hover:border-champagne transition-all duration-700">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                className="text-champagne group-hover:text-charcoal transition-colors duration-700"
              >
                <path
                  d="M5 12H19M19 12L12 5M19 12L12 19"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <p className="font-heading text-3xl md:text-4xl text-ivory font-light mb-4">
              Private Request
            </p>
            <p className="font-body text-sm text-ivory/50 tracking-wider">
              Schedule a bespoke consultation
            </p>
          </motion.a>
        </div>
      </div>
    </section>
  );
}
