import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import heroImage1 from "@/assets/hero-1.jpg";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export const BrandStory = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const decorY = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section ref={containerRef} className="section-padding overflow-hidden relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
          backgroundSize: "32px 32px",
        }} />
      </div>
      
      <div className="container-luxury relative">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Image with Parallax */}
          <AnimatedSection direction="left" className="relative">
            <motion.div 
              className="aspect-[4/5] overflow-hidden relative"
              style={{ y: imageY }}
            >
              <motion.img
                src={heroImage1}
                alt="Chandana's Boutique - Craftsmanship"
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
              />
              
              {/* Floating Badge */}
              <motion.div
                className="absolute -right-4 -bottom-4 md:-right-8 md:-bottom-8 bg-primary text-primary-foreground px-6 py-4 shadow-elegant"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <p className="text-3xl md:text-4xl font-serif">25+</p>
                <p className="text-xs tracking-widest uppercase">Years of Excellence</p>
              </motion.div>
            </motion.div>
            
            {/* Decorative Elements */}
            <motion.div 
              className="absolute -bottom-8 -left-8 w-40 h-40 border border-primary/20 -z-10"
              style={{ y: decorY }}
            />
            <motion.div
              className="absolute top-8 -right-4 text-primary/20"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles size={32} />
            </motion.div>
          </AnimatedSection>

          {/* Content */}
          <AnimatedSection direction="right" className="max-w-lg">
            <motion.p 
              className="text-caption text-primary mb-4 flex items-center gap-3"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <span className="w-8 h-px bg-primary" />
              Our Heritage
            </motion.p>
            
            <motion.h2 
              className="text-3xl md:text-4xl lg:text-5xl font-serif mb-8 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              Where Tradition Meets{" "}
              <span className="text-primary italic">Contemporary Elegance</span>
            </motion.h2>
            
            <div className="space-y-5 text-muted-foreground mb-10">
              <motion.p
                className="text-lg leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                At Chandana's Boutique, we celebrate the rich tapestry of Indian craftsmanship. 
                Each piece in our collection is a testament to the skill of our master artisans 
                who have preserved age-old techniques across generations.
              </motion.p>
              <motion.p
                className="text-lg leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                From the intricate zari work of Banaras to the delicate chikankari of Lucknow, 
                we bring you the finest handcrafted textiles, reimagined for the modern woman.
              </motion.p>
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <Link 
                to="/about" 
                className="group inline-flex items-center gap-3"
              >
                <span className="relative overflow-hidden bg-primary text-primary-foreground px-8 py-4 font-medium tracking-widest uppercase text-xs transition-all duration-500">
                  <motion.span
                    className="absolute inset-0 bg-accent"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  />
                  <span className="relative z-10">Our Story</span>
                </span>
                <motion.span
                  className="w-12 h-12 border border-foreground/20 flex items-center justify-center"
                  whileHover={{ x: 5, borderColor: "hsl(var(--primary))" }}
                  transition={{ duration: 0.3 }}
                >
                  <ArrowRight size={18} />
                </motion.span>
              </Link>
            </motion.div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};
