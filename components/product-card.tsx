"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Heart, ShoppingCart } from "lucide-react"
import { useState } from "react"
import { useCart } from "@/contexts/cart-context"
import type { Product } from "@/lib/products"

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const [isLiked, setIsLiked] = useState(false)
  const [selectedSize, setSelectedSize] = useState<string>("")
  const { addItem, openCart } = useCart()

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert("Please select a size first")
      return
    }

    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      size: selectedSize,
    })

    // Open cart drawer to show the added item
    openCart()

    // Reset size selection
    setSelectedSize("")
  }

  return (
    <Card className="group overflow-hidden border border-gray-100 hover:border-pink-300 shadow-sm hover:shadow-xl transition-all duration-300 bg-white rounded-xl flex flex-col h-full">
      <div className="relative aspect-[3/4] overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 flex-shrink-0">
        <Image
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
        />
        {/* Badge Frete Grátis */}
        <div className="absolute top-2 left-2 md:top-3 md:left-3 bg-green-500 text-white px-2 py-0.5 rounded text-[9px] md:text-[10px] font-bold shadow-md">
          FRETE GRÁTIS
        </div>
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-2 right-2 md:top-3 md:right-3 bg-white/95 backdrop-blur-sm hover:bg-white rounded-full h-8 w-8 md:h-10 md:w-10 shadow-md hover:shadow-lg transition-all"
          onClick={() => setIsLiked(!isLiked)}
        >
          <Heart className={`h-4 w-4 md:h-5 md:w-5 transition-all ${isLiked ? "fill-red-500 text-red-500 scale-110" : "text-gray-500"}`} />
        </Button>
        {product.category && (
          <Badge className="absolute bottom-2 left-2 md:bottom-3 md:left-3 bg-black/70 backdrop-blur-sm text-white border-0 px-2 py-0.5 md:px-3 md:py-1 text-[10px] md:text-xs font-medium">
            {product.category}
          </Badge>
        )}
      </div>

      <CardContent className="p-3 md:p-5 flex flex-col flex-grow">
        <h3 className="font-semibold text-sm md:text-base text-gray-800 mb-2 md:mb-3 line-clamp-2">{product.name}</h3>
        <div className="mb-1">
          <p className="text-lg md:text-2xl font-bold text-black">R$ {Number(product.price).toFixed(2)}</p>
        </div>
        <p className="text-[10px] md:text-xs text-green-600 font-semibold mb-3 md:mb-4">
          3x sem juros de R$ {(Number(product.price) / 3).toFixed(2)}
        </p>

        {product.sizes && product.sizes.length > 0 && (
          <div className="mb-3 md:mb-4">
            <p className="text-[10px] md:text-xs font-medium text-gray-600 mb-2">Tamanho:</p>
            <div className="flex flex-wrap gap-1.5 md:gap-2">
              {product.sizes.map((size) => (
                <Button
                  key={size}
                  variant={selectedSize === size ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedSize(size)}
                  className={`h-7 w-11 md:h-9 md:w-14 text-xs md:text-sm font-medium rounded-lg transition-all ${
                    selectedSize === size 
                      ? "bg-gradient-to-r from-pink-500 to-purple-500 text-white border-0 shadow-md" 
                      : "bg-white text-gray-700 border-gray-300 hover:border-pink-400 hover:text-pink-600"
                  }`}
                >
                  {size}
                </Button>
              ))}
            </div>
          </div>
        )}

        <Button 
          className="w-full h-9 md:h-11 bg-black hover:bg-gray-900 text-white font-medium rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed text-xs md:text-sm mt-auto flex items-center justify-center gap-1 md:gap-2" 
          onClick={handleAddToCart} 
          disabled={!selectedSize}
        >
          <ShoppingCart className="h-3 w-3 md:h-4 md:w-4 flex-shrink-0" />
          <span className="hidden sm:inline truncate">Adicionar ao Carrinho</span>
          <span className="sm:hidden truncate">Adicionar</span>
        </Button>
      </CardContent>
    </Card>
  )
}
