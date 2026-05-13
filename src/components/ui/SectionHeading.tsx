"use client";

import RevealAnimation from "./RevealAnimation";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  light?: boolean;
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  light = false,
}: SectionHeadingProps) {
  const textAlign = align === "center" ? "text-center" : "text-left";
  const textColor = light ? "text-ivory" : "text-charcoal";
  const subtitleColor = light ? "text-ivory/60" : "text-soft-gray";

  return (
    <div className={`${textAlign} mb-12 md:mb-16 lg:mb-24`}>
      {eyebrow && (
        <RevealAnimation delay={0}>
          <p
            className={`font-body text-xs md:text-sm tracking-[0.3em] uppercase mb-6 ${
              light ? "text-champagne" : "text-champagne"
            }`}
          >
            {eyebrow}
          </p>
        </RevealAnimation>
      )}

      <RevealAnimation delay={0.2}>
        <div
          className={`flex ${
            align === "center" ? "justify-center" : "justify-start"
          } mb-10`}
        >
          <div className="line-separator" />
        </div>
      </RevealAnimation>

      <RevealAnimation delay={0.4}>
        <h2
          className={`font-heading text-4xl md:text-5xl lg:text-7xl font-light leading-[1.05] tracking-tight ${textColor}`}
        >
          {title}
        </h2>
      </RevealAnimation>

      {subtitle && (
        <RevealAnimation delay={0.6}>
          <p
            className={`font-body text-sm md:text-base font-light mt-6 md:mt-8 max-w-2xl ${
              align === "center" ? "mx-auto" : ""
            } leading-[1.8] tracking-wider ${subtitleColor}`}
          >
            {subtitle}
          </p>
        </RevealAnimation>
      )}
    </div>
  );
}
