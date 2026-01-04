import { useEffect, useMemo, useState } from "react";

export type WishlistItem = {
  id: string;
  name: string;
  price: number;
  image: string;
};

const STORAGE_KEY = "wishlist_items_v1";

export function useWishlist() {
  const [items, setItems] = useState<WishlistItem[]>(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? (JSON.parse(raw) as WishlistItem[]) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {}
  }, [items]);

  const ids = useMemo(() => new Set(items.map((i) => i.id)), [items]);

  function add(item: WishlistItem) {
    setItems((prev) => (ids.has(item.id) ? prev : [...prev, item]));
  }

  function remove(id: string) {
    setItems((prev) => prev.filter((i) => i.id !== id));
  }

  function toggle(item: WishlistItem) {
    if (ids.has(item.id)) remove(item.id);
    else add(item);
  }

  function has(id: string) {
    return ids.has(id);
  }

  return { items, add, remove, toggle, has };
}
