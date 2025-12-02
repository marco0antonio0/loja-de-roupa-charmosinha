import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CartDrawer } from "@/components/cart-drawer"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import { ProductCard } from "@/components/product-card"
import { getProductsByCategory, getCategories } from "@/lib/products"

interface CategoryPageProps {
  params: {
    categoria: string
  }
}

export async function generateStaticParams() {
  const categories = await getCategories()
  
  return categories
    .filter(cat => cat.toLowerCase() !== "geral")
    .map((categoria) => ({
      categoria: encodeURIComponent(categoria),
    }))
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const decodedCategory = decodeURIComponent(params.categoria)
  const products = await getProductsByCategory(decodedCategory)

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <Header />
      <main className="container mx-auto px-3 md:px-6 lg:px-8 py-6 md:py-12">
        <div className="mb-6 md:mb-10">
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent mb-2 md:mb-3">
            {decodedCategory}
          </h1>
          <p className="text-gray-600 text-sm md:text-base lg:text-lg">
            {products.length} {products.length === 1 ? "produto encontrado" : "produtos encontrados"}
          </p>
        </div>

        {products.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4 md:gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 md:py-24 bg-white rounded-2xl md:rounded-3xl shadow-sm">
            <div className="max-w-md mx-auto px-4">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-pink-100 to-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
                <span className="text-3xl md:text-4xl">🔍</span>
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">Nenhum produto encontrado</h3>
              <p className="text-sm md:text-base text-gray-600">
                Não encontramos produtos nesta categoria no momento.
              </p>
            </div>
          </div>
        )}
      </main>
      <Footer />
      <CartDrawer />
      <WhatsAppFloat />
    </div>
  )
}
