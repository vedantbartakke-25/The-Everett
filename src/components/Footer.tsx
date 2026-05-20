"use client";

import RevealAnimation from "./ui/RevealAnimation";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative bg-charcoal border-t border-ivory/[0.04]">
      {/* Main Footer */}
      <div className="max-w-[1440px] mx-auto px-8 md:px-12 lg:px-20 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
          {/* Brand */}
          <RevealAnimation delay={0}>
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="relative w-14 h-20 flex-shrink-0">
                  <Image
                    src="/logo.png"
                    alt="The Everett Logo"
                    fill
                    className="object-contain object-left"
                  />
                </div>
                <h4 className="font-heading text-2xl md:text-3xl text-ivory font-light">
                  The <span className="text-champagne">Everett</span>
                </h4>
              </div>
              <p className="font-body text-xs text-ivory/35 font-light leading-relaxed tracking-wide">
                Ultra-premium residences in Lullanagar, Pune. Rising ~370 feet
                across 31 levels — the defining tower of this micro-market.
              </p>
            </div>
          </RevealAnimation>

          {/* Quick Links */}
          <RevealAnimation delay={0.1}>
            <div>
              <p className="font-body text-[10px] tracking-[0.3em] uppercase text-champagne mb-6">
                Explore
              </p>
              <div className="space-y-3">
                {[
                  { label: "Philosophy", href: "#philosophy" },
                  { label: "Residences", href: "#configurations" },
                  { label: "Lifestyle", href: "#amenities" },
                  { label: "Location", href: "#location" },
                ].map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="block font-body text-xs text-ivory/35 hover:text-champagne transition-colors duration-400 tracking-wide"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </RevealAnimation>

          {/* Contact */}
          <RevealAnimation delay={0.2}>
            <div>
              <p className="font-body text-[10px] tracking-[0.3em] uppercase text-champagne mb-6">
                Contact
              </p>
              <div className="space-y-3">
                <p className="font-body text-xs text-ivory/35 font-light tracking-wide leading-relaxed">
                  The Everett Experience Centre
                  <br />
                  Lullanagar, Pune 411040
                </p>
                <a
                  href="tel:+918411828897"
                  className="block font-body text-xs text-ivory/35 hover:text-champagne transition-colors duration-400 tracking-wide"
                >
                  +91 84118 28897
                </a>
                <a
                  href="mailto:BuilderLobby1@gmail.com"
                  className="block font-body text-xs text-ivory/35 hover:text-champagne transition-colors duration-400 tracking-wide"
                >
                  BuilderLobby1@gmail.com
                </a>
              </div>
            </div>
          </RevealAnimation>


        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-ivory/[0.04]">
        <div className="max-w-[1440px] mx-auto px-8 md:px-12 lg:px-20 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-body text-[10px] text-ivory/25 tracking-wider">
              © 2026 The Everett. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a
                href="#"
                className="font-body text-[10px] text-ivory/25 hover:text-ivory/40 transition-colors duration-300 tracking-wider"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="font-body text-[10px] text-ivory/25 hover:text-ivory/40 transition-colors duration-300 tracking-wider"
              >
                Terms
              </a>
            </div>
          </div>

          {/* RERA & Legal */}
          <div className="mt-6 pt-4 border-t border-ivory/[0.03]">
            <p className="font-body text-[9px] text-ivory/15 tracking-wider leading-relaxed text-center">
              RERA Registration No: PM1261012600059 | This Project is being developed by Serianee Corrp LLP.
              All images are artist&apos;s impressions and are for representational purposes only.
              Prices mentioned are indicative and subject to change without notice.
              The developer reserves the right to make additions, deletions, alterations,
              or amendments in the plans, specifications, and features.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
