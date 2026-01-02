import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { TrustBadges } from "@/components/TrustBadges";
import { Features } from "@/components/Features";
import { Services } from "@/components/Services";
import { Promotions } from "@/components/Promotions";
import { Testimonials } from "@/components/Testimonials";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <TrustBadges />
      <section id="diferenciais">
        <Features />
      </section>
      <Promotions />
      <section id="servicos">
        <Services />
      </section>
      <section id="depoimentos">
        <Testimonials />
      </section>
      <section id="contato">
        <CTA />
      </section>
      <Footer />
    </main>
  );
};

export default Index;
