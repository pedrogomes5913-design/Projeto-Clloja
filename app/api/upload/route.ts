import { NextResponse } from "next/server"
import { v2 as cloudinary } from "cloudinary"

// Validar que as variáveis de ambiente estão configuradas
if (!process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || !process.env.CLOUDINARY_API_KEY || !process.env.CLOUDINARY_API_SECRET) {
  console.error("Cloudinary environment variables not configured")
}

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
})

export async function POST(request: Request) {
  try {
    const formData = await request.formData()
    const file = formData.get("file") as File

    if (!file) {
      return NextResponse.json(
        { error: "Nenhum arquivo enviado" },
        { status: 400 }
      )
    }

    // Validar tipo de arquivo
    const validTypes = ["image/jpeg", "image/png", "image/webp", "image/jpg"]
    if (!validTypes.includes(file.type)) {
      return NextResponse.json(
        { error: "Tipo de arquivo inválido. Use JPG, PNG ou WebP" },
        { status: 400 }
      )
    }

    // Validar tamanho (máximo 5MB)
    if (file.size > 5 * 1024 * 1024) {
      return NextResponse.json(
        { error: "Arquivo muito grande. Máximo 5MB" },
        { status: 400 }
      )
    }

    // Converter arquivo para buffer
    const bytes = await file.arrayBuffer()
    const buffer = Buffer.from(bytes)
    const base64 = buffer.toString("base64")
    const dataURI = `data:${file.type};base64,${base64}`

    // Upload para Cloudinary usando base64
    const uploadResult = await cloudinary.uploader.upload(dataURI, {
      folder: "produtos",
      resource_type: "auto",
    })

    return NextResponse.json(
      {
        imageUrl: uploadResult.secure_url,
        filename: uploadResult.public_id,
      },
      { status: 200 }
    )
  } catch (error) {
    console.error("Erro no upload:", error)
    return NextResponse.json(
      { error: "Erro ao fazer upload da imagem" },
      { status: 500 }
    )
  }
}
