import react from "react";
import Topbar from "./Topbar";
import HeroSection from "./HeroSection";
import ServicesCard from "./OurServices";
import Section3 from "./Section3";
import Section4 from "./Section4";
import Section5 from "./Section5";
import Section6 from "./Section6";
import Section7 from "./Section7";

import Footer from "./Footer";

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col w-full overflow-x-hidden">
      <Topbar />
      <main className="flex-grow">
        <HeroSection />
        <ServicesCard />
        <Section3 />
        <Section4 />
        <Section5 />
        <Section6 />
        <Section7 />
      </main>
      <Footer />
    </div>
  );
}