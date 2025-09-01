"use client"

import { Button } from "@/components/ui/button"
import { useCart } from "@/contexts/cart-context"
import { useEffect, useState } from "react"
import { getStoreInfo, type StoreInfo } from "@/lib/store-info"

export function Hero() {
  const { toggleCart } = useCart()
  const [storeInfo, setStoreInfo] = useState<StoreInfo | null>(null)

  useEffect(() => {
    getStoreInfo().then(setStoreInfo)
  }, [])

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-pink-50 via-white to-purple-50 py-20 px-4">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-pink-200/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-200/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-pink-100/20 to-purple-100/20 rounded-full blur-3xl animate-spin-slow"></div>
      </div>

      <div className="container mx-auto text-center relative z-10">
        <div className="animate-fade-in-up">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent mb-6 text-balance">
            Descubra Seu Estilo Perfeito
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto text-pretty">
            {storeInfo?.sobre
              ? storeInfo.sobre.split("\n")[0] + " Finalize sua compra pelo WhatsApp para um atendimento personalizado."
              : "Navegue pela nossa coleção cuidadosamente selecionada de roupas premium. Finalize sua compra pelo WhatsApp para um atendimento personalizado."}
          </p>
          <Button
            size="lg"
            className="text-lg px-8 py-3 bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 transform hover:scale-105 transition-all duration-200 shadow-lg"
            onClick={toggleCart}
          >
            Ver Carrinho
          </Button>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes spin-slow {
          from {
            transform: translate(-50%, -50%) rotate(0deg);
          }
          to {
            transform: translate(-50%, -50%) rotate(360deg);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out;
        }
        
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>
    </section>
  )
}
