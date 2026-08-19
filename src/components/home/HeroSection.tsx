'use client'

import Image from 'next/image'
import { COMMERCE_MODE } from '@/data/commerce'
import { Badge } from '@/components/ui/badge'

interface HeroSectionProps {
  onOpenCart: () => void
}

export default function HeroSection({ onOpenCart: _onOpenCart }: HeroSectionProps) {
  return (
    <section className="relative w-full h-[70vh] min-h-[500px] md:h-[80vh]">
      <Image
        src="/images/hero/hero-bg.jpg"
        alt="Azeites, Vinhos e Sabores de Portugal"
        fill
        priority
        className="object-cover"
      />

      <div className="hero-overlay absolute inset-0" />

      {COMMERCE_MODE === 'demo' && (
        <div className="absolute top-6 right-6 z-20">
          <Badge
            variant="outline"
            className="bg-burgundy/80 text-cream border-burgundy text-xs"
          >
            Catálogo Demonstrativo
          </Badge>
        </div>
      )}

      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center">
        <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-white font-bold leading-tight max-w-3xl">
          Azeites, Vinhos e Sabores de Portugal
        </h1>
        <p className="text-cream/80 text-base md:text-lg max-w-2xl mt-4">
          Uma seleção portuguesa de azeites, vinhos e produtos gourmet para
          consumidores, restaurantes, hotéis, lojas gourmet e importadores.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mt-8">
          <button className="btn-gold text-dark font-semibold px-8 py-3 rounded-md">
            Explorar Loja
          </button>
          <button className="bg-burgundy text-white font-semibold px-8 py-3 rounded-md hover:bg-burgundy-dark transition-colors">
            Sou Profissional
          </button>
        </div>
      </div>
    </section>
  )
}
