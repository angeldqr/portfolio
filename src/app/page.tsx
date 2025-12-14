import HeroSection from "../components/sections/HeroSection";
import AboutSection from "../components/sections/AboutSection";
import ProjectsSection from "../components/sections/ProjectsSection";
import CoursesSection from "../components/sections/CoursesSection";
import ContactSection from "../components/sections/ContactSection";
import Footer from "../components/footer/Footer";

export default function Home() {
  return (
    <div className="bg-background">
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <CoursesSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
