"use client"

import Image from "next/image"
import { useState } from "react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"

const carouselImages = [
  "/carrosel/Gemini_Generated_Image_gphmsggphmsggphm.png",
  "/carrosel/WhatsApp Image 2025-12-02 at 19.02.31.jpeg",
]

export function Hero() {
  const [plugin] = useState(() => 
    Autoplay({ delay: 5000, stopOnInteraction: false, stopOnMouseEnter: true })
  )

  return (
    <section className="relative w-full bg-gradient-to-br from-pink-50/30 via-white to-purple-50/30 py-3 md:py-6">
      <Carousel
        opts={{
          align: "center",
          loop: true,
        }}
        plugins={[plugin]}
        className="w-full max-w-[1600px] mx-auto"
      >
        <CarouselContent>
          {carouselImages.map((image, index) => (
            <CarouselItem key={index}>
              <div className="relative w-full aspect-[16/9] sm:aspect-[2/1] md:aspect-[3/1] overflow-hidden rounded-xl md:rounded-2xl mx-2 md:mx-4 shadow-xl md:shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent z-10"></div>
                
                {/* Badges Promocionais */}
                {index === 0 && (
                  <div className="absolute top-4 left-4 md:top-8 md:left-8 z-20 space-y-2">
                    <div className="bg-red-500 text-white px-4 md:px-6 py-2 md:py-3 rounded-full font-bold text-sm md:text-xl shadow-2xl animate-bounce">
                      MEGA PROMOÇÃO
                    </div>
                    <div className="bg-yellow-400 text-black px-4 md:px-6 py-2 md:py-3 rounded-full font-bold text-xs md:text-lg shadow-xl">
                      ATÉ 50% OFF
                    </div>
                  </div>
                )}
                
                <Image
                  src={image}
                  alt={`Banner ${index + 1}`}
                  fill
                  className="object-cover hover:scale-[1.02] transition-transform duration-1000 ease-out"
                  priority={index === 0}
                  quality={95}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1600px"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-6 md:left-8 h-12 w-12 md:h-14 md:w-14 bg-white/95 hover:bg-white shadow-2xl border-0 hover:scale-110 transition-all" />
        <CarouselNext className="right-6 md:right-8 h-12 w-12 md:h-14 md:w-14 bg-white/95 hover:bg-white shadow-2xl border-0 hover:scale-110 transition-all" />
      </Carousel>
      
      {/* Indicadores de slide */}
      <div className="flex justify-center gap-2 mt-6 pb-2">
        {carouselImages.map((_, index) => (
          <div key={index} className="h-2 w-2 rounded-full bg-pink-400/60 hover:bg-pink-500 transition-colors cursor-pointer"></div>
        ))}
      </div>
    </section>
  )
}
