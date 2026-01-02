import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Maria Silva",
    role: "Cliente há 5 anos",
    content: "Atendimento excepcional! Sempre encontro tudo que preciso e os farmacêuticos são muito atenciosos. Recomendo para toda minha família.",
    rating: 5,
    avatar: "MS",
  },
  {
    name: "João Santos",
    role: "Cliente há 3 anos",
    content: "A entrega é super rápida e os preços são justos. Nunca tive problemas com nenhum pedido. Farmácia de confiança!",
    rating: 5,
    avatar: "JS",
  },
  {
    name: "Ana Oliveira",
    role: "Cliente há 2 anos",
    content: "O serviço de aferição de pressão me ajuda muito a acompanhar minha saúde. Equipe sempre disposta a ajudar.",
    rating: 5,
    avatar: "AO",
  },
];

export function Testimonials() {
  return (
    <section className="py-20 bg-card relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      
      <div className="container relative">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-semibold mb-4">
            Depoimentos
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            O que nossos <span className="text-gradient">clientes</span> dizem
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A satisfação dos nossos clientes é nossa maior recompensa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative p-8 rounded-2xl bg-background border border-border shadow-soft hover:shadow-card transition-all duration-300"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-primary/10" />
              
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[hsl(45,100%,50%)] text-[hsl(45,100%,50%)]" />
                ))}
              </div>
              
              <p className="text-foreground leading-relaxed mb-6">"{testimonial.content}"</p>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full gradient-hero flex items-center justify-center text-primary-foreground font-bold">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
