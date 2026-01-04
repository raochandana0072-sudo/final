import { useEffect, useMemo, useState } from "react";

export type CartItem = {
  id: string;
  name: string;
  price: number;
  image: string;
  color?: string;
  size?: string;
  quantity: number;
};

const STORAGE_KEY = "cart_items_v1";

export function useCart() {
  const [items, setItems] = useState<CartItem[]>(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? (JSON.parse(raw) as CartItem[]) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {}
  }, [items]);

  const subtotal = useMemo(
    () => items.reduce((s, i) => s + i.price * i.quantity, 0),
    [items]
  );

  const shipping = useMemo(() => (subtotal >= 10000 || subtotal === 0 ? 0 : 500), [subtotal]);
  const total = useMemo(() => subtotal + shipping, [subtotal, shipping]);

  function add(item: Omit<CartItem, "quantity"> & { quantity?: number }) {
    setItems((prev) => {
      const idx = prev.findIndex((p) => p.id === item.id);
      if (idx !== -1) {
        const copy = [...prev];
        copy[idx] = { ...copy[idx], quantity: copy[idx].quantity + (item.quantity ?? 1) };
        return copy;
      }
      return [...prev, { ...item, quantity: item.quantity ?? 1 }];
    });
  }

  function remove(id: string) {
    setItems((prev) => prev.filter((i) => i.id !== id));
  }

  function updateQuantity(id: string, quantity: number) {
    setItems((prev) => prev.map((i) => (i.id === id ? { ...i, quantity: Math.max(1, quantity) } : i)));
  }

  function clear() {
    setItems([]);
  }

  return { items, add, remove, updateQuantity, clear, subtotal, shipping, total };
}
