"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import SectionHeading from "./ui/SectionHeading";
import RevealAnimation from "./ui/RevealAnimation";

const amenities = [
  {
    name: "Rooftop Terrace",
    description:
      "An elevated sanctuary above the city, offering uninterrupted panoramic views and curated seating for intimate gatherings.",
    image: "/rooftop.png",
  },
  {
    name: "Wellness Spa",
    description:
      "A serene retreat featuring thermal experiences, aromatherapy suites, and meditation spaces designed for deep restoration.",
    image: "/spa.png",
  },
];

export default function Amenities() {
  const ref = useRef(null);
  
  return (
    <section id="amenities" className="relative py-20 md:py-32 lg:py-48 bg-ivory overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 mb-16 md:mb-24 lg:mb-32">
        <SectionHeading
          eyebrow="The Lifestyle"
          title="Curated Experiences"
          subtitle="Every space at The Everett is designed not merely as a facility, but as an experience — thoughtfully curated to elevate the everyday."
        />
      </div>

      {/* Immersive Amenity Blocks */}
      <div ref={ref} className="space-y-20 md:space-y-32 lg:space-y-48">
        {amenities.map((amenity, index) => {
          return (
            <div key={amenity.name} className="relative w-full h-[60vh] md:h-[80vh] flex items-center justify-center overflow-hidden">
              {/* Image Background */}
              <motion.div 
                initial={{ scale: 1.1, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true, margin: "-20%" }}
                transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0"
              >
                <Image
                  src={amenity.image}
                  alt={amenity.name}
                  fill
                  className="object-cover"
                  sizes="100vw"
                />
                <div className="absolute inset-0 bg-charcoal/40" />
              </motion.div>

              {/* Floating Typography Overlay */}
              <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
                <RevealAnimation delay={0.2} direction="up">
                  <p className="font-body text-xs tracking-[0.4em] uppercase text-champagne mb-6">
                    0{index + 1}
                  </p>
                </RevealAnimation>
                <RevealAnimation delay={0.4} direction="up">
                  <h3 className="font-heading text-4xl md:text-6xl lg:text-8xl text-ivory font-light mb-6 md:mb-8 leading-[1.05] tracking-tight">
                    {amenity.name}
                  </h3>
                </RevealAnimation>
                <RevealAnimation delay={0.6} direction="up">
                  <div className="flex justify-center mb-8">
                    <div className="w-16 h-[1px] bg-champagne/60" />
                  </div>
                </RevealAnimation>
                <RevealAnimation delay={0.8} direction="up">
                  <p className="font-body text-sm md:text-lg text-ivory/80 font-light leading-[1.8] tracking-wide">
                    {amenity.description}
                  </p>
                </RevealAnimation>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
