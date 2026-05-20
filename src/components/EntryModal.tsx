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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

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
    // Reset success state for future openings if any
    setTimeout(() => setIsSuccess(false), 500);
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const response = await fetch("/api/enquire", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        // Map mobile to phone for the API
        body: JSON.stringify({ ...formData, phone: formData.mobile, source: "Popup Modal" }),
      });

      if (!response.ok) {
        throw new Error("Failed to submit enquiry.");
      }

      setIsSuccess(true);
      setFormData({
        name: "",
        email: "",
        mobile: "",
        configuration: "",
        consent: false,
      });

      // Auto close modal after a few seconds
      setTimeout(() => {
        handleClose();
      }, 3500);
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
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
            <button className="modal-close" onClick={handleClose} aria-label="Close" disabled={isSubmitting}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>

            <AnimatePresence mode="wait">
              {isSuccess ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  className="text-center py-12"
                >
                  <div className="w-16 h-16 rounded-full border border-champagne/30 mx-auto flex items-center justify-center mb-6">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C9A96E" strokeWidth="1.5">
                      <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <h3 className="font-heading text-2xl md:text-3xl text-ivory font-light tracking-tight mb-4">
                    Thank <span className="italic text-champagne">You</span>
                  </h3>
                  <p className="font-body text-xs text-ivory/50 font-light tracking-wide leading-relaxed max-w-[280px] mx-auto">
                    Our team will connect with you shortly for a private introduction.
                  </p>
                </motion.div>
              ) : (
                <motion.div
                  key="form"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.5 }}
                >
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

                  {/* Error Message */}
                  {error && (
                    <div className="mb-4 text-center">
                      <p className="font-body text-[10px] text-red-400/80 uppercase tracking-widest">{error}</p>
                    </div>
                  )}

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
                      disabled={isSubmitting}
                    />

                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={handleChange}
                      className="modal-input"
                      required
                      disabled={isSubmitting}
                    />

                    <input
                      type="tel"
                      name="mobile"
                      placeholder="Mobile Number"
                      value={formData.mobile}
                      onChange={handleChange}
                      className="modal-input"
                      pattern="[0-9+ ]+"
                      title="Please enter a valid phone number"
                      required
                      disabled={isSubmitting}
                    />

                    <select
                      name="configuration"
                      value={formData.configuration}
                      onChange={handleChange}
                      className="modal-select"
                      required
                      disabled={isSubmitting}
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
                          disabled={isSubmitting}
                        />
                        <span className="font-body text-[10px] text-ivory/40 leading-relaxed tracking-wide">
                          I authorize The Everett team to contact me regarding project
                          updates.
                        </span>
                      </label>
                    </div>

                    {/* Submit Button */}
                    <div className="pt-4">
                      <button 
                        type="submit" 
                        className="modal-submit flex justify-center items-center h-12"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                            className="w-4 h-4 border-2 border-charcoal/20 border-t-charcoal rounded-full"
                          />
                        ) : (
                          "Submit Enquiry"
                        )}
                      </button>
                    </div>
                  </form>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
