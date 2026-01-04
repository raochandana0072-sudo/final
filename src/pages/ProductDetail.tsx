import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Heart, Share2, Minus, Plus, Truck, RotateCcw, Shield, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { ProductCard } from "@/components/ui/ProductCard";
import productSaree1 from "@/assets/product-saree-1.jpg";
import productKurta1 from "@/assets/product-kurta-1.jpg";
import productLehenga1 from "@/assets/product-lehenga-1.jpg";
import productDress1 from "@/assets/product-dress-1.jpg";

const product = {
  id: "1",
  name: "Teal Silk Saree with Gold Zari Border",
  price: 18500,
  originalPrice: 24000,
  description: "This exquisite teal silk saree features intricate gold zari work on the border and pallu. Handcrafted by master artisans, it showcases traditional weaving techniques passed down through generations. Perfect for weddings, festive occasions, and special celebrations.",
  images: [productSaree1, productSaree1, productSaree1, productSaree1],
  category: "Sarees",
  fabric: "Pure Silk",
  care: "Dry clean only",
  length: "5.5 meters with blouse piece",
  colors: ["Teal", "Burgundy", "Navy", "Emerald"],
  sizes: ["Standard (5.5m)", "Extended (6m)"],
};

const relatedProducts = [
  { id: "2", name: "Blush Pink Embroidered Kurta Set", price: 8900, image: productKurta1, category: "Kurtas & Sets", badge: "new" as const },
  { id: "3", name: "Ivory Bridal Lehenga with Zari Work", price: 125000, image: productLehenga1, category: "Bridal" },
  { id: "4", name: "Olive Green Anarkali with Gold Embroidery", price: 15600, image: productDress1, category: "Dresses" },
  { id: "5", name: "Teal Silk Saree with Gold Zari Border", price: 18500, image: productSaree1, category: "Sarees", badge: "sale" as const },
];

