import productSaree1 from "@/assets/product-saree-1.jpg";
import productSaree2 from "@/assets/product-saree-2.jpg";
import productKurta1 from "@/assets/product-kurta-1.jpg";
import productKurta2 from "@/assets/product-kurta-2.jpg";
import productLehenga1 from "@/assets/product-lehenga-1.jpg";
import productDress1 from "@/assets/product-dress-1.jpg";
import collectionFestive from "@/assets/collection-festive.jpg";
import collectionBridal from "@/assets/collection-bridal.jpg";

export type Product = {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  badge?: "new" | "sale" | "bestseller";
};

export const products: Product[] = [
  { id: "1", name: "Teal Silk Saree with Gold Zari Border", price: 18500, originalPrice: 24000, image: productSaree1, category: "Sarees", badge: "sale" },
  { id: "2", name: "Blush Pink Embroidered Kurta Set", price: 8900, image: productKurta1, category: "Kurtas & Sets", badge: "new" },
  { id: "3", name: "Ivory Bridal Lehenga with Zari Work", price: 125000, image: productLehenga1, category: "Bridal", badge: "bestseller" },
  { id: "4", name: "Olive Green Anarkali with Gold Embroidery", price: 15600, image: productDress1, category: "Dresses", badge: "new" },
  { id: "5", name: "Coral Banarasi Silk Saree", price: 22000, image: productSaree2, category: "Sarees" },
  { id: "6", name: "Navy Blue Silk Kurta Set", price: 12500, image: productKurta2, category: "Kurtas & Sets" },
  { id: "7", name: "Royal Blue Festive Saree", price: 28000, image: collectionFestive, category: "Festive", badge: "new" },
  { id: "8", name: "Crimson Bridal Lehenga", price: 185000, image: collectionBridal, category: "Bridal" },
];

export function searchProducts(term: string) {
  const q = term.trim().toLowerCase();
  if (!q) return [] as Product[];
  return products.filter((p) =>
    [p.name, p.category].some((f) => f.toLowerCase().includes(q))
  );
}
