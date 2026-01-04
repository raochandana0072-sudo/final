import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Search, Heart, ShoppingBag, User, Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { SearchModal } from "@/components/ui/SearchModal";
import { useWishlist } from "@/hooks/useWishlist";

const categories = [
  {
    name: "New Arrivals",
    href: "/collections/new-arrivals",
    featured: true,
  },
  {
    name: "Sarees",
    href: "/collections/sarees",
    submenu: [
      { name: "Banarasi Sarees", href: "/collections/sarees/banarasi" },
      { name: "Silk Sarees", href: "/collections/sarees/silk" },
      { name: "Cotton Sarees", href: "/collections/sarees/cotton" },
      { name: "Designer Sarees", href: "/collections/sarees/designer" },
      { name: "View All Sarees", href: "/collections/sarees" },
    ],
  },
  {
    name: "Kurtas & Sets",
    href: "/collections/kurtas",
    submenu: [
      { name: "Kurta Sets", href: "/collections/kurtas/sets" },
      { name: "Anarkali", href: "/collections/kurtas/anarkali" },
      { name: "Straight Kurtas", href: "/collections/kurtas/straight" },
      { name: "View All Kurtas", href: "/collections/kurtas" },
    ],
  },
  {
    name: "Lehengas",
    href: "/collections/lehengas",
    submenu: [
      { name: "Bridal Lehengas", href: "/collections/lehengas/bridal" },
      { name: "Party Wear", href: "/collections/lehengas/party" },
      { name: "View All Lehengas", href: "/collections/lehengas" },
    ],
  },
  {
    name: "Dresses",
    href: "/collections/dresses",
  },
  {
    name: "Bridal",
    href: "/collections/bridal",
    featured: true,
  },
  {
    name: "Festive",
    href: "/collections/festive",
  },
];

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const [searchOpen, setSearchOpen] = useState(false);
  const { items: wishlistItems } = useWishlist();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <>
    <motion.header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled 
          ? "bg-background/95 backdrop-blur-md border-b border-border shadow-soft" 
          : "bg-background/80 backdrop-blur-sm border-b border-transparent"
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Top Bar */}
      <motion.div 
        className="bg-primary text-primary-foreground text-center py-2 px-4 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <motion.p 
          className="text-xs tracking-widest uppercase font-light"
          animate={{ 
            opacity: [1, 0.7, 1],
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          ✨ Complimentary Shipping on Orders Above ₹10,000 ✨
        </motion.p>
      </motion.div>

      {/* Main Header */}
      <div className="container-luxury">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden p-2 -ml-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            whileTap={{ scale: 0.9 }}
          >
            <AnimatePresence mode="wait">
              {mobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={24} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={24} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>

          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <motion.h1 
              className="font-serif text-xl md:text-2xl tracking-wide"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              Chandana's Boutique
            </motion.h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {categories.map((category, index) => (
              <motion.div
                key={category.name}
                className="relative group"
                onMouseEnter={() => setActiveSubmenu(category.name)}
                onMouseLeave={() => setActiveSubmenu(null)}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 + 0.3 }}
              >
                <Link
                  to={category.href}
                  className={cn(
                    "text-caption link-elegant flex items-center gap-1 py-6 relative",
                    category.featured && "text-primary"
                  )}
                >
                  {category.name}
                  {category.submenu && (
                    <motion.div
                      animate={{ rotate: activeSubmenu === category.name ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown size={14} />
                    </motion.div>
                  )}
                </Link>

                {/* Dropdown Menu */}
                {category.submenu && (
                  <AnimatePresence>
                    {activeSubmenu === category.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="absolute top-full left-0 bg-background border border-border shadow-elegant py-4 min-w-[220px]"
                      >
                        {category.submenu.map((item, idx) => (
                          <motion.div
                            key={item.name}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.05 }}
                          >
                            <Link
                              to={item.href}
                              className="block px-6 py-2.5 text-sm hover:bg-secondary hover:text-primary transition-colors"
                            >
                              {item.name}
                            </Link>
                          </motion.div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </motion.div>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center space-x-2 md:space-x-4">
            {[
              { icon: Search, label: "Search", href: "#", hideOnMobile: false },
              { icon: User, label: "Account", href: "/account", hideOnMobile: true },
              { icon: Heart, label: "Wishlist", href: "/wishlist", hideOnMobile: false },
            ].map((action, index) => (
              <motion.div
                key={action.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className={action.hideOnMobile ? "hidden sm:block" : ""}
              >
                {action.href === "#" ? (
                  <motion.button 
                    className="p-2 hover:text-primary transition-colors"
                    aria-label={action.label}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSearchOpen(true)}
                  >
                    <action.icon size={20} />
                  </motion.button>
                ) : (
                  <Link to={action.href} className="relative">
                    <motion.div
                      className="p-2 hover:text-primary transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <action.icon size={20} />
                    </motion.div>
                    {action.label === "Wishlist" && wishlistItems.length > 0 && (
                      <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-[10px] w-5 h-5 flex items-center justify-center rounded-full">
                        {wishlistItems.length}
                      </span>
                    )}
                  </Link>
                )}
              </motion.div>
            ))}
            
            {/* Cart with Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7 }}
            >
              <Link to="/cart" className="p-2 hover:text-primary transition-colors relative" aria-label="Cart">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ShoppingBag size={20} />
                </motion.div>
                <motion.span 
                  className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-[10px] w-5 h-5 flex items-center justify-center rounded-full"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.8, type: "spring", stiffness: 500, damping: 15 }}
                >
                  2
                </motion.span>
              </Link>
            </motion.div>

            
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-background border-t border-border overflow-hidden"
          >
            <nav className="container-luxury py-6 space-y-4">
              {categories.map((category, index) => (
                <motion.div 
                  key={category.name} 
                  className="border-b border-border pb-4"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    to={category.href}
                    className={cn(
                      "block text-lg font-serif",
                      category.featured && "text-primary"
                    )}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {category.name}
                  </Link>
                  {category.submenu && (
                    <div className="mt-2 ml-4 space-y-2">
                      {category.submenu.map((item) => (
                        <Link
                          key={item.name}
                          to={item.href}
                          className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
    <SearchModal open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
};
