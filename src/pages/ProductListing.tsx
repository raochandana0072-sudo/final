import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ProductCard } from "@/components/ui/ProductCard";
import { ChevronDown, Grid3X3, LayoutList, SlidersHorizontal, X } from "lucide-react";
import { cn } from "@/lib/utils";
import productSaree1 from "@/assets/product-saree-1.jpg";
import productSaree2 from "@/assets/product-saree-2.jpg";
import productKurta1 from "@/assets/product-kurta-1.jpg";
import productKurta2 from "@/assets/product-kurta-2.jpg";
import productLehenga1 from "@/assets/product-lehenga-1.jpg";
import productDress1 from "@/assets/product-dress-1.jpg";
import collectionFestive from "@/assets/collection-festive.jpg";
import collectionBridal from "@/assets/collection-bridal.jpg";

const allProducts = [
  { id: "1", name: "Teal Silk Saree with Gold Zari Border", price: 18500, originalPrice: 24000, image: productSaree1, category: "Sarees", badge: "sale" as const },
  { id: "2", name: "Blush Pink Embroidered Kurta Set", price: 8900, image: productKurta1, category: "Kurtas & Sets", badge: "new" as const },
  { id: "3", name: "Ivory Bridal Lehenga with Zari Work", price: 125000, image: productLehenga1, category: "Bridal", badge: "bestseller" as const },
  { id: "4", name: "Olive Green Anarkali with Gold Embroidery", price: 15600, image: productDress1, category: "Dresses", badge: "new" as const },
  { id: "5", name: "Coral Banarasi Silk Saree", price: 22000, image: productSaree2, category: "Sarees" },
  { id: "6", name: "Navy Blue Silk Kurta Set", price: 12500, image: productKurta2, category: "Kurtas & Sets" },
  { id: "7", name: "Royal Blue Festive Saree", price: 28000, image: collectionFestive, category: "Festive", badge: "new" as const },
  { id: "8", name: "Crimson Bridal Lehenga", price: 185000, image: collectionBridal, category: "Bridal" },
];

const filters = {
  size: ["XS", "S", "M", "L", "XL", "XXL"],
  color: ["Red", "Blue", "Green", "Pink", "Gold", "Ivory", "Black"],
  fabric: ["Silk", "Cotton", "Georgette", "Chiffon", "Velvet"],
  price: ["Under ₹10,000", "₹10,000 - ₹25,000", "₹25,000 - ₹50,000", "Above ₹50,000"],
  occasion: ["Wedding", "Festive", "Casual", "Party", "Office"],
};

const sortOptions = [
  { value: "featured", label: "Featured" },
  { value: "newest", label: "Newest" },
  { value: "price-low", label: "Price: Low to High" },
  { value: "price-high", label: "Price: High to Low" },
  { value: "bestselling", label: "Best Selling" },
];

