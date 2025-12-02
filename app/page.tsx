import { Header } from "@/components/header"
import { ProductCard } from "@/components/product-card"
import { ProductCarousel } from "@/components/product-carousel"
import { Hero } from "@/components/hero"
import { Footer } from "@/components/footer"
import { CartDrawer } from "@/components/cart-drawer"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import { getProducts, getCategories } from "@/lib/products"

export default async function HomePage() {
  const allProducts = await getProducts()
  const categories = await getCategories()
  
  const generalProducts = allProducts
  
  const otherCategories = categories.filter(cat => cat.toLowerCase() !== "geral")

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      
      {/* Benefícios Banner */}
      <section className="bg-gray-100 py-4 md:py-6">
        <div className="container mx-auto px-3 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-6">
            <div className="bg-white rounded-xl p-4 md:p-6 text-center shadow-md hover:shadow-lg transition-shadow">
              <div className="text-3xl md:text-4xl mb-2">🚚</div>
              <h3 className="font-bold text-sm md:text-base mb-1">Frete Grátis</h3>
              <p className="text-xs md:text-sm text-gray-600">Acima de R$ 149 em Belém, Ananindeua e Marituba</p>
            </div>
            <div className="bg-white rounded-xl p-4 md:p-6 text-center shadow-md hover:shadow-lg transition-shadow">
              <div className="text-3xl md:text-4xl mb-2">💳</div>
              <h3 className="font-bold text-sm md:text-base mb-1">Parcele sem juros</h3>
              <p className="text-xs md:text-sm text-gray-600">Em até 3x no cartão</p>
            </div>
            <div className="bg-white rounded-xl p-4 md:p-6 text-center shadow-md hover:shadow-lg transition-shadow">
              <div className="text-3xl md:text-4xl mb-2">🎉</div>
              <h3 className="font-bold text-sm md:text-base mb-1">Primeira Compra</h3>
              <p className="text-xs md:text-sm text-gray-600">10% OFF na sua primeira compra</p>
            </div>
          </div>
        </div>
      </section>
      
      <main className="container mx-auto px-3 md:px-6 lg:px-8 py-6 md:py-12">
        {/* Grid principal com produtos da categoria Geral */}
        <section className="py-6 md:py-12 px-3 md:px-6 bg-gradient-to-br from-gray-50 to-white rounded-2xl md:rounded-3xl shadow-sm">
          <div className="container mx-auto">
            <div className="flex items-center justify-between mb-6 md:mb-10">
              <div>
                <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent mb-1 md:mb-2">
                  Produtos em Destaque
                </h2>
                <p className="text-gray-600 text-xs md:text-sm lg:text-base">Descubra nossa seleção especial para você</p>
              </div>
            </div>

            {generalProducts.length > 0 ? (
              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4 md:gap-6">
                {generalProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <p className="text-center text-muted-foreground">Nenhum produto em destaque no momento.</p>
            )}
          </div>
        </section>

        {/* Carrosséis para outras categorias */}
        <div className="mt-8 md:mt-16 space-y-8 md:space-y-12">
          {otherCategories.map((category) => {
            const categoryProducts = allProducts.filter(p => p.category.toLowerCase() === category.toLowerCase())
            return (
              <ProductCarousel
                key={category}
                products={categoryProducts}
                title={category}
                category={category}
              />
            )
          })}
        </div>
      </main>
      <Footer />
      <CartDrawer />
      <WhatsAppFloat />
    </div>
  )
}
