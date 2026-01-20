"use client"

import useSWR from "swr"
import { ProductCard } from "@/components/product-card"
import type { Product } from "@/lib/types"

const fetcher = (url: string) => fetch(url).then((res) => res.json())

export function EstoqueContent() {
  const { data: products, isLoading, error } = useSWR<Product[]>("/api/products", fetcher, {
    revalidateOnFocus: true,
    revalidateOnReconnect: true,
  })

  if (isLoading) {
    return (
      <div className="text-center py-20">
        <p className="text-muted-foreground text-lg">Carregando produtos...</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className="text-center py-20">
        <p className="text-destructive text-lg">Erro ao carregar produtos</p>
      </div>
    )
  }

  const availableProducts = (products || []).filter((p) => p.status === "disponivel")
  const reservedProducts = (products || []).filter((p) => p.status === "reservado")

  return (
    <>
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

      {reservedProducts.length > 0 && (
        <section>
          <h2 className="text-2xl font-semibold text-foreground mb-6 flex items-center gap-2">
            <span className="w-3 h-3 bg-muted-foreground rounded-full" />
            Reservados ({reservedProducts.length})
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {reservedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      )}

      {(products || []).length === 0 && (
        <div className="text-center py-20">
          <p className="text-muted-foreground text-lg">
            Nenhum produto disponivel no momento. Entre em contato pelo WhatsApp para saber das novidades!
          </p>
        </div>
      )}
    </>
  )
}
