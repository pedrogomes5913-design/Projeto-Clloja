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
      {/* Hero Section com iPhone */}
      <section className="relative bg-gradient-to-br from-background via-background to-background/50 overflow-hidden">
        <div className="container mx-auto px-4 py-20 md:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Conteúdo texto */}
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
                CH <span className="text-primary">SMARTPHONES</span>
              </h1>
              <p className="text-xl md:text-2xl text-foreground/80 mb-8 text-balance">
                Celulares 100% originais, com garantia e preco justo
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
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
                  className="border-primary/30 text-primary hover:bg-primary/10 rounded-full text-lg px-8"
                >
                  <Link href="/estoque">
                    Ver Estoque
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* iPhone com Imagem Realista */}
            <div className="relative h-[600px] flex items-center justify-center">
              {/* Gradiente de fundo com bloom effect */}
              <div className="absolute top-0 right-1/4 w-80 h-80 bg-gradient-to-br from-primary/40 to-transparent rounded-full blur-3xl opacity-60" />
              <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-gradient-to-t from-primary/30 to-transparent rounded-full blur-3xl opacity-40" />
              
              {/* Container para imagem do iPhone */}
              <div className="relative z-10 w-72 md:w-96">
                {/* iPhone com câmera triple lens */}
                <div className="relative">
                  <svg viewBox="0 0 300 600" className="w-full h-auto drop-shadow-2xl" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <linearGradient id="silverGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style={{ stopColor: "#f8f8f8", stopOpacity: 1 }} />
                        <stop offset="50%" style={{ stopColor: "#e8e8e8", stopOpacity: 1 }} />
                        <stop offset="100%" style={{ stopColor: "#d0d0d0", stopOpacity: 1 }} />
                      </linearGradient>
                      <linearGradient id="displayGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" style={{ stopColor: "#7c3aed", stopOpacity: 1 }} />
                        <stop offset="40%" style={{ stopColor: "#ec4899", stopOpacity: 1 }} />
                        <stop offset="100%" style={{ stopColor: "#1e1b4b", stopOpacity: 1 }} />
                      </linearGradient>
                      <filter id="shadow3d">
                        <feDropShadow dx="2" dy="2" stdDeviation="3" floodOpacity="0.3"/>
                      </filter>
                    </defs>

                    {/* Corpo do iPhone */}
                    <rect x="30" y="20" width="240" height="560" rx="50" fill="url(#silverGrad)" stroke="#999" strokeWidth="0.5"/>
                    
                    {/* Borda de aço */}
                    <rect x="32" y="22" width="236" height="556" rx="48" fill="none" stroke="#aaa" strokeWidth="1.5" opacity="0.4"/>

                    {/* Tela */}
                    <rect x="50" y="80" width="200" height="440" rx="40" fill="url(#displayGrad)"/>

                    {/* Notch do iPhone 13 Pro */}
                    <ellipse cx="150" cy="105" rx="50" ry="25" fill="#000" filter="url(#shadow3d)"/>

                    {/* Câmeras Front no Notch */}
                    <circle cx="135" cy="105" r="6" fill="#1a1a1a"/>
                    <circle cx="135" cy="105" r="4" fill="#0a0a0a"/>
                    <circle cx="165" cy="105" r="6" fill="#1a1a1a"/>
                    <circle cx="165" cy="105" r="4" fill="#0a0a0a"/>

                    {/* Conteúdo da tela */}
                    {/* Hora */}
                    <text x="65" y="145" fontFamily="Helvetica, Arial" fontSize="10" fontWeight="bold" fill="#fff">9:41</text>
                    
                    {/* Ícones de status */}
                    <rect x="210" y="135" width="28" height="16" rx="3" fill="none" stroke="#fff" strokeWidth="1.5" opacity="0.7"/>
                    <rect x="213" y="139" width="22" height="8" fill="#fff" opacity="0.7"/>

                    {/* Elementos na tela */}
                    <circle cx="150" cy="220" r="30" fill="#00ff00" opacity="0.1"/>
                    <circle cx="100" cy="280" r="25" fill="#ff00ff" opacity="0.08"/>
                    <circle cx="200" cy="300" r="20" fill="#00ffff" opacity="0.06"/>

                    {/* Texto na tela */}
                    <text x="150" y="400" fontFamily="Arial" fontSize="14" fontWeight="bold" textAnchor="middle" fill="#fff" opacity="0.9">iPhone 13 Pro</text>

                    {/* Alto-falante */}
                    <rect x="105" y="60" width="90" height="4" rx="2" fill="#666"/>

                    {/* Câmeras traseiras (triple lens) */}
                    <g transform="translate(150, 50)">
                      {/* Câmera principal */}
                      <circle cx="-18" cy="0" r="12" fill="#e8e8e8" stroke="#999" strokeWidth="1"/>
                      <circle cx="-18" cy="0" r="10" fill="#1a1a1a"/>
                      <circle cx="-18" cy="0" r="8" fill="#000" opacity="0.8"/>
                      <circle cx="-20" cy="-2" r="1.5" fill="#333" opacity="0.5"/>

                      {/* Câmera ultra-wide */}
                      <circle cx="0" cy="0" r="12" fill="#e8e8e8" stroke="#999" strokeWidth="1"/>
                      <circle cx="0" cy="0" r="10" fill="#1a1a1a"/>
                      <circle cx="0" cy="0" r="8" fill="#000" opacity="0.8"/>

                      {/* Câmera teleobjetiva */}
                      <circle cx="18" cy="0" r="12" fill="#e8e8e8" stroke="#999" strokeWidth="1"/>
                      <circle cx="18" cy="0" r="10" fill="#1a1a1a"/>
                      <circle cx="18" cy="0" r="8" fill="#000" opacity="0.8"/>

                      {/* Flash */}
                      <rect x="32" y="-4" width="8" height="8" rx="2" fill="#e8e8e8" stroke="#999" strokeWidth="1"/>
                    </g>

                    {/* Logo Apple */}
                    <text x="150" y="550" fontFamily="Arial" fontSize="16" textAnchor="middle" fill="#999">🍎</text>

                    {/* Botão lateral */}
                    <rect x="20" y="240" width="8" height="50" rx="4" fill="#aaa" stroke="#999" strokeWidth="0.5"/>

                    {/* Botões de volume */}
                    <rect x="20" y="180" width="8" height="35" rx="4" fill="#aaa" stroke="#999" strokeWidth="0.5"/>
                    <rect x="20" y="300" width="8" height="35" rx="4" fill="#aaa" stroke="#999" strokeWidth="0.5"/>

                    {/* Sombra embaixo */}
                    <ellipse cx="150" cy="585" rx="95" ry="20" fill="#000" opacity="0.15"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
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
