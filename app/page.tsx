import Hero from "@/components/sections/Hero";
import Seika from "@/components/sections/Seika";
import About from "@/components/sections/About";
import SkaUtility from "@/components/sections/SkaUtility";
import Tokenomics from "@/components/sections/Tokenomics";
import Roadmap from "@/components/sections/Roadmap";
import PartnersMarquee from "@/components/sections/PartnersMarquee";
import ProofOfDemand from "@/components/sections/ProofOfDemand";
import CoreTeam from "@/components/sections/CoreTeam";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Hero />
      <Seika />
      <About />
      <SkaUtility />
      <Tokenomics />
      <Roadmap />
      <PartnersMarquee />
      <ProofOfDemand />
      <CoreTeam />
      {/* Breathing room so the team's floor reflections are fully visible before
          the footer starts. Kept here rather than in Footer.tsx, which is a
          byte-for-byte copy of the old site's footer. */}
      <div aria-hidden className="h-[90px] md:h-[150px] bg-black" />
      <Footer />
    </div>
  );
}
