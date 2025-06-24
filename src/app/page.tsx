import AnimatedDiv from "@/components/AnimatedDiv/AnimatedDiv";
import AnimatedGradientBackground from "@/components/GradientBackground/AnimatedGradientBackground";
import RestaurantInfo from "@/components/InfoCard/InfoCard";
import PageLayout from "@/components/Layouts/PageLayout";
import HeroSection from "@/components/HeroSection/HeroSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      {/* <AnimatedGradientBackground> */}
      <PageLayout title="Home">
        <section id="home">
          <AnimatedDiv>
            We`&apos;`d love to hear from you! Drop us a message and let`&apos;`s
            create something beautiful together.
          </AnimatedDiv>
        </section>
        <RestaurantInfo />
      </PageLayout>
      {/* </AnimatedGradientBackground> */}
    </>
  );
}
