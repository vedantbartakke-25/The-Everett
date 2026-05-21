"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
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
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const response = await fetch("/api/enquire", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, source: "Main Contact Section" }),
      });

      if (!response.ok) {
        throw new Error("Failed to submit enquiry.");
      }

      setIsSuccess(true);
      setFormData({
        name: "",
        phone: "",
        email: "",
        configuration: "",
      });

      // Reset success state after some time
      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
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
        className="relative z-10 max-w-[1440px] mx-auto px-8 md:px-12 lg:px-20"
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
                  href="tel:+918411828897"
                  className="font-body text-sm text-ivory/60 font-light tracking-wide hover:text-champagne transition-colors duration-500"
                >
                  +91 84118 28897
                </a>
              </div>

              <div>
                <p className="font-body text-[9px] tracking-[0.3em] uppercase text-ivory/30 mb-3">
                  Email
                </p>
                <a
                  href="mailto:builderlobby1@gmail.com"
                  className="font-body text-sm text-ivory/60 font-light tracking-wide hover:text-champagne transition-colors duration-500"
                >
                  builderlobby1@gmail.com
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
          <div className="lg:col-span-4 lg:col-start-8 lg:pt-16 relative min-h-[400px]">
            <AnimatePresence mode="wait">
              {isSuccess ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-0 flex flex-col items-center justify-center text-center h-full"
                >
                  <div className="w-20 h-20 rounded-full border border-champagne/30 mx-auto flex items-center justify-center mb-8">
                    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#C9A96E" strokeWidth="1.5">
                      <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <h3 className="font-heading text-3xl md:text-4xl text-ivory font-light tracking-tight mb-4">
                    Thank <span className="italic text-champagne">You</span>
                  </h3>
                  <p className="font-body text-sm text-ivory/50 font-light tracking-wide leading-relaxed max-w-sm mx-auto">
                    Your details have been received. Our concierge team will connect with you shortly.
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  initial={{ opacity: 0, y: 40 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{
                    duration: 1.4,
                    delay: 0.2,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="space-y-0"
                >
                  {error && (
                    <div className="mb-6 border-l-2 border-red-400/50 pl-4 py-2">
                      <p className="font-body text-xs text-red-400/80 tracking-widest uppercase">{error}</p>
                    </div>
                  )}

                  <div className="border-b border-ivory/[0.15] focus-within:border-champagne transition-colors duration-500">
                    <input
                      type="text"
                      name="name"
                      placeholder="Full Name"
                      value={formData.name}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      className="w-full bg-transparent py-5 text-ivory font-light text-base md:text-lg placeholder:text-ivory/35 placeholder:text-xs placeholder:tracking-[0.15em] placeholder:uppercase focus:outline-none font-body disabled:opacity-50"
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
                      disabled={isSubmitting}
                      pattern="[0-9+ ]+"
                      title="Please enter a valid phone number"
                      className="w-full bg-transparent py-5 text-ivory font-light text-base md:text-lg placeholder:text-ivory/35 placeholder:text-xs placeholder:tracking-[0.15em] placeholder:uppercase focus:outline-none font-body disabled:opacity-50"
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
                      disabled={isSubmitting}
                      className="w-full bg-transparent py-5 text-ivory font-light text-base md:text-lg placeholder:text-ivory/35 placeholder:text-xs placeholder:tracking-[0.15em] placeholder:uppercase focus:outline-none font-body disabled:opacity-50"
                      required
                    />
                  </div>

                  <div className="border-b border-ivory/[0.15] focus-within:border-champagne transition-colors duration-500">
                    <select
                      name="configuration"
                      value={formData.configuration}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      className="w-full bg-transparent py-5 text-ivory/70 font-light text-base md:text-lg focus:outline-none appearance-none cursor-pointer font-body disabled:opacity-50"
                      style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='18' height='18' viewBox='0 0 24 24' fill='none' stroke='%23C9A96E' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E")`,
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "right 4px center",
                      }}
                      required
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
                      disabled={isSubmitting}
                      className="bg-champagne text-charcoal px-10 py-4 font-body text-[10px] md:text-xs tracking-[0.2em] uppercase transition-all duration-500 hover:bg-champagne-light hover:shadow-lg hover:shadow-champagne/20 hover:-translate-y-0.5 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-none min-w-[160px] flex justify-center items-center h-14"
                    >
                      {isSubmitting ? (
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                          className="w-5 h-5 border-2 border-charcoal/20 border-t-charcoal rounded-full"
                        />
                      ) : (
                        "Enquire Now"
                      )}
                    </button>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
