import { Phone, MapPin, Clock, Instagram, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contato | CH SMARTPHONES",
  description: "Entre em contato com a CH SMARTPHONES. WhatsApp, endereco e horario de funcionamento em Aracaju-SE.",
}

const contactInfo = [
  {
    icon: Phone,
    title: "Telefone / WhatsApp",
    content: "+55 (79) 99648-2391",
    link: "tel:+5579996482391",
  },
  {
    icon: Instagram,
    title: "Instagram",
    content: "@ch_smartphones",
    link: "https://instagram.com/ch_smartphones",
  },
]

export default function ContatoPage() {
  return (
    <div className="py-12 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Entre em Contato
            </h1>
            <p className="text-lg text-muted-foreground">
              Estamos prontos para atende-lo!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* WhatsApp CTA */}
            <div className="bg-[#25D366] rounded-2xl p-8 text-white">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                  <MessageCircle className="w-8 h-8" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold">WhatsApp</h2>
                  <p className="text-white/80">Atendimento rapido e direto</p>
                </div>
              </div>
              <p className="text-lg mb-6">
                Prefere falar pelo WhatsApp? Clique no botao abaixo e inicie uma conversa agora mesmo!
              </p>
              <Button
                asChild
                size="lg"
                className="w-full bg-white text-[#25D366] hover:bg-white/90 rounded-full text-lg font-semibold"
              >
                <a
                  href="https://api.whatsapp.com/send/?phone=5579996482391"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Chamar no WhatsApp
                </a>
              </Button>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link}
                  target={info.link.startsWith("http") ? "_blank" : undefined}
                  rel={info.link.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="bg-card rounded-2xl p-6 shadow-sm border border-border flex items-center gap-4 hover:shadow-md transition-shadow block"
                >
                  <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center shrink-0">
                    <info.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{info.title}</p>
                    <p className="text-lg font-semibold text-card-foreground">{info.content}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Address and Hours */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-card rounded-2xl p-8 shadow-sm border border-border">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-xl font-bold text-card-foreground">Endereco</h2>
              </div>
              <address className="not-italic text-muted-foreground space-y-1">
                <p className="font-semibold text-foreground">Edificio Futuro</p>
                <p>Rua Sao Cristovao, n 461</p>
                <p>Loja 15 (Terreo)</p>
                <p>Centro - Aracaju - SE</p>
                <p>CEP: 49010-904</p>
              </address>
              <a
                href="https://maps.google.com/?q=Rua+Sao+Cristovao+461+Aracaju+SE"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 text-primary hover:underline font-medium"
              >
                Ver no Google Maps
              </a>
            </div>

            <div className="bg-card rounded-2xl p-8 shadow-sm border border-border">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-xl font-bold text-card-foreground">Horario de Funcionamento</h2>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-border">
                  <span className="text-muted-foreground">Segunda a Sexta</span>
                  <span className="font-semibold text-foreground">09h as 18h</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-border">
                  <span className="text-muted-foreground">Sabado</span>
                  <span className="font-semibold text-foreground">09h as 15h</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-muted-foreground">Domingo</span>
                  <span className="font-semibold text-destructive">Fechado</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
