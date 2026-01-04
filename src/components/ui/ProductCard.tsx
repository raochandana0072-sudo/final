import { Link } from "react-router-dom";
import { Heart, Eye, ShoppingBag } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useWishlist } from "@/hooks/useWishlist";
import { useCart } from "@/hooks/useCart";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  hoverImage?: string;
  category: string;
  badge?: "new" | "sale" | "bestseller";
  className?: string;
}

export const ProductCard = ({
  id,
  name,
  price,
  originalPrice,
  image,
  hoverImage,
  category,
  badge,
  className,
}: ProductCardProps) => {
  const discount = originalPrice
    ? Math.round(((originalPrice - price) / originalPrice) * 100)
    : 0;
  const { toggle, has } = useWishlist();
  const inWishlist = has(id);
  const { add } = useCart();

  return (
    <motion.div 
      className={cn("group relative bg-card overflow-hidden", className)}
      whileHover={{ boxShadow: "0 8px 40px -8px hsl(30 10% 15% / 0.15)" }}
      transition={{ duration: 0.3 }}
    >
      {/* Image Container */}
      <div className="aspect-[3/4] relative overflow-hidden bg-secondary">
        <Link to={`/product/${id}`}>
          <motion.img
            src={image}
            alt={name}
            className="absolute inset-0 w-full h-full object-cover"
            whileHover={{ scale: 1.08 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          />
          {hoverImage && (
            <motion.img
              src={hoverImage}
              alt={name}
              className="absolute inset-0 w-full h-full object-cover opacity-0"
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            />
          )}
        </Link>

        {/* Badge */}
        {badge && (
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className={cn(
              "absolute top-4 left-4 text-[10px] font-medium tracking-widest uppercase px-3 py-1.5",
              badge === "new" && "bg-primary text-primary-foreground",
              badge === "sale" && "bg-destructive text-destructive-foreground",
              badge === "bestseller" && "bg-accent text-accent-foreground"
            )}
          >
            {badge}
          </motion.span>
        )}

        {/* Discount Badge */}
        {discount > 0 && !badge && (
          <motion.span 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="absolute top-4 left-4 bg-destructive text-destructive-foreground text-[10px] font-medium tracking-widest uppercase px-3 py-1.5"
          >
            -{discount}%
          </motion.span>
        )}

        {/* Action Buttons */}
        <div className="absolute top-4 right-4 flex flex-col gap-2">
          <motion.button
            initial={{ opacity: 0, x: 20 }}
            whileHover={{ scale: 1.1 }}
            className={cn(
              "w-10 h-10 bg-background/90 backdrop-blur-sm flex items-center justify-center transition-colors opacity-0 group-hover:opacity-100",
              inWishlist ? "bg-primary text-primary-foreground" : "hover:bg-primary hover:text-primary-foreground"
            )}
            style={{ transitionDelay: "0ms" }}
            aria-label="Add to wishlist"
            onClick={(e) => {
              e.preventDefault();
              toggle({ id, name, price, image });
            }}
          >
            <Heart size={18} />
          </motion.button>
          <motion.button
            initial={{ opacity: 0, x: 20 }}
            whileHover={{ scale: 1.1 }}
            className="w-10 h-10 bg-background/90 backdrop-blur-sm flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors opacity-0 group-hover:opacity-100"
            style={{ transitionDelay: "50ms" }}
            aria-label="Quick view"
          >
            <Eye size={18} />
          </motion.button>
        </div>

        {/* Add to Cart - Slide Up */}
        <motion.div 
          className="absolute bottom-0 left-0 right-0 p-4"
          initial={{ y: "100%" }}
          whileHover={{ y: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <motion.button 
            className="w-full bg-primary text-primary-foreground px-6 py-3 font-medium tracking-widest uppercase text-xs flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            whileHover={{ backgroundColor: "hsl(var(--accent))" }}
            whileTap={{ scale: 0.98 }}
            onClick={(e) => {
              e.preventDefault();
              add({ id, name, price, image, quantity: 1 });
            }}
          >
            <ShoppingBag size={16} />
            <span>Add to Cart</span>
          </motion.button>
        </motion.div>
      </div>

      {/* Product Info */}
      <motion.div 
        className="p-4"
        initial={{ opacity: 0.8 }}
        whileHover={{ opacity: 1 }}
      >
        <p className="text-xs text-muted-foreground tracking-wider uppercase mb-1">
          {category}
        </p>
        <Link to={`/product/${id}`}>
          <h3 className="font-serif text-base hover:text-primary transition-colors line-clamp-2 min-h-[2.5rem]">
            {name}
          </h3>
        </Link>
        <div className="flex items-center gap-2 mt-2">
          <span className="font-medium text-lg">₹{price.toLocaleString()}</span>
          {originalPrice && (
            <span className="text-sm text-muted-foreground line-through">
              ₹{originalPrice.toLocaleString()}
            </span>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};
