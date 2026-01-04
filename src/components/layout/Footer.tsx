import { Link } from "react-router-dom";
import { Instagram, Facebook, Twitter, Youtube, Mail, Phone, MapPin } from "lucide-react";

const footerLinks = {
  shop: [
    { name: "New Arrivals", href: "/collections/new-arrivals" },
    { name: "Sarees", href: "/collections/sarees" },
    { name: "Kurtas & Sets", href: "/collections/kurtas" },
    { name: "Lehengas", href: "/collections/lehengas" },
    { name: "Bridal Collection", href: "/collections/bridal" },
    { name: "Sale", href: "/collections/sale" },
  ],
  customer: [
    { name: "My Account", href: "/account" },
    { name: "Order Tracking", href: "/order-tracking" },
    { name: "Wishlist", href: "/wishlist" },
    { name: "Size Guide", href: "/size-guide" },
    { name: "FAQs", href: "/faqs" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Our Story", href: "/story" },
    { name: "Lookbook", href: "/lookbook" },
    { name: "Store Locator", href: "/stores" },
    { name: "Contact Us", href: "/contact" },
  ],
  policies: [
    { name: "Shipping Policy", href: "/shipping" },
    { name: "Returns & Exchanges", href: "/returns" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms & Conditions", href: "/terms" },
  ],
};

export const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      {/* Newsletter Section */}
      <div className="border-b border-background/10">
        <div className="container-luxury py-16 md:py-20">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-headline mb-4">Join Our World</h3>
            <p className="text-body-large text-background/70 mb-8">
              Subscribe to receive updates on new collections, exclusive offers, and styling inspiration.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-transparent border-b border-background/30 focus:border-champagne py-3 px-0 outline-none placeholder:text-background/40 text-background"
              />
              <button type="submit" className="btn-outline-luxury border-background/30 hover:bg-background hover:text-foreground">
                <span>Subscribe</span>
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container-luxury py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-12">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-1">
            <h4 className="font-serif text-xl mb-6">Chandana's Boutique</h4>
            <p className="text-sm text-background/60 leading-relaxed mb-6">
              Celebrating the artistry of Indian craftsmanship through timeless ethnic wear.
            </p>
            <div className="flex items-center space-x-4">
              <a href="#" className="hover:text-champagne transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-champagne transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-champagne transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-champagne transition-colors" aria-label="Youtube">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Shop Links */}
          <div>
            <h5 className="text-caption mb-6">Shop</h5>
            <ul className="space-y-3">
              {footerLinks.shop.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-sm text-background/60 hover:text-background transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h5 className="text-caption mb-6">Customer Care</h5>
            <ul className="space-y-3">
              {footerLinks.customer.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-sm text-background/60 hover:text-background transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h5 className="text-caption mb-6">Company</h5>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-sm text-background/60 hover:text-background transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h5 className="text-caption mb-6">Contact Us</h5>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-background/60">
                <MapPin size={18} className="flex-shrink-0 mt-0.5" />
                <span>123 Fashion Street, Bengaluru, Karnataka 560001, India</span>
              </li>
              <li>
                <a href="tel:+919876543210" className="flex items-center gap-3 text-sm text-background/60 hover:text-background transition-colors">
                  <Phone size={18} />
                  <span>+91 98765 43210</span>
                </a>
              </li>
              <li>
                <a href="mailto:hello@chandanasboutique.com" className="flex items-center gap-3 text-sm text-background/60 hover:text-background transition-colors">
                  <Mail size={18} />
                  <span>hello@chandanasboutique.com</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/10">
        <div className="container-luxury py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-background/50">
              © 2025 Chandana's Boutique. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              {footerLinks.policies.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-xs text-background/50 hover:text-background transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
