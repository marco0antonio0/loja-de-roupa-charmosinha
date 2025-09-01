"use client"

import { ShoppingBag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useCart } from "@/contexts/cart-context"

export function CartButton() {
  const { getTotalItems, toggleCart } = useCart()
  const itemCount = getTotalItems()

  return (
    <Button variant="ghost" size="icon" className="relative" onClick={toggleCart}>
      <ShoppingBag className="h-5 w-5" />
      {itemCount > 0 && (
        <Badge className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 text-xs">{itemCount}</Badge>
      )}
    </Button>
  )
}
