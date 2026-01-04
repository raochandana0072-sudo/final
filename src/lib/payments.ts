export type RazorpayOptions = {
  key: string;
  amount: number;
  currency?: string;
  name?: string;
  description?: string;
  image?: string;
  order_id?: string;
  prefill?: { name?: string; email?: string; contact?: string };
  notes?: Record<string, string>;
};

declare global {
  interface Window {
    Razorpay?: new (options: any) => { open: () => void };
  }
}

export async function initiateRazorpay(amountPaise: number, opts: Partial<RazorpayOptions> = {}) {
  const key = import.meta.env.VITE_RAZORPAY_KEY_ID as string | undefined;
  if (!key) throw new Error("Missing VITE_RAZORPAY_KEY_ID");
  if (!window.Razorpay) throw new Error("Razorpay SDK not loaded");
  const apiBase = import.meta.env.VITE_API_BASE_URL as string | undefined;

  let order_id: string | undefined = opts.order_id;
  if (!order_id && apiBase) {
    const res = await fetch(`${apiBase}/api/create-order`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount: amountPaise, currency: opts.currency ?? "INR" }),
    });
    if (!res.ok) throw new Error(`Order creation failed (${res.status})`);
    const data = await res.json();
    order_id = data.id;
  }

  const options: RazorpayOptions = {
    key,
    amount: amountPaise,
    currency: opts.currency ?? "INR",
    name: opts.name ?? "Chandana's Boutique",
    description: opts.description ?? "Order Payment",
    image: opts.image,
    order_id,
    prefill: opts.prefill,
    notes: opts.notes,
  };

  const rzp = new window.Razorpay!(options);
  rzp.open();
}
