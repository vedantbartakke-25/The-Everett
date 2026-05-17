"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Philosophy from "@/components/Philosophy";
import ArrivalExperience from "@/components/ArrivalExperience";
import DoubleHeightLiving from "@/components/DoubleHeightLiving";
import Residences from "@/components/Residences";
import CuratedLifestyle from "@/components/CuratedLifestyle";
import SanctuaryWithin from "@/components/SanctuaryWithin";
import PrivateSanctuary from "@/components/PrivateSanctuary";
import LocationSection from "@/components/LocationSection";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import EntryModal from "@/components/EntryModal";

export default function Home() {
  return (
    <main className="relative">
      <EntryModal />
      <Navbar />
      <Hero />
      <Philosophy />
      <ArrivalExperience />
      <DoubleHeightLiving />
      <Residences />
      <CuratedLifestyle />
      <SanctuaryWithin />
      <PrivateSanctuary />
      <LocationSection />
      <Contact />
      <Footer />
      <FloatingCTA />
    </main>
  );
}
