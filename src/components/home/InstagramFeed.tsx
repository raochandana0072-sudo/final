import { Instagram, Heart } from "lucide-react";
import { motion } from "framer-motion";
import productSaree1 from "@/assets/product-saree-1.jpg";
import productKurta1 from "@/assets/product-kurta-1.jpg";
import productLehenga1 from "@/assets/product-lehenga-1.jpg";
import productDress1 from "@/assets/product-dress-1.jpg";
import collectionBridal from "@/assets/collection-bridal.jpg";
import collectionFestive from "@/assets/collection-festive.jpg";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";

const instagramPosts = [
  { id: 1, image: productSaree1, likes: 2340 },
  { id: 2, image: collectionBridal, likes: 5670 },
  { id: 3, image: productKurta1, likes: 1890 },
  { id: 4, image: collectionFestive, likes: 4230 },
  { id: 5, image: productLehenga1, likes: 7890 },
  { id: 6, image: productDress1, likes: 3120 },
];

export const InstagramFeed = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-champagne/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
      
      <div className="container-luxury relative">
        {/* Section Header */}
        <AnimatedSection className="text-center mb-12">
          <motion.div
            className="inline-flex items-center gap-3 text-primary mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <Instagram size={24} />
            <span className="text-caption">@chandanasboutique</span>
          </motion.div>
          <motion.h2 
            className="text-headline mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Follow Our Journey
          </motion.h2>
          <motion.p 
            className="text-body-large text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Get inspired by our latest looks and behind-the-scenes moments
          </motion.p>
        </AnimatedSection>

        {/* Instagram Grid */}
        <StaggerContainer 
          className="grid grid-cols-3 md:grid-cols-6 gap-2 md:gap-4"
          staggerDelay={0.08}
        >
          {instagramPosts.map((post, index) => (
            <StaggerItem key={post.id}>
              <motion.a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative aspect-square overflow-hidden block"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <motion.img
                  src={post.image}
                  alt="Instagram post"
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.15 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                />
                
                {/* Overlay */}
                <motion.div 
                  className="absolute inset-0 bg-foreground/0 flex flex-col items-center justify-center gap-3"
                  whileHover={{ backgroundColor: "rgba(0,0,0,0.6)" }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Instagram Icon */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileHover={{ opacity: 1, scale: 1 }}
                    className="text-background"
                  >
                    <Instagram size={28} />
                  </motion.div>
                  
                  {/* Likes Count */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 text-background text-sm"
                  >
                    <Heart size={14} fill="currentColor" />
                    <span>{post.likes.toLocaleString()}</span>
                  </motion.div>
                </motion.div>
                
                {/* Corner Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </motion.a>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Follow CTA */}
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <motion.a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 border border-foreground/20 px-8 py-4 text-xs tracking-widest uppercase font-medium hover:bg-foreground hover:text-background transition-all duration-300"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Instagram size={16} />
            <span>Follow Us on Instagram</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};
