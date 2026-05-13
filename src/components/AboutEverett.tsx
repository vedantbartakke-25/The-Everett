"use client";

import RevealAnimation from "./ui/RevealAnimation";
import SectionHeading from "./ui/SectionHeading";
import AnimatedImage from "./ui/AnimatedImage";

const highlights = [
  { value: "3.63", unit: "Acres", label: "Private Estate" },
  { value: "29", unit: "Storeys", label: "Iconic Towers" },
  { value: "6", unit: "Levels", label: "Podium Amenities" },
  { value: "3–5", unit: "Bed", label: "Trophy Residences" },
];

export default function AboutEverett() {
  return (
    <section id="about" className="relative py-20 md:py-32 lg:py-48 bg-ivory">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">
        <SectionHeading
          eyebrow="The Vision"
          title="The Everett"
          subtitle="An address that transcends the ordinary. Set across 3.63 acres, The Everett rises as two majestic 29-storey towers — a testament to architectural restraint and uncompromising luxury."
        />

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 lg:gap-16 mb-24 md:mb-32 lg:mb-48 mt-16 md:mt-24">
          {highlights.map((stat, i) => (
            <RevealAnimation key={stat.label} delay={i * 0.15}>
              <div className="text-center">
                <div className="font-heading text-4xl md:text-5xl lg:text-7xl text-charcoal font-light mb-2">
                  {stat.value}
                </div>
                <div className="font-body text-xs tracking-[0.3em] uppercase text-champagne mb-3">
                  {stat.unit}
                </div>
                <div className="font-body text-sm text-soft-gray tracking-widest uppercase">
                  {stat.label}
                </div>
              </div>
            </RevealAnimation>
          ))}
        </div>

        {/* Editorial Layout 1 — Image Left, Text Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-24 items-center mb-24 md:mb-32 lg:mb-48">
          <div className="lg:col-span-5 lg:col-start-2">
            <AnimatedImage
              src="/interior.png"
              alt="The Everett luxury living room with double height ceiling"
              width={800}
              height={1000}
              className="relative w-full aspect-[3/4] md:aspect-[4/5] lg:aspect-[3/4]"
            />
          </div>

          <div className="lg:col-span-5">
            <RevealAnimation direction="right" delay={0.2}>
              <p className="font-body text-[10px] md:text-xs tracking-[0.4em] uppercase text-champagne mb-6 md:mb-8">
                Architectural Vision
              </p>
            </RevealAnimation>
            <RevealAnimation direction="right" delay={0.4}>
              <h3 className="font-heading text-3xl md:text-4xl lg:text-6xl text-charcoal font-light mb-6 md:mb-10 leading-[1.1] tracking-tight">
                Where Architecture
                <br />
                <span className="italic text-champagne">Meets Art</span>
              </h3>
            </RevealAnimation>
            <RevealAnimation direction="right" delay={0.6}>
              <p className="font-body text-sm md:text-lg text-soft-gray font-light leading-[1.8] tracking-wide">
                Every residence at The Everett is conceived as a canvas for
                elevated living. Double-height spaces flood interiors with natural light,
                while panoramic decks frame the city's most coveted views.
                <br /><br />
                This is residential design at its most refined. Absolute exclusivity,
                realized in stone, glass, and light.
              </p>
            </RevealAnimation>
          </div>
        </div>

        {/* Editorial Layout 2 — Text Left, Image Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-24 items-center">
          <div className="order-2 lg:order-1 lg:col-span-5 lg:col-start-2">
            <RevealAnimation direction="left" delay={0.2}>
              <p className="font-body text-[10px] md:text-xs tracking-[0.4em] uppercase text-champagne mb-6 md:mb-8">
                Living Spaces
              </p>
            </RevealAnimation>
            <RevealAnimation direction="left" delay={0.4}>
              <h3 className="font-heading text-3xl md:text-4xl lg:text-6xl text-charcoal font-light mb-6 md:mb-10 leading-[1.1] tracking-tight">
                Crafted for
                <br />
                <span className="italic text-champagne">Distinction</span>
              </h3>
            </RevealAnimation>
            <RevealAnimation direction="left" delay={0.6}>
              <p className="font-body text-sm md:text-lg text-soft-gray font-light leading-[1.8] tracking-wide">
                Masterworks of spatial design. Vastu-compliant layouts seamlessly
                integrate contemporary aesthetics with timeless principles.
                <br /><br />
                Walk-in wardrobes, multiple master suites, and expansive volumes 
                define a lifestyle of unparalleled comfort and scale.
              </p>
            </RevealAnimation>
          </div>

          <div className="order-1 lg:order-2 lg:col-span-5">
            <AnimatedImage
              src="/bedroom.png"
              alt="The Everett luxury master bedroom with city views"
              width={800}
              height={1000}
              className="relative w-full aspect-[3/4] md:aspect-[4/5] lg:aspect-[3/4]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
