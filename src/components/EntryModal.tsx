"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const configOptions = [
  "3 BHK",
  "4 BHK",
  "Large 4 BHK",
  "5 BHK",
  "Duplex",
];

export default function EntryModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    configuration: "",
    consent: false,
  });

  useEffect(() => {
    // Check if modal has been shown before
    const hasSeenModal = sessionStorage.getItem("everett-modal-shown");
    if (!hasSeenModal) {
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    sessionStorage.setItem("everett-modal-shown", "true");
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    setFormData({
      ...formData,
      [name]:
        type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Modal form submitted:", formData);
    handleClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="modal-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          onClick={handleClose}
        >
          <motion.div
            className="modal-content"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button className="modal-close" onClick={handleClose} aria-label="Close">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>

            {/* Header */}
            <div className="text-center mb-8">
              <p className="font-body text-[9px] tracking-[0.4em] uppercase text-champagne mb-4">
                The Everett
              </p>
              <div className="flex justify-center mb-5">
                <div className="w-8 h-[1px] bg-champagne/40" />
              </div>
              <h3 className="font-heading text-2xl md:text-3xl text-ivory font-light tracking-tight leading-[1.15]">
                Enquire
                <br />
                <span className="italic text-champagne">Now</span>
              </h3>
              <p className="font-body text-[11px] text-ivory/50 font-light mt-3 tracking-wide">
                Share your details and we&apos;ll get in touch
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-5">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                className="modal-input"
                required
              />

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                className="modal-input"
                required
              />

              <input
                type="tel"
                name="mobile"
                placeholder="Mobile Number"
                value={formData.mobile}
                onChange={handleChange}
                className="modal-input"
                required
              />

              <select
                name="configuration"
                value={formData.configuration}
                onChange={handleChange}
                className="modal-select"
                required
              >
                <option value="">Select Configuration</option>
                {configOptions.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>

              {/* Consent Checkbox */}
              <div className="pt-3">
                <label className="modal-checkbox">
                  <input
                    type="checkbox"
                    name="consent"
                    checked={formData.consent}
                    onChange={handleChange}
                  />
                  <span className="font-body text-[10px] text-ivory/40 leading-relaxed tracking-wide">
                    I authorize The Everett team to contact me regarding project
                    updates.
                  </span>
                </label>
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button type="submit" className="modal-submit">
                  Submit Enquiry
                </button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
