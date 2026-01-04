import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { ProductCard } from "@/components/ui/ProductCard";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";
import productSaree1 from "@/assets/product-saree-1.jpg";
import productKurta1 from "@/assets/product-kurta-1.jpg";
import productLehenga1 from "@/assets/product-lehenga-1.jpg";
import productDress1 from "@/assets/product-dress-1.jpg";

const products = [
  {
    id: "1",
    name: "Teal Silk Saree with Gold Zari Border",
    price: 18500,
    originalPrice: 24000,
    image: productSaree1,
    category: "Sarees",
    badge: "sale" as const,
  },
  {
    id: "2",
    name: "Blush Pink Embroidered Kurta Set",
    price: 8900,
    image: productKurta1,
    category: "Kurtas & Sets",
    badge: "new" as const,
  },
  {
    id: "3",
    name: "Ivory Bridal Lehenga with Zari Work",
    price: 125000,
    image: productLehenga1,
    category: "Bridal",
    badge: "bestseller" as const,
  },
  {
    id: "4",
    name: "Olive Green Anarkali with Gold Embroidery",
    price: 15600,
    image: productDress1,
    category: "Dresses",
    badge: "new" as const,
  },
];

export const FeaturedProducts = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-champagne/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      
      <div className="container-luxury relative">
        {/* Section Header */}
        <AnimatedSection className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <motion.p 
              className="text-caption text-primary mb-3 flex items-center gap-3"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="w-8 h-px bg-primary" />
              New Arrivals
            </motion.p>
            <motion.h2 
              className="text-headline"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              Just Landed
            </motion.h2>
          </div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Link
              to="/collections/new-arrivals"
              className="group inline-flex items-center gap-3 border border-foreground/20 px-6 py-3 text-xs tracking-widest uppercase font-medium hover:bg-foreground hover:text-background transition-all duration-300"
            >
              <span>View All</span>
              <motion.span
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <ArrowRight size={14} />
              </motion.span>
            </Link>
          </motion.div>
        </AnimatedSection>

        {/* Products Grid */}
        <StaggerContainer 
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8"
          staggerDelay={0.1}
        >
          {products.map((product, index) => (
            <StaggerItem key={product.id}>
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <ProductCard {...product} />
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};
