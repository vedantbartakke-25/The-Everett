"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface CTAButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline" | "dark";
  href?: string;
  onClick?: () => void;
  className?: string;
  icon?: ReactNode;
}

export default function CTAButton({
  children,
  variant = "primary",
  href,
  onClick,
  className = "",
  icon,
}: CTAButtonProps) {
  const baseStyles =
    "inline-flex items-center gap-3 font-body text-xs md:text-sm tracking-[0.2em] uppercase transition-all duration-500 cursor-pointer";

  const variants = {
    primary:
      "bg-champagne text-charcoal px-8 py-4 hover:bg-champagne-light hover:shadow-lg hover:shadow-champagne/20",
    secondary:
      "bg-transparent text-ivory border border-ivory/30 px-8 py-4 hover:bg-ivory/10 hover:border-ivory/60",
    outline:
      "bg-transparent text-charcoal border border-charcoal/20 px-8 py-4 hover:border-champagne hover:text-champagne",
    dark:
      "bg-charcoal text-ivory px-8 py-4 hover:bg-charcoal-light hover:shadow-lg",
  };

  const Component = href ? "a" : "button";

  return (
    <motion.div
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
      className="inline-block"
    >
      <Component
        href={href}
        onClick={onClick}
        className={`${baseStyles} ${variants[variant]} ${className}`}
      >
        {icon && <span className="text-lg">{icon}</span>}
        {children}
      </Component>
    </motion.div>
  );
}
