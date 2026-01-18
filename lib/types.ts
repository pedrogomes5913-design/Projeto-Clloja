export interface Product {
  id: string
  brand: string
  model: string
  storage: string
  condition: string
  price: number
  imageUrl: string
  status: "disponivel" | "vendido"
}
