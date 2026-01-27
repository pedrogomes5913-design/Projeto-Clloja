import { getProducts } from "@/lib/products"
import { ProductCard } from "@/components/product-card"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Estoque | CH SMARTPHONES",
  description: "Confira nosso estoque de celulares seminovos com garantia de 90 dias. iPhones, Samsung, Xiaomi e muito mais.",
}

export default function EstoquePage() {
  const products = getProducts()
  const availableProducts = products.filter((p) => p.status === "disponivel")
  const soldProducts = products.filter((p) => p.status === "vendido")

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

        {availableProducts.length > 0 && (
          <section className="mb-16">
            <h2 className="text-2xl font-semibold text-foreground mb-6 flex items-center gap-2">
              <span className="w-3 h-3 bg-[#25D366] rounded-full" />
              Disponiveis ({availableProducts.length})
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {availableProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </section>
        )}

        {soldProducts.length > 0 && (
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-6 flex items-center gap-2">
              <span className="w-3 h-3 bg-muted-foreground rounded-full" />
              Vendidos ({soldProducts.length})
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {soldProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </section>
        )}

        {products.length === 0 && (
          <div className="text-center py-20">
            <p className="text-muted-foreground text-lg">
              Nenhum produto disponivel no momento. Entre em contato pelo WhatsApp para saber das novidades!
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
