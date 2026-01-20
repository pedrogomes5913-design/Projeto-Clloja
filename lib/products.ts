import type { Product } from "./types"

// Simple in-memory storage for products
// In production, this could be replaced with a database

let products: Product[] = [
  {
    id: "1",
    brand: "Apple",
    model: "iPhone 13",
    storage: "128GB",
    condition: "Seminovo - Excelente",
    price: 2899,
    imageUrl: "/products/iphone-13.jpg",
    status: "disponivel",
  },
  {
    id: "2",
    brand: "Apple",
    model: "iPhone 12",
    storage: "64GB",
    condition: "Seminovo - Bom",
    price: 2199,
    imageUrl: "/products/iphone-12.jpg",
    status: "disponivel",
  },
  {
    id: "3",
    brand: "Samsung",
    model: "Galaxy S22",
    storage: "128GB",
    condition: "Seminovo - Excelente",
    price: 2499,
    imageUrl: "/products/galaxy-s22.jpg",
    status: "disponivel",
  },
  {
    id: "4",
    brand: "Samsung",
    model: "Galaxy A54",
    storage: "256GB",
    condition: "Seminovo - Excelente",
    price: 1799,
    imageUrl: "/products/galaxy-a54.jpg",
    status: "reservado",
  },
  {
    id: "5",
    brand: "Xiaomi",
    model: "Redmi Note 12",
    storage: "128GB",
    condition: "Seminovo - Bom",
    price: 1199,
    imageUrl: "/products/redmi-note-12.jpg",
    status: "disponivel",
  },
  {
    id: "6",
    brand: "Motorola",
    model: "Edge 30",
    storage: "128GB",
    condition: "Seminovo - Excelente",
    price: 1599,
    imageUrl: "/products/moto-edge-30.jpg",
    status: "disponivel",
  },
]

export function getProducts(): Product[] {
  return products
}

export function getProduct(id: string): Product | undefined {
  return products.find((p) => p.id === id)
}

export function addProduct(product: Omit<Product, "id">): Product {
  const newProduct = {
    ...product,
    id: Date.now().toString(),
  }
  products.push(newProduct)
  return newProduct
}

export function updateProduct(id: string, updates: Partial<Product>): Product | null {
  const index = products.findIndex((p) => p.id === id)
  if (index === -1) return null
  products[index] = { ...products[index], ...updates }
  return products[index]
}

export function deleteProduct(id: string): boolean {
  const index = products.findIndex((p) => p.id === id)
  if (index === -1) return false
  products.splice(index, 1)
  return true
}
