import FeatureCourses from "@/components/FeatureCourses";
import HeroSection from "@/components/HeroSection";
import ScrollingCarts from "@/components/AllCarts";
import WhyChooseUs from "@/components/WhyChooseUs";
import UpcomingWebinar from "@/components/UpcomingWebinar";
import Instructors from "@/components/Instructors";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="
    min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02] text-neutral-200">
      <HeroSection />
      <FeatureCourses />
      <WhyChooseUs />
      <ScrollingCarts />
      <UpcomingWebinar />
      <Instructors/>
      <Footer/>
    </main>
  );
}
