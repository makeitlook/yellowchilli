import AnimatedDiv from "@/components/AnimatedDiv/AnimatedDiv";
import CateringSection from "@/components/CateringSection/CateringSection";
import AnimatedGradientBackground from "@/components/GradientBackground/AnimatedGradientBackground";
import HeroSection from "@/components/HeroSection/HeroSection";
import InfoCard from "@/components/InfoCard/InfoCard";
import PageLayout from "@/components/Layouts/PageLayout";
import { redirectIfProduction } from "@/utils/redirectIfProduction";

export default function Home() {
  redirectIfProduction();
  return (
    <>
      <section id="home" className="relative bg-neutral">
        <div className="relative">
          <HeroSection />
        </div>
        <div
          className="relative -mt-20 px-4"
          style={{
            zIndex: 99999,
            position: "relative",
            transform: "translateZ(0)",
          }}
        >
          <PageLayout noPadding className="pb-12">
            <InfoCard />
            <CateringSection />
          </PageLayout>
        </div>
      </section>
    </>
  );
}
