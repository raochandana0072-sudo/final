import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { useWishlist } from "@/hooks/useWishlist";
import { Link } from "react-router-dom";

const Wishlist = () => {
  const { items, remove } = useWishlist();

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-32 md:pt-36">
        <div className="container-luxury py-12">
          <h1 className="text-headline mb-6">Wishlist</h1>
          {items.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-muted-foreground mb-6">Your wishlist is empty.</p>
              <Link to="/collections/new-arrivals" className="btn-luxury">Browse Collections</Link>
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {items.map((p) => (
                <div key={p.id} className="border border-border p-3">
                  <Link to={`/product/${p.id}`} className="block">
                    <img src={p.image} alt={p.name} className="w-full aspect-[3/4] object-cover" />
                    <div className="mt-2">
                      <div className="font-serif line-clamp-2 min-h-[2.5rem]">{p.name}</div>
                      <div className="text-sm mt-1">₹{p.price.toLocaleString()}</div>
                    </div>
                  </Link>
                  <button className="mt-3 text-sm text-destructive hover:underline" onClick={() => remove(p.id)}>Remove</button>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Wishlist;
