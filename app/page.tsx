import Hero from "@/components/Hero";
import Divider from "@/components/Divider";
import VideoSection from "@/components/VideoSection";
import Transformation from "@/components/Transformation";
import Testimonials from "@/components/Testimonials";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import Expectations from "@/components/Expectations";
import PreQualification from "@/components/PreQualification";
import CTAWhatsApp from "@/components/CTAWhatsApp";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Divider />
      <VideoSection />
      <Divider />
      <Transformation />
      <Divider />
      <Testimonials />
      <TestimonialCarousel />
      <Divider />
      <Expectations />
      <Divider />
      <PreQualification />
      <Divider />
      <CTAWhatsApp />
      <Footer />
    </main>
  );
}
