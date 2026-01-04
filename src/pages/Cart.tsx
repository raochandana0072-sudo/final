import { useState } from "react";
import { Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Minus, Plus, X, Heart, ShoppingBag, ArrowRight } from "lucide-react";
import productSaree1 from "@/assets/product-saree-1.jpg";
import productKurta1 from "@/assets/product-kurta-1.jpg";
import { initiateRazorpay } from "@/lib/payments";

const initialCartItems = [
  {
    id: "1",
    name: "Teal Silk Saree with Gold Zari Border",
    price: 18500,
    originalPrice: 24000,
    image: productSaree1,
    color: "Teal",
    size: "Standard (5.5m)",
    quantity: 1,
  },
  {
    id: "2",
    name: "Blush Pink Embroidered Kurta Set",
    price: 8900,
    image: productKurta1,
    color: "Blush Pink",
    size: "M",
    quantity: 2,
  },
];

const Cart = () => {
  const [cartItems, setCartItems] = useState(initialCartItems);
  const [promoCode, setPromoCode] = useState("");

  const updateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity < 1) return;
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id: string) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = subtotal >= 10000 ? 0 : 500;
  const total = subtotal + shipping;

  return (
    <div className="min-h-screen">
      <Header />

      <main className="pt-32 md:pt-36">
        <div className="container-luxury py-8 md:py-12">
          <h1 className="text-headline mb-8">Shopping Cart</h1>

          {cartItems.length === 0 ? (
            <div className="text-center py-16">
              <ShoppingBag size={64} className="mx-auto mb-6 text-muted-foreground" strokeWidth={1} />
              <h2 className="text-subheadline mb-4">Your cart is empty</h2>
              <p className="text-muted-foreground mb-8">
                Discover our beautiful collection and add something special.
              </p>
              <Link to="/collections/new-arrivals" className="btn-luxury inline-block">
                <span>Continue Shopping</span>
              </Link>
            </div>
          ) : (
            <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
              {/* Cart Items */}
              <div className="lg:col-span-2">
                {/* Header */}
                <div className="hidden md:grid grid-cols-12 gap-4 text-caption pb-4 border-b border-border">
                  <div className="col-span-6">Product</div>
                  <div className="col-span-2 text-center">Quantity</div>
                  <div className="col-span-2 text-center">Price</div>
                  <div className="col-span-2 text-right">Total</div>
                </div>

                {/* Items */}
                <div className="divide-y divide-border">
                  {cartItems.map((item) => (
                    <div key={item.id} className="py-6 grid md:grid-cols-12 gap-4 items-center">
                      {/* Product Info */}
                      <div className="md:col-span-6 flex gap-4">
                        <Link to={`/product/${item.id}`} className="w-24 h-32 flex-shrink-0 bg-secondary">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-cover"
                          />
                        </Link>
                        <div className="flex-1">
                          <Link to={`/product/${item.id}`} className="font-serif hover:text-primary transition-colors">
                            {item.name}
                          </Link>
                          <p className="text-sm text-muted-foreground mt-1">
                            {item.color} / {item.size}
                          </p>
                          <div className="flex items-center gap-4 mt-3">
                            <button
                              onClick={() => removeItem(item.id)}
                              className="text-xs text-muted-foreground hover:text-destructive transition-colors"
                            >
                              Remove
                            </button>
                            <button className="text-xs text-muted-foreground hover:text-primary transition-colors flex items-center gap-1">
                              <Heart size={12} />
                              Save for later
                            </button>
                          </div>
                        </div>
                      </div>

                      {/* Quantity */}
                      <div className="md:col-span-2 flex justify-center">
                        <div className="flex items-center border border-border">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="w-8 h-8 flex items-center justify-center hover:bg-secondary transition-colors"
                          >
                            <Minus size={14} />
                          </button>
                          <span className="w-10 text-center text-sm">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="w-8 h-8 flex items-center justify-center hover:bg-secondary transition-colors"
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                      </div>

                      {/* Price */}
                      <div className="md:col-span-2 text-center">
                        <span className="md:hidden text-sm text-muted-foreground mr-2">Price:</span>
                        <span>₹{item.price.toLocaleString()}</span>
                        {item.originalPrice && (
                          <span className="block text-sm text-muted-foreground line-through">
                            ₹{item.originalPrice.toLocaleString()}
                          </span>
                        )}
                      </div>

                      {/* Total */}
                      <div className="md:col-span-2 text-right font-medium">
                        <span className="md:hidden text-sm text-muted-foreground mr-2">Total:</span>
                        ₹{(item.price * item.quantity).toLocaleString()}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Continue Shopping */}
                <div className="pt-6">
                  <Link
                    to="/collections/new-arrivals"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    ← Continue Shopping
                  </Link>
                </div>
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-1">
                <div className="bg-secondary/50 p-6">
                  <h2 className="text-lg font-serif mb-6">Order Summary</h2>

                  {/* Promo Code */}
                  <div className="mb-6">
                    <label className="text-sm text-muted-foreground block mb-2">
                      Promo Code
                    </label>
                    <div className="flex gap-2">
                      <input
                        type="text"
                        value={promoCode}
                        onChange={(e) => setPromoCode(e.target.value)}
                        placeholder="Enter code"
                        className="flex-1 bg-background border border-border px-3 py-2 text-sm focus:outline-none focus:border-primary"
                      />
                      <button className="px-4 py-2 border border-border text-sm hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors">
                        Apply
                      </button>
                    </div>
                  </div>

                  {/* Totals */}
                  <div className="space-y-4 border-t border-border pt-6">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Subtotal</span>
                      <span>₹{subtotal.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Shipping</span>
                      <span>{shipping === 0 ? "Free" : `₹${shipping}`}</span>
                    </div>
                    {shipping === 0 && (
                      <p className="text-xs text-primary">
                        You've unlocked free shipping!
                      </p>
                    )}
                    <div className="flex justify-between pt-4 border-t border-border text-lg font-medium">
                      <span>Total</span>
                      <span>₹{total.toLocaleString()}</span>
                    </div>
                  </div>

                  {/* Checkout Button */}
                  <button
                    className="w-full btn-luxury mt-6 flex items-center justify-center gap-2"
                    onClick={() => {
                      try {
                        const amountPaise = total * 100;
                        initiateRazorpay(amountPaise, {
                          description: `Cart payment (₹${total.toLocaleString()})`,
                        });
                      } catch (e) {
                        alert((e as Error).message);
                      }
                    }}
                  >
                    <span>Proceed to Checkout</span>
                    <ArrowRight size={16} />
                  </button>

                  {/* Trust Badges */}
                  <div className="mt-6 pt-6 border-t border-border text-center">
                    <p className="text-xs text-muted-foreground mb-2">
                      Secure checkout powered by
                    </p>
                    <div className="flex justify-center gap-4 text-muted-foreground">
                      <span className="text-xs font-medium">Visa</span>
                      <span className="text-xs font-medium">Mastercard</span>
                      <span className="text-xs font-medium">UPI</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Cart;
