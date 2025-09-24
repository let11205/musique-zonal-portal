import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import CoursesSection from "@/components/CoursesSection";
import ScheduleSection from "@/components/ScheduleSection";
import DifferentialsSection from "@/components/DifferentialsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <CoursesSection />
        <ScheduleSection />
        <DifferentialsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
