"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import SectionHeading from "./ui/SectionHeading";
import CTAButton from "./ui/CTAButton";

const configurations = [
  "3 Bedroom — ~1,800 sq.ft",
  "4 Bedroom — ~2,250 sq.ft",
  "Large 4 Bedroom — ~2,450 sq.ft",
  "5 Bedroom — ~3,300 sq.ft",
  "5 Bed Duplex — ~2,800 sq.ft",
];

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    configuration: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  return (
    <section
      id="contact"
      className="relative py-20 md:py-32 lg:py-48 bg-charcoal overflow-hidden"
    >
      {/* Decorative */}
      <div className="absolute top-0 left-0 w-1/2 h-full opacity-[0.02]">
        <div className="w-full h-full" style={{
          backgroundImage: `radial-gradient(circle, rgba(201,169,110,0.4) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div
        ref={ref}
        className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          
          {/* Contact Info / Concierge Details */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 1.4,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="lg:col-span-5 lg:col-start-2 flex flex-col justify-center"
          >
            <p className="font-body text-xs tracking-[0.4em] uppercase text-champagne mb-6 md:mb-8">
              Bespoke Concierge
            </p>
            <h3 className="font-heading text-4xl md:text-5xl lg:text-6xl text-ivory font-light mb-10 md:mb-12 leading-[1.05] tracking-tight">
              We Await Your
              <br />
              <span className="italic text-champagne">Correspondence</span>
            </h3>

            <div className="space-y-10">
              <div>
                <p className="font-body text-[10px] tracking-[0.3em] uppercase text-ivory/40 mb-3">
                  The Gallery
                </p>
                <p className="font-body text-sm md:text-base text-ivory/70 font-light tracking-wide leading-relaxed">
                  The Everett Experience Centre
                  <br />
                  Lullanagar, Pune 411040
                </p>
              </div>

              <div>
                <p className="font-body text-[10px] tracking-[0.3em] uppercase text-ivory/40 mb-3">
                  Direct Line
                </p>
                <a
                  href="tel:+919999999999"
                  className="font-body text-sm md:text-base text-ivory/70 font-light tracking-wide hover:text-champagne transition-colors duration-500"
                >
                  +91 99999 99999
                </a>
              </div>

              <div>
                <p className="font-body text-[10px] tracking-[0.3em] uppercase text-ivory/40 mb-3">
                  Digital
                </p>
                <a
                  href="mailto:enquire@theeverett.in"
                  className="font-body text-sm md:text-base text-ivory/70 font-light tracking-wide hover:text-champagne transition-colors duration-500"
                >
                  enquire@theeverett.in
                </a>
              </div>

              <div>
                <p className="font-body text-[10px] tracking-[0.3em] uppercase text-ivory/40 mb-3">
                  Viewing
                </p>
                <p className="font-body text-sm md:text-base text-ivory/70 font-light tracking-wide">
                  Strictly by private appointment
                </p>
              </div>
            </div>
          </motion.div>

          {/* Minimal Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.4, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 space-y-12 lg:pt-12"
          >
            <div className="relative border-b border-ivory/20 focus-within:border-champagne transition-colors duration-700">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-transparent py-4 text-ivory font-light text-lg md:text-xl placeholder:text-ivory/30 focus:outline-none"
                required
              />
            </div>

            <div className="relative border-b border-ivory/20 focus-within:border-champagne transition-colors duration-700">
              <input
                type="tel"
                name="phone"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full bg-transparent py-4 text-ivory font-light text-lg md:text-xl placeholder:text-ivory/30 focus:outline-none"
                required
              />
            </div>

            <div className="relative border-b border-ivory/20 focus-within:border-champagne transition-colors duration-700">
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-transparent py-4 text-ivory font-light text-lg md:text-xl placeholder:text-ivory/30 focus:outline-none"
                required
              />
            </div>

            <div className="relative border-b border-ivory/20 focus-within:border-champagne transition-colors duration-700">
              <select
                name="configuration"
                value={formData.configuration}
                onChange={handleChange}
                className="w-full bg-transparent py-4 text-ivory/80 font-light text-lg md:text-xl focus:outline-none appearance-none cursor-pointer"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%23C9A96E' stroke-width='1' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E")`,
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'right 0 center',
                }}
              >
                <option value="" className="bg-charcoal text-ivory/40">
                  Interest
                </option>
                {configurations.map((config) => (
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

            <div className="pt-8">
              <button
                type="submit"
                className="group relative inline-flex items-center gap-6 text-champagne hover:text-ivory transition-colors duration-700"
              >
                <span className="font-body text-xs tracking-[0.3em] uppercase">Submit Inquiry</span>
                <span className="w-12 h-[1px] bg-champagne group-hover:bg-ivory group-hover:w-16 transition-all duration-700 ease-[0.22,1,0.36,1]" />
              </button>
            </div>
          </motion.form>

        </div>
      </div>
    </section>
  );
}
