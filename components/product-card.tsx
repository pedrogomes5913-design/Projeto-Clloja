import Image from "next/image"
import type { Product } from "@/lib/types"
import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const whatsappMessage = `Ola! Tenho interesse no ${product.brand} ${product.model} ${product.storage} - R$ ${product.price.toLocaleString("pt-BR")}`
  const whatsappUrl = `https://api.whatsapp.com/send/?phone=5579996482391&text=${encodeURIComponent(whatsappMessage)}`

  return (
    <div className="bg-card rounded-2xl shadow-sm border border-border overflow-hidden hover:shadow-md transition-shadow">
      <div className="relative aspect-square bg-muted">
        <Image
          src={product.imageUrl || "/placeholder.svg"}
          alt={`${product.brand} ${product.model}`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {product.status === "reservado" && (
          <div className="absolute inset-0 bg-foreground/60 flex items-center justify-center">
            <span className="bg-primary text-primary-foreground px-4 py-2 rounded-full font-semibold text-lg">
              Reservado
            </span>
          </div>
        )}
      </div>
      <div className="p-5">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-muted-foreground font-medium">{product.brand}</span>
          <span className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded-full">
            {product.storage}
          </span>
        </div>
        <h3 className="text-lg font-semibold text-card-foreground mb-1">{product.model}</h3>
        <p className="text-sm text-muted-foreground mb-3">{product.condition}</p>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-primary">
            R$ {product.price.toLocaleString("pt-BR")}
          </span>
          {product.status === "disponivel" && (
            <Button
              asChild
              size="sm"
              className="bg-[#25D366] hover:bg-[#20BA5C] text-white rounded-full"
            >
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-4 h-4 mr-1" />
                Chamar
              </a>
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}
