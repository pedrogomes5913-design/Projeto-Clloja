import Link from "next/link"
import Image from "next/image"
import { Shield, Award, BadgeCheck, ArrowRight, Clock, MapPin, Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"

const highlights = [
  {
    icon: Shield,
    title: "Garantia de 90 dias",
    description: "Todos os aparelhos com garantia de funcionamento",
  },
  {
    icon: Award,
    title: "Produtos Originais",
    description: "Celulares 100% originais, sem replicas",
  },
  {
    icon: BadgeCheck,
    title: "Preco Justo",
    description: "Melhores precos da regiao com qualidade garantida",
  },
]

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section - Minimalista */}
      <section className="gradient-hero relative overflow-hidden py-24 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            {/* Conteúdo texto */}
            <div className="fade-in-up">
              <h1 className="text-5xl md:text-7xl font-black mb-6 text-balance leading-tight">
                CH <span className="text-primary">SMARTPHONES</span>
              </h1>
              <p className="text-lg md:text-xl text-foreground/80 mb-10 text-balance leading-relaxed max-w-xl mx-auto">
                Celulares <span className="highlight-accent">100% originais</span>, com garantia de <span className="highlight-accent">90 dias</span> e preço justo
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  size="lg"
                  className="button-primary text-lg px-8 shadow-lg shadow-primary/50"
                >
                  <a
                    href="https://api.whatsapp.com/send/?phone=5579996482391"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Chamar no WhatsApp
                  </a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-full text-lg px-8 font-semibold transition-all duration-300"
                >
                  <Link href="/estoque">
                    Ver Estoque
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-16 text-foreground">
            Por que somos a melhor opção
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="card-hover p-8 text-center group"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  <item.icon className="w-7 h-7 text-primary group-hover:text-white" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-foreground">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-gradient-primary text-primary-foreground py-20 md:py-28">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-balance">
              Pronto para encontrar seu smartphone?
            </h2>
            <p className="text-lg mb-10 text-primary-foreground/90">
              Confira nosso catálogo completo com as melhores marcas
            </p>
            <Button
              asChild
              size="lg"
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground rounded-full text-lg px-8 font-bold shadow-lg shadow-primary/50 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
            >
              <Link href="/estoque">
                Ver Estoque
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="card-hover p-8 group">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="w-6 h-6 text-primary" />
                <h3 className="text-lg font-bold text-foreground">Horário</h3>
              </div>
              <div className="space-y-1 text-muted-foreground text-sm">
                <p>Segunda a Sexta: <span className="text-primary font-semibold">09h - 18h</span></p>
                <p>Sábado: <span className="text-primary font-semibold">09h - 15h</span></p>
              </div>
            </div>

            <div className="card-hover p-8 group">
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="w-6 h-6 text-primary" />
                <h3 className="text-lg font-bold text-foreground">Localização</h3>
              </div>
              <p className="text-muted-foreground text-sm">
                Rua São Cristóvão, 461<br />
                Edifício Futuro - Centro<br />
                Aracaju - SE
              </p>
            </div>

            <div className="card-hover p-8 group">
              <div className="flex items-center gap-3 mb-4">
                <Instagram className="w-6 h-6 text-primary" />
                <h3 className="text-lg font-bold text-foreground">Redes Sociais</h3>
              </div>
              <a
                href="https://instagram.com/ch_smartphones"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-secondary font-semibold text-sm transition-colors hover:underline"
              >
                @ch_smartphones
              </a>
              <p className="text-muted-foreground text-xs mt-2">
                Acompanhe nossas ofertas
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
