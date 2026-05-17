"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const configOptions = [
  "3 BHK",
  "4 BHK",
  "Large 4 BHK",
  "5 BHK",
  "Duplex",
];

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    configuration: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <section
      id="contact"
      className="relative py-28 md:py-40 lg:py-56 bg-charcoal overflow-hidden scroll-mt-24"
    >
      {/* Subtle Decorative */}
      <div className="absolute top-0 left-0 w-1/3 h-full opacity-[0.015]">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle, rgba(201,169,110,0.5) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div
        ref={ref}
        className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          {/* Left — Invitation Text */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 1.4,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="lg:col-span-5 lg:col-start-2 flex flex-col justify-center"
          >
            <p className="font-body text-[10px] md:text-xs tracking-[0.4em] uppercase text-champagne mb-6">
              By Invitation
            </p>
            <div className="w-10 h-[1px] bg-champagne/40 mb-8" />
            <h2 className="font-heading text-4xl md:text-5xl lg:text-7xl text-ivory font-light leading-[1.05] tracking-tight mb-10">
              Begin Your
              <br />
              Private{" "}
              <span className="italic text-champagne">Introduction</span>
            </h2>

            <p className="font-body text-sm md:text-base text-ivory/45 font-light leading-[2] tracking-wide mb-14 max-w-md">
              A private preview awaits. Share your details, and our concierge
              team will curate a personal introduction to The Everett.
            </p>

            <div className="space-y-10">
              <div>
                <p className="font-body text-[9px] tracking-[0.3em] uppercase text-ivory/30 mb-3">
                  Experience Centre
                </p>
                <p className="font-body text-sm text-ivory/60 font-light tracking-wide leading-relaxed">
                  The Everett Experience Centre
                  <br />
                  Lullanagar, Pune 411040
                </p>
              </div>

              <div>
                <p className="font-body text-[9px] tracking-[0.3em] uppercase text-ivory/30 mb-3">
                  Direct Line
                </p>
                <a
                  href="tel:+919999999999"
                  className="font-body text-sm text-ivory/60 font-light tracking-wide hover:text-champagne transition-colors duration-500"
                >
                  +91 99999 99999
                </a>
              </div>

              <div>
                <p className="font-body text-[9px] tracking-[0.3em] uppercase text-ivory/30 mb-3">
                  Viewing
                </p>
                <p className="font-body text-sm text-ivory/60 font-light tracking-wide">
                  Strictly by private appointment
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right — Minimal Elegant Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 1.4,
              delay: 0.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="lg:col-span-4 lg:col-start-8 space-y-0 lg:pt-16"
          >
            <div className="border-b border-ivory/[0.15] focus-within:border-champagne transition-colors duration-500">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-transparent py-5 text-ivory font-light text-base md:text-lg placeholder:text-ivory/35 placeholder:text-xs placeholder:tracking-[0.15em] placeholder:uppercase focus:outline-none font-body"
                required
              />
            </div>

            <div className="border-b border-ivory/[0.15] focus-within:border-champagne transition-colors duration-500">
              <input
                type="tel"
                name="phone"
                placeholder="Mobile Number"
                value={formData.phone}
                onChange={handleChange}
                className="w-full bg-transparent py-5 text-ivory font-light text-base md:text-lg placeholder:text-ivory/35 placeholder:text-xs placeholder:tracking-[0.15em] placeholder:uppercase focus:outline-none font-body"
                required
              />
            </div>

            <div className="border-b border-ivory/[0.15] focus-within:border-champagne transition-colors duration-500">
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-transparent py-5 text-ivory font-light text-base md:text-lg placeholder:text-ivory/35 placeholder:text-xs placeholder:tracking-[0.15em] placeholder:uppercase focus:outline-none font-body"
                required
              />
            </div>

            <div className="border-b border-ivory/[0.15] focus-within:border-champagne transition-colors duration-500">
              <select
                name="configuration"
                value={formData.configuration}
                onChange={handleChange}
                className="w-full bg-transparent py-5 text-ivory/70 font-light text-base md:text-lg focus:outline-none appearance-none cursor-pointer font-body"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='18' height='18' viewBox='0 0 24 24' fill='none' stroke='%23C9A96E' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E")`,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "right 4px center",
                }}
              >
                <option value="" className="bg-charcoal text-ivory/50">
                  Select Configuration
                </option>
                {configOptions.map((config) => (
                  <option
                    key={config}
                    value={config}
                    className="bg-charcoal text-ivory"
                  >
                    {config}
                  </option>
                ))}
              </select>
            </div>

            <div className="pt-10">
              <button
                type="submit"
                className="bg-champagne text-charcoal px-10 py-4 font-body text-[10px] md:text-xs tracking-[0.2em] uppercase transition-all duration-500 hover:bg-champagne-light hover:shadow-lg hover:shadow-champagne/20 hover:-translate-y-0.5 cursor-pointer"
              >
                Enquire Now
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
