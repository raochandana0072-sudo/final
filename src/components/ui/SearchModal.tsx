import { useEffect, useMemo, useState } from "react";
import { X, Search } from "lucide-react";
import { searchProducts, products } from "@/lib/products";
import { Link } from "react-router-dom";

interface SearchModalProps {
  open: boolean;
  onClose: () => void;
}

export const SearchModal = ({ open, onClose }: SearchModalProps) => {
  const [query, setQuery] = useState("");

  useEffect(() => {
    if (open) setQuery("");
  }, [open]);

  const results = useMemo(() => {
    if (!query) return products.slice(0, 6);
    return searchProducts(query).slice(0, 10);
  }, [query]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-black/40 backdrop-blur-sm" onClick={onClose}>
      <div
        className="mx-auto mt-24 max-w-2xl bg-background border border-border shadow-elegant"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-2 p-3 border-b border-border">
          <Search size={18} className="text-muted-foreground" />
          <input
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search products..."
            className="flex-1 bg-transparent py-2 outline-none"
          />
          <button className="p-2" onClick={onClose} aria-label="Close">
            <X size={18} />
          </button>
        </div>
        <div className="max-h-96 overflow-auto">
          {results.length === 0 ? (
            <p className="p-4 text-sm text-muted-foreground">No results</p>
          ) : (
            <ul>
              {results.map((p) => (
                <li key={p.id} className="border-b border-border">
                  <Link to={`/product/${p.id}`} className="flex items-center gap-3 p-3 hover:bg-secondary" onClick={onClose}>
                    <img src={p.image} alt={p.name} className="w-12 h-12 object-cover" />
                    <div className="flex-1">
                      <div className="text-sm font-medium line-clamp-1">{p.name}</div>
                      <div className="text-xs text-muted-foreground">{p.category}</div>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};
