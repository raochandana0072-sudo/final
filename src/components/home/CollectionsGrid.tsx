import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import collectionBridal from "@/assets/collection-bridal.jpg";
import collectionFestive from "@/assets/collection-festive.jpg";
import collectionNew from "@/assets/collection-new.jpg";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";

const collections = [
  {
    id: 1,
    name: "New Arrivals",
    description: "Discover the latest additions to our collection",
    image: collectionNew,
    link: "/collections/new-arrivals",
    size: "large",
  },
  {
    id: 2,
    name: "Bridal Couture",
    description: "Exquisite pieces for your special day",
    image: collectionBridal,
    link: "/collections/bridal",
    size: "medium",
  },
  {
    id: 3,
    name: "Festive Collection",
    description: "Celebrate in style",
    image: collectionFestive,
    link: "/collections/festive",
    size: "medium",
  },
];

export const CollectionsGrid = () => {
  return (
    <section className="section-padding bg-gradient-to-b from-secondary/30 via-secondary/50 to-secondary/30">
      <div className="container-luxury">
        {/* Section Header */}
        <AnimatedSection className="text-center mb-12 md:mb-16">
          <motion.p 
            className="text-caption text-primary mb-3 flex items-center justify-center gap-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="w-8 h-px bg-primary" />
            Curated For You
            <span className="w-8 h-px bg-primary" />
          </motion.p>
          <motion.h2 
            className="text-headline"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Shop By Collection
          </motion.h2>
        </AnimatedSection>

        {/* Grid */}
        <StaggerContainer 
          className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6"
          staggerDelay={0.15}
        >
          {/* Large Collection */}
          <StaggerItem className="md:row-span-2">
            <Link
              to={collections[0].link}
              className="group relative aspect-[4/5] md:h-full overflow-hidden block"
            >
              <motion.div className="absolute inset-0">
                <motion.img
                  src={collections[0].image}
                  alt={collections[0].name}
                  className="absolute inset-0 w-full h-full object-cover"
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
                />
              </motion.div>
              
              {/* Premium Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
              
              {/* Animated Border */}
              <motion.div
                className="absolute inset-6 border border-background/0"
                whileHover={{ borderColor: "rgba(255,255,255,0.4)" }}
                transition={{ duration: 0.4 }}
              />
              
              {/* Content */}
              <motion.div 
                className="absolute bottom-0 left-0 right-0 p-6 md:p-10"
                initial={{ y: 20, opacity: 0.8 }}
                whileHover={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.4 }}
              >
                <p className="text-caption text-champagne mb-3">{collections[0].description}</p>
                <h3 className="text-3xl md:text-4xl font-serif text-background mb-6">{collections[0].name}</h3>
                <motion.span 
                  className="inline-flex items-center gap-2 text-xs tracking-widest uppercase text-background border-b border-background/50 pb-1"
                  whileHover={{ gap: "12px" }}
                  transition={{ duration: 0.3 }}
                >
                  Explore Now
                  <ArrowUpRight size={14} />
                </motion.span>
              </motion.div>

              {/* Corner Accent */}
              <motion.div
                className="absolute top-6 right-6 w-16 h-16 border-t border-r border-champagne/0"
                whileHover={{ borderColor: "hsl(43 55% 75% / 0.5)" }}
                transition={{ duration: 0.4 }}
              />
            </Link>
          </StaggerItem>

          {/* Medium Collections */}
          {collections.slice(1).map((collection, index) => (
            <StaggerItem key={collection.id}>
              <Link
                to={collection.link}
                className="group relative aspect-[4/3] md:aspect-[16/9] overflow-hidden block"
              >
                <motion.div className="absolute inset-0">
                  <motion.img
                    src={collection.image}
                    alt={collection.name}
                    className="absolute inset-0 w-full h-full object-cover"
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
                  />
                </motion.div>
                
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
                
                <motion.div
                  className="absolute inset-4 border border-background/0"
                  whileHover={{ borderColor: "rgba(255,255,255,0.3)" }}
                  transition={{ duration: 0.4 }}
                />
                
                <motion.div 
                  className="absolute bottom-0 left-0 right-0 p-6 md:p-8"
                  initial={{ y: 10, opacity: 0.8 }}
                  whileHover={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.4 }}
                >
                  <p className="text-caption text-champagne mb-2">{collection.description}</p>
                  <h3 className="text-2xl font-serif text-background mb-4">{collection.name}</h3>
                  <motion.span 
                    className="inline-flex items-center gap-2 text-xs tracking-widest uppercase text-background border-b border-background/50 pb-1"
                    whileHover={{ gap: "12px" }}
                    transition={{ duration: 0.3 }}
                  >
                    Explore Now
                    <ArrowUpRight size={14} />
                  </motion.span>
                </motion.div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};
