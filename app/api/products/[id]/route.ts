import { NextResponse } from "next/server"
import { revalidatePath } from "next/cache"
import { getProduct, updateProduct, deleteProduct } from "@/lib/products"

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params
  const product = getProduct(id)
  
  if (!product) {
    return NextResponse.json(
      { error: "Produto nao encontrado" },
      { status: 404 }
    )
  }

  return NextResponse.json(product)
}

export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    const body = await request.json()
    
    const updated = updateProduct(id, {
      brand: body.brand,
      model: body.model,
      storage: body.storage,
      condition: body.condition,
      price: body.price !== undefined ? Number(body.price) : undefined,
      imageUrl: body.imageUrl,
      status: body.status,
    })

    if (!updated) {
      return NextResponse.json(
        { error: "Produto nao encontrado" },
        { status: 404 }
      )
    }

    // Revalidar as páginas que usam dados de produtos
    revalidatePath("/estoque")
    revalidatePath("/admin")
    revalidatePath("/api/products")

    return NextResponse.json(updated)
  } catch {
    return NextResponse.json(
      { error: "Erro ao atualizar produto" },
      { status: 500 }
    )
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params
  const deleted = deleteProduct(id)

  if (!deleted) {
    return NextResponse.json(
      { error: "Produto nao encontrado" },
      { status: 404 }
    )
  }

  // Revalidar as páginas que usam dados de produtos
  revalidatePath("/estoque")
  revalidatePath("/admin")
  revalidatePath("/api/products")

  return NextResponse.json({ success: true })
}
