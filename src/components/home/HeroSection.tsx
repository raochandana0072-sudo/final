import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import heroImage1 from "@/assets/hero-1.jpg";
import heroImage2 from "@/assets/hero-2.jpg";

const slides = [
  {
    id: 1,
    image: heroImage1,
    subtitle: "New Collection 2025",
    title: "Timeless Elegance",
    description: "Discover our exquisite collection of handcrafted sarees and ethnic wear",
    cta: "Explore Collection",
    link: "/collections/new-arrivals",
  },
  {
    id: 2,
    image: heroImage2,
    subtitle: "Bridal Season",
    title: "Bridal Couture",
    description: "Begin your forever in the splendor of our bridal collection",
    cta: "View Bridal Wear",
    link: "/collections/bridal",
  },
];

export const HeroSection = () => {
  const [[currentSlide, direction], setSlide] = useState([0, 0]);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      setSlide([currentSlide === slides.length - 1 ? 0 : currentSlide + 1, 1]);
    }, 6000);
    return () => clearInterval(timer);
  }, [currentSlide, isHovered]);

  const paginate = (newDirection: number) => {
    const newIndex = currentSlide + newDirection;
    if (newIndex < 0) {
      setSlide([slides.length - 1, newDirection]);
    } else if (newIndex >= slides.length) {
      setSlide([0, newDirection]);
    } else {
      setSlide([newIndex, newDirection]);
    }
  };

  return (
    <section 
      className="relative h-screen w-full overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <AnimatePresence initial={false} custom={direction} mode="wait">
        <motion.div
          key={currentSlide}
          custom={direction}
          initial={{ x: direction > 0 ? 1000 : -1000, opacity: 0, scale: 1.1 }}
          animate={{ 
            x: 0, 
            opacity: 1, 
            scale: 1,
            transition: { duration: 0.8, ease: "easeOut" }
          }}
          exit={{ 
            x: direction < 0 ? 1000 : -1000, 
            opacity: 0, 
            scale: 0.95,
            transition: { duration: 0.8, ease: "easeIn" }
          }}
          className="absolute inset-0"
        >
          {/* Background Image with Ken Burns Effect */}
          <motion.div
            className="absolute inset-0"
            initial={{ scale: 1.2 }}
            animate={{ scale: 1 }}
            transition={{ duration: 8, ease: "linear" }}
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
            />
          </motion.div>
          
          {/* Premium Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/70 via-foreground/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 via-transparent to-transparent" />

          {/* Animated Grain Texture */}
          <div className="absolute inset-0 opacity-[0.015] pointer-events-none bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjMwMCIgaGVpZ2h0PSIzMDAiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iMC4wNSIvPjwvc3ZnPg==')]" />

          {/* Content */}
          <div className="relative h-full container-luxury flex items-center">
            <div className="max-w-2xl">
              <motion.p
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
                className="text-caption text-champagne mb-4 flex items-center gap-3"
              >
                <motion.span 
                  className="w-8 h-px bg-champagne"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                />
                {slides[currentSlide].subtitle}
              </motion.p>
              
              <motion.h2
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45, duration: 0.8, ease: "easeOut" }}
                className="text-5xl md:text-6xl lg:text-7xl font-serif text-background mb-6 leading-[1.1] tracking-tight"
              >
                {slides[currentSlide].title.split(" ").map((word, i) => (
                  <span key={i} className="inline-block mr-4">
                    {word}
                  </span>
                ))}
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
                className="text-lg md:text-xl text-background/80 mb-10 font-light leading-relaxed max-w-lg"
              >
                {slides[currentSlide].description}
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.75, duration: 0.8, ease: "easeOut" }}
              >
                <Link
                  to={slides[currentSlide].link}
                  className="group inline-flex items-center gap-4 border border-background/40 text-background px-8 py-4 font-medium tracking-widest uppercase text-xs transition-all duration-500 hover:bg-background hover:text-foreground"
                >
                  <span>{slides[currentSlide].cta}</span>
                  <motion.span
                    className="inline-block"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  >
                    →
                  </motion.span>
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows with Magnetic Effect */}
      <motion.button
        onClick={() => paginate(-1)}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-14 h-14 bg-background/10 backdrop-blur-sm flex items-center justify-center text-background border border-background/20 hover:bg-background hover:text-foreground transition-all duration-300"
        aria-label="Previous slide"
        whileHover={{ scale: 1.1, x: -3 }}
        whileTap={{ scale: 0.95 }}
      >
        <ChevronLeft size={24} />
      </motion.button>
      <motion.button
        onClick={() => paginate(1)}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-14 h-14 bg-background/10 backdrop-blur-sm flex items-center justify-center text-background border border-background/20 hover:bg-background hover:text-foreground transition-all duration-300"
        aria-label="Next slide"
        whileHover={{ scale: 1.1, x: 3 }}
        whileTap={{ scale: 0.95 }}
      >
        <ChevronRight size={24} />
      </motion.button>

      {/* Premium Slide Indicators */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-4">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setSlide([index, index > currentSlide ? 1 : -1])}
            className="relative h-1 overflow-hidden"
            aria-label={`Go to slide ${index + 1}`}
          >
            <div className={cn(
              "w-16 h-full bg-background/30 transition-all duration-300",
              index === currentSlide && "bg-background/60"
            )} />
            {index === currentSlide && (
              <motion.div
                className="absolute inset-0 bg-champagne origin-left"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 6, ease: "linear" }}
              />
            )}
          </button>
        ))}
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-10 right-8 hidden md:flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <span className="text-xs text-background/60 tracking-widest uppercase rotate-90 origin-center translate-x-4">
          Scroll
        </span>
        <motion.div
          className="w-px h-16 bg-background/30 overflow-hidden"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ delay: 1.8, duration: 0.6 }}
        >
          <motion.div
            className="w-full h-1/2 bg-champagne"
            animate={{ y: ["0%", "200%"] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};
