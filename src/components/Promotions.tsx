import { Tag, Percent, Gift } from "lucide-react";

const promotions = [
  {
    icon: Percent,
    title: "10% OFF em Genéricos",
    description: "Desconto especial em toda linha de medicamentos genéricos.",
    badge: "Promoção",
    color: "bg-primary",
  },
  {
    icon: Gift,
    title: "Kit Vitaminas",
    description: "Compre 2 e leve 3 em vitaminas selecionadas.",
    badge: "Oferta",
    color: "bg-secondary",
  },
  {
    icon: Tag,
    title: "Frete Grátis",
    description: "Em compras acima de R$ 50 para toda região.",
    badge: "Exclusivo",
    color: "bg-[hsl(320,60%,50%)]",
  },
];

export function Promotions() {
  return (
    <section className="py-16 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 rounded-full bg-destructive/10 text-destructive text-sm font-semibold mb-4">
            🔥 Ofertas Especiais
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Promoções <span className="text-gradient">imperdíveis</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {promotions.map((promo, index) => (
            <div
              key={index}
              className="group relative p-6 rounded-2xl bg-card border-2 border-dashed border-primary/30 hover:border-primary transition-all duration-300 overflow-hidden"
            >
              <div className={`absolute top-4 right-4 px-3 py-1 rounded-full ${promo.color} text-primary-foreground text-xs font-bold`}>
                {promo.badge}
              </div>
              
              <div className={`w-14 h-14 rounded-xl ${promo.color} flex items-center justify-center mb-4`}>
                <promo.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              
              <h3 className="text-xl font-bold text-foreground mb-2">{promo.title}</h3>
              <p className="text-muted-foreground">{promo.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
