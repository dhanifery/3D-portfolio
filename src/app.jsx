import LogoSection from "./sections/LogoSection.jsx";
import NavBar from "./components/NavBar.jsx";
import FeatureSection from "./sections/FeatureSection.jsx";
import Hero from "./sections/Hero.jsx";
import ShowcaseSection from "./sections/ShowcaseSection.jsx";
import ExperienceSection from "./sections/ExperienceSection.jsx";
import TechStackSection from "./sections/TechStackSection.jsx";
import TestimonialsSection from "./sections/TestimonialsSection.jsx";
import ContactSection from "./sections/ContactSection.jsx";
import Footer from "./sections/Footer.jsx";

const App = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <ShowcaseSection />
      <LogoSection />
      <FeatureSection />
      <ExperienceSection />
      <TechStackSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </>
  );
};

export default App;
