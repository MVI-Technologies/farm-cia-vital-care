import { Button } from "@/components/ui/button";
import { MessageCircle, Phone, ArrowRight } from "lucide-react";

export function CTA() {
  const whatsappNumber = "5511999999999";
  const whatsappMessage = encodeURIComponent("Olá! Gostaria de fazer um pedido.");
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <section className="py-24 gradient-hero relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border-2 border-primary-foreground rounded-full" />
        <div className="absolute bottom-10 right-10 w-48 h-48 border-2 border-primary-foreground rounded-full" />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 border-2 border-primary-foreground rounded-full -translate-x-1/2 -translate-y-1/2" />
      </div>

      <div className="container relative">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block px-4 py-2 rounded-full bg-primary-foreground/20 text-primary-foreground text-sm font-semibold mb-6 backdrop-blur-sm">
            Pronto para cuidar da sua saúde?
          </span>
          
          <h2 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-6 leading-tight">
            Peça agora mesmo pelo WhatsApp
          </h2>
          
          <p className="text-xl text-primary-foreground/90 mb-10 leading-relaxed">
            Atendimento rápido, personalizado e sem sair de casa. Nossa equipe está pronta para ajudar você!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="xl"
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 shadow-elevated"
            >
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-6 h-6" />
                Falar no WhatsApp
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
            
            <Button
              asChild
              size="xl"
              variant="outline"
              className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
            >
              <a href="tel:+5511999999999">
                <Phone className="w-6 h-6" />
                Ligar Agora
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
