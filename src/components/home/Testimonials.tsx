import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    location: "Mumbai",
    rating: 5,
    text: "The quality of craftsmanship is exceptional. My wedding lehenga from Chandana's Boutique was everything I dreamed of and more. The intricate embroidery and attention to detail made my special day even more memorable.",
    product: "Bridal Lehenga",
  },
  {
    id: 2,
    name: "Ananya Reddy",
    location: "Bangalore",
    rating: 5,
    text: "I've been shopping here for years and every piece feels like a treasure. The silk sarees are absolutely stunning, and the customer service is impeccable. They truly understand Indian craftsmanship.",
    product: "Banarasi Silk Saree",
  },
  {
    id: 3,
    name: "Meera Patel",
    location: "Delhi",
    rating: 5,
    text: "From the moment I walked in, I knew this was special. The collection is curated with such care, and each piece tells a story. My festive kurta set received countless compliments!",
    product: "Festive Kurta Set",
  },
];

export const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const nextTestimonial = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="section-padding bg-primary text-primary-foreground overflow-hidden relative">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10">
          <Quote size={120} className="text-champagne" />
        </div>
        <div className="absolute bottom-10 right-10 rotate-180">
          <Quote size={120} className="text-champagne" />
        </div>
      </div>
      
      {/* Animated Background Pattern */}
      <motion.div 
        className="absolute inset-0 opacity-5"
        animate={{ 
          backgroundPosition: ["0% 0%", "100% 100%"],
        }}
        transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
          backgroundSize: "32px 32px",
        }}
      />
      
      <div className="container-luxury relative">
        <div className="max-w-4xl mx-auto text-center">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <p className="text-caption text-champagne mb-3 flex items-center justify-center gap-3">
              <span className="w-8 h-px bg-champagne" />
              Testimonials
              <span className="w-8 h-px bg-champagne" />
            </p>
            <h2 className="text-headline">What Our Customers Say</h2>
          </motion.div>

          {/* Testimonial Slider */}
          <div className="relative h-[320px] md:h-[280px]">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                initial={{ opacity: 0, x: direction * 100, scale: 0.95 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -direction * 100, scale: 0.95 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="absolute inset-0"
              >
                {/* Rating */}
                <motion.div 
                  className="flex items-center justify-center gap-1 mb-8"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, rotate: -180 }}
                      animate={{ opacity: 1, rotate: 0 }}
                      transition={{ delay: 0.3 + i * 0.1 }}
                    >
                      <Star size={20} fill="currentColor" className="text-champagne" />
                    </motion.div>
                  ))}
                </motion.div>

                {/* Quote */}
                <motion.blockquote 
                  className="text-xl md:text-2xl font-serif font-light leading-relaxed mb-10 italic"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  "{testimonials[currentIndex].text}"
                </motion.blockquote>

                {/* Author */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <p className="font-medium text-lg mb-1">{testimonials[currentIndex].name}</p>
                  <p className="text-sm text-primary-foreground/70">
                    {testimonials[currentIndex].location} • {testimonials[currentIndex].product}
                  </p>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <motion.div 
            className="flex items-center justify-center gap-6 mt-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <motion.button
              onClick={prevTestimonial}
              className="w-12 h-12 border border-primary-foreground/30 flex items-center justify-center hover:bg-primary-foreground hover:text-primary transition-all duration-300"
              aria-label="Previous testimonial"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronLeft size={20} />
            </motion.button>
            
            <div className="flex items-center gap-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > currentIndex ? 1 : -1);
                    setCurrentIndex(index);
                  }}
                  className="relative h-2 overflow-hidden"
                  aria-label={`Go to testimonial ${index + 1}`}
                >
                  <div className={cn(
                    "w-8 h-full rounded-full transition-all duration-300",
                    index === currentIndex
                      ? "bg-champagne"
                      : "bg-primary-foreground/30 hover:bg-primary-foreground/50"
                  )} />
                </button>
              ))}
            </div>
            
            <motion.button
              onClick={nextTestimonial}
              className="w-12 h-12 border border-primary-foreground/30 flex items-center justify-center hover:bg-primary-foreground hover:text-primary transition-all duration-300"
              aria-label="Next testimonial"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronRight size={20} />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
