import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Link } from "react-router-dom";
import heroImage1 from "@/assets/hero-1.jpg";
import heroImage2 from "@/assets/hero-2.jpg";

const About = () => {
  return (
    <div className="min-h-screen">
      <Header />

      <main className="pt-32 md:pt-36">
        {/* Hero Section */}
        <section className="relative h-[60vh] flex items-center justify-center">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${heroImage2})` }}
          />
          <div className="absolute inset-0 bg-foreground/50" />
          <div className="relative text-center text-background max-w-3xl px-4">
            <p className="text-caption text-champagne mb-4">Our Story</p>
            <h1 className="text-display mb-6">Chandana's Boutique</h1>
            <p className="text-body-large text-background/80">
              Where tradition meets contemporary elegance
            </p>
          </div>
        </section>

        

        {/* Values Section */}
        <section className="section-padding bg-secondary/30">
          <div className="container-luxury">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <p className="text-caption text-primary mb-4">Our Values</p>
              <h2 className="text-headline">What We Stand For</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Artisanal Excellence",
                  description:
                    "We work directly with master craftsmen to preserve traditional techniques like zari work, chikankari, and block printing.",
                },
                {
                  title: "Sustainable Fashion",
                  description:
                    "We believe in slow fashion—creating timeless pieces that transcend seasons and can be treasured for generations.",
                },
                {
                  title: "Empowering Artisans",
                  description:
                    "By supporting traditional crafts, we help sustain livelihoods and preserve India's incredible textile heritage.",
                },
              ].map((value) => (
                <div key={value.title} className="text-center p-8">
                  <h3 className="font-serif text-xl mb-4">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission, Vision, Team */}
        <section className="section-padding">
          <div className="container-luxury grid md:grid-cols-3 gap-8 md:gap-12">
            <div>
              <p className="text-caption text-primary mb-2">Company Mission</p>
              <h3 className="font-serif text-xl mb-3">Our Purpose</h3>
              <p className="text-muted-foreground">
                To provide customers with unique, high-quality fashion pieces that inspire confidence and express individuality. The boutique aims to be a destination for timeless style and exceptional service.
              </p>
            </div>
            <div>
              <p className="text-caption text-primary mb-2">Vision</p>
              <h3 className="font-serif text-xl mb-3">Where We’re Headed</h3>
              <p className="text-muted-foreground">
                To become a leading online fashion boutique recognized for curated collections, sustainable practices, and a strong community of fashion enthusiasts.
              </p>
            </div>
            <div>
              <p className="text-caption text-primary mb-2">Team & Background</p>
              <h3 className="font-serif text-xl mb-3">Our Story Today</h3>
              <p className="text-muted-foreground">
                Chandana's Boutique was founded in 2024 by Chandana, a fashion enthusiast with over a decade of experience in the retail industry. The small, dedicated team of stylists and customer service professionals works tirelessly to source the best garments and ensure a seamless shopping experience. The boutique started as a small local shop and has since expanded its reach online to serve a wider audience.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding">
          <div className="container-luxury text-center">
            <h2 className="text-headline mb-6">Visit Our Boutique</h2>
            <p className="text-body-large text-muted-foreground max-w-xl mx-auto mb-8">
              Experience the beauty of our collection in person. Our stylists are 
              ready to help you find the perfect piece for your special occasion.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-luxury">
                <span>Contact Us</span>
              </Link>
              <Link to="/stores" className="btn-outline-luxury">
                <span>Store Locator</span>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
