import { NextResponse } from "next/server"
import { revalidatePath } from "next/cache"
import { getProducts, addProduct } from "@/lib/products"

export async function GET() {
  const products = getProducts()
  return NextResponse.json(products)
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    
    if (!body.brand || !body.model || !body.storage || !body.price) {
      return NextResponse.json(
        { error: "Campos obrigatorios: brand, model, storage, price" },
        { status: 400 }
      )
    }

    const newProduct = addProduct({
      brand: body.brand,
      model: body.model,
      storage: body.storage,
      condition: body.condition || "Seminovo",
      price: Number(body.price),
      imageUrl: body.imageUrl || "/products/placeholder.jpg",
      status: body.status || "disponivel",
    })

    // Revalidar as páginas que usam dados de produtos
    revalidatePath("/estoque")
    revalidatePath("/admin")
    revalidatePath("/api/products")

    return NextResponse.json(newProduct, { status: 201 })
  } catch {
    return NextResponse.json(
      { error: "Erro ao criar produto" },
      { status: 500 }
    )
  }
}
