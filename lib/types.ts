export interface Product {
  id: string
  brand: string
  model: string
  storage: string
  condition: string
  price: number
  imageUrl: string
  status: "disponivel" | "reservado"
  batteryHealth?: number // Percentual de bateria (0-100), apenas para iPhones
}
