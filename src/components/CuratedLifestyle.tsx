"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import RevealAnimation from "./ui/RevealAnimation";

const experiences = [
  {
    image: "/terrace.jpeg",
    title: "Elevated Horizons",
    description:
      "An open-air rooftop sanctuary above the city, offering uninterrupted panoramic views and curated spaces for intimate evenings.",
    label: "Rooftop Terrace",
  },
  {
    image: "/spa.png",
    title: "Quiet Restoration",
    description:
      "Thermal experiences, meditation gardens, and wellness suites designed for deep, unhurried restoration.",
    label: "Wellness & Spa",
  },
  {
    image: "/kids-play.jpg",
    title: "Joyful Spaces",
    description:
      "Thoughtfully designed play areas where children explore, create, and grow — safe, vibrant, and full of wonder.",
    label: "Kids Play Area",
  },
  {
    image: "/gym.png",
    title: "Refined Vitality",
    description:
      "State-of-the-art fitness spaces, sports courts, and movement studios — where discipline meets design.",
    label: "Fitness & Leisure",
  },
];

export default function CuratedLifestyle() {
  return (
    <section
      id="amenities"
      className="relative py-32 md:py-44 lg:py-56 bg-ivory overflow-hidden scroll-mt-24"
    >
      {/* Section Header */}
      <div className="max-w-[1440px] mx-auto px-8 md:px-12 lg:px-20 pb-16 md:pb-24">
        <RevealAnimation delay={0}>
          <p className="font-body text-[10px] md:text-[20px]  tracking-[0.4em] uppercase text-champagne mb-6">
            The Lifestyle
          </p>
        </RevealAnimation>
        <RevealAnimation delay={0.2}>
          <div className="w-10 h-[1px] bg-champagne/50 mb-8" />
        </RevealAnimation>
        <RevealAnimation delay={0.4}>
          <h2 className="font-heading text-4xl md:text-6xl lg:text-8xl text-charcoal font-light leading-[1.05] tracking-tight max-w-4xl">
            Curated
            <br />
            <span className="italic text-champagne">Experiences</span>
          </h2>
        </RevealAnimation>
        <RevealAnimation delay={0.6}>
          <p className="font-body text-sm md:text-base text-soft-gray font-light leading-[2] tracking-wide mt-8 max-w-xl">
            Every space at The Everett is designed not merely as a facility,
            but as an experience — thoughtfully curated to elevate the everyday.
          </p>
        </RevealAnimation>
      </div>

      {/* Immersive Experience Blocks */}
      <div className="space-y-24 md:space-y-40 max-w-[1440px] mx-auto px-8 md:px-12 lg:px-20">
        {experiences.map((exp, index) => {
          const isEven = index % 2 === 0;
          return (
            <div
              key={exp.title}
              className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center"
            >
              {/* Image */}
              <div
                className={`lg:col-span-7 ${
                  isEven ? "order-1" : "order-1 lg:order-2 lg:col-start-6"
                }`}
              >
                <motion.div
                  initial={{ scale: 1.04, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
                  className="relative w-full aspect-[4/3] md:aspect-[16/10] overflow-hidden"
                >
                  <Image
                    src={exp.image}
                    alt={exp.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 60vw"
                  />
                </motion.div>
              </div>

              {/* Text */}
              <div
                className={`lg:col-span-4 ${
                  isEven
                    ? "lg:col-start-9 order-2"
                    : "lg:col-start-1 order-2 lg:order-1"
                }`}
              >
                <RevealAnimation
                  direction={isEven ? "right" : "left"}
                  delay={0.1}
                >
                  <p className="font-body text-[10px] md:text-xs tracking-[0.4em] uppercase text-champagne mb-6">
                    {exp.label}
                  </p>
                </RevealAnimation>

                <RevealAnimation
                  direction={isEven ? "right" : "left"}
                  delay={0.2}
                >
                  <div className="w-10 h-[1px] bg-champagne/50 mb-8" />
                </RevealAnimation>

                <RevealAnimation
                  direction={isEven ? "right" : "left"}
                  delay={0.4}
                >
                  <h3 className="font-heading text-3xl md:text-4xl lg:text-6xl text-charcoal font-light leading-[1.1] tracking-tight mb-8">
                    {exp.title}
                  </h3>
                </RevealAnimation>

                <RevealAnimation
                  direction={isEven ? "right" : "left"}
                  delay={0.6}
                >
                  <p className="font-body text-sm md:text-base text-soft-gray font-light leading-[2] tracking-wide">
                    {exp.description}
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
