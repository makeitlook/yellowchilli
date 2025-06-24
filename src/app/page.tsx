import AnimatedDiv from "@/components/AnimatedDiv/AnimatedDiv";
import AnimatedGradientBackground from "@/components/GradientBackground/AnimatedGradientBackground";
import RestaurantInfo from "@/components/InfoCard/InfoCard";
import PageLayout from "@/components/Layouts/PageLayout";
import HeroSection from "@/components/HeroSection/HeroSection";

export default function Home() {
  return (
    <>
      <section id="home">
        <HeroSection />
        <PageLayout>
          <RestaurantInfo />
        </PageLayout>
      </section>
    </>
  );
}
