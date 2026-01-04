import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const Account = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-32 md:pt-36">
        <div className="container-luxury py-12">
          <h1 className="text-headline mb-4">Account</h1>
          <p className="text-muted-foreground">
            This is a placeholder account page. Add authentication and profile details here.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Account;
