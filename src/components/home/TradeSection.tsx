import {
  Package,
  Boxes,
  Globe,
  Building2,
  Gift,
  Tag,
} from 'lucide-react'
import Link from 'next/link'
import { tradeBenefits } from '@/data/b2b'

type LucideIcon = React.ElementType

const iconMap: Record<string, LucideIcon> = {
  Package,
  Pallet: Boxes,
  Globe,
  Building2,
  Gift,
  Tag,
}

export default function TradeSection() {
  return (
    <section className="bg-olive py-10 sm:py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-3 sm:px-4">
        <h2 className="font-heading text-2xl sm:text-3xl text-white">LiquidThesis Trade</h2>
        <p className="text-cream/70 text-sm sm:text-base mt-1.5 sm:mt-2">
          Soluções para restaurantes, hotéis, garrafeiras e distribuidores.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mt-8 sm:mt-10">
          {tradeBenefits.map((benefit) => {
            const Icon = iconMap[benefit.icon] ?? Package
            return (
              <div key={benefit.title} className="text-center px-1">
                <div className="flex justify-center">
                  <Icon className="text-gold" size={28} />
                </div>
                <h3 className="text-white font-medium text-sm sm:text-base mt-2 sm:mt-3">{benefit.title}</h3>
                <p className="text-cream/60 text-xs sm:text-sm mt-1">{benefit.description}</p>
              </div>
            )
          })}
        </div>

        <div className="text-center mt-8 sm:mt-10">
          <Link
            href="/trade/cotacao"
            className="bg-gold text-dark font-semibold px-6 sm:px-8 py-2.5 sm:py-3 rounded-md hover:bg-gold-light transition-colors text-sm sm:text-base"
          >
            Pedir Cotação
          </Link>
        </div>
      </div>
    </section>
  )
}
