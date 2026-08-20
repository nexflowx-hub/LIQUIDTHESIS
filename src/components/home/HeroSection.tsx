'use client'

import Image from 'next/image'
import { COMMERCE_MODE } from '@/data/commerce'
import { Badge } from '@/components/ui/badge'

interface HeroSectionProps {
  onOpenCart: () => void
}

export default function HeroSection({ onOpenCart: _onOpenCart }: HeroSectionProps) {
  return (
    <section className="relative w-full h-[60vh] min-h-[420px] sm:h-[65vh] sm:min-h-[480px] md:h-[80vh]">
      <Image
        src="/images/hero/hero-bg.jpg"
        alt="Azeites, Vinhos e Sabores de Portugal"
        fill
        priority
        className="object-cover"
      />

      <div className="hero-overlay absolute inset-0" />

      {COMMERCE_MODE === 'demo' && (
        <div className="absolute top-4 right-4 z-20 sm:top-6 sm:right-6">
          <Badge
            variant="outline"
            className="bg-burgundy/80 text-cream border-burgundy text-[10px] sm:text-xs"
          >
            Catálogo Demonstrativo
          </Badge>
        </div>
      )}

      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 sm:px-6 text-center">
        <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-bold leading-tight max-w-3xl">
          Azeites, Vinhos e Sabores de Portugal
        </h1>
        <p className="text-cream/80 text-sm sm:text-base md:text-lg max-w-2xl mt-3 sm:mt-4">
          Uma seleção portuguesa de azeites, vinhos e produtos gourmet para
          consumidores, restaurantes, hotéis, lojas gourmet e importadores.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-6 sm:mt-8 w-full max-w-xs sm:max-w-none">
          <button className="btn-gold text-dark font-semibold px-6 sm:px-8 py-2.5 sm:py-3 rounded-md text-sm sm:text-base">
            Explorar Loja
          </button>
          <button className="bg-burgundy text-white font-semibold px-6 sm:px-8 py-2.5 sm:py-3 rounded-md hover:bg-burgundy-dark transition-colors text-sm sm:text-base">
            Sou Profissional
          </button>
        </div>
      </div>
    </section>
  )
}