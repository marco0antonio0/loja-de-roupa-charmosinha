"use client"

import Image from "next/image"
import { MessageCircle, Phone, Mail, Instagram, Facebook } from "lucide-react"
import { useEffect, useState } from "react"
import { getStoreInfo, type StoreInfo } from "@/lib/store-info"

export function Footer() {
  const [storeInfo, setStoreInfo] = useState<StoreInfo | null>(null)

  useEffect(() => {
    getStoreInfo().then(setStoreInfo)
  }, [])

  return (
    <footer className="bg-black text-gray-300 mt-12 md:mt-20">
      <div className="container mx-auto px-4 md:px-6 py-8 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          <div>
            <div className="flex items-center space-x-2 md:space-x-3 mb-4 md:mb-6">
              <div className="h-10 w-10 md:h-12 md:w-12 rounded-lg overflow-hidden relative">
                <Image
                  src="/Gemini_Generated_Image_7hfbu07hfbu07hfb 1.png"
                  alt="Charmosinha Logo"
                  fill
                  className="object-cover"
                />
              </div>
              <span className="text-xl md:text-2xl font-bold text-white">Charmosinha</span>
            </div>
            <p className="text-gray-400 text-xs md:text-sm mb-4 md:mb-6 leading-relaxed">
              {storeInfo?.sobre ||
                "Sua parceira de confiança para moda feminina premium e experiência de compra personalizada."}
            </p>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-3 text-gray-400 hover:text-green-400 transition-colors cursor-pointer">
                <MessageCircle className="h-5 w-5 text-green-500" />
                <span>WhatsApp: +55 {storeInfo?.whatsapp}</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400 hover:text-pink-400 transition-colors">
                <Phone className="h-5 w-5 text-pink-500" />
                <span>Telefone: +55 {storeInfo?.telefone}</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-white text-base md:text-lg mb-4 md:mb-6">Conecte-se</h3>
            <div className="flex items-center space-x-3 text-sm text-gray-400 mb-6 bg-green-500/10 rounded-lg p-4 border border-green-500/20">
              <MessageCircle className="h-5 w-5 text-green-500" />
              <span>Converse conosco no WhatsApp</span>
            </div>
            <p className="text-xs text-gray-400 mb-6 leading-relaxed">
              Finalize sua compra pelo WhatsApp para atendimento personalizado e suporte exclusivo.
            </p>
            <div className="text-sm text-gray-400 bg-gray-800/50 rounded-lg p-4 border border-gray-700">
              <p className="font-semibold text-white mb-3">Horário de Funcionamento:</p>
              <p className="mb-1">Seg-Sex: 9:00 - 20:00</p>
              <p>Sáb-Dom: 10:00 - 18:00</p>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-white text-base md:text-lg mb-4 md:mb-6">Como Comprar</h3>
            <div className="space-y-3 md:space-y-4 text-xs md:text-sm text-gray-400">
              <div className="flex items-start gap-3 md:gap-4 bg-gray-800/50 rounded-lg p-3 md:p-4 border border-gray-700 hover:border-pink-500/50 transition-colors">
                <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-gradient-to-br from-pink-500 to-purple-500 flex items-center justify-center text-xs md:text-sm font-bold text-white flex-shrink-0 mt-0.5 shadow-lg">
                  1
                </div>
                <span>Adicione os produtos ao carrinho</span>
              </div>
              <div className="flex items-start gap-3 md:gap-4 bg-gray-800/50 rounded-lg p-3 md:p-4 border border-gray-700 hover:border-pink-500/50 transition-colors">
                <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-gradient-to-br from-pink-500 to-purple-500 flex items-center justify-center text-xs md:text-sm font-bold text-white flex-shrink-0 mt-0.5 shadow-lg">
                  2
                </div>
                <span>Clique em "Finalizar via WhatsApp"</span>
              </div>
              <div className="flex items-start gap-3 md:gap-4 bg-gray-800/50 rounded-lg p-3 md:p-4 border border-gray-700 hover:border-pink-500/50 transition-colors">
                <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-gradient-to-br from-pink-500 to-purple-500 flex items-center justify-center text-xs md:text-sm font-bold text-white flex-shrink-0 mt-0.5 shadow-lg">
                  3
                </div>
                <span>Complete sua compra com atendimento personalizado</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 md:mt-12 pt-6 md:pt-8 text-center">
          <p className="text-sm text-gray-500">&copy; 2025 Charmosinha. Todos os direitos reservados.</p>
          <p className="text-xs text-gray-600 mt-2">Desenvolvido com 💖 para você</p>
        </div>
      </div>
    </footer>
  )
}
