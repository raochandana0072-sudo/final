import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/home/HeroSection";
import { CollectionsGrid } from "@/components/home/CollectionsGrid";
import { FeaturedProducts } from "@/components/home/FeaturedProducts";
import { BrandStory } from "@/components/home/BrandStory";
import { CategoryShowcase } from "@/components/home/CategoryShowcase";
import { Testimonials } from "@/components/home/Testimonials";
import { InstagramFeed } from "@/components/home/InstagramFeed";
import { Features } from "@/components/home/Features";

const Index = () => {
  return (
    <motion.div 
      className="min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Header />
      
      <main>
        {/* Hero Section */}
        <HeroSection />
        
        {/* Features Bar */}
        <Features />
        
        {/* Collections Grid */}
        <CollectionsGrid />
        
        {/* New Arrivals */}
        <FeaturedProducts />
        
        {/* Brand Story */}
        <BrandStory />
        
        {/* Shop by Category */}
        <CategoryShowcase />
        
        {/* Testimonials */}
        <Testimonials />

        {/* Overview Section */}
        <section className="pt-10 pb-2 md:pt-12 md:pb-4">
          <div className="container-luxury text-center">
            <p className="text-caption text-primary mb-2">Welcome to Chandana's Boutique</p>
            <h2 className="text-headline mb-3">Your destination for exclusive fashion</h2>
            <p className="text-body-large text-muted-foreground mb-6">“Style that speaks volumes.”</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href="/about" className="btn-outline-luxury"><span>About Us</span></a>
              <a href="/services" className="btn-outline-luxury"><span>Services/Products</span></a>
              <a href="/collections/new-arrivals" className="btn-luxury"><span>Shop Collections</span></a>
              <a href="/contact" className="btn-outline-luxury"><span>Contact</span></a>
            </div>
          </div>
        </section>
        
        {/* Instagram Feed */}
        <InstagramFeed />
      </main>
      
      <Footer />
    </motion.div>
  );
};

export default Index;
