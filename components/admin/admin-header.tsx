import Link from "next/link"
import { ArrowLeft, Settings, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function AdminHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-4">
          <Link href="/">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Voltar à Loja
            </Button>
          </Link>

          <div className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-full overflow-hidden">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Untitled-l84gj6Avd9kqDEdJoh7x12a6ZdYb69.png"
                alt="Charmosinha Logo"
                width={32}
                height={32}
                className="object-cover"
              />
            </div>
            <span className="text-xl font-bold text-foreground">Charmosinha Admin</span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon">
            <Settings className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <User className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  )
}
