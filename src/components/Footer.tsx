"use client";

import RevealAnimation from "./ui/RevealAnimation";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative bg-charcoal border-t border-ivory/[0.04]">
      {/* Main Footer */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
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
                  href="tel:+919999999999"
                  className="block font-body text-xs text-ivory/35 hover:text-champagne transition-colors duration-400 tracking-wide"
                >
                  +91 99999 99999
                </a>
                <a
                  href="mailto:enquire@theeverett.in"
                  className="block font-body text-xs text-ivory/35 hover:text-champagne transition-colors duration-400 tracking-wide"
                >
                  enquire@theeverett.in
                </a>
              </div>
            </div>
          </RevealAnimation>

          {/* Social */}
          <RevealAnimation delay={0.3}>
            <div>
              <p className="font-body text-[10px] tracking-[0.3em] uppercase text-champagne mb-6">
                Follow
              </p>
              <div className="flex gap-3">
                {[
                  {
                    label: "Instagram",
                    icon: (
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      >
                        <rect x="2" y="2" width="20" height="20" rx="5" />
                        <circle cx="12" cy="12" r="5" />
                        <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
                      </svg>
                    ),
                  },
                  {
                    label: "Facebook",
                    icon: (
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                      </svg>
                    ),
                  },
                  {
                    label: "LinkedIn",
                    icon: (
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 6a2 2 0 100-4 2 2 0 000 4z" />
                      </svg>
                    ),
                  },
                  {
                    label: "YouTube",
                    icon: (
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 2A29 29 0 001 11.75a29 29 0 00.46 5.33A2.78 2.78 0 003.4 19.1c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 001.94-2 29 29 0 00.46-5.25 29 29 0 00-.46-5.43z" />
                        <path d="M9.75 15.02l5.75-3.27-5.75-3.27v6.54z" fill="#1A1A1A" />
                      </svg>
                    ),
                  },
                ].map((social) => (
                  <a
                    key={social.label}
                    href="#"
                    aria-label={social.label}
                    className="w-9 h-9 border border-ivory/[0.06] flex items-center justify-center text-ivory/30 hover:text-champagne hover:border-champagne/25 transition-all duration-500"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </RevealAnimation>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-ivory/[0.04]">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 py-6">
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
