"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import DeveloperLegacy from "@/components/DeveloperLegacy";
import AboutEverett from "@/components/AboutEverett";
import Configurations from "@/components/Configurations";
import Amenities from "@/components/Amenities";
import Location from "@/components/Location";
import Gallery from "@/components/Gallery";
import EOISection from "@/components/EOISection";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <DeveloperLegacy />
      <AboutEverett />
      <Configurations />
      <Amenities />
      <Location />
      <Gallery />
      <EOISection />
      <Contact />
      <Footer />
      <FloatingCTA />
    </main>
  );
}
