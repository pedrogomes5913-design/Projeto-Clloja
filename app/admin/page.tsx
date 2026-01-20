"use client"

import React from "react"

import { useState } from "react"
import useSWR, { mutate } from "swr"
import type { Product } from "@/lib/types"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Plus, Pencil, Trash2, Package } from "lucide-react"
import Image from "next/image"

const fetcher = (url: string) => fetch(url).then((res) => res.json())

export default function AdminPage() {
  const { data: products, error, isLoading } = useSWR<Product[]>("/api/products", fetcher)
  const [isAddOpen, setIsAddOpen] = useState(false)
  const [editingProduct, setEditingProduct] = useState<Product | null>(null)

  const handleDelete = async (id: string) => {
    if (!confirm("Tem certeza que deseja excluir este produto?")) return

    await fetch(`/api/products/${id}`, { method: "DELETE" })
    mutate("/api/products")
  }

  const handleStatusToggle = async (product: Product) => {
    const newStatus = product.status === "disponivel" ? "reservado" : "disponivel"
    await fetch(`/api/products/${product.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status: newStatus }),
    })
    mutate("/api/products")
  }

  if (isLoading) {
    return (
      <div className="py-12 md:py-20 bg-background min-h-screen">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">Carregando...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="py-12 md:py-20 bg-background min-h-screen">
        <div className="container mx-auto px-4 text-center">
          <p className="text-destructive">Erro ao carregar produtos</p>
        </div>
      </div>
    )
  }

  return (
    <div className="py-12 md:py-20 bg-background min-h-screen">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Painel Administrativo</h1>
            <p className="text-muted-foreground">Gerencie o estoque de produtos</p>
          </div>
          <Dialog open={isAddOpen} onOpenChange={setIsAddOpen}>
            <DialogTrigger asChild>
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full">
                <Plus className="w-4 h-4 mr-2" />
                Adicionar Produto
              </Button>
            </DialogTrigger>
            <DialogContent className="bg-card">
              <DialogHeader>
                <DialogTitle className="text-card-foreground">Novo Produto</DialogTitle>
              </DialogHeader>
              <ProductForm
                onSuccess={() => {
                  setIsAddOpen(false)
                  mutate("/api/products")
                }}
              />
            </DialogContent>
          </Dialog>
        </div>

        {products && products.length > 0 ? (
          <div className="bg-card rounded-2xl shadow-sm border border-border overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-muted">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Produto</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Armazenamento</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Condicao</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Preco</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Status</th>
                    <th className="px-6 py-4 text-right text-sm font-semibold text-foreground">Acoes</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {products.map((product) => (
                    <tr key={product.id} className="hover:bg-muted/50 transition-colors">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 rounded-lg overflow-hidden bg-muted relative shrink-0">
                            <Image
                              src={product.imageUrl || "/placeholder.svg"}
                              alt={product.model}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div>
                            <p className="font-medium text-card-foreground">{product.brand}</p>
                            <p className="text-sm text-muted-foreground">{product.model}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-card-foreground">{product.storage}</td>
                      <td className="px-6 py-4 text-muted-foreground text-sm">{product.condition}</td>
                      <td className="px-6 py-4 font-semibold text-primary">
                        R$ {product.price.toLocaleString("pt-BR")}
                      </td>
                      <td className="px-6 py-4">
                        <button
                          onClick={() => handleStatusToggle(product)}
                          className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                            product.status === "disponivel"
                              ? "bg-green-100 text-green-700 hover:bg-green-200"
                              : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                          }`}
                        >
                          {product.status === "disponivel" ? "Disponivel" : "Reservado"}
                        </button>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center justify-end gap-2">
                          <Dialog
                            open={editingProduct?.id === product.id}
                            onOpenChange={(open) => !open && setEditingProduct(null)}
                          >
                            <DialogTrigger asChild>
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={() => setEditingProduct(product)}
                                className="rounded-full bg-transparent"
                              >
                                <Pencil className="w-4 h-4" />
                              </Button>
                            </DialogTrigger>
                            <DialogContent className="bg-card">
                              <DialogHeader>
                                <DialogTitle className="text-card-foreground">Editar Produto</DialogTitle>
                              </DialogHeader>
                              {editingProduct && (
                                <ProductForm
                                  product={editingProduct}
                                  onSuccess={() => {
                                    setEditingProduct(null)
                                    mutate("/api/products")
                                  }}
                                />
                              )}
                            </DialogContent>
                          </Dialog>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleDelete(product.id)}
                            className="rounded-full text-destructive hover:text-destructive hover:bg-destructive/10 bg-transparent"
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ) : (
          <div className="text-center py-20 bg-card rounded-2xl border border-border">
            <Package className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
            <p className="text-muted-foreground text-lg">Nenhum produto cadastrado</p>
            <p className="text-muted-foreground">Clique em {"Adicionar Produto"} para comecar</p>
          </div>
        )}
      </div>
    </div>
  )
}

