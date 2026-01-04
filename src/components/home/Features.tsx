import { motion } from "framer-motion";
import { Truck, RotateCcw, Shield, Gift, Sparkles } from "lucide-react";

const features = [
  {
    icon: Truck,
    title: "Complimentary Shipping",
    description: "On orders above ₹10,000",
  },
  {
    icon: RotateCcw,
    title: "Easy Returns",
    description: "15-day return policy",
  },
  {
    icon: Shield,
    title: "Secure Payments",
    description: "100% secure checkout",
  },
  {
    icon: Gift,
    title: "Gift Wrapping",
    description: "Available on all orders",
  },
];

export const Features = () => {
  return (
    <section className="border-y border-border bg-gradient-to-r from-background via-secondary/30 to-background">
      <motion.div 
        className="container-luxury"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 },
          },
        }}
      >
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-border">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.6, ease: "easeOut" },
                },
              }}
              className="group flex flex-col items-center text-center py-10 md:py-14 px-4 relative overflow-hidden cursor-default"
              whileHover={{ backgroundColor: "hsl(var(--secondary) / 0.5)" }}
              transition={{ duration: 0.3 }}
            >
              {/* Animated Background Glow */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent opacity-0"
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
              
              {/* Icon with Animation */}
              <motion.div
                className="relative mb-5"
                whileHover={{ scale: 1.15, rotate: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <feature.icon
                  size={32}
                  className="text-primary relative z-10"
                  strokeWidth={1.5}
                />
                <motion.div
                  className="absolute inset-0 bg-primary/20 rounded-full blur-xl scale-150 opacity-0"
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
              
              <h4 className="font-serif text-sm md:text-base mb-2 group-hover:text-primary transition-colors duration-300">
                {feature.title}
              </h4>
              <p className="text-xs text-muted-foreground">
                {feature.description}
              </p>

              {/* Decorative Sparkle */}
              <motion.div
                className="absolute top-4 right-4 opacity-0 text-primary/50"
                initial={{ scale: 0, rotate: 0 }}
                whileHover={{ opacity: 1, scale: 1, rotate: 180 }}
                transition={{ duration: 0.4 }}
              >
                <Sparkles size={12} />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
