import SiteHeader from "@/components/SiteHeader";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import GallerySection from "@/components/GallerySection";
import VisitSection from "@/components/VisitSection";
import ContactSection from "@/components/ContactSection";
import SiteFooter from "@/components/SiteFooter";

const Index = () => (
  <>
    <SiteHeader />
    <main>
      <HeroSection />
      <FeaturesSection />
      <GallerySection />
      <VisitSection />
      <ContactSection />
    </main>
    <SiteFooter />
  </>
);

export default Index;
