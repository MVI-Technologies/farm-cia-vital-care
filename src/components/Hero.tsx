import { Button } from "@/components/ui/button";
import { MessageCircle, ArrowRight, Shield, Award, Clock } from "lucide-react";
import heroImage from "@/assets/hero-pharmacy.jpg";

export function Hero() {
  const whatsappNumber = "5511999999999";
  const whatsappMessage = encodeURIComponent("Olá! Gostaria de fazer um pedido.");
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Farmácia profissional atendendo clientes"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/95 via-foreground/80 to-foreground/40" />
      </div>

      {/* Content */}
      <div className="container relative z-10 py-20">
        <div className="max-w-2xl">
          {/* Trust badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 backdrop-blur-sm border border-primary/30 mb-8">
            <Shield className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary-foreground">Mais de 20 anos cuidando de você</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary-foreground leading-tight mb-6">
            Cuidando da sua{" "}
            <span className="relative">
              <span className="relative z-10 text-primary-glow">saúde</span>
              <span className="absolute bottom-2 left-0 w-full h-3 bg-primary/30 -z-0" />
            </span>{" "}
            todos os dias
          </h1>

          <p className="text-xl text-primary-foreground/80 leading-relaxed mb-8">
            Sua farmácia de confiança com atendimento humanizado, preços justos e entrega rápida. 
            Medicamentos, produtos de beleza e bem-estar em um só lugar.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button asChild variant="whatsapp" size="xl">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-6 h-6" />
                Peça pelo WhatsApp
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
            
            <Button asChild variant="outline" size="xl" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent">
              <a href="#servicos">
                Conheça nossos serviços
              </a>
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap gap-8">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                <Award className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="font-bold text-primary-foreground">Qualidade</p>
                <p className="text-sm text-primary-foreground/60">Garantida</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="font-bold text-primary-foreground">Entrega</p>
                <p className="text-sm text-primary-foreground/60">Rápida</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="font-bold text-primary-foreground">+10 mil</p>
                <p className="text-sm text-primary-foreground/60">Clientes satisfeitos</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
