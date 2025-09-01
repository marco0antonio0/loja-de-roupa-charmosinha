import { Phone, MessageCircle, Mail } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-foreground mb-8">Fale Conosco</h1>

      <div className="max-w-3xl mx-auto space-y-6">
        <div className="bg-card border border-border rounded-lg p-6">
          <h2 className="text-xl font-semibold text-foreground mb-4">Entre em Contato</h2>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Phone className="h-5 w-5 text-primary" />
              <span className="text-foreground">Telefone: +55 (11) 3456-7890</span>
            </div>
            <div className="flex items-center gap-3">
              <MessageCircle className="h-5 w-5 text-green-500" />
              <span className="text-foreground">WhatsApp: +55 (11) 99999-9999</span>
            </div>
            {/* <div className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-primary" />
              <span className="text-foreground">Email: ola@charmosinha.com</span>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  )
}
