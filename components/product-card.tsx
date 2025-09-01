"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Heart, ShoppingCart } from "lucide-react"
import { useState } from "react"
import { useCart } from "@/contexts/cart-context"

interface Product {
  id: number
  name: string
  price: number
  image: string
  category: string
  sizes: string[]
}

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
    <Card className="group overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="relative aspect-[3/4] overflow-hidden">
        <Image
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-2 right-2 bg-background/80 hover:bg-background"
          onClick={() => setIsLiked(!isLiked)}
        >
          <Heart className={`h-4 w-4 ${isLiked ? "fill-red-500 text-red-500" : ""}`} />
        </Button>
        <Badge className="absolute top-2 left-2 bg-primary text-primary-foreground">{product.category}</Badge>
      </div>

      <CardContent className="p-4">
        <h3 className="font-semibold text-lg text-foreground mb-2 text-balance">{product.name}</h3>
        <p className="text-2xl font-bold text-primary mb-4">${product.price}</p>

        <div className="mb-4">
          <p className="text-sm text-muted-foreground mb-2">Size:</p>
          <div className="flex flex-wrap gap-2">
            {product.sizes.map((size) => (
              <Button
                key={size}
                variant={selectedSize === size ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedSize(size)}
                className="h-8 w-12 text-xs"
              >
                {size}
              </Button>
            ))}
          </div>
        </div>

        <Button className="w-full" onClick={handleAddToCart} disabled={!selectedSize}>
          <ShoppingCart className="h-4 w-4 mr-2" />
          Add to Cart
        </Button>
      </CardContent>
    </Card>
  )
}
