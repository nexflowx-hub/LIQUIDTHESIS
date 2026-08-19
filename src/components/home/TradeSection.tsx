import {
  Package,
  Boxes,
  Globe,
  Building2,
  Gift,
  Tag,
} from 'lucide-react'
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
    <section className="bg-olive py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="font-heading text-3xl text-white">LiquidThesis Trade</h2>
        <p className="text-cream/70 mt-2">
          Soluções para restaurantes, hotéis, garrafeiras e distribuidores.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-10">
          {tradeBenefits.map((benefit) => {
            const Icon = iconMap[benefit.icon] ?? Package
            return (
              <div key={benefit.title} className="text-center">
                <div className="flex justify-center">
                  <Icon className="text-gold" size={32} />
                </div>
                <h3 className="text-white font-medium mt-3">{benefit.title}</h3>
                <p className="text-cream/60 text-sm mt-1">{benefit.description}</p>
              </div>
            )
          })}
        </div>

        <div className="text-center mt-10">
          <button className="bg-gold text-dark font-semibold px-8 py-3 rounded-md hover:bg-gold-light transition-colors">
            Pedir Cotação
          </button>
        </div>
      </div>
    </section>
  )
}
