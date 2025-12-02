import type { CartItem } from "@/contexts/cart-context"
import { getStoreInfo } from "@/lib/store-info"

let cachedWhatsAppNumber = "5591984837847" // fallback number

// Initialize WhatsApp number from store info
getStoreInfo().then((storeInfo) => {
  if (storeInfo?.whatsapp) {
    cachedWhatsAppNumber = `55${storeInfo.whatsapp}`
  }
})

export function generateWhatsAppMessage(items: CartItem[], totalPrice: number): string {
  const greeting = "🛍️ *MEU CARRINHO DE COMPRAS*"

  const itemsList = items
    .map((item, index) => {
      const itemTotal = item.price * item.quantity
      return `${index + 1}. 👕 *${item.name}*\n   📏 Tamanho: ${item.size}\n   📦 Quantidade: ${item.quantity}x\n   💰 Valor: R$ ${itemTotal.toFixed(2)}`
    })
    .join("\n\n")

  const separator = "\n" + "─".repeat(30) + "\n"
  const total = `💵 *TOTAL GERAL: R$ ${totalPrice.toFixed(2)}*`
  const footer =
    "\n\n✨ Gostaria de finalizar esta compra!\n\n🚚 Por favor, me informe sobre:\n• Formas de pagamento\n• Prazo de entrega\n• Frete para minha região\n\nObrigada! 😊"

  return greeting + "\n\n" + itemsList + separator + total + footer
}

export function generateWhatsAppURL(message: string): string {
  const encodedMessage = encodeURIComponent(message)
  const phoneNumber = cachedWhatsAppNumber.replace(/\D/g, '') // Remove non-digits
  return `https://wa.me/${phoneNumber}?text=${encodedMessage}`
}

export function openWhatsApp(items: CartItem[], totalPrice: number): void {
  const message = generateWhatsAppMessage(items, totalPrice)
  const whatsappURL = generateWhatsAppURL(message)
  window.open(whatsappURL, "_blank")
}

export function openWhatsAppGeneral(message?: string): void {
  const defaultMessage = "Olá! Tenho uma dúvida sobre seus produtos."
  const finalMessage = message || defaultMessage
  const whatsappURL = generateWhatsAppURL(finalMessage)
  window.open(whatsappURL, "_blank")
}
