"use client"

import { MessageCircle, Phone, Mail } from "lucide-react"
import { useEffect, useState } from "react"
import { getStoreInfo, type StoreInfo } from "@/lib/store-info"

export function Footer() {
  const [storeInfo, setStoreInfo] = useState<StoreInfo | null>(null)

  useEffect(() => {
    getStoreInfo().then(setStoreInfo)
  }, [])

  return (
    <footer className="bg-card border-t border-border mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="h-8 w-8 rounded-full bg-primary"></div>
              <span className="text-xl font-bold text-foreground">Charmosinha</span>
            </div>
            <p className="text-muted-foreground text-sm mb-4">
              {storeInfo?.sobre ||
                "Sua parceira de confiança para moda feminina premium e experiência de compra personalizada."}
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2 text-muted-foreground">
                <MessageCircle className="h-4 w-4 text-green-500" />
                <span>WhatsApp: +55 {storeInfo?.whatsapp}</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>Telefone: +55 {storeInfo?.telefone}</span>
              </div>
              {/* <div className="flex items-center gap-2 text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span>Email: ola@charmosinha.com</span>
              </div> */}
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Conecte-se</h3>
            <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-4">
              <MessageCircle className="h-4 w-4 text-green-500" />
              <span>Converse conosco no WhatsApp</span>
            </div>
            <p className="text-xs text-muted-foreground mb-4">
              Finalize sua compra pelo WhatsApp para atendimento personalizado e suporte.
            </p>
            <div className="text-xs text-muted-foreground">
              <p className="font-medium mb-1">Horário de Funcionamento:</p>
              <p>Seg-Sex: 9:00 - 20:00</p>
              <p>Sáb-Dom: 10:00 - 18:00</p>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Como Comprar</h3>
            <div className="space-y-3 text-sm text-muted-foreground">
              <div className="flex items-start gap-2">
                <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center text-xs font-bold text-primary mt-0.5">
                  1
                </div>
                <span>Adicione os produtos ao carrinho</span>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center text-xs font-bold text-primary mt-0.5">
                  2
                </div>
                <span>Clique em "Finalizar via WhatsApp"</span>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center text-xs font-bold text-primary mt-0.5">
                  3
                </div>
                <span>Complete sua compra pelo WhatsApp</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2025 Charmosinha. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
