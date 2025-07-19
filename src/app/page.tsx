import AnimatedDiv from "@/components/AnimatedDiv/AnimatedDiv";
import CateringSection from "@/components/CateringSection/CateringSection";
import FindUsSection from "@/components/FindUs/FindUs";
import AnimatedGradientBackground from "@/components/GradientBackground/AnimatedGradientBackground";
import HeroSection from "@/components/HeroSection/HeroSection";
import InfoCard from "@/components/InfoCard/InfoCard";
import PageLayout from "@/components/Layouts/PageLayout";
import MenuSection from "@/components/MenuSection/MenuSection";
import OurStory from "@/components/OurStory/OurStory";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Discover the rich flavours of Indian and Afghan cuisine at Yellow Chilli in Southall.",
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <>
      <section id="home" className="relative bg-neutral scroll-mt-24">
        <div className="relative">
          <HeroSection />
        </div>
        <div
          id="about"
          className="relative -mt-20 px-4 scroll-mt-12 sm:scroll-mt-48"
          style={{
            zIndex: 30,
            position: "relative",
            transform: "translateZ(0)",
          }}
        >
          <PageLayout noPadding className="pb-12">
            <InfoCard />
          </PageLayout>

          <OurStory />
        </div>
        <div id="catering" className="scroll-mt-4 sm:scroll-mt-24">
          <CateringSection />
        </div>
        <div id="menu" className="scroll-mt-4 sm:scroll-mt-20">
          <MenuSection />
        </div>
        <div id="find-us" className="scroll-mt-4 sm:scroll-mt-18">
          <FindUsSection />
        </div>
      </section>
    </>
  );
}
