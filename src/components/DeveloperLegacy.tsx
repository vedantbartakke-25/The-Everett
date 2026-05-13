"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import SectionHeading from "./ui/SectionHeading";

const legacyProjects = [
  {
    name: "The Ark",
    location: "Pune",
    image: "/lobby.png",
    tagline: "Redefining skyline living",
  },
  {
    name: "Trump Towers",
    location: "Premium Address",
    image: "/tower-night.png",
    tagline: "Global luxury standard",
  },
  {
    name: "Tribeca Highstreet",
    location: "Retail & Living",
    image: "/hero.png",
    tagline: "Where commerce meets culture",
  },
  {
    name: "YOO One",
    location: "Design Excellence",
    image: "/interior.png",
    tagline: "International design philosophy",
  },
];

export default function DeveloperLegacy() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="legacy"
      className="relative py-20 md:py-32 lg:py-48 luxury-gradient overflow-hidden"
    >
      <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">
        <SectionHeading
          eyebrow="The Legacy"
          title="Iconic Foundations"
          subtitle="A heritage of crafting the nation's most prestigious and recognizable architectural landmarks."
          light
        />

        {/* Projects Grid — Asymmetrical Editorial Layout */}
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 mt-16 md:mt-24 lg:mt-32">
          {legacyProjects.map((project, index) => {
            const isLarge = index === 0 || index === 3;
            const spanClass = isLarge ? "lg:col-span-8" : "lg:col-span-4 lg:mt-24";
            const aspectClass = isLarge ? "aspect-[4/3] md:aspect-[16/9]" : "aspect-[3/4]";

            return (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 1.4,
                  delay: index * 0.15,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={`group relative overflow-hidden cursor-pointer ${spanClass}`}
              >
                {/* Image */}
                <div className={`relative w-full overflow-hidden ${aspectClass}`}>
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    className="object-cover transition-transform duration-[2s] ease-[0.22,1,0.36,1] group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 70vw"
                  />
                  <div className="absolute inset-0 bg-charcoal/20 group-hover:bg-transparent transition-colors duration-1000" />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/20 to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-1000" />
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-1000 ease-[0.22,1,0.36,1]">
                  <p className="font-body text-[10px] md:text-xs tracking-[0.4em] uppercase text-champagne mb-4">
                    {project.location}
                  </p>
                  <h3 className="font-heading text-3xl md:text-5xl lg:text-6xl text-ivory font-light mb-2 tracking-tight">
                    {project.name}
                  </h3>
                  <div className="overflow-hidden">
                    <p className="font-body text-sm text-ivory/60 font-light tracking-wide transform translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700 ease-[0.22,1,0.36,1] delay-100">
                      {project.tagline}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
