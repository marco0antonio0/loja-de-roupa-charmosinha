"use client"

import { useCart } from "@/contexts/cart-context"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { Plus, Minus, ShoppingBag, MessageCircle, Trash2 } from "lucide-react"
import Image from "next/image"
import { openWhatsApp } from "@/lib/whatsapp"

export function CartDrawer() {
  const { state, removeItem, updateQuantity, getTotalPrice, closeCart, clearCart } = useCart()

  const handleCheckout = () => {
    if (state.items.length === 0) return
    openWhatsApp(state.items, getTotalPrice())
    closeCart()
  }

  const totalItems = state.items.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <Sheet open={state.isOpen} onOpenChange={closeCart}>
      <SheetContent className="w-full sm:max-w-md flex flex-col bg-white">
        <SheetHeader className="pb-4 border-b">
          <SheetTitle className="flex items-center justify-between text-lg">
            <div className="flex items-center gap-2">
              <ShoppingBag className="h-5 w-5 text-pink-500" />
              <span>Carrinho</span>
            </div>
            {totalItems > 0 && <Badge className="bg-pink-500 text-white mr-10">{totalItems}</Badge>}
          </SheetTitle>
        </SheetHeader>

        {state.items.length === 0 ? (
          <div className="flex-1 flex items-center justify-center p-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto bg-gray-100 rounded-full flex items-center justify-center">
                <ShoppingBag className="h-8 w-8 text-gray-400" />
              </div>
              <div>
                <p className="font-medium text-gray-900 mb-1">Carrinho vazio</p>
                <p className="text-sm text-gray-500">Adicione produtos para começar</p>
              </div>
            </div>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto py-4 space-y-3">
              {state.items.map((item) => (
                <div key={`${item.id}-${item.size}`} className="flex gap-3 p-3 bg-gray-50 rounded-lg">
                  <div className="w-16 h-16 rounded-lg overflow-hidden bg-white flex-shrink-0">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      width={64}
                      height={64}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-medium text-sm text-gray-900 leading-tight">{item.name}</h3>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-6 w-6 p-0 text-gray-400 hover:text-red-500"
                        onClick={() => removeItem(item.id, item.size)}
                      >
                        <Trash2 className="h-3 w-3" />
                      </Button>
                    </div>

                    <div className="flex items-center gap-2 mb-2">
                      <span className="font-semibold text-pink-600">R$ {item.price.toFixed(2)}</span>
                      {item.size && (
                        <Badge variant="outline" className="text-xs">
                          {item.size}
                        </Badge>
                      )}
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1 bg-white rounded-md border">
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-7 w-7 p-0"
                          onClick={() => updateQuantity(item.id, item.size, item.quantity - 1)}
                          disabled={item.quantity <= 1}
                        >
                          <Minus className="h-3 w-3" />
                        </Button>
                        <span className="text-sm font-medium w-8 text-center">{item.quantity}</span>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-7 w-7 p-0"
                          onClick={() => updateQuantity(item.id, item.size, item.quantity + 1)}
                        >
                          <Plus className="h-3 w-3" />
                        </Button>
                      </div>
                      <span className="text-sm font-semibold text-gray-900">
                        R$ {(item.price * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t pt-4 space-y-3 px-5">
              <div className="bg-gray-50 rounded-lg p-3">
                <div className="flex items-center justify-between text-sm mb-1">
                  <span className="text-gray-600">
                    Subtotal ({totalItems} {totalItems === 1 ? "item" : "itens"})
                  </span>
                  <span className="font-medium">R$ {getTotalPrice().toFixed(2)}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-gray-900">Total:</span>
                  <span className="font-bold text-lg text-pink-600">R$ {getTotalPrice().toFixed(2)}</span>
                </div>
              </div>

              <Button className="w-full bg-pink-500 hover:bg-pink-600 text-white font-medium h-12" onClick={handleCheckout}>
                <MessageCircle className="h-4 w-4 mr-2" />
                Finalizar via WhatsApp
              </Button>

              <Button
                variant="outline"
                size="sm"
                onClick={clearCart}
                className="w-full text-gray-600 hover:text-red-500 hover:border-red-200 bg-transparent h-12"
              >
                <Trash2 className="h-4 w-4 mr-2" />
                Limpar carrinho
              </Button>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 mb-10">
                <p className="text-xs text-blue-700 text-center">
                  🚀 Você será redirecionada para o WhatsApp com os detalhes do pedido
                </p>
              </div>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  )
}
