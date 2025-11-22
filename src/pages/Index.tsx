import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Products } from "@/components/Products";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { ImageCarousel } from '@/components/ImageCarousel';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main id="inicio">
        <Hero />
        <ImageCarousel/>
        <Products />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