const ProductListing = () => {
  const { category } = useParams();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [gridView, setGridView] = useState<"grid" | "list">("grid");
  const [sortBy, setSortBy] = useState("featured");
  const [activeFilters, setActiveFilters] = useState<string[]>([]);

  const categoryName = category?.replace("-", " ").replace(/\b\w/g, (l) => l.toUpperCase()) || "All Products";

  return (
    <div className="min-h-screen">
      <Header />

      <main className="pt-32 md:pt-36">
        {/* Breadcrumb */}
        <div className="container-luxury py-4">
          <nav className="text-sm text-muted-foreground">
            <Link to="/" className="hover:text-primary">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-foreground">{categoryName}</span>
          </nav>
        </div>

        {/* Page Header */}
        <div className="container-luxury pb-8 border-b border-border">
          <h1 className="text-headline">{categoryName}</h1>
          <p className="text-muted-foreground mt-2">{allProducts.length} products</p>
        </div>

        {/* Toolbar */}
        <div className="container-luxury py-4 border-b border-border">
          <div className="flex items-center justify-between gap-4">
            {/* Filter Toggle */}
            <button
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors"
            >
              <SlidersHorizontal size={18} />
              <span>Filters</span>
              {activeFilters.length > 0 && (
                <span className="bg-primary text-primary-foreground text-xs px-2 py-0.5 rounded-full">
                  {activeFilters.length}
                </span>
              )}
            </button>

            {/* Sort & View */}
            <div className="flex items-center gap-4">
              {/* Sort */}
              <div className="relative group">
                <button className="flex items-center gap-2 text-sm">
                  <span className="hidden sm:inline">Sort by:</span>
                  <span className="font-medium">
                    {sortOptions.find((o) => o.value === sortBy)?.label}
                  </span>
                  <ChevronDown size={16} />
                </button>
                <div className="absolute right-0 top-full mt-2 bg-background border border-border shadow-elegant py-2 min-w-[180px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-10">
                  {sortOptions.map((option) => (
                    <button
                      key={option.value}
                      onClick={() => setSortBy(option.value)}
                      className={cn(
                        "w-full text-left px-4 py-2 text-sm hover:bg-secondary transition-colors",
                        sortBy === option.value && "text-primary"
                      )}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* View Toggle */}
              <div className="hidden md:flex items-center gap-1 border-l border-border pl-4">
                <button
                  onClick={() => setGridView("grid")}
                  className={cn(
                    "p-2 hover:text-primary transition-colors",
                    gridView === "grid" && "text-primary"
                  )}
                >
                  <Grid3X3 size={18} />
                </button>
                <button
                  onClick={() => setGridView("list")}
                  className={cn(
                    "p-2 hover:text-primary transition-colors",
                    gridView === "list" && "text-primary"
                  )}
                >
                  <LayoutList size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="container-luxury py-8 md:py-12">
          <div className="flex gap-8">
            {/* Filters Sidebar */}
            <aside
              className={cn(
                "fixed md:sticky inset-0 md:inset-auto top-0 md:top-36 z-50 md:z-0 w-full md:w-64 flex-shrink-0 bg-background md:bg-transparent h-screen md:h-auto overflow-auto transition-transform duration-300",
                isFilterOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
              )}
            >
              <div className="p-6 md:p-0">
                {/* Mobile Header */}
                <div className="flex items-center justify-between mb-6 md:hidden">
                  <h2 className="font-serif text-xl">Filters</h2>
                  <button onClick={() => setIsFilterOpen(false)}>
                    <X size={24} />
                  </button>
                </div>

                {/* Filter Groups */}
                {Object.entries(filters).map(([key, values]) => (
                  <div key={key} className="border-b border-border pb-6 mb-6">
                    <h3 className="text-caption mb-4 capitalize">{key}</h3>
                    <div className="space-y-3">
                      {values.map((value) => (
                        <label key={value} className="flex items-center gap-3 cursor-pointer group">
                          <input
                            type="checkbox"
                            className="w-4 h-4 border border-border accent-primary"
                            checked={activeFilters.includes(value)}
                            onChange={(e) => {
                              if (e.target.checked) {
                                setActiveFilters([...activeFilters, value]);
                              } else {
                                setActiveFilters(activeFilters.filter((f) => f !== value));
                              }
                            }}
                          />
                          <span className="text-sm group-hover:text-primary transition-colors">
                            {value}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>
                ))}

                {/* Clear Filters */}
                {activeFilters.length > 0 && (
                  <button
                    onClick={() => setActiveFilters([])}
                    className="text-sm text-primary hover:underline"
                  >
                    Clear all filters
                  </button>
                )}
              </div>
            </aside>

            {/* Products Grid */}
            <div className="flex-1">
              {/* Active Filters */}
              {activeFilters.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-6">
                  {activeFilters.map((filter) => (
                    <button
                      key={filter}
                      onClick={() => setActiveFilters(activeFilters.filter((f) => f !== filter))}
                      className="flex items-center gap-1 bg-secondary px-3 py-1 text-xs"
                    >
                      {filter}
                      <X size={14} />
                    </button>
                  ))}
                </div>
              )}

              {/* Grid */}
              <div
                className={cn(
                  "grid gap-4 md:gap-6",
                  gridView === "grid"
                    ? "grid-cols-2 lg:grid-cols-3"
                    : "grid-cols-1"
                )}
              >
                {allProducts.map((product) => (
                  <ProductCard key={product.id} {...product} />
                ))}
              </div>

              {/* Load More */}
              <div className="text-center mt-12">
                <button className="btn-outline-luxury">
                  <span>Load More</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProductListing;
