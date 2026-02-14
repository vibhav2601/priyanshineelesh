import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import OurStorySection from "@/components/home/OurStorySection";

const Index = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <OurStorySection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