function ProductForm({
  product,
  onSuccess,
}: {
  product?: Product
  onSuccess: () => void
}) {
  const [formData, setFormData] = useState({
    brand: product?.brand || "",
    model: product?.model || "",
    storage: product?.storage || "",
    condition: product?.condition || "Seminovo - Excelente",
    price: product?.price?.toString() || "",
    imageUrl: product?.imageUrl || "",
    status: product?.status || "disponivel",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isUploading, setIsUploading] = useState(false)
  const [imagePreview, setImagePreview] = useState<string | null>(product?.imageUrl || null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const url = product ? `/api/products/${product.id}` : "/api/products"
      const method = product ? "PUT" : "POST"

      const response = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          price: Number(formData.price),
        }),
      })

      if (response.ok) {
        onSuccess()
      }
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    setIsUploading(true)
    try {
      const formDataToSend = new FormData()
      formDataToSend.append("file", file)

      const response = await fetch("/api/upload", {
        method: "POST",
        body: formDataToSend,
      })

      if (response.ok) {
        const data = await response.json()
        setFormData({ ...formData, imageUrl: data.imageUrl })
        setImagePreview(data.imageUrl)
      } else {
        const error = await response.json()
        alert(error.error || "Erro ao fazer upload")
      }
    } catch (error) {
      alert("Erro ao fazer upload da imagem")
    } finally {
      setIsUploading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="brand" className="text-card-foreground">Marca</Label>
          <Input
            id="brand"
            value={formData.brand}
            onChange={(e) => setFormData({ ...formData, brand: e.target.value })}
            placeholder="Apple, Samsung..."
            required
            className="bg-background"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="model" className="text-card-foreground">Modelo</Label>
          <Input
            id="model"
            value={formData.model}
            onChange={(e) => setFormData({ ...formData, model: e.target.value })}
            placeholder="iPhone 13, Galaxy S22..."
            required
            className="bg-background"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="storage" className="text-card-foreground">Armazenamento</Label>
          <Input
            id="storage"
            value={formData.storage}
            onChange={(e) => setFormData({ ...formData, storage: e.target.value })}
            placeholder="128GB, 256GB..."
            required
            className="bg-background"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="price" className="text-card-foreground">Preco (R$)</Label>
          <Input
            id="price"
            type="number"
            value={formData.price}
            onChange={(e) => setFormData({ ...formData, price: e.target.value })}
            placeholder="2499"
            required
            className="bg-background"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="condition" className="text-card-foreground">Condicao</Label>
        <Select
          value={formData.condition}
          onValueChange={(value) => setFormData({ ...formData, condition: value })}
        >
          <SelectTrigger className="bg-background">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Seminovo - Excelente">Seminovo - Excelente</SelectItem>
            <SelectItem value="Seminovo - Bom">Seminovo - Bom</SelectItem>
            <SelectItem value="Seminovo - Regular">Seminovo - Regular</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="image" className="text-card-foreground">Imagem do Produto</Label>
        <div className="flex flex-col gap-3">
          <div className="relative">
            <input
              id="image"
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              disabled={isUploading}
              className="block w-full text-sm text-muted-foreground
                file:mr-4 file:py-2 file:px-4
                file:rounded-full file:border-0
                file:text-sm file:font-semibold
                file:bg-primary file:text-primary-foreground
                hover:file:bg-primary/90
                disabled:opacity-50 disabled:cursor-not-allowed"
            />
            {isUploading && <p className="text-sm text-muted-foreground mt-1">Enviando...</p>}
          </div>
          {imagePreview && (
            <div className="relative w-24 h-24 rounded-lg overflow-hidden bg-muted border border-border">
              <Image
                src={imagePreview}
                alt="Preview"
                fill
                className="object-cover"
              />
            </div>
          )}
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="status" className="text-card-foreground">Status</Label>
        <Select
          value={formData.status}
          onValueChange={(value: "disponivel" | "reservado") =>
            setFormData({ ...formData, status: value })
          }
        >
          <SelectTrigger className="bg-background">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="disponivel">Disponivel</SelectItem>
            <SelectItem value="reservado">Reservado</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-full"
      >
        {isSubmitting ? "Salvando..." : product ? "Atualizar Produto" : "Adicionar Produto"}
      </Button>
    </form>
  )
}
