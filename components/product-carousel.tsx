"use client"
import { ProductCard } from "@/components/product-card"
import { type Product } from "@/lib/products"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

interface ProductCarouselProps {
  products: Product[]
  title: string
  category: string
}

export function ProductCarousel({ products, title, category }: ProductCarouselProps) {
  if (products.length === 0) return null

  return (
    <section className="py-6 md:py-10 px-3 md:px-4">
      <div className="container mx-auto">
        <div className="flex items-center justify-between mb-4 md:mb-8">
          <div>
            <h2 className="text-xl md:text-2xl lg:text-4xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent mb-1">
              {title}
            </h2>
            <p className="text-gray-600 text-xs md:text-sm">Explore nossa coleção</p>
          </div>
          <a
            href={`/categoria/${encodeURIComponent(category)}`}
            className="text-xs md:text-sm lg:text-base font-medium text-pink-600 hover:text-purple-600 flex items-center gap-1 md:gap-2 group transition-colors"
          >
            <span className="hidden sm:inline">Ver todos</span>
            <span className="sm:hidden">Ver +</span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-3 md:-ml-4">
            {products.map((product) => (
              <CarouselItem key={product.id} className="pl-3 md:pl-4 basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5">
                <ProductCard product={product} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex -left-4 h-12 w-12 bg-white shadow-lg hover:shadow-xl border-0 hover:scale-110 transition-all" />
          <CarouselNext className="hidden md:flex -right-4 h-12 w-12 bg-white shadow-lg hover:shadow-xl border-0 hover:scale-110 transition-all" />
        </Carousel>
      </div>
    </section>
  )
}
