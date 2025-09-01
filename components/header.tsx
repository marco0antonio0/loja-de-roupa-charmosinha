import Link from "next/link"
import { Search, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { CartButton } from "@/components/cart-button"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-full bg-primary"></div>
            <span className="text-xl font-bold text-foreground">Charmosinha</span>
          </Link>
        </div>

        <div className="flex items-center gap-4 scale-[1.2] mt-3">
          <CartButton/>
        </div>
      </div>
    </header>
  )
}
