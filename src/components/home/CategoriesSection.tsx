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
    <section className="bg-cream py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="font-heading text-3xl text-dark text-center">
          Categorias em Destaque
        </h2>
        <div className="section-divider mt-4" />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-10">
          {categories.map((cat) => {
            const Icon = categoryIcons[cat.slug as ProductCategory] ?? Gift
            return (
              <div
                key={cat.id}
                className="bg-white rounded-lg shadow-sm p-4 card-hover cursor-pointer"
              >
                <div className="aspect-square rounded-md overflow-hidden mb-3 product-image-zoom bg-cream flex items-center justify-center">
                  <Icon className="text-muted" size={36} strokeWidth={1.5} />
                </div>
                <p className="text-sm font-medium text-dark text-center">
                  {cat.name}
                </p>
                {cat.productCount > 0 && (
                  <p className="text-xs text-muted text-center mt-0.5">
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
