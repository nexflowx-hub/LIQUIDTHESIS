import { Leaf, Wine, Crown, CheckCircle } from 'lucide-react'
import { clubPlans } from '@/data/club'

type LucideIcon = React.ElementType

const iconMap: Record<string, LucideIcon> = {
  Leaf,
  Grape: Wine,
  Crown,
}

const cardStyles: Record<string, string> = {
  explorer: 'bg-olive text-white',
  select: 'bg-burgundy text-white',
  reserve: 'bg-dark text-cream',
}

export default function ClubSection() {
  return (
    <section className="bg-ivory py-10 sm:py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-3 sm:px-4">
        <h2 className="font-heading text-2xl sm:text-3xl text-dark">LiquidThesis Clube</h2>
        <p className="text-muted text-sm sm:text-base mt-1.5 sm:mt-2">
          Receba seleções exclusivas de vinhos e azeites todos os meses.
        </p>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mt-8 sm:mt-10">
          {clubPlans.map((plan) => {
            const Icon = iconMap[plan.icon] ?? Leaf
            const isPopular = plan.popular === true

            return (
              <div
                key={plan.id}
                className={`rounded-lg p-4 sm:p-6 relative ${cardStyles[plan.id] ?? 'bg-dark text-cream'}`}
              >
                {/* Popular badge */}
                {isPopular && (
                  <span className="absolute top-0 right-4 sm:right-6 bg-gold text-dark text-[9px] sm:text-[10px] font-bold px-2 sm:px-3 py-0.5 sm:py-1 rounded-b-lg">
                    MAIS POPULAR
                  </span>
                )}

                <Icon
                  className={isPopular ? 'text-gold' : 'text-gold'}
                  size={24}
                />

                <h3 className="font-heading text-lg sm:text-xl mt-2 sm:mt-3">{plan.name}</h3>

                <ul className="mt-3 sm:mt-4 space-y-1.5 sm:space-y-2">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-1.5 sm:gap-2">
                      <CheckCircle size={14} className="text-gold mt-0.5 shrink-0" />
                      <span className={`text-xs sm:text-sm ${isPopular ? 'text-cream/90' : 'text-cream/80'}`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <p className="text-gold text-xl sm:text-2xl font-bold mt-4 sm:mt-6">
                  €{plan.price}/{plan.period}
                </p>

                <button className="border border-cream/20 text-cream/80 px-4 sm:px-5 py-2 rounded hover:border-gold hover:text-gold transition-colors mt-3 sm:mt-4 w-full text-center text-xs sm:text-sm">
                  Brevemente
                </button>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}