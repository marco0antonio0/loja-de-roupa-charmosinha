"use client"

import { useState } from "react"
import { AdminHeader } from "@/components/admin/admin-header"
import { ProductList } from "@/components/admin/product-list"
import { ProductForm } from "@/components/admin/product-form"
import { AdminStats } from "@/components/admin/admin-stats"
import type { Product } from "@/lib/products"

export default function AdminPage() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const [isFormOpen, setIsFormOpen] = useState(false)

  const handleEditProduct = (product: Product) => {
    setSelectedProduct(product)
    setIsFormOpen(true)
  }

  const handleAddProduct = () => {
    setSelectedProduct(null)
    setIsFormOpen(true)
  }

  const handleCloseForm = () => {
    setIsFormOpen(false)
    setSelectedProduct(null)
  }

  return (
    <div className="min-h-screen bg-background">
      <AdminHeader />
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Gerenciamento de Produtos</h1>
          <p className="text-muted-foreground">Gerencie o catálogo de produtos da sua loja</p>
        </div>

        <AdminStats />

        <ProductList onEditProduct={handleEditProduct} onAddProduct={handleAddProduct} />

        {isFormOpen && <ProductForm product={selectedProduct} onClose={handleCloseForm} />}
      </main>
    </div>
  )
}
