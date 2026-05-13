"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import SectionHeading from "./ui/SectionHeading";

const galleryImages = [
  { src: "/hero.png", alt: "The Everett Towers Exterior", label: "Elevation" },
  { src: "/interior.png", alt: "The Everett Living Room", label: "Living" },
  { src: "/lobby.png", alt: "The Everett Grand Lobby", label: "Lobby" },
  { src: "/bedroom.png", alt: "The Everett Master Bedroom", label: "Bedroom" },
  { src: "/rooftop.png", alt: "The Everett Rooftop", label: "Rooftop" },
  { src: "/spa.png", alt: "The Everett Spa", label: "Spa" },
  { src: "/tower-night.png", alt: "The Everett Night View", label: "Night" },
  { src: "/gym.png", alt: "The Everett Fitness Centre", label: "Fitness" },
];

export default function Gallery() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="gallery" className="relative py-20 md:py-32 lg:py-48 bg-charcoal overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 mb-12 md:mb-20 lg:mb-32">
        <SectionHeading
          eyebrow="The Gallery"
          title="A Visual Journey"
          subtitle="Explore the spaces, textures, and views that define The Everett experience."
          light
        />
      </div>

      {/* Horizontal Scroll Gallery */}
      <div ref={ref} className="gallery-scroll px-6 md:px-12 lg:px-16 snap-x snap-mandatory">
        {galleryImages.map((image, index) => (
          <motion.div
            key={image.label}
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{
              duration: 1.4,
              delay: index * 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="gallery-scroll-item group relative w-[90vw] md:w-[60vw] lg:w-[45vw] aspect-[4/5] md:aspect-[16/10] overflow-hidden cursor-pointer flex-shrink-0 snap-center mx-4"
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover transition-transform duration-[2s] ease-[0.22,1,0.36,1] group-hover:scale-105"
              sizes="(max-width: 768px) 90vw, (max-width: 1200px) 60vw, 45vw"
            />
            <div className="absolute inset-0 bg-charcoal/20 group-hover:bg-transparent transition-colors duration-1000" />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />

            {/* Label */}
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-1000 ease-[0.22,1,0.36,1]">
              <p className="font-body text-[10px] md:text-xs tracking-[0.4em] uppercase text-champagne mb-2">
                {String(index + 1).padStart(2, "0")}
              </p>
              <p className="font-heading text-2xl md:text-3xl lg:text-4xl text-ivory font-light">
                {image.label}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
