import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import "./globals.css"
import { CartProvider } from "@/contexts/cart-context"

 
export const metadata: Metadata = {
 
  metadataBase: new URL("https://charmosinha.netlify.app"), 

  title: "Charmosinha | Moda com Preço Baixo em Belém, PA",
  icons: {
    icon: '/Gemini_Generated_Image_7hfbu07hfbu07hfb 1.png',
  },
  description: "Descubra a Charmosinha, sua nova loja de roupas em Belém do Pará! Moda feminina, masculina e infantil com os melhores preços da cidade. Qualidade e estilo que cabem no seu bolso.",
  keywords: ["roupas em belém", "moda barata", "loja de roupas pará", "charmosinha", "promoção de roupas", "moda feminina", "moda masculina", "moda infantil", "preço baixo"],
  
  openGraph: {
    title: "Charmosinha | Moda com Preço Baixo em Belém, PA",
    description: "Estilo e economia andam juntos na Charmosinha! As melhores ofertas de moda em Belém.",
    url: "https://charmosinha.netlify.app",  
    siteName: "Charmosinha",
    images: [
      {
        url: '/image-preview.png',  
        width: 1200,
        height: 630,
        alt: "Preview da loja Charmosinha - Moda com Preço Baixo em Belém",
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },

 
  twitter: {
    card: 'summary_large_image',
    title: "Charmosinha | Moda com Preço Baixo em Belém, PA",
    description: "Cansado de pagar caro? Venha para a Charmosinha em Belém e renove seu guarda-roupa gastando pouco!",
    images: ['/image-preview.png'],  
  },

 
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">  
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  )
}