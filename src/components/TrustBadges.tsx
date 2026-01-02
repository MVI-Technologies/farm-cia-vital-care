import { Shield, Award, CheckCircle } from "lucide-react";

export function TrustBadges() {
  return (
    <section className="py-12 bg-muted/50">
      <div className="container">
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <Shield className="w-6 h-6 text-primary" />
            </div>
            <div>
              <p className="font-bold text-foreground">Compra Segura</p>
              <p className="text-sm text-muted-foreground">100% protegida</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <Award className="w-6 h-6 text-primary" />
            </div>
            <div>
              <p className="font-bold text-foreground">Farmácia Autorizada</p>
              <p className="text-sm text-muted-foreground">CRF regulamentada</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <CheckCircle className="w-6 h-6 text-primary" />
            </div>
            <div>
              <p className="font-bold text-foreground">Satisfação Garantida</p>
              <p className="text-sm text-muted-foreground">ou devolvemos seu dinheiro</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
