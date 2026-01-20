import type { Metadata } from "next"
import { EstoqueContent } from "@/components/estoque-content"

export const metadata: Metadata = {
  title: "Estoque | CH SMARTPHONES",
  description: "Confira nosso estoque de celulares seminovos com garantia de 90 dias. iPhones, Samsung, Xiaomi e muito mais.",
}

export default function EstoquePage() {
  return (
    <div className="py-12 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Nosso Estoque
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Celulares seminovos 100% originais com garantia de 90 dias. Todos os aparelhos sao testados e revisados.
          </p>
        </div>

        <EstoqueContent />
      </div>
    </div>
  )
}
