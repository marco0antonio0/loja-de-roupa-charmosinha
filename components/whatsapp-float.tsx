"use client"

import { MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { openWhatsAppGeneral } from "@/lib/whatsapp"

export function WhatsAppFloat() {
  const handleClick = () => {
    openWhatsAppGeneral("Olá! Gostaria de saber mais sobre seus produtos e serviços.")
  }

  return (
    <Button
      onClick={handleClick}
      className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-lg hover:shadow-xl transition-shadow z-40 bg-green-500 hover:bg-green-600 text-white"
      size="icon"
    >
      <MessageCircle className="h-6 w-6" />
      <span className="sr-only">Chat on WhatsApp</span>
    </Button>
  )
}
