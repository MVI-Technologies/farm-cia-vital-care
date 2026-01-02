import { MapPin, Clock, Phone, Mail, Facebook, Instagram, MessageCircle } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl gradient-hero flex items-center justify-center">
                <span className="text-2xl">💊</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-background">FarmaSaúde</h3>
                <p className="text-sm text-background/60">Sua farmácia de confiança</p>
              </div>
            </div>
            <p className="text-background/70 leading-relaxed">
              Cuidando da saúde da sua família há mais de 20 anos com dedicação, carinho e profissionalismo.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold text-background mb-6">Contato</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary-glow mt-0.5" />
                <span className="text-background/70">Rua das Flores, 123 - Centro<br />São Paulo - SP, 01234-567</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary-glow" />
                <a href="tel:+5511999999999" className="text-background/70 hover:text-background transition-colors">(11) 99999-9999</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary-glow" />
                <a href="mailto:contato@farmasaude.com" className="text-background/70 hover:text-background transition-colors">contato@farmasaude.com</a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-lg font-bold text-background mb-6">Horário de Funcionamento</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-primary-glow" />
                <div className="text-background/70">
                  <p className="font-medium text-background">Segunda a Sexta</p>
                  <p>08:00 - 21:00</p>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-primary-glow" />
                <div className="text-background/70">
                  <p className="font-medium text-background">Sábado</p>
                  <p>08:00 - 18:00</p>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-primary-glow" />
                <div className="text-background/70">
                  <p className="font-medium text-background">Domingo e Feriados</p>
                  <p>09:00 - 14:00</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-lg font-bold text-background mb-6">Redes Sociais</h4>
            <p className="text-background/70 mb-6">Siga-nos para novidades, promoções e dicas de saúde.</p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-12 h-12 rounded-xl bg-background/10 flex items-center justify-center hover:bg-primary hover:scale-110 transition-all duration-300"
              >
                <Facebook className="w-5 h-5 text-background" />
              </a>
              <a
                href="#"
                className="w-12 h-12 rounded-xl bg-background/10 flex items-center justify-center hover:bg-primary hover:scale-110 transition-all duration-300"
              >
                <Instagram className="w-5 h-5 text-background" />
              </a>
              <a
                href="#"
                className="w-12 h-12 rounded-xl bg-background/10 flex items-center justify-center hover:bg-[hsl(142,70%,45%)] hover:scale-110 transition-all duration-300"
              >
                <MessageCircle className="w-5 h-5 text-background" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-background/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-background/60 text-sm">
              © 2025 FarmaSaúde. Todos os direitos reservados.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-background/60 text-sm hover:text-background transition-colors">Política de Privacidade</a>
              <a href="#" className="text-background/60 text-sm hover:text-background transition-colors">Termos de Uso</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
