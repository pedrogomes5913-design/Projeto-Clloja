import Link from "next/link"
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
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-foreground to-foreground/90 text-background py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
              CH <span className="text-primary">SMARTPHONES</span>
            </h1>
            <p className="text-xl md:text-2xl text-background/80 mb-8 text-balance">
              Celulares 100% originais, com garantia e preco justo
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full text-lg px-8"
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
                className="border-background/30 text-background hover:bg-background/10 rounded-full text-lg px-8 bg-transparent"
              >
                <Link href="/estoque">
                  Ver Estoque
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Highlights Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
            Por que escolher a CH Smartphones?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="bg-card p-8 rounded-2xl shadow-sm border border-border hover:shadow-md transition-shadow text-center"
              >
                <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                  <item.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-card-foreground">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-primary-foreground">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">
              Encontre o celular ideal para voce
            </h2>
            <p className="text-xl mb-8 text-primary-foreground/80">
              Confira nosso estoque de smartphones seminovos com garantia
            </p>
            <Button
              asChild
              size="lg"
              className="bg-foreground hover:bg-foreground/90 text-background rounded-full text-lg px-8"
            >
              <Link href="/estoque">
                Ver Todos os Celulares
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card p-8 rounded-2xl shadow-sm border border-border">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-card-foreground">Horario</h3>
              </div>
              <div className="space-y-2 text-muted-foreground">
                <p>Segunda a Sexta: 09h as 18h</p>
                <p>Sabado: 09h as 15h</p>
              </div>
            </div>

            <div className="bg-card p-8 rounded-2xl shadow-sm border border-border">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-card-foreground">Endereco</h3>
              </div>
              <p className="text-muted-foreground">
                Rua Sao Cristovao, 461, Loja 15<br />
                Edificio Futuro - Centro<br />
                Aracaju - SE
              </p>
            </div>

            <div className="bg-card p-8 rounded-2xl shadow-sm border border-border">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center">
                  <Instagram className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-card-foreground">Instagram</h3>
              </div>
              <a
                href="https://instagram.com/ch_smartphones"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline font-medium"
              >
                @ch_smartphones
              </a>
              <p className="text-muted-foreground mt-2">
                Siga-nos para novidades e ofertas
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
