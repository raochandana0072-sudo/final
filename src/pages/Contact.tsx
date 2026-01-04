import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { toast } from "@/hooks/use-toast";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-32 md:pt-36">
        <div className="container-luxury py-12">
          <div className="max-w-3xl">
            <h1 className="text-headline mb-4">Contact</h1>
            <p className="text-muted-foreground">
              For general inquiries, appointments, and feedback.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-10 mt-10">
            <div className="border border-border p-6">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  toast({
                    title: "Message sent",
                    description: "We’ll get back to you shortly.",
                  });
                  setName("");
                  setEmail("");
                  setMessage("");
                }}
                className="space-y-4"
              >
                <div>
                  <label className="text-sm text-muted-foreground block mb-2">Name</label>
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-background border border-border px-3 py-2 text-sm focus:outline-none focus:border-primary"
                    required
                  />
                </div>
                <div>
                  <label className="text-sm text-muted-foreground block mb-2">Email</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-background border border-border px-3 py-2 text-sm focus:outline-none focus:border-primary"
                    required
                  />
                </div>
                <div>
                  <label className="text-sm text-muted-foreground block mb-2">Message</label>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full min-h-[140px] bg-background border border-border px-3 py-2 text-sm focus:outline-none focus:border-primary"
                    required
                  />
                </div>
                <button type="submit" className="btn-luxury w-full">
                  <span>Send Message</span>
                </button>
              </form>

              <div className="mt-8 border-t border-border pt-6 space-y-2 text-sm">
                <div className="flex justify-between"><span className="text-muted-foreground">City</span><span>Bengaluru</span></div>
                <div className="flex justify-between"><span className="text-muted-foreground">Phone</span><a className="hover:underline" href="tel:+919876543210">+91 98765 43210</a></div>
                <div className="flex justify-between"><span className="text-muted-foreground">Email</span><a className="hover:underline" href="mailto:hello@chandanasboutique.com">hello@chandanasboutique.com</a></div>
              </div>

              <div className="mt-6 border-t border-border pt-6">
                <div className="text-sm text-muted-foreground mb-3">Social</div>
                <div className="flex gap-4 text-sm">
                  <a className="hover:underline" href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a>
                  <a className="hover:underline" href="https://facebook.com" target="_blank" rel="noreferrer">Facebook</a>
                  <a className="hover:underline" href="https://wa.me/919876543210" target="_blank" rel="noreferrer">WhatsApp</a>
                </div>
              </div>
            </div>

            <div className="border border-border overflow-hidden">
              <iframe
                title="Bengaluru Location"
                src="https://www.google.com/maps?q=Bengaluru%2C%20Karnataka%2C%20India&output=embed"
                className="w-full h-[480px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
