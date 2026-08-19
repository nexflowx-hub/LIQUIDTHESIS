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
    <section className="bg-ivory py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="font-heading text-3xl text-dark">LiquidThesis Clube</h2>
        <p className="text-muted mt-2">
          Receba seleções exclusivas de vinhos e azeites todos os meses.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mt-10">
          {clubPlans.map((plan) => {
            const Icon = iconMap[plan.icon] ?? Leaf
            const isPopular = plan.popular === true

            return (
              <div
                key={plan.id}
                className={`rounded-lg p-6 relative ${cardStyles[plan.id] ?? 'bg-dark text-cream'}`}
              >
                {/* Popular badge */}
                {isPopular && (
                  <span className="absolute top-0 right-6 bg-gold text-dark text-[10px] font-bold px-3 py-1 rounded-b-lg">
                    MAIS POPULAR
                  </span>
                )}

                <Icon
                  className={isPopular ? 'text-gold' : 'text-gold'}
                  size={28}
                />

                <h3 className="font-heading text-xl mt-3">{plan.name}</h3>

                <ul className="mt-4 space-y-2">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <CheckCircle size={16} className="text-gold mt-0.5 shrink-0" />
                      <span className={isPopular ? 'text-cream/90 text-sm' : 'text-cream/80 text-sm'}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <p className="text-gold text-2xl font-bold mt-6">
                  €{plan.price}/{plan.period}
                </p>

                <button className="border border-cream/20 text-cream/80 px-5 py-2 rounded hover:border-gold hover:text-gold transition-colors mt-4 w-full text-center">
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
