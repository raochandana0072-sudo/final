import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const Services = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-32 md:pt-36">
        <div className="container-luxury py-12">
          <div className="max-w-3xl">
            <h1 className="text-headline mb-4">Services & Products</h1>
            <p className="text-muted-foreground">
              Explore our curated collections and personalized fashion services.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-10">
            <div className="border border-border p-6">
              <h2 className="font-serif text-xl mb-3">Women’s Apparel</h2>
              <p className="text-muted-foreground">
                A curated collection of dresses, tops, skirts, and trousers for various occasions (casual, formal, party wear).
              </p>
              <div className="mt-4 text-sm">
                <div className="flex justify-between"><span className="text-muted-foreground">Price range</span><span>₹1,999 – ₹24,999</span></div>
              </div>
            </div>

            <div className="border border-border p-6">
              <h2 className="font-serif text-xl mb-3">Accessories</h2>
              <p className="text-muted-foreground">
                Handbags, scarves, and statement jewelry designed to complement the clothing lines.
              </p>
              <div className="mt-4 text-sm">
                <div className="flex justify-between"><span className="text-muted-foreground">Price range</span><span>₹499 – ₹9,999</span></div>
              </div>
            </div>

            <div className="border border-border p-6">
              <h2 className="font-serif text-xl mb-3">Custom Design Services</h2>
              <p className="text-muted-foreground">
                Bespoke tailoring and personalized styling consultations for special events.
              </p>
              <div className="mt-4 text-sm">
                <div className="flex justify-between"><span className="text-muted-foreground">Starting from</span><span>₹2,999</span></div>
              </div>
            </div>
          </div>

          <div className="mt-12 border-t border-border pt-10">
            <h2 className="text-subheadline mb-4">Benefits</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border border-border p-6">
                <h3 className="font-serif text-lg mb-2">Exclusive Designs</h3>
                <p className="text-muted-foreground">Curated pieces you won’t find everywhere—crafted to stand out.</p>
              </div>
              <div className="border border-border p-6">
                <h3 className="font-serif text-lg mb-2">Quality Fabrics</h3>
                <p className="text-muted-foreground">Premium materials selected for comfort, drape, and durability.</p>
              </div>
              <div className="border border-border p-6">
                <h3 className="font-serif text-lg mb-2">Personalized Service</h3>
                <p className="text-muted-foreground">Styling support and custom tailoring for your perfect fit.</p>
              </div>
              <div className="border border-border p-6">
                <h3 className="font-serif text-lg mb-2">Sustainable Practices</h3>
                <p className="text-muted-foreground">A focus on thoughtful sourcing and timeless fashion.</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
