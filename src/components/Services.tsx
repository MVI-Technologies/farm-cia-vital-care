import { Pill, Heart, Sparkles, Apple, Activity, Syringe } from "lucide-react";

const services = [
  {
    icon: Pill,
    title: "Medicamentos",
    description: "Linha completa de medicamentos de referência e controlados.",
    color: "from-primary to-primary-glow",
  },
  {
    icon: Heart,
    title: "Genéricos",
    description: "Opções acessíveis com a mesma qualidade e eficácia.",
    color: "from-secondary to-[hsl(210,70%,60%)]",
  },
  {
    icon: Sparkles,
    title: "Higiene e Beleza",
    description: "Produtos para cuidados pessoais das melhores marcas.",
    color: "from-[hsl(320,60%,50%)] to-[hsl(340,70%,60%)]",
  },
  {
    icon: Apple,
    title: "Vitaminas e Suplementos",
    description: "Nutrição completa para uma vida mais saudável.",
    color: "from-[hsl(40,80%,50%)] to-[hsl(30,90%,55%)]",
  },
  {
    icon: Activity,
    title: "Aferição de Pressão",
    description: "Serviço gratuito de monitoramento da sua saúde.",
    color: "from-[hsl(0,70%,55%)] to-[hsl(15,80%,55%)]",
  },
  {
    icon: Syringe,
    title: "Aplicação de Injetáveis",
    description: "Procedimentos seguros realizados por profissionais.",
    color: "from-[hsl(180,60%,45%)] to-[hsl(160,50%,50%)]",
  },
];

export function Services() {
  return (
    <section className="py-20 bg-background">
      <div className="container">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-semibold mb-4">
            Nossos Produtos e Serviços
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Tudo para sua <span className="text-gradient">saúde</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Oferecemos uma linha completa de produtos e serviços farmacêuticos para atender todas as suas necessidades.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-2xl bg-card border border-border overflow-hidden hover:shadow-elevated transition-all duration-500"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                <service.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
