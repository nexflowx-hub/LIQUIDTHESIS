import {
  Droplets,
  Wine,
  ChefHat,
  Gift,
  Globe,
  Tag,
} from 'lucide-react'
import { categories } from '@/data/categories'
import type { ProductCategory } from '@/data/types'

const categoryIcons: Record<string, React.ElementType> = {
  azeites: Droplets,
  vinhos: Wine,
  gourmet: ChefHat,
  boxes: Gift,
  exportacao: Globe,
  'private-label': Tag,
}

export default function CategoriesSection() {
  return (
    <section className="bg-cream py-10 sm:py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-3 sm:px-4">
        <h2 className="font-heading text-2xl sm:text-3xl text-dark text-center">
          Categorias em Destaque
        </h2>
        <div className="section-divider mt-3 sm:mt-4" />

        <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-6 gap-2.5 sm:gap-4 mt-8 sm:mt-10">
          {categories.map((cat) => {
            const Icon = categoryIcons[cat.slug as ProductCategory] ?? Gift
            return (
              <div
                key={cat.id}
                className="bg-white rounded-lg shadow-sm p-2.5 sm:p-4 card-hover cursor-pointer"
              >
                <div className="aspect-square rounded-md overflow-hidden mb-2 sm:mb-3 product-image-zoom bg-cream/50 flex items-center justify-center">
                  <Icon className="text-muted sm:mx-auto" size={28} strokeWidth={1.5} />
                </div>
                <p className="text-xs sm:text-sm font-medium text-dark text-center leading-tight">
                  {cat.name}
                </p>
                {cat.productCount > 0 && (
                  <p className="text-[10px] sm:text-xs text-muted text-center mt-0.5">
                    {cat.productCount} produto{cat.productCount !== 1 ? 's' : ''}
                  </p>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