const ProductDetail = () => {
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("description");

  const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);

  return (
    <div className="min-h-screen">
      <Header />

      <main className="pt-32 md:pt-36">
        {/* Breadcrumb */}
        <div className="container-luxury py-4">
          <nav className="flex items-center text-sm text-muted-foreground">
            <Link to="/" className="hover:text-primary">Home</Link>
            <ChevronRight size={14} className="mx-2" />
            <Link to="/collections/sarees" className="hover:text-primary">{product.category}</Link>
            <ChevronRight size={14} className="mx-2" />
            <span className="text-foreground line-clamp-1">{product.name}</span>
          </nav>
        </div>

        {/* Product Section */}
        <section className="container-luxury py-8">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
            {/* Image Gallery */}
            <div className="space-y-4">
              {/* Main Image */}
              <div className="aspect-[3/4] bg-secondary overflow-hidden">
                <img
                  src={product.images[selectedImage]}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Thumbnails */}
              <div className="flex gap-3">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={cn(
                      "w-20 h-24 bg-secondary overflow-hidden border-2 transition-colors",
                      selectedImage === index ? "border-primary" : "border-transparent"
                    )}
                  >
                    <img
                      src={image}
                      alt={`${product.name} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div>
              {/* Badge */}
              {discount > 0 && (
                <span className="inline-block bg-destructive text-destructive-foreground text-xs tracking-widest uppercase px-3 py-1 mb-4">
                  {discount}% Off
                </span>
              )}

              {/* Title & Price */}
              <h1 className="text-headline mb-4">{product.name}</h1>
              <div className="flex items-center gap-4 mb-6">
                <span className="text-2xl font-medium">₹{product.price.toLocaleString()}</span>
                {product.originalPrice && (
                  <span className="text-lg text-muted-foreground line-through">
                    ₹{product.originalPrice.toLocaleString()}
                  </span>
                )}
              </div>

              {/* Short Description */}
              <p className="text-muted-foreground mb-8 leading-relaxed">
                {product.description}
              </p>

              {/* Color Selection */}
              <div className="mb-6">
                <h3 className="text-caption mb-3">Color: {selectedColor}</h3>
                <div className="flex gap-3">
                  {product.colors.map((color) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={cn(
                        "px-4 py-2 border text-sm transition-colors",
                        selectedColor === color
                          ? "border-primary bg-primary/5"
                          : "border-border hover:border-primary"
                      )}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>

              {/* Size Selection */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-caption">Size</h3>
                  <button className="text-sm text-primary hover:underline">
                    Size Guide
                  </button>
                </div>
                <div className="flex gap-3">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={cn(
                        "px-4 py-2 border text-sm transition-colors",
                        selectedSize === size
                          ? "border-primary bg-primary/5"
                          : "border-border hover:border-primary"
                      )}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div className="mb-8">
                <h3 className="text-caption mb-3">Quantity</h3>
                <div className="flex items-center border border-border w-fit">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-10 h-10 flex items-center justify-center hover:bg-secondary transition-colors"
                    aria-label="Decrease quantity"
                  >
                    <Minus size={16} />
                  </button>
                  <span className="w-12 text-center">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-10 h-10 flex items-center justify-center hover:bg-secondary transition-colors"
                    aria-label="Increase quantity"
                  >
                    <Plus size={16} />
                  </button>
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-4 mb-8">
                <button className="flex-1 btn-luxury text-center">
                  <span>Add to Cart</span>
                </button>
                <button className="w-12 h-12 border border-border flex items-center justify-center hover:bg-secondary transition-colors">
                  <Heart size={20} />
                </button>
                <button className="w-12 h-12 border border-border flex items-center justify-center hover:bg-secondary transition-colors">
                  <Share2 size={20} />
                </button>
              </div>

              {/* Buy Now */}
              <button className="w-full btn-outline-luxury mb-8">
                <span>Buy Now</span>
              </button>

              {/* Features */}
              <div className="grid grid-cols-3 gap-4 border-t border-border pt-8">
                <div className="text-center">
                  <Truck size={24} className="mx-auto mb-2 text-primary" strokeWidth={1.5} />
                  <p className="text-xs">Free Shipping</p>
                </div>
                <div className="text-center">
                  <RotateCcw size={24} className="mx-auto mb-2 text-primary" strokeWidth={1.5} />
                  <p className="text-xs">Easy Returns</p>
                </div>
                <div className="text-center">
                  <Shield size={24} className="mx-auto mb-2 text-primary" strokeWidth={1.5} />
                  <p className="text-xs">Secure Payment</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Product Tabs */}
        <section className="container-luxury py-12 border-t border-border">
          {/* Tab Headers */}
          <div className="flex gap-8 border-b border-border mb-8">
            {["description", "details", "shipping", "reviews"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={cn(
                  "text-caption pb-4 border-b-2 transition-colors capitalize",
                  activeTab === tab
                    ? "border-primary text-foreground"
                    : "border-transparent text-muted-foreground hover:text-foreground"
                )}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="max-w-2xl">
            {activeTab === "description" && (
              <div className="prose prose-sm">
                <p className="text-muted-foreground leading-relaxed">
                  {product.description}
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  Each saree is carefully handcrafted by skilled artisans who have honed their craft over generations. 
                  The gold zari work adds a touch of royalty, making this piece perfect for weddings, festivals, and 
                  special celebrations.
                </p>
              </div>
            )}

            {activeTab === "details" && (
              <div className="space-y-4">
                <div className="flex justify-between py-3 border-b border-border">
                  <span className="text-muted-foreground">Fabric</span>
                  <span>{product.fabric}</span>
                </div>
                <div className="flex justify-between py-3 border-b border-border">
                  <span className="text-muted-foreground">Length</span>
                  <span>{product.length}</span>
                </div>
                <div className="flex justify-between py-3 border-b border-border">
                  <span className="text-muted-foreground">Care</span>
                  <span>{product.care}</span>
                </div>
                <div className="flex justify-between py-3 border-b border-border">
                  <span className="text-muted-foreground">Country of Origin</span>
                  <span>India</span>
                </div>
              </div>
            )}

            {activeTab === "shipping" && (
              <div className="space-y-6">
                <div>
                  <h4 className="font-medium mb-2">Delivery</h4>
                  <p className="text-sm text-muted-foreground">
                    Standard delivery: 5-7 business days<br />
                    Express delivery: 2-3 business days (additional charges apply)
                  </p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Returns</h4>
                  <p className="text-sm text-muted-foreground">
                    We offer a 15-day return policy. Items must be unused, unwashed, and in original packaging with tags intact.
                  </p>
                </div>
              </div>
            )}

            {activeTab === "reviews" && (
              <div className="text-center py-8">
                <p className="text-muted-foreground mb-4">No reviews yet</p>
                <button className="btn-outline-luxury">
                  <span>Write a Review</span>
                </button>
              </div>
            )}
          </div>
        </section>

        {/* Related Products */}
        <section className="section-padding bg-secondary/30">
          <div className="container-luxury">
            <h2 className="text-headline text-center mb-12">You May Also Like</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {relatedProducts.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ProductDetail;
