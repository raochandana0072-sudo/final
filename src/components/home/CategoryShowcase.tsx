import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import productSaree1 from "@/assets/product-saree-1.jpg";
import productKurta1 from "@/assets/product-kurta-1.jpg";
import productLehenga1 from "@/assets/product-lehenga-1.jpg";
import productDress1 from "@/assets/product-dress-1.jpg";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";

const categories = [
  {
    name: "Sarees",
    image: productSaree1,
    link: "/collections/sarees",
    count: "120+ Styles",
  },
  {
    name: "Kurtas & Sets",
    image: productKurta1,
    link: "/collections/kurtas",
    count: "85+ Styles",
  },
  {
    name: "Lehengas",
    image: productLehenga1,
    link: "/collections/lehengas",
    count: "45+ Styles",
  },
  {
    name: "Dresses",
    image: productDress1,
    link: "/collections/dresses",
    count: "60+ Styles",
  },
];

export const CategoryShowcase = () => {
  return (
    <section className="section-padding bg-gradient-to-b from-muted/30 via-muted/60 to-muted/30 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }} />
      </div>
      
      <div className="container-luxury relative">
        {/* Section Header */}
        <AnimatedSection className="text-center mb-12 md:mb-16">
          <motion.p 
            className="text-caption text-primary mb-3 flex items-center justify-center gap-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="w-8 h-px bg-primary" />
            Categories
            <span className="w-8 h-px bg-primary" />
          </motion.p>
          <motion.h2 
            className="text-headline"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Shop By Style
          </motion.h2>
        </AnimatedSection>

        {/* Categories Grid */}
        <StaggerContainer 
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
          staggerDelay={0.1}
        >
          {categories.map((category, index) => (
            <StaggerItem key={category.name}>
              <Link
                to={category.link}
                className="group relative aspect-[3/4] overflow-hidden block"
              >
                {/* Image */}
                <motion.div className="absolute inset-0">
                  <motion.img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                  />
                </motion.div>
                
                {/* Gradient Overlay */}
                <motion.div 
                  className="absolute inset-0 bg-foreground/30"
                  whileHover={{ backgroundColor: "rgba(0,0,0,0.5)" }}
                  transition={{ duration: 0.3 }}
                />
                
                {/* Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
                  <motion.h3 
                    className="font-serif text-xl md:text-2xl text-background mb-2"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    {category.name}
                  </motion.h3>
                  <motion.p 
                    className="text-xs tracking-widest uppercase text-background/80 mb-4"
                    initial={{ opacity: 0.8 }}
                    whileHover={{ opacity: 1 }}
                  >
                    {category.count}
                  </motion.p>
                  
                  {/* Shop Now Button */}
                  <motion.span
                    className="inline-flex items-center gap-2 text-xs tracking-widest uppercase text-background border border-background/50 px-4 py-2 opacity-0"
                    initial={{ opacity: 0, y: 10 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    Shop Now
                    <ArrowUpRight size={12} />
                  </motion.span>
                </div>

                {/* Animated Border */}
                <motion.div 
                  className="absolute inset-4 border border-background/0 pointer-events-none"
                  whileHover={{ borderColor: "rgba(255,255,255,0.4)", inset: "16px" }}
                  transition={{ duration: 0.4 }}
                />
                
                {/* Corner Decorations */}
                <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-background/0 group-hover:border-background/50 transition-all duration-300" />
                <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-background/0 group-hover:border-background/50 transition-all duration-300" />
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};
