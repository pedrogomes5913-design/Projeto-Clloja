import { Shield, Award, BadgeCheck, Users } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Sobre | CH SMARTPHONES",
  description: "Conheca a CH SMARTPHONES - Celulares originais, seminovos, com garantia de 90 dias em Aracaju-SE.",
}

const values = [
  {
    icon: Shield,
    title: "Garantia",
    description: "90 dias de garantia em todos os aparelhos",
  },
  {
    icon: Award,
    title: "Originalidade",
    description: "Celulares 100% originais, sem replicas",
  },
  {
    icon: BadgeCheck,
    title: "Qualidade",
    description: "Aparelhos testados e revisados",
  },
  {
    icon: Users,
    title: "Confianca",
    description: "Atendimento transparente e honesto",
  },
]

export default function SobrePage() {
  return (
    <div className="py-12 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Sobre a CH Smartphones
            </h1>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
          </div>

          <div className="bg-card rounded-2xl shadow-sm border border-border p-8 md:p-12 mb-12">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                A <span className="font-semibold text-foreground">CH SMARTPHONES</span> foi idealizada e criada com o objetivo de oferecer celulares 100% originais, seminovos, com garantia de 90 dias e preco justo.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Atuamos como fornecedores de smartphones em <span className="font-semibold text-foreground">Aracaju-SE</span>, com loja fisica no centro da cidade, prezando por atendimento transparente e confianca em cada venda.
              </p>
            </div>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-8">
            Nossos Valores
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-card p-6 rounded-2xl shadow-sm border border-border hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center shrink-0">
                    <value.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-card-foreground mb-1">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
