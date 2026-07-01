import Navbar from "../../components/layout/Navbar";
import HeroSection from "../../components/landing/HeroSection";
import ProblemSection from "../../components/landing/ProblemSection";
import SolutionSection from "../../components/landing/SolutionSection";
import HowItWorksSection from "../../components/landing/HowItWorkSection";
import FeaturesSection from "../../components/landing/FeaturesSection";
import ComparisonSection from "../../components/landing/ComparisonSection";
import JourneySection from "../../components/landing/JourneySection";
import CTASection from "../../components/landing/CTASection";
import Footer from "../../components/layout/Footer";

function LandingPage() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <HowItWorksSection />
      <FeaturesSection />
      <ComparisonSection />
      <JourneySection />
      <CTASection />
      <Footer />
    </main>
  );
}

export default LandingPage;