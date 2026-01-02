import { Heart, Truck, DollarSign, Package, Stethoscope, Pill, Sparkles, Apple, Activity } from "lucide-react";

const features = [
  {
    icon: Stethoscope,
    title: "Atendimento Especializado",
    description: "Farmacêuticos prontos para orientar você com segurança e cuidado.",
  },
  {
    icon: Truck,
    title: "Entrega Rápida",
    description: "Receba seus medicamentos em casa com agilidade e praticidade.",
  },
  {
    icon: DollarSign,
    title: "Preços Acessíveis",
    description: "Qualidade e economia para cuidar da sua saúde sem pesar no bolso.",
  },
  {
    icon: Package,
    title: "Amplo Mix de Produtos",
    description: "Tudo que você precisa em um só lugar: medicamentos, beleza e bem-estar.",
  },
];

export function Features() {
  return (
    <section className="py-20 bg-card">
      <div className="container">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-semibold mb-4">
            Por que nos escolher?
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Seus diferenciais de <span className="text-gradient">confiança</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Há anos cuidando da saúde da nossa comunidade com dedicação e profissionalismo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl bg-background border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-card"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-xl gradient-hero flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
