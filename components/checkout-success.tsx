"use client"

import { CheckCircle, MessageCircle, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { openWhatsAppGeneral } from "@/lib/whatsapp"

interface CheckoutSuccessProps {
  onContinueShopping: () => void
}

export function CheckoutSuccess({ onContinueShopping }: CheckoutSuccessProps) {
  const handleContactSupport = () => {
    openWhatsAppGeneral("Hello! I just placed an order and have a question about my purchase.")
  }

  return (
    <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="mx-auto mb-4 h-12 w-12 rounded-full bg-green-100 flex items-center justify-center">
            <CheckCircle className="h-6 w-6 text-green-600" />
          </div>
          <CardTitle className="text-xl">Order Sent Successfully!</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-center">
          <p className="text-muted-foreground">
            Your order details have been sent to our WhatsApp. Our sales team will contact you shortly to confirm your
            order and arrange payment and delivery.
          </p>

          <div className="space-y-2">
            <Button className="w-full" onClick={onContinueShopping}>
              <ArrowLeft className="h-4 w-4 mr-2" />
              Continue Shopping
            </Button>

            <Button variant="outline" className="w-full bg-transparent" onClick={handleContactSupport}>
              <MessageCircle className="h-4 w-4 mr-2" />
              Contact Support
            </Button>
          </div>

          <p className="text-xs text-muted-foreground">
            Expected response time: Within 30 minutes during business hours
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
