import AnimatedDiv from "@/components/AnimatedDiv/AnimatedDiv";
import AnimatedGradientBackground from "@/components/GradientBackground/AnimatedGradientBackground";
import HeroSection from "@/components/HeroSection/HeroSection";
import InfoCard from "@/components/InfoCard/InfoCard";
import PageLayout from "@/components/Layouts/PageLayout";

export default function Home() {
  return (
    <>
      <section id="home">
        <HeroSection />
        <PageLayout noPadding className="pb-12">
          <div className="-mt-20 px-4">
            <InfoCard />
          </div>
        </PageLayout>
      </section>
    </>
  );
}
