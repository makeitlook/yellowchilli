import AnimatedDiv from "@/components/AnimatedDiv/AnimatedDiv";
import CateringSection from "@/components/CateringSection/CateringSection";
import AnimatedGradientBackground from "@/components/GradientBackground/AnimatedGradientBackground";
import HeroSection from "@/components/HeroSection/HeroSection";
import InfoCard from "@/components/InfoCard/InfoCard";
import PageLayout from "@/components/Layouts/PageLayout";
import MenuSection from "@/components/MenuSection/MenuSection";
import OurStory from "@/components/OurStory/OurStory";

export default function Home() {
  return (
    <>
      <section id="home" className="relative bg-neutral">
        <div className="relative">
          <HeroSection />
        </div>
        <div
          className="relative -mt-20 px-4"
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
        <div id="catering">
          <CateringSection />
        </div>
        <div id="menu">
          <MenuSection />
        </div>
      </section>
    </>
  );
}
