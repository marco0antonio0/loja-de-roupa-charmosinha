"use client"
import Link from "next/link"
import Image from "next/image"
import { ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { CartButton } from "@/components/cart-button"
import { getCategories } from "@/lib/products"
import { useEffect, useState } from "react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function Header() {
  const [categories, setCategories] = useState<string[]>([])

  useEffect(() => {
    async function fetchCategories() {
      try {
        const cats = await getCategories()
        console.log("Categorias carregadas:", cats)
        setCategories(cats)
      } catch (error) {
        console.error("Erro ao carregar categorias:", error)
      }
    }
    fetchCategories()
  }, [])

  return (
    <>
      {/* Banner Promocional */}
      <div className="bg-black text-white text-center py-2 px-3 text-xs md:text-sm font-semibold">
        FRETE GRÁTIS em compras acima de R$ 149 para Belém, Ananindeua e Marituba
      </div>
      
      <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md shadow-sm">
        <div className="container mx-auto flex h-16 md:h-20 items-center justify-between px-3 md:px-6">
          <div className="flex items-center gap-3 md:gap-8">
            <Link href="/" className="flex items-center space-x-2 md:space-x-3 group">
              <div className="h-8 w-8 md:h-10 md:w-10 rounded-lg overflow-hidden group-hover:scale-110 transition-transform relative">
                <Image
                  src="/Gemini_Generated_Image_7hfbu07hfbu07hfb 1.png"
                  alt="Charmosinha Logo"
                  fill
                  className="object-cover"
                />
              </div>
              <span className="text-lg md:text-2xl font-bold text-black">Charmosinha</span>
            </Link>

          <nav className="flex items-center gap-2 md:gap-6">
            <Link 
              href="/" 
              className="hidden md:block text-sm font-medium text-gray-700 hover:text-pink-600 transition-colors"
            >
              Início
            </Link>

            {categories.length > 0 && (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button 
                    variant="ghost" 
                    className="text-xs md:text-sm font-medium text-gray-700 hover:text-pink-600 hover:bg-transparent px-2 md:px-3 h-8 md:h-10"
                  >
                    Categorias
                    <ChevronDown className="ml-1 h-3 w-3 md:h-4 md:w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="w-56 bg-white shadow-lg">
                  {categories.map((category) => (
                    <DropdownMenuItem key={category} asChild>
                      <Link
                        href={category.toLowerCase() === "geral" ? "/" : `/categoria/${encodeURIComponent(category)}`}
                        className="cursor-pointer hover:bg-gradient-to-br hover:from-pink-50 hover:to-purple-50 transition-all"
                      >
                        <div className="flex flex-col py-2">
                          <span className="font-semibold text-gray-800">{category}</span>
                          <span className="text-xs text-gray-500">Ver coleção</span>
                        </div>
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            )}
          </nav>
        </div>

        <div className="flex items-center gap-2 md:gap-4">
          <CartButton/>
        </div>
      </div>
    </header>
    </>
  )
}
