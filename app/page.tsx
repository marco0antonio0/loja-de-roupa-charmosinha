import { Header } from "@/components/header"
import { ProductGrid } from "@/components/product-grid"
import { Hero } from "@/components/hero"
import { Footer } from "@/components/footer"
import { CartDrawer } from "@/components/cart-drawer"
import { WhatsAppFloat } from "@/components/whatsapp-float"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <main className="container mx-auto px-4 py-8">
        <ProductGrid />
      </main>
      <Footer />
      <CartDrawer />
      <WhatsAppFloat />
    </div>
  )
}
