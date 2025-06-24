import PageLayout from "@/components/Layouts/PageLayout";
import HeroSection from "@/components/HeroSection/HeroSection";

export default function Home() {
  return (
    <PageLayout title="Home" noPadding fullHeight>
      <section id="home" className="w-full">
        <HeroSection />
      </section>
    </PageLayout>
  );
}
